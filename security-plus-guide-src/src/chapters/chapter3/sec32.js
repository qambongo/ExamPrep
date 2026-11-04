export function render() {
  return `
<div id="sec-sec32" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.2</div>
  <div class="sec-obj-tag">3.2</div>
  <div class="sec-title">Security Considerations in Architecture Models</div>
  <div class="sec-lead">When designing secure architecture, multiple competing factors must be balanced. Each consideration shapes how security controls are selected and implemented.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Core Architecture Considerations</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Availability</div><p>Systems available when needed. Implement redundancy, failover, and disaster recovery strategies.</p></div>
  <div class="card blue"><div class="card-title">Resilience</div><p>Withstand disruptions and recover quickly. Requires data replication, monitoring, and incident response planning.</p></div>
  <div class="card gold"><div class="card-title">Cost</div><p>Balance security measure cost against the value they provide. Cost-effective solutions without compromising security.</p></div>
  <div class="card gold"><div class="card-title">Responsiveness</div><p>Detect and respond to threats in real-time. Key tools: SIEM, endpoint detection, automated response systems.</p></div>
  <div class="card green"><div class="card-title">Scalability</div><p>Security scales as systems grow — resources and protections adapt to increased loads and complexities.</p></div>
  <div class="card green"><div class="card-title">Ease of Deployment</div><p>Security architecture should be easy to deploy and manage, minimizing provisioning delays.</p></div>
  <div class="card amber"><div class="card-title">Risk Transference</div><p>Transfer risk to other parties (e.g., cyber insurance, outsourcing) to reduce financial impact of potential incidents.</p></div>
  <div class="card amber"><div class="card-title">Ease of Recovery</div><p>Business continuity and disaster recovery plans ensure systems can be quickly restored after failure.</p></div>
</div>

<div class="h2">Patch Management Considerations</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">✓</div><div class="def-content"><div class="def-title">Patch Availability</div><div class="def-text">Regular patching is critical. Security teams must ensure timely updates across all platforms.</div></div></div>
  <div class="def-block"><div class="def-num">!</div><div class="def-content"><div class="def-title">Inability to Patch</div><div class="def-text">Legacy systems may not be patchable. These require <strong>more stringent monitoring and access controls</strong> as compensating controls.</div></div></div>
</div>

<div class="alert warn"><div class="alert-icon">⚠️</div><strong>Power and Compute:</strong> Secure management of power supplies and compute resources ensures the stability and availability of critical infrastructure — a key architectural consideration.</div>
</div></div>
  `
}
