# 部署说明

## GitHub Pages 设置步骤

### 1. 启用 GitHub Pages
1. 进入您的 GitHub 仓库：https://github.com/wlin050407/sgar
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**
5. 保存设置

### 2. 检查部署状态
- 进入 **Actions** 标签查看 workflow 运行状态
- 如果 workflow 成功运行，网站将在几分钟内可用
- 访问地址：https://wlin050407.github.io/sgar

### 3. 如果仍然无法访问
可能的原因：
1. **GitHub Pages 未启用** - 需要按照步骤1启用
2. **Workflow 失败** - 检查 Actions 页面的错误信息
3. **权限问题** - 确保仓库是公开的
4. **缓存问题** - 等待几分钟或清除浏览器缓存

### 4. 手动部署（备选方案）
如果 GitHub Actions 有问题，可以手动部署：

```bash
# 安装 gh-pages
npm install -g gh-pages

# 构建项目
npm run build

# 部署到 GitHub Pages
gh-pages -d build
```

## 当前状态
- ✅ Workflow 已配置
- ✅ 构建测试通过
- ⏳ 等待 GitHub Pages 启用
- ⏳ 等待首次部署完成
