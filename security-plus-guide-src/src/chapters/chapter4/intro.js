export function render() {
  return `
<div id="sec-intro4" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Domain 4.0</div>
  <div class="sec-obj-tag">Domain 4.0 — 28% of Exam</div>
  <div class="sec-title">Security Operations</div>
  <div class="sec-lead">The largest domain on the exam. Domain 4 covers what security teams actually do every day — hardening systems, hunting vulnerabilities, managing identities, responding to incidents, and building the automation that makes it all scale. Expect scenario-heavy questions testing your ability to choose the right tool or action in context.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">
<div class="h2">What's In This Chapter</div>
<div class="cards">
  <div class="card blue"><div class="card-title">4.1 — Secure Baselines &amp; Hardening</div><p>Establish, deploy, and maintain security baselines. Harden mobile, workstations, switches, routers, cloud, servers, ICS/SCADA, embedded systems, and IoT.</p></div>
  <div class="card gold"><div class="card-title">4.2 — Wireless &amp; Asset Management</div><p>Wireless installation (site surveys, heat maps), MDM, deployment models (BYOD/COPE/CYOD), connection methods, wireless security settings, and full asset lifecycle.</p></div>
  <div class="card amber"><div class="card-title">4.3 — Vulnerability Management</div><p>Identification methods (scans, pen testing, threat feeds, OSINT), CVSS scoring, CVE, false positives/negatives, prioritization, remediation, and validation.</p></div>
  <div class="card purple"><div class="card-title">4.4 — Security Alerting &amp; Monitoring</div><p>SIEM, log aggregation, alerting, scanning, archiving, alert tuning, SCAP, benchmarks, DLP, NetFlow, vulnerability scanners, antivirus, SNMP traps.</p></div>
  <div class="card blue"><div class="card-title">4.5 — Enterprise Security Capabilities</div><p>Firewalls (rules, ACLs, DMZ), IDS/IPS, web filters, OS security (Group Policy, SELinux), DNS filtering, email security (DMARC/DKIM/SPF), FIM, NAC, EDR/XDR, UBA.</p></div>
  <div class="card green"><div class="card-title">4.6 — Identity &amp; Access Management</div><p>MFA (biometrics, tokens, FIDO2), authentication factors, password best practices, password managers, passwordless auth, PAM tools, and access control models.</p></div>
  <div class="card amber"><div class="card-title">4.7/4.8 — Automation &amp; Incident Response</div><p>Use cases of automation, SOAR, incident response lifecycle (Prepare→Detect→Contain→Eradicate→Recover→Lessons Learned), threat hunting, tabletop exercises.</p></div>
  <div class="card purple"><div class="card-title">4.9 — Digital Forensics &amp; Data Sources</div><p>Log types (firewall, app, endpoint, IDS, network), metadata, packet captures, legal hold, chain of custody, acquisition, preservation, e-discovery, reporting.</p></div>
</div>
<div class="h2">Exam Weight</div>
<table class="table"><thead><tr><th>Sub-objective</th><th>Key Topics</th></tr></thead><tbody>
<tr><td>4.1 Secure Baselines</td><td>Establish, deploy, maintain; hardening targets across all device types</td></tr>
<tr><td>4.2 Asset Management</td><td>Acquisition, classification, inventory, enumeration, disposal, sanitization</td></tr>
<tr><td>4.3 Vulnerability Management</td><td>Scans, pen testing, CVSS, CVE, prioritization, remediation validation</td></tr>
<tr><td>4.4 Alerting &amp; Monitoring</td><td>SIEM, log aggregation, SCAP, DLP, NetFlow, vulnerability scanners</td></tr>
<tr><td>4.5 Enterprise Capabilities</td><td>Firewalls, IDS/IPS, web filters, email auth, FIM, NAC, EDR/XDR</td></tr>
<tr><td>4.6 IAM</td><td>MFA, PAM, access control models, passwords, passwordless</td></tr>
<tr><td>4.7 Automation</td><td>SOAR, provisioning, guard rails, CI/CD, APIs, scripting use cases</td></tr>
<tr><td>4.8 Incident Response</td><td>IR lifecycle, tabletop, simulation, root cause analysis, threat hunting</td></tr>
<tr><td>4.9 Data Sources</td><td>Log types, packet captures, dashboards, digital forensics</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam strategy for Domain 4:</strong> At 28%, this is the biggest domain — expect ~25 questions. Most are scenario-based: given an incident or requirement, choose the correct tool, process, or action. Memorize the IR lifecycle order, know CVSS components, and be able to distinguish EDR vs XDR vs SIEM vs SOAR.</div>
</div></div>
  `
}
