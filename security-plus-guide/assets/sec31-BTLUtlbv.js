//#region src/chapters/chapter3/sec31.js
function render() {
	return `
<div id="sec-sec31" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.1</div>
  <div class="sec-obj-tag">3.1</div>
  <div class="sec-title">Architecture and Infrastructure Concepts</div>
  <div class="sec-lead">Covers the foundational technology models — cloud, on-premises, hybrid, containerization, IoT, and industrial systems — and the security implications each brings.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Cloud Security Architecture</div>
<div class="alert info"><div class="alert-icon">ℹ️</div><strong>Shared Responsibility Model:</strong> In cloud environments security is divided — the provider secures the underlying infrastructure; the customer secures what they deploy on top of it.</div>
<div class="tbl-wrap"><table>
  <tr><th>Cloud Model</th><th>Provider Responsible For</th><th>Customer Responsible For</th></tr>
  <tr><td><strong>IaaS</strong></td><td>Hardware, hypervisor, physical facilities</td><td>OS, applications, data, identity</td></tr>
  <tr><td><strong>PaaS</strong></td><td>Hardware + OS + runtime/platform</td><td>Applications, data</td></tr>
  <tr><td><strong>SaaS</strong></td><td>Everything except data and user access</td><td>Data configuration, user access controls</td></tr>
</table></div>

<div class="h3">Hybrid & Third-Party Considerations</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Hybrid Cloud</div><p>Integrates on-premises with cloud. Security is complex because boundaries are blurred — must ensure compliance (GDPR, HIPAA) across both environments.</p></div>
  <div class="card amber"><div class="card-title">Third-Party Vendors</div><p>Adding vendors increases complexity. Key concerns: data access, compliance, risk management, and vendor adherence to standards like ISO 27001 or SOC 2.</p></div>
</div>

<div class="h2">Infrastructure as Code (IaC)</div>
<p><strong>IaC</strong> automates infrastructure management using code to define configurations and provisioning of cloud resources.</p>
<div class="cards">
  <div class="card green"><div class="card-title">Security Benefit</div><p>Allows security policies to be integrated directly into provisioning pipelines — consistent and repeatable.</p></div>
  <div class="card red"><div class="card-title">Common Risks</div><p>Misconfigurations, unsecured endpoints, and insufficient access controls can be <em>written into</em> infrastructure code and deployed at scale.</p></div>
</div>

<div class="h2">Serverless &amp; Microservices</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">S</div><div class="def-content"><div class="def-title">Serverless</div><div class="def-text">Cloud provider manages all server infrastructure. Security is largely provider-dependent. <strong>Event-driven risks</strong>: apps triggered by external events need careful permission management.</div></div></div>
  <div class="def-block"><div class="def-num">M</div><div class="def-content"><div class="def-title">Microservices</div><div class="def-text">Applications broken into small, loosely coupled services. Security must be designed at the <strong>service level</strong>. Secure inter-service communication via API gateways, encryption, and access management.</div></div></div>
</div>

<div class="h2">Network Infrastructure Security</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Physical Isolation (Air-Gap)</div><p>Network physically isolated from the outside — no internet connectivity. Prevents remote attacks but creates operational challenges for data exchange.</p></div>
  <div class="card gold"><div class="card-title">Logical Segmentation</div><p>Divides networks into subnets/zones. Limits breach impact to one segment. Example: separate zones for public-facing, internal, and sensitive data systems.</p></div>
  <div class="card green"><div class="card-title">Software-Defined Networking (SDN)</div><p>Manages network resources dynamically via software. Greater flexibility but requires robust controls to prevent misconfigurations.</p></div>
  <div class="card amber"><div class="card-title">On-Premises</div><p>Organization has full control. Security measures: firewalls, access control, physical security, encryption. Higher cost but more granular control.</p></div>
</div>

<div class="h2">Centralized vs. Decentralized Security</div>
<div class="tbl-wrap"><table>
  <tr><th>Model</th><th>Pros</th><th>Cons</th></tr>
  <tr><td><strong>Centralized</strong></td><td>Streamlined management, unified policy enforcement</td><td>Single point of failure</td></tr>
  <tr><td><strong>Decentralized</strong></td><td>Localized decision-making, tailored per department</td><td>Inconsistency, potential policy gaps</td></tr>
</table></div>

<div class="h2">Containerization &amp; Virtualization</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">C</div><div class="def-content"><div class="def-title">Containerization</div><div class="def-text">Apps run in isolated containers sharing the host OS. Benefit: efficiency and portability. Risk: <strong>container escape</strong> — attacker breaks out of the isolated container.</div></div></div>
  <div class="def-block"><div class="def-num">V</div><div class="def-content"><div class="def-title">Virtualization</div><div class="def-text">Multiple OS instances on one physical server. Benefit: resource utilization. Risk: <strong>hypervisor vulnerabilities</strong> can lead to cross-VM attacks.</div></div></div>
</div>

<div class="h2">IoT, ICS/SCADA, RTOS, Embedded Systems</div>
<div class="cards">
  <div class="card red"><div class="card-title">IoT Security</div><p>Unsecured IoT devices (healthcare, manufacturing, home automation) can be entry points into networks. Mitigate with device management, encryption, IoT security policies.</p></div>
  <div class="card red"><div class="card-title">ICS / SCADA</div><p>Control industrial operations (power plants, water, manufacturing). Vulnerabilities can have catastrophic real-world outcomes. Controls: network segmentation, strict access, IDS.</p></div>
  <div class="card amber"><div class="card-title">RTOS</div><p>Real-Time Operating Systems require real-time processing with limited resources. Security measures must be optimized to avoid performance degradation.</p></div>
  <div class="card amber"><div class="card-title">Embedded Systems</div><p>Specialized systems (automotive, medical devices) with limited memory/CPU. Mitigate with secure coding, firmware integrity checks, and hardware-based security features.</p></div>
</div>

<div class="alert key"><div class="alert-icon">✅</div><strong>High Availability (HA):</strong> Ensures systems remain operational during failures using failover mechanisms, redundancy, and load balancing.</div>
</div></div>
  `;
}
//#endregion
export { render };
