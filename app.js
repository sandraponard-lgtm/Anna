(function () {
  var $ = function (id) { return document.getElementById(id); };
  var KEY_M = "cmdbquiz.mistakes", KEY_P = "cmdbquiz.panel";
  var L = "ABCDEFGH";
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var mistakes = load(KEY_M, []);
  var panelOpen = load(KEY_P, true);
  var ok = 0, ko = 0, list = [], idx = 0, cur = null, answered = false, sel = [];

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function counters() { $("cOk").textContent = ok; $("cKo").textContent = ko; $("cMis").textContent = mistakes.length; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // Menu
  var tb = $("topics");
  Object.keys(window.TOPICS).forEach(function (k) {
    var n = window.QS.filter(function (q) { return q.t === k; }).length;
    var b = document.createElement("button");
    b.textContent = window.TOPICS[k] + " (" + n + ")";
    b.onclick = function () { start(window.QS.filter(function (q) { return q.t === k; })); };
    tb.appendChild(b);
  });
  document.querySelectorAll("[data-mode]").forEach(function (b) {
    b.onclick = function () {
      var m = b.getAttribute("data-mode");
      if (m === "all") start(window.QS);
      else if (m === "random") start(shuffle(window.QS).slice(0, 20));
      else {
        var l = window.QS.filter(function (q) { return mistakes.indexOf(q.n) >= 0; });
        if (!l.length) { alert("Aucune erreur enregistrée pour le moment."); return; }
        start(l);
      }
    };
  });
  $("reset").onclick = function () { if (confirm("Effacer toutes les erreurs enregistrées ?")) { mistakes = []; save(KEY_M, mistakes); counters(); } };
  $("home").onclick = function () { $("quiz").hidden = true; $("menu").hidden = false; };
  $("ctxToggle").onclick = function () { panelOpen = !panelOpen; save(KEY_P, panelOpen); applyPanel(); };

  function applyPanel() { $("ctx").classList.toggle("closed", !panelOpen); }

  function start(l) { list = l; idx = 0; $("menu").hidden = true; $("quiz").hidden = false; show(); }

  function ctxHTML(q, withWhy) {
    var f = window.FR[q.n]; if (!f) return "<p>Pas de contexte.</p>";
    var h = "<p><b>Reformulation</b><br>" + esc(f.q) + "</p>";
    if (f.v && f.v.length) {
      h += "<b>Vocabulaire</b><dl>";
      f.v.forEach(function (x) { h += "<dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd>"; });
      h += "</dl>";
    }
    if (withWhy) {
      h += '<div class="why"><b>Pourquoi cette réponse</b><br>' + esc(f.w) + "</div>";
      h += '<div class="memo"><b>Astuce mémo</b><br>' + esc(f.m) + "</div>";
    } else h += "<p><i>La correction détaillée s'affiche après ta réponse.</i></p>";
    return h;
  }

  function show() {
    if (idx >= list.length) {
      $("stem").textContent = "Terminé ! " + list.length + " question(s).";
      $("opts").innerHTML = ""; $("validate").hidden = true; $("next").hidden = true; $("result").hidden = true;
      $("prog").textContent = ""; $("ctxBody").innerHTML = ""; return;
    }
    cur = list[idx]; answered = false; sel = [];
    $("prog").textContent = "Question " + (idx + 1) + " / " + list.length + " · #" + cur.n + " · " + window.TOPICS[cur.t];
    $("stem").textContent = cur.q;
    $("result").hidden = true; $("next").hidden = true; $("validate").hidden = false;
    var box = $("opts"); box.innerHTML = "";
    if (cur.k === "d") {
      cur.o.forEach(function (st, i) {
        var d = document.createElement("div"); d.className = "drag"; d.id = "d" + i;
        var s = '<span>' + esc(st) + '</span><select><option value="">— choisir —</option>';
        cur.c.forEach(function (c, j) { s += '<option value="' + j + '">' + esc(c) + "</option>"; });
        d.innerHTML = s + "</select>"; box.appendChild(d);
      });
    } else {
      var hint = cur.k === 2 ? "<p><i>Choisis 2 réponses.</i></p>" : "";
      box.innerHTML = hint;
      cur.o.forEach(function (t, i) {
        var d = document.createElement("div"); d.className = "opt"; d.id = "o" + i;
        d.innerHTML = "<b>" + L[i] + ".</b> <span>" + esc(t) + "</span>";
        d.onclick = function () {
          if (answered) return;
          var p = sel.indexOf(i);
          if (cur.k === 1) { sel = [i]; document.querySelectorAll(".opt").forEach(function (e) { e.classList.remove("sel"); }); d.classList.add("sel"); }
          else if (p >= 0) { sel.splice(p, 1); d.classList.remove("sel"); }
          else { sel.push(i); d.classList.add("sel"); }
        };
        box.appendChild(d);
      });
    }
    $("ctxBody").innerHTML = ctxHTML(cur, false);
    applyPanel();
  }

  $("validate").onclick = function () {
    if (answered) return;
    var good;
    if (cur.k === "d") {
      var picks = cur.o.map(function (_, i) { var v = document.querySelector("#d" + i + " select").value; return v === "" ? -1 : +v; });
      if (picks.indexOf(-1) >= 0) { alert("Réponds à chaque ligne."); return; }
      good = picks.every(function (p, i) { return p === cur.a[i]; });
      cur.o.forEach(function (_, i) {
        var d = $("d" + i), okRow = picks[i] === cur.a[i];
        d.classList.add(okRow ? "right" : "wrong");
        if (!okRow) d.insertAdjacentHTML("beforeend", '<small>Bonne réponse : <b>' + esc(cur.c[cur.a[i]]) + "</b></small>");
        d.querySelector("select").disabled = true;
      });
    } else {
      if (sel.length !== (cur.k === 2 ? 2 : 1)) { alert(cur.k === 2 ? "Choisis 2 réponses." : "Choisis une réponse."); return; }
      good = sel.length === cur.a.length && sel.every(function (s) { return cur.a.indexOf(s) >= 0; });
      cur.o.forEach(function (_, i) {
        var d = $("o" + i);
        if (cur.a.indexOf(i) >= 0) d.classList.add("right");
        else if (sel.indexOf(i) >= 0) d.classList.add("wrong");
      });
    }
    answered = true;
    if (good) { ok++; var p = mistakes.indexOf(cur.n); if (p >= 0) mistakes.splice(p, 1); }
    else { ko++; if (mistakes.indexOf(cur.n) < 0) mistakes.push(cur.n); }
    save(KEY_M, mistakes); counters();
    var r = '<h4 style="color:' + (good ? "#1a9d5a" : "#d23a3a") + '">' + (good ? "Correct !" : "Incorrect") + "</h4>" + esc(cur.e || "");
    if (cur.r && cur.r.length) {
      r += "<p><b>Références</b><br>";
      cur.r.forEach(function (x) { r += '<a href="' + esc(x[1]) + '" target="_blank" rel="noopener">' + esc(x[0]) + "</a><br>"; });
      r += "</p>";
    }
    $("result").innerHTML = r; $("result").hidden = false;
    $("validate").hidden = true; $("next").hidden = false;
    $("ctxBody").innerHTML = ctxHTML(cur, true);
  };
  $("next").onclick = function () { idx++; show(); };

  counters(); applyPanel();
})();
