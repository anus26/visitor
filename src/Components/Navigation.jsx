import React from 'react'

const Navigation = () => {
  return (
  <>
<nav className="bg-white border-b border-gray-300 shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    
    {/* Logo Section */}
    <div className="flex items-center gap-3">
      <img src="./images/report.png" alt="Logo" className="w-10 h-10 rounded-full" />
      <h1 className="text-xl font-bold text-gray-800">
      <a href="/">Visitor Analytics</a>
      </h1>
    </div>

    {/* Navigation Links */}
    <div className="flex gap-6 items-center">
      <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition">
        Dashboard
      </a>
      <a href="/visitor" className="text-gray-700 hover:text-blue-600 font-medium transition">
        Visitors
      </a>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navigation