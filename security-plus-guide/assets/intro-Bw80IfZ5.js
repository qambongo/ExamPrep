//#region src/chapters/chapter3/intro.js
function render() {
	return `
<div id="sec-intro3" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Domain 3.0</div>
  <div class="sec-obj-tag">18% of Exam</div>
  <div class="sec-title">Security Architecture</div>
  <div class="sec-lead">Domain 3 covers how enterprises design, build, and protect infrastructure — from cloud and hybrid environments to on-premises networks, data classification, and disaster recovery. It tests your ability to select the right architecture model and resilience strategy for a given scenario.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">
<div class="h2">What You'll Learn</div>
<div class="cards">
  <div class="card blue"><div class="card-icon">☁️</div><div class="card-title">3.1 — Architecture & Infrastructure</div><p>Cloud models, IaC, serverless, microservices, IoT, ICS/SCADA, virtualization, and HA.</p></div>
  <div class="card gold"><div class="card-icon">⚙️</div><div class="card-title">3.2 — Security Considerations</div><p>Availability, resilience, scalability, risk transference, patch management, and cost factors.</p></div>
  <div class="card amber"><div class="card-icon">🛡️</div><div class="card-title">3.3 — Enterprise Infrastructure</div><p>Device placement, security zones, attack surface, failure modes, firewalls, and port security.</p></div>
  <div class="card green"><div class="card-icon">🔒</div><div class="card-title">3.4 — Network Security</div><p>VPN, tunneling (TLS/IPSec), SD-WAN, SASE, and selecting effective security controls.</p></div>
  <div class="card purple"><div class="card-icon">📊</div><div class="card-title">3.5 — Data Protection</div><p>Data types, classifications, states (rest/transit/use), sovereignty, and security methods.</p></div>
  <div class="card red"><div class="card-icon">🔄</div><div class="card-title">3.6 — HA & Resilience</div><p>Load balancing, clustering, DR sites, backups, capacity planning, testing, and power.</p></div>
</div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Exam Weight:</strong> 18% — roughly 16 questions. Focus on cloud shared responsibility, firewall types, VPN/IPSec modes, DR site types, backup strategies, and data classification.</div>
</div></div>
  `;
}
//#endregion
export { render };
