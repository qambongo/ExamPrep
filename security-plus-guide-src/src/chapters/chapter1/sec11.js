export function render() {
  return `
<div id="sec-sec11" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 1.0 <span class="sec-breadcrumb-sep">›</span> Objective 1.1</div>
  <div class="sec-obj-tag">Objective 1.1</div>
  <div class="sec-title">Compare and Contrast<br>Types of Security Controls</div>
  <div class="sec-lead">Security controls are safeguards or countermeasures to avoid, detect, counteract, or minimize security risks. They are classified along two dimensions: <strong>categories</strong> (what they're made of) and <strong>types</strong> (what function they perform). Every exam question on controls will test one or both of these dimensions.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="alert info"><span class="alert-icon">💡</span><strong>The key distinction:</strong> Categories describe the NATURE of the control (technology? people? procedure? hardware?). Types describe the PURPOSE (prevent? detect? correct?). A single control can be, for example, a <strong>Technical Preventive</strong> control — the firewall.</div>

<div class="h2">Control Categories — What It's Made Of</div>

<div class="def-block">
  <div class="def-num">01</div>
  <div class="def-content">
    <div class="def-title">Technical Controls (Logical Controls)</div>
    <div class="def-text">Implemented through hardware and software systems. They enforce security policy automatically without human intervention. If it runs on a computer or uses technology, it's technical.</div>
    <div class="def-examples">
      <span class="def-ex">Firewalls</span><span class="def-ex">Encryption</span><span class="def-ex">Antivirus</span><span class="def-ex">ACLs</span><span class="def-ex">IDS/IPS</span><span class="def-ex">MFA</span>
    </div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">02</div>
  <div class="def-content">
    <div class="def-title">Managerial Controls (Administrative Controls)</div>
    <div class="def-text">Oversight controls that manage the security program itself. They involve planning, risk management, policies, and procedures. Think of these as the "brain" of your security program.</div>
    <div class="def-examples">
      <span class="def-ex">Risk Assessments</span><span class="def-ex">Security Policies</span><span class="def-ex">Awareness Training</span><span class="def-ex">Incident Response Plans</span>
    </div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">03</div>
  <div class="def-content">
    <div class="def-title">Operational Controls</div>
    <div class="def-text">Day-to-day activities carried out by people to maintain security. Unlike technical controls, these require humans to execute them consistently. They bridge the gap between policy and technology.</div>
    <div class="def-examples">
      <span class="def-ex">User Training</span><span class="def-ex">Configuration Management</span><span class="def-ex">Physical Access Checks</span><span class="def-ex">Log Review</span>
    </div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">04</div>
  <div class="def-content">
    <div class="def-title">Physical Controls</div>
    <div class="def-text">Tangible, physical safeguards that protect assets, facilities, and infrastructure. You can touch these controls. They prevent unauthorized physical access to systems and data.</div>
    <div class="def-examples">
      <span class="def-ex">Locks</span><span class="def-ex">Biometric Readers</span><span class="def-ex">Fencing</span><span class="def-ex">Security Guards</span><span class="def-ex">Cameras</span><span class="def-ex">Bollards</span>
    </div>
  </div>
</div>

<div class="h2 gold">Control Types — What It Does</div>

<div class="tbl-wrap"><table>
<thead><tr><th>Type</th><th>When It Acts</th><th>Goal</th><th>Examples</th></tr></thead>
<tbody>
<tr>
  <td><span class="tag blue">Preventive</span></td>
  <td>Before the incident</td>
  <td>Stop it from happening</td>
  <td>Firewall blocks unauthorized traffic, Encryption prevents data reading, MFA stops unauthorized login</td>
</tr>
<tr>
  <td><span class="tag amber">Deterrent</span></td>
  <td>Before the incident</td>
  <td>Discourage attackers</td>
  <td>Warning signs, visible cameras, login banners, security guards at entrance</td>
</tr>
<tr>
  <td><span class="tag green">Detective</span></td>
  <td>During/after incident</td>
  <td>Identify it occurred</td>
  <td>IDS alerts, audit logs, SIEM, file integrity monitoring, motion sensors</td>
</tr>
<tr>
  <td><span class="tag amber">Corrective</span></td>
  <td>After the incident</td>
  <td>Restore normal operations</td>
  <td>Antivirus removal, system restore, patch management, incident response</td>
</tr>
<tr>
  <td><span class="tag red">Compensating</span></td>
  <td>When primary fails</td>
  <td>Alternative mitigation</td>
  <td>MFA when biometrics unavailable, manual log review when SIEM is down</td>
</tr>
<tr>
  <td><span class="tag blue">Directive</span></td>
  <td>Ongoing</td>
  <td>Direct/mandate behavior</td>
  <td>Security policies, employee handbooks, regulations, SOPs, compliance requirements</td>
</tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam scenario trap:</strong> The exam loves asking you to classify a control by BOTH dimensions. A <em>"policy requiring employees to lock their screens"</em> is a <strong>Managerial Directive</strong> control. A <em>"camera that records door entry"</em> is a <strong>Physical Detective</strong> control. Always identify both.</div>

<div class="h2">Mapping Controls — Quick Reference</div>
<div class="diag"><pre>
  CATEGORY ──────────────────────────────────────────────
  Technical    │  Managerial    │  Operational  │  Physical
  ─────────────┼────────────────┼───────────────┼──────────────
  Firewall     │  Risk Assess.  │  Training     │  Locks
  Encryption   │  Policies      │  Config Mgmt  │  Guards
  IDS/IPS      │  IR Planning   │  Log Review   │  Fencing
  Antivirus    │  Awareness     │  Patch Mgmt   │  Bollards
  ACLs         │  SDLC          │  Procedures   │  Cameras
  ─────────────┴────────────────┴───────────────┴──────────────

  TYPE ──────────────────────────────────────────────────
  Timeline:  [BEFORE]──────────────────────[AFTER]
             Deterrent → Preventive → Detective → Corrective
                              ↕
                         Compensating (replaces primary)
                         Directive (ongoing mandate)
</pre></div>

<div class="h2">Preventive vs. Deterrent — A Critical Distinction</div>
<div class="grid-2">
  <div class="card blue">
    <div class="card-title">Preventive</div>
    <p>Actually BLOCKS the action. The threat cannot proceed even if it tries. A locked door is preventive — it physically stops entry.</p>
  </div>
  <div class="card amber">
    <div class="card-title">Deterrent</div>
    <p>Makes the attacker LESS LIKELY to try. A sign saying "Authorized Personnel Only" deters, but doesn't stop a determined attacker who ignores it.</p>
  </div>
</div>
<div class="alert warn"><span class="alert-icon">⚠️</span><strong>Common confusion:</strong> A security camera is <strong>Detective</strong> (records what happened) AND <strong>Deterrent</strong> (visible cameras discourage attackers). Context determines which applies. If the question emphasizes "catching the attacker in the act or after" → Detective. If it emphasizes "discouraging crime" → Deterrent.</div>

<div class="h2">Corrective vs. Compensating</div>
<div class="grid-2">
  <div class="card green">
    <div class="card-title">Corrective</div>
    <p>Fixes damage AFTER an incident. The primary control existed but the incident happened anyway. Examples: restoring from backup, patching exploited vulnerability, removing malware.</p>
  </div>
  <div class="card red">
    <div class="card-title">Compensating</div>
    <p>Used when the PRIMARY control cannot be implemented. Serves as a substitute. Example: MFA (compensating) when biometric login (primary) is broken. It's a workaround, not a fix.</p>
  </div>
</div>

</div></div>
  `
}
