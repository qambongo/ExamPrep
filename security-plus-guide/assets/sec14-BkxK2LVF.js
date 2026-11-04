//#region src/chapters/chapter1/sec14.js
function render() {
	return `
<div id="sec-sec14" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 1.0 <span class="sec-breadcrumb-sep">›</span> Objective 1.4</div>
  <div class="sec-obj-tag">Objective 1.4</div>
  <div class="sec-title">Appropriate Cryptographic<br>Solutions</div>
  <div class="sec-lead">Cryptography is the science of protecting data through mathematical transformation. Understanding which algorithm, which key type, and which tool to use — and why — is heavily tested. This section covers PKI, encryption levels, hashing, and the full certificate lifecycle.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Public Key Infrastructure (PKI)</div>
<div class="diag"><pre>
  PKI HIERARCHY:
  ─────────────────────────────────────────────────────────
  Root CA (offline, air-gapped, highest trust)
      │
      ├── Intermediate CA (online, issues certs to below)
      │       │
      │       ├── End-Entity Certificate (website, user, device)
      │       └── End-Entity Certificate
      │
      └── Intermediate CA
              │
              └── End-Entity Certificate

  ASYMMETRIC KEY PAIR:
  Public Key  ← share freely → used to ENCRYPT or VERIFY signature
  Private Key ← keep secret  → used to DECRYPT or CREATE signature

  Rule: Encrypt with PUBLIC key → Decrypt with PRIVATE key
        Sign with PRIVATE key → Verify with PUBLIC key
</pre></div>

<div class="tbl-wrap"><table>
<thead><tr><th>PKI Component</th><th>What It Is</th><th>Security Note</th></tr></thead>
<tbody>
<tr><td>Public Key</td><td>Shared openly. Encrypts data or verifies digital signatures</td><td>Anyone can have it — no security risk if exposed</td></tr>
<tr><td>Private Key</td><td>Kept secret by owner. Decrypts data or creates digital signatures</td><td>NEVER share. Compromise = identity theft and data exposure</td></tr>
<tr><td>Key Escrow</td><td>Keys stored with trusted third party for recovery purposes</td><td>Risk: creates a single point of failure; target for attackers</td></tr>
</tbody>
</table></div>

<div class="h2 gold">Encryption Levels</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Level</th><th>What It Encrypts</th><th>Example Tool</th></tr></thead>
<tbody>
<tr><td>Full-Disk (FDE)</td><td>Entire drive including OS</td><td>BitLocker (Windows), FileVault (macOS)</td></tr>
<tr><td>Partition</td><td>Specific disk partition only</td><td>VeraCrypt partition mode</td></tr>
<tr><td>File</td><td>Individual files or folders</td><td>EFS, PGP, VeraCrypt</td></tr>
<tr><td>Volume</td><td>Logical drive/volume</td><td>VeraCrypt volumes, encrypted VM disks</td></tr>
<tr><td>Database</td><td>Entire database or specific tables</td><td>Transparent Data Encryption (TDE)</td></tr>
<tr><td>Record</td><td>Individual fields within a database</td><td>Field-level encryption in SQL</td></tr>
<tr><td>Transport</td><td>Data in transit over networks</td><td>TLS (HTTPS), IPSec, SSH</td></tr>
</tbody>
</table></div>

<div class="h2">Symmetric vs. Asymmetric Encryption</div>
<div class="grid-2">
  <div class="card blue">
    <div class="card-title">Symmetric Encryption</div>
    <p><strong>Same key</strong> for encrypt and decrypt. Fast — used for bulk data encryption. The challenge: how do you securely share the key?<br><br><strong>Algorithms:</strong> AES (256-bit = gold standard), DES (56-bit, obsolete), 3DES, ChaCha20<br><br><strong>AES-128:</strong> Fast, secure for most uses<br><strong>AES-256:</strong> Maximum security, quantum-resistant</p>
  </div>
  <div class="card amber">
    <div class="card-title">Asymmetric Encryption</div>
    <p><strong>Different keys</strong> for encrypt/decrypt. Slower — used for key exchange and digital signatures, not bulk data. Solves the key distribution problem.<br><br><strong>Algorithms:</strong> RSA (2048-bit minimum), ECC (smaller keys, same strength), Diffie-Hellman (key exchange only)<br><br><strong>RSA-2048:</strong> Current standard<br><strong>RSA-4096:</strong> Maximum RSA security</p>
  </div>
</div>

<div class="alert exam"><span class="alert-icon">⭐</span><strong>How TLS works in practice:</strong> TLS uses ASYMMETRIC encryption to exchange a symmetric key, then switches to SYMMETRIC encryption for the session. Asymmetric = slow but solves key distribution. Symmetric = fast but requires shared key. Together they give you both security and performance.</div>

<div class="h2">Key Exchange — Diffie-Hellman</div>
<div class="diag"><pre>
  DIFFIE-HELLMAN KEY EXCHANGE (conceptual):
  ──────────────────────────────────────────
  Alice                              Bob
    │                                 │
    │── (public params shared) ──────►│
    │◄─ (public params shared) ───────│
    │                                 │
    │   Each combines their           │
    │   private value with the        │
    │   other's public value          │
    │                                 │
    Both arrive at the SAME shared secret
    WITHOUT ever transmitting it directly
    
  ECDH (Elliptic Curve DH) = same concept, smaller keys, stronger security
  
  Perfect Forward Secrecy (PFS): New key generated for EACH session
  → Compromise of long-term key doesn't compromise past sessions
</pre></div>

<div class="h2">Cryptographic Tools</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Tool</th><th>What It Is</th><th>Primary Use</th></tr></thead>
<tbody>
<tr><td>TPM (Trusted Platform Module)</td><td>Hardware chip soldered to motherboard</td><td>Secure key storage, Secure Boot, BitLocker. Keys can't be extracted even if HDD removed.</td></tr>
<tr><td>HSM (Hardware Security Module)</td><td>Physical device or PCI card</td><td>Enterprise key management, CA private key storage. FIPS 140-2 validated. Used by banks, CAs.</td></tr>
<tr><td>KMS (Key Management System)</td><td>Centralized software/service for key lifecycle</td><td>Create, rotate, revoke, audit encryption keys across an enterprise. AWS KMS, Azure Key Vault.</td></tr>
<tr><td>Secure Enclave</td><td>Isolated processor within main CPU</td><td>Process sensitive data (biometrics, payment) in isolation from main OS. Intel SGX, Apple Secure Enclave.</td></tr>
</tbody>
</table></div>

<div class="h2 gold">Obfuscation Techniques</div>
<div class="cards">
  <div class="card blue">
    <div class="card-icon">🖼</div>
    <div class="card-title">Steganography</div>
    <p>Hides data INSIDE other innocent-looking data (images, audio, text). The existence of the message is concealed — not just the content. Used for covert communication and watermarking.</p>
  </div>
  <div class="card green">
    <div class="card-icon">🔢</div>
    <div class="card-title">Tokenization</div>
    <p>Replaces sensitive data with a random token. The token has no mathematical relationship to the original. Mapping stored in secure vault. Used heavily in payment processing (PCI DSS).</p>
  </div>
  <div class="card amber">
    <div class="card-icon">👁</div>
    <div class="card-title">Data Masking</div>
    <p>Substitutes sensitive data with realistic but fake data. Preserves format/structure. Used in dev/test environments where real data shouldn't be exposed but data patterns are needed.</p>
  </div>
</div>

<div class="alert info"><span class="alert-icon">💡</span><strong>Tokenization vs. Encryption:</strong> Encrypted data can be mathematically reversed with the right key. A token has NO mathematical relationship to the original — you need the vault/mapping to reverse it. Tokenization is often preferred for PCI DSS because tokens are useless to attackers even if stolen.</div>

<div class="h2">Hashing, Salting, and Key Stretching</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Technique</th><th>Purpose</th><th>How It Works</th><th>Common Algorithms</th></tr></thead>
<tbody>
<tr><td>Hashing</td><td>Integrity verification, password storage</td><td>Input → fixed-length hash. One-way, irreversible. Same input always produces same hash.</td><td>SHA-256, SHA-512, MD5 (obsolete)</td></tr>
<tr><td>Salting</td><td>Prevent rainbow table attacks on passwords</td><td>Random value (salt) added to password before hashing. Identical passwords produce different hashes.</td><td>Used with bcrypt, PBKDF2, Argon2</td></tr>
<tr><td>Key Stretching</td><td>Make weak passwords computationally expensive to crack</td><td>Apply hash function thousands/millions of times. Each iteration adds time to brute-force attempts.</td><td>PBKDF2, bcrypt, Argon2</td></tr>
</tbody>
</table></div>

<div class="h2">Digital Signatures</div>
<div class="diag"><pre>
  HOW DIGITAL SIGNATURES WORK:
  ──────────────────────────────────────────────────────
  SIGNING (sender):
    Document → Hash function → Hash value
    Hash value → Encrypted with PRIVATE key → Digital Signature
    Document + Digital Signature = Signed Document

  VERIFYING (receiver):
    Signed Document split into: Document + Digital Signature
    Digital Signature → Decrypted with SENDER'S PUBLIC KEY → Hash A
    Document → Hash function → Hash B
    If Hash A == Hash B → ✅ Authentic + Unaltered
    If Hash A ≠ Hash B → ❌ Tampered or wrong signer

  Digital signatures provide:
    ✓ Authentication (only private key holder could sign)
    ✓ Integrity (hash detects any modification)
    ✓ Non-repudiation (signer cannot deny signing)
</pre></div>

<div class="h2">Certificate Lifecycle</div>
<div class="tbl-wrap"><table>
<thead><tr><th>Component</th><th>Role</th></tr></thead>
<tbody>
<tr><td>Certificate Authority (CA)</td><td>Trusted entity that issues and signs digital certificates. Validates identity of requestor. Root CAs (self-signed, offline) → Intermediate CAs (online, issue to end-entities).</td></tr>
<tr><td>Certificate Signing Request (CSR)</td><td>Entity generates key pair, sends CSR (with public key + org info) to CA. CA validates, signs, returns certificate.</td></tr>
<tr><td>Self-Signed Certificate</td><td>Signed by the entity itself, not a trusted CA. Browsers show warnings. OK for internal/dev use. NOT for public-facing production.</td></tr>
<tr><td>Third-Party Certificate</td><td>Issued by trusted CA (DigiCert, Let's Encrypt). Browsers trust automatically. Required for public websites.</td></tr>
<tr><td>Wildcard Certificate</td><td>*.example.com covers ALL subdomains. One cert for www, mail, shop, api.example.com. Single point of failure if compromised.</td></tr>
<tr><td>Root of Trust</td><td>The foundational trusted component (usually TPM/hardware) that establishes the chain of trust for Secure Boot and certificate verification.</td></tr>
<tr><td>CRL (Certificate Revocation List)</td><td>Published list of revoked certificate serial numbers. Client downloads periodically and checks. Can be large and stale between updates.</td></tr>
<tr><td>OCSP (Online Certificate Status Protocol)</td><td>Real-time check of a single certificate's validity. Client queries OCSP responder. Faster than CRL. OCSP Stapling has server include OCSP response to reduce latency.</td></tr>
</tbody>
</table></div>

<div class="h2">Blockchain and Open Public Ledger</div>
<div class="grid-2">
  <div class="card green">
    <div class="card-title">Blockchain</div>
    <p>Distributed ledger where each block contains data + hash of previous block. Tampering with any block breaks the chain, making it detectable. Decentralized — no single point of failure or control. Used in: cryptocurrency, supply chain, smart contracts.</p>
  </div>
  <div class="card blue">
    <div class="card-title">Open Public Ledger</div>
    <p>Core property of public blockchains — ALL transactions are visible to anyone. Provides transparency and auditability. Anyone can verify any transaction without trusting a central authority. Trade-off: no privacy for transaction details.</p>
  </div>
</div>

</div></div>
  `;
}
//#endregion
export { render };
