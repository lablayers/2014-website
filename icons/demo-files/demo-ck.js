"boxShadow" in document.body.style || document.body.setAttribute("class", "noBoxShadow");

document.body.addEventListener("click", function(e) {
  var t = e.target;
  t.tagName === "INPUT" && t.getAttribute("class").indexOf("liga") === -1 && t.select();
});

(function() {
  function r() {
    t.innerHTML = n.value || String.fromCharCode(160);
    window.icomoonLiga && window.icomoonLiga(t);
  }
  function i() {
    t.style.fontSize = e.value + "px";
  }
  var e = document.getElementById("fontSize"), t = document.getElementById("testDrive"), n = document.getElementById("testText");
  e.addEventListener("change", i, !1);
  n.addEventListener("input", r, !1);
  n.addEventListener("change", r, !1);
  i();
})();