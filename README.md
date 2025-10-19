# SGAR - 未来竞技场

一个基于React的赛博朋克风格移动端应用，结合AR体感和户外社交的竞技场平台。

## 项目特色

- **赛博朋克设计风格** - HUD圆环、霓虹色彩、玻璃拟态效果
- **移动端优先** - 响应式设计，完美适配各种屏幕尺寸
- **现代技术栈** - React 18 + CSS3 + 原生JavaScript
- **精美动效** - 悬浮动画、渐变效果、脉冲光效

## 技术栈

- **前端框架**: React 18
- **样式**: CSS3 (原生CSS，无框架依赖)
- **字体**: Inter (Google Fonts)
- **图标**: Emoji (简单易用)

## 项目结构

```
src/
├── components/
│   ├── HomePage.js          # 主页组件
│   ├── HomePage.css
│   ├── Navigation.js        # 导航栏组件
│   ├── Navigation.css
│   ├── StatsSection.js      # 数据统计卡片
│   ├── StatsSection.css
│   ├── FeaturesSection.js   # 功能特色
│   ├── FeaturesSection.css
│   ├── FeaturedActivities.js # 精选活动
│   └── FeaturedActivities.css
├── App.js                   # 主应用组件
├── App.css
├── index.js                 # 入口文件
└── index.css               # 全局样式
```

## 设计系统

### 颜色规范
- 夜空黑: `#0B0F1A`
- 霓虹蓝: `#66CCFF`
- 电光紫: `#A86CFF`
- 荧光绿: `#22D3EE`
- 成功绿: `#22C55E`
- 警示橙: `#F59E0B`
- 错误红: `#F43F5E`

### 组件风格
- 切角按钮: `border-radius: 10px`
- 胶囊芯片: `border-radius: 20px`
- 卡片圆角: `border-radius: 12-16px`
- 半透明描边: `border: 1px solid rgba(255,255,255,0.1)`

## 快速开始

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm start
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 功能特性

### 主页功能
- 固定导航栏（玻璃拟态效果）
- 数据统计卡片（50K+用户、20+城市、500+竞技场）
- 功能特色展示（随时随地、强社交、安全合规）
- 精选活动横向滚动卡片
- 完全响应式设计

### 设计亮点
- 赛博朋克风格UI设计
- 霓虹渐变文字效果
- 玻璃拟态卡片设计
- 悬浮动画和光效
- 移动端优化布局

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 开发计划

- [ ] 地图预约页面
- [ ] 用户登录注册
- [ ] 社区功能
- [ ] 等级系统
- [ ] 团建合作页面
- [ ] PWA支持

## 许可证

MIT License
