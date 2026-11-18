import{s as F,p as _,b as G,g as ee,i as te,c as se,d as W,a as E,e as ae,t as M}from"./index-BePb22sr.js";import{p as b,c as K,s as p}from"./content-Z6EHkkmj.js";import{t as ne,w as ie}from"./data-Bb1gncxO.js";import{n as N,w as le}from"./notewords-DLaLfpBn.js";let i=null,o=0,n=!1,m=!1,J=.9,u=0;const T=new Set,oe=t=>(T.add(t),()=>T.delete(t)),v=()=>{T.forEach(t=>t(o,n)),ce()},Q=()=>document.getElementById("dock"),g={play:'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>',prev:'<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zM9.5 12L18 6v12z"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'};function re(t){if((i==null?void 0:i.title)===t.title)return;R(),i=t,o=0;const s=Q();s.hidden=!1,s.innerHTML=`
    <div class="cover" aria-hidden="true"></div>
    <div class="meta"><b>${t.title}</b><small id="pm"></small></div>
    <div class="prog" aria-hidden="true"><i id="pp"></i></div>
    <button class="ab" id="pab" aria-pressed="false">单句循环</button>
    <select class="rate-sel" id="prate" aria-label="语速"><option value="0.75">0.75 倍速</option><option value="0.9" selected>0.9 倍速</option><option value="1">1 倍速</option></select>
    <div class="ctl">
      <button class="sk" id="pprev" aria-label="上一句">${g.prev}</button>
      <button class="play" id="pplay" aria-label="播放">${g.play}</button>
      <button class="sk" id="pnext" aria-label="下一句">${g.next}</button>
    </div>`,s.querySelector("#pplay").addEventListener("click",()=>n?R():x()),s.querySelector("#pprev").addEventListener("click",()=>A(o-1)),s.querySelector("#pnext").addEventListener("click",()=>A(o+1)),s.querySelector("#pab").addEventListener("click",l=>{m=!m,l.currentTarget.classList.toggle("on",m),l.currentTarget.setAttribute("aria-pressed",String(m))}),s.querySelector("#prate").addEventListener("change",l=>{J=+l.target.value,n&&x()}),v()}function ce(){if(!i)return;const t=Q(),s=t.querySelector("#pm"),l=t.querySelector("#pp"),r=t.querySelector("#pplay");s&&(s.textContent=`第 ${o+1} / ${i.lines.length} 句`),l&&(l.style.width=`${(o+(n?.5:0))/i.lines.length*100}%`),r&&(r.innerHTML=n?g.pause:g.play,r.setAttribute("aria-label",n?"暂停":"播放"))}async function x(){if(!i)return;F();const t=++u;n=!0,v();const s=Date.now();for(;n&&t===u&&i&&o<i.lines.length;){const l=i.lines[o];if(await _(l.text,{rate:J,accent:l.who==="W"?"uk":"us"}),t!==u||!n||(await new Promise(r=>setTimeout(r,350)),t!==u||!n))break;m||(o<i.lines.length-1?(o++,v()):n=!1)}G((Date.now()-s)/6e4),t===u&&(n=!1,v())}function R(){u++,n=!1,F(),v()}function A(t){i&&(o=Math.max(0,Math.min(i.lines.length-1,t)),n?x():v())}const de=()=>o,pe=t=>t.replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]);function ue(t){const s=ee(),l=new Date,r=N(),S=r.filter(e=>te(e.id)).length,B=r.length-S,H=ne.find(e=>ie.some(a=>a.topic===e.id&&a.star&&!se(a.id))),U=[{id:"vocab",t:S?`复习 ${S} 个、新学 ${B} 个必背词`:`新学 ${B} 个必背词`,d:H?`从「${H.name}」开始`:"必背词都学过了",min:"12 分钟",href:"#/vocab/study"},{id:"listen",t:"Section 1 数字和拼写听写",d:"上面的精听卡片，三空都填对就算完成",min:"15 分钟",href:"#now"},{id:"speak",t:"Part 2 题卡计时作答",d:"准备 1 分钟，说 2 分钟",min:"8 分钟",href:"#cue"},{id:"write",t:"Task 1 饼图范文",d:`看 ${s} 分范文是怎么写的`,min:"20 分钟",href:"#cmp"}],z=new Set(W());t.innerHTML=`
  <div class="head">
    <div><h1>今日</h1><p>${l.getMonth()+1} 月 ${l.getDate()} 日，零基础起步，目标 ${s} 分${E()>1?`，已连续学习 ${E()} 天`:""}</p></div>
    <div class="seg" role="group" aria-label="目标分数"><button data-band="6" class="${s===6?"on":""}">目标 6 分</button><button data-band="7" class="${s===7?"on":""}">目标 7 分</button></div>
  </div>
  ${E()<2?`<a class="card linkcard rules-tip" href="#/rules"><b>第一次来？先花 5 分钟看考试规则</b><span class="note">四科考什么、多长时间、答案怎么写、${s} 分在写作和口语上要做到什么</span></a>`:""}
  <div class="cols">
    <div>
      <section class="now" id="now" aria-label="正在精听">
        <div>
          <div class="tag">正在精听听力 Section 1 的表单填空。先只听不看，填完核对后再看字幕 <button class="showsub" id="showsub" aria-pressed="false">显示字幕</button></div>
          <div class="lyrics en hide" id="lyrics">${p.lines.map((e,a)=>`<p data-i="${a}"><span class="who">${e.who}</span><span class="txt">${pe(e.text).replace(/(A-S-H-W-O-R-T-H)/,'<span class="nw">$1</span>')}</span></p>`).join("")}</div>
        </div>
        <form class="form" id="form" autocomplete="off">
          <h3>边听边填（One word and/or a number）</h3>
          ${p.form.map((e,a)=>`<label>${e.label}<input class="en" name="f${a}" aria-label="${e.label}"></label>`).join("")}
          <div class="row"><button class="btn" type="submit">核对</button></div>
          <div class="hint" id="fhint">拼写和数字是 Section 1 最常丢分的地方</div>
        </form>
      </section>

      <h2>今天的四件事</h2>
      <div class="grid2" id="plan">
        ${U.map(e=>`<div class="task ${z.has(e.id)?"done":""}" data-id="${e.id}">
          <button class="chk" aria-label="标记完成：${e.t}" aria-pressed="${z.has(e.id)}"></button>
          <a href="${e.href}" style="text-decoration:none;color:inherit"><span class="t">${e.t}</span><span class="d">${e.d}</span></a>
          <span class="min">${e.min}</span></div>`).join("")}
      </div>

      <h2 id="cmp">同一个数字，6 分和 7 分各自怎么写</h2>
      <div class="cmp">
        <div class="row ${s===6?"hi":""}"><div class="band">6</div><div class="s">${b.six.text}<small>${b.six.why}</small></div></div>
        <div class="row ${s===7?"hi":""}"><div class="band">7</div><div class="s">${b.seven.html}<small>${b.seven.why}</small></div></div>
        <div class="src">${b.author}</div>
      </div>
    </div>

    <aside style="display:flex;flex-direction:column;gap:16px">
      <div class="card" id="wc"></div>
      <div class="card cue" id="cue">
        <div class="k"><span>口语 Part 2 题卡</span><span id="phase">准备 1:00</span></div>
        <b>${K.title}</b>
        <ul>${K.points.map(e=>`<li>${e}</li>`).join("")}</ul>
        <div class="timer"><div class="sec" id="sec">1:00</div><button class="btn" id="go">开始准备</button></div>
      </div>
    </aside>
  </div>
  <nav class="foot-links" aria-label="更多"><a href="#/practice">官方免费练习</a><a href="#/rules">考试规则和评分标准</a><a href="#/settings">设置和备份</a><a href="#/about">内容来源</a></nav>`,t.querySelectorAll(".seg button").forEach(e=>e.addEventListener("click",()=>{ae(+e.dataset.band),ue(t)})),t.querySelectorAll("#plan .task").forEach(e=>e.querySelector(".chk").addEventListener("click",()=>{M(e.dataset.id);const a=W().includes(e.dataset.id);e.classList.toggle("done",a),e.querySelector(".chk").setAttribute("aria-pressed",String(a))})),re(p);const $=t.querySelector("#lyrics"),D=e=>$.querySelectorAll("p").forEach((a,y)=>a.classList.toggle("on",y===e));D(de());const V=oe(e=>D(e)),k=t.querySelector("#showsub"),I=e=>{$.classList.toggle("hide",!e),k.textContent=e?"遮住字幕":"显示字幕",k.setAttribute("aria-pressed",String(e))};k.addEventListener("click",()=>I($.classList.contains("hide"))),$.addEventListener("click",e=>{const a=e.target.closest("p");a&&(A(+a.dataset.i),x())}),t.querySelector("#form").addEventListener("submit",e=>{var O;e.preventDefault();let a=0;p.form.forEach((Y,Z)=>{const w=t.querySelector(`[name=f${Z}]`),C=Y.answer.test(w.value.trim());w.classList.toggle("ok",C),w.classList.toggle("no",!C&&w.value.trim()!==""),C&&a++});const y=t.querySelector("#fhint");I(!0),a===p.form.length?(y.textContent="三空全对。这一项已标为完成。",M("listen",!0),(O=t.querySelector("[data-id=listen]"))==null||O.classList.add("done")):y.textContent=`对了 ${a} / ${p.form.length} 空。没对的再听一遍那一句：点字幕就能跳过去。`});const j=t.querySelector("#wc"),P=()=>{const e=N();if(!e.length){j.innerHTML='<div class="empty">今天的必背词都学完了</div>';return}le(j,e[0],e.length,()=>P())};P();let h=60,f="prep",c;const q=t.querySelector("#sec"),d=t.querySelector("#go"),L=t.querySelector("#phase"),X=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`;return d.addEventListener("click",()=>{if(f==="end"){h=60,f="prep",q.textContent="1:00",L.textContent="准备 1:00",d.textContent="开始准备";return}if(c){clearInterval(c),c=void 0,d.textContent="继续";return}d.textContent="暂停",c=window.setInterval(()=>{var e;h--,q.textContent=X(h),!(h>0)&&(clearInterval(c),c=void 0,f==="prep"?(f="talk",h=120,q.textContent="2:00",L.textContent="作答 2:00",d.textContent="开始说"):(f="end",L.textContent="时间到",d.textContent="再来一次",G(3),M("speak",!0),(e=t.querySelector("[data-id=speak]"))==null||e.classList.add("done")))},1e3)}),()=>{V(),c&&clearInterval(c)}}export{ue as renderToday};
