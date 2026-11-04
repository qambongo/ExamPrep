export function render() {
  return `
<div id="sec-intro5" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Domain 5.0</div>
  <div class="sec-obj-tag gold">Domain 5.0 — 14% of Exam</div>
  <div class="sec-title">Security Program Management &amp; Oversight</div>
  <div class="sec-lead">Domain 5 is the governance layer — how organizations establish policies, assess risk, manage third parties, maintain compliance, conduct audits, and run security awareness programs. Expect 12–13 questions with heavy emphasis on scenario-based risk calculations and regulatory identification.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">
<div class="h2">What's In This Chapter</div>
<div class="cards">
  <div class="card blue"><div class="card-icon">📜</div><div class="card-title">5.1 — Security Governance</div><p>Policies, standards, procedures, guidelines. AUP, BC, DR, IR, Change Management. Onboarding/offboarding, playbooks.</p></div>
  <div class="card gold"><div class="card-icon">⚖️</div><div class="card-title">5.2 — Risk Management</div><p>Qualitative vs quantitative. SLE = AV × EF. ALE = SLE × ARO. Risk register, BIA: RTO, RPO, MTTR, MTBF. Risk appetite types.</p></div>
  <div class="card amber"><div class="card-icon">🤝</div><div class="card-title">5.3 — Third-Party Risk</div><p>Vendor assessment methods, agreement types (SLA/MOA/MOU/MSA/SOW/NDA/BPA), due diligence, supply chain analysis.</p></div>
  <div class="card green"><div class="card-icon">✅</div><div class="card-title">5.4 — Compliance</div><p>GDPR, HIPAA, PCI DSS, CCPA, SOX, ISO 27001. Fines, data subject rights, data controller vs processor.</p></div>
  <div class="card purple"><div class="card-icon">🔍</div><div class="card-title">5.5 — Audits &amp; Assessments</div><p>Internal/external audits, attestation, pen testing (white/gray/black box), passive vs active recon.</p></div>
  <div class="card red"><div class="card-icon">🎓</div><div class="card-title">5.6 — Security Awareness</div><p>Phishing simulations, anomalous behavior recognition, AUP, insider threats, security culture, awareness program lifecycle.</p></div>
</div>
<table><thead><tr><th>Objective</th><th>Topic</th><th>Exam Weight Focus</th></tr></thead><tbody>
<tr><td>5.1</td><td>Security Governance</td><td>Policy hierarchy, change mgmt steps</td></tr>
<tr><td>5.2</td><td>Risk Management Process</td><td>SLE/ALE/ARO formulas, risk strategies, BIA metrics</td></tr>
<tr><td>5.3</td><td>Third-Party Risk Management</td><td>Agreement types, right-to-audit, due diligence</td></tr>
<tr><td>5.4</td><td>Compliance</td><td>Regulations, privacy rules, non-compliance consequences</td></tr>
<tr><td>5.5</td><td>Audits &amp; Assessments</td><td>Pen testing environments, recon types, attestation</td></tr>
<tr><td>5.6</td><td>Security Awareness</td><td>Phishing programs, insider threats, training lifecycle</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam strategy for Domain 5:</strong> Many questions give a scenario and ask you to identify the regulation, agreement type, risk strategy, or metric. Memorize risk formulas cold. Know which agreement is legally binding vs non-binding. Know GDPR/HIPAA fine structures. Be able to distinguish white/gray/black-box pen testing immediately.</div>
</div></div>
  `
}
