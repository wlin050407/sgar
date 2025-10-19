import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'LOCATION',
      title: '随时随地',
      subtitle: '场景多变',
      description: '支持室内外多种场景，灵活选择游戏场地'
    },
    {
      icon: 'SOCIAL',
      title: '强社交',
      subtitle: '等级可视',
      description: '完善的等级系统和社交功能，让竞技更有趣'
    },
    {
      icon: 'SHIELD',
      title: '安全合规',
      subtitle: '权益与保险',
      description: '专业教官指导，完善的保险保障，安全第一'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              {feature.icon}
            </div>
            <div className="feature-content">
              <div className="feature-title">
                <span className="title-main">{feature.title}</span>
                <span className="title-sub">{feature.subtitle}</span>
              </div>
              <div className="feature-description">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
