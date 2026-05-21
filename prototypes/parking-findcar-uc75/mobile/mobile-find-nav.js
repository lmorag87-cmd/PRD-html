(function () {
  var V = "20260521";

  function withV(href) {
    if (!href || href.indexOf("?v=") >= 0) return href;
    return href + "?v=" + V;
  }

  function baseName(path) {
    var name = path || "";
    var q = name.indexOf("?");
    if (q >= 0) name = name.slice(0, q);
    var slash = name.lastIndexOf("/");
    if (slash >= 0) name = name.slice(slash + 1);
    return name;
  }

  var ITEMS = [
    { href: "../hmi/hmi-find-index.html", label: "索引" },
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
  current = baseName(current);

  nav.innerHTML = ITEMS.map(function (item) {
    var hit = baseName(item.href) === current;
    var cls = hit ? ' class="on"' : "";
    return '<a href="' + withV(item.href) + '"' + cls + ">" + item.label + "</a>";
  }).join("");
})();
