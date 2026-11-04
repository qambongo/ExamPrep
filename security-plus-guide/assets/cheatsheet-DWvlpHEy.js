//#region src/chapters/cheatsheet.js
function render() {
	return `
<div id="sec-cheatsheet" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">CompTIA Security+ SY0-701 <span class="sec-breadcrumb-sep">›</span> Reference</div>
  <div class="sec-obj-tag gold">Exam Day Reference</div>
  <div class="sec-title">Complete Exam Cheat Sheet</div>
  <div class="sec-lead">Every port, protocol, algorithm, attack type, regulation, formula, and acronym you need — organized for rapid scanning. Study this page until you can recall any row from memory.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="cs-sticky-bar">
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-ports').scrollIntoView({behavior:'smooth'})">Ports &amp; Protocols</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-crypto').scrollIntoView({behavior:'smooth'})">Cryptography</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-wireless').scrollIntoView({behavior:'smooth'})">Wireless</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-auth').scrollIntoView({behavior:'smooth'})">Auth Protocols</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-attacks').scrollIntoView({behavior:'smooth'})">Attack Types</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-owasp').scrollIntoView({behavior:'smooth'})">OWASP Top 10</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-regs').scrollIntoView({behavior:'smooth'})">Regulations</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-tools').scrollIntoView({behavior:'smooth'})">Security Tools</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-formulas').scrollIntoView({behavior:'smooth'})">Formulas</button>
  <button class="cs-sticky-btn" onclick="document.getElementById('cs-acronyms').scrollIntoView({behavior:'smooth'})">Acronyms A–Z</button>
</div>

<!-- PORTS & PROTOCOLS -->
<div class="h2 cs-section-anchor" id="cs-ports">Ports &amp; Protocols</div>
<div class="alert exam" style="margin-bottom:12px"><span class="alert-icon">⭐</span><strong>Exam rule:</strong> If two protocols do the same thing, the one with encryption is always the correct answer. Telnet→SSH, FTP→SFTP, HTTP→HTTPS, LDAP→LDAPS. Memorize the encrypted port numbers, not just the names.</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title blue">Application Layer Protocols</div>
  <table class="cs-table"><thead><tr><th>Port</th><th>Protocol</th><th>Notes</th></tr></thead><tbody>
  <tr><td class="port">20</td><td class="proto">FTP-Data</td><td>Cleartext file transfer — data channel</td></tr>
  <tr><td class="port">21</td><td class="proto">FTP-Control</td><td>Cleartext file transfer — control channel</td></tr>
  <tr><td class="port">22</td><td class="proto">SSH / SFTP / SCP</td><td class="strong">Encrypted shell, file transfer — USE THIS</td></tr>
  <tr><td class="port">23</td><td class="proto">Telnet</td><td class="broken">Cleartext — NEVER USE</td></tr>
  <tr><td class="port">25</td><td class="proto">SMTP</td><td>Mail server-to-server (MTA). Cleartext.</td></tr>
  <tr><td class="port">53</td><td class="proto">DNS</td><td>UDP (queries) / TCP (zone transfers). Plain.</td></tr>
  <tr><td class="port">67/68</td><td class="proto">DHCP</td><td>67=server, 68=client. UDP only.</td></tr>
  <tr><td class="port">69</td><td class="proto">TFTP</td><td>Trivial FTP — UDP, no auth, no encryption</td></tr>
  <tr><td class="port">80</td><td class="proto">HTTP</td><td>Cleartext web traffic</td></tr>
  <tr><td class="port">110</td><td class="proto">POP3</td><td>Mail retrieval — cleartext, deletes from server</td></tr>
  <tr><td class="port">119</td><td class="proto">NNTP</td><td>Usenet newsgroups</td></tr>
  <tr><td class="port">123</td><td class="proto">NTP</td><td>Network Time Protocol — UDP, critical for Kerberos</td></tr>
  <tr><td class="port">143</td><td class="proto">IMAP</td><td>Mail retrieval — cleartext, keeps on server</td></tr>
  <tr><td class="port">161</td><td class="proto">SNMP</td><td>UDP — device monitoring/management (queries)</td></tr>
  <tr><td class="port">162</td><td class="proto">SNMP Trap</td><td>UDP — device sends alerts to manager</td></tr>
  <tr><td class="port">179</td><td class="proto">BGP</td><td>Border Gateway Protocol — internet routing</td></tr>
  <tr><td class="port">389</td><td class="proto">LDAP</td><td>Directory services — cleartext</td></tr>
  <tr><td class="port">443</td><td class="proto">HTTPS</td><td class="strong">Encrypted HTTP over TLS — USE THIS</td></tr>
  <tr><td class="port">445</td><td class="proto">SMB</td><td>Windows file sharing. Target of EternalBlue/WannaCry.</td></tr>
  <tr><td class="port">465</td><td class="proto">SMTPS</td><td class="deprecated">SMTP over SSL — deprecated (use 587)</td></tr>
  <tr><td class="port">514</td><td class="proto">Syslog</td><td>UDP — log forwarding to SIEM</td></tr>
  <tr><td class="port">587</td><td class="proto">SMTP Submission</td><td class="strong">SMTP + STARTTLS — mail client to server</td></tr>
  <tr><td class="port">636</td><td class="proto">LDAPS</td><td class="strong">LDAP over TLS — USE THIS</td></tr>
  <tr><td class="port">993</td><td class="proto">IMAPS</td><td class="strong">IMAP over TLS</td></tr>
  <tr><td class="port">995</td><td class="proto">POP3S</td><td class="strong">POP3 over TLS</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title purple">Network &amp; Security Infrastructure Protocols</div>
  <table class="cs-table"><thead><tr><th>Port</th><th>Protocol</th><th>Notes</th></tr></thead><tbody>
  <tr><td class="port">88</td><td class="proto">Kerberos</td><td>Authentication — requires NTP sync (±5 min)</td></tr>
  <tr><td class="port">137–139</td><td class="proto">NetBIOS</td><td>Legacy Windows naming/sessions — vulnerable</td></tr>
  <tr><td class="port">500</td><td class="proto">IKE/ISAKMP</td><td>IPsec key exchange — UDP</td></tr>
  <tr><td class="port">514</td><td class="proto">Syslog</td><td>UDP — log forwarding, cleartext</td></tr>
  <tr><td class="port">1194</td><td class="proto">OpenVPN</td><td>UDP/TCP — open source VPN</td></tr>
  <tr><td class="port">1433</td><td class="proto">MS SQL Server</td><td>Microsoft SQL database</td></tr>
  <tr><td class="port">1521</td><td class="proto">Oracle DB</td><td>Oracle database listener</td></tr>
  <tr><td class="port">1701</td><td class="proto">L2TP</td><td>VPN tunneling — needs IPsec for encryption</td></tr>
  <tr><td class="port">1723</td><td class="proto">PPTP</td><td class="broken">VPN — weak encryption, avoid</td></tr>
  <tr><td class="port">1812</td><td class="proto">RADIUS Auth</td><td>UDP — AAA authentication</td></tr>
  <tr><td class="port">1813</td><td class="proto">RADIUS Acct</td><td>UDP — AAA accounting</td></tr>
  <tr><td class="port">3306</td><td class="proto">MySQL / MariaDB</td><td>Open source database</td></tr>
  <tr><td class="port">3389</td><td class="proto">RDP</td><td>Remote Desktop — NEVER expose to internet directly</td></tr>
  <tr><td class="port">4444</td><td class="proto">Metasploit</td><td>Default Meterpreter listener port — IOC</td></tr>
  <tr><td class="port">4500</td><td class="proto">IPsec NAT-T</td><td>IPsec through NAT — UDP</td></tr>
  <tr><td class="port">5060/5061</td><td class="proto">SIP</td><td>VoIP signaling — 5061 is TLS version</td></tr>
  <tr><td class="port">6514</td><td class="proto">Syslog TLS</td><td class="strong">Encrypted syslog — USE THIS</td></tr>
  <tr><td class="port">8080</td><td class="proto">HTTP-Alt</td><td>Alternative HTTP port — proxies, dev servers</td></tr>
  <tr><td class="port">8443</td><td class="proto">HTTPS-Alt</td><td>Alternative HTTPS port</td></tr>
  </tbody></table>
  <div class="cs-block-title gold" style="margin-top:16px">Identity &amp; Directory Ports</div>
  <table class="cs-table"><thead><tr><th>Port</th><th>Protocol</th><th>Notes</th></tr></thead><tbody>
  <tr><td class="port">49</td><td class="proto">TACACS+</td><td>TCP — full payload encrypted. Cisco AAA.</td></tr>
  <tr><td class="port">88</td><td class="proto">Kerberos</td><td>Ticket-based auth — DC/KDC</td></tr>
  <tr><td class="port">389</td><td class="proto">LDAP</td><td>Active Directory queries — cleartext</td></tr>
  <tr><td class="port">636</td><td class="proto">LDAPS</td><td class="strong">LDAP over TLS</td></tr>
  <tr><td class="port">1812/1813</td><td class="proto">RADIUS</td><td>Encrypts password only. UDP.</td></tr>
  </tbody></table>
</div>
</div>

<!-- CRYPTOGRAPHY -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-crypto">Cryptography Algorithms</div>
<div class="cs-grid-3">
<div class="cs-block">
  <div class="cs-block-title blue">Symmetric Encryption</div>
  <p style="font-size:11px;color:var(--muted);margin-bottom:8px">Same key to encrypt + decrypt. Fast — used for bulk data.</p>
  <table class="cs-table"><thead><tr><th>Algorithm</th><th>Key Size</th><th>Status</th></tr></thead><tbody>
  <tr><td class="proto">AES</td><td>128 / 192 / 256-bit</td><td class="strong">Current standard</td></tr>
  <tr><td class="proto">3DES</td><td>112 / 168-bit</td><td class="deprecated">Deprecated 2023</td></tr>
  <tr><td class="proto">DES</td><td>56-bit</td><td class="broken">BROKEN — brute-forceable</td></tr>
  <tr><td class="proto">RC4</td><td>40–2048-bit</td><td class="broken">BROKEN — used in WEP</td></tr>
  <tr><td class="proto">Blowfish</td><td>32–448-bit</td><td class="deprecated">Legacy — replaced by AES</td></tr>
  <tr><td class="proto">ChaCha20</td><td>256-bit</td><td class="strong">Modern stream cipher</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--accent)">Modes of operation:</strong> ECB (weak — don't use) · CBC (common) · CTR · GCM (authenticated encryption — preferred for TLS)</div>
</div>
<div class="cs-block">
  <div class="cs-block-title gold">Asymmetric &amp; Key Exchange</div>
  <p style="font-size:11px;color:var(--muted);margin-bottom:8px">Different keys to encrypt/decrypt. Slow — used for key exchange &amp; signatures.</p>
  <table class="cs-table"><thead><tr><th>Algorithm</th><th>Key Size</th><th>Use</th></tr></thead><tbody>
  <tr><td class="proto">RSA</td><td>2048 / 4096-bit</td><td>Key exchange, signatures, certificates</td></tr>
  <tr><td class="proto">ECC</td><td>256-bit ≈ RSA 3072</td><td class="strong">Efficient — mobile, TLS, Bitcoin</td></tr>
  <tr><td class="proto">DSA</td><td>1024–3072-bit</td><td>Digital signatures only</td></tr>
  <tr><td class="proto">DH</td><td>2048-bit+</td><td>Key exchange only — no encryption</td></tr>
  <tr><td class="proto">DHE</td><td>2048-bit+</td><td class="strong">Ephemeral DH — forward secrecy</td></tr>
  <tr><td class="proto">ECDHE</td><td>256-bit</td><td class="strong">ECC ephemeral — TLS 1.3 default</td></tr>
  <tr><td class="proto">ElGamal</td><td>2048-bit+</td><td>PGP/GPG encryption</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--gold)">Forward secrecy:</strong> DHE / ECDHE generate a new key pair per session — compromising the server's private key later cannot decrypt past sessions.</div>
</div>
<div class="cs-block">
  <div class="cs-block-title green">Hashing &amp; Password Storage</div>
  <p style="font-size:11px;color:var(--muted);margin-bottom:8px">One-way. No key. Same input always produces same output.</p>
  <table class="cs-table"><thead><tr><th>Algorithm</th><th>Output</th><th>Status</th></tr></thead><tbody>
  <tr><td class="proto">MD5</td><td>128-bit</td><td class="broken">BROKEN — collision attacks</td></tr>
  <tr><td class="proto">SHA-1</td><td>160-bit</td><td class="broken">BROKEN — deprecated 2017</td></tr>
  <tr><td class="proto">SHA-256</td><td>256-bit</td><td class="strong">Current standard</td></tr>
  <tr><td class="proto">SHA-384</td><td>384-bit</td><td class="strong">SHA-2 family</td></tr>
  <tr><td class="proto">SHA-512</td><td>512-bit</td><td class="strong">SHA-2 family</td></tr>
  <tr><td class="proto">SHA-3</td><td>224–512-bit</td><td class="strong">Keccak — different design</td></tr>
  <tr><td class="proto">HMAC</td><td>Varies</td><td>Hash + secret key = MAC</td></tr>
  <tr><td class="proto">RIPEMD-160</td><td>160-bit</td><td>Used in Bitcoin addresses</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px">
    <strong style="color:var(--green)">Password hashing:</strong><br>
    <span style="color:var(--muted)">bcrypt / scrypt / PBKDF2 / Argon2 — add salting + key stretching (intentionally slow). Use for passwords, never plain SHA-256.</span><br><br>
    <strong style="color:var(--gold)">Salt:</strong> <span style="color:var(--muted)">unique random value per password → prevents rainbow tables</span><br>
    <strong style="color:var(--amber)">Pepper:</strong> <span style="color:var(--muted)">secret global value stored separately from the hash</span>
  </div>
</div>
</div>

<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title amber">PKI &amp; Certificate Concepts</div>
  <table class="cs-table"><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody>
  <tr><td class="proto">CA</td><td>Certificate Authority — issues and signs digital certificates</td></tr>
  <tr><td class="proto">Root CA</td><td>Top of trust hierarchy — offline, self-signed. Never issues end-entity certs directly.</td></tr>
  <tr><td class="proto">Intermediate CA</td><td>Signed by root CA — issues end-entity certs. Online. Compromise doesn't invalidate root.</td></tr>
  <tr><td class="proto">CSR</td><td>Certificate Signing Request — sent to CA to obtain a certificate</td></tr>
  <tr><td class="proto">CRL</td><td>Certificate Revocation List — published list of revoked certs. Downloaded periodically.</td></tr>
  <tr><td class="proto">OCSP</td><td>Online Certificate Status Protocol — real-time single cert revocation check (port 80/443)</td></tr>
  <tr><td class="proto">OCSP Stapling</td><td>Server pre-fetches and caches its own OCSP response — faster, more private</td></tr>
  <tr><td class="proto">Pinning</td><td>App hard-codes expected cert/public key — prevents MitM even with valid rogue cert</td></tr>
  <tr><td class="proto">CT Log</td><td>Certificate Transparency — public log of all issued certs; detects rogue CAs</td></tr>
  <tr><td class="proto">DV cert</td><td>Domain Validated — verifies domain ownership only. Fastest, cheapest.</td></tr>
  <tr><td class="proto">OV cert</td><td>Organization Validated — verifies org identity too</td></tr>
  <tr><td class="proto">EV cert</td><td>Extended Validation — rigorous vetting, highest trust</td></tr>
  <tr><td class="proto">Wildcard cert</td><td>*.example.com — covers domain + all first-level subdomains</td></tr>
  <tr><td class="proto">SAN cert</td><td>Subject Alternative Name — multiple specific domains in one cert</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title blue">TLS / SSL Quick Reference</div>
  <table class="cs-table"><thead><tr><th>Version</th><th>Status</th><th>Notes</th></tr></thead><tbody>
  <tr><td class="proto">SSL 2.0/3.0</td><td class="broken">BROKEN</td><td>POODLE, DROWN — disable completely</td></tr>
  <tr><td class="proto">TLS 1.0</td><td class="broken">DEPRECATED</td><td>BEAST attack — PCI DSS prohibits</td></tr>
  <tr><td class="proto">TLS 1.1</td><td class="deprecated">DEPRECATED</td><td>Removed from major browsers 2020</td></tr>
  <tr><td class="proto">TLS 1.2</td><td class="warn">ACCEPTABLE</td><td>Still widely used — some weaknesses</td></tr>
  <tr><td class="proto">TLS 1.3</td><td class="strong">CURRENT</td><td>Mandatory ECDHE, fewer round trips, no legacy ciphers</td></tr>
  </tbody></table>
  <div class="cs-block-title purple" style="margin-top:16px">Encryption Where It Applies</div>
  <table class="cs-table"><thead><tr><th>State</th><th>Protection</th><th>Examples</th></tr></thead><tbody>
  <tr><td><strong>In Transit</strong></td><td>TLS/SSL, IPsec, VPN, SSH</td><td>HTTPS, SFTP, OpenVPN</td></tr>
  <tr><td><strong>At Rest</strong></td><td>AES-256, BitLocker, FileVault</td><td>Disk encryption, DB encryption</td></tr>
  <tr><td><strong>In Use</strong></td><td>Confidential computing (SGX)</td><td>Homomorphic encryption (emerging)</td></tr>
  <tr><td><strong>In Processing</strong></td><td>Memory encryption, secure enclaves</td><td>ARM TrustZone</td></tr>
  </tbody></table>
</div>
</div>

<!-- WIRELESS -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-wireless">Wireless Security</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title blue">Wi-Fi Security Standards</div>
  <table class="cs-table"><thead><tr><th>Standard</th><th>Encryption</th><th>Auth</th><th>Status</th></tr></thead><tbody>
  <tr><td class="proto">WEP</td><td>RC4 (shared IV)</td><td>Pre-shared key</td><td class="broken">BROKEN — crackable in &lt;60 seconds</td></tr>
  <tr><td class="proto">WPA</td><td>TKIP (RC4)</td><td>PSK / 802.1X</td><td class="broken">DEPRECATED — TKIP vulnerable</td></tr>
  <tr><td class="proto">WPA2-Personal</td><td>CCMP/AES</td><td>PSK (4-way handshake)</td><td class="warn">Vulnerable to offline dictionary if handshake captured</td></tr>
  <tr><td class="proto">WPA2-Enterprise</td><td>CCMP/AES</td><td>802.1X + RADIUS</td><td class="strong">Recommended for corporate networks</td></tr>
  <tr><td class="proto">WPA3-Personal</td><td>CCMP/AES</td><td>SAE (Dragonfly)</td><td class="strong">Resists offline dictionary attacks</td></tr>
  <tr><td class="proto">WPA3-Enterprise</td><td>GCMP-256</td><td>802.1X + SAE</td><td class="strong">Highest security — government/military</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title red">Wireless Attacks</div>
  <table class="cs-table"><thead><tr><th>Attack</th><th>What It Does</th></tr></thead><tbody>
  <tr><td><strong>Evil Twin</strong></td><td>Rogue AP mimics legitimate SSID/BSSID. Victims connect and attacker intercepts all traffic (MitM).</td></tr>
  <tr><td><strong>Deauth Attack</strong></td><td>Sends forged 802.11 deauthentication frames — forces clients off network. Used to capture WPA2 handshake for cracking.</td></tr>
  <tr><td><strong>KRACK</strong></td><td>Key Reinstallation Attack — exploits WPA2 4-way handshake nonce reuse. Patched in most devices.</td></tr>
  <tr><td><strong>PMKID Attack</strong></td><td>Captures PMKID from single AP frame (no client needed) — enables offline dictionary attack against WPA2-PSK.</td></tr>
  <tr><td><strong>Rogue AP</strong></td><td>Unauthorized AP on corporate network — may bypass NAC. Detected by wireless scanning.</td></tr>
  <tr><td><strong>Jamming</strong></td><td>RF interference disrupts wireless signal — availability attack (wireless DoS).</td></tr>
  <tr><td><strong>War Driving</strong></td><td>Driving around scanning for open/weak Wi-Fi networks.</td></tr>
  <tr><td><strong>Captive Portal Attack</strong></td><td>Fake captive portal on evil twin AP harvests credentials.</td></tr>
  </tbody></table>
</div>
</div>

<!-- AUTH PROTOCOLS -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-auth">Authentication &amp; Identity Protocols</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title gold">AAA Protocols Compared</div>
  <table class="cs-table"><thead><tr><th>Feature</th><th>RADIUS</th><th>TACACS+</th></tr></thead><tbody>
  <tr><td>Transport</td><td>UDP 1812/1813</td><td>TCP 49</td></tr>
  <tr><td>Encryption</td><td>Password only</td><td class="strong">Full payload</td></tr>
  <tr><td>AAA separation</td><td>Combined A/A/A</td><td class="strong">Separate A, A, A functions</td></tr>
  <tr><td>Primary use</td><td>Network access (Wi-Fi, VPN)</td><td>Device admin (routers, switches)</td></tr>
  <tr><td>Vendor</td><td>Open standard</td><td>Cisco proprietary (mostly)</td></tr>
  <tr><td>Accounting</td><td>Good</td><td>Excellent — granular command logging</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--gold)">Exam rule:</strong> Network access (Wi-Fi, VPN) = RADIUS. Device administration (switches, routers) = TACACS+.</div>
</div>
<div class="cs-block">
  <div class="cs-block-title purple">Kerberos Flow</div>
  <table class="cs-table"><thead><tr><th>Step</th><th>Component</th><th>What Happens</th></tr></thead><tbody>
  <tr><td>1</td><td>Client → AS</td><td>Client requests authentication (sends username)</td></tr>
  <tr><td>2</td><td>AS → Client</td><td>Returns TGT (Ticket Granting Ticket) — encrypted with user's key</td></tr>
  <tr><td>3</td><td>Client → TGS</td><td>Presents TGT to Ticket Granting Service, requests service ticket</td></tr>
  <tr><td>4</td><td>TGS → Client</td><td>Returns service ticket for the requested resource</td></tr>
  <tr><td>5</td><td>Client → Server</td><td>Presents service ticket to access the resource</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--amber)">Requirements:</strong> NTP sync within 5 minutes. KDC = AS + TGS. Port 88. Used in Active Directory.<br><strong style="color:var(--red)">Attacks:</strong> Pass-the-ticket (steal TGT), Golden Ticket (forge TGT), Kerberoasting (crack service tickets offline).</div>
</div>
</div>
<div class="cs-grid-3">
<div class="cs-block">
  <div class="cs-block-title blue">Federation &amp; SSO Protocols</div>
  <table class="cs-table"><thead><tr><th>Protocol</th><th>Type</th><th>Use Case</th></tr></thead><tbody>
  <tr><td class="proto">SAML 2.0</td><td>XML assertions</td><td>Enterprise SSO, web apps</td></tr>
  <tr><td class="proto">OAuth 2.0</td><td>Authorization</td><td>API access delegation (NOT auth)</td></tr>
  <tr><td class="proto">OpenID Connect</td><td>Auth on OAuth</td><td>Social login, identity layer</td></tr>
  <tr><td class="proto">WS-Federation</td><td>SOAP/XML</td><td>Microsoft/ADFS federation</td></tr>
  </tbody></table>
  <div style="margin-top:6px;font-size:11px;color:var(--muted)"><strong style="color:var(--red)">Common trap:</strong> OAuth 2.0 is AUTHORIZATION (what you can do), NOT authentication (who you are). OpenID Connect adds the identity layer.</div>
</div>
<div class="cs-block">
  <div class="cs-block-title green">MFA Factor Types</div>
  <table class="cs-table"><thead><tr><th>Category</th><th>Examples</th></tr></thead><tbody>
  <tr><td><strong>Something you know</strong></td><td>Password, PIN, security questions</td></tr>
  <tr><td><strong>Something you have</strong></td><td>Hardware token, TOTP app, smart card, push notification</td></tr>
  <tr><td><strong>Something you are</strong></td><td>Fingerprint, face recognition, iris scan, voice</td></tr>
  <tr><td><strong>Somewhere you are</strong></td><td>Geolocation, IP range restriction</td></tr>
  <tr><td><strong>Something you do</strong></td><td>Behavioral biometrics, keystroke dynamics</td></tr>
  </tbody></table>
  <div style="margin-top:6px;font-size:11px;color:var(--muted)"><strong style="color:var(--gold)">Username is NOT a factor</strong> — it's an identifier. Password + TOTP = 2 factors (know + have).</div>
</div>
<div class="cs-block">
  <div class="cs-block-title amber">Access Control Models</div>
  <table class="cs-table"><thead><tr><th>Model</th><th>Who Decides</th><th>Signal Words</th></tr></thead><tbody>
  <tr><td class="proto">DAC</td><td>Data owner</td><td>"Owner controls," Linux permissions</td></tr>
  <tr><td class="proto">MAC</td><td>System (labels)</td><td>"Classification," "clearance," military</td></tr>
  <tr><td class="proto">RBAC</td><td>Role/job function</td><td>"Department," "job title," AD groups</td></tr>
  <tr><td class="proto">ABAC</td><td>Multiple attributes</td><td>"Location + role + time," cloud IAM</td></tr>
  <tr><td class="proto">Rule-based</td><td>Static rules</td><td>ACLs, firewall rules</td></tr>
  </tbody></table>
</div>
</div>

<!-- ATTACK TYPES -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-attacks">Attack Types Quick Reference</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title red">Malware Types</div>
  <table class="cs-table"><thead><tr><th>Type</th><th>Key Characteristic</th><th>Spreads How</th></tr></thead><tbody>
  <tr><td><strong>Virus</strong></td><td>Attaches to files/programs</td><td>User executes infected file</td></tr>
  <tr><td><strong>Worm</strong></td><td>Self-replicates autonomously</td><td>Network (no user action needed)</td></tr>
  <tr><td><strong>Trojan</strong></td><td>Disguised as legitimate software</td><td>User installs it willingly</td></tr>
  <tr><td><strong>Ransomware</strong></td><td>Encrypts files + demands payment</td><td>Phishing, exploit, RDP brute force</td></tr>
  <tr><td><strong>Spyware</strong></td><td>Monitors and exfiltrates data silently</td><td>Drive-by downloads, bundled software</td></tr>
  <tr><td><strong>Adware</strong></td><td>Displays unwanted advertisements</td><td>Bundled software installs</td></tr>
  <tr><td><strong>Rootkit</strong></td><td>Hides in OS kernel — conceals malware</td><td>Privilege escalation after initial access</td></tr>
  <tr><td><strong>Logic Bomb</strong></td><td>Triggers on condition (date/event)</td><td>Planted by insider developer</td></tr>
  <tr><td><strong>RAT</strong></td><td>Remote Access Trojan — C2 backdoor</td><td>Trojanized software, phishing</td></tr>
  <tr><td><strong>Keylogger</strong></td><td>Captures all keystrokes</td><td>Malware, physical hardware implant</td></tr>
  <tr><td><strong>Fileless</strong></td><td>Lives in memory only — no disk artifact</td><td>PowerShell, WMI, macro execution</td></tr>
  <tr><td><strong>Botnet</strong></td><td>Network of compromised systems (zombies)</td><td>Worm spreading, drive-by downloads</td></tr>
  <tr><td><strong>Backdoor</strong></td><td>Hidden persistent access mechanism</td><td>Planted in software supply chain or by attacker</td></tr>
  <tr><td><strong>PUP</strong></td><td>Potentially Unwanted Program</td><td>Bundled with free software</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title amber">Social Engineering Attacks</div>
  <table class="cs-table"><thead><tr><th>Attack</th><th>Channel</th><th>Key Detail</th></tr></thead><tbody>
  <tr><td><strong>Phishing</strong></td><td>Email (mass)</td><td>Generic, untargeted bulk emails</td></tr>
  <tr><td><strong>Spear Phishing</strong></td><td>Email (targeted)</td><td>Researched, targeted at specific individual</td></tr>
  <tr><td><strong>Whaling</strong></td><td>Email</td><td>Targets C-suite executives specifically</td></tr>
  <tr><td><strong>BEC</strong></td><td>Email</td><td>Impersonates exec to request wire transfer</td></tr>
  <tr><td><strong>Vishing</strong></td><td>Voice/phone</td><td>Impersonates IT/bank via phone call</td></tr>
  <tr><td><strong>Smishing</strong></td><td>SMS/text</td><td>Malicious link or request via text</td></tr>
  <tr><td><strong>Pretexting</strong></td><td>Any</td><td>Fabricated backstory/scenario to build trust</td></tr>
  <tr><td><strong>Baiting</strong></td><td>Physical</td><td>USB drops, enticing media left to find</td></tr>
  <tr><td><strong>Tailgating</strong></td><td>Physical</td><td>Following authorized person through secure door</td></tr>
  <tr><td><strong>Shoulder Surfing</strong></td><td>Physical</td><td>Observing screen/keyboard in person</td></tr>
  <tr><td><strong>Dumpster Diving</strong></td><td>Physical</td><td>Searching trash for sensitive documents</td></tr>
  <tr><td><strong>Watering Hole</strong></td><td>Web</td><td>Compromises sites the target group visits</td></tr>
  <tr><td><strong>Quid Pro Quo</strong></td><td>Any</td><td>Offers something in exchange for information</td></tr>
  <tr><td><strong>Impersonation</strong></td><td>Any</td><td>Poses as authority figure (vendor, auditor, IT)</td></tr>
  </tbody></table>
  <div class="cs-block-title green" style="margin-top:14px">Network Attacks</div>
  <table class="cs-table"><thead><tr><th>Attack</th><th>What It Does</th></tr></thead><tbody>
  <tr><td><strong>MitM</strong></td><td>Intercepts/modifies traffic between two parties</td></tr>
  <tr><td><strong>ARP Spoofing</strong></td><td>Poisons ARP cache — redirects LAN traffic through attacker</td></tr>
  <tr><td><strong>DNS Poisoning</strong></td><td>Injects false DNS records — redirects domains to attacker IPs</td></tr>
  <tr><td><strong>DHCP Starvation</strong></td><td>Exhausts DHCP pool with fake MACs — enables rogue DHCP server</td></tr>
  <tr><td><strong>DoS / DDoS</strong></td><td>Overwhelms target with traffic. DDoS = distributed (botnet).</td></tr>
  <tr><td><strong>Smurf</strong></td><td>ICMP amplification using broadcast — type of DDoS</td></tr>
  <tr><td><strong>SYN Flood</strong></td><td>Sends SYN packets without completing handshake — exhausts state table</td></tr>
  <tr><td><strong>Replay</strong></td><td>Reuses captured authentication packets</td></tr>
  <tr><td><strong>Pass-the-Hash</strong></td><td>Uses captured NTLM hash directly without cracking</td></tr>
  <tr><td><strong>Pass-the-Ticket</strong></td><td>Steals Kerberos TGT and uses it to authenticate</td></tr>
  <tr><td><strong>Golden Ticket</strong></td><td>Forged Kerberos TGT using KRBTGT hash — unlimited domain access</td></tr>
  <tr><td><strong>Kerberoasting</strong></td><td>Requests service tickets and cracks them offline</td></tr>
  </tbody></table>
</div>
</div>
<div class="cs-grid-3">
<div class="cs-block">
  <div class="cs-block-title blue">Application Attacks</div>
  <table class="cs-table"><thead><tr><th>Attack</th><th>Root Cause</th></tr></thead><tbody>
  <tr><td><strong>SQL Injection</strong></td><td>Unsanitized input in DB query</td></tr>
  <tr><td><strong>XSS</strong></td><td>Injected script runs in victim's browser</td></tr>
  <tr><td><strong>CSRF</strong></td><td>Tricks victim's browser into forged request</td></tr>
  <tr><td><strong>SSRF</strong></td><td>Server makes requests on attacker's behalf</td></tr>
  <tr><td><strong>Buffer Overflow</strong></td><td>Excess input overwrites adjacent memory</td></tr>
  <tr><td><strong>Race Condition</strong></td><td>TOCTOU — timing between check and use</td></tr>
  <tr><td><strong>XXE</strong></td><td>XML external entity — reads local files</td></tr>
  <tr><td><strong>Path Traversal</strong></td><td>../../../etc/passwd — escapes web root</td></tr>
  <tr><td><strong>Clickjacking</strong></td><td>Invisible iframe tricks user into clicking</td></tr>
  <tr><td><strong>IDOR</strong></td><td>Accesses objects by guessing IDs — no access check</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title purple">Password Attacks</div>
  <table class="cs-table"><thead><tr><th>Attack</th><th>Method</th></tr></thead><tbody>
  <tr><td><strong>Brute Force</strong></td><td>Tries all possible combinations</td></tr>
  <tr><td><strong>Dictionary</strong></td><td>Tries words from a wordlist</td></tr>
  <tr><td><strong>Password Spraying</strong></td><td>Common passwords against many accounts (avoids lockout)</td></tr>
  <tr><td><strong>Credential Stuffing</strong></td><td>Reuses leaked username/password pairs</td></tr>
  <tr><td><strong>Rainbow Table</strong></td><td>Precomputed hash lookups — defeated by salting</td></tr>
  <tr><td><strong>Pass-the-Hash</strong></td><td>Uses hash directly — no crack needed</td></tr>
  </tbody></table>
  <div class="cs-block-title amber" style="margin-top:14px">IDS Detection Methods</div>
  <table class="cs-table"><thead><tr><th>Method</th><th>Detects</th><th>Weakness</th></tr></thead><tbody>
  <tr><td><strong>Signature</strong></td><td>Known attack patterns</td><td>Misses novel/zero-day attacks</td></tr>
  <tr><td><strong>Anomaly</strong></td><td>Deviations from baseline</td><td>False positives — normal ≠ good</td></tr>
  <tr><td><strong>Heuristic</strong></td><td>Behavior resembling attacks</td><td>Both FP and FN possible</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title red">Detection Accuracy</div>
  <table class="cs-table"><thead><tr><th></th><th>Threat Real</th><th>No Threat</th></tr></thead><tbody>
  <tr><td><strong>Alert fired</strong></td><td class="strong">True Positive ✓</td><td class="broken">False Positive ✗</td></tr>
  <tr><td><strong>No alert</strong></td><td class="broken">False Negative ✗</td><td class="strong">True Negative ✓</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)">
    <strong style="color:var(--red)">False Negative</strong> = missed real attack — most dangerous<br>
    <strong style="color:var(--amber)">False Positive</strong> = alert on benign activity — alert fatigue<br>
    <strong style="color:var(--green)">True Positive</strong> = correctly detected attack<br>
    <strong style="color:var(--green)">True Negative</strong> = correctly ignored benign activity
  </div>
  <div class="cs-block-title muted" style="margin-top:14px">Threat Actor Types</div>
  <table class="cs-table"><thead><tr><th>Actor</th><th>Motivation</th><th>Sophistication</th></tr></thead><tbody>
  <tr><td><strong>Nation-State</strong></td><td>Espionage, sabotage</td><td>Very high (APT)</td></tr>
  <tr><td><strong>Cybercriminal</strong></td><td>Financial gain</td><td>Medium-high</td></tr>
  <tr><td><strong>Hacktivist</strong></td><td>Political/social agenda</td><td>Low-medium</td></tr>
  <tr><td><strong>Script Kiddie</strong></td><td>Recognition, curiosity</td><td>Low — uses others' tools</td></tr>
  <tr><td><strong>Insider Threat</strong></td><td>Revenge, money, ideology</td><td>Variable — has valid access</td></tr>
  <tr><td><strong>Competitor</strong></td><td>Corporate espionage</td><td>Medium</td></tr>
  </tbody></table>
</div>
</div>

<!-- OWASP TOP 10 -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-owasp">OWASP Top 10 (2021)</div>
<div class="cs-block">
  <div class="cs-block-title red">Web Application Security Risks — Memorize the list and what each enables</div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A01</span><span class="cs-owasp-name">Broken Access Control</span><span class="cs-owasp-desc">Users can act outside intended permissions — IDOR, privilege escalation, accessing unauthorized URLs</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A02</span><span class="cs-owasp-name">Cryptographic Failures</span><span class="cs-owasp-desc">Sensitive data exposed due to weak/missing encryption — transmitting data in cleartext, using MD5/SHA-1 for passwords, hard-coded keys</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A03</span><span class="cs-owasp-name">Injection</span><span class="cs-owasp-desc">Untrusted data sent as commands — SQL injection, LDAP injection, OS command injection, SSTI</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A04</span><span class="cs-owasp-name">Insecure Design</span><span class="cs-owasp-desc">Missing or ineffective security controls by design — not a coding bug but a design flaw; requires threat modeling</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A05</span><span class="cs-owasp-name">Security Misconfiguration</span><span class="cs-owasp-desc">Default credentials, open cloud storage buckets, unnecessary features enabled, verbose error messages leaking info</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A06</span><span class="cs-owasp-name">Vulnerable &amp; Outdated Components</span><span class="cs-owasp-desc">Using libraries, frameworks, or software with known vulnerabilities — Log4Shell (Log4j) is the canonical example</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A07</span><span class="cs-owasp-name">Identification &amp; Authentication Failures</span><span class="cs-owasp-desc">Broken auth — permits brute force, weak passwords, missing MFA, exposed session tokens, insecure credential storage</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A08</span><span class="cs-owasp-name">Software &amp; Data Integrity Failures</span><span class="cs-owasp-desc">Updates/plugins loaded without integrity verification — supply chain attacks (SolarWinds), insecure deserialization</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A09</span><span class="cs-owasp-name">Security Logging &amp; Monitoring Failures</span><span class="cs-owasp-desc">Insufficient logging — enables attackers to persist undetected; breaches discovered months later (average 200+ days)</span></div>
  <div class="cs-owasp-item"><span class="cs-owasp-num">A10</span><span class="cs-owasp-name">Server-Side Request Forgery (SSRF)</span><span class="cs-owasp-desc">Server fetches attacker-controlled URL — reaches internal services, cloud metadata APIs (AWS 169.254.169.254)</span></div>
</div>

<!-- REGULATIONS -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-regs">Regulations &amp; Compliance Quick Reference</div>
<div class="cs-block">
  <div class="cs-block-title gold">Know Which Regulation Applies to Which Scenario</div>
  <table class="cs-table"><thead><tr><th>Regulation</th><th>Applies To</th><th>Data Type</th><th>Key Fine</th><th>Key Requirement</th></tr></thead><tbody>
  <tr><td><strong>GDPR</strong></td><td>Any org processing EU citizen data</td><td>Personal data</td><td class="broken">€20M or 4% global turnover (higher)</td><td>72-hr breach notice to DPA; 30-day subject access response</td></tr>
  <tr><td><strong>HIPAA</strong></td><td>US healthcare providers, insurers, BAs</td><td>PHI (health records)</td><td class="warn">$100–$50K/violation; $1.9M annual cap</td><td>Safeguard PHI; breach notification; access controls; audit logs</td></tr>
  <tr><td><strong>PCI DSS</strong></td><td>Any org storing/processing card data</td><td>Cardholder data</td><td class="warn">$5K–$100K/month; loss of card processing</td><td>Quarterly ASV scans; annual pen test; 12 requirements</td></tr>
  <tr><td><strong>CCPA</strong></td><td>CA businesses meeting size thresholds</td><td>California residents' personal data</td><td class="warn">$2.5K–$7.5K/intentional violation</td><td>Right to know, delete, opt-out of sale</td></tr>
  <tr><td><strong>SOX</strong></td><td>US publicly traded companies</td><td>Financial records &amp; IT controls</td><td class="broken">Criminal penalties; $5M fine; prison</td><td>CEO/CFO attest to financial accuracy; Section 302 + 404</td></tr>
  <tr><td><strong>GLBA</strong></td><td>US financial institutions</td><td>Customer financial data</td><td class="warn">Up to $100K/day civil penalties</td><td>Safeguards Rule — protect customer financial records</td></tr>
  <tr><td><strong>FERPA</strong></td><td>US educational institutions receiving fed funds</td><td>Student education records</td><td class="muted">Loss of federal funding</td><td>Protect student records; parental rights until age 18</td></tr>
  <tr><td><strong>ISO 27001</strong></td><td>Voluntary — any organization</td><td>Information security broadly</td><td class="muted">None — certification loss only</td><td>ISMS framework; 114 controls in Annex A</td></tr>
  <tr><td><strong>NIST CSF</strong></td><td>Voluntary (required for US federal contractors)</td><td>Cybersecurity broadly</td><td class="muted">None — framework only</td><td>5 functions: Identify · Protect · Detect · Respond · Recover</td></tr>
  </tbody></table>
</div>
<div class="cs-grid-3" style="margin-top:14px">
<div class="cs-block">
  <div class="cs-block-title blue">GDPR Key Numbers</div>
  <table class="cs-table"><tbody>
  <tr><td>Breach notification</td><td class="strong">72 hours to DPA</td></tr>
  <tr><td>Subject access response</td><td class="strong">30 days (extendable)</td></tr>
  <tr><td>Max fine (Tier 1)</td><td>€10M or 2% turnover</td></tr>
  <tr><td>Max fine (Tier 2)</td><td class="broken">€20M or 4% turnover</td></tr>
  <tr><td>Data subject rights</td><td>Access · Rectify · Erase · Port · Object</td></tr>
  <tr><td>Right to erasure</td><td>"Right to be forgotten" — Art. 17</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title amber">HIPAA Key Numbers</div>
  <table class="cs-table"><tbody>
  <tr><td>Min fine (unaware)</td><td>$100/violation</td></tr>
  <tr><td>Max fine (willful neglect)</td><td class="broken">$50,000/violation</td></tr>
  <tr><td>Annual cap per category</td><td class="warn">~$1.9M</td></tr>
  <tr><td>Criminal penalty max</td><td class="broken">$250K + 10 years prison</td></tr>
  <tr><td>Breach notification</td><td>60 days to affected individuals; HHS; media if 500+</td></tr>
  <tr><td>Covered entities</td><td>Providers, Plans, Clearinghouses + BAs</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title green">Data Roles (GDPR)</div>
  <table class="cs-table"><tbody>
  <tr><td><strong>Data Subject</strong></td><td>The individual whose data is processed — has rights</td></tr>
  <tr><td><strong>Data Controller</strong></td><td>Decides WHY and HOW data is processed — primary liability</td></tr>
  <tr><td><strong>Data Processor</strong></td><td>Processes data ON BEHALF of controller — follows instructions</td></tr>
  <tr><td><strong>DPO</strong></td><td>Data Protection Officer — required in some orgs; advises on compliance</td></tr>
  <tr><td><strong>Data Owner</strong></td><td>Internal role — accountable for specific data set and its classification</td></tr>
  <tr><td><strong>Data Custodian</strong></td><td>Internal role — technically manages/stores/protects the data day-to-day</td></tr>
  </tbody></table>
</div>
</div>

<!-- SECURITY TOOLS -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-tools">Security Tools Reference</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title blue">Network &amp; Recon Tools</div>
  <table class="cs-table"><thead><tr><th>Tool</th><th>Use</th><th>Context</th></tr></thead><tbody>
  <tr><td class="proto">Nmap</td><td>Port scanning, OS fingerprinting, service detection</td><td>Recon, pen testing</td></tr>
  <tr><td class="proto">Wireshark</td><td>Packet capture and protocol analysis (GUI)</td><td>Forensics, troubleshooting</td></tr>
  <tr><td class="proto">tcpdump</td><td>Command-line packet capture</td><td>Linux/Unix forensics</td></tr>
  <tr><td class="proto">netcat (nc)</td><td>Raw TCP/UDP connections, port scanning, banner grab</td><td>"Swiss army knife" of networking</td></tr>
  <tr><td class="proto">Nessus</td><td>Vulnerability scanner (credentialed + non-credentialed)</td><td>VA programs</td></tr>
  <tr><td class="proto">Qualys</td><td>Cloud-based vulnerability management</td><td>Enterprise continuous scanning</td></tr>
  <tr><td class="proto">OpenVAS</td><td>Open-source vulnerability scanner</td><td>Free alternative to Nessus</td></tr>
  <tr><td class="proto">Shodan</td><td>Search engine for internet-exposed devices</td><td>Passive OSINT, attack surface mapping</td></tr>
  <tr><td class="proto">Maltego</td><td>OSINT and link analysis visualization</td><td>Threat intelligence, recon</td></tr>
  <tr><td class="proto">theHarvester</td><td>Gathers emails, subdomains, IPs from public sources</td><td>Passive OSINT</td></tr>
  <tr><td class="proto">Nikto</td><td>Web server vulnerability scanner</td><td>Web app testing</td></tr>
  <tr><td class="proto">dirb / gobuster</td><td>Web directory/file brute forcing</td><td>Web app testing</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title red">Exploitation &amp; Offensive Tools</div>
  <table class="cs-table"><thead><tr><th>Tool</th><th>Use</th><th>Context</th></tr></thead><tbody>
  <tr><td class="proto">Metasploit</td><td>Exploitation framework — modules for known CVEs</td><td>Pen testing, red team</td></tr>
  <tr><td class="proto">Burp Suite</td><td>Web application proxy — intercepts/modifies HTTP</td><td>Web app pen testing, OWASP testing</td></tr>
  <tr><td class="proto">OWASP ZAP</td><td>Free web app scanner and proxy</td><td>Web app testing, DAST</td></tr>
  <tr><td class="proto">SQLmap</td><td>Automated SQL injection detection and exploitation</td><td>Web app pen testing</td></tr>
  <tr><td class="proto">Aircrack-ng</td><td>WEP/WPA cracking, packet injection, deauth</td><td>Wireless pen testing</td></tr>
  <tr><td class="proto">Hashcat</td><td>GPU-accelerated password hash cracking</td><td>Password cracking, offline attacks</td></tr>
  <tr><td class="proto">John the Ripper</td><td>CPU-based password cracker</td><td>Password cracking</td></tr>
  <tr><td class="proto">Mimikatz</td><td>Extracts credentials/hashes from Windows memory</td><td>Lateral movement — IOC of compromise</td></tr>
  <tr><td class="proto">BloodHound</td><td>AD attack path mapping using graph analysis</td><td>Red team, privilege escalation paths</td></tr>
  <tr><td class="proto">Cobalt Strike</td><td>C2 framework for red team ops</td><td>Red team (also used by APTs)</td></tr>
  <tr><td class="proto">Empire / PowerSploit</td><td>PowerShell post-exploitation framework</td><td>Red team, fileless attacks</td></tr>
  </tbody></table>
</div>
</div>
<div class="cs-grid-3">
<div class="cs-block">
  <div class="cs-block-title green">Defensive &amp; Monitoring Tools</div>
  <table class="cs-table"><thead><tr><th>Tool</th><th>Category</th></tr></thead><tbody>
  <tr><td class="proto">Splunk / Elastic</td><td>SIEM — log aggregation + correlation</td></tr>
  <tr><td class="proto">Snort</td><td>Network IDS/IPS (signature-based)</td></tr>
  <tr><td class="proto">Suricata</td><td>Network IDS/IPS (multi-threaded)</td></tr>
  <tr><td class="proto">OSSEC</td><td>Host-based IDS (log analysis, rootkit detection)</td></tr>
  <tr><td class="proto">CrowdStrike Falcon</td><td>EDR / XDR (cloud-native)</td></tr>
  <tr><td class="proto">Carbon Black</td><td>EDR (endpoint behavior monitoring)</td></tr>
  <tr><td class="proto">Tripwire</td><td>File integrity monitoring (FIM)</td></tr>
  <tr><td class="proto">Nessus / Qualys</td><td>Vulnerability scanner</td></tr>
  <tr><td class="proto">OpenSSL</td><td>TLS toolkit, cert generation, testing</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title amber">Forensics Tools</div>
  <table class="cs-table"><thead><tr><th>Tool</th><th>Use</th></tr></thead><tbody>
  <tr><td class="proto">Autopsy / Sleuth Kit</td><td>Disk forensics — file recovery, timeline analysis</td></tr>
  <tr><td class="proto">FTK (Forensic Toolkit)</td><td>Commercial forensics — disk/memory analysis</td></tr>
  <tr><td class="proto">Volatility</td><td>Memory forensics — analyze RAM dumps</td></tr>
  <tr><td class="proto">dd / dcfldd</td><td>Bit-for-bit disk imaging (Linux)</td></tr>
  <tr><td class="proto">Cellebrite</td><td>Mobile device forensics</td></tr>
  <tr><td class="proto">EnCase</td><td>Commercial forensic investigation suite</td></tr>
  <tr><td class="proto">sha256sum / md5sum</td><td>Hash verification of evidence integrity</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title purple">Static vs Dynamic Analysis</div>
  <table class="cs-table"><thead><tr><th></th><th>SAST</th><th>DAST</th></tr></thead><tbody>
  <tr><td>Stands for</td><td>Static Application Security Testing</td><td>Dynamic Application Security Testing</td></tr>
  <tr><td>When run</td><td>During development (CI/CD)</td><td>Against running application</td></tr>
  <tr><td>Needs source?</td><td>Yes — analyzes code</td><td>No — black-box testing</td></tr>
  <tr><td>Finds</td><td>Code flaws, injection risks in code</td><td>Runtime vulnerabilities, logic flaws</td></tr>
  <tr><td>Example</td><td>SonarQube, Checkmarx, Veracode</td><td>Burp Suite, OWASP ZAP, Nikto</td></tr>
  <tr><td>Phase</td><td>Shift-left (early)</td><td>Pre-release testing</td></tr>
  </tbody></table>
</div>
</div>

<!-- FORMULAS & QUICK REFS -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-formulas">Formulas, Frameworks &amp; Processes</div>
<div class="cs-grid">
<div class="cs-block">
  <div class="cs-block-title gold">Risk Quantification Formulas</div>
  <div class="cs-formula">SLE = <span>AV</span> × <span>EF</span></div>
  <div class="cs-formula">ALE = <span>SLE</span> × <span>ARO</span></div>
  <div class="cs-formula">ARO = <span>ALE</span> ÷ <span>SLE</span> &nbsp;|&nbsp; EF = <span>SLE</span> ÷ <span>AV</span></div>
  <table class="cs-table" style="margin-top:10px"><thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
  <tr><td><strong>AV</strong></td><td>Asset Value — what the asset is worth</td><td>$500,000</td></tr>
  <tr><td><strong>EF</strong></td><td>Exposure Factor — % of asset lost per event</td><td>0.40 = 40%</td></tr>
  <tr><td><strong>SLE</strong></td><td>Single Loss Expectancy — loss from ONE event</td><td>$200,000</td></tr>
  <tr><td><strong>ARO</strong></td><td>Annual Rate of Occurrence — events per year</td><td>0.5 = once every 2 yrs</td></tr>
  <tr><td><strong>ALE</strong></td><td>Annual Loss Expectancy — total annual risk cost</td><td>$100,000/yr</td></tr>
  </tbody></table>
  <div style="background:rgba(255,208,96,.07);border:1px solid rgba(255,208,96,.2);border-radius:6px;padding:10px 12px;margin-top:10px;font-size:12px">
    <strong style="color:var(--gold)">Worked example:</strong> Server worth $300K. Fire destroys 50% (EF=0.5). Fires happen every 5 years (ARO=0.2).<br>
    SLE = $300K × 0.5 = <strong style="color:var(--accent)">$150K</strong> | ALE = $150K × 0.2 = <strong style="color:var(--accent)">$30K/yr</strong><br>
    Sprinkler system costs $25K/yr — <strong style="color:var(--green)">cost-effective</strong> (saves $5K/yr vs expected loss).
  </div>
</div>
<div class="cs-block">
  <div class="cs-block-title blue">BIA Metrics</div>
  <table class="cs-table"><thead><tr><th>Metric</th><th>Meaning</th><th>Direction</th></tr></thead><tbody>
  <tr><td><strong>RTO</strong></td><td>Recovery Time Objective — max acceptable DOWNTIME</td><td>Lower = better (faster recovery required)</td></tr>
  <tr><td><strong>RPO</strong></td><td>Recovery Point Objective — max acceptable DATA LOSS in time</td><td>Lower = better (more frequent backups required)</td></tr>
  <tr><td><strong>MTTR</strong></td><td>Mean Time To Repair — average time to fix a failure</td><td>Lower = better (faster repair)</td></tr>
  <tr><td><strong>MTBF</strong></td><td>Mean Time Between Failures — average operational time between failures</td><td>Higher = better (more reliable)</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--red)">RTO vs RPO trap:</strong> RTO = how long the SYSTEM can be down. RPO = how much DATA can be lost. A bank might have RTO=4h but RPO=0 (no transaction loss at all).</div>
  <div class="cs-block-title green" style="margin-top:14px">Backup Types Compared</div>
  <table class="cs-table"><thead><tr><th>Type</th><th>Copies What</th><th>Resets Archive Bit?</th><th>Restore Sets Needed</th></tr></thead><tbody>
  <tr><td><strong>Full</strong></td><td>Everything</td><td>Yes</td><td>1 (just the full)</td></tr>
  <tr><td><strong>Differential</strong></td><td>All changes since last FULL</td><td>No</td><td>2 (full + latest differential)</td></tr>
  <tr><td><strong>Incremental</strong></td><td>Changes since last backup (any)</td><td>Yes</td><td>Many (full + every incremental)</td></tr>
  </tbody></table>
</div>
</div>
<div class="cs-grid-3">
<div class="cs-block">
  <div class="cs-block-title purple">Incident Response (NIST SP 800-61)</div>
  <table class="cs-table"><tbody>
  <tr><td><span class="cs-tag blue">1</span></td><td><strong>Preparation</strong></td><td style="font-size:11px;color:var(--muted)">Only pre-incident phase. Build playbooks, train, get tools.</td></tr>
  <tr><td><span class="cs-tag blue">2</span></td><td><strong>Detection &amp; Analysis</strong></td><td style="font-size:11px;color:var(--muted)">Identify and confirm the incident. Determine scope.</td></tr>
  <tr><td><span class="cs-tag blue">3</span></td><td><strong>Containment</strong></td><td style="font-size:11px;color:var(--muted)">Stop the spread. Short-term (isolate) + long-term (patch).</td></tr>
  <tr><td><span class="cs-tag blue">4</span></td><td><strong>Eradication</strong></td><td style="font-size:11px;color:var(--muted)">Remove malware, close vulnerabilities, rebuild if needed.</td></tr>
  <tr><td><span class="cs-tag blue">5</span></td><td><strong>Recovery</strong></td><td style="font-size:11px;color:var(--muted)">Restore systems to production. Monitor for recurrence.</td></tr>
  <tr><td><span class="cs-tag blue">6</span></td><td><strong>Lessons Learned</strong></td><td style="font-size:11px;color:var(--muted)">Document what happened, what worked, improve program.</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title amber">Kill Chain (Lockheed Martin)</div>
  <table class="cs-table"><tbody>
  <tr><td><span class="cs-tag amber">1</span></td><td><strong>Reconnaissance</strong></td><td style="font-size:11px;color:var(--muted)">Research the target — OSINT, scanning</td></tr>
  <tr><td><span class="cs-tag amber">2</span></td><td><strong>Weaponization</strong></td><td style="font-size:11px;color:var(--muted)">Create exploit + payload (malware)</td></tr>
  <tr><td><span class="cs-tag amber">3</span></td><td><strong>Delivery</strong></td><td style="font-size:11px;color:var(--muted)">Send phishing email, USB drop, web exploit</td></tr>
  <tr><td><span class="cs-tag amber">4</span></td><td><strong>Exploitation</strong></td><td style="font-size:11px;color:var(--muted)">Trigger the vulnerability</td></tr>
  <tr><td><span class="cs-tag amber">5</span></td><td><strong>Installation</strong></td><td style="font-size:11px;color:var(--muted)">Install backdoor/RAT for persistence</td></tr>
  <tr><td><span class="cs-tag amber">6</span></td><td><strong>C2</strong></td><td style="font-size:11px;color:var(--muted)">Establish command &amp; control channel</td></tr>
  <tr><td><span class="cs-tag amber">7</span></td><td><strong>Actions on Objectives</strong></td><td style="font-size:11px;color:var(--muted)">Exfiltrate, encrypt, destroy</td></tr>
  </tbody></table>
</div>
<div class="cs-block">
  <div class="cs-block-title green">Cloud &amp; Architecture Reference</div>
  <table class="cs-table"><thead><tr><th>Model</th><th>You Manage</th></tr></thead><tbody>
  <tr><td><strong>IaaS</strong></td><td>OS, runtime, apps, data</td></tr>
  <tr><td><strong>PaaS</strong></td><td>Apps and data only</td></tr>
  <tr><td><strong>SaaS</strong></td><td>Data and user access only</td></tr>
  </tbody></table>
  <table class="cs-table" style="margin-top:8px"><thead><tr><th>Site Type</th><th>Readiness</th><th>Cost</th><th>RTO</th></tr></thead><tbody>
  <tr><td><strong>Hot site</strong></td><td>Fully operational, live data</td><td class="broken">Highest</td><td class="strong">Minutes</td></tr>
  <tr><td><strong>Warm site</strong></td><td>Hardware ready, data restore needed</td><td class="warn">Medium</td><td class="warn">Hours-days</td></tr>
  <tr><td><strong>Cold site</strong></td><td>Space only — build from scratch</td><td class="strong">Lowest</td><td class="broken">Days-weeks</td></tr>
  </tbody></table>
  <div style="margin-top:8px;font-size:11px;color:var(--muted)"><strong style="color:var(--accent)">3-2-1 Backup Rule:</strong> 3 copies of data · 2 different media types · 1 offsite copy</div>
</div>
</div>

<!-- ACRONYM GLOSSARY -->
<div class="cs-divider"></div>
<div class="h2 cs-section-anchor" id="cs-acronyms">Acronym Glossary A–Z</div>
<div class="cs-block">
  <div class="cs-block-title muted">Every acronym that has appeared on recent SY0-701 exams</div>
  <div class="cs-acronym-grid">
    <div class="cs-acronym-item"><span class="cs-abbr">AAA</span><span class="cs-def">Authentication, Authorization, Accounting</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ACL</span><span class="cs-def">Access Control List</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">AES</span><span class="cs-def">Advanced Encryption Standard</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ALE</span><span class="cs-def">Annual Loss Expectancy</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">APT</span><span class="cs-def">Advanced Persistent Threat</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ARO</span><span class="cs-def">Annual Rate of Occurrence</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">AUP</span><span class="cs-def">Acceptable Use Policy</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">BCP</span><span class="cs-def">Business Continuity Plan</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">BEC</span><span class="cs-def">Business Email Compromise</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">BIA</span><span class="cs-def">Business Impact Analysis</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">BPA</span><span class="cs-def">Business Partnership Agreement</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">BYOD</span><span class="cs-def">Bring Your Own Device</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CA</span><span class="cs-def">Certificate Authority</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CASB</span><span class="cs-def">Cloud Access Security Broker</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CCPA</span><span class="cs-def">California Consumer Privacy Act</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CIA</span><span class="cs-def">Confidentiality, Integrity, Availability</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">COPE</span><span class="cs-def">Company-Owned, Personally Enabled</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">COOP</span><span class="cs-def">Continuity of Operations Plan</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CSIRT</span><span class="cs-def">Computer Security Incident Response Team</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CSP</span><span class="cs-def">Cloud Service Provider / Content Security Policy</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CSRF</span><span class="cs-def">Cross-Site Request Forgery</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CVE</span><span class="cs-def">Common Vulnerabilities and Exposures</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CVSS</span><span class="cs-def">Common Vulnerability Scoring System</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">CYOD</span><span class="cs-def">Choose Your Own Device</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DAC</span><span class="cs-def">Discretionary Access Control</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DAST</span><span class="cs-def">Dynamic Application Security Testing</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DES</span><span class="cs-def">Data Encryption Standard (broken)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DHCP</span><span class="cs-def">Dynamic Host Configuration Protocol</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DLP</span><span class="cs-def">Data Loss Prevention</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DMZ</span><span class="cs-def">Demilitarized Zone (network)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DNS</span><span class="cs-def">Domain Name System</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DPO</span><span class="cs-def">Data Protection Officer (GDPR)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">DRP</span><span class="cs-def">Disaster Recovery Plan</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">EAP</span><span class="cs-def">Extensible Authentication Protocol</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ECC</span><span class="cs-def">Elliptic Curve Cryptography</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">EDR</span><span class="cs-def">Endpoint Detection and Response</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">EF</span><span class="cs-def">Exposure Factor (risk calculation)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">EV</span><span class="cs-def">Extended Validation (certificate)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">FDE</span><span class="cs-def">Full Disk Encryption</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">FERPA</span><span class="cs-def">Family Educational Rights and Privacy Act</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">FIM</span><span class="cs-def">File Integrity Monitoring</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">FISMA</span><span class="cs-def">Federal Information Security Management Act</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">FTP</span><span class="cs-def">File Transfer Protocol (cleartext)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">GDPR</span><span class="cs-def">General Data Protection Regulation (EU)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">GLBA</span><span class="cs-def">Gramm-Leach-Bliley Act (financial)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">HMAC</span><span class="cs-def">Hash-based Message Authentication Code</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">HSM</span><span class="cs-def">Hardware Security Module</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">HTTP</span><span class="cs-def">HyperText Transfer Protocol (cleartext)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">HTTPS</span><span class="cs-def">HTTP Secure (TLS encrypted)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IAM</span><span class="cs-def">Identity and Access Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ICS</span><span class="cs-def">Industrial Control System</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IDS</span><span class="cs-def">Intrusion Detection System (alerts only)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IKE</span><span class="cs-def">Internet Key Exchange (IPsec)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IMAP</span><span class="cs-def">Internet Message Access Protocol</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IoT</span><span class="cs-def">Internet of Things</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IPS</span><span class="cs-def">Intrusion Prevention System (blocks)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">IRP</span><span class="cs-def">Incident Response Plan/Policy</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ISP</span><span class="cs-def">Internet Service Provider</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">JIT</span><span class="cs-def">Just-in-Time (access provisioning)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">KDC</span><span class="cs-def">Key Distribution Center (Kerberos)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">KRI</span><span class="cs-def">Key Risk Indicator</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">LDAP</span><span class="cs-def">Lightweight Directory Access Protocol</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MAC</span><span class="cs-def">Mandatory Access Control / Media Access Control</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MAM</span><span class="cs-def">Mobile Application Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MDM</span><span class="cs-def">Mobile Device Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MDR</span><span class="cs-def">Managed Detection and Response</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MFA</span><span class="cs-def">Multi-Factor Authentication</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MitM</span><span class="cs-def">Man-in-the-Middle (attack)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MOA</span><span class="cs-def">Memorandum of Agreement (binding)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MOU</span><span class="cs-def">Memorandum of Understanding (non-binding)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MSA</span><span class="cs-def">Master Service Agreement</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MSSP</span><span class="cs-def">Managed Security Service Provider</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MTBF</span><span class="cs-def">Mean Time Between Failures</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">MTTR</span><span class="cs-def">Mean Time To Repair</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NAC</span><span class="cs-def">Network Access Control</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NAT</span><span class="cs-def">Network Address Translation</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NDA</span><span class="cs-def">Non-Disclosure Agreement</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NGFW</span><span class="cs-def">Next-Generation Firewall</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NIST</span><span class="cs-def">National Institute of Standards and Technology</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">NTP</span><span class="cs-def">Network Time Protocol (port 123)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">OCSP</span><span class="cs-def">Online Certificate Status Protocol</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">OT</span><span class="cs-def">Operational Technology (ICS/SCADA)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">OWASP</span><span class="cs-def">Open Web Application Security Project</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PAM</span><span class="cs-def">Privileged Access Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PaaS</span><span class="cs-def">Platform as a Service</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PCI DSS</span><span class="cs-def">Payment Card Industry Data Security Standard</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PGP</span><span class="cs-def">Pretty Good Privacy (email encryption)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PHI</span><span class="cs-def">Protected Health Information (HIPAA)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PII</span><span class="cs-def">Personally Identifiable Information</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">PKI</span><span class="cs-def">Public Key Infrastructure</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">POP3</span><span class="cs-def">Post Office Protocol v3 (mail retrieval)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RADIUS</span><span class="cs-def">Remote Authentication Dial-In User Service</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RAID</span><span class="cs-def">Redundant Array of Independent Disks</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RAT</span><span class="cs-def">Remote Access Trojan</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RBAC</span><span class="cs-def">Role-Based Access Control</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RDP</span><span class="cs-def">Remote Desktop Protocol (port 3389)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RPO</span><span class="cs-def">Recovery Point Objective (max data loss)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RSA</span><span class="cs-def">Rivest-Shamir-Adleman (asymmetric crypto)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RTOS</span><span class="cs-def">Real-Time Operating System</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">RTO</span><span class="cs-def">Recovery Time Objective (max downtime)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SaaS</span><span class="cs-def">Software as a Service</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SAML</span><span class="cs-def">Security Assertion Markup Language (SSO)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SASE</span><span class="cs-def">Secure Access Service Edge</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SAST</span><span class="cs-def">Static Application Security Testing</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SCADA</span><span class="cs-def">Supervisory Control and Data Acquisition</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SFTP</span><span class="cs-def">SSH File Transfer Protocol (port 22)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SHA</span><span class="cs-def">Secure Hash Algorithm</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SIEM</span><span class="cs-def">Security Information and Event Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SLA</span><span class="cs-def">Service Level Agreement</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SLE</span><span class="cs-def">Single Loss Expectancy</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SMB</span><span class="cs-def">Server Message Block (port 445, Windows)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SMTP</span><span class="cs-def">Simple Mail Transfer Protocol (port 25)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SNMP</span><span class="cs-def">Simple Network Management Protocol (161)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SOAR</span><span class="cs-def">Security Orchestration, Automation, Response</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SOC</span><span class="cs-def">Security Operations Center / System+Org Controls</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SOW</span><span class="cs-def">Statement of Work</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SOX</span><span class="cs-def">Sarbanes-Oxley Act (financial reporting)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SQL</span><span class="cs-def">Structured Query Language</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SSH</span><span class="cs-def">Secure Shell (port 22)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SSL</span><span class="cs-def">Secure Sockets Layer (deprecated — use TLS)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SSO</span><span class="cs-def">Single Sign-On</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">SSRF</span><span class="cs-def">Server-Side Request Forgery (OWASP A10)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TACACS+</span><span class="cs-def">Terminal Access Controller Access-Control System+</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TGT</span><span class="cs-def">Ticket Granting Ticket (Kerberos)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TKIP</span><span class="cs-def">Temporal Key Integrity Protocol (WPA — deprecated)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TLS</span><span class="cs-def">Transport Layer Security</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TOTP</span><span class="cs-def">Time-Based One-Time Password (MFA)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">TPM</span><span class="cs-def">Trusted Platform Module (hardware crypto chip)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">UAT</span><span class="cs-def">User Acceptance Testing</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">UEBA</span><span class="cs-def">User and Entity Behavior Analytics</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">UPS</span><span class="cs-def">Uninterruptible Power Supply</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">URL</span><span class="cs-def">Uniform Resource Locator</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">UTM</span><span class="cs-def">Unified Threat Management</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">VDI</span><span class="cs-def">Virtual Desktop Infrastructure</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">VLAN</span><span class="cs-def">Virtual Local Area Network</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">VPN</span><span class="cs-def">Virtual Private Network</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">WAF</span><span class="cs-def">Web Application Firewall</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">WEP</span><span class="cs-def">Wired Equivalent Privacy (broken wireless)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">WPA3</span><span class="cs-def">Wi-Fi Protected Access 3 (SAE handshake)</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">XDR</span><span class="cs-def">Extended Detection and Response</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">XML</span><span class="cs-def">Extensible Markup Language</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">XSS</span><span class="cs-def">Cross-Site Scripting</span></div>
    <div class="cs-acronym-item"><span class="cs-abbr">ZTNA</span><span class="cs-def">Zero Trust Network Access</span></div>
  </div>
</div>

</div></div>
  `;
}
//#endregion
export { render };
