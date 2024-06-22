import React from 'react'

const ConsoleBlock = () => {
  return (
    <div className="bg-gray-800 w-full rounded-lg shadow-xl">
      <div className="bg-gray-700  flex items-center justify-between p-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm">Terminal</div>
        <div className="w-3"></div>
      </div>
      <div className="p-4 h-96 overflow-auto ">
        <div className="whitespace-pre-wrap">
          <div>
            <span className="text-fuchsia-600">user@ubuntu:</span>
            <span className="text-blue-500">~$</span>
            <span className='text-slate-400'> Welcome to the Portfolio project</span>
          </div>
          <div>
            <code className='text-cyan-400'>
              {'{'}
              <br />&nbsp;Containerization: true,
              <br />
              &nbsp;Technologies
              &nbsp;{'{'}
              <br />&nbsp;&nbsp;Frontend
              &nbsp;{'{'}
              <br />&nbsp;&nbsp;&nbsp;Framework: React - TypeScript, 
              <br />&nbsp;&nbsp;&nbsp;Styling: Tailwind CSS
              <br />&nbsp;&nbsp;{'},'}
              <br />&nbsp;&nbsp;Backend: Java,
              <br />&nbsp;&nbsp;Database: MySql
              <br />&nbsp;{'},'}
              <br />{'}'}
            </code>
          </div>
          <div>
            <span className="text-fuchsia-600">user@ubuntu:</span>
            <span className="text-blue-500">~$</span>
            <span className='text-slate-400'> These are the specifications of the profjet.</span>
          </div>
          <div>
            <span className="text-fuchsia-600">user@ubuntu:</span>
            <span className="text-blue-500">~$</span>
            <span> </span>
            <span className="inline-block bg-fuchsia-600 animate-blink text-fuchsia-600 font-semibold px-1">|</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsoleBlock