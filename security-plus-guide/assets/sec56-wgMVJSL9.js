//#region src/chapters/chapter5/sec56.js
function render() {
	return `
<div id="sec-sec56" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.6</div>
  <div class="sec-obj-tag">5.6 — Implement Security Awareness Practices</div>
  <div class="sec-title">Security Awareness &amp; Training</div>
  <div class="sec-lead">The human element is the most exploited attack surface. Security awareness training programs reduce the risk of phishing, social engineering, insider threats, and accidental data exposure. The exam tests how awareness programs are structured and how specific behaviors are addressed.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Phishing Campaigns</div>
<p>Simulated phishing tests measure and improve employee susceptibility to phishing attacks.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Recognition Training</div><p>Teach employees to identify phishing indicators: mismatched sender domains, urgency language, suspicious links, unexpected attachments, requests for credentials or wire transfers.</p></div>
  <div class="card amber"><div class="card-title">Simulated Campaigns</div><p>IT security sends fake phishing emails to employees. Those who click links or provide credentials are automatically redirected to remedial training. Tracks susceptibility rates over time — good metric for program effectiveness.</p></div>
  <div class="card green"><div class="card-title">Proper Response</div><p>Employees should: NOT click links or open attachments. Report the phish using the designated reporting button or alias. Delete the email. Reporting is more important than just deleting — it lets security teams correlate and block wider campaigns.</p></div>
</div>

<div class="h2">Anomalous Behavior Recognition</div>
<p>Employees should be trained to recognize and report unusual behaviors that may indicate security incidents or insider threats.</p>
<table><thead><tr><th>Behavior Type</th><th>Examples</th></tr></thead><tbody>
<tr><td><strong>Risky Behavior</strong></td><td>Using personal USB drives, accessing systems from untrusted networks, sharing credentials, installing unauthorized software</td></tr>
<tr><td><strong>Unexpected Behavior</strong></td><td>Logging in at unusual hours, accessing systems outside job role, large file downloads, printing sensitive documents unnecessarily</td></tr>
<tr><td><strong>Unintentional Behavior</strong></td><td>Accidental data exposure (emailing wrong person), misconfiguring cloud storage to public, clicking phishing links by mistake</td></tr>
</tbody></table>

<div class="h2">User Guidance Topics</div>
<div class="cards">
  <div class="card blue"><div class="card-title">AUP Enforcement</div><p>Employees must understand what they can and cannot do with company IT resources. Regular reminders, required re-acknowledgment annually. Violations have defined consequences.</p></div>
  <div class="card gold"><div class="card-title">Situational Awareness</div><p>Be aware of physical surroundings — who is watching your screen (shoulder surfing), tailgating behind you through secure doors. Lock screens when stepping away.</p></div>
  <div class="card amber"><div class="card-title">Insider Threat Indicators</div><p>Disgruntlement, financial stress, unusual data access, excessive privilege requests, working odd hours without explanation, talking about competitors, bypassing security controls.</p></div>
  <div class="card green"><div class="card-title">Password Management</div><p>Use a password manager, never reuse passwords, use strong passphrases, enable MFA on all accounts, never share credentials — even with IT (IT will never ask for your password).</p></div>
  <div class="card purple"><div class="card-title">Removable Media</div><p>Never plug in found USB drives. Only use company-approved removable media. All removable media should be encrypted. Report any suspicious devices found in the workplace.</p></div>
  <div class="card red"><div class="card-title">Social Engineering</div><p>Attackers use pretexting, baiting, tailgating, vishing, smishing. Verify identities before sharing any information. It is always safe to refuse a request and verify through official channels.</p></div>
</div>

<div class="h2">Operational Security (OpSec)</div>
<p><strong>OpSec</strong> is the practice of protecting sensitive information from adversaries by identifying what could be gathered about you and taking steps to limit that exposure.</p>
<ul>
  <li>Avoid posting sensitive work information on social media</li>
  <li>Be careful what appears in the background of video calls</li>
  <li>Shred sensitive documents before disposal (cross-cut shredding)</li>
  <li>Clear desk policy — no sensitive documents left on desks overnight</li>
  <li>Be aware of what metadata is included in files before sharing them</li>
</ul>

<div class="h2">Remote/Hybrid Work Security</div>
<ul>
  <li>Use company VPN when connecting to corporate resources</li>
  <li>Never use public Wi-Fi without VPN</li>
  <li>Keep home network router firmware updated; use WPA3 if available</li>
  <li>Keep work and personal devices/accounts separate</li>
  <li>Physical security at home — lock screens, don't allow family on work devices</li>
</ul>

<div class="h2">Security Awareness Program Lifecycle</div>
<table><thead><tr><th>Phase</th><th>Activities</th></tr></thead><tbody>
<tr><td><strong>Develop</strong></td><td>Identify training needs via risk assessment, define learning objectives, create content tailored to roles and threats</td></tr>
<tr><td><strong>Execute</strong></td><td>Deliver training through multiple channels — LMS, videos, newsletters, posters, simulations, classroom</td></tr>
<tr><td><strong>Monitor &amp; Measure</strong></td><td>Track completion rates, phishing simulation click rates, incident reporting rates, quiz scores, policy acknowledgements</td></tr>
<tr><td><strong>Improve</strong></td><td>Adjust content based on metrics — if phishing click rates are high, increase phishing training frequency</td></tr>
</tbody></table>

<div class="h2">Reporting &amp; Response Culture</div>
<ul>
  <li>Employees must feel safe reporting mistakes WITHOUT fear of punishment — a blame-free reporting culture catches incidents faster</li>
  <li>Provide a clear, easy mechanism for reporting: a dedicated email alias, a button in the email client, a hotline</li>
  <li>Celebrate report submissions — even false alarms are better than unreported incidents</li>
  <li>Near-miss reporting helps identify weaknesses before a real incident occurs</li>
</ul>
</div></div>
  `;
}
//#endregion
export { render };
