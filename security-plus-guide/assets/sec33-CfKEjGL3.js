//#region src/chapters/chapter3/sec33.js
function render() {
	return `
<div id="sec-sec33" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.3</div>
  <div class="sec-obj-tag">3.3</div>
  <div class="sec-title">Securing Enterprise Infrastructure</div>
  <div class="sec-lead">Practical infrastructure security — device placement, security zones, failure modes, network appliances, port security, and firewall types. These concepts appear heavily in scenario-based exam questions.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">1. Device Placement</div>
<p>Where security devices are positioned determines the effectiveness of <strong>defense-in-depth</strong>.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Perimeter Defense</div><p>Firewalls and IPS placed at the network edge to block external threats.</p></div>
  <div class="card gold"><div class="card-title">Internal Segmentation</div><p>Switches and access points within security zones enforce least privilege.</p></div>
  <div class="card green"><div class="card-title">Data Centers</div><p>Sensitive data in highly secure zones with multiple layers: physical, network, and encryption.</p></div>
</div>

<div class="h2">2. Security Zones</div>
<div class="tbl-wrap"><table>
  <tr><th>Zone</th><th>Description</th><th>Examples</th></tr>
  <tr><td><strong>DMZ</strong></td><td>Buffer zone between external and internal networks. External-facing services placed here.</td><td>Web servers, email servers</td></tr>
  <tr><td><strong>Internal Network</strong></td><td>Protected by firewalls and IDS. Where sensitive internal systems reside.</td><td>ERP, HR systems</td></tr>
  <tr><td><strong>Privileged Zone</strong></td><td>Critical infrastructure requiring extra authentication, encryption, and monitoring.</td><td>Admin servers, databases</td></tr>
</table></div>

<div class="h2">3. Attack Surface</div>
<p>All points where an attacker can attempt unauthorized access.</p>
<div class="cards">
  <div class="card green"><div class="card-title">Minimize Attack Surface</div><p>Patching, disabling unnecessary services, securing endpoints, and removing unused software.</p></div>
  <div class="card red"><div class="card-title">Exposed Services</div><p>Any internet-facing service (e.g., web apps) increases the attack surface and must be hardened.</p></div>
</div>

<div class="h2">4. Connectivity &amp; Failure Modes</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">🔓</div><div class="def-content"><div class="def-title">Fail-Open</div><div class="def-text">When a security control fails, it <strong>allows all traffic through</strong>. Convenient but dangerous — exposes the network to attacks during failure.</div></div></div>
  <div class="def-block"><div class="def-num">🔒</div><div class="def-content"><div class="def-title">Fail-Closed</div><div class="def-text">When a control fails, it <strong>blocks all traffic</strong>. Safer configuration — no unauthorized access occurs during failure. Generally preferred for security devices.</div></div></div>
</div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Exam Tip:</strong> Fail-closed = safer. Fail-open = more available but less secure. Know which is preferred for security vs. availability-critical systems.</div>

<div class="h2">5. Device Attributes</div>
<div class="tbl-wrap"><table>
  <tr><th>Attribute</th><th>Type</th><th>Description</th><th>Examples</th></tr>
  <tr><td><strong>Active</strong></td><td>Active vs. Passive</td><td>Performs actions — filters traffic, provides access control</td><td>Firewall, IPS</td></tr>
  <tr><td><strong>Passive</strong></td><td>Active vs. Passive</td><td>Monitors/collects data without affecting traffic flow</td><td>IDS, network sensors</td></tr>
  <tr><td><strong>Inline</strong></td><td>Inline vs. Tap</td><td>Sits directly in the traffic path — can block malicious activity</td><td>Firewall, IPS</td></tr>
  <tr><td><strong>Tap/Monitor</strong></td><td>Inline vs. Tap</td><td>Passively monitors traffic without interfering with flow</td><td>IDS, traffic analyzers</td></tr>
</table></div>

<div class="h2">6. Network Appliances</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Jump Server</div><p>Secure intermediary used to access devices in restricted/privileged network zones.</p></div>
  <div class="card blue"><div class="card-title">Proxy Server</div><p>Intermediary between users and the internet. Filters requests and hides device IP addresses.</p></div>
  <div class="card red"><div class="card-title">IPS (Intrusion Prevention)</div><p>Actively monitors and <strong>blocks</strong> malicious traffic in real time. Inline device.</p></div>
  <div class="card amber"><div class="card-title">IDS (Intrusion Detection)</div><p>Detects and <strong>alerts</strong> on suspicious activity but does NOT block. Passive/tap device.</p></div>
  <div class="card green"><div class="card-title">Load Balancer</div><p>Distributes traffic across multiple servers — improves availability and prevents overload.</p></div>
</div>

<div class="h2">7. Port Security</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">802</div><div class="def-content"><div class="def-title">802.1X</div><div class="def-text">Port-based network access control. Only <strong>authenticated devices</strong> can connect to the network. Validates credentials before granting port access.</div></div></div>
  <div class="def-block"><div class="def-num">EAP</div><div class="def-content"><div class="def-title">Extensible Authentication Protocol (EAP)</div><div class="def-text">Authentication framework for wireless networks. Commonly paired with 802.1X for secure device access. Supports multiple authentication methods.</div></div></div>
</div>

<div class="h2">8. Firewall Types</div>
<div class="tbl-wrap"><table>
  <tr><th>Firewall Type</th><th>Layer</th><th>Key Feature</th><th>Use Case</th></tr>
  <tr><td><strong>WAF</strong> — Web Application Firewall</td><td>Layer 7</td><td>Protects against SQLi, XSS, HTTP-based attacks</td><td>In front of web servers</td></tr>
  <tr><td><strong>UTM</strong> — Unified Threat Management</td><td>Multiple</td><td>Combines firewall + IPS + AV + content filtering in one device</td><td>SMBs needing all-in-one solution</td></tr>
  <tr><td><strong>NGFW</strong> — Next-Generation Firewall</td><td>L4–L7</td><td>Application awareness, deep packet inspection, integrated IPS</td><td>Enterprise — detect sophisticated attacks</td></tr>
  <tr><td><strong>Layer 4 Firewall</strong></td><td>Layer 4</td><td>Decisions based on IP addresses and ports (transport layer)</td><td>Basic traffic filtering</td></tr>
  <tr><td><strong>Layer 7 Firewall</strong></td><td>Layer 7</td><td>Decisions based on actual content/data (application layer)</td><td>Application-aware filtering</td></tr>
</table></div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Exam Tip:</strong> WAF = web app protection (SQLi, XSS). NGFW = deep packet inspection + app awareness. UTM = all-in-one for SMBs. Know which firewall fits which scenario.</div>
</div></div>
  `;
}
//#endregion
export { render };
