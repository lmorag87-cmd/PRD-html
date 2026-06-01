# GitHub Pages · PRD-html

仓库：<https://github.com/lmorag87-cmd/PRD-html>

## 在线地址（main + /docs 部署后）

| 说明 | URL |
|------|-----|
| **总目录** | https://lmorag87-cmd.github.io/PRD-html/ |
| 停车场找车 · 总览 | https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/ |
| 停车场找车 · 架构图 | https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/hmi/hmi-prd-uc75-findcar-architecture-detail.html?v=20260602 |
| 找车 · **车机索引（推荐）** | https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/hmi/hmi-find-index.html?v=20260602 |
| 找车 · 手机会话卡 | https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/mobile/mobile-uc-find-1-session-prototype.html?v=20260602 |
| 找车 · 无网找车（离线） | https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/mobile/mobile-uc-find-1-offline-prototype.html?v=20260602 |
| 停车场支付（已对接场站） | https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/ |
| 车机 IVI 索引 | https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/hmi/hmi-pay-index-prototype.html |

> **V2026.06.02**：仅驻车后拍照；入库段已下线；新增离线可用（§7.5.3）。旧链接 `?v=20260521` 可能缓存旧版，请改用上表带 `?v=20260602` 的 URL。

## 开启 Pages

Settings → Pages → Branch: **main**，Folder: **/docs** → Save。

## 同步原型到 docs

```powershell
cd e:\skill_AI
.\scripts\sync-pages-docs.ps1 -Project parking-findcar-uc75
git add docs/ prototypes/
git commit -m "Sync parking-findcar HMI: parking-only + offline v20260602"
git push
```

## 飞书 PRD 粘贴示例

```text
交互原型（GitHub Pages）：
- 车机索引：https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/hmi/hmi-find-index.html?v=20260602
- 手机找车：https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/mobile/mobile-uc-find-1-session-prototype.html?v=20260602
- 无网找车：https://lmorag87-cmd.github.io/PRD-html/parking-findcar-uc75/mobile/mobile-uc-find-1-offline-prototype.html?v=20260602
```

## 新增 PRD 项目

见仓库根目录 `prototypes/README.md`。
