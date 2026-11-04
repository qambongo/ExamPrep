export function render() {
  return `
<div id="sec-sec55" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.5</div>
  <div class="sec-obj-tag">5.5 — Explain Types and Purposes of Audits and Assessments</div>
  <div class="sec-title">Audits, Assessments &amp; Penetration Testing</div>
  <div class="sec-lead">Audits verify that controls are working. Assessments evaluate the security posture. Penetration tests actively attempt to exploit vulnerabilities. The exam distinguishes these carefully — and heavily tests pen testing environment types (white/gray/black box) and reconnaissance methods.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Audit Types</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Internal Audits</div><p>Performed by the organization's own audit team. Checks compliance with policies, standards, and regulatory requirements. Identifies gaps before external auditors find them. Includes self-assessments and compliance audits conducted by the internal audit committee.</p></div>
  <div class="card gold"><div class="card-title">External Audits</div><p>Conducted by independent third parties. More objective. Required by many regulations (SOC 2, PCI, HIPAA). Types: regulatory examinations (conducted by regulators), independent third-party assessments, certification audits (ISO 27001).</p></div>
  <div class="card green"><div class="card-title">Attestation</div><p>A responsible official formally declares that security controls are operating as intended. Can be internal (officer signs off) or external (CPA/auditor attests). Common in SOX, SOC reports, and annual compliance certifications.</p></div>
</div>

<div class="h2">Penetration Testing</div>
<p><strong>Penetration testing</strong> is an authorized, simulated cyberattack to identify and exploit vulnerabilities before real attackers do. It goes beyond scanning — it actively attempts exploitation.</p>

<div class="h3">Pen Testing Environments (Most Tested)</div>
<table><thead><tr><th>Environment</th><th>Also Called</th><th>What the Tester Knows</th><th>Exam Clue</th></tr></thead><tbody>
<tr><td><strong>Known</strong></td><td>White-box</td><td>Full knowledge: network diagrams, source code, credentials, architecture docs</td><td>"Full knowledge," "insider perspective," "most thorough"</td></tr>
<tr><td><strong>Partially Known</strong></td><td>Gray-box</td><td>Partial knowledge: some documentation, limited credentials (e.g., standard user account)</td><td>"Some knowledge," "hybrid," "simulates insider threat"</td></tr>
<tr><td><strong>Unknown</strong></td><td>Black-box</td><td>No knowledge: tester starts with only the target name/IP, like a real attacker</td><td>"No prior knowledge," "external attacker perspective," "realistic"</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Memory trick:</strong> White box = you can SEE everything (full transparency). Black box = you can see NOTHING (opaque). Gray box = somewhere in between (translucent).</div>

<div class="h3">Penetration Testing Types</div>
<div class="cards">
  <div class="card amber"><div class="card-title">Physical</div><p>Tests physical security controls — attempts to enter the building without authorization, clone access badges, tailgate through doors, access server rooms. Tests guard effectiveness and physical barriers.</p></div>
  <div class="card red"><div class="card-title">Offensive (Red Team)</div><p>Simulates a full attack by a threat actor. Red team attacks; defenders (blue team) try to detect/respond. Goal: test both the security controls AND the response capabilities. Highly realistic.</p></div>
  <div class="card blue"><div class="card-title">Defensive (Blue Team)</div><p>Focuses on detection and response capabilities. Evaluates whether SIEM, SOC, and IR procedures would catch an attacker. Can run alongside red team exercises.</p></div>
  <div class="card purple"><div class="card-title">Integrated (Purple Team)</div><p>Red and blue teams collaborate — attackers share techniques with defenders in real time. Maximizes learning. More training exercise than realistic test. Builds defensive capabilities faster.</p></div>
</div>

<div class="h2">Reconnaissance</div>
<p>Reconnaissance is the first phase of penetration testing (and real attacks) — gathering information about the target.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Passive Reconnaissance</div><p>Gathering information WITHOUT directly interacting with the target systems. Leaves no logs on target. Examples: OSINT (Google, LinkedIn, job postings), WHOIS lookups, DNS queries, reviewing public records, analyzing leaked credentials on paste sites.</p></div>
  <div class="card red"><div class="card-title">Active Reconnaissance</div><p>Directly interacting with target systems to gather information. Target's systems MAY detect and log this activity. Examples: port scanning (Nmap), vulnerability scanning, banner grabbing, ping sweeps, web application crawling.</p></div>
</div>
<div class="alert warn"><span class="alert-icon">⚠️</span><strong>Active recon is not passive:</strong> Even if "just scanning," active reconnaissance involves sending packets to the target — it CAN be detected. Passive recon avoids touching the target entirely.</div>

<div class="h2">Vulnerability Assessment vs Penetration Test</div>
<table><thead><tr><th></th><th>Vulnerability Assessment</th><th>Penetration Test</th></tr></thead><tbody>
<tr><td><strong>Goal</strong></td><td>Find vulnerabilities</td><td>Find AND exploit vulnerabilities</td></tr>
<tr><td><strong>Depth</strong></td><td>Broad scan, identifies issues</td><td>Deep, active exploitation attempt</td></tr>
<tr><td><strong>Risk</strong></td><td>Low — just scanning</td><td>Higher — may cause disruption</td></tr>
<tr><td><strong>Output</strong></td><td>List of vulnerabilities with severity</td><td>Proof-of-exploitation + impact analysis</td></tr>
<tr><td><strong>Frequency</strong></td><td>Continuous/frequent</td><td>Periodic (annual, on major changes)</td></tr>
</tbody></table>
</div></div>
  `
}
