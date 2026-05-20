# 车机 / 手机 HTML 原型 · 避坑清单

> Cursor 规则：`.cursor/rules/hmi-prototype-html.mdc`（编辑 `prototypes/**` 时自动提示）

## 曾出现的问题（勿再犯）

| 问题 | 原因 | 正确做法 |
|------|------|----------|
| 部分屏没有全量索引 / 05、08「像没改」 | 旧版页内手写少量链接，或 `fixed` 索引挡住舞台 | 共用 `hmi-pay-nav.js` + 空 `#proto-nav`；索引在 `#stage` **外** |
| 00 与 01 索引/舞台位置不一致 | 各页内联 `body { align-items:center }` 覆盖公共样式 | 布局**只**写进 `hmi-pay-proto-common.css` |
| 索引字太小 | 样式散落在各页 | 只改 common.css（当前 16px） |
| 线上无索引样式 | sync 只拷 html，未拷 css/js | `sync-pages-docs.ps1` 同步 `hmi-pay-proto-common.css`、`hmi-pay-nav.js` |
| aria-label 乱码 | PowerShell 默认编码 | 读写文件用 UTF-8 **无 BOM** |
| 个别屏状态栏被挡 | `proto-nav { position:fixed }` 在舞台内 | 参考 `hmi-pay-scr-06`：`demo-wrap` + sticky |
| 仅 01 有左侧栏、其它屏没有 | 单屏抄了旧模板 | **全无**：本套 pay 原型不在 `#stage` 内做 `aside.nav` |

## 固定结构（合作停车场 pay 系列）

```text
body.hmi-proto-screen
  └── .demo-wrap          ← 宽 1920px，顶对齐
        ├── #proto-nav    ← hmi-pay-nav.js 填 13 项
        └── #stage        ← 1920×1080，屏内 UI（无左侧 nav 侧栏）
```

## 发布前自检

1. 抽查 **00、01、05、08**（及刚改过的屏）：索引与舞台同宽、同顶对齐  
2. 索引 **13 项**齐全，当前屏 `on` 高亮  
3. 已跑 `.\scripts\sync-pages-docs.ps1`，`docs/.../hmi/` 含最新 html/css/js  

## 新屏模板

以 `cooperative-parking-pay/hmi/hmi-pay-scr-06-qr-prototype.html` 为外壳参考；勿复制带 `position:fixed` 的旧 `proto-nav` 片段。
