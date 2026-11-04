//#region src/chapters/chapter1/sec12.js
function render() {
	return `
<div id="sec-sec12" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 1.0 <span class="sec-breadcrumb-sep">›</span> Objective 1.2</div>
  <div class="sec-obj-tag">Objective 1.2</div>
  <div class="sec-title">Summarize Fundamental<br>Security Concepts</div>
  <div class="sec-lead">The foundational principles that every security decision is built on. CIA, AAA, Zero Trust, and physical security form the conceptual backbone of the entire exam. These are not just definitions to memorize — understand why each exists.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">The CIA Triad</div>
<p>The CIA Triad is the core model for information security. Every security decision — every control, every policy — can be traced back to protecting one or more of these three properties.</p>

<div class="grid-3">
  <div class="card blue">
    <div class="card-icon">🔒</div>
    <div class="card-title">Confidentiality</div>
    <p>Only authorized parties can ACCESS the data. Prevents unauthorized disclosure.<br><br><strong>Controls:</strong> Encryption, Access Control, Data Masking, MFA</p>
  </div>
  <div class="card green">
    <div class="card-icon">✅</div>
    <div class="card-title">Integrity</div>
    <p>Data remains ACCURATE and UNALTERED. Detects unauthorized modification.<br><br><strong>Controls:</strong> Hashing, Digital Signatures, Checksums, WORM storage</p>
  </div>
  <div class="card amber">
    <div class="card-icon">⚡</div>
    <div class="card-title">Availability</div>
    <p>Authorized users can ACCESS data WHEN needed. Prevents service disruption.<br><br><strong>Controls:</strong> Redundancy, Fault Tolerance, Backups, DDoS protection</p>
  </div>
</div>

<div class="diag"><pre>
  CIA TRIAD ATTACK MAPPING:
  ─────────────────────────────────────────────────────
  Attack Type          Violates       Example
  ─────────────────────────────────────────────────────
  Data breach          Confidentiality  Attacker reads credit card numbers
  Data tampering       Integrity        Attacker modifies a bank transaction
  Ransomware/DDoS      Availability     Systems encrypted or overwhelmed
  Man-in-the-middle    C + I            Intercepts AND modifies traffic
  Insider data theft   Confidentiality  Employee emails sensitive files out
  ─────────────────────────────────────────────────────
  Note: Many attacks violate multiple CIA properties simultaneously
</pre></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam scenario:</strong> "A hacker encrypts all your files and demands ransom." This violates <strong>Availability</strong> (you can't access your files) — NOT confidentiality (they didn't read your files, they locked them). This distinction is frequently tested.</div>

<div class="h2">Non-repudiation</div>
<p><strong>Non-repudiation</strong> ensures that a person cannot deny having performed an action. It is the security property that establishes proof and accountability. Critical in legal, financial, and regulatory contexts.</p>

<div class="tbl-wrap"><table>
<thead><tr><th>Method</th><th>How It Works</th><th>What It Proves</th></tr></thead>
<tbody>
<tr><td>Digital Signatures</td><td>Signer uses private key; anyone verifies with public key</td><td>Document was signed by a specific private key holder</td></tr>
<tr><td>Audit Logs</td><td>Timestamped records of every action</td><td>Who did what and when</td></tr>
<tr><td>Timestamps</td><td>Trusted time source records event time</td><td>Action occurred at a specific moment</td></tr>
<tr><td>Video Surveillance</td><td>Records physical presence</td><td>Person was physically present at a location</td></tr>
</tbody>
</table></div>

<div class="h2 gold">AAA Framework — Authentication, Authorization, Accounting</div>

<div class="def-block">
  <div class="def-num">A</div>
  <div class="def-content">
    <div class="def-title">Authentication — "Who are you?"</div>
    <div class="def-text">Verifying the identity of a user, system, or process. You must prove you are who you claim to be before being granted any access.</div>
    <div class="def-examples">
      <span class="def-ex">Passwords/PINs</span><span class="def-ex">Biometrics</span><span class="def-ex">Smart Cards</span><span class="def-ex">MFA</span><span class="def-ex">Certificates</span>
    </div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">A</div>
  <div class="def-content">
    <div class="def-title">Authorization — "What can you do?"</div>
    <div class="def-text">Determining what an authenticated user is allowed to do. Happens AFTER authentication. Defines permissions, access levels, and resource rights.</div>
    <div class="def-examples">
      <span class="def-ex">RBAC</span><span class="def-ex">ABAC</span><span class="def-ex">MAC</span><span class="def-ex">ACLs</span><span class="def-ex">Permissions</span>
    </div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">A</div>
  <div class="def-content">
    <div class="def-title">Accounting (Auditing) — "What did you do?"</div>
    <div class="def-text">Tracking and recording user activities. Creates an audit trail of what was accessed, what was changed, and when. Enables forensics and compliance reporting.</div>
    <div class="def-examples">
      <span class="def-ex">Log Management</span><span class="def-ex">SIEM</span><span class="def-ex">Event Monitoring</span><span class="def-ex">Usage Reports</span>
    </div>
  </div>
</div>

<div class="h2">Authorization Models</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Model</th><th>Access Determined By</th><th>Who Controls</th><th>Use Case</th></tr></thead>
<tbody>
<tr><td>RBAC (Role-Based)</td><td>User's role in the organization</td><td>Admin assigns roles</td><td>Most enterprise environments</td></tr>
<tr><td>ABAC (Attribute-Based)</td><td>Attributes (dept, location, clearance)</td><td>Policy engine</td><td>Granular cloud/federal access</td></tr>
<tr><td>MAC (Mandatory)</td><td>System-enforced classification labels</td><td>System/policy</td><td>Military, top-secret environments</td></tr>
<tr><td>DAC (Discretionary)</td><td>Resource owner's choice</td><td>Object owner</td><td>File systems, shared folders</td></tr>
<tr><td>Rule-Based</td><td>Predefined rules (time, IP, etc)</td><td>Admin rules</td><td>Firewalls, scheduled access</td></tr>
</tbody>
</table></div>

<div class="h2">Gap Analysis</div>
<p>A structured process to identify the difference between your <strong>current security state</strong> and your <strong>desired security state</strong> — then plan how to close that gap.</p>
<div class="diag"><pre>
  CURRENT STATE ──────────────────────► GAP ──► FUTURE STATE
  (Where you are now)                          (Compliance target,
                                                best practice, regulation)
  
  Process:
  1. Assess current posture — what controls exist today?
  2. Define target state — what does GDPR/HIPAA/NIST require?
  3. Identify gaps — what's missing or insufficient?
  4. Create remediation plan — how to close each gap?
  5. Prioritize by risk — what's most critical to fix first?
</pre></div>

<div class="h2">Zero Trust — "Never Trust, Always Verify"</div>
<p>Zero Trust is an architecture, not a product. It assumes <strong>no user, device, or network segment is inherently trusted</strong> — even if inside the corporate perimeter. Every access request must be authenticated and authorized in real time.</p>

<div class="alert key"><span class="alert-icon">🔑</span><strong>Core principle:</strong> The old model trusted anything inside the network perimeter. Zero Trust eliminates the concept of a trusted perimeter entirely. Every request — internal OR external — is treated as potentially hostile until verified.</div>

<div class="grid-2">
  <div class="card blue">
    <div class="card-icon">⚙️</div>
    <div class="card-title">Control Plane — Makes Decisions</div>
    <p><strong>Policy Engine:</strong> Evaluates access requests against policies in real time.<br><br><strong>Policy Administrator:</strong> Manages and enforces policies across the environment.<br><br><strong>Adaptive Identity:</strong> Dynamically adjusts trust based on behavior, location, device health.<br><br><strong>Threat Scope Reduction:</strong> Limits what any user or device can see or reach.</p>
  </div>
  <div class="card amber">
    <div class="card-icon">🔄</div>
    <div class="card-title">Data Plane — Enforces Decisions</div>
    <p><strong>Policy Enforcement Point (PEP):</strong> The actual checkpoint where access is granted or denied — firewalls, proxies, endpoint agents.<br><br><strong>Subject/System:</strong> The user or device requesting access, continuously monitored.<br><br><strong>Implicit Trust Zones:</strong> ZT eliminates these — no zone is automatically trusted.</p>
  </div>
</div>

<div class="diag"><pre>
  ZERO TRUST FLOW:
  ──────────────────────────────────────────────────────────
  User/Device Request
        │
        ▼
  Policy Enforcement Point (PEP) ◄── enforces decision
        │
        ▼ sends request to
  Policy Engine + Policy Administrator ◄── Control Plane
        │ evaluates: identity? device health? behavior? location?
        │
        ▼ grants/denies
  Resource Access (only minimum required)
  
  KEY: Continuous verification — even after initial grant,
       activity is monitored and access can be revoked instantly
</pre></div>

<div class="h2">Physical Security</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Control</th><th>Type</th><th>How It Works</th></tr></thead>
<tbody>
<tr><td>Bollards</td><td><span class="tag amber">Preventive</span></td><td>Short, sturdy posts that block vehicles from ramming facilities. Fixed, removable, or hydraulic variants.</td></tr>
<tr><td>Access Control Vestibule</td><td><span class="tag blue">Preventive</span></td><td>Mantrap — double-door entry forcing one person at a time through credential verification before inner door opens.</td></tr>
<tr><td>Fencing</td><td><span class="tag blue">Preventive</span> <span class="tag amber">Deterrent</span></td><td>Chain-link, razor wire, or electric. Defines secure perimeter and discourages/prevents unauthorized entry.</td></tr>
<tr><td>Video Surveillance</td><td><span class="tag green">Detective</span> <span class="tag amber">Deterrent</span></td><td>CCTV and IP cameras. Records for forensics (detective) and visible presence deters attackers (deterrent).</td></tr>
<tr><td>Security Guard</td><td><span class="tag blue">Preventive</span> <span class="tag green">Detective</span></td><td>Human presence that can challenge, observe, respond, and enforce access controls.</td></tr>
<tr><td>Access Badge</td><td><span class="tag blue">Preventive</span></td><td>Magnetic stripe, proximity (RFID), or smart card. Grants or denies physical access based on identity.</td></tr>
<tr><td>Lighting</td><td><span class="tag amber">Deterrent</span></td><td>Illuminates areas to discourage criminal activity and enable surveillance. Motion-activated lighting is especially effective.</td></tr>
<tr><td>Infrared Sensors</td><td><span class="tag green">Detective</span></td><td>Detects heat signatures from human bodies. Used in dark environments or after-hours security.</td></tr>
<tr><td>Pressure Sensors</td><td><span class="tag green">Detective</span></td><td>Detects weight on a surface — used in floors of secure rooms to detect unauthorized presence.</td></tr>
<tr><td>Microwave Sensors</td><td><span class="tag green">Detective</span></td><td>Uses microwave radiation to detect motion. Better range than infrared, works through walls.</td></tr>
<tr><td>Ultrasonic Sensors</td><td><span class="tag green">Detective</span></td><td>Emits sound waves and detects disturbances. Used for motion detection in enclosed spaces.</td></tr>
</tbody>
</table></div>

<div class="h2">Deception and Disruption Technology</div>
<p>Deception technologies create fake assets to attract attackers, reveal their techniques, and alert defenders — without exposing real systems.</p>

<div class="cards">
  <div class="card red">
    <div class="card-icon">🍯</div>
    <div class="card-title">Honeypot</div>
    <p>A single decoy system that simulates vulnerable services. Attracts attackers away from real systems and logs their TTPs (tactics, techniques, procedures).</p>
  </div>
  <div class="card amber">
    <div class="card-icon">🌐</div>
    <div class="card-title">Honeynet</div>
    <p>An entire network of interconnected honeypots. Provides a realistic environment for observing sophisticated, multi-stage attacks across multiple systems.</p>
  </div>
  <div class="card purple">
    <div class="card-icon">📄</div>
    <div class="card-title">Honeyfile</div>
    <p>Decoy file placed in accessible locations. When an attacker opens or copies it, an alert triggers. Detects data exfiltration attempts in real time.</p>
  </div>
  <div class="card green">
    <div class="card-icon">🎫</div>
    <div class="card-title">Honeytoken</div>
    <p>Fake credentials, API keys, or database records. When used by an attacker, security teams are immediately alerted. Reveals credential theft before damage occurs.</p>
  </div>
</div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Know the difference:</strong> Honeypot = single fake system. Honeynet = network of fake systems. Honeyfile = fake file. Honeytoken = fake credential/key/record. The exam will present scenarios and ask which deception technology best applies.</div>

</div></div>
  `;
}
//#endregion
export { render };
