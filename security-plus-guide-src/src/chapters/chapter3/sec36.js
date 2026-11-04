export function render() {
  return `
<div id="sec-sec36" class="section">
<div class="sec-hero">
  <div class="sec-breadcrumb">Domain 3.0 <span class="sec-breadcrumb-sep">›</span> Section 3.6</div>
  <div class="sec-obj-tag">3.6</div>
  <div class="sec-title">High Availability &amp; Resilience</div>
  <div class="sec-lead">HA, disaster recovery sites, backup strategies, capacity planning, and testing ensure critical systems remain operational and recoverable during and after failures.</div>
</div>
<div class="sec-divider"></div>
<div class="sec-body">

<div class="h2">Load Balancing vs. Clustering</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">LB</div><div class="def-content"><div class="def-title">Load Balancing</div><div class="def-text">Distributes incoming traffic across multiple servers. Methods: <strong>Round Robin</strong> (sequential), <strong>Least Connections</strong> (fewest active), <strong>Weighted</strong> (by capacity). Benefits: scalability, fault tolerance.</div></div></div>
  <div class="def-block"><div class="def-num">CL</div><div class="def-content"><div class="def-title">Clustering</div><div class="def-text">Multiple servers work as a unified system. <strong>Active/Passive</strong>: one active + standby. <strong>Active/Active</strong>: all nodes active, share load. Benefits: fault tolerance, improved performance.</div></div></div>
</div>

<div class="h2">Disaster Recovery Site Types</div>
<div class="tbl-wrap"><table>
  <tr><th>Site Type</th><th>Description</th><th>Recovery Time</th><th>Cost</th><th>Use Case</th></tr>
  <tr><td><strong>Hot Site</strong></td><td>Fully operational, same equipment, real-time data replication</td><td><span class="tag green">Immediate</span></td><td>Highest</td><td>Financial, healthcare — zero tolerance for downtime</td></tr>
  <tr><td><strong>Warm Site</strong></td><td>Partially equipped, some pre-configured hardware, no real-time replication</td><td><span class="tag amber">Hours–Days</span></td><td>Moderate</td><td>Businesses that can tolerate some downtime</td></tr>
  <tr><td><strong>Cold Site</strong></td><td>Basic facility (power, cooling, space) — no equipment or data</td><td><span class="tag red">Days–Weeks</span></td><td>Lowest</td><td>Non-critical systems, cost-sensitive organizations</td></tr>
</table></div>
<div class="alert exam"><div class="alert-icon">🎯</div><strong>Exam Tip:</strong> Hot = most expensive, fastest recovery. Cold = cheapest, slowest. Warm = balance. These site types are a near-guaranteed exam question.</div>

<div class="h2">Geographic Dispersion &amp; Platform Diversity</div>
<div class="cards">
  <div class="card blue"><div class="card-title">Geographic Dispersion</div><p>Distribute data centers across multiple physical locations. Reduces risk from local disasters. Challenge: data sovereignty compliance across jurisdictions.</p></div>
  <div class="card green"><div class="card-title">Platform Diversity</div><p>Use different hardware, software, and cloud platforms. Avoids vendor lock-in, improves fault tolerance. Example: AWS + Azure + on-premises.</p></div>
  <div class="card purple"><div class="card-title">Multi-Cloud</div><p>Use multiple cloud providers. Benefits: reduced downtime risk, compliance flexibility, cost optimization. Challenge: complex management, data transfer costs.</p></div>
  <div class="card amber"><div class="card-title">COOP</div><p>Continuity of Operations — ensures critical operations continue during disruptions. Involves DR, business continuity, and crisis management plans.</p></div>
</div>

<div class="h2">Capacity Planning</div>
<div class="cards">
  <div class="card blue"><div class="card-title">People</div><p>Sufficient trained staff to monitor and manage HA systems. Clear roles for administrators and security teams during incidents.</p></div>
  <div class="card gold"><div class="card-title">Technology</div><p>Monitoring tools, backup software, failover mechanisms. Automation reduces human error and improves response times.</p></div>
  <div class="card green"><div class="card-title">Infrastructure</div><p>Redundant power, networking, and servers. Scalable infrastructure to meet increasing demands without performance compromise.</p></div>
</div>

<div class="h2">Testing Methods</div>
<div class="tbl-wrap"><table>
  <tr><th>Test Type</th><th>Description</th><th>Characteristics</th></tr>
  <tr><td><strong>Tabletop Exercise</strong></td><td>Discussion-based simulation — walk through hypothetical disaster scenarios</td><td>No system interruption, low cost, tests decision-making and coordination</td></tr>
  <tr><td><strong>Failover Testing</strong></td><td>Intentionally trigger primary system failure to verify backup takes over</td><td>Tests actual technical failover mechanisms</td></tr>
  <tr><td><strong>Simulation</strong></td><td>Live testing under controlled but realistic disaster scenarios</td><td>Involves actual systems and technology, more comprehensive</td></tr>
  <tr><td><strong>Parallel Processing</strong></td><td>Run backup system alongside primary to verify it can immediately take over</td><td>Both systems run simultaneously; backup in standby</td></tr>
</table></div>

<div class="h2">Backup Types</div>
<div class="tbl-wrap"><table>
  <tr><th>Backup Type</th><th>What Is Copied</th><th>Speed</th><th>Storage Used</th><th>Restore Complexity</th></tr>
  <tr><td><strong>Full Backup</strong></td><td>All data, every time</td><td><span class="tag red">Slowest</span></td><td>Highest</td><td><span class="tag green">Simple</span> — one set</td></tr>
  <tr><td><strong>Incremental</strong></td><td>Data changed since the <em>last backup</em> (full or incremental)</td><td><span class="tag green">Fastest</span></td><td>Lowest</td><td>Complex — need all incrementals</td></tr>
  <tr><td><strong>Differential</strong></td><td>Data changed since the <em>last full backup</em></td><td>Moderate</td><td>Moderate (grows over time)</td><td>Moderate — need last full + latest diff</td></tr>
  <tr><td><strong>Snapshot</strong></td><td>Point-in-time copy recording changes since last snapshot</td><td>Fast</td><td>Low</td><td>Fast recovery, minimal performance impact</td></tr>
</table></div>

<div class="h2">Recovery Objectives</div>
<div class="grid-2">
  <div class="def-block"><div class="def-num">RTO</div><div class="def-content"><div class="def-title">Recovery Time Objective</div><div class="def-text">The <strong>maximum time</strong> a system can be down before it must be restored. Defines how quickly recovery must happen.</div></div></div>
  <div class="def-block"><div class="def-num">RPO</div><div class="def-content"><div class="def-title">Recovery Point Objective</div><div class="def-text">The <strong>maximum acceptable data loss</strong> measured in time. Defines how old the restored data can be (how much data can be lost).</div></div></div>
</div>
<div class="alert key"><div class="alert-icon">✅</div><strong>Replication:</strong> Synchronous = always in sync (no data loss, higher cost). Asynchronous = copied at intervals (slight data loss possible, lower cost). <strong>Journaling:</strong> Logs all changes to data — allows reconstruction to last known good state.</div>

<div class="h2">Power Systems</div>
<div class="tbl-wrap"><table>
  <tr><th>System</th><th>Description</th><th>Key Detail</th></tr>
  <tr><td><strong>Generator</strong></td><td>Backup power for extended outages</td><td>Diesel or natural gas. Requires regular testing and fuel maintenance.</td></tr>
  <tr><td><strong>Standby UPS</strong></td><td>Activates when main power fails</td><td>Basic backup power</td></tr>
  <tr><td><strong>Line-Interactive UPS</strong></td><td>Power conditioning + backup for voltage fluctuations</td><td>Moderate protection</td></tr>
  <tr><td><strong>Double Conversion UPS</strong></td><td>Converts power AC→DC→AC continuously</td><td><span class="tag green">Highest protection</span> — no transfer time</td></tr>
</table></div>
</div></div>
  `
}
