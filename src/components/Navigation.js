import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const navItems = ['玩法', '安全', '地图预约', '社区', '等级', '团建'];

  return (
    <nav className="navigation glass-effect">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/new-logo.png" alt="SGAR" className="logo-image" />
        </div>

        {/* 导航菜单 */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <button key={index} className="nav-item">
              {item}
            </button>
          ))}
        </div>

        {/* 右侧按钮 */}
        <div className="nav-actions">
          <button className="login-btn gradient-btn">
            登录
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
