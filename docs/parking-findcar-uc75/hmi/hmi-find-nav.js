(function () {
  var ITEMS = [
    { href: "hmi-find-index-prototype.html", label: "索引" },
    { href: "hmi-find-scr-00a-ingress-prototype.html", label: "00a 入库段" },
    { href: "hmi-find-scr-00-recording-prototype.html", label: "00 驻车" },
    { href: "hmi-find-scr-01-confirm-prototype.html", label: "01 确认" }
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
