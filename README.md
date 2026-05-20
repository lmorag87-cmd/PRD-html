# PRD-html

飞书 PRD 对应的 **可点击 HTML 交互原型**，通过 [GitHub Pages](https://pages.github.com/) 免费发布。

**在线入口（部署后）**：https://lmorag87-cmd.github.io/PRD-html/

## 仓库结构

```text
docs/                          # Pages 发布根目录（勿改层级含义）
  index.html                   # 全部 PRD 项目目录
  cooperative-parking-pay/     # 项目：合作停车场支付
    index.html
    hmi/
    mobile/

prototypes/                    # 开发源码（与 docs 下项目同名）
  cooperative-parking-pay/
    architecture.md
    hmi/
    mobile/

scripts/sync-pages-docs.ps1    # 将 prototypes 同步到 docs
```

## 新增一个 PRD 原型

1. 新建 `prototypes/<project-slug>/`（`hmi/`、可选 `mobile/`）
2. 新建 `docs/<project-slug>/index.html`（可参考现有项目）
3. 在 `docs/index.html` 增加链接
4. 执行 `.\scripts\sync-pages-docs.ps1` 后 commit & push

## 本地预览

用浏览器打开 `docs/index.html` 或各项目下的 `hmi/*-index-prototype.html`。

## 说明

- 公开仓库：有链接即可阅读；不授予 Write 则他人不可改本仓。
- 示例数据，非真实支付。

详细步骤见 [GITHUB-PAGES.md](./GITHUB-PAGES.md)。
