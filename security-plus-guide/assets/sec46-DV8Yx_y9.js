//#region src/chapters/chapter4/sec46.js
function render() {
	return `
<div id="sec-sec46" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 4.0 <span class="sec-breadcrumb-sep">›</span> Objective 4.6</div>
  <div class="sec-obj-tag">4.6 — Identity and Access Management</div>
  <div class="sec-title">Identity &amp; Access<br>Management</div>
  <div class="sec-lead">IAM controls who gets in, what they can do, and how their identity is verified. MFA, access control models, PAM tools, and password policies are all heavily tested. The exam frequently presents scenarios where you must choose the most appropriate access control or authentication method.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Multi-Factor Authentication (MFA)</div>
<p>MFA requires two or more verification factors from different categories. Even if one factor is compromised, the account remains protected.</p>

<div class="h3">Authentication Factors</div>
<table class="table"><thead><tr><th>Factor</th><th>What It Is</th><th>Examples</th><th>Weakness</th></tr></thead><tbody>
<tr><td><strong>Something You Know</strong></td><td>Knowledge-based</td><td>Password, PIN, passphrase, security questions</td><td>Can be guessed, phished, or leaked</td></tr>
<tr><td><strong>Something You Have</strong></td><td>Possession-based</td><td>Smart card, hardware token (YubiKey), phone (TOTP app), SMS code</td><td>Can be lost, stolen, or SIM-swapped</td></tr>
<tr><td><strong>Something You Are</strong></td><td>Biometric</td><td>Fingerprint, face scan, iris scan, voice recognition</td><td>Cannot be changed if compromised; privacy concerns</td></tr>
<tr><td><strong>Somewhere You Are</strong></td><td>Location-based</td><td>IP geolocation, GPS coordinates, office IP range</td><td>Can be spoofed via VPN or proxy</td></tr>
</tbody></table>

<div class="h3">MFA Implementation Types</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Biometrics</div><p>Fingerprint, face recognition, iris scan. High security but irreplaceable if compromised. Privacy regulations may restrict collection.</p></div>
  <div class="card gold"><div class="card-title">Hard Tokens</div><p>Physical device (YubiKey, RSA SecurID key fob) generates time-based OTPs. Most secure — physically separate from the system being accessed.</p></div>
  <div class="card green"><div class="card-title">Soft Tokens</div><p>App on smartphone (Google Authenticator, Microsoft Authenticator) generates OTPs. Convenient; slightly less secure than hard tokens (phone can be compromised).</p></div>
  <div class="card purple"><div class="card-title">Security Keys (FIDO2)</div><p>Physical USB/NFC/Bluetooth key using public-key cryptography. Resists phishing (cryptographic binding to specific site). Standard: FIDO U2F / WebAuthn.</p></div>
</div>

<div class="h2">Password Concepts &amp; Best Practices</div>
<table class="table"><thead><tr><th>Concept</th><th>Recommendation</th><th>Why It Matters</th></tr></thead><tbody>
<tr><td><strong>Length</strong></td><td>Minimum 12–16 characters</td><td>Exponentially increases brute-force time</td></tr>
<tr><td><strong>Complexity</strong></td><td>Mix uppercase, lowercase, numbers, symbols</td><td>Prevents dictionary and pattern attacks</td></tr>
<tr><td><strong>Reuse</strong></td><td>Never reuse passwords across accounts</td><td>One breach compromises all reusing accounts (credential stuffing)</td></tr>
<tr><td><strong>Expiration</strong></td><td>Change every 60–90 days (or on suspected compromise)</td><td>Limits window of unauthorized access if credentials leaked</td></tr>
<tr><td><strong>Age</strong></td><td>Enforce minimum age (prevent immediate reuse)</td><td>Prevents cycling back to previous passwords immediately</td></tr>
</tbody></table>

<div class="cards">
  <div class="card blue"><div class="card-title">Password Managers</div><p>Store encrypted unique passwords per site. Users need one strong master password. Tools: <strong>LastPass, 1Password, Bitwarden</strong>. Eliminates password reuse.</p></div>
  <div class="card gold"><div class="card-title">Passwordless Auth</div><p>Replace passwords with biometrics, FIDO2 keys, or magic links. Example: <strong>Windows Hello</strong> (facial recognition/fingerprint). Eliminates phishing risk of passwords entirely.</p></div>
</div>

<div class="h2">Privileged Access Management (PAM)</div>
<div class="cards">
  <div class="card purple"><div class="card-title">Just-in-Time (JIT) Permissions</div><p>Grant elevated access only when needed, for a defined time window. Access expires automatically. Minimizes the standing privilege attack surface. Example: 1-hour admin session that auto-expires.</p></div>
  <div class="card blue"><div class="card-title">Password Vaulting</div><p>Store privileged credentials in an encrypted, centralized vault. Only authorized users can retrieve passwords. Tools: <strong>CyberArk, HashiCorp Vault, BeyondTrust</strong>.</p></div>
  <div class="card green"><div class="card-title">Ephemeral Credentials</div><p>Auto-generated temporary credentials for a specific task. Expire immediately after use. Common in cloud environments (AWS IAM roles, short-lived tokens).</p></div>
</div>

<div class="h2">Access Control Models</div>
<table class="table"><thead><tr><th>Model</th><th>Who Controls Access</th><th>Key Characteristic</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>MAC</strong> — Mandatory Access Control</td><td>System/OS enforces policy</td><td>Users cannot change their own permissions. Labels-based (Top Secret, Secret, Confidential). Most restrictive.</td><td>SELinux, government classified systems</td></tr>
<tr><td><strong>DAC</strong> — Discretionary Access Control</td><td>Resource owner decides</td><td>Flexible but prone to errors. Owner grants/revokes permissions.</td><td>Standard Windows file sharing — owner sets who can read/write</td></tr>
<tr><td><strong>RBAC</strong> — Role-Based Access Control</td><td>Administrator assigns roles</td><td>Access based on job role, not individual. Simplifies large-org management.</td><td>HR role = access HR system; Finance role = access finance system</td></tr>
<tr><td><strong>Rule-Based AC</strong></td><td>Defined rules/conditions</td><td>Time-of-day, location, or IP-based conditions trigger access control.</td><td>Access only from office IP range during business hours</td></tr>
<tr><td><strong>ABAC</strong> — Attribute-Based Access Control</td><td>Policy engine evaluates attributes</td><td>Most granular. Access based on user + resource + environment attributes combined.</td><td>Doc access requires: dept=Finance AND clearance=Confidential AND location=HQ</td></tr>
</tbody></table>

<div class="h3">Additional Access Principles</div>
<div class="cards">
  <div class="card amber"><div class="card-title">Least Privilege</div><p>Grant the minimum access required to do the job — nothing more. Reduces blast radius of compromised accounts. Applies to users, service accounts, and applications.</p></div>
  <div class="card blue"><div class="card-title">Time-of-Day Restrictions</div><p>Limit access to specific hours. Finance user can only log in 9am–6pm. After-hours access triggers alert or is blocked entirely.</p></div>
</div>

<div class="h2">IAM Protocols &amp; Standards</div>
<div class="cards">
  <div class="card blue"><div class="card-title">LDAP</div><p>Lightweight Directory Access Protocol — query and authenticate against directory services (Active Directory). Port 389 (LDAP) / 636 (LDAPS — encrypted).</p></div>
  <div class="card gold"><div class="card-title">Kerberos</div><p>Ticket-based authentication used in Windows domains. Uses a Key Distribution Center (KDC). Prevents password transmission across the network.</p></div>
  <div class="card green"><div class="card-title">OAuth / SAML</div><p><strong>OAuth</strong> — authorization delegation (log in with Google). <strong>SAML</strong> — enterprise SSO federation. Both enable Single Sign-On across applications without sharing passwords.</p></div>
</div>
</div></div>
  `;
}
//#endregion
export { render };
