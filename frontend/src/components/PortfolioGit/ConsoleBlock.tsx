import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';




interface TechCard {
  id: number;
  name: string;
  icon: string;
}

const ConsoleBlock: React.FC = () => {

  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const consoleName = <><span className="text-teal-400">user@portfolio:</span><span className="text-teal-200">~$ </span></>;
  const welcomeConsole = <>{consoleName}<span>Welcome to the Portfolio console, use help command!</span></>;
  const helpCommand = <><span>help &emsp;&emsp; Command list</span><br/><span>clear &emsp;&emsp; Törlés</span><br/><span>tech &emsp;&emsp; Technológiák</span><br/><span>contact &emsp;&emsp; Elérhetőségek</span></>
  const techListFirstRow = <><span>Id&emsp;&emsp;Name</span></>
  const contactList = <><span>tel.:&emsp;&emsp;+36 0000000</span><br/><span>email:&emsp;&emsp;pausdani4@gmail.com</span></>
  
  const [history, setHistory] = useState([welcomeConsole]);

// Konzol parancsok kezelése

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {

      if (input === "clear") {
        setHistory([welcomeConsole]);
      } else if (input === "help") {
        setHistory([...history, <>{consoleName}{input}</>, helpCommand]);
      } else if (input === "tech") {
        setHistory([...history, <>{consoleName}{input}</>, techListFirstRow, <>{names}</>])
      } else if (input === "contact") {
        setHistory([...history, <>{consoleName}{input}</>, contactList])
      }
      else {
        setHistory([...history, <>{consoleName}{input}</>]);
      }

      setInput('')
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Tech adatok lekérése

  const [names, setNames] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TechCard[]>('http://localhost:8080/tech');
        const nameList = response.data.map(item => (
          <div key={item.id}><span>{item.id}</span>&emsp;&emsp;<span>{item.name}</span><br/></div>
        ));
        setNames(nameList);
      } catch (err) {
        setError('Nem sikerült betölteni az adatokat.');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  
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
      <div className="p-4 h-96 overflow-auto " onClick={handleClick}>
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