# 浙江智慧光健康科学研究中心 · 官网

Zhejiang Research Center for Smart Light and Health — official website.

中英双语、纯静态、零构建的研究中心官网。覆盖关于中心、团队、研究方向、科研成果、科普教育、活动与参与、新闻与联系。

## 技术

- 纯静态 HTML / CSS / 原生 JS，无构建步骤
- 中英双语：`data-zh` / `data-en` 属性 + `js/main.js` 一键切换（localStorage 记忆）
- 响应式，极简学术风（暖白 + 深靛蓝 + 暖光金，纯线条图标）

## 结构

```
index.html             首页
chengguo.html          科研成果专页（标准 / 专利 / 论文，可展开）
standard-wearable.html 标准详情页范式
css/styles.css         样式
js/main.js             双语切换 + 移动端菜单
netlify.toml           Netlify 部署配置（publish = ".")
```

## 部署

纯静态站，Netlify 连接本仓库即可自动部署（发布目录为根目录 `.`）。
