export function render() {
  return `
<div id="sec-sec54" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.4</div>
  <div class="sec-obj-tag">5.4 — Summarize Elements of Effective Security Compliance</div>
  <div class="sec-title">Security Compliance &amp; Privacy</div>
  <div class="sec-lead">Compliance is the process of adhering to laws, regulations, and standards. Organizations face legal, financial, and reputational consequences for non-compliance. The exam tests regulatory identification by industry and understanding of privacy obligations, data roles, and enforcement.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Key Regulations — Know Which Applies Where</div>
<table><thead><tr><th>Regulation</th><th>Applies To</th><th>Scope</th><th>Key Penalty</th></tr></thead><tbody>
<tr><td><strong>GDPR</strong></td><td>Any org processing EU citizen data</td><td>Personal data privacy rights, breach notification (72 hrs)</td><td>Up to €20M or 4% of annual global turnover (whichever is higher)</td></tr>
<tr><td><strong>HIPAA</strong></td><td>US healthcare providers, insurers, business associates</td><td>Protection of Protected Health Information (PHI)</td><td>$100–$50,000 per violation; max $1.9M per year per violation category</td></tr>
<tr><td><strong>PCI DSS</strong></td><td>Any org that stores, processes, or transmits payment card data</td><td>12 requirements covering cardholder data environment</td><td>Fines $5K–$100K/month; loss of card processing rights</td></tr>
<tr><td><strong>CCPA</strong></td><td>California businesses meeting size thresholds</td><td>California residents' data rights (access, delete, opt-out)</td><td>Up to $7,500 per intentional violation</td></tr>
<tr><td><strong>SOX</strong></td><td>US publicly traded companies</td><td>Financial reporting integrity; IT controls over financial systems</td><td>Criminal penalties for executives; fines up to $5M</td></tr>
<tr><td><strong>ISO 27001</strong></td><td>Voluntary (any organization globally)</td><td>Information Security Management System (ISMS) framework</td><td>No legal penalty — certification loss</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>GDPR exam traps:</strong> (1) It applies to ANY organization processing EU citizen data, regardless of where the org is located. (2) 72-hour breach notification is required. (3) The fine is the HIGHER of €20M or 4% of annual global turnover.</div>

<div class="h2">Consequences of Non-Compliance</div>
<div class="cards">
  <div class="card red"><div class="card-title">Financial Fines</div><p>Regulatory fines can be massive — GDPR up to €20M, HIPAA up to $1.9M/year, PCI DSS $100K/month. These are per-violation and can compound quickly after a breach.</p></div>
  <div class="card amber"><div class="card-title">Sanctions &amp; Restrictions</div><p>Regulatory bodies can impose operational restrictions, require external audits, mandate remediation programs, or suspend licenses. May be more damaging than fines.</p></div>
  <div class="card purple"><div class="card-title">Reputational Damage</div><p>Public disclosure of compliance failures damages customer trust, stock price, and partner relationships. Long-term revenue impact often exceeds the fine itself.</p></div>
  <div class="card blue"><div class="card-title">Contractual Impacts</div><p>Vendors, partners, and customers may terminate contracts. Loss of payment processing rights (PCI). Loss of government contract eligibility (FISMA/FedRAMP).</p></div>
</div>

<div class="h2">Compliance Monitoring</div>
<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody>
<tr><td><strong>Internal Audits</strong></td><td>Self-assessments conducted by the organization's own compliance or internal audit team</td></tr>
<tr><td><strong>External Audits</strong></td><td>Independent third-party assessment — required by some regulations (SOC 2, PCI QSA)</td></tr>
<tr><td><strong>Attestation</strong></td><td>Formal declaration by a responsible party that controls are operating effectively. Annual officer sign-off.</td></tr>
<tr><td><strong>Due Diligence</strong></td><td>Ongoing investigation to verify compliance claims — reviewing evidence, testing controls</td></tr>
<tr><td><strong>Automation</strong></td><td>Continuous compliance monitoring using tools that scan configurations, check patch levels, verify policy adherence</td></tr>
</tbody></table>

<div class="h2">Privacy Fundamentals</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Data Subject</div><p>The individual whose personal data is being collected/processed. Has rights: access, correction, deletion, portability, objection. The "person" in privacy law.</p></div>
  <div class="card gold"><div class="card-title">Data Controller</div><p>Determines the <em>purpose and means</em> of processing personal data. Bears primary legal responsibility under GDPR. Example: a company that collects customer data to offer services.</p></div>
  <div class="card amber"><div class="card-title">Data Processor</div><p>Processes data ON BEHALF of the controller. Example: a cloud provider storing customer data for a business. Must follow controller instructions; has its own GDPR obligations.</p></div>
  <div class="card green"><div class="card-title">Data Owner</div><p>Within an organization, the senior person accountable for a specific data set — decides classification level, access rules, and retention periods.</p></div>
</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Controller vs Processor:</strong> A hospital (controller) hires a cloud backup company (processor). The hospital decides WHY and HOW data is used. The backup company just stores it. If a vendor merely processes data for you, they're a processor. If they decide what to do with it, they're a controller.</div>

<div class="h2">Data Subject Rights (GDPR)</div>
<ul>
  <li><strong>Right of Access</strong> — subjects can request a copy of all data held about them</li>
  <li><strong>Right to Rectification</strong> — subjects can demand correction of inaccurate data</li>
  <li><strong>Right to Erasure (Right to be Forgotten)</strong> — subjects can request deletion of their data in most circumstances</li>
  <li><strong>Right to Data Portability</strong> — subjects can receive their data in a machine-readable format</li>
  <li><strong>Right to Object</strong> — subjects can object to processing for specific purposes (marketing, profiling)</li>
  <li><strong>Right to Restriction of Processing</strong> — subjects can request processing be limited in certain scenarios</li>
</ul>

<div class="h2">Data Inventory &amp; Retention</div>
<ul>
  <li><strong>Data Inventory</strong> — catalog of all data types, locations, classification levels, and data owners</li>
  <li><strong>Data Retention Policy</strong> — defines how long each data type is kept and when it must be deleted</li>
  <li><strong>Data Minimization</strong> — only collect and retain what is necessary (GDPR principle)</li>
  <li><strong>Legal Hold</strong> — override of retention policy when data may be needed for litigation</li>
</ul>
</div></div>
  `
}
