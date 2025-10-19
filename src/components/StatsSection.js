import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      number: '50K+',
      label: '日活跃用户',
      icon: 'USERS'
    },
    {
      number: '20+',
      label: '城市覆盖',
      icon: 'CITY'
    },
    {
      number: '500+',
      label: '竞技场',
      icon: 'TARGET'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card glass-effect">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number gradient-text">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
