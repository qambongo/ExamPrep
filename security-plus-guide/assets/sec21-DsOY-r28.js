//#region src/chapters/chapter2/sec21.js
function render() {
	return `
<div id="sec-sec21" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 2.0 <span class="sec-breadcrumb-sep">›</span> Objective 2.1</div>
  <div class="sec-obj-tag" style="background:rgba(255,77,106,.1);color:var(--red);border-color:rgba(255,77,106,.2)">Objective 2.1</div>
  <div class="sec-title">Compare and Contrast<br>Threat Actors and Motivations</div>
  <div class="sec-lead">Every attack has a perpetrator. Understanding WHO is attacking, WHY they're motivated, and what CAPABILITIES they have changes everything about how you defend. The exam expects you to match threat actors to their attributes and likely attack methods.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Threat Actors — The Six Types</div>

<div class="tbl-wrap"><table>
<thead><tr><th>Threat Actor</th><th>Internal/External</th><th>Resources</th><th>Sophistication</th><th>Primary Motivation</th></tr></thead>
<tbody>
<tr><td><strong>Nation-State</strong></td><td><span class="tag blue">Both</span></td><td><span class="tag green">Very High</span></td><td><span class="tag red">APT Level</span></td><td>Espionage, sabotage, geopolitical</td></tr>
<tr><td><strong>Unskilled Attacker (Script Kiddie)</strong></td><td><span class="tag amber">External</span></td><td><span class="tag red">Low</span></td><td><span class="tag red">Low</span></td><td>Thrill, notoriety, curiosity</td></tr>
<tr><td><strong>Hacktivist</strong></td><td><span class="tag amber">External</span></td><td><span class="tag amber">Low–Moderate</span></td><td><span class="tag amber">Moderate</span></td><td>Political/social/environmental causes</td></tr>
<tr><td><strong>Insider Threat</strong></td><td><span class="tag red">Internal</span></td><td><span class="tag amber">Varies</span></td><td><span class="tag amber">Low–High</span></td><td>Financial gain, revenge, coercion</td></tr>
<tr><td><strong>Organized Crime</strong></td><td><span class="tag amber">External</span></td><td><span class="tag green">High</span></td><td><span class="tag amber">High</span></td><td>Financial gain, ransomware, fraud</td></tr>
<tr><td><strong>Shadow IT</strong></td><td><span class="tag red">Internal</span></td><td><span class="tag red">Low</span></td><td><span class="tag red">Low–Moderate</span></td><td>Productivity, convenience, bypassing IT</td></tr>
</tbody>
</table></div>

<div class="h2">Deep Dive — Each Threat Actor</div>

<div class="def-block">
  <div class="def-num">🏛</div>
  <div class="def-content">
    <div class="def-title">Nation-State Actors</div>
    <div class="def-text">Government-sponsored groups conducting cyber operations for strategic, military, or economic advantage. They use Advanced Persistent Threats (APTs) — long-duration, stealthy campaigns designed to maintain access for months or years while extracting intelligence. Examples: APT1 (China), Lazarus Group (North Korea), Cozy Bear (Russia).<br><br><strong>Key indicator:</strong> Stuxnet — the nation-state cyberweapon that destroyed Iranian nuclear centrifuges by exploiting 4 zero-day vulnerabilities. Too sophisticated for any non-state actor.</div>
    <div class="def-examples"><span class="def-ex">APT</span><span class="def-ex">Zero-days</span><span class="def-ex">Supply chain attacks</span><span class="def-ex">Custom malware</span><span class="def-ex">Long dwell time</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">💻</div>
  <div class="def-content">
    <div class="def-title">Unskilled Attackers (Script Kiddies)</div>
    <div class="def-text">Lack technical skills to write their own exploits. Download and run pre-built tools, exploit kits, or scripts written by others. Attack opportunistically — targeting easy, unpatched systems rather than specific organizations. More noise than threat, but still dangerous because unpatched systems are everywhere.<br><br><strong>Key characteristic:</strong> They use KNOWN tools against KNOWN vulnerabilities — easily detected by up-to-date defenses.</div>
    <div class="def-examples"><span class="def-ex">Exploit kits</span><span class="def-ex">Pre-written scripts</span><span class="def-ex">Low skill</span><span class="def-ex">Opportunistic</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">✊</div>
  <div class="def-content">
    <div class="def-title">Hacktivists</div>
    <div class="def-text">Hacker + activist. Attack organizations they perceive as morally wrong — governments, corporations, political parties. Goal is publicity and disruption, not necessarily financial gain. Anonymous is the most famous example. Attacks often include website defacement, DDoS to take services offline, and data leaks to expose perceived wrongdoing.<br><br><strong>Key indicator:</strong> They often ANNOUNCE their attacks to maximize publicity — they want you to know they did it.</div>
    <div class="def-examples"><span class="def-ex">DDoS</span><span class="def-ex">Defacement</span><span class="def-ex">Data leaks</span><span class="def-ex">Anonymous</span><span class="def-ex">Political motivation</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">👤</div>
  <div class="def-content">
    <div class="def-title">Insider Threats</div>
    <div class="def-text">The most dangerous threat type because they have LEGITIMATE ACCESS and know where sensitive data lives. Three categories: (1) Malicious insiders — deliberately harm the organization. (2) Negligent insiders — accidentally expose data through poor practices. (3) Compromised insiders — their credentials were stolen and used by external actors.<br><br><strong>Why they're hardest to detect:</strong> They bypass perimeter defenses entirely. Their actions look normal — they're supposed to be accessing those systems.</div>
    <div class="def-examples"><span class="def-ex">Legitimate access</span><span class="def-ex">Trusted position</span><span class="def-ex">Hard to detect</span><span class="def-ex">Revenge/financial</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">💰</div>
  <div class="def-content">
    <div class="def-title">Organized Crime</div>
    <div class="def-text">Professional criminal enterprises applying business-like structure to cybercrime. They operate like companies — with R&D teams, customer service (for ransomware victims), and sales teams (selling stolen data on dark web marketplaces). Primary motivation is always financial. Run large-scale ransomware campaigns, banking trojans, credential theft operations.<br><br><strong>Real example:</strong> WannaCry ransomware — highly coordinated global campaign demanding cryptocurrency ransom.</div>
    <div class="def-examples"><span class="def-ex">Ransomware-as-a-Service</span><span class="def-ex">Data brokers</span><span class="def-ex">Banking trojans</span><span class="def-ex">Financial motivation</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">💾</div>
  <div class="def-content">
    <div class="def-title">Shadow IT</div>
    <div class="def-text">Employees using unauthorized apps, cloud services, or devices without IT approval. Usually NOT malicious — they just want to be productive. But creates serious risk: data stored in unmanaged apps, no security controls, no visibility. Example: using personal Dropbox to share work files, or using unapproved SaaS tools.<br><br><strong>The security problem:</strong> IT can't protect what it doesn't know about. Shadow IT creates data leakage paths and bypasses DLP controls.</div>
    <div class="def-examples"><span class="def-ex">Unapproved SaaS</span><span class="def-ex">Personal cloud storage</span><span class="def-ex">No oversight</span><span class="def-ex">Data leakage risk</span></div>
  </div>
</div>

<div class="h2 gold">10 Threat Actor Motivations</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Motivation</th><th>Primary Actor(s)</th><th>Real Example</th></tr></thead>
<tbody>
<tr><td><strong>Data Exfiltration</strong> — steal and transfer sensitive data</td><td>Nation-state, Organized crime</td><td>Snowden NSA leak; APT1 stealing corporate IP</td></tr>
<tr><td><strong>Espionage</strong> — gather intelligence covertly</td><td>Nation-state, Insider</td><td>APT1 campaign against 141 US companies</td></tr>
<tr><td><strong>Service Disruption</strong> — make services unavailable</td><td>Hacktivist, Organized crime</td><td>2016 Dyn DDoS — took down Twitter, Reddit, Netflix</td></tr>
<tr><td><strong>Blackmail</strong> — extort via threat of data release</td><td>Organized crime</td><td>Ransomware + threat to publish stolen data</td></tr>
<tr><td><strong>Financial Gain</strong> — direct monetary theft</td><td>Organized crime, Insider</td><td>WannaCry; banking trojan fraud</td></tr>
<tr><td><strong>Philosophical/Political Beliefs</strong> — protest injustice</td><td>Hacktivist</td><td>Anonymous vs. government censorship</td></tr>
<tr><td><strong>Ethical</strong> — improve security (white hats)</td><td>Security researchers</td><td>Bug bounty hunters; responsible disclosure</td></tr>
<tr><td><strong>Revenge</strong> — retaliation for perceived wrong</td><td>Insider (disgruntled)</td><td>Former employee deletes data after firing</td></tr>
<tr><td><strong>Disruption/Chaos</strong> — cause disorder for its own sake</td><td>Script kiddies, Hacktivist</td><td>GitHub DDoS 2018 — no political goal, just chaos</td></tr>
<tr><td><strong>War</strong> — cyberattack as weapon in conflict</td><td>Nation-state</td><td>Stuxnet against Iran; Russia vs Ukraine power grid</td></tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam pattern:</strong> Given a scenario describing an attacker's behavior and goal, identify the threat actor type AND motivation. "An attacker encrypted files and demanded Bitcoin" → Organized Crime, Financial Gain. "A former employee deleted the production database the day after being fired" → Insider Threat, Revenge.</div>

</div></div>
  `;
}
//#endregion
export { render };
