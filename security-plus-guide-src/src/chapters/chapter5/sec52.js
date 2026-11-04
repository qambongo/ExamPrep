export function render() {
  return `
<div id="sec-sec52" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 5.0 <span class="sec-breadcrumb-sep">›</span> Objective 5.2</div>
  <div class="sec-obj-tag">5.2 — Explain the Elements of the Risk Management Process</div>
  <div class="sec-title">Risk Management Process</div>
  <div class="sec-lead">Risk management is the systematic process of identifying, analyzing, responding to, and monitoring risks. Domain 5.2 is heavily tested — expect calculation questions for SLE, ALE, and ARO, plus scenario questions asking you to identify the correct risk strategy or BIA metric.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Risk Identification</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Threat</div><p>Any potential danger that could exploit a vulnerability. Examples: hackers, natural disasters, malicious insiders, power failures.</p></div>
  <div class="card amber"><div class="card-title">Vulnerability</div><p>A weakness that could be exploited by a threat. Examples: unpatched software, weak passwords, open firewall ports, untrained employees.</p></div>
  <div class="card red"><div class="card-title">Risk</div><p>The probability that a threat exploits a vulnerability, combined with the potential impact. Risk = Threat × Vulnerability × Impact.</p></div>
  <div class="card green"><div class="card-title">Asset</div><p>Anything of value to the organization — data, hardware, software, reputation, intellectual property, people.</p></div>
</div>

<div class="h2">Risk Assessment Types</div>
<table><thead><tr><th>Type</th><th>Description</th><th>When Used</th></tr></thead><tbody>
<tr><td><strong>Ad Hoc</strong></td><td>Unscheduled, triggered by a specific event or concern</td><td>After a breach, when new threat emerges</td></tr>
<tr><td><strong>Recurring</strong></td><td>Scheduled at regular intervals</td><td>Annual security reviews, quarterly risk audits</td></tr>
<tr><td><strong>One-Time</strong></td><td>Performed once for a specific purpose</td><td>Pre-merger due diligence, new system deployment</td></tr>
<tr><td><strong>Continuous</strong></td><td>Ongoing monitoring with automated tools</td><td>SIEM-driven risk scoring, real-time threat detection</td></tr>
</tbody></table>

<div class="h2">Risk Analysis: Qualitative vs Quantitative</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Qualitative Analysis</div><p>Uses descriptive ratings: <strong>Low / Medium / High / Critical</strong>. Based on expert judgment and experience. Faster, doesn't require precise data. Used when exact financial values are hard to determine. Output: risk heat map or risk matrix.</p></div>
  <div class="card gold"><div class="card-title">Quantitative Analysis</div><p>Uses numerical values and formulas. Requires precise asset valuations and historical data. Output: dollar amounts for potential losses. More objective but time-intensive. Formulas: <strong>SLE, ALE, ARO</strong>.</p></div>
</div>

<div class="h2">Quantitative Risk Formulas</div>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>These formulas WILL appear on the exam. Memorize them.</strong></div>
<table><thead><tr><th>Formula</th><th>Name</th><th>Definition</th></tr></thead><tbody>
<tr><td><strong>SLE = AV × EF</strong></td><td>Single Loss Expectancy</td><td>Expected dollar loss from ONE occurrence of a risk event. AV = Asset Value, EF = Exposure Factor (% of asset lost)</td></tr>
<tr><td><strong>ALE = SLE × ARO</strong></td><td>Annual Loss Expectancy</td><td>Expected total annual dollar loss from a risk. ARO = Annual Rate of Occurrence (how often per year)</td></tr>
<tr><td><strong>ARO</strong></td><td>Annual Rate of Occurrence</td><td>How many times per year the event is expected to happen. 0.5 = once every 2 years. 2.0 = twice per year</td></tr>
<tr><td><strong>EF</strong></td><td>Exposure Factor</td><td>Percentage of asset value lost in a single event. 1.0 = total loss. 0.4 = 40% loss</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">📐</span><strong>Example calculation:</strong> A web server is valued at $400,000. A flood would destroy 25% of it (EF = 0.25). Floods happen once every 5 years (ARO = 0.2). <br><strong>SLE = $400,000 × 0.25 = $100,000</strong><br><strong>ALE = $100,000 × 0.2 = $20,000</strong><br>If flood insurance costs $15,000/year, it's worth buying (saves $5,000/year vs expected loss).</div>

<div class="h2">Risk Register</div>
<p>A <strong>risk register</strong> is a centralized document that tracks all identified risks, their assessments, owners, and treatment plans.</p>
<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody>
<tr><td>Risk ID</td><td>Unique identifier</td></tr>
<tr><td>Description</td><td>What is the risk?</td></tr>
<tr><td>Likelihood</td><td>Probability of occurrence (qualitative or quantitative)</td></tr>
<tr><td>Impact</td><td>Severity if the risk occurs</td></tr>
<tr><td>Risk Owner</td><td>Person accountable for managing this risk</td></tr>
<tr><td>Treatment Strategy</td><td>Mitigate / Transfer / Accept / Avoid</td></tr>
<tr><td>KRI</td><td>Key Risk Indicator — metric that signals the risk is increasing</td></tr>
<tr><td>Status</td><td>Open / In Progress / Resolved</td></tr>
</tbody></table>

<div class="h2">Risk Response Strategies</div>
<div class="cards">
  <div class="card green"><div class="card-title">Mitigate</div><p>Implement controls to reduce the likelihood or impact. Example: patch the vulnerability, add MFA, install firewalls. Most common strategy — reduces risk to an acceptable level.</p></div>
  <div class="card blue"><div class="card-title">Transfer</div><p>Shift the financial impact to a third party. Examples: cyber insurance, outsourcing to an MSSP. Does NOT eliminate the risk — only shifts who pays.</p></div>
  <div class="card amber"><div class="card-title">Accept</div><p>Acknowledge the risk and decide not to act. Used when cost of mitigation exceeds potential loss. Two forms: <strong>Exemption</strong> (formal exception from a policy) and <strong>Exception</strong> (temporary deviation from policy).</p></div>
  <div class="card red"><div class="card-title">Avoid</div><p>Eliminate the activity that creates the risk entirely. Example: discontinue a high-risk product line, don't collect data you don't need. Eliminates risk completely but may not be practical.</p></div>
</div>

<div class="h2">Risk Appetite &amp; Tolerance</div>
<table><thead><tr><th>Concept</th><th>Definition</th></tr></thead><tbody>
<tr><td><strong>Risk Appetite</strong></td><td>The overall AMOUNT of risk an organization is willing to accept in pursuit of objectives. A strategic decision made at the board level.</td></tr>
<tr><td><strong>Risk Tolerance</strong></td><td>The acceptable VARIATION around risk appetite — how far from appetite before action is required.</td></tr>
<tr><td><strong>Risk Threshold</strong></td><td>The specific level at which a risk triggers escalation or a mandatory response.</td></tr>
</tbody></table>
<div class="cards">
  <div class="card green"><div class="card-title">Expansionary</div><p>High risk appetite. Organization actively takes on risks to pursue growth. Startup mentality — speed and innovation over security caution. Willing to accept higher likelihood of incidents.</p></div>
  <div class="card blue"><div class="card-title">Conservative</div><p>Low risk appetite. Organization prioritizes stability and security over growth. Financial institutions, healthcare, government. Prefers to avoid or transfer risks.</p></div>
  <div class="card amber"><div class="card-title">Neutral</div><p>Balanced risk appetite. Accepts reasonable risks in line with industry norms. Neither aggressively risk-seeking nor overly cautious. Most mature enterprises.</p></div>
</div>

<div class="h2">Business Impact Analysis (BIA)</div>
<p>A BIA identifies critical business functions and quantifies the impact of disruptions to those functions. It drives recovery planning.</p>
<table><thead><tr><th>Metric</th><th>Full Name</th><th>Definition</th></tr></thead><tbody>
<tr><td><strong>RTO</strong></td><td>Recovery Time Objective</td><td>Maximum acceptable time to restore a system after disruption. If RTO = 4 hours, the system must be back online within 4 hours.</td></tr>
<tr><td><strong>RPO</strong></td><td>Recovery Point Objective</td><td>Maximum acceptable data loss measured in time. If RPO = 1 hour, backups must be no older than 1 hour — you can lose at most 1 hour of data.</td></tr>
<tr><td><strong>MTTR</strong></td><td>Mean Time To Repair</td><td>Average time required to repair a system after failure. Lower is better. Measures repair efficiency.</td></tr>
<tr><td><strong>MTBF</strong></td><td>Mean Time Between Failures</td><td>Average time a system operates before it fails. Higher is better. Measures reliability.</td></tr>
</tbody></table>
<div class="alert exam"><span class="alert-icon">⭐</span><strong>RTO vs RPO trap:</strong> RTO = time to recover the SYSTEM. RPO = maximum DATA LOSS acceptable. A bank might have RTO=4h (can be down 4 hours) but RPO=0 (can't lose ANY transactions). These are independent values set by business requirements, not technical capabilities.</div>
</div></div>
  `
}
