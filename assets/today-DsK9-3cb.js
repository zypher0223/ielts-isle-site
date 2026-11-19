import{g as m,s as x,a as y,b as k,t as E,c as S,m as q}from"./index-DIJWXT3o.js";import{i as l,b as w,P as D,a as H}from"./plan-D3-W-c2A.js";import"./notewords-CQ2JVoI4.js";import"./data-z3W7qv_E.js";const d=e=>e.replace(/[&<>"]/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[i]);function L(e){const i=m(),u=new Date,c=x();e.innerHTML=`
  <div class="head">
    <div><h1>今日</h1><p>${u.getMonth()+1} 月 ${u.getDate()} 日，零基础起步，目标 ${i} 分${c>1?`，已连续学习 ${c} 天`:""}</p></div>
    <div class="seg" role="group" aria-label="目标分数"><button data-band="6" class="${i===6?"on":""}">目标 6 分</button><button data-band="7" class="${i===7?"on":""}">目标 7 分</button></div>
  </div>
  <section class="today-hero" id="hero" aria-live="polite"><p class="note" style="margin:0">正在排今天的计划…</p></section>
  <div class="plan-head"><h2 id="ptitle">今天的计划</h2>
    <label class="exam-date">考试日期 <input type="date" id="exam" value="${y()}" aria-label="考试日期"></label></div>
  <p class="note" id="ptip"></p>
  <div class="plan-list" id="plan"></div>
  ${c<2?`<a class="hub-card rules-tip" href="#/rules"><b>第一次来？先花 5 分钟看考试规则</b><span>四科考什么、多长时间、答案怎么写、${i} 分在写作和口语上要做到什么</span></a>`:""}
  <nav class="foot-links" aria-label="更多"><a href="#/progress">成绩和进步</a><a href="#/practice">官方免费练习</a><a href="#/rules">考试规则和评分标准</a><a href="#/settings">设置和备份</a><a href="#/about">内容来源</a></nav>`,e.querySelectorAll(".seg button").forEach(a=>a.addEventListener("click",()=>{k(+a.dataset.band),L(e)}));let n=[];const b=e.querySelector("#hero"),$=e.querySelector("#plan"),v=(a,o)=>{const t=n.filter(l).length,s=n.find(h=>!l(h)),r=s?n.indexOf(s)+1:0,g=a===null?"还没填考试日期":a<0?"考试日期已过":a===0?"今天考试":`距离考试 ${a} 天，${H[o]}阶段`,f=q();b.innerHTML=`<div class="th-top"><span>${d(g)}</span><span>今天已学 ${f} 分钟，完成 ${t} / ${n.length} 项</span></div>
      <div class="th-dots" aria-hidden="true">${n.map(h=>`<i class="${l(h)?"on":""}"></i>`).join("")}</div>
      ${s?`<a class="hub-start" href="${s.href}"><span class="hub-go" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span><span><b>${t?"继续":"开始"}今天的第 ${r} 项：${d(s.t)}</b><small>${d(s.d)}，约 ${s.min} 分钟</small></span></a>`:`<div class="th-done"><b>今天的 ${n.length} 项都完成了</b><span>可以去看看<a href="#/progress">成绩和进步</a>，或者去词汇里<a href="#/vocab/audio/shuffle">随机磨耳朵</a>。</span></div>`}
`},p=async()=>{const a=await w();n=a.tasks;const o=n.reduce((t,s)=>t+s.min,0);e.querySelector("#ptitle").textContent=`今天的计划，约 ${o} 分钟`,e.querySelector("#ptip").textContent=a.days===0?"今天别再做新题了。早点出发，带好身份证件，考试时先看清每题的字数要求。":D[a.phase],$.innerHTML=n.map((t,s)=>{const r=l(t);return`<div class="pl-row ${r?"done":""}" data-id="${t.id}">
      <button class="chk" aria-label="标记完成：${d(t.t)}" aria-pressed="${r}"></button>
      <a href="${t.href}"><span class="n">${s+1}</span><span class="t">${d(t.t)}</span><span class="m">${t.min} 分钟</span></a></div>`}).join(""),v(a.days,a.phase)};p(),$.addEventListener("click",a=>{const o=a.target.closest(".chk");if(!o)return;const t=o.closest(".pl-row"),s=n.find(r=>r.id===t.dataset.id);E(s.id,!l(s)),p()}),e.querySelector("#exam").addEventListener("change",a=>{S(a.target.value),p()})}export{L as renderToday};
