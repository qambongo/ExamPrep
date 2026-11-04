export function render() {
  return `
<div id="sec-sec41" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.1</div>
  <div class="sec-obj-tag">4.1 — Apply Common Security Techniques to Computing Resources</div>
  <div class="sec-title">Secure Baselines<br>&amp; Hardening Targets</div>
  <div class="sec-lead">A security baseline is the minimum acceptable security configuration for a system. Hardening reduces attack surface by removing unnecessary services, applying least privilege, and enforcing secure configurations across every device type in the enterprise.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">4.1 Secure Baselines</div>
<p>A <strong>security baseline</strong> is a standard configuration that establishes the minimum set of security controls a system must meet. It acts as the reference point for all policies and configurations.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Establish</div><p>Define the minimal security settings per system type — firewall config, antivirus requirements, access control policies, encryption standards. Document everything before deploying.</p></div>
  <div class="card gold"><div class="card-title">Deploy</div><p>Push baselines to all relevant systems. Use automation tools: <strong>Ansible</strong>, <strong>Chef</strong>, <strong>Puppet</strong>. Manual deployment is error-prone and doesn't scale — automation ensures consistency.</p></div>
  <div class="card green"><div class="card-title">Maintain</div><p>Regularly audit systems to verify baselines remain in place. Apply security patches promptly. Periodically review configs to reflect new threats. Deviation = vulnerability.</p></div>
</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam tip:</strong> The three baseline actions are <strong>Establish → Deploy → Maintain</strong>. Tools like Ansible/Chef/Puppet always map to the <em>Deploy</em> phase. SCAP and CIS Benchmarks map to the <em>Establish</em> phase.</div>

<div class="h2">4.2 Hardening Targets</div>
<p><strong>Hardening</strong> = reducing a system's attack surface by removing what isn't needed and securing what remains. Every device category has specific techniques.</p>

<div class="h3">Mobile Devices</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Key Controls</div><ul><li>Full-device <strong>encryption</strong></li><li><strong>Device locks</strong> (PIN, biometric)</li><li><strong>Remote wipe</strong> capability</li><li><strong>VPN</strong> for secure comms</li><li><strong>MDM</strong> software enforcement</li></ul></div>
</div>

<div class="h3">Workstations</div>
<ul>
  <li>Apply latest security patches promptly</li>
  <li>Disable unnecessary services and ports</li>
  <li>Install and maintain antivirus/EDR</li>
  <li>Configure <strong>least privilege</strong> — users cannot install unauthorized software</li>
  <li>Enable host-based firewall</li>
</ul>

<div class="h3">Switches &amp; Routers</div>
<ul>
  <li>Disable unused ports (physically and logically)</li>
  <li>Implement <strong>ACLs</strong> to restrict traffic flows</li>
  <li>Enforce strong password policies; no default credentials</li>
  <li>Enable <strong>SSH</strong> for remote management (disable Telnet)</li>
  <li>Apply <strong>network segmentation</strong> to limit breach scope</li>
</ul>

<div class="h3">Cloud Infrastructure</div>
<ul>
  <li>Enforce <strong>least privilege</strong> for all IAM roles and service accounts</li>
  <li>Encrypt data <strong>in transit</strong> and <strong>at rest</strong></li>
  <li>Require <strong>MFA</strong> on all cloud console access</li>
  <li>Review SLAs with cloud providers for security/compliance obligations</li>
  <li>Use security groups and guard rails to prevent misconfiguration</li>
</ul>

<div class="h3">Servers</div>
<ul>
  <li>Lock down OS configurations — remove unnecessary services and default users</li>
  <li>Enable <strong>file system encryption</strong></li>
  <li>Apply strict <strong>access controls</strong> (RBAC/MAC)</li>
  <li>Regular patching on a defined schedule</li>
</ul>

<div class="h3">ICS/SCADA</div>
<div class="cards">
  <div class="card amber"><div class="card-title">Special Considerations</div><p>Industrial Control Systems run critical infrastructure (power grids, water, manufacturing). Patching is hard due to uptime requirements and proprietary protocols. Key controls: <strong>network segmentation</strong>, strict access controls, VPN for any remote access, specialized security frameworks (IEC 62443, NERC CIP).</p></div>
</div>

<div class="h3">Embedded Systems &amp; RTOS</div>
<ul>
  <li>Secure <strong>firmware</strong> — verify integrity, check for backdoors</li>
  <li>Implement regular <strong>firmware updates</strong></li>
  <li>Minimize services running on the device</li>
  <li>RTOS systems are time-sensitive — balance security with operational integrity</li>
</ul>

<div class="h3">IoT Devices</div>
<ul>
  <li><strong>Change default passwords immediately</strong> — most IoT attacks exploit unchanged defaults</li>
  <li>Enable <strong>device-level encryption</strong> where supported</li>
  <li>Disable unnecessary services and open ports</li>
  <li>Patch/update firmware regularly</li>
  <li>Isolate IoT devices on a separate network segment</li>
</ul>

<div class="alert warn"><span class="alert-icon">⚠️</span><strong>IoT exam trap:</strong> IoT devices are described as "highly vulnerable due to weak or poor security implementations." The #1 hardening step always tested: <strong>change default passwords</strong>.</div>

<div class="h2">Quick Comparison Table</div>
<table class="table"><thead><tr><th>Target</th><th>Primary Hardening Focus</th><th>Key Risk If Ignored</th></tr></thead><tbody>
<tr><td>Mobile</td><td>Encryption, MDM, remote wipe</td><td>Data loss if device stolen</td></tr>
<tr><td>Workstation</td><td>Patching, least privilege, AV</td><td>Malware, unauthorized software</td></tr>
<tr><td>Switch/Router</td><td>Disable ports, ACLs, SSH</td><td>Network pivot, eavesdropping</td></tr>
<tr><td>Cloud</td><td>IAM least privilege, MFA, encryption</td><td>Data exposure, account takeover</td></tr>
<tr><td>Server</td><td>OS lockdown, patching, filesystem encryption</td><td>Privilege escalation, data breach</td></tr>
<tr><td>ICS/SCADA</td><td>Segmentation, VPN, frameworks</td><td>Critical infrastructure disruption</td></tr>
<tr><td>Embedded/RTOS</td><td>Firmware security, no backdoors</td><td>Persistent compromise, sabotage</td></tr>
<tr><td>IoT</td><td>Change defaults, patch, isolate</td><td>Botnet recruitment, lateral movement</td></tr>
</tbody></table>
</div></div>
  `
}
