import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { DashboardCard } from '../UIComponents/DashboardCard';
import '../Styles/Dashboard.css';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

  const data = [
    {
      name: 'Mon',
      sales: 1500,
      expenses:1300,
      volume: 30,
    },
    {
      name: 'Tue',
      sales: 1000,
      expenses:1100,
      volume: 50,
    },
    {
      name: 'Wed',
      sales: 800,
      expenses:1900,
      volume: 10,
    },
    {
      name: 'Thu',
      sales: 3500,
      expenses:2300,
      volume: 70,
    },
    {
      name: 'Fri',
      sales: 300,
      expenses:2000,
      volume: 40,
    },
    {
      name: 'Sat',
      sales: 2800,
      expenses:2700,
      volume: 5,
    },
    {
      name: 'Sun',
      sales: 1300,
      expenses:1800,
      volume: 90,
    },
  ];

  return (
    <section className='dashboard'>
      <DashboardCard icon={faCoins} backgroundColor="#6929CB" textNumber="3,456" textDescription="Total Sales Today"/>
      <DashboardCard icon={faSackDollar} backgroundColor="#0384E9" textNumber="1,500" textDescription="Expenses In 7 Days"/>
      <DashboardCard icon={faUsers} backgroundColor="#21AC54" textNumber="20" textDescription="Total Registered Staff"/>
      <DashboardCard icon={faBoxArchive} backgroundColor="#CA7B18" textNumber="256" textDescription="Products On Hand"/>

      <div className='dashboard__bar-chart'>
        <div className='dashboard__bar-chart-header'>
          <p className='dashboard__bar-chart-title'>Sales</p>
          <p className='dashboard__bar-chart-subtitle'>In A Week</p>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sales" fill="#4B74FF" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='dashboard__best-sellers'>
        <p className='dashboard__best-sellers-title'>Best Sellers</p>
        <table className='dashboard__best-sellers-table'>
          <thead>
          <th className='dashboard__table-th'>ID</th>
            <th className='dashboard__table-th'>Name</th>
          </thead>
          <tbody>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>1</td>
              <td className='dashboard__table-td'>Amazon Pump</td>
            </tr>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>2</td>
              <td className='dashboard__table-td'>Limestones</td>
            </tr>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>3</td>
              <td className='dashboard__table-td'>Aerator</td>
            </tr>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>4</td>
              <td className='dashboard__table-td'>Substrate</td>
            </tr>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>5</td>
              <td className='dashboard__table-td'>Filter</td>
            </tr>
            <tr className='dashboard__table-tr'>
              <td className='dashboard__table-td'>6</td>
              <td className='dashboard__table-td'>Plantation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='dashboard__bar-chart'>
        <div className='dashboard__bar-chart-header'>
          <p className='dashboard__bar-chart-title'>Expenses</p>
          <p className='dashboard__bar-chart-subtitle'>In A Week</p>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="expenses" fill="#4B74FF" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='dashboard__pie-chart'>
        <div className='dashboard__pie-chart-header'>
          <p className='dashboard__pie-chart-title'>Customer Volume</p>
          <p className='dashboard__pie-chart-subtitle'>In A Week</p>
        </div>
          <ResponsiveContainer width="100%" height="80%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar name="Customer Volume" dataKey="volume" stroke="#4B74FF" fill="#4B74FF" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
      </div>
    </section>
  )
}

export default Dashboard