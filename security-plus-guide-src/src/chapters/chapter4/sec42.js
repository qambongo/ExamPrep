export function render() {
  return `
<div id="sec-sec42" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objectives 4.2 / 4.3</div>
  <div class="sec-obj-tag">4.2 / 4.3 — Wireless Devices &amp; Asset Management</div>
  <div class="sec-title">Wireless Security, MDM,<br>&amp; Asset Lifecycle</div>
  <div class="sec-lead">Wireless devices require careful installation planning and ongoing management. Mobile Device Management enforces policy across the fleet. Proper asset management — from procurement through disposal — prevents data leakage at every stage of an asset's life.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Wireless Installation Considerations</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Site Surveys</div><p>Analyze physical layout to determine optimal AP placement. Identify interference sources, coverage gaps, and areas where signal leaks outside the intended boundary. Conducted before deployment and after physical changes.</p></div>
  <div class="card gold"><div class="card-title">Heat Maps</div><p>Visual representation of signal strength and coverage. Identifies weak spots, rogue APs, and areas of <strong>signal leakage</strong> — signal reaching outside intended areas creates security risk (unauthorized access from parking lots, adjacent buildings).</p></div>
</div>

<div class="h2">Wireless Security Settings</div>
<table class="table"><thead><tr><th>Protocol/Standard</th><th>Purpose</th><th>Key Detail</th></tr></thead><tbody>
<tr><td><strong>WPA3</strong></td><td>Latest Wi-Fi encryption standard</td><td>192-bit encryption, forward secrecy, resists offline dictionary attacks. Use over WPA2 in all new deployments.</td></tr>
<tr><td><strong>AAA / RADIUS</strong></td><td>Centralized authentication, authorization, accounting</td><td>RADIUS authenticates users, authorizes resource access, logs activity. Used with VPNs and wireless networks.</td></tr>
<tr><td><strong>TLS 1.2/1.3</strong></td><td>Secure web traffic</td><td>Use TLS 1.2 minimum; prefer 1.3. Deprecated: SSL 2.0, SSL 3.0, TLS 1.0.</td></tr>
<tr><td><strong>IPSec</strong></td><td>Secure VPN communication</td><td>Encrypts IP layer — used for site-to-site and remote access VPNs.</td></tr>
<tr><td><strong>LDAP / Kerberos / OAuth</strong></td><td>Authentication protocols</td><td>Validate identity before granting access. Combine with MFA for stronger posture.</td></tr>
</tbody></table>

<div class="h2">Connection Methods &amp; Security</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Cellular (3G/4G/5G)</div><p>Vulnerable to MITM if unencrypted. <strong>Always use VPN</strong> over cellular for corporate traffic. 5G improves security but VPN still recommended.</p></div>
  <div class="card amber"><div class="card-title">Wi-Fi</div><p>Public Wi-Fi = high risk (data sniffing, unauthorized access). Corporate Wi-Fi must use <strong>WPA3</strong>. Prohibit connecting to unknown SSIDs.</p></div>
  <div class="card purple"><div class="card-title">Bluetooth</div><p>Short-range but vulnerable to <strong>bluejacking</strong> (unsolicited messages) and <strong>bluebugging</strong> (unauthorized device control). Disable when not in use. Use latest pairing standards.</p></div>
</div>

<div class="h2">Mobile Device Management (MDM)</div>
<p>MDM software monitors, manages, and secures mobile devices across an organization. Essential for any org where employees use mobile devices for work.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Remote Management</div><p>Remotely configure, update, lock, or <strong>wipe</strong> a device. Critical if device is lost or stolen.</p></div>
  <div class="card gold"><div class="card-title">App Management</div><p>Control which apps are installed. Push approved apps, block unauthorized ones, push updates automatically.</p></div>
  <div class="card green"><div class="card-title">Security Enforcement</div><p>Enforce password policies, device encryption, VPN config, screen lock timeouts, certificate deployment.</p></div>
  <div class="card purple"><div class="card-title">Geofencing</div><p>Define geographic boundaries. Restrict device functionality or trigger alerts when device leaves approved area.</p></div>
</div>

<div class="h2">Mobile Deployment Models</div>
<table class="table"><thead><tr><th>Model</th><th>Who Owns Device</th><th>Control Level</th><th>Key Risk</th></tr></thead><tbody>
<tr><td><strong>BYOD</strong> — Bring Your Own Device</td><td>Employee</td><td>Low — MDM on personal device</td><td>Data leakage, malware, privacy conflicts</td></tr>
<tr><td><strong>COPE</strong> — Corporate-Owned, Personally Enabled</td><td>Organization</td><td>High — org owns and controls hardware</td><td>Employee privacy on company device</td></tr>
<tr><td><strong>CYOD</strong> — Choose Your Own Device</td><td>Organization</td><td>Medium — choose from approved list</td><td>Middle ground; employee satisfaction vs. control</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam tip:</strong> BYOD has the <em>highest security risk</em> (least control). COPE has the <em>most security control</em>. CYOD is the middle ground. Questions often give a scenario and ask which model best balances flexibility with security.</div>

<div class="h2">Asset Management Lifecycle</div>
<div class="h3">Acquisition / Procurement</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Ownership</div><p>Every asset must have a defined owner accountable for its security throughout its lifecycle. No owner = no accountability = security gap.</p></div>
  <div class="card gold"><div class="card-title">Classification</div><p>Classify assets at acquisition: <strong>Public → Internal → Confidential → Highly Confidential</strong>. Classification drives access controls, encryption requirements, and disposal method.</p></div>
</div>

<div class="h3">Monitoring / Asset Tracking</div>
<ul>
  <li><strong>Inventory:</strong> Real-time, automated tracking of all hardware, software, and data assets. Integrate with SIEM and MDM for consistency.</li>
  <li><strong>Enumeration:</strong> Periodically scan and catalog all network-connected devices. Unauthorized or rogue devices must be detected immediately.</li>
</ul>

<div class="h3">Disposal / Decommissioning</div>
<table class="table"><thead><tr><th>Method</th><th>When Used</th><th>Standard/Tool</th></tr></thead><tbody>
<tr><td><strong>Sanitization</strong></td><td>Repurposing or reassigning device</td><td>DoD 5220.22-M; NIST 800-88; data wiping software</td></tr>
<tr><td><strong>Destruction</strong></td><td>End-of-life, damaged hardware</td><td>Physical shredding, degaussing, crushing disks</td></tr>
<tr><td><strong>Certification</strong></td><td>Proving proper disposal (audit/compliance)</td><td>Certificate of Data Destruction from vendor</td></tr>
<tr><td><strong>Data Retention</strong></td><td>Legal/regulatory hold before disposal</td><td>GDPR, HIPAA define minimum retention periods</td></tr>
</tbody></table>

<div class="h2">Application Security Controls</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Input Validation</div><p>Validate all user input before processing. Use <strong>whitelisting</strong> (accept known-good). Prevents SQL injection and XSS. Never rely solely on blacklisting.</p></div>
  <div class="card gold"><div class="card-title">Secure Cookies</div><p>Set <code>HttpOnly</code> flag (no JS access) and <code>Secure</code> flag (HTTPS only). Prevents session hijacking and cookie theft.</p></div>
  <div class="card green"><div class="card-title">Static Code Analysis</div><p>Scan source code before execution. Tools: <strong>Checkmarx, SonarQube, Fortify</strong>. Catches buffer overflows, hard-coded passwords, insecure libs early.</p></div>
  <div class="card purple"><div class="card-title">Code Signing</div><p>Cryptographically sign releases to prove origin and integrity. Prevents attackers from swapping legitimate code with malicious versions.</p></div>
  <div class="card amber"><div class="card-title">Sandboxing</div><p>Run untrusted code in isolated environment. Limits damage from malicious software by containing it away from the main system.</p></div>
</div>
</div></div>
  `
}
