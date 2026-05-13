'use client';

import { Users, FileText, MessageSquare, Wrench, Star } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import './page.css';

const trafficData = [
  { name: 'Jan', visitors: 3000 },
  { name: 'Feb', visitors: 2800 },
  { name: 'Mar', visitors: 3200 },
  { name: 'Apr', visitors: 9000 },
  { name: 'May', visitors: 5000 },
  { name: 'Jun', visitors: 6000 },
  { name: 'Jul', visitors: 3000 },
  { name: 'Aug', visitors: 5500 },
  { name: 'Sep', visitors: 4900 },
  { name: 'Oct', visitors: 6500 },
  { name: 'Nov', visitors: 6000 },
  { name: 'Dec', visitors: 6500 },
];

const serviceData = [
  { name: 'AC Install', value: 40 },
  { name: 'Repair', value: 30 },
  { name: 'Maintenance', value: 20 },
  { name: 'Ducts', value: 10 },
];

const COLORS = ['#8f3e1b', '#c25e28', '#e89e7c', '#faece5'];

const performanceData = [
  { name: 'Week 1', value: 60 },
  { name: 'Week 2', value: 98 },
  { name: 'Week 3', value: 40 },
  { name: 'Week 4', value: 80 },
];

export default function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard Overview</h1>
          <p className="page-subtitle">Welcome back, Sarah. Here's what's happening today.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card stat-card">
          <div className="stat-info">
            <span className="stat-label">Total Visitors</span>
            <span className="stat-value">48,392</span>
          </div>
          <div className="stat-icon"><Users size={24} /></div>
        </div>
        <div className="card stat-card">
          <div className="stat-info">
            <span className="stat-label">Quote Requests</span>
            <span className="stat-value">1,284</span>
          </div>
          <div className="stat-icon"><FileText size={24} /></div>
        </div>
        <div className="card stat-card">
          <div className="stat-info">
            <span className="stat-label">Messages</span>
            <span className="stat-value">376</span>
          </div>
          <div className="stat-icon"><MessageSquare size={24} /></div>
        </div>
        <div className="card stat-card">
          <div className="stat-info">
            <span className="stat-label">Active Services</span>
            <span className="stat-value">12</span>
          </div>
          <div className="stat-icon"><Wrench size={24} /></div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="card chart-card">
          <h2 className="chart-title">Visitor Traffic</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)'}} />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card">
          <h2 className="chart-title">Inquiries by Service</h2>
          <div className="chart-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="card chart-card">
          <h2 className="chart-title">Monthly Quote Performance</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-text-muted)'}} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card chart-card">
          <h2 className="chart-title">Top Visitors City</h2>
          <div className="city-list">
            <div className="city-item">
              <span className="city-name">Austin</span>
              <span className="city-count">450</span>
            </div>
            <div className="city-item">
              <span className="city-name">Round Rock</span>
              <span className="city-count">156</span>
            </div>
            <div className="city-item">
              <span className="city-name">Cedar Park</span>
              <span className="city-count">79</span>
            </div>
            <div className="city-item">
              <span className="city-name">Georgetown</span>
              <span className="city-count">35</span>
            </div>
            <div className="city-item">
              <span className="city-name">Pflugerville</span>
              <span className="city-count">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
