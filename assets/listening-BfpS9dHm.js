import{G as y,H as q,I as L,f as k}from"./index-CgOpTcKW.js";import{s as v}from"./content-Z6EHkkmj.js";import{d as x}from"./md-CSHqsqC6.js";import{r as T,m as M}from"./mock-D49d8YT6.js";import{r as H}from"./jjtopics-BazY4q20.js";import{j as C}from"./jijing-CTMYmEsk.js";import"./listening-tests-C7ZMmN3O.js";var g;const d=((g=C)==null?void 0:g.jjListening)??[],n=t=>String(t??"").replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[s]),$=t=>t.toLowerCase().replace(/[£$,]/g,"").replace(/\s*:\s*/g,".").replace(/[^a-z0-9.' ]+/g," ").replace(/\s+/g," ").trim(),j="模拟音频：按机经回忆的场景自编，不是真实考试录音，题目和答案也不是考试原题；音频和脚本由你提供，制作时用的 AI 模型未注明",m=t=>`jjl:${t}`;function I(){if(!d.length)return"";const t=[...new Set(d.map(s=>s.section))].sort();return`<h2>机经场景模拟（${d.length} 段）</h2>
    <p class="note">${n(j)}。用来熟悉近期考试出现过的场景和题型。</p>
    <div class="topics">${t.flatMap(s=>d.filter(e=>e.section===s).map(e=>{const i=y(m(e.id));return`<a class="topic" href="#/listening/jj/${encodeURIComponent(e.id)}"><b>${n(e.scene)}</b><span class="meta">Section ${n(e.section)}，${e.answers.length} 题</span><span class="meta">${n(e.id.replace(/^L-/,"").replace(/_.*/,""))}${i?`，对了 ${i.right} / ${i.total}`:""}</span></a>`})).join("")}</div>`}function J(t,s){const e=d.find(a=>a.id===s);if(!e){t.innerHTML='<div class="empty">没有这一段。<a href="#/listening">返回听力</a></div>';return}const i=y(m(e.id));t.innerHTML=`
    <div class="head"><div><h1>${n(e.scene)}</h1><p>机经场景模拟 · Section ${n(e.section)}</p></div><a class="btn ghost" href="#/listening">返回听力</a></div>
    <p class="note">${n(j)}。${n(e.meta)}${i?`　上次最好成绩：${i.right} / ${i.total}`:""}</p>
    <div class="card mock-player"><audio controls preload="metadata" src="${n(new URL(`./audio/jj-listening/${e.audio}`,location.href).href)}" style="width:100%"></audio></div>
    <div class="read-wrap">
      <div class="card"><pre class="essay en jj-q">${n(e.questions)}</pre></div>
      <form class="card rq" id="f">
        <h3>答题卡</h3>
        <p class="note">填空题写原词，选择和配对题写字母。大小写不用管。</p>
        ${e.answers.map(a=>`<div class="qq ans-row" data-n="${a.n}"><label class="en"><b>${a.n}</b> <input class="en" name="q${a.n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Answer ${a.n}"></label><div class="ex" hidden></div></div>`).join("")}
        <div class="acts" style="justify-content:flex-start"><button class="btn" type="submit">交卷看答案</button><span class="note" id="score"></span></div>
      </form>
    </div>
    <div class="card" id="tr" hidden></div>`;const r=t.querySelector("#f");return r.addEventListener("submit",a=>{a.preventDefault();const S=new FormData(r);let l=0;for(const c of e.answers){const p=String(S.get(`q${c.n}`)??"").trim(),o=c.alts.some(w=>$(w)===$(p));o&&l++,q("listening","jj",o);const f=r.querySelector(`[data-n="${c.n}"]`);f.classList.toggle("ok",o),f.classList.toggle("no",!o);const u=f.querySelector(".ex");u.hidden=!1,u.innerHTML=o?"答对了":`答案：<b class="en">${n(c.alts.join(" / "))}</b>${p?`（你写的是 ${n(p)}）`:""}`}L(m(e.id),l,e.answers.length),t.querySelector("#score").textContent=`${l} / ${e.answers.length} 题答对。下面是文字稿，对照着再听一遍答错的地方。`,r.querySelector("button[type=submit]").disabled=!0;const h=t.querySelector("#tr");h.hidden=!1,h.innerHTML=`<h3>录音文字稿</h3>${e.script.map(c=>`<p class="en" style="margin:0;padding:6px 0"><span class="who" style="font:12px 'Noto Sans SC';color:var(--ink3);margin-right:8px">${n(c.who)}</span>${n(c.text)}</p>`).join("")}`}),()=>{var a;(a=t.querySelector("audio"))==null||a.pause()}}const A=[["","练习"],["guide","题型方法"]];function b(t){return`<div class="head"><div><h1>听力</h1><p>4 个 Section、40 题、约 30 分钟。先听懂每一句，再按题型练</p></div></div>
    <div class="toolbar"><div class="modes">${A.map(([s,e])=>`<a class="modebtn ${s===t?"on":""}" href="#/listening${s?"/"+s:""}">${e}</a>`).join("")}</div></div>`}function W(t,s){if(s[0]==="jj"&&s[1])return J(t,decodeURIComponent(s[1]));if(s[0]==="test"&&s[1])return T(t,s[1],+(s[2]??1),s[3]??"exam");if(s[0]==="guide"){x(t,{chapter:"listening",base:"#/listening/guide",current:s[1],extraTop:b("guide")});return}if(s[0]==="s1"){const e=s[1]??"dictate";t.innerHTML=`<div class="head"><div><h1>逐句听写：${v.title}</h1><p>听一句，打一句。标点和大小写不用管，打错只退一格</p></div><a class="btn ghost" href="#/listening">返回听力</a></div>
      <div class="toolbar"><div class="modes"><a class="modebtn ${e==="dictate"?"on":""}" href="#/listening/s1/dictate">听写</a><a class="modebtn ${e==="type"?"on":""}" href="#/listening/s1/type">看着打</a></div></div><div class="card" id="m"></div>`;const i=v.lines.map((r,a)=>({id:`s1:${a}`,w:r.text,t:r.who==="W"?"工作人员":"来电者",src:"Section 1 听写",sentence:!0}));return k(t.querySelector("#m"),i,{hidden:e==="dictate",keepOrder:!0,noun:"句"})}t.innerHTML=`${b("")}
    <div class="grid2">
      <a class="card linkcard feature" href="#/vocab/audio"><b>必背词跟听</b><span class="note">1534 个必背词的真人录音，逐词字幕，可以盲听</span></a>
      <a class="card linkcard" href="#/practice#listening"><b>官方听力样题（8 种题型）</b><span class="note">雅思官网的机考样题，附官方答案和录音文字稿</span></a>
      <a class="card linkcard" href="#/listening/s1"><b>Section 1 逐句听写</b><span class="note">报名游泳课的电话：姓名拼写、电话号码、日期</span></a>
      <a class="card linkcard" href="#/today"><b>Section 1 表单填空</b><span class="note">在今日页，先只听不看字幕，填完再核对</span></a>
      <a class="card linkcard" href="#/vocab/x/ql-ielts-oral-900"><b>雅思口语 900 句</b><span class="note">逐句跟打和听写，来自 qwerty-learner</span></a>
      <a class="card linkcard" href="#/vocab/x/ql-ielts-listening-18days"><b>雅思听力词汇 18 天</b><span class="note">听力场景高频词，来自 qwerty-learner</span></a>
      <a class="card linkcard" href="#/vocab/x/tw-nce1"><b>新概念英语第一册</b><span class="note">前 5 课逐句听写，来自 TypeWords</span></a>
    </div>
    ${M()}
    ${I()}
    ${H("listening")}`}export{W as renderListening};
