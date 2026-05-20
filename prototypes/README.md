# PRD 交互原型（源码）

与 GitHub Pages 发布目录 `docs/` 一一对应，按 **PRD 项目** 分子目录。

## 目录约定

```text
prototypes/
  <project-slug>/          # 与 docs/<project-slug>/ 同名，kebab-case
    README.md              # PRD 链接、范围说明
    architecture.md        # HMI 信息架构（可选）
    hmi/                   # 车机 1920×1080
    mobile/                # 手机 390×844（若无 App 可省略）
```

## 已收录

| 目录 | 说明 |
|------|------|
| `cooperative-parking-pay/` | 合作停车场入场—支付—离场（F-01～F-12） |

## 新增 PRD 原型时

1. 复制本结构：`prototypes/<new-slug>/hmi/` …
2. 运行 `scripts/sync-pages-docs.ps1`（或 `-Project <slug>`）
3. 在 `docs/index.html` 增加入口卡片
4. push 后 GitHub Pages 自动更新

## 同步到 Pages

```powershell
.\scripts\sync-pages-docs.ps1
# 或仅同步某一项目：
.\scripts\sync-pages-docs.ps1 -Project cooperative-parking-pay
```

## 车机原型避坑（必读）

完整清单见 **[HMI-PITFALLS.md](./HMI-PITFALLS.md)**；Cursor 规则：`.cursor/rules/hmi-prototype-html.mdc`。

摘要：顶栏索引用共用 `hmi-pay-nav.js`（13 项全量）、索引在 `#stage` 外；布局只信 `hmi-pay-proto-common.css`，禁止各页内联 `body { align-items:center }`；发布前 sync css/js 并抽查 00/01/05/08。
