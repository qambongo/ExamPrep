//#region src/chapters/pbq.js
function render() {
	return `
<div id="sec-pbq" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> PBQ Simulations</div>
  <div class="sec-obj-tag gold">Performance-Based Questions</div>
  <div class="sec-title">PBQ Simulation Lab</div>
  <div class="sec-lead">Performance-Based Questions (PBQs) require you to demonstrate skills rather than choose answers. The actual exam includes 3–5 PBQs covering tasks like port identification, log analysis, access control configuration, and network diagram labeling. Practice each scenario below.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">PBQ 1 — Port &amp; Protocol Matching</div>
<p>Drag each service to its correct port number. Click a service, then click its matching port.</p>
<div id="pbq1-container" class="pbq-container">
  <div class="pbq-columns">
    <div class="pbq-col">
      <div class="pbq-col-title">Services</div>
      <div class="pbq-item service" id="svc-https" onclick="selectPBQ1(this)">HTTPS</div>
      <div class="pbq-item service" id="svc-ssh" onclick="selectPBQ1(this)">SSH</div>
      <div class="pbq-item service" id="svc-dns" onclick="selectPBQ1(this)">DNS</div>
      <div class="pbq-item service" id="svc-smtp" onclick="selectPBQ1(this)">SMTP</div>
      <div class="pbq-item service" id="svc-rdp" onclick="selectPBQ1(this)">RDP</div>
      <div class="pbq-item service" id="svc-ldap" onclick="selectPBQ1(this)">LDAP</div>
      <div class="pbq-item service" id="svc-snmp" onclick="selectPBQ1(this)">SNMP</div>
      <div class="pbq-item service" id="svc-http" onclick="selectPBQ1(this)">HTTP</div>
    </div>
    <div class="pbq-col">
      <div class="pbq-col-title">Ports</div>
      <div class="pbq-item port" id="port-443" onclick="matchPBQ1(this,'443')">443</div>
      <div class="pbq-item port" id="port-22" onclick="matchPBQ1(this,'22')">22</div>
      <div class="pbq-item port" id="port-53" onclick="matchPBQ1(this,'53')">53</div>
      <div class="pbq-item port" id="port-25" onclick="matchPBQ1(this,'25')">25</div>
      <div class="pbq-item port" id="port-3389" onclick="matchPBQ1(this,'3389')">3389</div>
      <div class="pbq-item port" id="port-389" onclick="matchPBQ1(this,'389')">389</div>
      <div class="pbq-item port" id="port-161" onclick="matchPBQ1(this,'161')">161</div>
      <div class="pbq-item port" id="port-80" onclick="matchPBQ1(this,'80')">80</div>
    </div>
    <div class="pbq-col">
      <div class="pbq-col-title">Matches</div>
      <div id="pbq1-results"></div>
    </div>
  </div>
  <button class="btn-reset" onclick="resetPBQ1()" style="margin-top:12px">↺ Reset</button>
  <div id="pbq1-score" class="pbq-score" style="display:none"></div>
</div>

<div class="h2" style="margin-top:32px">PBQ 2 — Log Analysis: Identify the Attack</div>
<p>Examine the log entries below and identify what attack occurred.</p>
<div class="pbq-log-box">
<pre id="pbq2-log">
[2024-03-15 02:14:33] GET /login.php?user=admin'--&amp;pass=x HTTP/1.1 200 OK
[2024-03-15 02:14:34] GET /login.php?user=admin'+OR+'1'='1'--&amp;pass=x HTTP/1.1 200 OK
[2024-03-15 02:14:35] GET /admin/dashboard HTTP/1.1 200 OK
[2024-03-15 02:14:36] GET /admin/users HTTP/1.1 200 OK
[2024-03-15 02:14:37] GET /admin/export_all_data HTTP/1.1 200 OK
</pre>
</div>
<p><strong>Question:</strong> What attack type do these logs indicate? Select the BEST answer:</p>
<div id="pbq2-options">
  <div class="pbq-choice" onclick="answerPBQ2(this,'wrong')">A) Cross-Site Scripting (XSS)</div>
  <div class="pbq-choice" onclick="answerPBQ2(this,'wrong')">B) Buffer Overflow</div>
  <div class="pbq-choice" onclick="answerPBQ2(this,'correct')">C) SQL Injection leading to authentication bypass</div>
  <div class="pbq-choice" onclick="answerPBQ2(this,'wrong')">D) Directory Traversal</div>
</div>
<div id="pbq2-exp" class="pbq-explanation" style="display:none">
  <strong>✓ Correct: C — SQL Injection / Auth Bypass</strong><br>
  The log shows classic SQL injection attempts in the URL parameters: <code>admin'--</code> (comment out password check) and <code>admin'+OR+'1'='1'--</code> (always-true condition). After the 200 OK responses, the attacker accessed <code>/admin/dashboard</code>, <code>/admin/users</code>, and <code>/admin/export_all_data</code> — confirming authentication bypass succeeded. The attacker enumerated and exfiltrated data. Defense: parameterized queries, WAF, input validation.
</div>

<div class="h2" style="margin-top:32px">PBQ 3 — Access Control Configuration</div>
<p>A company uses Role-Based Access Control (RBAC). Match each user role to the MINIMUM required permissions following the principle of least privilege.</p>
<div class="pbq-rbac-container">
  <table style="width:100%"><thead><tr><th>Role</th><th>Required Access</th><th>Your Selection</th></tr></thead><tbody>
  <tr>
    <td><strong>HR Manager</strong></td>
    <td>Employee records, payroll data, HR reports</td>
    <td>
      <select class="pbq-select" id="rbac-hr" onchange="checkRBAC()">
        <option value="">— select —</option>
        <option value="wrong">Full admin access to all systems</option>
        <option value="wrong">Read-only access to all corporate data</option>
        <option value="correct">Read/write access to HR and payroll systems only</option>
        <option value="wrong">Read-only access to HR systems only</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><strong>Security Analyst</strong></td>
    <td>SIEM logs, IDS alerts, firewall rules (read), incident tickets</td>
    <td>
      <select class="pbq-select" id="rbac-analyst" onchange="checkRBAC()">
        <option value="">— select —</option>
        <option value="wrong">Full admin access to all security tools</option>
        <option value="correct">Read/write access to SIEM; read-only firewall; incident ticket write</option>
        <option value="wrong">Full admin access to firewalls and routers</option>
        <option value="wrong">Read-only access to all systems</option>
      </select>
    </td>
  </tr>
  <tr>
    <td><strong>Junior Developer</strong></td>
    <td>Development environment, code repository, dev/test databases</td>
    <td>
      <select class="pbq-select" id="rbac-dev" onchange="checkRBAC()">
        <option value="">— select —</option>
        <option value="wrong">Access to all environments including production</option>
        <option value="wrong">No access — all changes go through senior dev</option>
        <option value="correct">Access to dev/test environment and code repo; no production access</option>
        <option value="wrong">Read access to production data for debugging</option>
      </select>
    </td>
  </tr>
  </tbody></table>
  <div id="rbac-feedback" style="margin-top:12px"></div>
</div>

<div class="h2" style="margin-top:32px">PBQ 4 — Risk Calculation</div>
<p>Calculate the ALE and determine whether the control is cost-effective. Show your work.</p>
<div class="pbq-calc-container">
  <div class="pbq-scenario">
    <strong>Scenario:</strong> A database server is valued at <strong>$300,000</strong>. A successful SQL injection attack would compromise <strong>30%</strong> of its data value. Based on threat intelligence, SQL injection attacks against this database are expected to occur <strong>twice per year</strong>. A WAF solution would prevent 90% of attacks and costs <strong>$18,000/year</strong>.
  </div>
  <div class="pbq-calc-steps">
    <div class="calc-step">
      <label>Step 1 — Calculate SLE (AV × EF):</label>
      <input type="text" id="calc-sle" class="pbq-input" placeholder="$___" oninput="checkCalc()">
      <span id="sle-feedback" class="calc-feedback"></span>
    </div>
    <div class="calc-step">
      <label>Step 2 — Calculate ALE (SLE × ARO):</label>
      <input type="text" id="calc-ale" class="pbq-input" placeholder="$___" oninput="checkCalc()">
      <span id="ale-feedback" class="calc-feedback"></span>
    </div>
    <div class="calc-step">
      <label>Step 3 — Is the WAF cost-effective? (ALE &gt; WAF cost?)</label>
      <select id="calc-decision" class="pbq-select" onchange="checkCalc()">
        <option value="">— select —</option>
        <option value="correct">Yes — ALE exceeds WAF cost; the WAF is justified</option>
        <option value="wrong">No — WAF costs more than the expected annual loss</option>
        <option value="wrong">Cannot determine without more information</option>
      </select>
      <span id="decision-feedback" class="calc-feedback"></span>
    </div>
  </div>
  <div id="calc-answer" class="pbq-explanation" style="display:none">
    <strong>Answer:</strong> SLE = $300,000 × 0.30 = <strong>$90,000</strong> | ALE = $90,000 × 2 = <strong>$180,000</strong> | WAF cost = $18,000/year. Since ALE ($180,000) &gt; WAF cost ($18,000), the WAF saves approximately $162,000/year. The WAF is clearly cost-effective. This is how quantitative risk analysis justifies security investments.
  </div>
</div>

<div class="h2" style="margin-top:32px">PBQ 5 — Incident Response Order</div>
<p>Drag the incident response steps into the correct order. Click a step to add it to your sequence.</p>
<div class="pbq-ir-container">
  <div class="pbq-ir-steps">
    <div class="pbq-col-title">Available Steps (click to add)</div>
    <div class="ir-step" id="ir-step-contain" onclick="addIRStep(this,'Containment')">Containment</div>
    <div class="ir-step" id="ir-step-lessons" onclick="addIRStep(this,'Lessons Learned')">Lessons Learned</div>
    <div class="ir-step" id="ir-step-prep" onclick="addIRStep(this,'Preparation')">Preparation</div>
    <div class="ir-step" id="ir-step-eradicate" onclick="addIRStep(this,'Eradication')">Eradication</div>
    <div class="ir-step" id="ir-step-detect" onclick="addIRStep(this,'Detection &amp; Analysis')">Detection &amp; Analysis</div>
    <div class="ir-step" id="ir-step-recover" onclick="addIRStep(this,'Recovery')">Recovery</div>
  </div>
  <div class="pbq-ir-sequence">
    <div class="pbq-col-title">Your Sequence (click to remove)</div>
    <div id="ir-sequence"></div>
    <button class="btn-reset" onclick="resetIR()" style="margin-top:8px">↺ Reset</button>
    <button class="btn-reset" onclick="checkIR()" style="margin-top:8px;margin-left:8px;background:var(--green);color:#000">✓ Check</button>
    <div id="ir-feedback" style="margin-top:12px"></div>
  </div>
</div>


<div class="h2" style="margin-top:32px">PBQ 6 — Protocol Selection Matrix</div>
<p>For each scenario, select the MOST appropriate protocol. Apply the rule: always prefer the encrypted version when security is required.</p>
<div class="pbq-rbac-container">
  <table style="width:100%"><thead><tr><th>Scenario</th><th>Select Protocol</th><th></th></tr></thead><tbody>
  <tr>
    <td>Administrator needs encrypted remote shell access to a Linux server</td>
    <td><select class="pbq-select" id="proto-1" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="wrong">Telnet</option>
      <option value="correct">SSH</option>
      <option value="wrong">RDP</option>
      <option value="wrong">FTP</option>
    </select></td>
    <td id="proto-1-fb" class="calc-feedback"></td>
  </tr>
  <tr>
    <td>Secure email submission from mail client to mail server (port 587 with encryption)</td>
    <td><select class="pbq-select" id="proto-2" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="wrong">SMTP (port 25 plain)</option>
      <option value="wrong">POP3</option>
      <option value="correct">SMTPS / SMTP with STARTTLS</option>
      <option value="wrong">IMAP</option>
    </select></td>
    <td id="proto-2-fb" class="calc-feedback"></td>
  </tr>
  <tr>
    <td>Transferring a file securely to a remote server with encryption and authentication</td>
    <td><select class="pbq-select" id="proto-3" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="wrong">FTP</option>
      <option value="wrong">TFTP</option>
      <option value="correct">SFTP or FTPS</option>
      <option value="wrong">HTTP</option>
    </select></td>
    <td id="proto-3-fb" class="calc-feedback"></td>
  </tr>
  <tr>
    <td>Querying whether a specific SSL certificate has been revoked in real time</td>
    <td><select class="pbq-select" id="proto-4" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="wrong">LDAP</option>
      <option value="wrong">CRL download</option>
      <option value="correct">OCSP</option>
      <option value="wrong">RADIUS</option>
    </select></td>
    <td id="proto-4-fb" class="calc-feedback"></td>
  </tr>
  <tr>
    <td>Network devices need to report operational metrics (CPU, memory, interface stats) to a management server</td>
    <td><select class="pbq-select" id="proto-5" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="correct">SNMP</option>
      <option value="wrong">Syslog</option>
      <option value="wrong">NetFlow</option>
      <option value="wrong">LDAP</option>
    </select></td>
    <td id="proto-5-fb" class="calc-feedback"></td>
  </tr>
  <tr>
    <td>A remote employee needs secure access to corporate network resources from home</td>
    <td><select class="pbq-select" id="proto-6" onchange="checkProto()">
      <option value="">— select —</option>
      <option value="wrong">HTTP proxy</option>
      <option value="correct">VPN (IPsec or SSL/TLS)</option>
      <option value="wrong">Telnet</option>
      <option value="wrong">SNMP</option>
    </select></td>
    <td id="proto-6-fb" class="calc-feedback"></td>
  </tr>
  </tbody></table>
  <div id="proto-final-fb" style="margin-top:12px"></div>
</div>

<div class="h2" style="margin-top:32px">PBQ 7 — Firewall Rule Analysis</div>
<p>Examine the firewall ruleset below. Identify which rules contain security issues and select the correct diagnosis for each.</p>
<div class="pbq-log-box">
<pre id="pbq7-rules">
FIREWALL RULESET — External Interface (inbound)
Rule  Action   Source        Dest          Port    Protocol
─────────────────────────────────────────────────────────────
  1   ALLOW    ANY           10.0.1.5      23      TCP
  2   ALLOW    ANY           10.0.1.10     443     TCP
  3   ALLOW    192.168.0.0/16  ANY         ANY     ANY
  4   DENY     ANY           ANY           ANY     ANY     ← implicit deny
  5   ALLOW    ANY           10.0.2.20     3389    TCP
</pre>
</div>
<div class="pbq-calc-steps" style="margin-top:12px">
  <div class="calc-step">
    <label>Rule 1 allows port 23 (Telnet) from ANY to an internal server. What is the issue?</label>
    <select class="pbq-select" id="fw-1" onchange="checkFW()">
      <option value="">— select —</option>
      <option value="wrong">No issue — Telnet is acceptable for internal servers</option>
      <option value="correct">Telnet transmits credentials in cleartext — replace with SSH (port 22)</option>
      <option value="wrong">Port 23 should be blocked only for external hosts</option>
      <option value="wrong">Rule 4 (implicit deny) already blocks this</option>
    </select>
    <span id="fw-1-fb" class="calc-feedback"></span>
  </div>
  <div class="calc-step">
    <label>Rule 3 allows all traffic from the 192.168.0.0/16 range on any port. What is the risk?</label>
    <select class="pbq-select" id="fw-2" onchange="checkFW()">
      <option value="">— select —</option>
      <option value="wrong">192.168.0.0/16 is a public IP range — this is fine</option>
      <option value="wrong">The rule is redundant with Rule 4</option>
      <option value="correct">192.168.0.0/16 is a private range but if an attacker spoofs it or gains access to any host in that range, all traffic is allowed — overly permissive</option>
      <option value="wrong">This allows inbound traffic from trusted internal hosts only — no issue</option>
    </select>
    <span id="fw-2-fb" class="calc-feedback"></span>
  </div>
  <div class="calc-step">
    <label>Rule 5 allows RDP (port 3389) from ANY source to an internal server. What is the BEST fix?</label>
    <select class="pbq-select" id="fw-3" onchange="checkFW()">
      <option value="">— select —</option>
      <option value="wrong">Replace RDP with HTTP</option>
      <option value="wrong">Block all RDP traffic — it's inherently insecure</option>
      <option value="correct">Restrict RDP access to specific authorized IP addresses (administrators) and require MFA; consider using a VPN or jump server instead of exposing RDP directly</option>
      <option value="wrong">Change the destination port to 443</option>
    </select>
    <span id="fw-3-fb" class="calc-feedback"></span>
  </div>
</div>
<div id="fw-final-fb" style="margin-top:12px"></div>

<div class="h2" style="margin-top:32px">PBQ 8 — Cryptography Use Case Matching</div>
<p>Match each security requirement to the BEST cryptographic mechanism. Click a requirement, then click the matching mechanism.</p>
<div id="pbq8-container" class="pbq-container">
  <div class="pbq-columns">
    <div class="pbq-col">
      <div class="pbq-col-title">Requirement</div>
      <div class="pbq-item service" id="req-1" onclick="selectCrypto(this)" style="font-size:12px">Prove a message was sent by a specific person and hasn't changed</div>
      <div class="pbq-item service" id="req-2" onclick="selectCrypto(this)" style="font-size:12px">Encrypt bulk data at rest on a hard drive efficiently</div>
      <div class="pbq-item service" id="req-3" onclick="selectCrypto(this)" style="font-size:12px">Verify a file hasn't been corrupted during download</div>
      <div class="pbq-item service" id="req-4" onclick="selectCrypto(this)" style="font-size:12px">Exchange a shared secret key over an untrusted network</div>
      <div class="pbq-item service" id="req-5" onclick="selectCrypto(this)" style="font-size:12px">Store passwords so they can't be reversed even if the database is breached</div>
      <div class="pbq-item service" id="req-6" onclick="selectCrypto(this)" style="font-size:12px">Establish identity of a website to a browser (prove ownership of domain)</div>
    </div>
    <div class="pbq-col">
      <div class="pbq-col-title">Mechanism</div>
      <div class="pbq-item port" id="mech-sig" onclick="matchCrypto(this,'sig')" style="font-size:12px">Digital Signature (RSA/ECDSA)</div>
      <div class="pbq-item port" id="mech-aes" onclick="matchCrypto(this,'aes')" style="font-size:12px">Symmetric encryption (AES-256)</div>
      <div class="pbq-item port" id="mech-hash" onclick="matchCrypto(this,'hash')" style="font-size:12px">Hashing (SHA-256)</div>
      <div class="pbq-item port" id="mech-dh" onclick="matchCrypto(this,'dh')" style="font-size:12px">Diffie-Hellman key exchange</div>
      <div class="pbq-item port" id="mech-bcrypt" onclick="matchCrypto(this,'bcrypt')" style="font-size:12px">Salted hashing / bcrypt (key stretching)</div>
      <div class="pbq-item port" id="mech-cert" onclick="matchCrypto(this,'cert')" style="font-size:12px">PKI / TLS Certificate (X.509)</div>
    </div>
    <div class="pbq-col">
      <div class="pbq-col-title">Matches</div>
      <div id="pbq8-results"></div>
    </div>
  </div>
  <button class="btn-reset" onclick="resetCrypto()" style="margin-top:12px">↺ Reset</button>
  <div id="pbq8-score" class="pbq-score" style="display:none"></div>
</div>

<div class="h2" style="margin-top:32px">PBQ 9 — Vulnerability Triage</div>
<p>Your vulnerability scanner returned the following findings. Using CVSS scores, asset criticality, and business context, rank them from HIGHEST to LOWEST priority (click to build your ranking).</p>
<div class="pbq-log-box">
<pre>
Finding   CVE             CVSS Base  Asset                      Notes
────────────────────────────────────────────────────────────────────────────────
  A       CVE-2024-1001    9.8        Dev/test server (no PII)   Exploit code public
  B       CVE-2024-2002    7.2        Internet-facing login page  No exploit yet
  C       CVE-2024-3003    9.1        Payment processing server   Exploit code public
  D       CVE-2024-4004    5.4        Internal wiki (low value)  No exploit yet
  E       CVE-2024-5005    8.5        Domain controller (AD)     Exploit code public
</pre>
</div>
<p style="font-size:13px;color:var(--muted);margin-bottom:8px">Click vulnerabilities to add them to your priority queue. Consider: CVSS score + asset criticality + exploit availability.</p>
<div class="pbq-ir-container">
  <div class="pbq-ir-steps">
    <div class="pbq-col-title">Vulnerabilities (click to add)</div>
    <div class="ir-step" id="vuln-a" onclick="addVuln(this,'A — Dev server CVE-2024-1001 (CVSS 9.8)')">A — Dev/test server — CVSS 9.8 (exploit public)</div>
    <div class="ir-step" id="vuln-b" onclick="addVuln(this,'B — Login page CVE-2024-2002 (CVSS 7.2)')">B — Login page — CVSS 7.2 (no exploit)</div>
    <div class="ir-step" id="vuln-c" onclick="addVuln(this,'C — Payment server CVE-2024-3003 (CVSS 9.1)')">C — Payment server — CVSS 9.1 (exploit public)</div>
    <div class="ir-step" id="vuln-d" onclick="addVuln(this,'D — Internal wiki CVE-2024-4004 (CVSS 5.4)')">D — Internal wiki — CVSS 5.4 (no exploit)</div>
    <div class="ir-step" id="vuln-e" onclick="addVuln(this,'E — Domain controller CVE-2024-5005 (CVSS 8.5)')">E — Domain controller — CVSS 8.5 (exploit public)</div>
  </div>
  <div class="pbq-ir-sequence">
    <div class="pbq-col-title">Your Priority Order (1=highest, click to remove)</div>
    <div id="vuln-sequence"></div>
    <button class="btn-reset" onclick="resetVuln()" style="margin-top:8px">↺ Reset</button>
    <button class="btn-reset" onclick="checkVuln()" style="margin-top:8px;margin-left:8px;background:var(--green);color:#000">✓ Check</button>
    <div id="vuln-feedback" style="margin-top:12px"></div>
  </div>
</div>

<div class="h2" style="margin-top:32px">PBQ 10 — Incident Classification &amp; Response</div>
<p>Read each security event and classify it correctly, then select the IMMEDIATE first response action.</p>
<div id="pbq10-items">

<div class="pbq-calc-container" style="margin-bottom:16px">
  <div class="pbq-scenario"><strong>Event 1:</strong> A user reports that files on their workstation have been renamed with a ".crypted" extension and a ransom note appeared on their desktop. They cannot open any files.</div>
  <div class="pbq-calc-steps" style="margin-top:8px">
    <div class="calc-step">
      <label>Classify this incident:</label>
      <select class="pbq-select" id="inc-1a" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">Phishing attempt</option>
        <option value="correct">Ransomware / Malware infection</option>
        <option value="wrong">Insider data theft</option>
        <option value="wrong">DDoS attack</option>
      </select>
      <span id="inc-1a-fb" class="calc-feedback"></span>
    </div>
    <div class="calc-step">
      <label>Immediate first response action:</label>
      <select class="pbq-select" id="inc-1b" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">Pay the ransom immediately</option>
        <option value="wrong">Run a full antivirus scan before disconnecting</option>
        <option value="correct">Isolate the workstation from the network immediately to prevent spread</option>
        <option value="wrong">Back up the encrypted files first</option>
      </select>
      <span id="inc-1b-fb" class="calc-feedback"></span>
    </div>
  </div>
</div>

<div class="pbq-calc-container" style="margin-bottom:16px">
  <div class="pbq-scenario"><strong>Event 2:</strong> SIEM alerts show 50,000 failed authentication attempts against the VPN portal from a single IP address over 5 minutes, followed by 3 successful logins from different accounts.</div>
  <div class="pbq-calc-steps" style="margin-top:8px">
    <div class="calc-step">
      <label>Classify this incident:</label>
      <select class="pbq-select" id="inc-2a" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">DoS attack</option>
        <option value="correct">Credential stuffing / Brute force resulting in account compromise</option>
        <option value="wrong">SQL injection</option>
        <option value="wrong">Insider threat</option>
      </select>
      <span id="inc-2a-fb" class="calc-feedback"></span>
    </div>
    <div class="calc-step">
      <label>Immediate first response action:</label>
      <select class="pbq-select" id="inc-2b" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">Reset ALL user passwords company-wide</option>
        <option value="correct">Block the attacking IP, disable the 3 compromised accounts, investigate their recent activity for data exfiltration</option>
        <option value="wrong">Disable the VPN portal entirely until investigation is complete</option>
        <option value="wrong">Wait for more data before acting</option>
      </select>
      <span id="inc-2b-fb" class="calc-feedback"></span>
    </div>
  </div>
</div>

<div class="pbq-calc-container" style="margin-bottom:16px">
  <div class="pbq-scenario"><strong>Event 3:</strong> A sysadmin notices an unfamiliar scheduled task running nightly at 2 AM that executes a PowerShell script from a temp directory. The script connects to an external IP and uploads data.</div>
  <div class="pbq-calc-steps" style="margin-top:8px">
    <div class="calc-step">
      <label>Classify this incident:</label>
      <select class="pbq-select" id="inc-3a" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">Misconfigured backup job</option>
        <option value="wrong">Ransomware infection</option>
        <option value="correct">Persistent malware / Data exfiltration (APT or backdoor)</option>
        <option value="wrong">DDoS botnet participant</option>
      </select>
      <span id="inc-3a-fb" class="calc-feedback"></span>
    </div>
    <div class="calc-step">
      <label>Immediate first response action:</label>
      <select class="pbq-select" id="inc-3b" onchange="checkInc()">
        <option value="">— select —</option>
        <option value="wrong">Delete the scheduled task and script immediately</option>
        <option value="correct">Capture a memory dump and network traffic before isolating — preserve evidence of the malware's behavior and the external IP for investigation</option>
        <option value="wrong">Reboot the server to stop the script</option>
        <option value="wrong">Change the admin password on the server</option>
      </select>
      <span id="inc-3b-fb" class="calc-feedback"></span>
    </div>
  </div>
</div>

</div>
<div id="pbq10-final-fb" style="margin-top:12px"></div>

</div></div>
  `;
}
function init() {
	const portAnswers = {
		"https": "443",
		"ssh": "22",
		"dns": "53",
		"smtp": "25",
		"rdp": "3389",
		"ldap": "389",
		"snmp": "161",
		"http": "80"
	};
	let pbq1Selected = null;
	let pbq1Matched = {};
	window.selectPBQ1 = function(el) {
		document.querySelectorAll(".pbq-item.service").forEach((s) => s.classList.remove("selected"));
		if (el.classList.contains("matched")) return;
		pbq1Selected = el.id.replace("svc-", "");
		el.classList.add("selected");
	};
	window.matchPBQ1 = function(el, port) {
		if (!pbq1Selected) return;
		if (el.classList.contains("matched")) return;
		const correct = portAnswers[pbq1Selected];
		const isCorrect = correct === port;
		const resultsDiv = document.getElementById("pbq1-results");
		const row = document.createElement("div");
		row.className = "pbq-match-row " + (isCorrect ? "correct-match" : "wrong-match");
		row.innerHTML = (isCorrect ? "✓ " : "✗ ") + pbq1Selected.toUpperCase() + " → " + port + (isCorrect ? "" : " (correct: " + correct + ")");
		resultsDiv.appendChild(row);
		document.getElementById("svc-" + pbq1Selected).classList.add("matched");
		el.classList.add("matched");
		pbq1Matched[pbq1Selected] = isCorrect;
		pbq1Selected = null;
		document.querySelectorAll(".pbq-item.service").forEach((s) => s.classList.remove("selected"));
		if (Object.keys(pbq1Matched).length === 8) {
			const correctCount = Object.values(pbq1Matched).filter(Boolean).length;
			const scoreEl = document.getElementById("pbq1-score");
			scoreEl.style.display = "block";
			scoreEl.style.background = correctCount >= 6 ? "rgba(0,224,135,.12)" : "rgba(255,77,106,.1)";
			scoreEl.style.color = correctCount >= 6 ? "var(--green)" : "var(--red)";
			scoreEl.style.border = "1px solid " + (correctCount >= 6 ? "var(--green)" : "var(--red)");
			scoreEl.textContent = correctCount + "/8 correct — " + (correctCount === 8 ? "🏆 Perfect!" : correctCount >= 6 ? "✅ Good" : "❌ Study port numbers");
		}
	};
	window.resetPBQ1 = function() {
		pbq1Selected = null;
		pbq1Matched = {};
		document.querySelectorAll(".pbq-item").forEach((el) => el.classList.remove("matched", "selected"));
		document.getElementById("pbq1-results").innerHTML = "";
		document.getElementById("pbq1-score").style.display = "none";
	};
	window.answerPBQ2 = function(el, result) {
		if (document.querySelectorAll(".pbq-choice.pbq-correct, .pbq-choice.pbq-wrong").length > 0) return;
		el.classList.add(result === "correct" ? "pbq-correct" : "pbq-wrong");
		document.querySelectorAll(".pbq-choice").forEach((c) => {
			c.style.pointerEvents = "none";
		});
		if (result === "correct") document.getElementById("pbq2-exp").style.display = "block";
		else {
			el.textContent += " ✗";
			setTimeout(() => {
				document.querySelectorAll(".pbq-choice").forEach((c) => {
					if (c.textContent.includes("SQL Injection")) c.classList.add("pbq-correct");
				});
				document.getElementById("pbq2-exp").style.display = "block";
			}, 800);
		}
	};
	window.checkRBAC = function() {
		const hr = document.getElementById("rbac-hr").value;
		const analyst = document.getElementById("rbac-analyst").value;
		const dev = document.getElementById("rbac-dev").value;
		if (!hr || !analyst || !dev) return;
		const allCorrect = hr === "correct" && analyst === "correct" && dev === "correct";
		const score = [
			hr,
			analyst,
			dev
		].filter((v) => v === "correct").length;
		const fb = document.getElementById("rbac-feedback");
		fb.innerHTML = "<div class=\"pbq-explanation\" style=\"" + (allCorrect ? "border-color:var(--green)" : "") + "\">" + (allCorrect ? "✓ Perfect! All roles follow least privilege correctly." : score + "/3 correct. Review: least privilege means <em>minimum access required to do the job</em> — no more. Production access should never be granted to junior developers. Security analysts need SIEM write access but not full firewall admin.") + "</div>";
	};
	window.checkCalc = function() {
		const sle = document.getElementById("calc-sle").value.replace(/[$,\s]/g, "");
		const ale = document.getElementById("calc-ale").value.replace(/[$,\s]/g, "");
		const decision = document.getElementById("calc-decision").value;
		const sleFB = document.getElementById("sle-feedback");
		const aleFB = document.getElementById("ale-feedback");
		const decFB = document.getElementById("decision-feedback");
		if (sle) {
			const sleCorrect = parseInt(sle) === 9e4;
			sleFB.className = "calc-feedback " + (sleCorrect ? "ok" : "no");
			sleFB.textContent = sleCorrect ? "✓ Correct! $300,000 × 0.30 = $90,000" : "✗ Try again. SLE = AV × EF = $300,000 × 0.30";
			document.getElementById("calc-sle").className = "pbq-input " + (sleCorrect ? "correct-input" : "wrong-input");
		}
		if (ale) {
			const aleCorrect = parseInt(ale) === 18e4;
			aleFB.className = "calc-feedback " + (aleCorrect ? "ok" : "no");
			aleFB.textContent = aleCorrect ? "✓ Correct! $90,000 × 2 = $180,000" : "✗ Try again. ALE = SLE × ARO = $90,000 × 2";
			document.getElementById("calc-ale").className = "pbq-input " + (aleCorrect ? "correct-input" : "wrong-input");
		}
		if (decision) {
			const decCorrect = decision === "correct";
			decFB.className = "calc-feedback " + (decCorrect ? "ok" : "no");
			decFB.textContent = decCorrect ? "✓ Correct! ALE $180,000 > WAF $18,000" : "✗ Incorrect. Compare ALE to the control cost.";
		}
		if (parseInt(sle) === 9e4 && parseInt(ale) === 18e4 && decision === "correct") document.getElementById("calc-answer").style.display = "block";
	};
	let irSequence = [];
	const irCorrectOrder = [
		"Preparation",
		"Detection & Analysis",
		"Containment",
		"Eradication",
		"Recovery",
		"Lessons Learned"
	];
	window.addIRStep = function(el, stepName) {
		if (el.classList.contains("used")) return;
		irSequence.push(stepName);
		el.classList.add("used");
		renderIRSequence();
	};
	function renderIRSequence() {
		const seq = document.getElementById("ir-sequence");
		seq.innerHTML = "";
		irSequence.forEach((step, i) => {
			const div = document.createElement("div");
			div.className = "ir-seq-item";
			div.innerHTML = "<span class=\"seq-num\">" + (i + 1) + "</span>" + step;
			div.onclick = () => window.removeIRStep(i, step);
			seq.appendChild(div);
		});
	}
	window.removeIRStep = function(index, step) {
		irSequence.splice(index, 1);
		document.querySelectorAll(".ir-step.used").forEach((el) => {
			if (el.textContent.trim().replace(/&amp;/g, "&") === step) el.classList.remove("used");
		});
		renderIRSequence();
		document.getElementById("ir-feedback").innerHTML = "";
	};
	window.checkIR = function() {
		if (irSequence.length !== 6) {
			document.getElementById("ir-feedback").innerHTML = "<p style=\"color:var(--amber)\">Please order all 6 steps before checking.</p>";
			return;
		}
		const items = document.getElementById("ir-sequence").querySelectorAll(".ir-seq-item");
		let allCorrect = true;
		items.forEach((item, i) => {
			const isCorrect = irSequence[i] === irCorrectOrder[i];
			item.className = "ir-seq-item " + (isCorrect ? "correct-seq" : "wrong-seq");
			if (!isCorrect) allCorrect = false;
		});
		const fb = document.getElementById("ir-feedback");
		if (allCorrect) fb.innerHTML = "<div class=\"pbq-explanation\" style=\"border-color:var(--green)\">✓ Perfect! Correct IR order: Preparation → Detection &amp; Analysis → Containment → Eradication → Recovery → Lessons Learned</div>";
		else fb.innerHTML = "<div class=\"pbq-explanation\">✗ Not quite. Correct order: <strong>1. Preparation → 2. Detection &amp; Analysis → 3. Containment → 4. Eradication → 5. Recovery → 6. Lessons Learned</strong></div>";
	};
	window.resetIR = function() {
		irSequence = [];
		document.querySelectorAll(".ir-step").forEach((el) => el.classList.remove("used"));
		document.getElementById("ir-sequence").innerHTML = "";
		document.getElementById("ir-feedback").innerHTML = "";
	};
	window.checkProto = function() {
		const ids = [
			"proto-1",
			"proto-2",
			"proto-3",
			"proto-4",
			"proto-5",
			"proto-6"
		];
		let score = 0, total = 0;
		ids.forEach((id) => {
			const sel = document.getElementById(id);
			const fb = document.getElementById(id + "-fb");
			if (!sel || !sel.value) return;
			total++;
			if (sel.value === "correct") {
				score++;
				fb.className = "calc-feedback ok";
				fb.textContent = "✓";
			} else {
				fb.className = "calc-feedback no";
				fb.textContent = "✗";
			}
		});
		if (total === 6) {
			const fb = document.getElementById("proto-final-fb");
			fb.innerHTML = "<div class=\"pbq-explanation\" style=\"" + (score === 6 ? "border-color:var(--green)" : "") + "\">" + score + "/6 correct. Key rules: (1) SSH not Telnet. (2) SMTPS/STARTTLS for secure mail. (3) SFTP/FTPS not plain FTP. (4) OCSP for real-time cert status — CRL is a file download. (5) SNMP for device metrics/traps. (6) VPN for remote access. Never use cleartext protocols (Telnet, FTP, HTTP) when an encrypted alternative exists.</div>";
		}
	};
	window.checkFW = function() {
		const checks = [
			{
				id: "fw-1",
				fbId: "fw-1-fb"
			},
			{
				id: "fw-2",
				fbId: "fw-2-fb"
			},
			{
				id: "fw-3",
				fbId: "fw-3-fb"
			}
		];
		let score = 0, total = 0;
		checks.forEach((c) => {
			const sel = document.getElementById(c.id);
			const fb = document.getElementById(c.fbId);
			if (!sel || !sel.value) return;
			total++;
			if (sel.value === "correct") {
				score++;
				fb.className = "calc-feedback ok";
				fb.textContent = "✓ Correct";
			} else {
				fb.className = "calc-feedback no";
				fb.textContent = "✗ Incorrect";
			}
		});
		if (total === 3) document.getElementById("fw-final-fb").innerHTML = "<div class=\"pbq-explanation\" style=\"" + (score === 3 ? "border-color:var(--green)" : "") + "\">" + score + "/3 correct. Firewall analysis rules: (1) Never allow Telnet (port 23) — always SSH (22). (2) Overly permissive source rules (ANY or broad private ranges) violate least privilege. (3) RDP (3389) should NEVER be exposed to the internet directly — use VPN + jump server + IP restriction + MFA. Direct RDP exposure is one of the most exploited attack vectors for ransomware.</div>";
	};
	const cryptoAnswers = {
		"req-1": "sig",
		"req-2": "aes",
		"req-3": "hash",
		"req-4": "dh",
		"req-5": "bcrypt",
		"req-6": "cert"
	};
	const cryptoLabels = {
		"sig": "Digital Signature",
		"aes": "AES-256 (Symmetric)",
		"hash": "SHA-256 (Hashing)",
		"dh": "Diffie-Hellman",
		"bcrypt": "Salted bcrypt",
		"cert": "PKI/TLS Certificate"
	};
	let cryptoSelected = null;
	let cryptoMatched = {};
	window.selectCrypto = function(el) {
		document.querySelectorAll("#pbq8-container .pbq-item.service").forEach((s) => s.classList.remove("selected"));
		if (el.classList.contains("matched")) return;
		cryptoSelected = el.id;
		el.classList.add("selected");
	};
	window.matchCrypto = function(el, mechId) {
		if (!cryptoSelected) return;
		if (el.classList.contains("matched")) return;
		const correct = cryptoAnswers[cryptoSelected];
		const isCorrect = correct === mechId;
		const resultsDiv = document.getElementById("pbq8-results");
		const row = document.createElement("div");
		row.className = "pbq-match-row " + (isCorrect ? "correct-match" : "wrong-match");
		const reqNum = cryptoSelected.replace("req-", "");
		row.innerHTML = (isCorrect ? "✓ " : "✗ ") + "Req " + reqNum + " → " + cryptoLabels[mechId] + (isCorrect ? "" : " (correct: " + cryptoLabels[correct] + ")");
		resultsDiv.appendChild(row);
		document.getElementById(cryptoSelected).classList.add("matched");
		el.classList.add("matched");
		cryptoMatched[cryptoSelected] = isCorrect;
		cryptoSelected = null;
		document.querySelectorAll("#pbq8-container .pbq-item.service").forEach((s) => s.classList.remove("selected"));
		if (Object.keys(cryptoMatched).length === 6) {
			const n = Object.values(cryptoMatched).filter(Boolean).length;
			const sc = document.getElementById("pbq8-score");
			sc.style.display = "block";
			sc.style.background = n >= 5 ? "rgba(0,224,135,.12)" : "rgba(255,77,106,.1)";
			sc.style.color = n >= 5 ? "var(--green)" : "var(--red)";
			sc.style.border = "1px solid " + (n >= 5 ? "var(--green)" : "var(--red)");
			sc.textContent = n + "/6 — " + (n === 6 ? "🏆 Perfect crypto knowledge!" : n >= 4 ? "✅ Good" : "❌ Review cryptography use cases");
		}
	};
	window.resetCrypto = function() {
		cryptoSelected = null;
		cryptoMatched = {};
		document.querySelectorAll("#pbq8-container .pbq-item").forEach((el) => el.classList.remove("matched", "selected"));
		document.getElementById("pbq8-results").innerHTML = "";
		document.getElementById("pbq8-score").style.display = "none";
	};
	let vulnSequence = [];
	const vulnCorrectOrder = [
		"C",
		"E",
		"B",
		"A",
		"D"
	];
	window.addVuln = function(el, label) {
		if (el.classList.contains("used")) return;
		vulnSequence.push({
			label,
			letter: el.id.replace("vuln-", "").toUpperCase()
		});
		el.classList.add("used");
		renderVulnSequence();
	};
	function renderVulnSequence() {
		const seq = document.getElementById("vuln-sequence");
		seq.innerHTML = "";
		vulnSequence.forEach((item, i) => {
			const div = document.createElement("div");
			div.className = "ir-seq-item";
			div.innerHTML = "<span class=\"seq-num\">" + (i + 1) + "</span>" + item.label;
			div.onclick = () => window.removeVuln(i, item.letter);
			seq.appendChild(div);
		});
	}
	window.removeVuln = function(index, letter) {
		vulnSequence.splice(index, 1);
		const el = document.getElementById("vuln-" + letter.toLowerCase());
		if (el) el.classList.remove("used");
		renderVulnSequence();
		document.getElementById("vuln-feedback").innerHTML = "";
	};
	window.checkVuln = function() {
		if (vulnSequence.length !== 5) {
			document.getElementById("vuln-feedback").innerHTML = "<p style=\"color:var(--amber)\">Add all 5 vulnerabilities before checking.</p>";
			return;
		}
		const items = document.getElementById("vuln-sequence").querySelectorAll(".ir-seq-item");
		let correct = 0;
		items.forEach((item, i) => {
			const isCorrect = vulnSequence[i].letter === vulnCorrectOrder[i];
			item.className = "ir-seq-item " + (isCorrect ? "correct-seq" : "wrong-seq");
			if (isCorrect) correct++;
		});
		document.getElementById("vuln-feedback").innerHTML = "<div class=\"pbq-explanation\" style=\"" + (correct === 5 ? "border-color:var(--green)" : "") + "\">" + (correct === 5 ? "✓ Perfect triage!" : correct + "/5 positions correct.") + "<br>Correct priority: C (Payment server, CVSS 9.1, exploit public — highest criticality + exploitability) → E (Domain controller, CVSS 8.5, exploit public — AD compromise = full network takeover) → B (Login page, CVSS 7.2, internet-facing but no exploit yet) → A (Dev server, CVSS 9.8, but dev/test with no PII — high CVSS, low asset value) → D (Wiki, CVSS 5.4, no exploit, low value). Key insight: CVSS base score alone does not determine priority — asset criticality and exploit availability are equally important.</div>";
	};
	window.resetVuln = function() {
		vulnSequence = [];
		document.querySelectorAll("[id^=\"vuln-\"].ir-step").forEach((el) => el.classList.remove("used"));
		document.getElementById("vuln-sequence").innerHTML = "";
		document.getElementById("vuln-feedback").innerHTML = "";
	};
	window.checkInc = function() {
		const fields = [
			"inc-1a",
			"inc-1b",
			"inc-2a",
			"inc-2b",
			"inc-3a",
			"inc-3b"
		];
		let score = 0, total = 0;
		fields.forEach((id) => {
			const sel = document.getElementById(id);
			const fb = document.getElementById(id + "-fb");
			if (!sel || !fb || !sel.value) return;
			total++;
			if (sel.value === "correct") {
				score++;
				fb.className = "calc-feedback ok";
				fb.textContent = "✓";
			} else {
				fb.className = "calc-feedback no";
				fb.textContent = "✗";
			}
		});
		if (total === 6) {
			const pct = Math.round(score / 6 * 100);
			document.getElementById("pbq10-final-fb").innerHTML = "<div class=\"pbq-explanation\" style=\"" + (score === 6 ? "border-color:var(--green)" : "") + "\">" + score + "/6 correct (" + pct + "%). Key lessons: (1) Ransomware — isolate IMMEDIATELY before anything else, prevent network spread. (2) Credential stuffing with successful logins — disable compromised accounts and investigate exfiltration, not just block the IP. (3) Persistent exfiltration malware — capture forensic evidence BEFORE removing; deleting the artifact destroys investigation data. Always preserve, then contain.</div>";
		}
	};
}
//#endregion
export { init, render };
