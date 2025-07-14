import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gray-100 text-center py-4 border-t border-gray-300 mt-10">
  <p className="text-sm text-gray-600">
    © {new Date().getFullYear()} Visitor Analytics System. All rights reserved.
  </p>
</footer>

  )
}

export default Footer