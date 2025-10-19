import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const navItems = ['玩法', '安全', '地图预约', '社区', '等级', '团建'];

  return (
    <nav className="navigation glass-effect" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.95)',
      borderBottom: '2px solid #66CCFF',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      visibility: 'visible',
      opacity: 1
    }}>
      <div className="nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 16px'
      }}>
        {/* Logo */}
        <div className="nav-logo">
          <img src="/sgar/assets/images/new-logo.png" alt="SGAR" className="logo-image" style={{height: '40px'}} />
        </div>

        {/* 导航菜单 */}
        <div className="nav-menu" style={{display: 'none'}}>
          {navItems.map((item, index) => (
            <button key={index} className="nav-item">
              {item}
            </button>
          ))}
        </div>

        {/* 右侧按钮 */}
        <div className="nav-actions">
          <button className="login-btn gradient-btn" style={{
            background: 'linear-gradient(45deg, #66CCFF, #A86CFF)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '14px'
          }}>
            登录
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
