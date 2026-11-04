export function render() {
  return `
<div id="sec-sec53" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.3</div>
  <div class="sec-obj-tag">5.3 — Third-Party Risk Assessment and Management</div>
  <div class="sec-title">Third-Party Risk Management</div>
  <div class="sec-lead">Your security posture is only as strong as your weakest vendor. Third-party risk management covers how organizations assess, select, contract with, and monitor external vendors and partners. The exam heavily tests agreement type recognition — know which document fits which scenario.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Vendor Assessment Methods</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Penetration Testing</div><p>Authorize ethical hackers to test vendor systems. Requires explicit contractual permission. Verifies security claims rather than trusting them. Rules of Engagement define scope and limits.</p></div>
  <div class="card gold"><div class="card-title">Right-to-Audit Clause</div><p>Contractual provision that gives your organization the right to inspect the vendor's security practices, controls, and logs. Should be included in all vendor contracts with access to sensitive data.</p></div>
  <div class="card amber"><div class="card-title">Questionnaires</div><p>Standardized security questionnaires (e.g., SIG, CAIQ) sent to vendors asking about their controls, policies, and certifications. Efficient for large vendor pools but reliant on honest responses.</p></div>
  <div class="card green"><div class="card-title">Independent Assessments</div><p>Third-party audits (e.g., SOC 2 Type II report) performed by certified auditors. More objective than vendor self-attestation. SOC 2 reports cover Security, Availability, Confidentiality, Processing Integrity, Privacy.</p></div>
  <div class="card purple"><div class="card-title">Supply Chain Analysis</div><p>Evaluates security risks throughout the entire vendor supply chain — hardware manufacturers, software libraries, subcontractors. Identifies risks like counterfeit components, backdoors, or compromised updates.</p></div>
</div>

<div class="h2">Vendor Selection: Due Diligence</div>
<ul>
  <li><strong>Financial stability</strong> — will the vendor still exist in 3 years?</li>
  <li><strong>Security certifications</strong> — ISO 27001, SOC 2, PCI DSS compliance</li>
  <li><strong>References and reputation</strong> — prior breach history, customer reviews</li>
  <li><strong>Conflict of interest</strong> — does the vendor have a relationship with a competitor or regulator?</li>
  <li><strong>Geographic location</strong> — data sovereignty laws may apply to where data is stored</li>
  <li><strong>Contractual willingness</strong> — will vendor accept right-to-audit, data handling requirements, breach notification clauses?</li>
</ul>

<div class="h2">Agreement Types — The Big 7</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>This table is extremely high-yield.</strong> The exam gives a scenario and asks which agreement type applies. Know each one cold.</div>
<table><thead><tr><th>Agreement</th><th>Full Name</th><th>Purpose</th><th>Legally Binding?</th></tr></thead><tbody>
<tr><td><strong>SLA</strong></td><td>Service Level Agreement</td><td>Defines minimum performance standards the vendor must meet — uptime %, response times, support hours. Enforceable with penalties for non-compliance.</td><td>Yes</td></tr>
<tr><td><strong>MOA</strong></td><td>Memorandum of Agreement</td><td>Formal agreement between two parties defining roles, responsibilities, and terms of cooperation. More formal than MOU.</td><td>Yes</td></tr>
<tr><td><strong>MOU</strong></td><td>Memorandum of Understanding</td><td>Describes general intent to work together. Non-binding framework. Often a stepping stone before a formal contract.</td><td>No</td></tr>
<tr><td><strong>MSA</strong></td><td>Master Service Agreement</td><td>Umbrella contract covering the ongoing relationship. Individual projects are covered by SOWs under this master agreement.</td><td>Yes</td></tr>
<tr><td><strong>SOW / WO</strong></td><td>Statement of Work / Work Order</td><td>Defines the specific work, deliverables, timeline, and cost for a particular project. Executed under an MSA.</td><td>Yes</td></tr>
<tr><td><strong>NDA</strong></td><td>Non-Disclosure Agreement</td><td>Prevents sharing of confidential information with third parties. Signed before sharing sensitive data or entering discussions.</td><td>Yes</td></tr>
<tr><td><strong>BPA</strong></td><td>Business Partner Agreement</td><td>Defines the terms of a business partnership — responsibilities, profit sharing, liability, data handling expectations.</td><td>Yes</td></tr>
</tbody></table>

<div class="h2">Key Distinction: MOU vs MOA</div>
<div class="cards">
  <div class="card amber"><div class="card-title">MOU — Intent, Not Obligation</div><p>"We agree that we intend to work together on X." No legal penalties for non-performance. Used early in negotiations, between government agencies, or for informal partnerships. Exam clue: <strong>"general intent," "non-binding," "framework for cooperation."</strong></p></div>
  <div class="card blue"><div class="card-title">MOA — Formal Commitment</div><p>"We agree to perform these specific actions by these dates." Legally enforceable. Defines specific obligations, responsibilities, and accountability. Exam clue: <strong>"formal agreement," "defines responsibilities," "between two organizations."</strong></p></div>
</div>

<div class="h2">Vendor Monitoring</div>
<p>Third-party risk doesn't end at contract signing. Continuous monitoring is essential:</p>
<ul>
  <li><strong>Annual reviews</strong> — re-assess vendor risk posture, check for new certifications or compliance issues</li>
  <li><strong>Security alerts</strong> — monitor vendor breach notifications, CVE disclosures for vendor software</li>
  <li><strong>Performance against SLA</strong> — track uptime, response times, incident counts against contracted minimums</li>
  <li><strong>Access reviews</strong> — audit what systems the vendor can access; remove unnecessary permissions</li>
  <li><strong>Rules of Engagement</strong> — if conducting authorized testing against vendor systems, define scope, timing, targets in writing</li>
</ul>
</div></div>
  `
}
