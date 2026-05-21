(function () {
  /**
   * App：01 停车详情 + 05/02 扫码收银台 + 03/04 支付结果
   */
  var ITEMS = [
    { href: "mobile-pay-index-prototype.html", label: "索引" },
    { href: "mobile-pay-pg-01-session-prototype.html", label: "01 停车详情" },
    { href: "mobile-pay-pg-05-alipay-prototype.html", label: "05 支付宝" },
    { href: "mobile-pay-pg-02-result-prototype.html", label: "02 微信" },
    { href: "mobile-pay-pg-03-exit-prototype.html", label: "03 成功" },
    { href: "mobile-pay-pg-04-pending-prototype.html", label: "04 处理中" }
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
