//#region src/chapters/chapter3/sec34.js
function render() {
	return `
<div id="sec-sec34" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.4</div>
  <div class="sec-obj-tag">3.4</div>
  <div class="sec-title">Network Security</div>
  <div class="sec-lead">VPN, tunneling protocols, SD-WAN, and SASE are the core technologies for securing network communications and remote access in modern enterprises.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Virtual Private Network (VPN)</div>
<p>Creates a secure encrypted tunnel over a public/unsecured network. Masks IP addresses and routes data securely.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Site-to-Site VPN</div><p>Connects entire networks — e.g., corporate HQ to remote offices. Always-on connection between two fixed locations.</p></div>
  <div class="card gold"><div class="card-title">Remote Access VPN</div><p>Individual users connect securely to a corporate network from remote locations.</p></div>
</div>
<div class="tbl-wrap"><table>
  <tr><th>VPN Component</th><th>Description</th></tr>
  <tr><td><strong>Tunneling Protocol</strong></td><td>Encapsulates data for secure transmission across insecure networks</td></tr>
  <tr><td><strong>Encryption</strong></td><td>Strong algorithms (e.g., AES) ensure data confidentiality in transit</td></tr>
  <tr><td><strong>Authentication</strong></td><td>Passwords, MFA, or certificates verify users before connection is established</td></tr>
</table></div>

<div class="h2">Remote Access Methods</div>
<div class="cards">
  <div class="card blue"><div class="card-title">VPN</div><p>Encrypted tunnel for network access. Most common enterprise remote access method.</p></div>
  <div class="card amber"><div class="card-title">RDP — Remote Desktop Protocol</div><p>Remote control of a desktop. Requires secure configurations to prevent unauthorized access.</p></div>
  <div class="card green"><div class="card-title">SSH — Secure Shell</div><p>Secure protocol for accessing and managing remote servers over unsecured networks.</p></div>
</div>

<div class="h2">Tunneling Protocols</div>
<div class="h3">Transport Layer Security (TLS)</div>
<p><strong>TLS</strong> secures communication over networks (HTTPS). Process: handshake authenticates server → symmetric encryption protects data. Benefits: strong encryption, certificate-based auth, integrity protection.</p>

<div class="h3">Internet Protocol Security (IPSec)</div>
<p>Encrypts and authenticates all IP packets. Two critical modes:</p>
<div class="tbl-wrap"><table>
  <tr><th>IPSec Mode</th><th>What Is Encrypted</th><th>Use Case</th></tr>
  <tr><td><strong>Transport Mode</strong></td><td>Payload (data) only — header intact</td><td>End-to-end communication between hosts</td></tr>
  <tr><td><strong>Tunnel Mode</strong></td><td>Both payload AND header — entire packet</td><td>Site-to-site VPNs, gateway-to-gateway</td></tr>
</table></div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Exam Tip:</strong> IPSec Transport Mode = payload only. Tunnel Mode = everything (entire packet). Tunnel Mode = VPNs. This distinction is a frequent exam question.</div>

<div class="h2">SD-WAN &amp; SASE</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">SD</div><div class="def-content"><div class="def-title">Software-Defined WAN (SD-WAN)</div><div class="def-text">Uses software to manage WAN connectivity. Features: centralized control, dynamic path selection (MPLS/broadband/LTE). Benefits: cost efficiency vs. MPLS, scalability, improved performance.</div></div></div>
  <div class="def-block"><div class="def-num">SA</div><div class="def-content"><div class="def-title">Secure Access Service Edge (SASE)</div><div class="def-text">Combines WAN + network security (SWG, CASB, FWaaS) in a single cloud-delivered service. Enforces <strong>Zero Trust</strong> — continuous verification. Global coverage for remote workforces.</div></div></div>
</div>

<div class="h2">Selection of Effective Controls</div>
<div class="cards">
  <div class="card green"><div class="card-title">Preventive Controls</div><p>Prevent incidents from occurring. Examples: firewalls, access controls, encryption.</p></div>
  <div class="card blue"><div class="card-title">Detective Controls</div><p>Identify and detect incidents as they occur. Examples: IDS, log monitoring, SIEM correlation.</p></div>
  <div class="card amber"><div class="card-title">Corrective Controls</div><p>Correct effects after an incident. Examples: incident response, backups, disaster recovery plans.</p></div>
  <div class="card purple"><div class="card-title">Compensating Controls</div><p>Alternative controls when primary can't be applied. Example: if full disk encryption isn't possible, restrict access to sensitive data instead.</p></div>
</div>
<div class="alert key"><div class="alert-icon">✅</div><strong>Control Selection Criteria:</strong> Risk Assessment (identify and match threats) → Cost vs. Benefit → Ease of Implementation.</div>
</div></div>
  `;
}
//#endregion
export { render };
