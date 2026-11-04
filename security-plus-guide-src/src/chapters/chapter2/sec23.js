export function render() {
  return `
<div id="sec-sec23" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 2.0 <span class="sec-breadcrumb-sep">›</span> Objective 2.3</div>
  <div class="sec-obj-tag" style="background:rgba(168,85,247,.1);color:var(--purple);border-color:rgba(168,85,247,.2)">Objective 2.3</div>
  <div class="sec-title">Explain Various Types<br>of Vulnerabilities</div>
  <div class="sec-lead">A vulnerability is a weakness that can be exploited. Vulnerabilities exist in every layer of the stack — application code, operating systems, web apps, hardware firmware, virtualized environments, and the cloud. Know them all: what they are, how they're exploited, and how to stop them.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Application Vulnerabilities</div>

<div class="def-block">
  <div class="def-num">01</div>
  <div class="def-content">
    <div class="def-title">Memory Injection</div>
    <div class="def-text">Malicious data inserted into a process's memory space, causing the application to execute attacker-controlled code. The foundation of most code execution attacks.<br><br><strong>Mitigation:</strong> DEP (Data Execution Prevention) marks memory as non-executable. ASLR (Address Space Layout Randomization) randomizes memory addresses so attackers can't predict where their injected code lands.</div>
    <div class="def-examples"><span class="def-ex">Remote Code Execution</span><span class="def-ex">DEP</span><span class="def-ex">ASLR</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">02</div>
  <div class="def-content">
    <div class="def-title">Buffer Overflow</div>
    <div class="def-text">Program writes MORE data to a memory buffer than it can hold → overwrites adjacent memory → attacker can overwrite return addresses to redirect execution to malicious code. Classic vulnerability in C/C++ programs without bounds checking.<br><br><strong>Mitigation:</strong> Bounds checking on all input. Stack canaries — sentinel values placed before return addresses; if corrupted, abort. Safe library functions (strcpy → strlcpy).</div>
    <div class="def-examples"><span class="def-ex">Stack overflow</span><span class="def-ex">Heap overflow</span><span class="def-ex">Stack canaries</span><span class="def-ex">Bounds checking</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">03</div>
  <div class="def-content">
    <div class="def-title">Race Conditions (TOC/TOU)</div>
    <div class="def-text">Two processes access shared resource concurrently. The state can change between the <strong>Time of Check (TOC)</strong> and the <strong>Time of Use (TOU)</strong> — allowing an attacker to insert a different resource after the check passes but before it's used.<br><br><strong>Example:</strong> App checks "does file X exist?" (TOC) → attacker replaces file X with malicious file → app uses file X (TOU). App now executes malicious file.<br><br><strong>Mitigation:</strong> Atomic transactions, proper locking/synchronization of shared resources.</div>
    <div class="def-examples"><span class="def-ex">TOC</span><span class="def-ex">TOU</span><span class="def-ex">Atomic operations</span><span class="def-ex">Mutex locks</span></div>
  </div>
</div>

<div class="def-block">
  <div class="def-num">04</div>
  <div class="def-content">
    <div class="def-title">Malicious Update</div>
    <div class="def-text">Attacker delivers a compromised software update — the user willingly installs malware believing it's a legitimate patch. Used in supply chain attacks and watering hole attacks targeting software update infrastructure.<br><br><strong>Mitigation:</strong> Digital signatures on all updates (verify before applying). Secure update channels (HTTPS, code signing). Don't disable signature verification.</div>
    <div class="def-examples"><span class="def-ex">Supply chain attack</span><span class="def-ex">Code signing</span><span class="def-ex">Update verification</span></div>
  </div>
</div>

<div class="h2">Web-Based Vulnerabilities</div>

<div class="diag"><pre>
  SQL INJECTION (SQLi):
  ─────────────────────────────────────────────────────────
  Normal query: SELECT * FROM users WHERE username='alice' AND password='pass'
  
  Attacker input: ' OR '1'='1
  Resulting query: SELECT * FROM users WHERE username='' OR '1'='1' AND password=''
  '1'='1' is ALWAYS TRUE → returns all users → attacker logs in as first user (often admin)
  
  Attacker input: '; DROP TABLE users; --
  Resulting query: SELECT * FROM users WHERE username=''; DROP TABLE users; --
  → Deletes entire user table
  
  FIX: Parameterized queries / prepared statements — input is NEVER treated as SQL code
  example (safe): SELECT * FROM users WHERE username=? AND password=?
                  [alice, pass] ← treated as data, not code
  
  XSS (Cross-Site Scripting):
  ─────────────────────────────────────────────────────────
  Attacker submits: <script>document.cookie</script> as a comment or username
  Website displays it in a page → victim's browser executes the script
  → Script steals session cookie → attacker hijacks victim's session
  
  FIX: Output encoding (convert &lt; to &amp;lt;) + Content Security Policy (CSP)
</pre></div>

<div class="h2">Vulnerability Types — Full Reference</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Category</th><th>Vulnerability</th><th>How Exploited</th><th>Primary Mitigation</th></tr></thead>
<tbody>
<tr><td>Web</td><td><span class="tag red">SQLi</span></td><td>Malicious SQL injected into input fields → database manipulation</td><td>Parameterized queries, input sanitization</td></tr>
<tr><td>Web</td><td><span class="tag amber">XSS</span></td><td>Malicious scripts injected → execute in victim's browser</td><td>Output encoding, CSP headers</td></tr>
<tr><td>Hardware</td><td><span class="tag red">Firmware</span></td><td>Exploit bugs in device firmware for persistent low-level access</td><td>Firmware updates, Secure Boot</td></tr>
<tr><td>Hardware</td><td><span class="tag amber">End-of-Life</span></td><td>No more patches → known vulns never fixed → easy target</td><td>Replace or isolate from network</td></tr>
<tr><td>Hardware</td><td><span class="tag amber">Legacy</span></td><td>Old devices lack modern security features (no encryption support)</td><td>Retire, replace, or segment</td></tr>
<tr><td>Virtualization</td><td><span class="tag red">VM Escape</span></td><td>Malicious VM breaks out of hypervisor → accesses host or other VMs</td><td>Hypervisor patching, VM isolation, limit guest access</td></tr>
<tr><td>Virtualization</td><td><span class="tag amber">Resource Reuse</span></td><td>Shared memory/storage between VMs → data leaks between tenants</td><td>Strict resource isolation, trusted hypervisor configs</td></tr>
<tr><td>Cloud</td><td><span class="tag amber">Misconfiguration</span></td><td>Open S3 buckets, world-readable databases, no auth on APIs</td><td>CIS Benchmarks, automated config scanning, least privilege</td></tr>
<tr><td>Cloud</td><td><span class="tag red">Supply Chain</span></td><td>Compromise of service/hardware/software provider infects clients</td><td>Vendor vetting, SLAs with security requirements, monitoring</td></tr>
<tr><td>Mobile</td><td><span class="tag amber">Sideloading</span></td><td>Install apps outside official store → malware bypasses store review</td><td>MDM to enforce app store restriction</td></tr>
<tr><td>Mobile</td><td><span class="tag red">Jailbreaking</span></td><td>Remove OS restrictions → disable code signing → malware runs</td><td>MDM policy: deny network access to jailbroken devices</td></tr>
<tr><td>Any</td><td><span class="tag red">Zero-Day</span></td><td>Unknown vulnerability → no patch exists → attacker has head start</td><td>Threat intelligence, behavioral IDS, network segmentation</td></tr>
<tr><td>Any</td><td><span class="tag amber">Cryptographic</span></td><td>Weak algorithms (MD5, DES), poor key management → data exposed</td><td>Strong algorithms (AES-256, SHA-256), proper key management</td></tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>VM Escape vs. Resource Reuse:</strong> VM Escape = breaking OUT of the VM to reach the hypervisor/host. Resource Reuse = data LEAKING between VMs through improperly shared memory or storage. Both are virtualization vulnerabilities but have different mechanisms and impacts.</div>

<div class="alert info"><span class="alert-icon">💡</span><strong>Zero-day timing:</strong> The "zero" refers to zero days of warning. The vendor has had zero days to develop a patch. Once the vendor knows about it and releases a patch, it's no longer zero-day — it becomes a known vulnerability with an available fix. Leaving it unpatched at that point is negligence, not zero-day exposure.</div>

</div></div>
  `
}
