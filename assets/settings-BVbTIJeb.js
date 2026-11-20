import{w as d,N as l,g as i,j as r,O as p,b as u,k as b,P as m,Q as g,R as v}from"./index-B_z70FD6.js";function n(t){const s=d();t.innerHTML=`<div class="head"><div><h1>设置和备份</h1><p>学习记录只存在这个浏览器里。换设备或清理浏览器前，先导出备份</p></div></div>
  <div class="card" style="max-width:720px">
    <h2 style="margin-top:0">外观</h2>
    ${l()}
    <p class="note">日间：浅色。夜间：深色，晚上看不刺眼。书本：米黄纸张和纸纹，阅读文章和范文用衬线字体，像在看书。右上角的设置按钮里也能切换。</p>
    <h2>目标分和发音</h2>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div class="seg" role="group" aria-label="目标分数"><button data-band="6" class="${i()===6?"on":""}">目标 6 分</button><button data-band="7" class="${i()===7?"on":""}">目标 7 分</button></div>
      <div class="seg" role="group" aria-label="发音"><button data-ac="uk" class="${r()==="uk"?"on":""}">英音</button><button data-ac="us" class="${r()==="us"?"on":""}">美音</button></div>
    </div>
    <p class="note">目标 6 分：每天 20 个新词，四步练到「听写」。目标 7 分：每天 25 个新词，四步练到「默写」。</p>
    <h2>备份和恢复</h2>
    <p>现在有 ${s.cards} 个词的学习记录，${s.mistakes} 个错词，${s.starred} 个收藏，${s.mastered} 个已掌握。</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" id="exp">导出备份文件</button>
      <label class="btn ghost" for="imp">从备份文件恢复</label><input type="file" id="imp" accept="application/json,.json" class="sr">
    </div>
    <p class="note" id="msg" aria-live="polite">恢复会覆盖这个浏览器里现有的学习记录。</p>
  </div>`,p(t),t.querySelectorAll("[data-band]").forEach(a=>a.addEventListener("click",()=>{u(+a.dataset.band),n(t)})),t.querySelectorAll("[data-ac]").forEach(a=>a.addEventListener("click",()=>{b(a.dataset.ac),n(t)})),t.querySelector("#exp").addEventListener("click",()=>{const a=new Blob([m()],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(a),e.download=`语屿雅思备份-${g()}.json`,e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),1e3),t.querySelector("#msg").textContent="备份文件已下载。换设备时在这里选它恢复。"}),t.querySelector("#imp").addEventListener("change",async a=>{var c;const e=(c=a.target.files)==null?void 0:c[0];if(!e||!confirm("恢复会覆盖这个浏览器里现有的学习记录，确定吗？"))return;const o=v(await e.text());t.querySelector("#msg").textContent=o.msg,o.ok&&setTimeout(()=>n(t),1500)})}export{n as renderSettings};
