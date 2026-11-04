export function render() {
  return `
<div id="sec-sec13" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 1.0 <span class="sec-breadcrumb-sep">›</span> Objective 1.3</div>
  <div class="sec-obj-tag">Objective 1.3</div>
  <div class="sec-title">Change Management Processes<br>and Impact on Security</div>
  <div class="sec-lead">Uncontrolled changes are one of the leading causes of security incidents. Change management ensures that every modification to IT infrastructure is planned, tested, approved, and documented — so changes don't accidentally introduce vulnerabilities or cause outages.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Business Processes Impacting Security</div>

<div class="tbl-wrap"><table>
<thead><tr><th>Process</th><th>Purpose</th><th>Security Impact</th></tr></thead>
<tbody>
<tr>
  <td><strong>Approval Process</strong></td>
  <td>Authorized stakeholders review and sign off on changes before implementation</td>
  <td>Prevents unauthorized changes from bypassing security checks or introducing vulnerabilities</td>
</tr>
<tr>
  <td><strong>Ownership</strong></td>
  <td>Designates a responsible individual or team for each change</td>
  <td>Ensures accountability — someone is responsible if the change causes a breach</td>
</tr>
<tr>
  <td><strong>Stakeholders</strong></td>
  <td>All affected parties are consulted and informed</td>
  <td>Different teams identify security risks the change owner may miss</td>
</tr>
<tr>
  <td><strong>Impact Analysis</strong></td>
  <td>Evaluate consequences (security, performance, compliance) before deployment</td>
  <td>Identifies if the change introduces new attack vectors or compliance gaps</td>
</tr>
<tr>
  <td><strong>Test Results</strong></td>
  <td>Pilot or sandbox environment testing before live deployment</td>
  <td>Ensures changes don't break security tools or create vulnerabilities in production</td>
</tr>
<tr>
  <td><strong>Backout Plan</strong></td>
  <td>Predefined steps to reverse a change if it causes problems</td>
  <td>If a change causes a breach or failure, rollback restores a secure state quickly</td>
</tr>
<tr>
  <td><strong>Maintenance Window</strong></td>
  <td>Scheduled low-traffic period for making changes</td>
  <td>Reduces exposure during changes; systems aren't in active use when potentially vulnerable</td>
</tr>
<tr>
  <td><strong>Standard Operating Procedure</strong></td>
  <td>Documented step-by-step instructions for implementing changes</td>
  <td>Ensures consistency and that security best practices are followed every time</td>
</tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Backout Plan vs. Rollback:</strong> The exam may test whether you know a backout plan is the PLAN to reverse, while rollback is the EXECUTION of that plan. Always have the backout plan documented BEFORE implementing the change — not after something goes wrong.</div>

<div class="h2 gold">Technical Implications of Change</div>

<div class="cards">
  <div class="card blue">
    <div class="card-icon">✅</div>
    <div class="card-title">Allow Lists (Whitelists)</div>
    <p>Only explicitly listed entities (IPs, apps, users) are permitted. Everything else is denied. More secure but requires maintenance as authorized entities change.</p>
  </div>
  <div class="card red">
    <div class="card-icon">🚫</div>
    <div class="card-title">Deny Lists (Blacklists)</div>
    <p>Known bad entities are blocked; everything else is allowed. Easier to manage but reactive — new threats aren't blocked until added to the list.</p>
  </div>
  <div class="card amber">
    <div class="card-icon">🔒</div>
    <div class="card-title">Restricted Activities</div>
    <p>Certain actions are limited to specific roles. Prevents unauthorized users from installing software, modifying firewall rules, or accessing sensitive systems.</p>
  </div>
  <div class="card purple">
    <div class="card-icon">⏱</div>
    <div class="card-title">Downtime</div>
    <p>Planned unavailability for maintenance. Must be carefully managed — systems may be temporarily vulnerable during updates, especially if security services restart.</p>
  </div>
  <div class="card green">
    <div class="card-icon">🔄</div>
    <div class="card-title">Service/App Restart</div>
    <p>Required after patches or configuration changes. Brief window of exposure during restart when security services may not be running at full capability.</p>
  </div>
  <div class="card red">
    <div class="card-icon">⚠️</div>
    <div class="card-title">Legacy Applications</div>
    <p>Older systems that no longer receive patches or updates. Significant security risk — known vulnerabilities may never be fixed. Often require isolation or decommissioning.</p>
  </div>
</div>

<div class="def-block">
  <div class="def-num">→</div>
  <div class="def-content">
    <div class="def-title">Dependencies — The Hidden Risk</div>
    <div class="def-text">Dependencies are relationships between systems where one relies on another to function. When System A depends on System B, a compromise or failure of B cascades to A. All dependencies must be documented and secured. Example: A web application depending on a database — if the database is compromised, the web app's data is compromised regardless of the app's own security.</div>
  </div>
</div>

<div class="h2">Documentation Requirements</div>

<div class="grid-3">
  <div class="card blue">
    <div class="card-title">Updating Diagrams</div>
    <p>Network and system diagrams must reflect current architecture after every change. Outdated diagrams lead to missed security controls and misconfiguration of new components.</p>
  </div>
  <div class="card green">
    <div class="card-title">Updating Policies/Procedures</div>
    <p>Security policies must be revised when systems change. New technology may require new acceptable use policies, access control procedures, or data handling rules.</p>
  </div>
  <div class="card amber">
    <div class="card-title">Version Control</div>
    <p>All configurations, code, and documents should be tracked with version history. Enables rollback, auditing, and accountability. Git is the standard for code; document management systems for policies.</p>
  </div>
</div>

<div class="alert info"><span class="alert-icon">💡</span><strong>Allow list vs. Deny list security posture:</strong> Allow lists follow the principle of <em>default deny</em> — more secure. Deny lists follow <em>default allow</em> — more permissive but easier to manage. The Security+ exam leans toward recommending allow lists for high-security environments.</div>

</div></div>
  `
}
