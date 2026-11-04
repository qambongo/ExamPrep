export function render() {
  return `
<div id="sec-sec45" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.5</div>
  <div class="sec-obj-tag">4.5 — Modify Enterprise Capabilities to Enhance Security</div>
  <div class="sec-title">Enterprise Security<br>Capabilities</div>
  <div class="sec-lead">This objective covers the full toolkit used to protect enterprise networks — from firewalls and IDS/IPS to email authentication and endpoint detection. The exam tests your ability to select the right tool for a given scenario and understand how these controls complement each other.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Firewall Security</div>
<p>Firewalls monitor and control network traffic based on security rules. They operate at multiple layers and form the core of network perimeter defense.</p>
<table class="table"><thead><tr><th>Firewall Concept</th><th>Definition</th><th>Exam Key Point</th></tr></thead><tbody>
<tr><td><strong>Rules</strong></td><td>Define which traffic is allowed or blocked based on IP, port, protocol</td><td>Follow least privilege — block everything not explicitly needed</td></tr>
<tr><td><strong>ACLs</strong></td><td>Access Control Lists specify which users/devices can reach which resources</td><td>Improperly configured ACLs are a major misconfiguration risk</td></tr>
<tr><td><strong>Ports/Protocols</strong></td><td>Block specific ports associated with risky protocols</td><td>Block TCP/23 (Telnet), allow TCP/22 (SSH), TCP/443 (HTTPS)</td></tr>
<tr><td><strong>Screened Subnet (DMZ)</strong></td><td>Subnetwork between internal and external network hosting public-facing services</td><td>Web servers, mail servers in DMZ — accessible from outside but isolated from internal LAN</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>DMZ exam tip:</strong> A DMZ (screened subnet) protects internal systems while allowing public access to specific services. Always: external → DMZ → (firewall) → internal. Web servers live in DMZ; databases never do.</div>

<div class="h2">IDS / IPS</div>
<div class="cards">
  <div class="card blue"><div class="card-title">IDS — Intrusion Detection System</div><p><strong>Detects and alerts</strong> on suspicious traffic. Passive — does not block traffic. Logs and notifies. Think: security camera that sounds an alarm but doesn't stop the intruder.</p></div>
  <div class="card amber"><div class="card-title">IPS — Intrusion Prevention System</div><p><strong>Detects and blocks</strong> malicious traffic in real time. Inline — sits in traffic path. Can drop packets, reset connections, block IPs. Think: security guard who physically stops the intruder.</p></div>
  <div class="card gold"><div class="card-title">Signature-Based Detection</div><p>Matches traffic against known attack patterns. Effective for known threats; blind to zero-day attacks. Signatures must be kept updated.</p></div>
</div>

<div class="h2">Web Filtering</div>
<table class="table"><thead><tr><th>Filter Type</th><th>How It Works</th><th>Pros / Cons</th></tr></thead><tbody>
<tr><td><strong>Agent-Based</strong></td><td>Installed on each endpoint device</td><td>Device-level control; bypassed if agent disabled</td></tr>
<tr><td><strong>Centralized Proxy</strong></td><td>All traffic routed through proxy server</td><td>Organization-wide enforcement; single point of management; performance impact</td></tr>
<tr><td><strong>URL Scanning</strong></td><td>Check URLs against threat intelligence lists</td><td>Blocks known malicious URLs; fast</td></tr>
<tr><td><strong>Content Categorization</strong></td><td>Classify content by type (social media, gambling, malware)</td><td>Block categories en masse; reduces productivity risk</td></tr>
<tr><td><strong>Block Rules</strong></td><td>Explicit URL/domain/keyword blocks</td><td>Precise; requires maintenance</td></tr>
<tr><td><strong>Reputation-Based</strong></td><td>Block based on domain/IP reputation score</td><td>Blocks sites before signatures exist; proactive</td></tr>
</tbody></table>

<div class="h2">DNS Filtering</div>
<p>Intercepts DNS queries before they reach the DNS server. If the requested domain is on a blocklist, the query is rejected — user never reaches the malicious site.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">How It Works</div><p>1. User requests domain → 2. DNS filter checks against blocklist → 3. If blocked: DNS returns NXDOMAIN → 4. User gets "site not found." No connection ever made.</p></div>
  <div class="card gold"><div class="card-title">Tools</div><p><strong>Cisco Umbrella, Cloudflare for Teams, Quad9</strong>. Blocks phishing, malware C2 domains, and inappropriate content at the DNS layer — before any TCP connection is established.</p></div>
</div>

<div class="h2">Email Security</div>
<div class="cards">
  <div class="card blue"><div class="card-title">SPF — Sender Policy Framework</div><p>DNS record listing authorized mail servers for a domain. Receiving server checks if sending IP is in the SPF record. Prevents IP-based spoofing.<br><br><strong>Validates:</strong> Is this server allowed to send for this domain?</p></div>
  <div class="card gold"><div class="card-title">DKIM — DomainKeys Identified Mail</div><p>Cryptographic signature added to email headers by sending server. Receiving server verifies signature using public key in DNS. Ensures message was not tampered with in transit.<br><br><strong>Validates:</strong> Was this message altered after sending?</p></div>
  <div class="card green"><div class="card-title">DMARC</div><p>Builds on SPF + DKIM. Tells receiving servers what to do when SPF/DKIM fail: <strong>none</strong> (monitor), <strong>quarantine</strong> (spam folder), or <strong>reject</strong> (block). Reports sent back to domain owner.<br><br><strong>Validates:</strong> What to do when authentication fails?</p></div>
  <div class="card purple"><div class="card-title">Email Gateway</div><p>Filters all inbound/outbound email for malware, spam, and phishing before reaching user inboxes. Tools: <strong>Proofpoint, Barracuda, Mimecast</strong>.</p></div>
</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Email auth memory trick:</strong> SPF = IP validation (who can send). DKIM = message integrity (was it changed). DMARC = policy enforcement (what to do on failure). All three together = comprehensive email authentication.</div>

<div class="h2">Additional Enterprise Controls</div>
<table class="table"><thead><tr><th>Control</th><th>Purpose</th><th>Key Detail</th></tr></thead><tbody>
<tr><td><strong>FIM — File Integrity Monitoring</strong></td><td>Detect unauthorized changes to files and configs</td><td>Alerts when Windows Registry, system binaries, or config files change unexpectedly. Indicates malware or insider threat.</td></tr>
<tr><td><strong>DLP — Data Loss Prevention</strong></td><td>Prevent sensitive data from leaving the org</td><td>Blocks emailing SSNs, copying to USB, uploading to cloud. Enforces GDPR/HIPAA compliance.</td></tr>
<tr><td><strong>NAC — Network Access Control</strong></td><td>Only let compliant devices on the network</td><td>Checks: AV updated? OS patched? Encryption enabled? Blocks non-compliant devices before they connect.</td></tr>
<tr><td><strong>EDR — Endpoint Detection &amp; Response</strong></td><td>Monitor and respond to endpoint threats</td><td>Behavioral detection beyond signatures. Detects advanced threats AV misses. Records endpoint telemetry for investigation.</td></tr>
<tr><td><strong>XDR — Extended Detection &amp; Response</strong></td><td>Correlate endpoint + network + cloud data</td><td>Broader visibility than EDR. Integrates multiple security layers into unified platform. Better context for complex attacks.</td></tr>
<tr><td><strong>UBA — User Behavior Analytics</strong></td><td>Detect anomalous user behavior</td><td>Baseline normal activity; flag deviations. Detects account takeovers, insider threats, privilege escalation. Uses ML.</td></tr>
</tbody></table>

<div class="h2">OS Security</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Group Policy (Windows)</div><p>Centrally define and enforce security settings across all Windows machines via GPOs. Password policies, software restrictions, logon restrictions, firewall rules — all managed from one place (Active Directory).</p></div>
  <div class="card gold"><div class="card-title">SELinux (Linux)</div><p>Mandatory Access Control enforcement kernel module. Even if an app is compromised and gets root, SELinux enforces security contexts that restrict what it can access. Particularly important in high-security Linux environments.</p></div>
</div>
</div></div>
  `
}
