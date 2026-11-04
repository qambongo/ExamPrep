//#region src/chapters/chapter4/sec43.js
function render() {
	return `
<div id="sec-sec43" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.3</div>
  <div class="sec-obj-tag">4.3 — Vulnerability Management</div>
  <div class="sec-title">Vulnerability Management<br>Activities</div>
  <div class="sec-lead">Vulnerability management is a continuous cycle: identify vulnerabilities, confirm and prioritize them by risk, remediate the most critical first, then validate the fix was effective. Understanding each phase — and its tools — is heavily tested on the exam.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Identification Methods</div>
<div class="h3">1. Vulnerability Scans</div>
<p>Automated tools compare system configurations against a database of known vulnerabilities (CVEs). They detect missing patches, unsecure services, and misconfigurations.</p>
<div class="cards">
  <div class="card blue"><div class="card-title">Key Tools</div><ul><li><strong>Nessus</strong> — industry standard</li><li><strong>Qualys</strong> — cloud-based platform</li><li><strong>OpenVAS</strong> — open source</li></ul></div>
  <div class="card gold"><div class="card-title">What They Detect</div><ul><li>Missing patches and updates</li><li>Unsecured services and open ports</li><li>Misconfigured systems</li><li>Default or weak credentials</li></ul></div>
</div>

<div class="h3">2. Application Security Analysis</div>
<table class="table"><thead><tr><th>Technique</th><th>How It Works</th><th>Tools</th><th>Finds</th></tr></thead><tbody>
<tr><td><strong>Static Analysis (SAST)</strong></td><td>Examines source code/binaries without executing</td><td>Checkmarx, SonarQube, Fortify</td><td>Buffer overflows, hard-coded creds, logic flaws — early in SDLC</td></tr>
<tr><td><strong>Dynamic Analysis (DAST)</strong></td><td>Tests running application in test environment</td><td>OWASP ZAP, Burp Suite, AppSpider</td><td>SQL injection, XSS, session management flaws — runtime issues</td></tr>
<tr><td><strong>Package Monitoring</strong></td><td>Monitors third-party libs for known CVEs</td><td>Snyk, WhiteSource, OWASP Dependency-Check</td><td>Vulnerable open-source dependencies</td></tr>
</tbody></table>

<div class="h3">3. Threat Feeds</div>
<div class="cards">
  <div class="card blue"><div class="card-title">OSINT</div><p>Publicly available threat info — blogs, forums, research papers, social media. Free but requires filtering. Attackers also use it.</p></div>
  <div class="card gold"><div class="card-title">Proprietary Feeds</div><p>Paid intelligence from vendors: <strong>FireEye, CrowdStrike, ThreatConnect</strong>. Curated IoCs, attack patterns, TTPs. More actionable than raw OSINT.</p></div>
  <div class="card green"><div class="card-title">ISACs</div><p>Information Sharing and Analysis Centers — sector-specific (financial, healthcare, energy) threat sharing. Strengthens collective defense.</p></div>
  <div class="card purple"><div class="card-title">Dark Web Monitoring</div><p>Monitor for stolen credentials, exploit kits, data for sale. Early warning of compromised assets before attackers use them.</p></div>
</div>

<div class="h3">4. Penetration Testing</div>
<p>Ethical hackers simulate real attacks to find vulnerabilities before real attackers do. Unlike vulnerability scans, pen testers actively exploit weaknesses to demonstrate impact.</p>
<div class="cards">
  <div class="card amber"><div class="card-title">Key Tools</div><ul><li><strong>Metasploit</strong> — exploit framework</li><li><strong>Nmap</strong> — port/service discovery</li><li><strong>Burp Suite</strong> — web app testing</li><li><strong>Wireshark</strong> — traffic analysis</li></ul></div>
  <div class="card blue"><div class="card-title">Bug Bounty Programs</div><p>Organizations pay researchers to find and responsibly disclose vulnerabilities. Google, Facebook, Apple all run programs. Incentivizes responsible disclosure over exploitation.</p></div>
</div>

<div class="h2">Vulnerability Analysis &amp; Prioritization</div>
<div class="h3">False Positives vs False Negatives</div>
<div class="cards">
  <div class="card amber"><div class="card-title">False Positive</div><p>Scanner flags a vulnerability that <strong>doesn't actually exist</strong>. Wastes analyst time. Can cause security fatigue — real threats get ignored.</p></div>
  <div class="card red"><div class="card-title">False Negative</div><p>Scanner <strong>misses a real vulnerability</strong>. Far more dangerous — gives false sense of security. Leaves actual attack surface unaddressed.</p></div>
</div>

<div class="h3">CVSS — Common Vulnerability Scoring System</div>
<p>Standardized 0–10 scoring framework for vulnerability severity. Three score components:</p>
<table class="table"><thead><tr><th>Score Component</th><th>What It Measures</th><th>Range</th></tr></thead><tbody>
<tr><td><strong>Base Score</strong></td><td>Intrinsic characteristics — exploitability, impact on CIA</td><td>0.0 – 10.0</td></tr>
<tr><td><strong>Temporal Score</strong></td><td>Changes over time — exploit code availability, patch status</td><td>Modifies base score</td></tr>
<tr><td><strong>Environmental Score</strong></td><td>Organization-specific context — asset criticality, mitigating controls</td><td>Modifies base score</td></tr>
</tbody></table>
<div class="cards">
  <div class="card blue"><div class="card-title">CVSS Ranges</div><ul><li>0.0 = None</li><li>0.1–3.9 = Low</li><li>4.0–6.9 = Medium</li><li>7.0–8.9 = High</li><li>9.0–10.0 = Critical</li></ul></div>
  <div class="card gold"><div class="card-title">CVE</div><p><strong>Common Vulnerabilities and Exposures</strong> — unique identifiers for publicly known vulnerabilities. Format: CVE-YEAR-NUMBER. Example: CVE-2021-34527 (PrintNightmare). Used across all scanners and tools for consistency.</p></div>
</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>Exam tip:</strong> CVSS = <em>how bad is it?</em> (scoring). CVE = <em>what is it?</em> (identification). These are frequently confused on the exam. CVSS scores prioritize remediation order; CVEs provide the standard name.</div>

<div class="h3">Prioritization Factors</div>
<ul>
  <li><strong>Risk-based:</strong> Focus on vulnerabilities most likely to be exploited with greatest impact first</li>
  <li><strong>Exposure Factor:</strong> Percentage of asset value lost if the vulnerability is exploited (50% EF = 50% loss)</li>
  <li><strong>Environmental Variables:</strong> Geography, business criticality, regulatory environment affect real-world risk</li>
  <li><strong>Industry Impact:</strong> Same vulnerability has different weight in healthcare vs. retail</li>
  <li><strong>Risk Tolerance:</strong> Some low-severity vulns may be accepted if remediation cost exceeds impact</li>
</ul>

<div class="h2">Vulnerability Remediation</div>
<table class="table"><thead><tr><th>Response</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Patching</strong></td><td>Apply vendor-provided fix to eliminate the vulnerability</td><td>Windows Update, apt upgrade, firmware update</td></tr>
<tr><td><strong>Segmentation</strong></td><td>Isolate vulnerable systems to limit lateral movement</td><td>Put legacy SCADA on isolated VLAN</td></tr>
<tr><td><strong>Compensating Controls</strong></td><td>Alternative measures when patching isn't immediately possible</td><td>Add WAF in front of vulnerable app; increase monitoring</td></tr>
<tr><td><strong>Exceptions/Exemptions</strong></td><td>Accept risk when business need outweighs mitigation cost</td><td>Document, justify, review regularly — never ignore</td></tr>
<tr><td><strong>Insurance</strong></td><td>Transfer financial risk via cyber insurance</td><td>Does not fix vulnerability; manages financial fallout</td></tr>
</tbody></table>

<div class="h2">Validation of Remediation</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Rescanning</div><p>Run vulnerability scan again after fix. Confirms the patch was applied and the specific CVE is no longer detected.</p></div>
  <div class="card gold"><div class="card-title">Audit</div><p>Comprehensive review of controls and configurations — verifies remediation is working as intended across all affected systems.</p></div>
  <div class="card green"><div class="card-title">Verification</div><p>Manual testing, user acceptance testing, or simulated attacks confirm the fix is effective in real conditions, not just on paper.</p></div>
</div>
</div></div>
  `;
}
//#endregion
export { render };
