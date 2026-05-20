(function () {
  /**
   * App 只读镜像 · 顺序对齐 PRD §4b / architecture：
   * 01 会话 → 02 支付结果 → 03 离场引导 → 04 悬挂/弱网
   */
  var ITEMS = [
    { href: "mobile-pay-index-prototype.html", label: "索引" },
    { href: "mobile-pay-pg-01-session-prototype.html", label: "01 会话" },
    { href: "mobile-pay-pg-02-result-prototype.html", label: "02 结果" },
    { href: "mobile-pay-pg-03-exit-prototype.html", label: "03 离场" },
    { href: "mobile-pay-pg-04-pending-prototype.html", label: "04 悬挂" }
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
