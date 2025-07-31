import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BrowserPieChart from '../Components/BrowserPieChart';

const Dashboard = () => {
  const [chatData, setChartData] = useState([]); // ✅ FIX: array

  useEffect(() => {
    const Data = async () => {
      try {
        const res = await axios.get('https://minor-charmane-anusraza123bm-0738bb06.koyeb.app/api/visitor');
        console.log(res.data.visits); // Confirm it's an array
        setChartData(res.data.visits); // ✅ pass array only
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    Data();
  }, []);

  return (
    <>
  <div className='  '>

      <BrowserPieChart visits={chatData} field="browser" />
    </div>
    <div>

            <BrowserPieChart visits={chatData} field="ip" />
    </div>
    <div>

                  <BrowserPieChart visits={chatData} field="device" /> 
    </div>

    </>
  );
};

export default Dashboard;