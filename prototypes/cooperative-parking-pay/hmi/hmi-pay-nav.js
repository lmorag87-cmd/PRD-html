(function () {
  var ITEMS = [
    { href: "hmi-pay-index-prototype.html", label: "索引" },
    { href: "hmi-pay-scr-00-recognizing-prototype.html", label: "00 识别" },
    { href: "hmi-pay-scr-01-fail-prototype.html", label: "01 失败" },
    { href: "hmi-pay-scr-01-card-prototype.html", label: "01 卡片" },
    { href: "hmi-pay-scr-02-billing-prototype.html", label: "02 计费" },
    { href: "hmi-pay-scr-05-processing-prototype.html", label: "05 处理中" },
    { href: "hmi-pay-scr-06-qr-prototype.html", label: "06 扫码" },
    { href: "hmi-pay-scr-07-success-prototype.html", label: "07 成功" },
    { href: "hmi-pay-scr-08-fail-prototype.html", label: "08 失败" },
    { href: "hmi-pay-scr-09-pending-prototype.html", label: "09 悬挂" },
    { href: "hmi-pay-scr-10-gate-prototype.html", label: "10 闸机" },
    { href: "hmi-pay-scr-11-exit-prototype.html", label: "11 离场" },
    { href: "hmi-pay-scr-12-ended-prototype.html", label: "12 结束" }
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
