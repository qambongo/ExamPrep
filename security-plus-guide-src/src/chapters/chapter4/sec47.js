export function render() {
  return `
<div id="sec-sec47" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objectives 4.7 / 4.8</div>
  <div class="sec-obj-tag">4.7 / 4.8 — Automation &amp; Incident Response</div>
  <div class="sec-title">Automation, Orchestration<br>&amp; Incident Response</div>
  <div class="sec-lead">Automation removes human error and speeds response. Incident response turns chaos into a structured process. The exam tests your ability to order the IR phases correctly and choose the right automation use case. The IR lifecycle order is one of the most tested sequences in the entire exam.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">4.7 Automation &amp; Orchestration</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Automation</div><p>Technology performs tasks without human intervention. Reduces errors, increases speed, ensures consistency at scale.</p></div>
  <div class="card gold"><div class="card-title">Orchestration</div><p>Coordinates multiple automated tasks to work together efficiently — like a conductor directing an orchestra of security tools.</p></div>
</div>

<div class="h3">Automation Use Cases</div>
<table class="table"><thead><tr><th>Use Case</th><th>What It Automates</th><th>Security Benefit</th></tr></thead><tbody>
<tr><td><strong>User Provisioning</strong></td><td>Create/modify/delete accounts and assign access rights</td><td>Least privilege enforced from day 1; no manual errors; instant deprovisioning on termination</td></tr>
<tr><td><strong>Resource Provisioning</strong></td><td>Spin up/down cloud VMs, databases, network components</td><td>Access controls enforced at creation; prevents over-provisioning</td></tr>
<tr><td><strong>Guard Rails</strong></td><td>Automated policy enforcement prevents misconfiguration</td><td>Can't create VM without encryption; can't open S3 bucket publicly — prevented automatically</td></tr>
<tr><td><strong>Security Groups</strong></td><td>Auto-assign firewall rules to cloud resources</td><td>Consistent access control across all instances; eliminates manual config</td></tr>
<tr><td><strong>Ticket Creation</strong></td><td>Auto-generate incident tickets when IDS/SIEM fires</td><td>No alert falls through the cracks; tracks resolution</td></tr>
<tr><td><strong>Escalation</strong></td><td>Auto-route high-priority issues to senior analysts</td><td>Critical incidents handled without delay; defined SLAs enforced</td></tr>
<tr><td><strong>Enable/Disable Access</strong></td><td>Auto-revoke access when role changes or on termination</td><td>Eliminates orphaned accounts; ensures timely deprovisioning</td></tr>
<tr><td><strong>CI/CD &amp; Testing</strong></td><td>Auto-run security tests on every code commit</td><td>Vulnerabilities caught before production; SAST/DAST integrated into pipeline</td></tr>
<tr><td><strong>API Integrations</strong></td><td>Connect security tools via APIs</td><td>SIEM auto-sends IoC to firewall; threat intel auto-populates blocklists</td></tr>
</tbody></table>

<div class="h3">SOAR — Security Orchestration, Automation &amp; Response</div>
<div class="cards">
  <div class="card purple"><div class="card-title">What SOAR Does</div><p>Integrates multiple security tools and automates the entire incident response workflow. When SIEM alerts → SOAR automatically: queries threat intel, isolates endpoint, creates ticket, notifies analyst. Tools: <strong>Splunk Phantom, Palo Alto Cortex SOAR, IBM SOAR</strong>.</p></div>
</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>SIEM vs SOAR:</strong> SIEM detects and alerts. SOAR automates the response. They work together — SIEM is the brain, SOAR is the hands.</div>

<div class="h2">4.8 Incident Response Lifecycle</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Memorize this order:</strong> <strong>Preparation → Detection → Analysis → Containment → Eradication → Recovery → Lessons Learned</strong>. This sequence is tested repeatedly. Know what happens in each phase and what tools/actions belong there.</div>

<div class="cards">
  <div class="card blue"><div class="card-title">1. Preparation</div><p>Before any incident occurs: build the IR plan, train the team, configure SIEM, define roles, establish communication channels. No preparation = chaotic response.</p></div>
  <div class="card gold"><div class="card-title">2. Detection</div><p>Identify that an incident is occurring via IDS alerts, SIEM correlation, AV detection, or user reports. <strong>Speed is critical</strong> — faster detection = smaller blast radius.</p></div>
  <div class="card amber"><div class="card-title">3. Analysis</div><p>Investigate scope, impact, and root cause. Review logs, traffic, timeline. Determine: what was compromised, how did attacker get in, what did they do? Informs containment strategy.</p></div>
  <div class="card red"><div class="card-title">4. Containment</div><p>Stop the spread. Isolate affected systems (quarantine), block attacker's network access, disable compromised accounts. Short-term (stop bleeding) then long-term (prevent recurrence).</p></div>
  <div class="card green"><div class="card-title">5. Eradication</div><p>Remove the threat entirely: delete malware, patch exploited vulnerabilities, remove backdoors, reset compromised credentials. System must be clean before recovery.</p></div>
  <div class="card purple"><div class="card-title">6. Recovery</div><p>Restore systems from clean backups, bring services back online, monitor closely for re-infection. Validate systems are clean before reconnecting to production.</p></div>
  <div class="card blue"><div class="card-title">7. Lessons Learned</div><p>Post-incident review: what worked, what failed, what needs improvement? Update IR plan, detection rules, and training. Prevents the same incident from recurring.</p></div>
</div>

<div class="h2">Training &amp; Testing</div>
<div class="cards">
  <div class="card gold"><div class="card-title">Tabletop Exercise</div><p>Discussion-based scenario walkthrough in a conference room. No systems touched. Team talks through how they would respond to a hypothetical breach. Identifies gaps in the plan cheaply. Example: "Ransomware hits our ERP system at 2am — walk through your response."</p></div>
  <div class="card blue"><div class="card-title">Simulation</div><p>Active exercise with real-time data — simulates actual attack conditions. More resource-intensive than tabletop but reveals real gaps in tools and team capability. Example: Red team launches a simulated phishing campaign; blue team must detect and respond.</p></div>
</div>

<div class="h2">Root Cause Analysis (RCA)</div>
<p>After an incident, RCA determines the <strong>underlying cause</strong> — not just what happened, but <em>why</em> it was able to happen. Key questions: What vulnerability was exploited? What control failed? What policy was missing? RCA outputs drive improvements that prevent recurrence.</p>

<div class="h2">Threat Hunting</div>
<p><strong>Proactive</strong> search for threats that haven't triggered alerts yet. Threat hunters use knowledge of attacker TTPs (Tactics, Techniques, Procedures) to actively look for signs of compromise: unusual network traffic, lateral movement, suspicious process execution, beaconing patterns.</p>
<div class="cards">
  <div class="card amber"><div class="card-title">vs. Monitoring</div><p>Monitoring is reactive (respond to alerts). Threat hunting is proactive (actively search for hidden threats). Both are necessary — hunting finds what monitoring misses.</p></div>
</div>
</div></div>
  `
}
