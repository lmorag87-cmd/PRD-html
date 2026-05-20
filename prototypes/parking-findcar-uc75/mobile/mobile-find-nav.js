(function () {
  var ITEMS = [
    { href: "../hmi/hmi-find-index-prototype.html", label: "索引" },
    { href: "mobile-uc-find-1-push-prototype.html", label: "00 推送" },
    { href: "mobile-uc-find-1-session-prototype.html", label: "01 会话" },
    { href: "mobile-uc-find-1-nav-prototype.html", label: "02 导航" },
    { href: "mobile-uc-find-1-offline-prototype.html", label: "03 离线" },
    { href: "mobile-uc-find-1-supplement-prototype.html", label: "04 补录" }
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
