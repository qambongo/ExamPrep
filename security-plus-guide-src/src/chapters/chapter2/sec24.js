export function render() {
  return `
<div id="sec-sec24" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 2.0 <span class="sec-breadcrumb-sep">›</span> Objective 2.4</div>
  <div class="sec-obj-tag" style="background:rgba(0,224,135,.1);color:var(--green);border-color:rgba(0,224,135,.2)">Objective 2.4</div>
  <div class="sec-title">Analyze Indicators<br>of Malicious Activity</div>
  <div class="sec-lead">Given a scenario, you must identify WHAT type of attack is occurring based on observable symptoms. This is one of the most scenario-heavy objectives. You need to know every malware type, attack category, and behavioral indicator and map them to observable symptoms.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Malware Types — Symptoms and Indicators</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Malware Type</th><th>Definition</th><th>Key Indicators</th><th>How It Spreads</th></tr></thead>
<tbody>
<tr><td><strong>Ransomware</strong></td><td>Encrypts files, demands payment for decryption key</td><td>Files renamed with new extension, ransom note appears, can't open files, high CPU/disk during encryption</td><td>Phishing emails, vulnerable RDP, drive-by downloads</td></tr>
<tr><td><strong>Trojan</strong></td><td>Malicious software disguised as legitimate program</td><td>Unknown processes running, unexpected system behavior, backdoor connections to external IPs</td><td>Downloaded by user thinking it's legitimate software</td></tr>
<tr><td><strong>Worm</strong></td><td>Self-replicating malware that spreads without user interaction</td><td>High network traffic spikes, slow system performance, rapid spread across network, antivirus alerts</td><td>Network vulnerabilities, shared drives, email</td></tr>
<tr><td><strong>Spyware</strong></td><td>Secretly monitors and collects user data</td><td>Unexpected pop-ups, slow system, changed browser settings/homepage, new toolbars</td><td>Bundled with free software, malicious downloads</td></tr>
<tr><td><strong>Bloatware</strong></td><td>Unwanted pre-installed software consuming resources</td><td>High resource usage from unrecognized apps, slow performance</td><td>Pre-installed by manufacturer or bundled in downloads</td></tr>
<tr><td><strong>Virus</strong></td><td>Attaches to legitimate files, spreads when executed</td><td>Corrupted files, unexpected reboots, error messages, files deleted or modified</td><td>Infected files, email attachments, USB drives</td></tr>
<tr><td><strong>Keylogger</strong></td><td>Records every keystroke — captures passwords, PINs, credit cards</td><td>Background processes with no GUI, unusual outbound network traffic (exfiltrating logs)</td><td>Trojans, malicious downloads, physical device attached to keyboard</td></tr>
<tr><td><strong>Logic Bomb</strong></td><td>Dormant malware that activates when a specific trigger is met (date, action, condition)</td><td>System behaves normally until trigger event, then sudden data deletion or sabotage</td><td>Planted by insiders (disgruntled employees)</td></tr>
<tr><td><strong>Rootkit</strong></td><td>Hides itself by operating at kernel level — modifies OS to conceal its presence</td><td>Antivirus can't detect it, hidden files/processes, system instability, security tools don't report expected results</td><td>Exploits, privilege escalation, physical access</td></tr>
</tbody>
</table></div>

<div class="h2">Attack Indicators — Know the Symptom → Attack Mapping</div>

<div class="diag"><pre>
  SYMPTOM → ATTACK TYPE QUICK REFERENCE:
  ────────────────────────────────────────────────────────────────────
  Files encrypted, can't open them                 → Ransomware
  Files look normal but antivirus can't detect     → Rootkit
  High network traffic from single system          → Worm OR C2 beacon
  System crashes when specific input entered       → Buffer Overflow
  Database returns unexpected data on login        → SQL Injection
  User redirected to wrong website                 → DNS attack / Typosquatting
  Certificate warning on normally trusted site     → On-path (MITM) attack
  Same account logged in from LA and London/1hr    → Impossible travel / Cred compromise
  Account locked after many failed attempts        → Brute force / Spraying
  Multiple accounts fail login but none lock       → Password Spraying (low attempts/account)
  Logs missing from last 3 hours                   → Attacker covered tracks
  Unexpected admin account created                 → Privilege escalation / APT
  Device getting hot, fans running constantly      → Cryptomining malware
  Financial wire transfer to unknown account       → BEC (Business Email Compromise)
  ────────────────────────────────────────────────────────────────────
</pre></div>

<div class="h2">Network Attack Types</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Attack</th><th>How It Works</th><th>Key Indicators</th></tr></thead>
<tbody>
<tr><td><strong>DDoS — Amplified</strong></td><td>Small requests sent to a reflector (DNS, NTP) that responds with much larger packets → target overwhelmed by amplified traffic</td><td>Massive inbound traffic volume, traffic from many IPs</td></tr>
<tr><td><strong>DDoS — Reflected</strong></td><td>Attacker spoofs victim's IP → reflectors send responses to victim, not attacker → victim overwhelmed without knowing the source</td><td>Traffic appearing to come from legitimate servers</td></tr>
<tr><td><strong>DNS Attack</strong></td><td>Manipulate DNS records to redirect traffic (DNS poisoning), overwhelm DNS servers, or hijack domains</td><td>Users redirected to wrong sites, DNS resolution failures</td></tr>
<tr><td><strong>On-Path (MITM)</strong></td><td>Intercept communication between two parties — can read AND modify data in transit</td><td>Certificate warnings, unexpected redirects, decrypted-then-re-encrypted traffic</td></tr>
<tr><td><strong>Credential Replay</strong></td><td>Capture valid session tokens or auth hashes → replay them to authenticate without knowing the password</td><td>Successful logins from unexpected locations/times</td></tr>
</tbody>
</table></div>

<div class="h2">Cryptographic Attacks</div>
<div class="grid-3">
  <div class="card red">
    <div class="card-title">Downgrade Attack</div>
    <p>Force system to use WEAKER protocol version (TLS 1.2 instead of 1.3) or weaker cipher. Then exploit the known weaknesses in that older protocol. POODLE and BEAST were downgrade attacks against SSL/TLS.</p>
  </div>
  <div class="card amber">
    <div class="card-title">Collision Attack</div>
    <p>Find two DIFFERENT inputs that produce the SAME hash value. Undermines integrity — attacker can substitute a malicious file with a matching hash. Why MD5 is broken — collisions can be found in seconds.</p>
  </div>
  <div class="card purple">
    <div class="card-title">Birthday Attack</div>
    <p>Based on the birthday paradox — finding any two matching hashes is much easier than finding a specific hash match. Probability of collision rises faster than intuition suggests. Requires larger hash spaces (SHA-256+).</p>
  </div>
</div>

<div class="h2">Password Attack Comparison</div>
<div class="grid-2">
  <div class="card red">
    <div class="card-title">Brute Force</div>
    <p>Try EVERY possible password combination systematically. Eventually succeeds on any password. Very slow on complex passwords. Triggers account lockout policies quickly.<br><br><strong>Detection:</strong> Many failed logins for ONE account.<br><strong>Mitigation:</strong> Account lockout, strong passwords, MFA</p>
  </div>
  <div class="card amber">
    <div class="card-title">Password Spraying</div>
    <p>Try a FEW common passwords (Password1!, Welcome1) across MANY accounts. Avoids lockout by staying below threshold per account. Much harder to detect than brute force.<br><br><strong>Detection:</strong> Many accounts with 1-2 failed logins each.<br><strong>Mitigation:</strong> MFA, behavioral analytics, strong password policy</p>
  </div>
</div>

<div class="h2">9 Behavioral Indicators of Malicious Activity</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Indicator</th><th>What It Means</th><th>Likely Cause</th></tr></thead>
<tbody>
<tr><td><strong>Account Lockout</strong></td><td>Account locked after repeated failed login attempts</td><td>Brute force attack targeting specific account</td></tr>
<tr><td><strong>Concurrent Session Usage</strong></td><td>Same account active from multiple locations simultaneously</td><td>Stolen credentials being used by attacker while user is also logged in</td></tr>
<tr><td><strong>Blocked Content</strong></td><td>Security tools blocking requests to/from specific IPs or domains</td><td>Malware attempting C2 communication; user accessing malicious sites</td></tr>
<tr><td><strong>Impossible Travel</strong></td><td>Account login from NYC at 9am, then Tokyo at 9:05am</td><td>Stolen credentials used from different geographic location than user</td></tr>
<tr><td><strong>Resource Consumption</strong></td><td>CPU/RAM/bandwidth usage spikes with no explanation</td><td>Cryptomining malware, worm spreading, DDoS participation</td></tr>
<tr><td><strong>Resource Inaccessibility</strong></td><td>Files, databases, or systems suddenly unavailable</td><td>Ransomware encryption, ransomware-related file locking, DoS</td></tr>
<tr><td><strong>Out-of-Cycle Logging</strong></td><td>Log entries generated at unusual times (3am, holidays)</td><td>Automated attack tools, attacker working in different timezone</td></tr>
<tr><td><strong>Published/Documented</strong></td><td>System running software with publicly known CVE vulnerabilities</td><td>Unpatched system is a waiting target for script kiddie and automated scanners</td></tr>
<tr><td><strong>Missing Logs</strong></td><td>Expected log entries absent; gaps in the timeline</td><td>Attacker deleted logs to cover tracks; log tampering during attack</td></tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Impossible travel exam tip:</strong> This is a named indicator in the objectives — know it by name. "A security analyst notices a user logged into the VPN from Chicago at 8am and then from Singapore at 8:15am." This is impossible travel. The correct response is to investigate and likely revoke the session — the credentials are stolen.</div>

</div></div>
  `
}
