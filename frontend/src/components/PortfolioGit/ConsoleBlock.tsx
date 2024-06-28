import React, { useState, useRef, useEffect } from 'react'

const ConsoleBlock = () => {

  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const consoleName = <><span className="text-teal-400">user@portfolio:</span><span className="text-teal-300">~$ </span></>;
  const welcomeConsole = <>{consoleName}<span>Welcome to the Portfolio console, use help command!</span></>;
  const helpCommand = <><span>help &emsp;&emsp; Command list</span><br/><span>clear &emsp;&emsp; Törlés</span></>
  
  const [history, setHistory] = useState([
    welcomeConsole
  ]);

// Konzol parancsok kezelése

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      if (input === "clear") {
        setInput('')
        setHistory([welcomeConsole]);
      } else if (input === "help") {
        setHistory([...history, <>{consoleName}{input}</>, helpCommand]);
        setInput('');
      } else if (input === "tech") {
        setHistory([...history, <>{consoleName}{input}</>, ])
      }
      else {
        setHistory([...history, <>{consoleName}{input}</>]);
        setInput('');
      }
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Tech adatok lekérése

  
  return (
    <div className="dark:bg-gray-900 bg-gray-800 w-full rounded-lg shadow-lg" onClick={handleClick}>
      <div className="bg-gray-700 flex items-center justify-between p-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm">Terminal</div>
        <div className="w-3"></div>
      </div>
      <div className="p-4 h-96 overflow-auto" onClick={handleClick}>
        <div className="whitespace-pre-wrap text-slate-400">
          {history.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div className="flex">
            {consoleName}
            <input
              ref={inputRef}
              className="dark:bg-gray-900 bg-gray-800 text-fuchsia-600 focus:outline-none flex-1"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsoleBlock