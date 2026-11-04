//#region src/chapters/chapter2/intro.js
function render() {
	return `
<div id="sec-intro2" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Domain 2.0</div>
  <div class="sec-obj-tag" style="background:rgba(255,170,48,.1);color:var(--amber);border-color:rgba(255,170,48,.2)">Domain 2.0 — 22% of Exam</div>
  <div class="sec-title">Threats, Vulnerabilities,<br>and Mitigations</div>
  <div class="sec-lead">The largest domain after Security Operations. Domain 2 is where you learn to think like an attacker — who are they, how do they get in, what weaknesses do they exploit, how do you detect them, and how do you stop them. Heavy on scenario questions. Every sub-objective here has real-world examples.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">What's In Chapter 2</div>
<div class="cards">
  <div class="card red"><div class="card-icon">🎭</div><div class="card-title">2.1 — Threat Actors &amp; Motivations</div><p>Nation-states, script kiddies, hacktivists, insiders, organized crime, shadow IT. Each with attributes: internal/external, resources, sophistication. Plus all 10 motivations.</p></div>
  <div class="card amber"><div class="card-icon">🚪</div><div class="card-title">2.2 — Threat Vectors &amp; Attack Surfaces</div><p>How attackers get in: email/SMS/IM, removable devices, open ports, default creds, supply chain, social engineering (phishing, vishing, smishing, pretexting, watering hole, typosquatting).</p></div>
  <div class="card purple"><div class="card-icon">🔓</div><div class="card-title">2.3 — Types of Vulnerabilities</div><p>Application (buffer overflow, race conditions, SQLi, XSS), hardware, virtualization (VM escape), cloud supply chain, cryptographic, misconfiguration, mobile (jailbreaking, sideloading), zero-day.</p></div>
  <div class="card green"><div class="card-icon">🔍</div><div class="card-title">2.4 — Indicators of Malicious Activity</div><p>All malware types (ransomware through rootkits), physical/network/application/cryptographic/password attacks, and 9 behavioral indicators like impossible travel and missing logs.</p></div>
  <div class="card blue"><div class="card-icon">🛡</div><div class="card-title">2.5 — Mitigation Techniques</div><p>Segmentation, access control, application allowlisting, isolation, patching, encryption, monitoring, least privilege, configuration enforcement, decommissioning, and 7 hardening techniques.</p></div>
</div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam strategy for Domain 2:</strong> At 22%, expect roughly 20 questions. Most will be SCENARIO-based. Practice mapping: given an attack description → identify the attack type, the threat actor, and the best mitigation. This domain requires you to recognize attacks from symptoms, not just definitions.</div>

<div class="h2">Threat Actor vs. Attack Type — Know the Difference</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Threat Actor</td><td>The WHO — the entity performing the attack</td><td>Nation-state, insider, organized crime</td></tr>
<tr><td>Motivation</td><td>The WHY — what drives the actor</td><td>Financial gain, espionage, revenge</td></tr>
<tr><td>Threat Vector</td><td>The HOW — the method used to gain access</td><td>Phishing email, USB drop, open port</td></tr>
<tr><td>Vulnerability</td><td>The WEAKNESS — what the vector exploits</td><td>Buffer overflow, default credentials</td></tr>
<tr><td>Attack</td><td>The ACTION — what happens when vector meets vulnerability</td><td>Ransomware infection, data breach</td></tr>
<tr><td>Indicator</td><td>The EVIDENCE — how you detect it happened</td><td>Account lockout, impossible travel</td></tr>
<tr><td>Mitigation</td><td>The FIX — how you prevent or reduce impact</td><td>Patching, segmentation, MFA</td></tr>
</tbody>
</table></div>

</div></div>
  `;
}
//#endregion
export { render };
