import{s as F,p as V,b as G,g as X,a as T,c as Y,d as Z,t as A,e as ee}from"./index-CgOpTcKW.js";import{p as g,c as R,s as v}from"./content-Z6EHkkmj.js";import{n as te,w as se}from"./notewords-utpxpF72.js";import{i as B,b as ae,P as ne,a as ie}from"./plan-DM6yoqbq.js";import"./data-z3W7qv_E.js";let l=null,o=0,i=!1,y=!1,J=.9,h=0;const I=new Set,le=t=>(I.add(t),()=>I.delete(t)),f=()=>{I.forEach(t=>t(o,i)),oe()},K=()=>document.getElementById("dock"),$={play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM9.5 12L18 6v12z"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'};function re(t){if((l==null?void 0:l.title)===t.title)return;D(),l=t,o=0;const s=K();s.hidden=!1,s.innerHTML=`
    <div class="cover" aria-hidden="true"></div>
    <div class="meta"><b>${t.title}</b><small id="pm"></small></div>
    <div class="prog" aria-hidden="true"><i id="pp"></i></div>
    <button class="ab" id="pab" aria-pressed="false">单句循环</button>
    <select class="rate-sel" id="prate" aria-label="语速"><option value="0.75">0.75 倍速</option><option value="0.9" selected>0.9 倍速</option><option value="1">1 倍速</option></select>
    <div class="ctl">
      <button class="sk" id="pprev" aria-label="上一句">${$.prev}</button>
      <button class="play" id="pplay" aria-label="播放">${$.play}</button>
      <button class="sk" id="pnext" aria-label="下一句">${$.next}</button>
    </div>`,s.querySelector("#pplay").addEventListener("click",()=>i?D():L()),s.querySelector("#pprev").addEventListener("click",()=>P(o-1)),s.querySelector("#pnext").addEventListener("click",()=>P(o+1)),s.querySelector("#pab").addEventListener("click",r=>{y=!y,r.currentTarget.classList.toggle("on",y),r.currentTarget.setAttribute("aria-pressed",String(y))}),s.querySelector("#prate").addEventListener("change",r=>{J=+r.target.value,i&&L()}),f()}function oe(){if(!l)return;const t=K(),s=t.querySelector("#pm"),r=t.querySelector("#pp"),c=t.querySelector("#pplay");s&&(s.textContent=`第 ${o+1} / ${l.lines.length} 句`),r&&(r.style.width=`${(o+(i?.5:0))/l.lines.length*100}%`),c&&(c.innerHTML=i?$.pause:$.play,c.setAttribute("aria-label",i?"暂停":"播放"))}async function L(){if(!l)return;F();const t=++h;i=!0,f();const s=Date.now();for(;i&&t===h&&l&&o<l.lines.length;){const r=l.lines[o];if(await V(r.text,{rate:J,accent:r.who==="W"?"uk":"us"}),t!==h||!i||(await new Promise(c=>setTimeout(c,350)),t!==h||!i))break;y||(o<l.lines.length-1?(o++,f()):i=!1)}G((Date.now()-s)/6e4),t===h&&(i=!1,f())}function D(){h++,i=!1,F(),f()}function P(t){l&&(o=Math.max(0,Math.min(l.lines.length-1,t)),i?L():f())}const de=()=>o,k=t=>t.replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]);function ce(t){const s=X(),r=new Date;t.innerHTML=`
  <div class="head">
    <div><h1>今日</h1><p>${r.getMonth()+1} 月 ${r.getDate()} 日，零基础起步，目标 ${s} 分${T()>1?`，已连续学习 ${T()} 天`:""}</p></div>
    <div class="seg" role="group" aria-label="目标分数"><button data-band="6" class="${s===6?"on":""}">目标 6 分</button><button data-band="7" class="${s===7?"on":""}">目标 7 分</button></div>
  </div>
  ${T()<2?`<a class="card linkcard rules-tip" href="#/rules"><b>第一次来？先花 5 分钟看考试规则</b><span class="note">四科考什么、多长时间、答案怎么写、${s} 分在写作和口语上要做到什么</span></a>`:""}
  <div class="cols">
    <div>
      <section class="now" id="now" aria-label="正在精听">
        <div>
          <div class="tag">正在精听听力 Section 1 的表单填空。先只听不看，填完核对后再看字幕 <button class="showsub" id="showsub" aria-pressed="false">显示字幕</button></div>
          <div class="lyrics en hide" id="lyrics">${v.lines.map((e,a)=>`<p data-i="${a}"><span class="who">${e.who}</span><span class="txt">${k(e.text).replace(/(A-S-H-W-O-R-T-H)/,'<span class="nw">$1</span>')}</span></p>`).join("")}</div>
        </div>
        <form class="form" id="form" autocomplete="off">
          <h3>边听边填（One word and/or a number）</h3>
          ${v.form.map((e,a)=>`<label>${e.label}<input class="en" name="f${a}" aria-label="${e.label}"></label>`).join("")}
          <div class="row"><button class="btn" type="submit">核对</button></div>
          <div class="hint" id="fhint">拼写和数字是 Section 1 最常丢分的地方</div>
        </form>
      </section>

      <div class="plan-head"><h2 id="ptitle">今天的计划</h2>
        <label class="exam-date">考试日期 <input type="date" id="exam" value="${Y()}" aria-label="考试日期"></label></div>
      <p class="note" id="ptip"></p>
      <div class="grid2" id="plan"></div>
      <p class="note"><a href="#/progress">看成绩和进步</a></p>

      <h2 id="cmp">同一个数字，6 分和 7 分各自怎么写</h2>
      <div class="cmp">
        <div class="row ${s===6?"hi":""}"><div class="band">6</div><div class="s">${g.six.text}<small>${g.six.why}</small></div></div>
        <div class="row ${s===7?"hi":""}"><div class="band">7</div><div class="s">${g.seven.html}<small>${g.seven.why}</small></div></div>
        <div class="src">${g.author}</div>
      </div>
    </div>

    <aside style="display:flex;flex-direction:column;gap:16px">
      <div class="card" id="wc"></div>
      <div class="card cue" id="cue">
        <div class="k"><span>口语 Part 2 题卡</span><span id="phase">准备 1:00</span></div>
        <b>${R.title}</b>
        <ul>${R.points.map(e=>`<li>${e}</li>`).join("")}</ul>
        <div class="timer"><div class="sec" id="sec">1:00</div><button class="btn" id="go">开始准备</button></div>
      </div>
    </aside>
  </div>
  <nav class="foot-links" aria-label="更多"><a href="#/progress">成绩和进步</a><a href="#/practice">官方免费练习</a><a href="#/rules">考试规则和评分标准</a><a href="#/settings">设置和备份</a><a href="#/about">内容来源</a></nav>`,t.querySelectorAll(".seg button").forEach(e=>e.addEventListener("click",()=>{Z(+e.dataset.band),ce(t)}));let c=[];const z=t.querySelector("#plan"),j=async()=>{const e=await ae();c=e.tasks;const a=c.reduce((n,d)=>n+d.min,0);t.querySelector("#ptitle").textContent=e.days===null?`今天的计划，约 ${a} 分钟`:e.days<0?"考试日期已过":e.days===0?"今天考试，加油":`距离考试 ${e.days} 天，${ne[e.phase]}阶段，今天约 ${a} 分钟`,t.querySelector("#ptip").textContent=ie[e.phase],z.innerHTML=c.map(n=>{const d=B(n);return`<div class="task ${d?"done":""}" data-id="${n.id}">
      <button class="chk" aria-label="标记完成：${k(n.t)}" aria-pressed="${d}"></button>
      <a href="${n.href}" style="text-decoration:none;color:inherit"><span class="t">${k(n.t)}</span><span class="d">${k(n.d)}</span></a>
      <span class="min">${n.min} 分钟</span></div>`}).join("")};j(),z.addEventListener("click",e=>{const a=e.target.closest(".chk");if(!a)return;const n=a.closest(".task"),d=c.find(M=>M.id===n.dataset.id);A(d.id,!B(d));const w=B(d);n.classList.toggle("done",w),a.setAttribute("aria-pressed",String(w))}),t.querySelector("#exam").addEventListener("change",e=>{ee(e.target.value),j()}),re(v),document.getElementById("dock").hidden=!1;const x=t.querySelector("#lyrics"),O=e=>x.querySelectorAll("p").forEach((a,n)=>a.classList.toggle("on",n===e));O(de());const Q=le(e=>O(e)),q=t.querySelector("#showsub"),W=e=>{x.classList.toggle("hide",!e),q.textContent=e?"遮住字幕":"显示字幕",q.setAttribute("aria-pressed",String(e))};q.addEventListener("click",()=>W(x.classList.contains("hide"))),x.addEventListener("click",e=>{const a=e.target.closest("p");a&&(P(+a.dataset.i),L())}),t.querySelector("#form").addEventListener("submit",e=>{var d;e.preventDefault();let a=0;v.form.forEach((w,M)=>{const S=t.querySelector(`[name=f${M}]`),H=w.answer.test(S.value.trim());S.classList.toggle("ok",H),S.classList.toggle("no",!H&&S.value.trim()!==""),H&&a++});const n=t.querySelector("#fhint");W(!0),a===v.form.length?(n.textContent="三空全对。这一项已标为完成。",A("listen",!0),(d=t.querySelector("[data-id=listen]"))==null||d.classList.add("done")):n.textContent=`对了 ${a} / ${v.form.length} 空。没对的再听一遍那一句：点字幕就能跳过去。`});const N=t.querySelector("#wc"),_=()=>{const e=te();if(!e.length){N.innerHTML='<div class="empty">今天的必背词都学完了</div>';return}se(N,e[0],e.length,()=>_())};_();let b=60,m="prep",p;const E=t.querySelector("#sec"),u=t.querySelector("#go"),C=t.querySelector("#phase"),U=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`;return u.addEventListener("click",()=>{if(m==="end"){b=60,m="prep",E.textContent="1:00",C.textContent="准备 1:00",u.textContent="开始准备";return}if(p){clearInterval(p),p=void 0,u.textContent="继续";return}u.textContent="暂停",p=window.setInterval(()=>{var e;b--,E.textContent=U(b),!(b>0)&&(clearInterval(p),p=void 0,m==="prep"?(m="talk",b=120,E.textContent="2:00",C.textContent="作答 2:00",u.textContent="开始说"):(m="end",C.textContent="时间到",u.textContent="再来一次",G(3),A("speak",!0),(e=t.querySelector("[data-id=speak]"))==null||e.classList.add("done")))},1e3)}),()=>{Q(),p&&clearInterval(p),D(),document.getElementById("dock").hidden=!0}}export{ce as renderToday};
