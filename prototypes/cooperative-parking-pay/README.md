# cooperative-parking-pay · 停车场支付（已对接场站）

- **PRD**：[飞书文档](https://baic.feishu.cn/docx/VQX4ddkiboiG4Gxo2V1cAv7DnKf)
- **架构**：`architecture.md`
- **车机原型**：`hmi/hmi-pay-index-prototype.html`（SCR-PAY-00～12）
- **支付通道（PRD 口径）**：
  - **ETC**：已接入的 ETC 能力
  - **无感支付**：已接入第三方支付平台的无感停车接口
  - **扫码兜底**：车机展示缴费码，车主用个人手机支付宝/微信完成
- **Out of Scope**：手机 App 支付界面（`mobile/` 目录仅保留历史草稿，入口已关闭）
- **壳层**：车机各屏 **统一无** `#stage` 内左侧栏；跨屏用顶栏 proto-nav 索引（见 `../HMI-PITFALLS.md`）
