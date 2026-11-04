//#region src/chapters/chapter4/sec44.js
function render() {
	return `
<div id="sec-sec44" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.4</div>
  <div class="sec-obj-tag">4.4 — Security Alerting and Monitoring</div>
  <div class="sec-title">Security Alerting<br>&amp; Monitoring Tools</div>
  <div class="sec-lead">Security monitoring is the continuous collection and analysis of data across systems, applications, and infrastructure. The goal is to detect threats in real time, alert the right people, and generate evidence for investigation. Understanding each tool's role is critical for scenario questions.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Monitoring Computing Resources</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Systems Monitoring</div><p>Track health, performance, and security of individual systems. Tools: <strong>Nagios, Zabbix, SolarWinds</strong>. Monitors CPU, memory, disk, login attempts. Unusual CPU spike = possible malware.</p></div>
  <div class="card gold"><div class="card-title">Applications Monitoring</div><p>Track behavior of running applications. Tools: <strong>New Relic, AppDynamics, Dynatrace</strong>. Detects SQL injection attempts, abnormal requests, application errors indicating exploitation.</p></div>
  <div class="card green"><div class="card-title">Infrastructure Monitoring</div><p>Track networks, databases, virtualized resources. Tools: <strong>Wireshark, PRTG, SolarWinds NPM</strong>. Identifies unauthorized devices, DoS traffic spikes, rogue connections.</p></div>
</div>

<div class="h2">Security Monitoring Activities</div>
<table class="table"><thead><tr><th>Activity</th><th>Definition</th><th>Tools</th><th>Key Value</th></tr></thead><tbody>
<tr><td><strong>Log Aggregation</strong></td><td>Collect logs from all sources into a central repo</td><td>Splunk, ELK Stack, Graylog</td><td>Correlate patterns across systems — detect coordinated attacks</td></tr>
<tr><td><strong>Alerting</strong></td><td>Trigger notifications when predefined conditions met</td><td>Splunk, ArcSight, IBM QRadar</td><td>Real-time response; must tune to avoid alert fatigue</td></tr>
<tr><td><strong>Scanning</strong></td><td>Probe systems for vulnerabilities and misconfigs</td><td>Nessus, Qualys, OpenVAS</td><td>Proactive identification of weaknesses</td></tr>
<tr><td><strong>Reporting</strong></td><td>Generate summaries for stakeholders</td><td>Splunk, Rapid7 Nexpose</td><td>Track security posture, demonstrate compliance</td></tr>
<tr><td><strong>Archiving</strong></td><td>Long-term log storage for forensics/compliance</td><td>Elastic Stack, LogRhythm</td><td>Required by GDPR, HIPAA; supports legal investigations</td></tr>
</tbody></table>

<div class="h2">Alert Response</div>
<div class="cards">
  <div class="card amber"><div class="card-title">Quarantine</div><p>Isolate a compromised system immediately to prevent spread. System is cut off from network but preserved for forensic analysis. First step when malware is confirmed.</p></div>
  <div class="card blue"><div class="card-title">Alert Tuning</div><p>Adjust detection sensitivity to reduce false positives. Prevents <strong>alert fatigue</strong> — when too many alerts desensitize analysts to real threats. Configure thresholds carefully.</p></div>
</div>

<div class="h2">Security Tools Reference</div>
<div class="h3">SCAP — Security Content Automation Protocol</div>
<p>A suite of NIST standards that automate vulnerability assessment and compliance checking using standardized formats:</p>
<ul>
  <li><strong>CVE</strong> — catalog of known vulnerabilities</li>
  <li><strong>CCE</strong> — common configuration errors</li>
  <li><strong>CPE</strong> — identifies software/hardware platforms</li>
  <li><strong>OVAL</strong> — describes how to check for vulnerabilities</li>
</ul>
<p>Tool: <strong>OpenSCAP</strong> — automates scanning against CIS benchmarks.</p>

<div class="h3">Benchmarks</div>
<div class="cards">
  <div class="card blue"><div class="card-title">CIS Benchmarks</div><p>Center for Internet Security — free, widely adopted secure configuration guides for OSes, cloud, network devices. Used to establish and validate baselines.</p></div>
  <div class="card gold"><div class="card-title">DISA STIGs</div><p>Defense Information Systems Agency Security Technical Implementation Guides — DoD-mandated hardening standards. Extremely detailed, mandatory for US government systems.</p></div>
</div>

<div class="h3">SIEM — Security Information and Event Management</div>
<div class="cards">
  <div class="card purple"><div class="card-title">What SIEM Does</div><ul><li><strong>Collects</strong> logs from all sources</li><li><strong>Correlates</strong> events across systems</li><li><strong>Alerts</strong> on suspicious patterns</li><li><strong>Reports</strong> for compliance</li><li><strong>Archives</strong> for forensics</li></ul></div>
  <div class="card blue"><div class="card-title">SIEM Products</div><ul><li><strong>Splunk</strong> — most widely deployed</li><li><strong>IBM QRadar</strong></li><li><strong>Microsoft Sentinel</strong></li><li><strong>ArcSight</strong></li></ul></div>
</div>

<div class="h3">Other Key Tools</div>
<table class="table"><thead><tr><th>Tool</th><th>Purpose</th><th>Key Feature</th></tr></thead><tbody>
<tr><td><strong>Antivirus/AV</strong></td><td>Detect and remove malware</td><td>Signature-based + heuristic detection. Examples: Windows Defender, McAfee, Norton</td></tr>
<tr><td><strong>DLP</strong> — Data Loss Prevention</td><td>Prevent unauthorized data transfer</td><td>Content inspection, policy enforcement. Blocks emailing SSNs, copying to USB. Symantec DLP, Forcepoint</td></tr>
<tr><td><strong>SNMP Traps</strong></td><td>Network device alerting</td><td>Routers/switches send alerts to NMS on failures or security events</td></tr>
<tr><td><strong>NetFlow</strong></td><td>Network traffic analysis</td><td>Cisco protocol; analyzes traffic patterns, detects DDoS and data exfiltration. Tool: SolarWinds NetFlow Analyzer</td></tr>
<tr><td><strong>Vulnerability Scanners</strong></td><td>Find weaknesses in systems</td><td>Port scanning, patch gap detection, misconfiguration identification. Nessus, Qualys, OpenVAS</td></tr>
</tbody></table>

<div class="h3">Agent vs Agentless Monitoring</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Agent-Based</div><p>Software installed on endpoint collects and sends data to central system. <strong>More detailed, real-time data.</strong> Used by Splunk, EDR tools. Adds performance overhead but highest fidelity.</p></div>
  <div class="card gold"><div class="card-title">Agentless</div><p>Collects data via network protocols (SNMP, WMI, SSH) without installing software. <strong>Better for legacy systems</strong> or where agent installation is not feasible. Less rich data.</p></div>
</div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam tip:</strong> SIEM = aggregate + correlate + alert. SOAR (4.7) = automate the response. DLP = prevent data leaving. NetFlow = analyze traffic volume/patterns. These tools have distinct roles — don't confuse them on scenario questions.</div>
</div></div>
  `;
}
//#endregion
export { render };
