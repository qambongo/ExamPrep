//#region src/chapters/chapter3/sec35.js
function render() {
	return `
<div id="sec-sec35" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.5</div>
  <div class="sec-obj-tag">3.5</div>
  <div class="sec-title">Data Protection</div>
  <div class="sec-lead">Understanding data types, classification levels, states, sovereignty, and the specific methods used to secure data at each stage.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Data Types</div>
<div class="tbl-wrap"><table>
  <tr><th>Data Type</th><th>Description</th><th>Examples</th></tr>
  <tr><td><strong>Regulated</strong></td><td>Subject to compliance laws — specific handling, storage, breach notification required</td><td>PHI (HIPAA), payment cards (PCI DSS), personal data (GDPR)</td></tr>
  <tr><td><strong>Trade Secret</strong></td><td>Confidential business info providing competitive advantage — not publicly known</td><td>Coca-Cola formula, proprietary algorithms</td></tr>
  <tr><td><strong>Intellectual Property</strong></td><td>Legally protected creations: patents, trademarks, copyrights</td><td>Software code, inventions, brand logos</td></tr>
  <tr><td><strong>Legal Information</strong></td><td>Data with legal implications or constraints</td><td>Contracts, compliance docs, litigation records</td></tr>
  <tr><td><strong>Financial Information</strong></td><td>Data related to financial status — highly sensitive</td><td>Financial statements, salary records, bank account numbers</td></tr>
  <tr><td><strong>Human-Readable</strong></td><td>Understood by people without special tools</td><td>Word docs, emails, PDFs</td></tr>
  <tr><td><strong>Non-Human-Readable</strong></td><td>Requires special tools to interpret</td><td>Encrypted files, binary data, compressed archives</td></tr>
</table></div>

<div class="h2">Data Classifications</div>
<div class="cards">
  <div class="card red"><div class="card-title">Restricted</div><p>Highest sensitivity, very limited access. Unauthorized disclosure has severe consequences. Examples: government classified info, national defense secrets.</p></div>
  <div class="card red"><div class="card-title">Sensitive</div><p>Must be protected to prevent harm. Requires strict controls. Examples: PII (SSNs), payment info, medical records.</p></div>
  <div class="card amber"><div class="card-title">Confidential</div><p>Proprietary info accessible only by authorized personnel. Often protected by NDAs. Examples: employee reviews, internal strategies, customer lists.</p></div>
  <div class="card amber"><div class="card-title">Private</div><p>Individual/organizational data protected under privacy laws. Examples: health data (HIPAA), SSNs, payroll records.</p></div>
  <div class="card blue"><div class="card-title">Critical</div><p>Essential for organizational operations. Loss = downtime. Examples: backup systems, encryption keys, business continuity data.</p></div>
  <div class="card green"><div class="card-title">Public</div><p>Freely shareable — no confidentiality requirements. Examples: press releases, product brochures, published research.</p></div>
</div>

<div class="h2">Data States</div>
<div class="tbl-wrap"><table>
  <tr><th>State</th><th>Definition</th><th>Security Controls</th></tr>
  <tr><td><strong>Data at Rest</strong></td><td>Stored on physical devices, not actively transmitted</td><td>Encryption (full-disk), access control, secure backups</td></tr>
  <tr><td><strong>Data in Transit</strong></td><td>Actively moving across a network</td><td>TLS/SSL encryption, HMAC integrity checks, HTTPS/IPSec/VPN</td></tr>
  <tr><td><strong>Data in Use</strong></td><td>Actively being processed by applications (in memory/CPU)</td><td>Memory encryption, access controls, data masking</td></tr>
</table></div>

<div class="h2">Data Sovereignty &amp; Geolocation</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">⚖️</div><div class="def-content"><div class="def-title">Data Sovereignty</div><div class="def-text">Data is subject to the laws of the country where it is stored. Cross-border transfers may require Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs). Some countries (Russia, China) require data localization.</div></div></div>
  <div class="def-block"><div class="def-num">📍</div><div class="def-content"><div class="def-title">Geolocation / Geofencing</div><div class="def-text">Geolocation identifies physical location via IP/GPS. <strong>Geofencing</strong> sets virtual boundaries — enforces policies when users enter or exit certain geographic areas. Used for compliance and access control.</div></div></div>
</div>

<div class="h2">Methods to Secure Data</div>
<div class="tbl-wrap"><table>
  <tr><th>Method</th><th>Definition</th><th>Example</th></tr>
  <tr><td><strong>Geographic Restrictions</strong></td><td>Limit access based on user location</td><td>Geo-blocking, CDN content restrictions</td></tr>
  <tr><td><strong>Encryption</strong></td><td>Convert data to unreadable format without decryption key</td><td>AES (symmetric), RSA (asymmetric)</td></tr>
  <tr><td><strong>Hashing</strong></td><td>One-way transformation to fixed-size string — verifies integrity, not reversible</td><td>SHA-256 for file integrity, bcrypt for passwords</td></tr>
  <tr><td><strong>Masking</strong></td><td>Replace sensitive data with realistic fictional data</td><td>Show only last 4 digits of credit card</td></tr>
  <tr><td><strong>Tokenization</strong></td><td>Replace sensitive data with a non-sensitive token — cannot be reverse-engineered</td><td>Payment processing tokens</td></tr>
  <tr><td><strong>Obfuscation</strong></td><td>Make data/code harder to understand</td><td>Obfuscating source code against reverse engineering</td></tr>
  <tr><td><strong>Segmentation</strong></td><td>Divide network/system into isolated parts to limit exposure</td><td>VLANs isolating HR from finance</td></tr>
  <tr><td><strong>Permission Restrictions</strong></td><td>Control who can access data and what actions they can take</td><td>RBAC, ABAC, MAC</td></tr>
</table></div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Hashing vs. Encryption:</strong> Hashing is <em>one-way</em> (integrity verification, password storage). Encryption is <em>two-way</em> (confidentiality). Tokenization vs. Masking: tokenization replaces with a token (reversible by token system); masking hides portions of real data.</div>
</div></div>
  `;
}
//#endregion
export { render };
