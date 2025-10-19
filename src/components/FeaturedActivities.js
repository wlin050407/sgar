import React from 'react';
import './FeaturedActivities.css';

const FeaturedActivities = () => {
  const activities = [
    {
      id: 1,
      title: '赤州中心',
      location: '市中心竞技场',
      date: '5月6日',
      time: '14:10-16:00',
      price: '$120',
      participants: 8,
      maxParticipants: 12,
      image: '/sgar/assets/images/activity-1.jpg',
      difficulty: '中级'
    },
    {
      id: 2,
      title: '大巴家',
      location: '户外训练场',
      date: '5月7日',
      time: '10:00-12:00',
      price: '$90',
      participants: 5,
      maxParticipants: 10,
      image: '/sgar/assets/images/activity-2.jpg',
      difficulty: '初级'
    },
    {
      id: 3,
      title: '王明伟',
      location: '科技园区',
      date: '5月8日',
      time: '19:00-21:00',
      price: '$150',
      participants: 12,
      maxParticipants: 15,
      image: '/sgar/assets/images/activity-3.jpg',
      difficulty: '高级'
    },
    {
      id: 4,
      title: '夜战模式',
      location: '地下竞技场',
      date: '5月9日',
      time: '20:00-22:00',
      price: '$180',
      participants: 6,
      maxParticipants: 8,
      image: '/sgar/assets/images/activity-4.jpg',
      difficulty: '高级'
    }
  ];

  return (
    <section className="featured-activities">
      <div className="activities-container">
        <h2 className="section-title">精选活动</h2>
        <div className="activities-scroll">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card glass-effect">
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="difficulty-badge">
                  {activity.difficulty}
                </div>
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-location">{activity.location}</p>
                <div className="activity-time">
                  <span className="date">{activity.date}</span>
                  <span className="time">{activity.time}</span>
                </div>
                <div className="activity-participants">
                  <div className="participants-info">
                    <span className="participants-count">
                      {activity.participants}/{activity.maxParticipants}人
                    </span>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${(activity.participants / activity.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="activity-footer">
                  <div className="price">{activity.price}</div>
                  <button className="book-btn gradient-btn">
                    立即预约
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedActivities;
