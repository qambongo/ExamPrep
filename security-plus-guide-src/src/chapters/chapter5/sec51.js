export function render() {
  return `
<div id="sec-sec51" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.1</div>
  <div class="sec-obj-tag">5.1 — Effective Security Governance</div>
  <div class="sec-title">Security Governance</div>
  <div class="sec-lead">Security governance is the framework of policies, standards, procedures, and guidelines that ensure an organization's security program aligns with its business objectives and legal requirements. It defines who is accountable, what is required, and how it is implemented.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Policy Hierarchy</div>
<p>The four-level hierarchy moves from <strong>mandatory and abstract</strong> at the top to <strong>optional and specific</strong> at the bottom. The exam tests whether you can correctly classify each level.</p>
<table><thead><tr><th>Level</th><th>Name</th><th>Mandatory?</th><th>Detail Level</th><th>Example</th></tr></thead><tbody>
<tr><td>1</td><td><strong>Policy</strong></td><td>Yes</td><td>High-level, strategic</td><td>"All sensitive data must be encrypted"</td></tr>
<tr><td>2</td><td><strong>Standard</strong></td><td>Yes</td><td>Specific, measurable</td><td>"AES-256 required for data at rest"</td></tr>
<tr><td>3</td><td><strong>Procedure</strong></td><td>Yes</td><td>Step-by-step instructions</td><td>"Run BitLocker encryption wizard on all laptops"</td></tr>
<tr><td>4</td><td><strong>Guideline</strong></td><td>No (recommended)</td><td>Flexible best practices</td><td>"Consider using a password manager"</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Key distinction:</strong> Guidelines are the ONLY non-mandatory level. Policies, standards, and procedures are all mandatory. If a question says "recommended best practice" or "optional," the answer is Guideline.</div>

<div class="h2">Policy Types</div>
<div class="cards">
  <div class="card blue"><div class="card-title">AUP — Acceptable Use Policy</div><p>Defines permitted and prohibited uses of organizational IT resources. Every employee must sign before getting access. Covers internet use, email, social media, software installation.</p></div>
  <div class="card gold"><div class="card-title">Information Security Policy</div><p>The master policy. Establishes the overall security framework, defines roles and responsibilities, sets requirements for all other security policies.</p></div>
  <div class="card amber"><div class="card-title">Business Continuity (BCP)</div><p>How operations continue during and after a disruption. Focuses on keeping business functions running — overlaps with disaster recovery but is broader.</p></div>
  <div class="card green"><div class="card-title">Disaster Recovery (DRP)</div><p>Technical plan for restoring IT systems after a disaster. Subset of BCP. Defines RTO, RPO, recovery procedures, backup strategies.</p></div>
  <div class="card purple"><div class="card-title">Incident Response (IRP)</div><p>Defines how security incidents are identified, classified, contained, eradicated, recovered, and documented. Maps to NIST/SANS IR lifecycle.</p></div>
  <div class="card red"><div class="card-title">Change Management Policy</div><p>Governs how changes to IT systems are requested, approved, tested, implemented, and documented. Prevents uncontrolled changes that introduce vulnerabilities.</p></div>
</div>

<div class="h2">Change Management Process</div>
<p>Change management ensures system modifications are controlled, documented, and reversible. The exam frequently tests the steps and their order.</p>
<table><thead><tr><th>Step</th><th>Action</th><th>Key Concept</th></tr></thead><tbody>
<tr><td>1</td><td><strong>Request</strong></td><td>Submit a formal Change Request (CR) describing the change</td></tr>
<tr><td>2</td><td><strong>Review &amp; Approve</strong></td><td>Change Advisory Board (CAB) evaluates risk, priority, and impact</td></tr>
<tr><td>3</td><td><strong>Test</strong></td><td>Test in a non-production environment; verify no unintended effects</td></tr>
<tr><td>4</td><td><strong>Schedule</strong></td><td>Plan a maintenance window — typically during low-usage hours</td></tr>
<tr><td>5</td><td><strong>Implement</strong></td><td>Execute the change with documentation at each step</td></tr>
<tr><td>6</td><td><strong>Backout Plan</strong></td><td>Pre-defined rollback procedure if the change causes problems</td></tr>
<tr><td>7</td><td><strong>Document</strong></td><td>Record what was changed, when, by whom, and the outcome</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Backout plan:</strong> The exam loves this. A backout plan (also called rollback plan) is the pre-defined procedure to UNDO a change if it fails. It is created BEFORE the change is implemented. If a question asks "what ensures a failed change can be reversed?" — Backout Plan.</div>

<div class="h2">Standards Types</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Password Standards</div><p>Minimum length (12+ chars), complexity requirements, history (can't reuse last 10), maximum age, and lockout thresholds. Specifies WHAT is required, not how to implement it.</p></div>
  <div class="card gold"><div class="card-title">Access Control Standards</div><p>Who gets access to what, under what conditions. Defines classification levels and access decision rules (need-to-know, least privilege).</p></div>
  <div class="card amber"><div class="card-title">Encryption Standards</div><p>Specifies required algorithms (AES-256, RSA-2048), key lengths, and approved protocols (TLS 1.2+). Prohibits weak algorithms (DES, MD5, RC4).</p></div>
  <div class="card green"><div class="card-title">Physical Security Standards</div><p>Badge requirements, tailgating prevention, clean desk policy, visitor escort procedures, secure disposal of hardware and media.</p></div>
</div>

<div class="h2">Onboarding &amp; Offboarding</div>
<table><thead><tr><th>Process</th><th>Key Security Actions</th></tr></thead><tbody>
<tr><td><strong>Onboarding</strong></td><td>Create accounts with least privilege, assign to correct groups, provide security training, have employee sign AUP and NDA, issue hardware with secure baseline applied</td></tr>
<tr><td><strong>Offboarding</strong></td><td>Immediately disable/delete all accounts, revoke all access and certificates, recover company hardware, transfer knowledge, exit interview, preserve audit logs</td></tr>
</tbody></table>
<div class="alert warn"><span class="alert-icon">⚠️</span><strong>Exam trap:</strong> Offboarding account disabling should happen <strong>immediately</strong> — not at end of day, not after notice period. Accounts must be disabled the moment employment ends. Failing to do so is a primary insider threat risk.</div>

<div class="h2">Playbooks</div>
<p>A <strong>playbook</strong> is a step-by-step response guide for a specific type of security incident. Unlike a general policy, a playbook is action-oriented and operational.</p>
<ul>
  <li>Ransomware Playbook: isolate infected host, identify patient zero, check backups, eradicate, restore</li>
  <li>Phishing Playbook: quarantine email, analyze headers, block sender/domain, check for credential compromise</li>
  <li>Data Breach Playbook: notify legal/compliance, assess scope, notify affected individuals, report to regulators</li>
  <li>DDoS Playbook: engage ISP, enable scrubbing, activate CDN, implement rate limiting</li>
</ul>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Playbook vs Runbook:</strong> A playbook guides decision-making through a security scenario. A runbook is a more routine operational checklist (e.g., daily backup verification). On the exam, incident response steps = playbook.</div>
</div></div>
  `
}
