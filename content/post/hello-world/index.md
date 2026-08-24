---
title: 你好，世界
date: 2026-08-24
description: 我的第一篇博客文章。
tags:
    - 随笔
categories:
    - 随笔
---

欢迎来到我的博客！这是第一篇测试文章，用来验证网站已经正常工作。

<!--more-->

## 这是什么？

这是我用 Hugo + Stack 主题搭建的个人博客，托管在 Cloudflare Pages 上。

## 如何发布新文章？

在 `content/post/` 目录下新建一个文件夹，比如 `content/post/我的新文章/index.md`，然后写 Markdown 内容即可。

```bash
# 也可以使用命令快速创建草稿
hugo new post/my-new-post/index.md
```

文章写好并推送到 GitHub 后，Cloudflare Pages 会自动重新构建并部署，整个过程不需要任何手动操作。
