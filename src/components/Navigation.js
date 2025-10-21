import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['玩法', '安全', '地图预约', '社区', '等级', '团建'];

  return (
    <nav className="navigation glass-effect">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/sgar/assets/images/new-logo.png" alt="SGAR" className="logo-image" />
        </div>

        {/* 导航菜单 - 桌面端显示 */}
        <div id="mobile-menu" className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
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

        {/* 移动端菜单开关 */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
      {/* 遮罩层（仅移动端） */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navigation;