import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['玩法', '安全', '地图预约', '社区', '等级', '团建'];
  const logoSrc = `${process.env.PUBLIC_URL || ''}/assets/images/new-logo.png`;

  return (
    <nav className="navigation glass-effect">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logoSrc} alt="SGAR" className="logo-image" />
        </div>

        {/* 导航菜单 - 桌面端显示 */}
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <button key={index} className="nav-item">
              {item}
            </button>
          ))}
        </div>

        {/* 右侧按钮（桌面端） */}
        <div className="nav-actions">
          <button className="login-btn gradient-btn">登录</button>
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
          aria-label="打开导航菜单"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-items">
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
          <button className="login-btn gradient-btn" onClick={() => setIsMenuOpen(false)}>
            登录
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;