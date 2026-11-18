import{e as o}from"./ext-index-DX9_sUWZ.js";import{s as r}from"./samples-CKZUafZI.js";function s(t){const a=r.filter(e=>!e.ai),n=r.filter(e=>e.ai),l=e=>o.filter(i=>i.source===e).map(i=>i.name).join("、");t.innerHTML=`<div class="head"><div><h1>内容来源</h1><p>网站里每一类内容来自哪里、用的什么协议</p></div></div>
  <div class="card about" style="max-width:820px">
    <h2 style="margin-top:0">学习笔记</h2>
    <p>词汇、同义替换、搭配、语法、各科方法和评分标准来自本站的雅思学习内容笔记。搭配例句里标「自写」的是笔记作者写的，其余逐字照录自笔记列出的参考网站。</p>
    <h2>写作和口语范文</h2>
    <ul>
      <li><b>官方考官评分样本 ${a.length} 篇</b>：来自 IELTS.org、剑桥雅思真题（Cambridge IELTS 18–21）和 Official IELTS Practice Materials，经 ieltswritingchecker.org 转载。每篇都写明了来源网址和评分人，已获使用授权。</li>
      <li><b>AI 范文 ${n.length} 篇</b>：找不到对应题型和分数的官方样本时，由 Claude Opus 5.5（Anthropic）按雅思公开评分标准编写，不是考官评分，每篇都有标注。</li>
    </ul>
    <h2>机经（考生考后回忆）</h2>
    <ul>
      <li>口语本季题库、写作题目、听力场景和阅读篇名来自项目作者提供的《雅思机经整理（2026 年）》，是考生考后凭记忆整理的题目，<b>不是雅思官方原题</b>，措辞和细节可能不准确。</li>
      <li>写作题按考生报告日期区分「近期考过」和「可靠性较低」；小作文只有文字题干，没有原图。</li>
      <li>听力和阅读只列场景和篇名，不收考生回忆的答案。</li>
    </ul>
    <h2>外部词库和文章</h2>
    <ul>
      <li><b><a href="https://github.com/RealKai42/qwerty-learner" target="_blank" rel="noopener">qwerty-learner</a></b>（GPL-3.0）：${l("qwerty-learner")}。原项目说明其词典数据来自 <a href="https://github.com/kajweb/dict" target="_blank" rel="noopener">kajweb/dict</a>。</li>
      <li><b><a href="https://github.com/zyronon/TypeWords" target="_blank" rel="noopener">TypeWords</a></b>（GPL-3.0）：${l("TypeWords")}。</li>
      <li><b><a href="https://github.com/kajweb/dict" target="_blank" rel="noopener">kajweb/dict</a></b>（仓库没有写明协议）：${l("kajweb/dict（有道）")}。原项目说明这些数据抓取自有道背单词；qwerty-learner 的词典也来自这个仓库。</li>
      <li>这些词库和文章按 GPL-3.0 协议使用，网站只把它们转换了格式（字段改名、合并分册），没有改动内容。打字背词的玩法参考了 qwerty-learner，没有使用它的代码。</li>
      <li><b>获取这部分的源码</b>：原始文件在上面两个项目的 GitHub 仓库里公开（qwerty-learner 的 public/dicts，TypeWords 的 public/dicts/en）；网站使用的转换后文件可以直接下载，都放在本站的 ext/ 目录下，按词库命名，例如 <a href="./ext/ql-duckcircle_ielts.json" target="_blank" rel="noopener">ext/ql-duckcircle_ielts.json</a>。这些文件按 GPL-3.0 协议提供，协议全文见 <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener">gnu.org/licenses/gpl-3.0</a>。</li>
    </ul>
    <h2>发音</h2>
    <ul>
      <li>单词、句子和听力对话的发音都来自有道词典的在线发音（dict.youdao.com）。对话里两个角色分别用英音和美音。只有连续几次连不上有道时，才临时改用浏览器自带的朗读。</li>
      <li>1534 个必背词另有真人录音（项目作者提供）。</li>
      <li><b>模拟听力 5 套</b>：脚本和题目由 AI 编写（Claude Opus 5.5，Anthropic），录音用 macOS 系统自带的朗读声音生成，不是真人录音。今日页的 Section 1 对话也是本站编写的练习材料。</li>
      <li><b>阅读练习短文和语法练习题</b>：本站编写（Claude Opus 5.5），不是剑桥真题。</li>
    </ul>
  </div>`}export{s as renderAbout};
