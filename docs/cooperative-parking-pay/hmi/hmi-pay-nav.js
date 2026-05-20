(function () {
  /**
   * 顺序对齐 PRD / architecture.md：
   * M-01 识别(00) → 识别失败(01-F) → M-02 卡片(01) → 计费(02) → 扫码兜底(06)
   * → M-05 处理(05) → 成功(07) / 支付失败(08) / 悬挂(09)
   * → M-06 闸机(10) → 离场(11) → 结束(12)
   * 注：SCR-03/04 无独立原型，索引中不占位。
   */
  var ITEMS = [
    { href: "hmi-pay-index-prototype.html", label: "索引" },
    { href: "hmi-pay-scr-00-recognizing-prototype.html", label: "00 识别中" },
    { href: "hmi-pay-scr-01-fail-prototype.html", label: "01-F 识别失败" },
    { href: "hmi-pay-scr-01-card-prototype.html", label: "01 停车卡片" },
    { href: "hmi-pay-scr-02-billing-prototype.html", label: "02 计费说明" },
    { href: "hmi-pay-scr-06-qr-prototype.html", label: "06 扫码兜底" },
    { href: "hmi-pay-scr-05-processing-prototype.html", label: "05 支付处理" },
    { href: "hmi-pay-scr-07-success-prototype.html", label: "07 支付成功" },
    { href: "hmi-pay-scr-08-fail-prototype.html", label: "08 支付失败" },
    { href: "hmi-pay-scr-09-pending-prototype.html", label: "09 悬挂补单" },
    { href: "hmi-pay-scr-10-gate-prototype.html", label: "10 闸机强提示" },
    { href: "hmi-pay-scr-11-exit-prototype.html", label: "11 离场引导" },
    { href: "hmi-pay-scr-12-ended-prototype.html", label: "12 会话结束" }
  ];

  var nav = document.getElementById("proto-nav");
  if (!nav) return;

  var current = document.body.getAttribute("data-nav-current") || "";
  if (!current) {
    var parts = location.pathname.split("/");
    current = parts[parts.length - 1] || "";
  }

  nav.innerHTML = ITEMS.map(function (item) {
    var cls = item.href === current ? ' class="on"' : "";
    return '<a href="' + item.href + '"' + cls + ">" + item.label + "</a>";
  }).join("");
})();
