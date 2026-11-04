//#region src/chapters/chapter2/sec22.js
function render() {
	return `
<div id="sec-sec22" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 2.0 <span class="sec-breadcrumb-sep">›</span> Objective 2.2</div>
  <div class="sec-obj-tag" style="background:rgba(255,170,48,.1);color:var(--amber);border-color:rgba(255,170,48,.2)">Objective 2.2</div>
  <div class="sec-title">Common Threat Vectors<br>and Attack Surfaces</div>
  <div class="sec-lead">A threat vector is the path an attacker uses to reach a target. The attack surface is everything that can be attacked. Understanding vectors is critical — if you block the path, the attack fails regardless of how skilled the attacker is.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Message-Based Vectors</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Vector</th><th>Attack Type</th><th>Key Characteristics</th><th>Mitigation</th></tr></thead>
<tbody>
<tr><td><strong>Email</strong></td><td>Phishing, Spear-phishing, Malware</td><td>Most common attack vector. Spear-phishing targets specific individuals with personalized content. Malicious attachments/links.</td><td>Email filtering, DMARC, user training, MFA</td></tr>
<tr><td><strong>SMS (Smishing)</strong></td><td>SMS phishing, SIM Swapping</td><td>SMS phishing uses urgency ("your account is locked"). SIM swapping hijacks phone numbers to intercept MFA codes.</td><td>Don't click SMS links; verify via official app</td></tr>
<tr><td><strong>Instant Messaging</strong></td><td>Malware delivery, Phishing links</td><td>WhatsApp, Teams, Slack — all can deliver malicious files or links. Users trust IM contacts more than email.</td><td>Encrypted IM platforms, user education</td></tr>
</tbody>
</table></div>

<div class="h2">Other Technical Vectors</div>
<div class="cards">
  <div class="card purple">
    <div class="card-icon">🖼</div>
    <div class="card-title">Image-Based</div>
    <p>Malicious code hidden in image metadata or embedded in pixel data. Exploits vulnerabilities in image-parsing libraries. The image looks normal but executes when opened by vulnerable software.</p>
  </div>
  <div class="card red">
    <div class="card-icon">📄</div>
    <div class="card-title">File-Based</div>
    <p>Malware embedded in PDFs, Word docs (macros), ZIP files, or executables. Drive-by downloads install malware automatically when a malicious site is visited. Most common delivery mechanism for ransomware.</p>
  </div>
  <div class="card amber">
    <div class="card-icon">📞</div>
    <div class="card-title">Voice Call (Vishing)</div>
    <p>Caller ID spoofing makes calls appear to come from banks or government agencies. Attackers impersonate IT support, IRS, or executives. Pure social engineering — exploits trust, not technology.</p>
  </div>
  <div class="card blue">
    <div class="card-icon">💾</div>
    <div class="card-title">Removable Device</div>
    <p>USB drop attacks — leave infected USB drives in parking lots. Curious employees plug them in. BadUSB mimics a keyboard and types commands. Insiders use USB to exfiltrate data.</p>
  </div>
</div>

<div class="h2">Network-Based Attack Surfaces</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Surface</th><th>Specific Attacks</th><th>Best Mitigation</th></tr></thead>
<tbody>
<tr><td><strong>Wireless (Wi-Fi)</strong></td><td>Eavesdropping on unencrypted traffic, Evil twin AP, MITM on public Wi-Fi</td><td>WPA3 encryption, avoid public Wi-Fi for sensitive data, VPN</td></tr>
<tr><td><strong>Wired Networks</strong></td><td>Sniffing unencrypted traffic, physical port access (plug in rogue device)</td><td>802.1X port authentication, network encryption, physical access controls</td></tr>
<tr><td><strong>Bluetooth</strong></td><td>Bluejacking (unsolicited messages), Bluesnarfing (data theft), Bluebugging (full device control)</td><td>Disable Bluetooth when not in use, set to non-discoverable, patch firmware</td></tr>
<tr><td><strong>Open Service Ports</strong></td><td>Port scanning (nmap) to find open ports → exploit vulnerable services</td><td>Firewall rules, close unnecessary ports, service hardening</td></tr>
<tr><td><strong>Default Credentials</strong></td><td>Attackers try admin/admin, admin/password on routers, IoT, cameras — published online</td><td>Change ALL default passwords immediately; inventory all devices</td></tr>
</tbody>
</table></div>

<div class="h2">Supply Chain Threats</div>
<div class="diag"><pre>
  SUPPLY CHAIN ATTACK FLOW:
  ──────────────────────────────────────────────────────────────
  
  [Attacker] → compromises → [Software Vendor / Hardware Maker / MSP]
                                        │
                               [Legitimate Update / Product Delivered]
                                        │
                              [Your Organization Installs It]
                                        │
                               [Attacker Now Has Access]
  
  Famous examples:
  SolarWinds (2020): Attackers inserted malware into SolarWinds Orion
  software update → 18,000 organizations installed the trojanized update
  → attacker had access to US Treasury, DoJ, NSA via legitimate software.
  
  XZ Utils (2024): Backdoor inserted into widely-used Linux compression
  library by a fake contributor over 2 years of trust-building.
  
  The threat: You trusted the source. The source was compromised.
  
  Mitigations by provider type:
  ├── MSP:        Vet security posture, limit access, right-to-audit clause
  ├── Vendors:    Software composition analysis, code signing verification
  └── Hardware:   Trusted supplier lists, hardware attestation, audits
</pre></div>

<div class="h2">Social Engineering — Human Vectors</div>
<p>Social engineering exploits human psychology rather than technical vulnerabilities. It's often easier to trick a person than to hack a firewall. These techniques appear heavily in scenario questions.</p>

<div class="tbl-wrap"><table>
<thead><tr><th>Technique</th><th>How It Works</th><th>Key Indicator</th></tr></thead>
<tbody>
<tr><td><strong>Phishing</strong></td><td>Mass fraudulent emails impersonating trusted entities (banks, services). Cast wide net, rely on volume.</td><td>Generic greeting ("Dear Customer"), urgency, suspicious sender domain</td></tr>
<tr><td><strong>Spear Phishing</strong></td><td>Targeted phishing with personalized content specific to the victim — uses OSINT to add credibility.</td><td>Accurate personal details that shouldn't be public</td></tr>
<tr><td><strong>Vishing</strong></td><td>Voice call phishing. Caller ID spoofed to appear as bank/IRS/IT support. Pressure to act immediately.</td><td>Unsolicited call requesting sensitive info; urgency</td></tr>
<tr><td><strong>Smishing</strong></td><td>SMS phishing. "Your package couldn't be delivered — click here." Link leads to credential-harvesting site.</td><td>Unexpected SMS with links; poor grammar; unknown number</td></tr>
<tr><td><strong>Pretexting</strong></td><td>Creates a fabricated SCENARIO (pretext) to extract info. "Hi, this is IT support. We need your password to fix your account."</td><td>Caller has a plausible story but makes unusual requests</td></tr>
<tr><td><strong>Business Email Compromise (BEC)</strong></td><td>Impersonates CEO/CFO via email to authorize fraudulent wire transfers. "I'm in a meeting, urgently wire $50K to this account."</td><td>Urgent financial request, slightly wrong email domain</td></tr>
<tr><td><strong>Watering Hole</strong></td><td>Compromise a website the target audience regularly visits. Victims infected when they browse a trusted site.</td><td>Malware from legitimate-looking site; targeted industry site</td></tr>
<tr><td><strong>Brand Impersonation</strong></td><td>Fake versions of Microsoft, Apple, PayPal login pages to steal credentials. Logos, colors, wording copied exactly.</td><td>URL doesn't match brand; certificate warnings</td></tr>
<tr><td><strong>Typosquatting</strong></td><td>Register misspelled domain (gooogle.com, paypa1.com). Wait for typos to deliver malware or steal creds.</td><td>Slightly wrong URL; no HTTPS or wrong certificate</td></tr>
<tr><td><strong>Misinformation/Disinformation</strong></td><td>False info spread to damage reputation, manipulate decisions, or cause panic. Used in nation-state influence operations.</td><td>Unverifiable claims spreading rapidly; emotional content</td></tr>
</tbody>
</table></div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>Phishing vs. Pretexting:</strong> Phishing uses a COMMUNICATION (email/SMS/call) with a lure. Pretexting creates a FICTIONAL SCENARIO that gives the attack plausibility. Many attacks use both — the phishing email (vector) sets up the pretext (story). The exam may ask which is the primary technique used.</div>

</div></div>
  `;
}
//#endregion
export { render };
