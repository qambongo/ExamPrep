export function render() {
  return `
<div id="sec-sec48" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.9</div>
  <div class="sec-obj-tag">4.9 — Use Data Sources to Support an Investigation</div>
  <div class="sec-title">Digital Forensics<br>&amp; Data Sources</div>
  <div class="sec-lead">Investigations rely on the right data from the right sources. Digital forensics ensures evidence is collected and preserved correctly for legal proceedings. Know the log types, the forensic process steps, and what each data source reveals about an incident.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Log Types &amp; Their Value</div>
<table class="table"><thead><tr><th>Log Type</th><th>What It Records</th><th>Key Investigation Use</th></tr></thead><tbody>
<tr><td><strong>Firewall Logs</strong></td><td>Allowed/blocked traffic, IPs, ports, protocols</td><td>Detect port scanning, unauthorized access attempts, DDoS sources, data exfiltration destinations</td></tr>
<tr><td><strong>Application Logs</strong></td><td>App events, errors, login attempts, transactions</td><td>Failed logins, unauthorized data access, SQL injection attempts, app-level anomalies</td></tr>
<tr><td><strong>Endpoint Logs</strong></td><td>User actions, process execution, file changes on individual devices</td><td>Malware execution traces, unauthorized software, privilege escalation on specific machines</td></tr>
<tr><td><strong>OS Security Logs</strong></td><td>User logins, privilege changes, config modifications (Windows Event Log, Linux syslog/auditd)</td><td>Root/admin access events, account creation, policy changes, lateral movement</td></tr>
<tr><td><strong>IDS/IPS Logs</strong></td><td>Detected attack signatures, anomalous traffic, blocked connections</td><td>Known attack patterns, attack origin, frequency and timing of probes</td></tr>
<tr><td><strong>Network Logs</strong></td><td>Packet flows, routing, inter-system communication</td><td>Data exfiltration paths, C2 beaconing, unusual large transfers, lateral movement</td></tr>
<tr><td><strong>Metadata</strong></td><td>Data about data — timestamps, file sizes, author, location, device</td><td>When file was accessed/modified, from which device, inconsistencies indicating tampering</td></tr>
</tbody></table>

<div class="h2">Investigation Data Sources</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Vulnerability Scans</div><p>Identify weaknesses before and after incidents. Post-incident: confirm the exploited vulnerability was patched. Pre-incident: prioritize remediation of exploitable weaknesses.</p></div>
  <div class="card gold"><div class="card-title">Automated Reports</div><p>SIEM-generated summaries of events, patterns, and anomalies. Prioritize high-severity items for analyst review. Look for repeated patterns across multiple systems.</p></div>
  <div class="card green"><div class="card-title">Dashboards</div><p>Real-time visual aggregation of security data. Rapid situational awareness during active incidents. Customized to show the metrics that matter most for your environment.</p></div>
  <div class="card purple"><div class="card-title">Packet Captures (pcaps)</div><p>Raw network traffic captured for deep analysis. Reveals exact data exchanged — commands sent to C2, credentials transmitted in cleartext, malware payloads. Tool: <strong>Wireshark</strong>. Must capture before attacker cleans up.</p></div>
</div>

<div class="h2">Digital Forensics Process</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Forensics order matters:</strong> <strong>Legal Hold → Acquisition → Preservation → Analysis → Reporting</strong>. Chain of custody must be maintained throughout. Any break in chain = evidence may be inadmissible.</div>

<table class="table"><thead><tr><th>Step</th><th>Definition</th><th>Key Detail</th></tr></thead><tbody>
<tr><td><strong>Legal Hold</strong></td><td>Directive to preserve all relevant data when legal action is anticipated</td><td>Issued before investigation begins. Prevents destruction of email, logs, files that may be needed in court.</td></tr>
<tr><td><strong>Chain of Custody</strong></td><td>Documented record of who handled evidence, when, and how</td><td>Must be unbroken for evidence to be court-admissible. Document every transfer, storage change, access.</td></tr>
<tr><td><strong>Acquisition</strong></td><td>Collecting digital evidence from affected systems</td><td>Create <strong>forensic image</strong> (exact bit-for-bit copy) of drives. Never analyze original — work from copy. Use write blockers.</td></tr>
<tr><td><strong>Preservation</strong></td><td>Maintaining integrity of evidence throughout investigation</td><td>Hash evidence immediately (MD5, SHA-256). Any modification changes hash — proves tampering.</td></tr>
<tr><td><strong>Analysis</strong></td><td>Examining evidence to reconstruct events and identify attackers</td><td>Timeline reconstruction, file carving, log correlation, malware reverse engineering.</td></tr>
<tr><td><strong>Reporting</strong></td><td>Document findings, methods, timeline, conclusions</td><td>Must be reproducible — another investigator following the same steps should reach same conclusions.</td></tr>
<tr><td><strong>E-Discovery</strong></td><td>Collecting ESI (electronically stored information) for legal proceedings</td><td>Emails, documents, logs retrieved in response to litigation or regulatory investigation.</td></tr>
</tbody></table>

<div class="h2">Order of Volatility</div>
<p>When collecting evidence, collect the most volatile data first — it disappears fastest:</p>
<ol style="padding-left:20px;margin-bottom:12px">
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">CPU registers &amp; cache</strong> — lost immediately on shutdown</li>
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">RAM / memory</strong> — lost on power off; contains running processes, encryption keys, passwords</li>
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">Network connections</strong> — active sessions, ARP cache, routing tables</li>
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">Running processes</strong> — currently executing malware visible in process list</li>
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">Disk / storage</strong> — most persistent; survives power off</li>
  <li style="color:#8099b8;font-size:13px;line-height:1.7"><strong style="color:#c8d8e8">Remote/cloud logs</strong> — least volatile; retained by third parties</li>
</ol>
</div></div>
  `
}
