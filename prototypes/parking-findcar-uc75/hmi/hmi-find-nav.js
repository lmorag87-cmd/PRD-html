(function () {
  var ITEMS = [
    { href: "hmi-find-index-prototype.html", label: "索引" },
    { href: "hmi-find-scr-00-recording-prototype.html", label: "00 采集中" },
    { href: "hmi-find-scr-01-confirm-prototype.html", label: "01 确认" },
    { href: "hmi-find-scr-02-hub-prototype.html", label: "02 找车主页" },
    { href: "hmi-find-scr-03-path-replay-prototype.html", label: "03 轨迹回放" },
    { href: "hmi-find-scr-04-media-prototype.html", label: "04 素材" },
    { href: "hmi-find-scr-05-offline-prototype.html", label: "05 弱网" }
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
