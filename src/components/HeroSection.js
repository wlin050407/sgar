import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/assets/images/new-logo.png" alt="SGAR" className="hero-logo-image" />
          </div>
          <h1 className="hero-title">
            <span className="title-main">未来竞技场</span>
            <span className="title-subtitle">潮流 × AR体感 × 户外社交</span>
          </h1>
          <div className="hero-actions">
            <button className="hero-btn primary">
              立即预约
            </button>
            <button className="hero-btn secondary">
              玩法介绍
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">累计玩家</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">城市覆盖</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">竞技场</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
