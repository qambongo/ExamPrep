//#region src/chapters/chapter2/sec25.js
function render() {
	return `
<div id="sec-sec25" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 2.0 <span class="sec-breadcrumb-sep">›</span> Objective 2.5</div>
  <div class="sec-obj-tag" style="background:rgba(0,200,255,.1);color:var(--accent);border-color:rgba(0,200,255,.2)">Objective 2.5</div>
  <div class="sec-title">Mitigation Techniques<br>Used to Secure the Enterprise</div>
  <div class="sec-lead">Knowing the attack is only half the job. You need to know how to stop it. These mitigation techniques are the toolkit of any security professional — from network segmentation and least privilege to hardening each endpoint.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Enterprise Mitigation Techniques</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Technique</th><th>What It Does</th><th>Key Benefit</th></tr></thead>
<tbody>
<tr><td><strong>Segmentation</strong></td><td>Divide network into isolated segments (VLANs, DMZ, subnets). Limit which systems can communicate with each other.</td><td>Contains breaches — attacker in segment A can't reach segment B. Limits lateral movement.</td></tr>
<tr><td><strong>Access Control (ACL)</strong></td><td>Rules defining who/what can access which resources. Applied at network (firewall), OS (permissions), and application level.</td><td>Granular control. Prevents unauthorized access. Creates audit trail.</td></tr>
<tr><td><strong>Application Allow List</strong></td><td>Only pre-approved applications can execute. Everything not on the list is blocked regardless.</td><td>Prevents malware execution — even zero-days can't run if not on the list.</td></tr>
<tr><td><strong>Isolation</strong></td><td>Separate systems, applications, or processes so they can't affect each other. VMs, containers, air gaps.</td><td>Contain compromised systems without affecting others.</td></tr>
<tr><td><strong>Patching</strong></td><td>Apply vendor-released fixes for known vulnerabilities. Prioritize by severity (CVSS score) and exploitation in the wild.</td><td>Removes known attack vectors. Most attacks exploit unpatched vulns.</td></tr>
<tr><td><strong>Encryption</strong></td><td>Protect data at rest (FDE, database encryption) and in transit (TLS). Useless data to attackers who steal it.</td><td>Confidentiality maintained even if data is stolen.</td></tr>
<tr><td><strong>Monitoring</strong></td><td>SIEM, IDS/IPS, log aggregation. Continuous surveillance for anomalies and indicators of compromise.</td><td>Early detection → faster response → less damage.</td></tr>
<tr><td><strong>Least Privilege</strong></td><td>Users and processes have only the minimum access needed for their function. No more.</td><td>Limits blast radius — compromised account can only reach what it was allowed.</td></tr>
<tr><td><strong>Configuration Enforcement</strong></td><td>Ensure all systems conform to secure baseline (CIS Benchmarks, STIG). Use Puppet/Ansible to automate compliance.</td><td>Eliminates misconfiguration vulnerabilities consistently across fleet.</td></tr>
<tr><td><strong>Decommissioning</strong></td><td>Securely retire systems: wipe data, physically destroy if needed, remove from network and DNS.</td><td>Eliminates attack surface. Prevents data recovery from retired hardware.</td></tr>
</tbody>
</table></div>

<div class="h2">Hardening Techniques — Detailed</div>

<div class="def-block">
  <div class="def-num">H1</div>
  <div class="def-content">
    <div class="def-title">Encryption</div>
    <div class="def-text">Within hardening: Full disk encryption on all endpoints. Encrypted protocols only (HTTPS/TLS, SSH not Telnet, SFTP not FTP). Encrypted databases. Key management critical — encrypt the data AND protect the keys separately (HSM).</div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H2</div>
  <div class="def-content">
    <div class="def-title">Endpoint Protection Installation</div>
    <div class="def-text">Antivirus/antimalware, host-based firewall, EDR (Endpoint Detection and Response), HIPS. Modern endpoint protection uses behavioral analysis and ML — not just signature matching. Crucial for detecting zero-days. EDR provides visibility, detection, and response capability on individual endpoints.</div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H3</div>
  <div class="def-content">
    <div class="def-title">Host-Based Firewall</div>
    <div class="def-text">Software firewall running ON the endpoint itself (Windows Firewall, iptables). Provides protection even when the endpoint is off the corporate network (traveling, home). Controls inbound AND outbound traffic per application. Essential for Zero Trust — don't assume the network is safe.</div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H4</div>
  <div class="def-content">
    <div class="def-title">HIPS — Host-Based Intrusion Prevention System</div>
    <div class="def-text">Active monitoring and BLOCKING of suspicious behavior on the host. Three detection methods: (1) Signature-based — matches known threats. (2) Behavioral — detects anomalies from normal baseline. (3) Heuristic — evaluates suspicious characteristics without exact signatures. HIDS only detects; HIPS actively blocks.</div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H5</div>
  <div class="def-content">
    <div class="def-title">Disabling Ports and Protocols</div>
    <div class="def-text">Every open port is a potential attack surface. Close all ports not in use. Disable insecure protocols: Telnet (use SSH), FTP (use SFTP/FTPS), SMBv1 (EternalBlue exploit — used by WannaCry), HTTP (use HTTPS). Regularly scan with Nmap to verify no ports opened inadvertently.</div>
    <div class="def-examples"><span class="def-ex">Telnet → SSH</span><span class="def-ex">FTP → SFTP</span><span class="def-ex">HTTP → HTTPS</span><span class="def-ex">Disable SMBv1</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H6</div>
  <div class="def-content">
    <div class="def-title">Default Password Changes</div>
    <div class="def-text">Every network device, IoT device, camera, router, and application ships with default credentials — often listed publicly on vendor sites or in Shodan/OSINT tools. Attackers scan for devices with default creds constantly. Change immediately on deployment. Document changed credentials in a password manager. Enable MFA where possible.</div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">H7</div>
  <div class="def-content">
    <div class="def-title">Removal of Unnecessary Software</div>
    <div class="def-text">Every installed application is an attack surface — it can have vulnerabilities, require patching, and provide functionality an attacker can abuse. Remove all software not required for the system's function. Especially: pre-installed bloatware, development tools on production systems, demo applications, unused services. Application whitelisting enforces this automatically.</div>
  </div>
</div>

<div class="diag"><pre>
  SEGMENTATION ARCHITECTURE — DEFENSE IN DEPTH:
  ──────────────────────────────────────────────────────────────
  Internet
     │
  [Firewall] ← first line
     │
  [DMZ] ← public-facing servers (web, email, DNS)
     │        If attacker reaches here, internal network still protected
  [Firewall] ← second line  
     │
  [Internal Network]
     ├── [Segmented: Finance VLAN] ← sensitive financial systems
     ├── [Segmented: HR VLAN]      ← personnel data
     ├── [Segmented: Engineering]  ← R&D systems
     └── [Segmented: Guest WiFi]   ← completely isolated, internet only
  
  Lateral movement: If attacker compromises web server in DMZ,
  they STILL can't reach Finance VLAN without crossing another firewall.
</pre></div>

<div class="alert key"><span class="alert-icon">🔑</span><strong>Least Privilege vs. Need-to-Know:</strong> Least privilege (technical) = minimum system permissions to do the job. Need-to-know (informational) = only receive information essential for your role. Both are implementations of the same security principle but applied differently. The exam may ask about both — understand they're related but not identical.</div>

</div></div>
  `;
}
//#endregion
export { render };
