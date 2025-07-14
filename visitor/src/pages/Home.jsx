import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const res = await axios.get(
          'https://minor-charmane-anusraza123bm-0738bb06.koyeb.app/api/track'
        )
        setData(res.data.visits)
        console.log(res.data)
      } catch (error) {
        console.error('Error fetching visitor data:', error)
      }
    }

    fetchVisitorData()
  }, [])

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Visitors</h1>

        {data &&data.length === 0 ? (
          <div className="text-center text-gray-500">No visitor data found.</div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3">IP Address</th>
                  <th className="px-4 py-3">Browser</th>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((visitor, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{visitor.ip || 'N/A'}</td>
                    <td className="px-4 py-2">{visitor.browser || 'N/A'}</td>
                    <td className="px-4 py-2">{visitor.platform || 'N/A'}</td>
                    <td className="px-4 py-2">
                      {new Date(visitor.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Home
