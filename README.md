# Nav

xihan123 的个人导航站，展示个人项目、技术栈和站点导航。

基于 **Nuxt 4** + **Tailwind CSS v4** + **Vue 3** 构建的单页静态站点，通过 `nuxt generate` 生成纯静态页面部署。

## 功能

- 个人资料展示（头像、简介、位置）
- 站点导航链接
- GitHub Stats 统计卡片
- 技术栈展示（前端、后端、数据库、工具）
- Pinned 项目卡片
- CDN 赞助商展示
- 深色主题，`oklch()` 色彩系统
- 流星动画背景

## 快速开始

安装依赖：

```bash
npm install
```

启动开发服务器（`localhost:3000`）：

```bash
npm run dev
```

## 构建部署

生成静态站点（推荐）：

```bash
npm run generate
```