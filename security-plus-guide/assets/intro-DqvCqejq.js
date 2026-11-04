//#region src/chapters/chapter1/intro.js
function render() {
	return `
<div id="sec-intro" class="section active">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Domain 1.0</div>
  <div class="sec-obj-tag gold">Domain 1.0 — 12% of Exam</div>
  <div class="sec-title">General Security Concepts</div>
  <div class="sec-lead">This chapter covers the bedrock of everything in Security+. Before you can defend a network, you must speak the language — control categories, the CIA Triad, Zero Trust, change management, and cryptography. These concepts recur in every domain on the exam.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">What's In This Chapter</div>
<div class="cards">
  <div class="card blue"><div class="card-icon">🛡</div><div class="card-title">1.1 — Security Controls</div><p>Categories (Technical, Managerial, Operational, Physical) and types (Preventive, Deterrent, Detective, Corrective, Compensating, Directive).</p></div>
  <div class="card gold"><div class="card-icon">🔐</div><div class="card-title">1.2 — Fundamental Concepts</div><p>CIA Triad, Non-repudiation, AAA framework, Gap Analysis, Zero Trust (Control Plane + Data Plane), Physical Security, Deception Tech.</p></div>
  <div class="card amber"><div class="card-icon">🔄</div><div class="card-title">1.3 — Change Management</div><p>Business processes (approval, ownership, backout plans), technical implications (allow/deny lists, legacy apps), and documentation practices.</p></div>
  <div class="card purple"><div class="card-icon">🔑</div><div class="card-title">1.4 — Cryptographic Solutions</div><p>PKI, encryption levels, symmetric vs asymmetric, key management tools, hashing, salting, digital signatures, blockchain, and certificates.</p></div>
</div>

<div class="h2">Exam Weight Breakdown</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Domain</th><th>% of Exam</th><th>Chapter Focus</th></tr></thead>
<tbody>
<tr><td>1.0 General Security Concepts</td><td><span class="tag blue">12%</span></td><td>This chapter</td></tr>
<tr><td>2.0 Threats, Vulnerabilities, Mitigations</td><td><span class="tag amber">22%</span></td><td>Largest domain</td></tr>
<tr><td>3.0 Security Architecture</td><td><span class="tag blue">18%</span></td><td>Infrastructure design</td></tr>
<tr><td>4.0 Security Operations</td><td><span class="tag green">28%</span></td><td>Largest — day-to-day ops</td></tr>
<tr><td>5.0 Program Management & Oversight</td><td><span class="tag amber">20%</span></td><td>Governance & compliance</td></tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam tip:</strong> Domain 1 is 12% of the exam — roughly 10-11 questions. Every definition, every control type, and the Zero Trust components are all fair game in scenario-based questions. Know the difference between control CATEGORIES (what it is) and control TYPES (what it does).</div>

</div></div>
  `;
}
//#endregion
export { render };
