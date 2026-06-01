(function () {
  var V = "20260602";

  function withV(href) {
    if (!href || href.indexOf("?v=") >= 0) return href;
    return href + "?v=" + V;
  }

  function baseName(path) {
    var name = path || "";
    var q = name.indexOf("?");
    if (q >= 0) name = name.slice(0, q);
    return name;
  }

  var ITEMS = [
    { href: "hmi-find-index.html", label: "索引" },
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
  current = baseName(current);

  nav.innerHTML = ITEMS.map(function (item) {
    var cls = baseName(item.href) === current ? ' class="on"' : "";
    return '<a href="' + withV(item.href) + '"' + cls + ">" + item.label + "</a>";
  }).join("");
})();
