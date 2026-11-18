import{f as r}from"./index-L0AMeKBk.js";import{s as i}from"./content-Z6EHkkmj.js";import{d as o}from"./md-B7ZZsOyl.js";const l=[["","练习"],["guide","题型方法"]];function t(s){return`<div class="head"><div><h1>听力</h1><p>4 个 Section、40 题、约 30 分钟。先听懂每一句，再按题型练</p></div></div>
    <div class="toolbar"><div class="modes">${l.map(([a,e])=>`<a class="modebtn ${a===s?"on":""}" href="#/listening${a?"/"+a:""}">${e}</a>`).join("")}</div></div>`}function h(s,a){if(a[0]==="guide"){o(s,{chapter:"listening",base:"#/listening/guide",current:a[1],extraTop:t("guide")});return}if(a[0]==="s1"){const e=a[1]??"dictate";s.innerHTML=`<div class="head"><div><h1>逐句听写：${i.title}</h1><p>听一句，打一句。标点和大小写不用管，打错只退一格</p></div><a class="btn ghost" href="#/listening">返回听力</a></div>
      <div class="toolbar"><div class="modes"><a class="modebtn ${e==="dictate"?"on":""}" href="#/listening/s1/dictate">听写</a><a class="modebtn ${e==="type"?"on":""}" href="#/listening/s1/type">看着打</a></div></div><div class="card" id="m"></div>`;const c=i.lines.map((n,d)=>({id:`s1:${d}`,w:n.text,t:n.who==="W"?"工作人员":"来电者",src:"Section 1 听写",sentence:!0}));return r(s.querySelector("#m"),c,{hidden:e==="dictate",keepOrder:!0,noun:"句"})}s.innerHTML=`${t("")}
    <div class="grid2">
      <a class="card linkcard feature" href="#/vocab/audio"><b>必背词跟听</b><span class="note">1534 个必背词的真人录音，逐词字幕，可以盲听</span></a>
      <a class="card linkcard" href="#/listening/s1"><b>Section 1 逐句听写</b><span class="note">报名游泳课的电话：姓名拼写、电话号码、日期</span></a>
      <a class="card linkcard" href="#/today"><b>Section 1 表单填空</b><span class="note">在今日页，先只听不看字幕，填完再核对</span></a>
      <a class="card linkcard" href="#/vocab/x/ql-ielts-oral-900"><b>雅思口语 900 句</b><span class="note">逐句跟打和听写，来自 qwerty-learner</span></a>
      <a class="card linkcard" href="#/vocab/x/ql-ielts-listening-18days"><b>雅思听力词汇 18 天</b><span class="note">听力场景高频词，来自 qwerty-learner</span></a>
      <a class="card linkcard" href="#/vocab/x/tw-nce1"><b>新概念英语第一册</b><span class="note">前 5 课逐句听写，来自 TypeWords</span></a>
    </div>`}export{h as renderListening};
