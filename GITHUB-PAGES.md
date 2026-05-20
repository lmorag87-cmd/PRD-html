# GitHub Pages · PRD-html

仓库：<https://github.com/lmorag87-cmd/PRD-html>

## 在线地址（main + /docs 部署后）

| 说明 | URL |
|------|-----|
| **总目录** | https://lmorag87-cmd.github.io/PRD-html/ |
| 合作停车场支付 | https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/ |
| 车机 IVI 索引 | https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/hmi/hmi-pay-index-prototype.html |
| 手机 App 索引 | https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/mobile/mobile-pay-index-prototype.html |

## 开启 Pages

Settings → Pages → Branch: **main**，Folder: **/docs** → Save。

## 同步原型到 docs

```powershell
cd e:\skill_AI
.\scripts\sync-pages-docs.ps1
git add docs/ prototypes/
git commit -m "Sync prototypes"
git push
```

## 飞书 PRD 粘贴示例

```text
交互原型（GitHub Pages）：
- 总目录：https://lmorag87-cmd.github.io/PRD-html/
- 合作停车场支付 / 车机：https://lmorag87-cmd.github.io/PRD-html/cooperative-parking-pay/hmi/hmi-pay-index-prototype.html
```

## 新增 PRD 项目

见仓库根目录 `prototypes/README.md`。
