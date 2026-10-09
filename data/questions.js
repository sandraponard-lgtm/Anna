window.QS = [
{
"n": 1,
"t": "HEA",
"k": 1,
"q": "After resolving identification rule gaps that caused duplicate CIs from a new discovery source, a CMDB Administrator needs a structured approach to remediate existing duplicates and establish governance controls.\n\nWhat does the Administrator use?",
"e": "The Administrator uses a CI Playbook from the Data Foundations Dashboard, which structures remediation into ordered phases that progress from analyzing affected CIs through resolving duplicate pairs to establishing governance controls that prevent recurrence. The Playbook addresses both the remaining data quality problem and the need for ongoing governance after the identification rule fix. It tracks progress across phases, enabling the Administrator to resume work between sessions and demonstrate remediation advancement to stakeholders.\n\nThe Administrator does not use the merge wizard. De-duplication tasks and the merge wizard resolve individual duplicate pairs without providing the broader governance framework the scenario requires. Merging handles the tactical cleanup of existing duplicates but does not include analysis of affected CI patterns or establishment of controls that prevent recurrence from future discovery source changes. The Playbook incorporates merge operations as one phase within its larger structured workflow.\n\nThe Administrator does not use CI class identification rule adjustments because the scenario states that the identification rule gaps have already been resolved. Further rule changes at this point do not remediate the duplicate CIs that already exist in the CMDB from the earlier configuration gap. Identification rules govern how the IRE processes future incoming data, and since the rules are already corrected, additional adjustments would not address the existing duplicates or the need for a structured governance approach.\n\nThe Administrator does not use a CMDB Health correctness score recalculation. The correctness score provides an aggregate health metric across CI classes but does not guide remediation or establish governance controls. Scheduling more frequent recalculation updates the displayed score without resolving the existing duplicate CIs or providing the structured workflow the Administrator needs. The score reflects the current state of the CMDB but offers no remediation path or governance framework for addressing the duplicates.",
"r": [
[
"CSDM Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/csdm-data-foundations-dashboard.html"
],
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html"
],
[
"Detecting duplicate CIs",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/id-detect-dup-ci.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
]
],
"o": [
"CI class identification rule adjustments",
"The merge wizard",
"A CI Playbook",
"A CMDB Health correctness score recalculation"
],
"a": [
2
]
},
{
"n": 2,
"t": "M360",
"k": 1,
"q": "A CMDB team uses CMDB 360 and wants to monitor aggregate metrics across all CI data, including attribute‑level source information, CI coverage, conflicts, and reconciliation results. They need these metrics to remain current for operational insights.\n\nWhich functionality helps the team meet the requirements?",
"e": "The Multisource Dashboard Analytics Population scheduled job helps meet the requirements. This scheduled job is designed specifically to keep CMDB 360 analytics current. It calculates aggregate statistics across all configured discovery sources, ensuring that metrics represent the full multisource CMDB landscape. It also updates the CMDB 360 dashboard landing page, keeping insights fresh for operational monitoring. In addition, it provides detailed visibility into attribute‑level source data, CI coverage levels, data conflicts, and reconciliation outcomes, all of which the CMDB team needs to monitor. Since the job continuously populates and refreshes these analytics, it is the only functionality that satisfies the requirement for up‑to‑date, comprehensive CMDB 360 metrics.\n\nThe Completeness Score Calculation does not help meet the requirements. This job focuses only on the percentage of required, recommended, and populated fields for each CI. While this is important for CMDB Health scoring, it does not analyze multisource data, does not generate attribute‑level source insights, and does not populate the CMDB 360 dashboard. Therefore, it does not meet the need for continuous, aggregated CMDB 360 analytics.\n\nThe Correctness Score Calculation scheduled job does not help meet the requirements. This job evaluates CI accuracy based on three sub‑metrics: Staleness; how recently a CI was updated, Orphan; missing or inconsistent relationships, and Duplicate; duplicate CIs. It returns a percentage of overall data correctness, but it does not calculate multisource statistics, does not update the CMDB 360 dashboard, and does not provide reconciliation or attribute‑level source insights.\n\nThe CMDB 360 Saved Queries does not help meet the requirements. Saved Queries allow teams to store and run common CMDB 360 queries for analysis or troubleshooting, but they do not generate or refresh metrics on the CMDB 360 dashboard. They do not calculate aggregate statistics across sources and do not provide continuous operational insights.",
"r": [
[
"Components installed with CMDB Workspace",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/installed-with-cmdb-workspace.html#:~:text=7%20Days%20chart.-,Multisource%20Dashboard%20Analytics%20Population,-Runs%20daily%20to"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
],
[
"CMDB 360 Saved Queries",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb360-exp-cmdb-workspace.html#:~:text=of%20the%20attribute.-,Saved%20queries,-The%20Saved%20queries"
]
],
"o": [
"Multisource Dashboard Analytics Population",
"Correctness Score Calculation",
"Completeness Score Calculation",
"CMDB 360 Saved Queries"
],
"a": [
0
]
},
{
"n": 3,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator wants to understand how Foundation Dashboard Playbooks are organized before using them to address data quality issues.\n\nWhat is the structure of Playbooks?",
"e": "The structure of Playbooks is sequential steps organized into phases that guide users through identifying issues and implementing solutions. Playbooks follow a sequential format ensuring proper dependency order between remediation activities. Each step builds on previous ones, preventing administrators from attempting fixes before understanding the underlying problem. This structured approach ensures consistent remediation outcomes regardless of administrator experience level. The phased organization helps teams track progress through complex improvement initiatives.\n\nPlaybooks are not structured as unordered lists that users apply in any order. Playbooks provide sequenced steps where earlier actions might be prerequisites for later steps. Skipping ahead might result in ineffective fixes or wasted effort if root causes are not addressed first. The sequential design reflects real-world remediation workflows where diagnosis must precede treatment. Random application of fixes without understanding dependencies often creates new problems while failing to resolve original issues.\n\nPlaybooks are not structured as database scripts that automatically execute. Playbooks guide users through manual and semi-automated steps rather than running unsupervised database modifications. Automated scripts without human oversight might damage CMDB data integrity or delete valid information. Playbooks keep administrators in control of each remediation decision while providing guidance on what actions to take. This human-in-the-loop approach ensures that organizational context influences remediation choices.\n\nPlaybooks are not structured as links to external vendor documentation. Playbooks provide guidance within the ServiceNow platform rather than redirecting to external third-party resources. All Playbook content and steps remain accessible within the Foundation Dashboard interface. External documentation might supplement understanding, but Playbooks themselves contain complete instructions for remediation. Keeping guidance internal ensures consistency and enables progress tracking within the platform without requiring users to navigate between multiple resources or external websites.",
"r": [
[
"Monitor health in CSDM and CMDB Data Foundations Dashboards",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/csdm-cmdb-foundations-dashboards.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
]
],
"o": [
"Unordered fix lists that can be applied in any order",
"Database scripts that automatically execute against CMDB tables",
"Sequential steps organized into phases that guide issue resolution",
"Links to external vendor documentation for implementation"
],
"a": [
2
]
},
{
"n": 4,
"t": "ING",
"k": 1,
"q": "An organization's security policies prevent inbound internet connections to their data center. The IT team needs to perform Discovery on on-premises servers and integrate with an Oracle database.\n\nWhich role does the MID Server play?",
"e": "The Management, Instrumentation, and Discovery (MID) Server initiates outbound connections to ServiceNow and executes Discovery probes and database queries within the protected network. MID Server polls ServiceNow for work using outbound HTTPS connections, eliminating the need for inbound firewall rules while enabling secure access to internal resources behind the corporate firewall. This outbound-only architecture complies with strict security policies while providing full integration capabilities for Discovery and database connectivity to on-premises systems.\n\nThe MID Server does not require inbound firewall rules to operate correctly. MID Server uses outbound-only communication by polling ServiceNow for instructions, which complies with security policies that prohibit inbound internet connections to the data center and eliminates external attack vectors. The polling mechanism ensures the MID Server receives work requests from ServiceNow without exposing any internal network ports to incoming connections from the internet.\n\nThe MID Server does not act as a VPN endpoint that tunnels traffic between ServiceNow and on-premises systems. MID Server is an application that executes specific ServiceNow tasks within the local network and communicates results back to ServiceNow, rather than creating a general-purpose network tunnel for arbitrary traffic. The MID Server only handles ServiceNow-specific operations like Discovery and database queries, not general network routing that a VPN does provide for other applications.\n\nThe MID Server does not replicate the CMDB locally for offline access to avoid constant network connectivity. MID Server executes Discovery probes and integration tasks on demand, sending results back to ServiceNow where Configuration Management Database (CMDB) data is stored and maintained centrally in the cloud instance. Local data storage on the MID Server is limited to temporary task data and credentials needed for execution, not a copy of the CMDB for offline operations.",
"r": [
[
"MID Server",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/mid-server/concept/mid-server-landing.html"
],
[
"Exploring MID Server",
"https://www.servicenow.com/docs/r/servicenow-platform/mid-server/explore-mid-server.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/products/discovery.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"The MID Server makes outbound connections to ServiceNow and run probes inside the protected network.",
"The MID Server requires inbound firewall rules to receive instructions from ServiceNow.",
"The MID Server can act as a VPN endpoint tunneling traffic between ServiceNow and on-premises systems.",
"The MID Server replicates the CMDB locally for offline access to avoid constant network connectivity."
],
"a": [
0
]
},
{
"n": 5,
"t": "DM",
"k": 1,
"q": "An organization completed initial CMDB population with Discovery and Service Graph Connectors. Six months later, the Configuration Manager notices health scores declining and CI data becoming stale.\n\nWhat could have prevented this data quality degradation?",
"e": "The organization should have established ongoing health monitoring and improvement processes to prevent data quality degradation. Operationalization transforms Configuration Management Database (CMDB) from a project deliverable into a continuously maintained capability. Without these ongoing activities, data quality degrades as infrastructure changes occur without corresponding CMDB updates. Ongoing processes include scheduled health reviews, data stewardship accountability, automated remediation workflows, and continuous Discovery runs. These activities ensure CMDB data remains synchronized with actual infrastructure as changes occur through deployment, retirement, and configuration modification activities.\n\nCompleting technical implementation does not prevent degradation. Plugin activation is an implementation task, not an operational sustainability practice. Technical completeness does not maintain data quality over time. Activating all plugins creates the technical foundation for CMDB but does not establish the people processes and governance activities required to sustain accuracy. Organizations need ongoing health monitoring reviews, scheduled audit cycles, data stewardship accountability, and continuous improvement processes beyond initial technical deployment to prevent gradual erosion of data quality.\n\nTransferring ownership without ongoing processes does not prevent degradation. The receiving team needs established governance processes to maintain data quality effectively. Ownership transfer alone represents an administrative change in responsibility but does not create the operational structures needed for continuous improvement. Without implementing health monitoring dashboards, scheduled audits, data stewardship responsibilities, and remediation workflows, the new team lacks the infrastructure to sustain CMDB accuracy. Data quality degradation occurs when organizations treat CMDB as a static deliverable rather than an operational system requiring active governance.\n\nSwitching to passive monitoring does not prevent degradation. Passive monitoring allows data quality to degrade without intervention. Active processes are required for continuous quality maintenance. Passive monitoring provides visibility into declining health scores but does not trigger corrective action to address discovered issues. Organizations need automated remediation workflows, scheduled cleanup activities, and proactive data governance to maintain quality standards. Without active intervention processes, monitoring becomes an early warning system that is frequently ignored, allowing preventable degradation to accumulate over time until CMDB data becomes unreliable.",
"r": [
[
"CMDB schema model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_ConfigurationManagementDatabase.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"Document implementation and switch to passive monitoring",
"Transfer ownership and discontinue project governance",
"Establish ongoing monitoring and improvement processes",
"A complete technical implementation with all plugins"
],
"a": [
2
]
},
{
"n": 7,
"t": "DM",
"k": 1,
"q": "A CMDB Administrator wants to reduce manual effort on routine data quality tasks: cleaning up stale records, validating CI data with owners, and correcting non-compliant attributes.\n\nWhich capability automates these governance activities?",
"e": "Data Manager automates these governance activities. Data Manager provides policy-based automation for ongoing Configuration Management Database (CMDB) governance including data validation workflows, stale record cleanup, and attribute correction. Rather than manually reviewing stale configuration items (CIs), validating data with owners, and fixing non-compliant attributes, the manager can configure Data Manager policies to perform these tasks automatically on scheduled intervals.\n\nDiscovery Schedules do not automate these governance tasks. Discovery Schedules control when and how often CI data is refreshed from infrastructure sources, but they do not provide capabilities for attestation, cleanup policies, or remediation of non-compliant data. While Discovery maintains data currency by refreshing CI attributes from infrastructure, it does not validate data with owners, remove stale records based on lifecycle state, or correct attribute values that violate organizational standards.\n\nCMDB Health Dashboard does not automate these governance tasks. The dashboard provides visibility into data quality metrics and scores but does not execute automated actions to remediate issues, clean up records, or manage data attestation workflows. While the dashboard identifies stale CIs and shows health metrics, it does not automatically clean up those records or engage data owners for validation. \n\nIdentification and Reconciliation Engine (IRE) does not automate these governance tasks. IRE focuses on matching incoming data to existing CIs and reconciling attribute values from multiple sources, but it does not provide policy-based automation for lifecycle management or attestation. While IRE prevents duplicates and merges data from multiple sources during ingestion, it does not clean up stale records, engage data owners for validation, or correct attribute values that violate compliance requirements.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/bundle/xanadu-servicenow-platform/page/product/configuration-management/task/create-data-manager-policy.html"
],
[
"Schedule a horizontal Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/task/t_CreateADiscoverySchedule.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Identification and Reconciliation engine (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/ire.html"
]
],
"o": [
"CMDB Health Dashboard",
"Discovery Schedules",
"Identification and Reconciliation Engine",
"Data Manager"
],
"a": [
3
]
},
{
"n": 8,
"t": "QB",
"k": 1,
"q": "A Change Manager reviews a change request for a critical application server. Before approving the maintenance window, the Change Manager needs to trace infrastructure relationships to understand the full blast radius.\n\nWhat does the Change Manager do?",
"e": "The Change Manager explores the configuration item (CI) dependency graph with Unified Map to visually trace impact paths. Unified Map renders Configuration Management Database (CMDB) relationship data as an interactive graphical diagram where users click through nodes to expand upstream and downstream connections at each level. The Change Manager traces dependency paths from the application server upward to consuming business services and downward to supporting storage and network components. This visual exploration reveals the full blast radius of the maintenance window across service and infrastructure layers without requiring query construction or tabular data interpretation.\n\nThe Change Manager does not retrieve related CIs with Query Builder to produce a filtered result set. Query Builder constructs complex CMDB queries across multiple CI classes and returns results in tabular format for analysis and reporting. Tabular results list matching CIs in rows and columns but do not provide the interactive graphical navigation needed to trace dependency paths across multiple relationship levels. The Change Manager needs to expand connections visually at each level rather than interpret flat query output to understand the multi-layered impact of the maintenance window.\n\nThe Change Manager does not run a discovery scan with Service Mapping to generate the application service topology. Service Mapping runs active discovery scans using probes and sensors to detect application services and create service maps from live infrastructure data. The Change Manager needs to examine existing CMDB relationships immediately rather than initiate a discovery process that scans infrastructure components. Service Mapping discovers and populates service topology data, while Unified Map visualizes the relationship data that already exists in the CMDB for on-demand dependency analysis.\n\nThe Change Manager does not review the relationship completeness score with CMDB Health Dashboard for the server CI class. The Health Dashboard displays aggregate health metrics including completeness, correctness, and compliance scores across CI classes and data sources. These scores indicate the overall quality posture of CMDB data rather than showing individual CI dependency paths. The Change Manager needs to trace specific upstream and downstream connections for a single server CI, which requires the interactive dependency exploration that Unified Map provides rather than class-level health metrics.",
"r": [
[
"Unified Map",
"https://www.servicenow.com/docs/r/servicenow-platform/unified-map/cmdb-workspace-unified-map.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-query-builder-landing-page.html"
],
[
"Exploring Service Mapping",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/service-mapping-get-started.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
]
],
"o": [
"Explore the CI dependency graph with Unified Map to visually trace impact paths",
"Run a discovery scan with Service Mapping to generate the application service topology",
"Retrieve related CIs with Query Builder to produce a filtered result set",
"Review the relationship completeness score with CMDB Health Dashboard for the server CI class"
],
"a": [
0
]
},
{
"n": 9,
"t": "DM",
"k": 1,
"q": "A team member needs to configure policy-based CI validation rules, manage exclusion criteria, and oversee recurring governance-driven data review processes within the CMDB.\n\nWhich least-privilege role does the team member need?",
"e": "The team member needs the Data Manager Administrator [data_manager_admin] role. This role provides full access to configure Data Manager policies that define validation criteria applied to configuration items (CI) records during recurring certification cycles. The administrator sets exclusion criteria to scope which CIs are evaluated and manages attestation workflows where data stewards review flagged records. Data Manager policies enforce governance standards across the Configuration Management Database (CMDB) through scheduled evaluation runs that validate CI data against defined criteria.\n\nThe team member does not need the CMDB Multi-source Administrator [cmdb_ms_admin] role. This role governs how attribute-level data from multiple discovery sources is reconciled, merged, and prioritized within the CMDB. Multi-source administration controls source precedence and conflict resolution through CMDB 360 rather than policy-based validation rules. The scope of this role centers on data ingestion and reconciliation behavior, not on defining certification criteria or managing attestation workflows.\n\nThe team member does not need the CMDB De-duplication Administrator [cmdb_dedup_admin] role. This role manages duplicate detection tasks and remediation workflows that identify and resolve redundant CI records within the CMDB. De-duplication focuses on consolidating records that represent the same CI from different sources rather than validating CI attributes against governance policies. This role improves data integrity by reducing record overlap but does not administer certification cycles or attestation processes.\n\nThe team member does not need the CMDB Editor [sn_cmdb_editor] role. This role grants permission to create, update, and delete individual CI records but does not provide access to platform-level governance configuration. Editors work with CI data at the record level rather than defining policies that evaluate records across the CMDB. This role supports day-to-day data maintenance, not administrative control over validation rules, exclusion criteria, or scheduled review processes.",
"r": [
[
"Base system roles",
"https://www.servicenow.com/docs/r/platform-administration/user-administration/r_BaseSystemRoles.html"
],
[
"Configuration Management",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/manage-cmdb.html"
]
],
"o": [
"CMDB De-duplication Administrator [cmdb_dedup_admin]",
"Data Manager Administrator [data_manager_admin]",
"CMDB Multi-source Administrator [cmdb_ms_admin]",
"CMDB Editor [sn_cmdb_editor]"
],
"a": [
1
]
},
{
"n": 10,
"t": "IRE",
"k": 1,
"q": "A company integrates three discovery sources into the CMDB. During testing, the CMDB team sees different sources overwriting the same server attribute.\n\nWhich ServiceNow feature does the team use to control this?",
"e": "The Configuration Management Database (CMDB) team should use Reconciliation Rules. These rules control which discovery sources can update specific attributes and the precedence order among them. Reconciliation rules prevent situations where multiple sources, such as Discovery, SCCM, or custom integrations, overwrite one another’s updates to the same CI attribute. By defining attribute‑level precedence, the team ensures that the most trusted or authoritative source takes precedence when data is written to the CMDB. Without reconciliation rules, incoming discovery data is processed in the order received, allowing later updates to unintentionally override accurate or preferred attribute values.\n\nThe team should not use Identification Rules. These rules are designed for an entirely different purpose. Identification rules define how the CMDB uniquely identifies a CI, specifying which attributes must match for the system to determine that two records represent the same CI during Identification and Reconciliation Engine (IRE) processing. While identification rules are essential for avoiding duplicate CIs, they do not influence which discovery source is allowed to update specific attributes, nor do they define precedence among sources. Their role is limited to CI identification, not attribute update control.\n\nThe team should not use Business Rules. These are general-purpose server‑side scripts that run on database operations, such as insert, update, or delete. Business rules can automate logic, enforce data behaviors, or trigger workflows, but they do not provide native functionality for resolving attribute conflicts across discovery sources. They are not part of the CMDB’s reconciliation framework and cannot establish authoritative precedence for specific attributes. Using business rules for this purpose would be inefficient, error‑prone, and inconsistent with CMDB best practices.\n\nThe team should not use CMDB dependent relationship rules. These rules govern the expected relationship structure between specific CI classes. They help define service maps and dependency relationships and can assist identification when relationships are required to match. However, these rules do not manage which discovery source can update CI attributes, nor do they establish update precedence. Their purpose is to validate relational integrity and support service mapping, not to control attribute updates from multiple sources.",
"r": [
[
"Create a CI identification rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIIdentificationRule.html"
],
[
"Reconciliation Rules",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"CMDB dependent relationship rules",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_ServiceRulesMetadata.html"
]
],
"o": [
"Identification Rules",
"CMDB dependent relationship rules",
"Business Rules",
"Reconciliation Rules"
],
"a": [
3
]
},
{
"n": 12,
"t": "CSDM",
"k": 1,
"q": "A CMDB Administrator analyzes the population report after completing one month of Discovery scans, which shows the below results: \n\nServers: 485 of 500 expected (97%)\nNetwork devices: 195 of 200 expected (97.5%)\nBusiness applications: 0 of 50 expected (0%)\nVendor contracts: 0 of 30 expected (0%)\n\nThe Administrator needs to identify why some categories show 0% population and determine the appropriate next steps to address the issue.\n\nWhat does the Administrator do?",
"e": "The Administrator creates import sets from the contract management system. Business applications and vendor contracts are logical configuration item (CIs) without technical infrastructure; Discovery does not detect them regardless of configuration. These records can be imported from business systems like contract management tools, service catalogs, or created manually. The 0% population is the expected behavior, not a Discovery problem to troubleshoot. This understanding prevents misconfiguration and supports proper system implementation.\n\nThe Administrator does not configure Discovery credentials for application servers. Business applications and vendor contracts are logical constructs that represent business relationships, not technical systems with credentials. Application servers that host business applications are discoverable, but the logical business application CI that defines the service is a manual or imported record. Credential configuration solves access problems, not the fundamental non-discoverability of logical CIs.\n\nThe Administrator does not deploy additional Management, Instrumentation, and Discovery (MID) Servers for business applications and contracts. MID Servers enable Discovery of technical infrastructure in network segments, but logical CIs like business applications and contracts have no network presence to discover. Adding MID Servers solves connectivity problems for technical CIs, not the non-discoverability of business constructs that exist only as organizational definitions.\n\nThe Administrator does not enable cloud Discovery patterns for SaaS detection. Cloud Discovery patterns detect SaaS infrastructure and cloud resources, not logical business constructs like application definitions or vendor agreements. Business applications represent how IT supports business functions; they are organizational definitions created through service modeling or imported from business systems.",
"r": [
[
"The Common Service Data Model (CSDM) explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"MID Server",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/mid-server/concept/mid-server-landing.html"
],
[
"MID Server capabilities",
"https://www.servicenow.com/docs/r/servicenow-platform/mid-server/explore-mid-server.html"
],
[
"Pattern-based discovery in Service Mapping",
"https://www.servicenow.com/uk/products/service-mapping.html"
]
],
"o": [
"Enable cloud Discovery patterns for SaaS detection",
"Create import sets from the contract management system",
"Configure Discovery credentials for application servers",
"Deploy additional MID Servers in application network segments"
],
"a": [
1
]
},
{
"n": 13,
"t": "M360",
"k": 1,
"q": "A CMDB team needs a reusable, structured way to analyze CI data from multiple discovery sources, identify inconsistencies, compare attribute values, and generate insights.\n\nWhich CMDB feature meets the requirements?",
"e": "The Saved Queries feature meets the requirements. You can perform the following actions: \n\nGet Records: Explore CMDB 360 data for CIs that match specific criteria and are reported by selected discovery sources\nFind Gaps: Identify missing CI coverage across discovery sources\nCompare Attribute Values: Detect differences in CI attributes reported by multiple discovery sources or against the CMDB\nSchedule Queries: Automate recurring reports by integrating query results with the ServiceNow Reporting feature\n\nCI Class Manager does not meet the requirements. It is used to define or modify CI classes and inheritance structures, not to query or report on CI data.\n\nUnified Map is used to visualize CI relationships and dependencies, but does not provide a reusable, simple way to compare attribute values.\n\nCoverage cards provide insights into discovery source coverage in CMDB 360, but are not used to compare attribute values.",
"r": [
[
"CMDB 360 Saved Queries",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb360-exp-cmdb-workspace.html#:~:text=of%20the%20attribute.-,Saved%20queries,-The%20Saved%20queries"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Unified Map",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace-unified-map.html"
],
[
"Configure the CMDB 360 dashboard",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/workspc-mltsrc-configure.html"
]
],
"o": [
"Unified Map",
"Coverage cards",
"Saved queries",
"CI Class Manager"
],
"a": [
2
]
},
{
"n": 14,
"t": "CSDM",
"k": 1,
"q": "A Service Management team needs to create standardized reports that show service performance across the organization. They currently struggle with inconsistent data structures.\n\nHow does CSDM enable this?",
"e": "Common Service Data Model (CSDM) enables consistent service-level reporting because standardized service hierarchies and relationships allow reports to aggregate data consistently across all business units. When all business units model services using the same CSDM structure, reports aggregate and compare data across the organization using consistent definitions and relationship types. This standardization eliminates the data reconciliation problems that occur when different departments use incompatible service models. Executives can trust cross-organizational reports because underlying data follows consistent patterns.\n\nCSDM does not enable consistent reporting by providing pre-built report templates that automatically generate dashboards. While ServiceNow includes reporting tools and some pre-built content, CSDM's reporting benefit comes from data standardization rather than pre-built templates alone generating executive views. Reports still require configuration based on organizational needs, priorities, and reporting hierarchies. The templates work effectively because CSDM provides the consistent data structures they expect to consume for aggregation.\n\nCSDM does not enable consistent reporting by requiring all departments to use identical KPI definitions regardless of business context. CSDM standardizes data structures rather than dictating specific KPI definitions for all contexts. Organizations define context-appropriate metrics while leveraging consistent underlying service data from the CMDB. Different business units might track different KPIs while sharing the same service hierarchy that makes cross-unit comparison possible.\n\nCSDM does not enable consistent reporting by eliminating the need for service-level agreements. SLAs remain important service management tools for defining and measuring service commitments to customers and internal stakeholders. CSDM enables better SLA reporting through consistent service structures that allow accurate measurement and comparison across service portfolios and organizational boundaries. The framework supports SLA management rather than replacing the need for agreements, performance tracking, or customer commitment documentation.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"CSDM integrates with third-party tools to bypass the need for internal service performance tracking.",
"CSDM offers pre-configured dashboards that require minimal customization for specific business units.",
"Standardized service hierarchies and relationships allow reports to aggregate data consistently across all business units.",
"CSDM enforces a uniform reporting structure that aligns all business units to a single set of predefined metrics."
],
"a": [
2
]
},
{
"n": 15,
"t": "CSDM",
"k": "d",
"q": "An organization assigns ownership of its Common Service Data Model (CSDM) records after deployment, and each team maintains a different part of the model.\n\nDrag each CSDM record type to the team responsibility it matches.\n\nSome options may not apply.",
"e": "Business Application records sit in the Design and Planning domain, where they describe the purchased or internally developed applications supporting an organization's business capabilities. Enterprise architects populate and maintain them, because the domain expresses design intent rather than deployment. ServiceNow states that records in this domain are not operational and remain unavailable for selection on incident, problem and change, which places them firmly with the architects rather than with an operations team.\n\nAgile Development Component records sit in the Build and Integration domain, which covers the systems development life cycle. ServiceNow describes the component as a configuration item representing a unique development effort of code, stored in the cmdb_ci_sdlc_component table and forming part of a larger business application or digital product. Development teams populate these records through their delivery pipelines, which makes the delivery team the maintainer of that part of the model.\n\nService Instance records sit in the Service Delivery domain, where ServiceNow defines them as logical representations of deployed systems or application stacks. The domain covers the end-to-end system responsible for delivering technology services, holding the running deployment together with the infrastructure supporting it. An operations team maintains these records because it runs the deployment that each one represents and answers for its behavior in production.\n\nBusiness Service Offering records sit in the Service Consumption domain, which holds the business services, the offerings and the catalog elements through which consumers request what an organization provides. A business relationship manager works with these records to publish what is available and on what terms. The offering expresses the consumable form of a service rather than the technology delivering it, which separates this role from the operations team.\n\nInformation Object remains unused because the four stated responsibilities concern applications, build artifacts, running deployments, and consumable offerings rather than the data those applications exchange. Information Object records sit in the Design and Planning domain alongside Business Application records. An information object describes the type of data exchanged between a business application and its database, including data subject to regulatory requirements. The distinction concerns these specific responsibilities, not which teams might maintain information objects elsewhere.",
"r": [
[
"CSDM data domains",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-conceptual-model.html"
],
[
"Design & Planning domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
],
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/build-domain.html"
],
[
"Service Delivery domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/manage-tech-servs-domain.html"
],
[
"Service Consumption domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/sell-consume-domain.html"
]
],
"o": [
"Enterprise architects describing which applications support a business capability.",
"A development team tracking the components its delivery pipeline produces.",
"An operations team running the deployed instance of a technology service.",
"A business relationship manager publishing what consumers request."
],
"c": [
"Business Application",
"Agile Development Component",
"Service Instance",
"Business Service Offering",
"Information Object"
],
"a": [
0,
1,
2,
3
]
},
{
"n": 16,
"t": "DM",
"k": 1,
"q": "An organization finds that CMDB data quality issues persist because no one takes responsibility for validating and correcting CI information. The CMDB Manager wants to implement governance improvements.\n\nWhy is clear data ownership essential for effective CMDB governance?",
"e": "Establishing clear data ownership is essential because data owners provide accountability for configuration item (CI) accuracy by having designated individuals responsible for validation. Clear ownership ensures someone is accountable for data quality, participates in attestation workflows, and has authority to make corrections when issues are identified. When the organization encounters a server CI with incorrect attributes, having a designated owner means someone is responsible for investigating and correcting the data.\n\nData ownership is not essential because it reduces licensing costs. CMDB governance focuses on data quality and accountability rather than license management. Even if an organization consolidated CMDB access to minimize licenses, persistent data quality issues remain without someone accountable for validating and correcting CI information. The value of data ownership is accountability for accuracy, not cost optimization.\n\nData ownership is not essential because it improves system performance. Database performance is managed through technical optimization, not through governance ownership assignments. Distributing query load has no bearing on whether CI data is accurate or whether someone takes responsibility for correcting errors. The organization's persistent data quality issues require accountability through ownership, not database performance improvements.\n\nData ownership is not essential primarily because it simplifies reporting. While ownership information supports audits, the essential value is accountability for data quality rather than automated documentation generation. The organization's problem is that no one takes responsibility for validating and correcting CI information. Ownership solves this by designating individuals who are accountable for data accuracy.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Data Certification",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_DataCertification.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Access control list rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"It improves performance",
"It simplifies reporting",
"It provides accountability",
"It reduces licensing costs"
],
"a": [
2
]
},
{
"n": 17,
"t": "ING",
"k": 1,
"q": "A ServiceNow Administrator needs to automate the ingestion of CI data from a cloud provider that does not have a certified Service Graph Connector available.\n\nWhich approach supports automated, recurring data imports into the CMDB?",
"e": "Configuring a scheduled data source with a REST integration and transform maps supports automated, recurring data imports into the Configuration Management Database (CMDB). ServiceNow documents this approach as the standard method for integrating external data when a certified Service Graph Connector is not available. The administrator defines a REST data source, creates transform maps to align source fields with CMDB classes, and sets a schedule for recurring execution. This combination provides a fully automated ingestion pipeline without requiring a pre-built connector.\n\nConfiguring a Cloud Discovery schedule to scan the provider API and import configuration item (CI) records does not support automated ingestion from a cloud provider that lacks a certified Service Graph Connector. Cloud Discovery operates with supported cloud platforms such as AWS, Azure, and GCP through provider-specific discovery patterns and credentials. A cloud provider without a certified connector is unlikely to have the discovery support required for Cloud Discovery to scan its API. The administrator would need an alternative ingestion method for unsupported providers.\n\nDefining principal classes in Data Manager does not generate CIs from policy rules or import data from external sources. Principal classes designate which CI classes are governed under Data Manager policies for data quality, attestation, and lifecycle management. These policies enforce standards on existing CMDB data rather than ingesting new records from cloud providers. Data Manager operates on data already in the CMDB and does not function as a data ingestion mechanism.\n\nCreating a reconciliation rule in the Identification and Reconciliation Engine (IRE) does not import unmatched records from a cloud provider. The IRE processes incoming CI data by matching, deduplicating, and merging records against existing CMDB entries. IRE rules define how incoming data is reconciled but require a separate ingestion source such as a data source or Service Graph Connector to supply the records. The IRE is a processing layer in the ingestion pipeline, not a data retrieval mechanism.",
"r": [
[
"Service Graph Connector for Microsoft Azure",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-integration-azure.html"
],
[
"Service Graph Connectors",
"https://www.rapdev.io/blog/service-graph-connectors"
],
[
"Integration Hub available spokes",
"https://www.servicenow.com/docs/bundle/zurich-integrate-applications/page/administer/integrationhub/reference/spokes-list.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
]
],
"o": [
"Create a reconciliation rule in the IRE to import unmatched records from the cloud provider",
"Configure a scheduled data source with a REST integration and transform maps",
"Configure a Cloud Discovery schedule to scan the provider API and import CI records",
"Define principal classes in Data Manager to generate CIs from policy rules"
],
"a": [
1
]
},
{
"n": 18,
"t": "DM",
"k": 1,
"q": "Application owners verify on a 90-day cycle that the Business criticality and Support group values on their application CIs in the CMDB remain accurate. The platform is to create review tasks assigned to the owners and record completion of their field-value reviews.\n\nWhich configuration delivers this outcome?",
"e": "A Data Certification policy on a recurring schedule creates assigned tasks to verify the selected configuration item (CI) attribute values and tracks their review completion. In the configuration management database (CMDB), a CMDB Data Manager policy identifies the records, certification fields, reviewers, and recurring interval, and that interval can be set to 90 days to match this scenario. Reviewers certify or fail the fields, and completed reviews move to the Review completed tab. Certification supports information entered manually, imported, or collected by Discovery, so it covers these manually maintained ownership and criticality values without being limited to manual data.\n\nA Platform Analytics export on a recurring schedule distributes a dashboard or data visualization by email without creating the assigned certification tasks required here. A scheduled export lets an administrator set the recurring interval, choose the recipients, and configure the notification email's subject and message, and that interval can likewise be set to 90 days. An owner could view the exported values outside a structured task workflow, but the export itself does not record field-review completion. The requirement combines recurring delivery with assigned reviews and tracked outcomes, which a scheduled export alone does not provide.\n\nA CMDB Health completeness metric on those fields checks for missing values rather than creating the required owner reviews. Required fields derive from mandatory dictionary settings, while recommended fields are configured for completeness measurement. A populated Business criticality value can therefore pass the presence check even when its business meaning is outdated. Measuring missing values does not generate the specified owner assignments and recorded field-value reviews needed to validate accuracy on the recurring cycle.\n\nA Discovery schedule with a recurring repeat interval repeats data collection without obtaining the owners' required field-value judgments. The Periodically run option and Repeat Interval setting determine when Discovery collects data from the targeted infrastructure, and that interval can be set to 90 days to match this scenario. Neither Business criticality nor Support group is supplied by Discovery, so another collection does not validate those values. The schedule also does not establish assigned field-review tasks or track completion of the recurring owner validation process.",
"r": [
[
"Data Certification",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_DataCertification.html"
],
[
"Schedule the export of data visualizations or dashboards",
"https://www.servicenow.com/docs/r/now-intelligence/schedule-visn-export-vd.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html"
],
[
"Run options for discovery schedules",
"https://www.servicenow.com/docs/r/it-operations-management/itom-visibility/discovery-schedule-run-options.html"
]
],
"o": [
"A Platform Analytics export on a recurring schedule",
"A CMDB Health completeness metric on those fields",
"A Data Certification policy on a recurring schedule",
"A Discovery schedule with a recurring repeat interval"
],
"a": [
2
]
},
{
"n": 19,
"t": "QB",
"k": 2,
"q": "An author queries CIs in a CMDB using CMDB Query Builder. Application Service and Server nodes are connected. The query needs to return supporting servers across any number of relationship levels and display each server's operating system in the results.\n\nWhich actions provide this traversal and output?",
"e": "Convert attached nodes to pattern in Application Service Properties enables a pattern query between an application service and another class node in the configuration management database (CMDB), through CMDB Query Builder. The nodes at the two ends of that pattern connection can be any number of relationship levels apart. Applying the setting to the Application Service node therefore provides the traversal needed to find the supporting Server configuration items (CIs). Selecting server properties for the displayed results remains a separate query configuration step.\n\nAdd Columns in the Report Columns section selects node properties for display in CMDB Query Builder results. Selecting the Server node exposes that section in the right-side pane, where the author chooses the operating system property to include in the output. The setting determines which server attributes appear alongside the returned records. Relationship traversal determines which servers match the query, while this column selection makes the requested operating system values visible.\n\nUp to 2nd level relationships in Query Builder Connection Properties queries CIs connected directly or indirectly through one intermediate CI. The Level control therefore suits a connection whose required relationship depth stops at that second level. A supporting server farther away in the relationship chain lies beyond that scope. The scenario requests traversal across any number of levels, so the application-service pattern setting supplies the needed behavior rather than this fixed-depth connection setting.\n\nAdd a Related Item in Query Builder Connection Properties queries related CIs through a reference field used by the parent class or its ancestors. The field references the child CI class, allowing the query to follow that specific reference association between nodes. That configuration serves reference-based relationships between the selected classes. It does not turn the Application Service connection into an arbitrary-depth pattern or select the server properties displayed in the query results.\n\nUse CI reference column in Query Builder Connection Properties identifies the CI reference on a connected non-CMDB table. For example, an Incident or Change Request node can reference a configuration item through its Configuration item field. Selecting that column configures how the non-CMDB records join to the CI portion of the query. This scenario connects Application Service and Server nodes and asks for pattern traversal and an output property, rather than a non-CMDB reference join.",
"r": [
[
"Build a CMDB query using the CMDB Query Builder",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/use-cmdb-query-builder.html"
],
[
"CMDB — Hardware with Windows installed",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-query-builder-sample3-app-ser.html"
],
[
"CMDB — Servers connected to a database",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-query-builder-tutorial.html"
],
[
"Configure the relationships to query on",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-query-bldr-relationship-props.html"
]
],
"o": [
"Selecting Use CI reference column on the node connection",
"Selecting Convert attached nodes to pattern in node properties",
"Selecting Add Columns in the Report Columns section",
"Setting the connection Level to Up to 2nd level relationships",
"Selecting Add a Related Item on the node connection"
],
"a": [
1,
2
]
},
{
"n": 20,
"t": "HEA",
"k": "d",
"q": "A CMDB Administrator configures compliance audits and needs to understand how each component affects the Compliance KPI.\n\nDrag and drop each audit component with its role in compliance scoring.\n\nSome options may not apply.",
"e": "Pass Rate is the percentage of configuration items (CIs) meeting audit criteria and directly contributes to the Compliance KPI score. Higher pass rates result in better compliance scores for the audited CI class. Each audit's pass rate is weighted according to its configured importance in the overall calculation. Tracking pass rate trends reveals improvement from remediation efforts over time.\n\nAudit Weight determines how much each audit influences the overall Compliance KPI relative to other audits. Critical compliance requirements receive higher weights to have greater score impact than minor checks. Weight configuration reflects organizational risk tolerance and regulatory requirements in health assessment. Without weighting, all audits equally affect scores regardless of business importance.\n\nFailure List provides drill-down detail identifying specific CIs that do not pass compliance checks for prioritizing remediation. Knowing which 50 servers fail an audit provides actionable context beyond the 90% pass rate. The list enables administrators to plan remediation workload and track progress toward full compliance. Targeted investigation reveals why certain records fail criteria.\n\nSchedule controls how frequently the Compliance KPI recalculates based on current CI data state. More frequent execution provides timelier compliance visibility but increases system processing load. Weekly or daily schedules balance data freshness with system performance needs. Critical audits run more frequently while stable checks execute less often.\n\nRemediation Rule is not a component of compliance audit scoring in the CMDB Health Dashboard. Remediation rules are part of the Correctness KPI and define automated actions that identify and resolve data quality issues such as duplicate CIs or orphan records. While compliance audits may reveal CIs that need remediation, the remediation rules themselves operate independently within the Correctness scoring framework. Compliance audit components include pass rates, audit weights, failure lists, and schedules rather than remediation rules.",
"r": [
[
"CMDB Compliance",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_Compliance.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html"
],
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/config-cmdb-health-metric-weights.html"
],
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_EnableCMDBHealthDashboardJob.html"
]
],
"o": [
"Percentage of CIs meeting the audit criteria directly contributes to the score",
"Determines how much this audit influences the overall Compliance KPI",
"Provides drill-down detail for prioritizing remediation activities",
"Controls how frequently Compliance KPI recalculates based on current data"
],
"c": [
"Audit Weight",
"Failure List",
"Pass Rate",
"Schedule",
"Remediation Rule"
],
"a": [
2,
0,
1,
3
]
},
{
"n": 21,
"t": "M360",
"k": 1,
"q": "An organization uses CMDB 360 to store CI data from multiple discovery sources including ServiceNow Discovery, a third-party vulnerability scanner, and cloud provider APIs.\n\nHow does a Report Developer create a report showing all attributes from these sources?",
"e": "The Report Developer uses the CMDB 360 view that includes all source attributes. This consolidated view allows developers to select multisource attributes for report columns from a unified interface. CMDB 360 provides single-query access to attributes from multiple sources without requiring separate queries per source or manual data combination.\n\nThe Report Developer does not create separate reports for each source and combine them. CMDB 360 consolidates multisource data, eliminating the need to separately query and manually combine results from different origins. Manual combination introduces error risk and maintenance burden when source data changes.\n\nThe Report Developer does not write GlideRecord scripts to query each source directly. CMDB 360 already aggregates data from sources, so reports access consolidated attributes directly without custom scripting. Script-based approaches require developer skills and ongoing maintenance as source systems change.\n\nThe Report Developer does not configure real-time API connections to external sources. CMDB 360 stores synchronized data from sources, so reports access the stored consolidated view rather than making live external connections. Real-time API calls would introduce latency and dependency on external system availability during report execution.",
"r": [
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"Identification and Reconciliation API",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/integrate/inbound-rest/concept/c_IdentifyReconcileAPI.html"
]
],
"o": [
"They configure real-time API connections to the external sources.",
"They create separate reports for each source and combine them.",
"They use the CMDB 360 view that includes all source attributes.",
"They write GlideRecord scripts to query each source directly."
],
"a": [
2
]
},
{
"n": 22,
"t": "ING",
"k": 1,
"q": "A company wants to create service maps showing all application components and their dependencies for a critical business application. The administrator configures Service Mapping with an entry point.\n\nWhich statement correctly describes how Service Mapping creates component relationships?",
"e": "Pattern-based discovery traces connections and creates relationships automatically. Starting from the entry point, Service Mapping executes discovery patterns that follow network connections, process communications, and configuration files to identify all related components and create relationship records. The resulting service map shows the complete application topology. This automated approach builds comprehensive service maps without requiring manual documentation of each component and its connections. Discovery capabilities complement other data collection methods for comprehensive CMDB population strategies.\n\nPre-defined relationship templates do not need to be configured before discovery runs. Service Mapping uses discovery patterns to dynamically trace connections and dependencies from the entry point, creating relationships automatically as it discovers each application component through active connection analysis. The discovery patterns contain the logic needed to identify different types of components and their connections, adapting to various application architectures without requiring custom templates for each deployment.\n\nRelationships are not imported from external ITSM tools rather than discovered natively. Service Mapping natively discovers application components and their relationships by tracing connections from entry points using pattern-based discovery within the environment. External imports are not required for core Service Mapping functionality. Service Mapping can build complete service maps independently, though it can also incorporate data from other sources when available. Discovery capabilities complement other data collection methods for comprehensive CMDB population strategies.\n\nPlaceholder relationships are not created that require manual population with connection data. Service Mapping automatically creates complete and fully populated relationship records with actual connection data as it traces dependencies during the pattern-based discovery process, providing immediate visibility into application architecture. The relationships include specific connection details such as ports, protocols, and configuration references that enable comprehensive impact analysis. Discovery capabilities complement other data collection methods for comprehensive CMDB population strategies.",
"r": [
[
"Pattern-based discovery in Service Mapping",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/pattern-based-discovery.html"
],
[
"Entry point attributes",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/r_EntryPointsforBizSvcDef.html"
],
[
"Exploring Service Mapping",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/service-mapping-get-started.html"
],
[
"Preconfigured CI relationships in tag-based discovery",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/ci_relationships_tag_mapping.html"
]
],
"o": [
"Pattern-based discovery traces connections and creates relationships automatically.",
"Pre-defined relationship templates require configuration before discovery runs.",
"Placeholder relationships are created that require manual population with connection data.",
"Relationships are imported from external ITSM tools rather than discovered natively."
],
"a": [
0
]
},
{
"n": 23,
"t": "CLS",
"k": 1,
"q": "A Change Manager needs to assess the potential impact of applying a security patch to a database server before approving the change request. The organization wants to identify all business services and applications that might be affected.\n\nHow does CMDB data support change management?",
"e": "Configuration management data base (CMDB) data supports change management because configuration item (CI) dependency relationships enable impact analysis by showing which applications, services, and users depend on the database server. This visibility helps change managers understand potential blast radius and plan appropriate risk mitigation before implementation. Impact analysis drives communication to affected stakeholders before changes occur so they can prepare.\n\nCMDB data does not automatically calculate change failure probability. CMDB provides relationship data for human analysis rather than automatically approving or denying changes based on calculated risk scores alone. Risk assessment requires human judgment considering factors beyond relationship data including business priorities. Change managers use CMDB relationships to understand potential impact scope but apply business context, historical experience, and risk tolerance to make approval decisions. CMDB informs risk assessment without replacing human evaluation of change timing, scope, and business criticality.\n\nCI records do not store vendor patch release notes within CI records. CMDB stores configuration and relationship data about infrastructure components, while patch documentation is managed through separate knowledge management systems. Technical documentation about patches belongs in knowledge management articles or external vendor sources. CMDB records track which patch versions are installed on specific servers but detailed technical documentation about patch contents, known issues, and installation procedures resides in knowledge management systems designed for document storage and retrieval.\n\nCMDB relationships do not automatically schedule maintenance windows during low activity periods. Change scheduling involves human decision-making informed by CMDB data rather than automated scheduling based on usage pattern analysis alone. Business considerations beyond CI relationships influence timing decisions including customer commitments. Change Management processes require human evaluation of business impact, resource availability, and risk assessment before scheduling maintenance activities. CMDB provides relationship data that informs these decisions but does not autonomously create change records or schedule maintenance windows without human oversight and approval.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-integration-aws-sg.html"
]
],
"o": [
"Schedules maintenance windows during low-activity periods",
"Stores vendor patch release notes within CI records",
"Provides dependency relationships for impact analysis",
"Calculates probability of change failure automatically"
],
"a": [
2
]
},
{
"n": 24,
"t": "QB",
"k": 2,
"q": "A CMDB Administrator analyzes how a server CI relates to other infrastructure components and business services using CMDB Workspace.\n\nWhich capabilities does the Administrator use?",
"e": "The Administrator uses the graphical dependency map view. This view displays configuration item (CI) relationships as a visual map showing upstream and downstream connections. This representation helps administrators understand how CIs relate to each other and their impact on services, revealing complex multi-level dependencies that are difficult to understand from tabular data alone. The visual dependency map enables rapid impact analysis for change planning and incident troubleshooting by showing the complete relationship hierarchy at a glance.\n\nThe Administrator uses the related items panel access. This lists all connected CIs and allows navigation to their records. When viewing CI details, administrators can see and navigate through all relationships, supporting investigation and validation of CI connections. This panel provides quick access to related CIs without running separate queries.\n\nThe Administrator does not use CI attribute editing forms. These forms allow modifying CI field values but do not display relationship information. Editing capabilities focus on individual CI attributes rather than showing how CIs connect to each other.\n\nThe Administrator does not use health score indicators. These indicators display data quality metrics for individual CIs but do not show relationship information. Health scores reflect completeness, correctness, and compliance of CI attributes.\n\nThe Administrator does not use bulk relationship deletion. CMDB Workspace does not provide bulk relationship deletion capabilities. Relationship management operations in CMDB Workspace focus on viewing and navigating dependencies rather than bulk modification actions. Bulk deletions require careful consideration of impact and are typically performed through administrative tools with appropriate oversight. CMDB Workspace provides analysis capabilities rather than mass update functions that risk accidentally removing critical dependency information.",
"r": [
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Reference field type",
"https://www.servicenow.com/docs/r/platform-administration/c_ReferenceField.html"
],
[
"CMDB 360 experience in CMDB Workspace",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb360-exp-cmdb-workspace.html"
]
],
"o": [
"Bulk relationship deletion",
"Graphical dependency map view",
"Related items panel access",
"CI attribute editing forms",
"Health score indicators"
],
"a": [
1,
2
]
},
{
"n": 25,
"t": "CSDM",
"k": 1,
"q": "An organization enters the Run phase of CSDM implementation. The executive sponsor wants to understand what new capabilities this phase enables.\n\nHow does the Run phase enable understanding of technology impact on business operations?",
"e": "The Run phase enables understanding of technology impact on business operations by connecting Business Services to Technical Services, showing how infrastructure issues affect customer-facing business outcomes. This phase establishes relationships between the Sell/Consume and Manage Technical Services domains, enabling visibility into how technology problems cascade to impact business services and customers. Run phase organizations can answer questions like which customers are affected when a specific database server fails. This business context transforms technical operations into service-aware management.\n\nThe Run phase does not enable this understanding by providing basic CI inventory tracking to count servers. Basic inventory capabilities are established in the Crawl phase where organizations first populate the configuration management data base (CMDB) with infrastructure records and validate their accuracy. The Run phase focuses on business-technical relationships that reveal impact rather than simple inventory counting of hardware assets. Organizations ideally move well beyond basic inventory and asset tracking before reaching Run phase maturity levels.\n\nThe Run phase does not enable this understanding by connecting discovered devices to network maps showing security vulnerabilities. Network device discovery and basic security asset mapping are established in Crawl and Walk phases as organizations build infrastructure visibility. The Run phase focuses on connecting business and technical services to understand business impact of technology failures rather than security vulnerability assessment. Security scanning and network mapping continue in the Run phase but are integrated into service context rather than being standalone discovery activities.\n\nThe Run phase does not enable this understanding by connecting user accounts to role hierarchies showing permission impacts. User and role management are foundational identity capabilities established during initial ServiceNow implementation or in the Crawl phase. The Run phase focuses on service relationships that enable business impact analysis rather than administrative permission mapping. Role hierarchies and user provisioning are prerequisites for CSDM work rather than Run phase objectives defining business-technical service connections.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"It provides basic configuration item (CI) inventory tracking that allows IT to count the number of servers in each data center.",
"It connects user accounts to role hierarchies, showing how administrator permissions affect change approvals.",
"It connects Business Services to Technical Services, showing how infrastructure issues affect customer-facing business outcomes.",
"It connects discovered devices to network maps, showing how unknown assets contribute to security vulnerabilities."
],
"a": [
2
]
},
{
"n": 26,
"t": "CLS",
"k": 1,
"q": "A new CMDB Administrator needs to perform various tasks including viewing relationships, running queries, checking health scores, and managing data quality. The administrator wants a single location for these activities and decides to use CMDB Workspace.\n\nWhich benefit does CMDB Workspace provide?",
"e": "Configuration Management Database (CMDB) Workspace brings together configuration item (CI) management, relationship visualization, query building, and health monitoring into one location. Administrators can access all common CMDB functions from this single entry point. This cuts down on navigation time and context switching when doing administrative tasks. You can move between CI exploration, querying, and health monitoring without leaving the workspace.\n\nCMDB Workspace does not replace the standard ServiceNow navigation. It works alongside standard navigation, giving you an optimized interface for CMDB tasks while everything else stays accessible through the normal menus. If you need non-CMDB functionality like Incident Management or Change Management, you still use standard navigation. The workspace just streamlines CMDB-specific work without limiting your access to other parts of the system.\n\nCMDB Workspace is not built for mobile devices. It is designed for administrative tasks typically done on a desktop workstation. CMDB administration involves complex queries, relationship analysis, and detailed record examination that really need a larger screen. Administrators need to see multiple CI attributes at once, analyze relationship diagrams, and compare records side-by-side. These workflows work best on desktop or laptop displays. Mobile apps target different use cases like service requests and incident management.\n\nCMDB Workspace is not a separate application instance. It runs within the standard ServiceNow platform, not as an independent system. It gives you a consolidated view of existing CMDB functionality without creating any separation. All your data and configurations stay in the shared platform instance. You are accessing the same CI records, relationships, and configurations whether you use CMDB Workspace or traditional interfaces. There is no data duplication or instance separation.",
"r": [
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Next Experience Unified Navigation",
"https://www.servicenow.com/docs/r/platform-user-interface/using-the-next-experience-global-header.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"CMDB 360 experience in CMDB Workspace and in Service Graph Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb360-exp-cmdb-workspace.html"
]
],
"o": [
"One place for managing CIs and checking health",
"It replaces the normal ServiceNow menus",
"A separate system that runs independently",
"A mobile-friendly version for phones and tablets"
],
"a": [
0
]
},
{
"n": 27,
"t": "DM",
"k": 1,
"q": "An IT Director observes that Incident teams struggle to identify affected services and Change teams do not assess impacts accurately.\n\nHow do CMDB governance processes support downstream IT processes like Incident, Change, and Problem Management?",
"e": "Configuration Management Database (CMDB) governance processes support Incident, Change, and Problem Management by ensuring accurate configuration item (CI) data and relationships that enable correct service impact analysis, change risk assessment, and root cause identification across IT processes. High-quality CMDB data provides the foundation for IT processes to identify affected services during incidents, assess downstream impacts of changes, and correlate problems to infrastructure components. When the IT Director's teams struggle with impact identification, the root cause is typically inaccurate or incomplete relationship data that governance processes maintain.\n\nCMDB governance processes do not support IT processes by providing automated ticket routing. Ticket routing is a workflow configuration function, not a CMDB governance benefit. The IT Director's teams struggle to identify affected services and assess impacts, which are data quality problems that governance addresses. Routing rules determine which queues receive tickets, but governance ensures the CI data used to analyze those tickets is accurate and relationships are complete.\n\nCMDB governance processes do not support IT processes by generating compliance reports. While governance supports compliance, its primary value to Incident, Change, and Problem Management is providing accurate data for impact analysis rather than generating maturity reports. The IT director's teams need accurate CI relationships to identify affected services and assess change impacts. Compliance reports document governance metrics but do not solve the underlying data quality issues affecting operations.\n\nCMDB governance processes do not support IT processes by enforcing approval workflows. Approval workflows are process controls configured within each IT process, not a direct outcome of CMDB governance which focuses on data quality. The IT Director's teams need accurate CI data to identify affected services and assess impacts, not additional approval gates. Governance provides the accurate data that makes approval decisions meaningful, not the approval mechanisms themselves.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
]
],
"o": [
"Governance ensures accurate data",
"Governance provides automated ticket routing",
"Governance generates compliance reports",
"Governance enforces approval workflows"
],
"a": [
0
]
},
{
"n": 28,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator explores the Data Foundation Dashboard to understand its reporting capabilities.\n\nWhich widgets and visualizations are available on the CMDB Data Foundation Dashboard?",
"e": "The Data Foundation Dashboard displays widgets such as data quality score summaries, discovery coverage metrics, and data foundation checklist progress. These widgets provide aggregated visibility into Configuration Management Database (CMDB) data quality and help track improvement initiatives systematically. Score summaries highlight areas needing attention while trend charts demonstrate progress over time toward improvement goals. Dashboard configuration serves distinct stakeholder needs across organizational levels for effective CMDB governance. These aggregated views enable executive decision-making.\n\nThe dashboard does not display individual configuration item (CI) record listings. The dashboard provides aggregated metrics and trends rather than individual record management interfaces for data entry purposes. CI-level editing happens through standard CMDB forms and lists, not dashboards designed for organizational visibility. The Health Dashboard focuses on presenting summarized health scores, metric trends, and organizational compliance rather than providing detailed CI record access. Administrators use the dashboard for monitoring and then navigate to CI lists for remediation activities.\n\nThe dashboard does not display network topology diagrams. Network monitoring is handled by separate tools designed for operational visibility. Service Mapping and Discovery provide topology visualization capabilities separately. Service Mapping provides topology visualization showing application component relationships. These tools serve different purposes: dashboards monitor data quality while mapping visualizes infrastructure relationships.\n\nThe dashboard does not display financial cost allocation reports. Cost reporting is handled by financial management and asset applications. Software Asset Management and Hardware Asset Management handle cost tracking functionality. Cost allocation requires integration between CMDB CIs and financial systems through dedicated asset management applications. CMDB provides configuration data while specialized applications handle financial calculations and reporting.",
"r": [
[
"Monitor health in CSDM and CMDB Data Foundations Dashboards",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/csdm-cmdb-foundations-dashboards.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Preconfigured CI relationships in tag-based discovery",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/ci_relationships_tag_mapping.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
]
],
"o": [
"Discovery coverage metrics",
"Network topology diagrams",
"Individual CI record listings",
"Financial cost allocation reports"
],
"a": [
0
]
},
{
"n": 29,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator needs to understand when to use the Data Foundation Dashboard versus the standard CMDB Health Dashboard.\n\nHow does the Data Foundation Dashboard differ from the CMDB Health Dashboard?",
"e": "Strategic readiness assessment differentiates the Data Foundation Dashboard from the Configuration Management Database (CMDB) Health Dashboard. The Data Foundation Dashboard evaluates whether the CMDB is properly configured and aligned with best practices across four areas: best practices adherence, customizations, data management practices, and Information Technology Service Management. (ITSM) process integration. It provides weighted foundational indicators and links to remediation playbooks for strategic improvement planning. The CMDB Health Dashboard focuses on ongoing operational key performance indicators (KPI) scores for individual configuration item (CI) completeness, correctness, and compliance rather than strategic readiness.\n\nUpdate frequency does not differentiate the Data Foundation Dashboard from the CMDB Health Dashboard. Both dashboards rely on scheduled background jobs to calculate and refresh their metrics rather than one providing real-time updates and the other using batch processing. The Data Foundation Dashboard uses scheduled metric collection jobs, while the CMDB Health Dashboard uses its own configurable health calculation jobs. The actual difference is that the Data Foundation Dashboard assesses strategic configuration readiness while the Health Dashboard measures ongoing CI-level data quality KPIs.\n\nTarget audience security does not differentiate the Data Foundation Dashboard from the CMDB Health Dashboard. Both dashboards are internal tools designed for CMDB administrators, IT leaders, and data stewards, requiring similar administrative roles for access. Neither dashboard is intended for external audiences or separated by distinct security boundaries. The actual difference is their analytical perspective: the Data Foundation Dashboard evaluates foundational configuration readiness and best practices alignment while the Health Dashboard monitors ongoing CI completeness, correctness, and compliance scores.\n\nHistorical data limitations do not differentiate the Data Foundation Dashboard from the CMDB Health Dashboard. Both dashboards present current metric status alongside historical trend data over time through Performance Analytics reports. Neither dashboard is restricted to showing only current state or only historical information. The actual difference lies in what each dashboard measures: the Data Foundation Dashboard assesses strategic readiness across best practices and configuration alignment while the Health Dashboard tracks ongoing CI-level completeness, correctness, and compliance KPIs.",
"r": [
[
"View CMDB Health Dashboard",
"http://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_MonitorCMDBHealth.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html"
],
[
"Insights view in CMDB Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/sg-workspace-insights-view.html"
],
[
"CMDB and CSDM Data Foundations Dashboards Introduction",
"https://www.servicenow.com/community/cmdb-articles/cmdb-and-csdm-data-foundations-dashboards-introduction/ta-p/3290419"
]
],
"o": [
"Strategic readiness assessment",
"Target audience security",
"Update frequency",
"Historical data limitations"
],
"a": [
0
]
},
{
"n": 30,
"t": "QB",
"k": 1,
"q": "An Administrator identifies that 200 Windows servers are missing patch-level attributes after a recent discovery integration. The Administrator needs to isolate these servers, assign them to a remediation team for bulk updates, and track the population until the data gaps are resolved.\n\nWhat does the Administrator do to complete this task?",
"e": "The Administrator saves a Query Builder query and uses it to populate a Configuration Management Database (CMDB) Group for the affected servers. A saved Query Builder query defines reusable filter criteria that identify the 200 servers with missing patch-level attributes. CMDB Groups accept saved queries as a population source, creating a dynamic collection that the remediation team accesses for bulk attribute updates. The group membership updates automatically as servers receive corrected data, providing ongoing tracking until all data gaps are resolved. This approach combines targeted identification with collaborative remediation in a single workflow.\n\nThe Administrator does not create a CMDB Health Dashboard key performance item (KPI) for this task. Health Dashboard KPIs display aggregate scores and trend data for completeness, compliance, and correctness across configuration item (CI) classes. KPIs visualize the overall health posture of a CI class but do not isolate individual CIs into an actionable collection for a remediation team. The Administrator requires a mechanism that both identifies specific CIs and assigns them to a team for direct attribute updates.\n\nThe Administrator does not generate a Performance Analytics report for this task. Performance Analytics reports present historical trend data, score breakdowns, and indicator visualizations for management decision-making. Reports display data snapshots for analysis but do not create a persistent, team-assignable collection of CIs for bulk remediation.\n\nThe Administrator does not configure an identification rule for this task. Identification rules define the attribute criteria that the Identification and Reconciliation Engine (IRE) uses to match incoming data to existing CIs or create new records during discovery processing. These rules govern CI identity matching and deduplication, not the detection of missing attribute values on existing records. The 200 servers already exist in the CMDB, and the administrator needs to isolate and assign them for attribute correction rather than modify how the IRE processes incoming discovery data.",
"r": [
[
"Build a CMDB query using the CMDB Query Builder",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/use-cmdb-query-builder.html"
],
[
"CMDB Groups",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-groups.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html"
]
],
"o": [
"Configure an identification rule that flags incoming server CIs with missing patch-level attributes",
"Save a Query Builder query and use it to populate a CMDB Group for the affected servers",
"Generate a Performance Analytics report that lists servers with incomplete discovery data",
"Create a CMDB Health Dashboard KPI that filters for servers with missing patch-level attributes"
],
"a": [
1
]
},
{
"n": 31,
"t": "QB",
"k": 1,
"q": "What is the purpose of Natural Language Query (NLQ)?",
"e": "The purpose of Natural Language Query (NLQ) is to enable non-technical users to search configuration management data base (CMDB) by typing questions in conversational language without query syntax knowledge. NLQ democratizes CMDB access by interpreting plain language questions and returning relevant configuration item (CI) data without requiring knowledge of table names or filter syntax. Business analysts, managers, and other stakeholders can retrieve infrastructure information independently. This self-service capability reduces bottlenecks where technical staff previously ran queries on behalf of business users.\n\nThe purpose of NLQ is not to provide automated translation of CMDB documentation into multiple spoken languages for international deployments. NLQ interprets user questions to query CI data rather than translating documentation or interface text between different languages. Localization and translation features are separate platform capabilities that adapt the user interface for global users across regions. NLQ focuses on understanding query intent from conversational questions, not converting text between human languages for internationalization.\n\nThe purpose of NLQ is not to generate natural language summaries of CI records that replace technical attribute names with business-friendly descriptions. NLQ processes user questions to find and return matching CIs rather than reformatting how CI attribute data displays on forms. Form layouts and field labels are controlled through form designer and dictionary configurations. NLQ operates as a query interface for finding CIs, separate from display formatting decisions.\n\nThe purpose of NLQ is not to enable voice command control of ServiceNow navigation or hands-free access to CMDB records through speech recognition. NLQ interprets typed text questions about CMDB data rather than processing spoken audio input from users. Accessibility features including screen readers and voice control are separate platform capabilities independent of NLQ.",
"r": [
[
"Natural Language Query",
"https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/natural-language-query/concept/natural-language-query.html"
],
[
"Using Natural Language Query",
"https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/natural-language-query/concept/using-nlq.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"Enable voice command control through speech recognition technology",
"Generate natural language summaries replacing technical attribute names",
"Translate CMDB documentation into multiple spoken languages",
"Enable conversational language searches without query syntax knowledge"
],
"a": [
3
]
},
{
"n": 32,
"t": "QB",
"k": 2,
"q": "A CMDB Administrator needs to document dependencies that Discovery does not automatically detect based on network connections or process analysis.\n\nWhich scenarios require manual relationship creation?",
"e": "A business service that depends on a third-party SaaS application that is not discoverable requires manual relationship creation. External cloud applications and SaaS services are outside the network boundary and cannot be discovered by standard Discovery probes, requiring manual relationship creation to document the dependency in the configuration management data base (CMDB). Without manual documentation, the CMDB shows an incomplete picture of service dependencies, impacting the accuracy of change impact analysis for the business service.\n\nAn internal application that has a contractual dependency on an external vendor service requires manual relationship creation. Business and contractual dependencies represent logical relationships that have no technical footprint for Discovery to detect, requiring manual creation to document these organizational dependencies accurately. These organizational relationships are critical for understanding service delivery even though they cannot be discovered through technical means. Documenting vendor dependencies ensures complete visibility for service management.\n\nAn IIS application on a Windows server does not require manual relationship creation. Discovery agents can detect IIS web applications and their hosting relationships automatically by analyzing running processes and configurations on the server without administrator intervention. The agent has full visibility into the server's local configuration, including installed software, running services, and their dependencies. This comprehensive access enables fully automated relationship creation for detected components.\n\nA virtual machine (VM) hosted on a VMware cluster does not require manual relationship creation. Discovery automatically creates hosting relationships between virtual machines and their hypervisors when performing horizontal discovery, detecting the virtualization layer without manual configuration. Horizontal Discovery probes the virtualization management layer to identify virtual machines and their current placement on physical hosts, creating the appropriate hosting relationships automatically during each scheduled discovery run.\n\nA Linux server running Apache does not require manual relationship creation. Discovery agents detect Apache installations and their hosting relationships automatically by analyzing running processes and configuration files on the server. The agent identifies installed applications through process scanning and package detection. Apache web server relationships are created automatically when Discovery processes the server without requiring manual intervention from administrators.",
"r": [
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-integration-aws-sg.html"
],
[
"Preconfigured CI relationships in tag-based discovery",
"https://www.servicenow.com/docs/bundle/xanadu-it-operations-management/page/product/service-mapping/reference/ci_relationships_tag_mapping.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"VM hosted on a VMware cluster",
"IIS application on Windows server",
"External vendor service contract",
"Third-party SaaS application",
"Linux server running Apache"
],
"a": [
2,
3
]
},
{
"n": 33,
"t": "IRE",
"k": 1,
"q": "A CMDB Administrator modifies an identification rule to use fewer identifier attributes for server CIs. After the next health calculation, CMDB Health shows a significant increase in duplicate CIs.\n\nWhat caused this increase?",
"e": "Reducing the identifier attributes made the matching criteria less specific. Configuration items (CIs) that were previously unique now match the same identifier combination. For example, if serial number is removed from the criteria, two servers that only differed by serial number now look like the same server to the identification engine. More matches means more potential duplicates appear in the health report.\n\nChanging an identification rule would not trigger a re-import of data. The existing CIs stay exactly as they are. What changes is how the health calculation evaluates them. With fewer attributes in the identification rule, more CIs match each other, so more get flagged as duplicates. No data was reimported; the same CIs are simply being compared differently.\n\nHealth job duration does not affect duplicate detection results. The job runs the same duplicate checks regardless of how long it takes. The increase in duplicates comes from the broader matching criteria, not from anything being skipped due to job runtime. The health calculation processes all CI classes the same way; only the matching logic changed.\n\nThe rule change did not invalidate or recreate any CI records. Existing CIs keep their sys_ids and all their data when identification rules are modified. What changed is how the duplicate detection algorithm compares them. With fewer attributes to differentiate CIs, more of them now look like matches to each other.",
"r": [
[
"Identification rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html"
],
[
"Properties",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/properties-id-reconciliation.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"Fewer identifier attributes made some criteria less specific",
"Fewer attributes caused the health job to run longer",
"Identification rule changes triggered an automatic re-import",
"A modified rule invalidated some of the existing CIs"
],
"a": [
0
]
},
{
"n": 34,
"t": "DM",
"k": 1,
"q": "An organization requires periodic verification that specific attribute values on server records in the CMDB are accurate and complete. The Administrator needs to configure a process that automatically generates scheduled tasks and assigns them to the appropriate teams for data validation.\n\nWhich Data Manager policy type does the Administrator create to meet this requirement?",
"e": "The Administrator creates a Certification policy, which manages scheduled validations of specific data attributes in the CMDB. Data Certification generates tasks on a recurring schedule and assigns them to individuals who then answer a series of questions to verify the data associated with each targeted record. For example, the Administrator can configure a certification to validate fields such as Operating System and CPU count on server CIs in a specific location and assign the resulting tasks to the responsible team automatically.\n\nThe Administrator does not create an Attestation policy. Attestation verifies the existence of actual IT infrastructure and applications rather than validating specific attribute values for accuracy. Attestation tasks ask CI owners to confirm that the physical or virtual assets represented by their CIs still exist in the environment. The scenario requires verification of data accuracy on active records, not confirmation that the underlying infrastructure is still present. Attestation addresses asset existence while certification addresses data correctness.\n\nThe Administrator does not create a Retire policy. Retirement transitions CIs to a retired lifecycle state based on criteria such as staleness thresholds. Retire policies target CIs that have reached end of life and generate tasks to process their removal from active service. The scenario describes ongoing validation of active server records, not decommissioning of outdated CIs. Retirement manages the end of a CI lifecycle rather than verifying the accuracy of data on records still in operational use.\n\nThe Administrator does not create an Archive policy. Archiving removes CIs from their current table and stores them in a separate archive table for temporary retention. Archive policies target CIs that have already been retired and exclude them from day-to-day CMDB views while preserving data for historical reference. The scenario requires active validation of current server records, not relocation of retired CIs to long-term storage for eventual deletion after a defined retention period.",
"r": [
[
"Data Certification",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_DataCertification.html"
],
[
"CIs attestation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/attesting-cis.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
]
],
"o": [
"Certification",
"Attestation",
"Retire",
"Archive"
],
"a": [
0
]
},
{
"n": 35,
"t": "IRE",
"k": 1,
"q": "A CMDB Manager notices that incident handlers frequently attach tickets to the wrong server CI, and that change impact analysis reports are missing dependent applications. The CMDB Health Dashboard shows the Duplicate metric is failing.\n\nWhat causes these operational problems?",
"e": "These problems are caused by duplicate configuration items (CIs) existing for the same physical assets. Duplicate CIs create confusion when IT Service Management (ITSM) processes not determine which CI record represents the actual asset. Incident handlers attach tickets to wrong CI records when multiple records exist for the same server. Change impact analysis becomes unreliable because relationships might be split across duplicate records.\n\nExpired Discovery credentials do not cause these problems. Credential issues prevent Discovery from collecting data but do not cause duplicate records or the confusion described. The failing Duplicate metric specifically indicates duplicate CI records exist. When credentials expire, Discovery does not collect new data or update existing CIs, resulting in stale records rather than duplicates.\n\nMisconfigured CI class definitions do not cause these problems. Class configuration affects attribute availability and inheritance but does not create duplicate records or cause the operational confusion described in the scenario. Class configuration determines which attributes exist and how classes relate to each other in the Configuration Management Database (CMDB) hierarchy but does not generate multiple records for single infrastructure components. The failing Duplicate metric explicitly indicates multiple CI records exist for individual systems, pointing to identification rule failures rather than class definition issues.\n\nDisabled relationship rules do not cause these problems. Relationship configuration affects how CIs are connected but does not create duplicate records. The failing Duplicate metric indicates the root cause is duplicate CIs. Relationship rules determine how Discovery and other data sources create connections between CIs but do not influence whether systems are recorded as single or multiple CI records. The scenario specifically indicates duplicate CI records confusing operations, which relationship configuration does not address. Proper identification rules prevent duplicate CIs regardless of relationship configuration.",
"r": [
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
],
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/config-cmdb-health-metric-weights.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"CI class definitions are misconfigured",
"Duplicate CIs exist for the same physical assets",
"Discovery credentials have expired",
"Relationship rules are disabled"
],
"a": [
1
]
},
{
"n": 36,
"t": "CLS",
"k": 1,
"q": "An organization wants only servers, applications, and databases to appear in CI lookup fields on Incident and Change forms. The Administrator needs to filter which CIs users can select.\n\nWhich concept is used?",
"e": "The concept used is principal classes. When you mark a configuration item (CI) class as principal, it tells ServiceNow that this class is important for IT Service Management (ITSM) processes. Principal classes appear in the CI lookup fields on Incident and Change forms, while non-principal classes are filtered out. Without this filtering, users would have to search through thousands of CI classes including peripherals and consumables to find what they need.\n\nCI class hierarchies is not the concept used for this filtering. The class hierarchy defines how CI classes inherit from each other—parent-child relationships where child classes get attributes from their parents. But hierarchy does not control which classes show up in Incident and Change lookups. That is what principal classes do. Hierarchy and principal class designation are separate things: hierarchy handles inheritance, principal class handles ITSM visibility.\n\nDomain separation is not the concept used here. Domain separation controls which records different users can see based on organizational boundaries, which is useful when multiple business units share an instance. But it does not filter by CI class relevance for ITSM processes. Domain separation works at the record level (who can see which records), while principal classes work at the class level (which types of CIs appear in ITSM lookups).\n\nAccess control rules (ACLs) are not the concept used for this filtering. ACLs control user permissions: who can read, write, or delete records. But they do not determine which CI classes are relevant for ITSM processes. Principal class designation specifically controls which classes populate the CI lookup dropdowns on Incident, Change, and other ITSM forms.",
"r": [
[
"CMDB classifications and class dependency",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBClassifications.html"
],
[
"CMDB CI Class Models",
"https://www.servicenow.com/docs/r/servicenow-platform/cmdb-ci-class-models/cmdb-ci-class-models.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Exploring domain separation",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/company-and-domain-separation/concept/c_DomainSeparation.html"
],
[
"Access Control List Rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
]
],
"o": [
"CI class hierarchies",
"Domain separation",
"Principal classes",
"Access control rules"
],
"a": [
2
]
},
{
"n": 37,
"t": "QB",
"k": 1,
"q": "A user wants to find all Windows servers in the Finance department data center. The user is unfamiliar with CMDB table structures.\n\nHow does the user search for CIs?",
"e": "The user types a question in plain English such as \"Show me Windows servers in Finance\" and reviews the results. Natural Language Query (NLQ) allows users to ask questions naturally without knowing technical query syntax, table structures, or field names. The system interprets the intent behind conversational questions and translates them into database queries automatically.\n\nThe user does not build a structured query using Boolean operators. NLQ interprets conversational questions rather than structured syntax with AND, OR, and comparison operators. Structured query syntax is used in Query Builder where technical users construct explicit filter logic manually. NLQ eliminates syntax requirements by processing natural language input.\n\nThe user does not navigate to table lists and apply filters. Filter builder requires knowing table names and constructing structured filter conditions with field selections and operators. NLQ removes these requirements by accepting questions in plain language and determining appropriate tables and filters internally.\n\nThe user does not create a saved report. Report creation requires technical knowledge of tables and fields that NLQ is specifically designed to eliminate from the user experience. NLQ provides immediate ad-hoc query capability through conversational input rather than requiring predefined report structures configured in advance.",
"r": [
[
"Using Natural Language Query",
"https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/natural-language-query/concept/using-nlq.html"
],
[
"Natural Language Query",
"https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/natural-language-query/concept/natural-language-query.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"Reference field type",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/field-administration/concept/c_ReferenceField.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
]
],
"o": [
"Navigate to the CI table and apply filters manually",
"Type a question in plain English and review the results",
"Create a saved report with the appropriate filters",
"Build a query using Boolean operators like AND and OR"
],
"a": [
1
]
},
{
"n": 38,
"t": "IRE",
"k": 1,
"q": "A global company ingests CI data from multiple external sources into the CMDB. When the same CI attribute is reported differently across sources, the team needs a way to enforce which source's value takes precedence.\n\nWhich ServiceNow capability enables this?",
"e": "Reconciliation Rules help meet the requirements. These are their main features:\nDefine source and attribute precedence when multiple data sources update the same configuration item (CI)\nControl whether attribute values are overwritten, preserved, or conditionally updated\nEnsure consistent handling of conflicting data across Discovery, integrations, and imports\nExecute as part of the Identification and Reconciliation Engine (IRE) during CI updates\nIdentification Rules determine whether incoming data matches an existing CI but do not control how conflicting attribute values are resolved.\n\nApproval Rules manage approval processes for changes or requests but do not determine attribute precedence in Configuration Management Database (CMDB) reconciliation.\n\nBusiness Rules can enforce custom logic or automate tasks on table records, but are not the out-of-the-box mechanism for resolving CMDB attribute conflicts across multiple sources.",
"r": [
[
"Reconciliation Rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_ReconciliationRulesPrinciples.html"
],
[
"Identification Rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html"
],
[
"Approval Rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/administer/service-administration/concept/c_ApprovalRules.html"
],
[
"Business Rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
]
],
"o": [
"Approval Rules",
"Business Rules",
"Reconciliation Rules",
"Identification Rules"
],
"a": [
2
]
},
{
"n": 39,
"t": "DM",
"k": 2,
"q": "Reviewers correct attributes on application configuration items while working a certification task, and a record with a blank certification attribute stays uncertified.\n\nWhich policy settings produce that behavior?",
"e": "Selecting the Allow field updates setting on the policy lets a certification task reviewer amend attribute values during the review. A reviewer who finds a wrong value corrects it and then certifies the record, instead of failing the certification and handing the problem to somebody else. ServiceNow describes the setting as enabling reviewers to update field values in order to certify a configuration item, which matches the first half of this requirement.\n\nClearing the Allow empty field values setting on the policy stops a reviewer certifying a record while a certification attribute remains empty. ServiceNow describes the setting as permitting certification of configuration items with an empty attribute, so clearing it withdraws that permission. Paired with field updates, the combination pushes a reviewer to populate the gap rather than pass it through, and failing the certification remains available.\n\nAdding identifying attributes to the Display fields setting determines which fields appear in list views within Data Certification tasks. Those columns give a reviewer enough context to locate and recognize the right records among a large certification population. Display fields shape what a reviewer sees on the way into the work rather than what a reviewer edits, and they carry no bearing on whether a blank attribute blocks certification.\n\nExtending the Days to complete setting on the policy raises the maximum number of days within which the generated policy tasks reach completion. Where certification notifications are enabled, that same interval determines the milestones leading up to the deadline that each assigned reviewer sees. The setting governs timing across the whole review cycle and leaves both attribute editing and the treatment of empty values entirely unchanged for every record in scope.\n\nDescribing the expectation in the Instructions setting supplies guidance text that reaches the assigned users to help them complete their tasks. Clear instructions improve the consistency of reviewer judgment across a large certification population and reduce follow-up questions. Guidance text persuades rather than configures, so the platform continues to permit or refuse edits and empty values according to the two settings that control that behavior.",
"r": [
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"Data Certification",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_DataCertification.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
]
],
"o": [
"Adding identifying attributes to the Display fields setting",
"Clearing the Allow empty field values setting on the policy",
"Describing the expectation in the Instructions setting",
"Extending the Days to complete setting on the policy",
"Selecting the Allow field updates setting on the policy"
],
"a": [
1,
4
]
},
{
"n": 40,
"t": "CLS",
"k": 1,
"q": "An organization is onboarding new application‑related components that do not fit any existing CMDB classes in the configuration data model. The governance team needs to review class attributes, enforce mandatory fields, and determine whether custom hierarchy changes are needed.\n\nWhat does the team use to meet the requirement?",
"e": "The Configuration Management Database (CMDB) governance team should utilize the Configuration Items (CI) Class Manager, a purpose-built interface designed for managing the CMDB schema. CI Class Manager allows users to:\n\nView and navigate the complete CMDB table hierarchy\nAdd or modify class attributes; including required fields and inheritance behaviors\nCreate new classes or extend existing ones\nValidate compliance with CMDB schema best practices\nEnsure structural consistency across the CMDB\n\nThe team should not use the CMDB Health Dashboard. This evaluates data quality: completeness, correctness, compliance, but does not allow schema or class-level modifications.\n\nThe team should not use Tables in the System Definition, as direct table edits bypass governance, introduce risk, and should not be used for CMDB hierarchy or class-level attribute changes.\n\nThe team should not use the Data Management Policies, as these govern day-to-day record behavior but cannot create or modify CMDB classes or hierarchies.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html"
],
[
"Table administration",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/table-administration/concept/exploring-table-administration.html"
],
[
"Data Management Policies",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/managing-data/concept/exploring-data-management.html"
]
],
"o": [
"Tables in the System Definition",
"CI Class Manager",
"CMDB Health Dashboard",
"Data Management Policies"
],
"a": [
1
]
},
{
"n": 41,
"t": "CLS",
"k": 1,
"q": "The CMDB Administrator needs to track F5 load balancers in their CMDB with these requirements:\n\nDiscovery automatically populates load balancer CIs.\nCustom fields are needed for regulatory compliance tracking.\nThe solution must avoid rework during ServiceNow upgrades.\n\nA developer suggests creating a custom cmdb_ci_lb_f5 class to meet these requirements.\n\nWhat does the CMDB Administrator do?",
"e": "The Configuration Management Database (CMDB) Administrator uses the out-of-box Load Balancer class with u_ prefixed custom fields to meet all three requirements. Discovery patterns already target the standard Load Balancer class (requirement 1), u_ fields allow regulatory compliance tracking (requirement 2), and out-of-box classes receive ServiceNow upgrade support without rework (requirement 3). Extending the out-of-box class inherits proven Discovery patterns, identification rules, and health metrics while custom u_ fields address specific compliance needs. This approach leverages platform capabilities while avoiding custom class technical debt. Organizations achieve all requirements without creating maintenance burden.\n\nThe CMDB Administrator does not create a child class extending Load Balancer for compliance-tracked devices. While child classes preserve Discovery compatibility, they introduce unnecessary complexity when all load balancers need the same compliance fields. Child classes are appropriate when only a subset of CIs need different behavior, not when extending attributes across an entire class. This distinction is critical for proper platform configuration.\n\nThe CMDB Administrator does not store compliance data in related records linked to Load Balancer CIs. Related records add query complexity and require joins to report CI data alongside compliance information. When compliance fields appear directly on the CI form and in standard CI reports, u_ prefixed fields on the base class provide simpler implementation and maintenance.\n\nThe CMDB Administrator does not request ServiceNow to add compliance fields to the out-of-box class. Enhancement requests might take years or never be implemented. The u_ prefix convention exists specifically to allow customers to extend out-of-box classes immediately without waiting for vendor changes. Custom attributes using the u_ prefix inherit all capabilities of the parent class including Discovery patterns, identification rules, and health metrics. This extension approach provides immediate business value while maintaining full upgrade compatibility. Organizations address requirements today rather than waiting for uncertain future platform enhancements.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Create a CI class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_CreateCIType.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Table extension and classes",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/table-administration/concept/table-extension-and-classes.html"
],
[
"Working with CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
]
],
"o": [
"Request ServiceNow add compliance fields to the out-of-box class",
"Store compliance data in related records linked to Load Balancer CIs",
"Use the out-of-box Load Balancer class with the u_ prefixed custom fields",
"Create a child class extending Load Balancer for compliance-tracked devices"
],
"a": [
2
]
},
{
"n": 42,
"t": "DM",
"k": "d",
"q": "A CMDB Administrator operationalizes CMDB Health to address findings from a governance review.\n\nDrag and drop the location the Administrator navigates to in order to address each finding.\n\nSome options may not apply.",
"e": "The Administrator navigates to configuration item (CI) Class Manager to configure a staleness rule on the Correctness tab. Staleness rules evaluate how recently a discovery source has updated each CI. The administrator sets a threshold so that CIs not refreshed by any source within the defined period are flagged as stale. The Correctness Score Calculation job then identifies the decommissioned servers and surfaces them for remediation on the CMDB Health Dashboard.\n\nThe Administrator navigates to Data Manager to create an Attestation policy. Attestation verifies that a CI record represents a resource that still exists in the organization and that ownership is current. The Administrator configures the policy to target business application CIs and assigns attestation tasks to the appropriate service owners or managed-by contacts. CIs that fail attestation become candidates for retirement from the CMDB.\n\nThe Administrator navigates to the De-duplication experience in CMDB Workspace. The de-duplication dashboard displays duplicate CI tasks generated by the CMDB Health Correctness metric. The Administrator reviews each duplicate set, selects the authoritative record, and merges or retires the remaining duplicates. For large volumes the Administrator creates a de-duplication template to remediate duplicate tasks in bulk.\n\nThe Administrator navigates to Data Manager to create a Certification policy. Certification assigns tasks to data stewards who review specific CI field values for accuracy. The Administrator configures the policy to target the affected CI class and the attributes populated by the third-party integration. Assigned certifiers verify each value and update incorrect data directly on the CI record.\n\nThe CMDB Health Dashboard displays aggregated health scores across completeness, correctness, and compliance metrics. It surfaces data quality issues but does not provide the configuration or remediation actions needed to resolve them. The Administrator uses the dashboard to monitor overall CMDB health, not to address specific governance findings directly.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Review CMDB Data Manager attestation tasks in CMDB Workspace or in Service Graph Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/review-data-manager-attes-task.html"
],
[
"CI de-duplication experience in CMDB Workspace and in Service Graph Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/dedup-ci-exp-cmdb-workspace.html"
],
[
"Data Certification experience in CMDB Workspace",
"https://www.servicenow.com/community/cmdb-articles/quot-new-quot-data-certification-data-certification-experience/ta-p/3337863"
],
[
"How to configure completeness KPI in CMDB health dashboard?",
"https://www.servicenow.com/community/itom-articles/how-to-configure-completeness-kpi-in-cmdb-health-dashboard/ta-p/2323717"
]
],
"o": [
"Servers from a decommissioned data center still appear as active in the CMDB.",
"Business application CIs have no verified owner and leadership questions their accuracy.",
"After a cloud migration, the CMDB contains records that represent the same physical host.",
"A quarterly audit reveals that CI attribute values from a third-party integration contain inaccuracies."
],
"c": [
"CI Class Manager",
"CMDB Workspace",
"Data Manager",
"CMDB Health Dashboard"
],
"a": [
0,
2,
1,
2
]
},
{
"n": 43,
"t": "CLS",
"k": 1,
"q": "Service desk agents struggle to select the correct CI when creating incidents because the CI lookup displays too many CI types. The CMDB team wants to limit the CI types that appear by default in these lookups.\n\nWhich ServiceNow capability helps achieve this?",
"e": "The Principal configuration item (CI) Class attribute helps meet the requirement by defining which CI classes appear by default in CI lookup fields across Information Technology Service Management (ITSM) processes. This capability provides a curated, high‑level view of the Configuration Management Database (CMDB) that prioritizes the CI classes most relevant to service desk work. By limiting the initial list to principal classes, the lookup experience becomes more focused, reducing cognitive load and preventing agents from navigating through dozens of low‑level or highly specialized CI types. This results in faster CI selection, fewer errors when associating incidents with configuration items, and overall improved operational efficiency.\n\nReference qualifiers do not help meet the requirement. They apply filters only at the individual field level and only under specific conditions. While they can restrict CI selection in particular forms or based on dynamic logic, they do not establish the universal, system‑wide defaults that determine which CI classes appear for all users in standard CI lookups. Their behavior is context‑dependent rather than structural, making them inappropriate for creating a consistent lookup experience across ITSM modules.\n\nForm Builder does not help meet the requirement. Form Builder focuses exclusively on configuring form layout, field order, and visibility rules. It does not influence the underlying data returned in CI lookup fields. Although Form Builder can adjust how a form looks and behaves, it cannot control which CI classes are displayed by default, nor can it simplify the CI selection list to improve agent usability.\n\nSchema Map does not help meet the requirement. Schema Map offers a visual representation of CMDB table structures, inheritance, and relationships but does not provide mechanisms to choose, restrict, or prioritize CI classes for lookup purposes. Schema Map supports understanding of the CMDB’s architecture, but it does not affect the behavior of lookup fields or the default CI class list presented to end users.",
"r": [
[
"Update class list in the Principal Class filter",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/update-principal-class-filter.html"
],
[
"Reference Qualifiers",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/script/server-scripting/concept/c_ReferenceQualifiers.html"
],
[
"Form Builder",
"https://www.servicenow.com/docs/bundle/zurich-application-development/page/administer/form-builder/concept/access-form-builder.html"
],
[
"Schema Map",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/table-administration/task/t_GenerateASchemaMap.html"
]
],
"o": [
"Reference qualifiers",
"Form Builder",
"Principal CI Class attribute",
"Schema Map"
],
"a": [
2
]
},
{
"n": 44,
"t": "ING",
"k": 1,
"q": "A company runs scheduled Discovery to populate their CMDB with infrastructure data. An Administrator notices that relationship records are being created between application servers and the databases they connect to.\n\nWhich statement describes how these CI relationships are created?",
"e": "During scheduled probes, Discovery analyzes running processes, open ports, and network connections to create relationships between CIs. Based on these detected dependencies, it creates relationship records in the CMDB automatically. This automation reduces manual effort and keeps relationships current with infrastructure changes. Each scheduled run validates existing relationships while creating new ones for newly detected dependencies. Discovery capabilities complement other data collection methods for comprehensive CMDB population strategies.\n\nThe administrator does not need to manually create each relationship after Discovery identifies the CIs. Discovery automatically creates relationships when it detects dependencies through network analysis and process monitoring. Relationships are maintained and updated each time Discovery runs against the infrastructure. This automation eliminates manual relationship creation for dependencies that Discovery does detect through its standard probing mechanisms. This understanding prevents misconfiguration and supports proper system implementation.\n\nDiscovery does not require a separate integration to establish relationships. It natively creates both CI records and relationship records based on detected dependencies during the standard discovery process. Both record types are created through the same probes and patterns. This unified approach keeps relationship data synchronized with CI data without additional integration configuration. This distinction is critical for proper platform configuration. Understanding this difference ensures administrators select the correct mechanisms for each specific use case.\n\nRelationships are not created only when using Service Mapping. Standard Discovery creates relationships between infrastructure CIs based on detected network connections and process dependencies. Service Mapping provides additional application-level topology mapping but is not a prerequisite for infrastructure relationships. Organizations use standard Discovery alone and optionally add Service Mapping later for more detailed application topology visualization. Discovery capabilities complement other data collection methods for comprehensive CMDB population strategies.",
"r": [
[
"Preconfigured CI relationships in tag-based discovery",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/ci_relationships_tag_mapping.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"Pattern-based discovery in Service Mapping",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/service-mapping/concept/pattern-based-discovery.html"
]
],
"o": [
"Relationships are created when using Service Mapping, not standard Discovery.",
"The Administrator needs to manually create each relationship after Discovery identifies the CIs.",
"Discovery detects connections and process dependencies to create relationships between CIs.",
"Discovery creates CI records but requires a separate integration to establish relationships."
],
"a": [
2
]
},
{
"n": 45,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator needs an inherited field on the Linux Server class to have a different, nonempty default value from the Server class it extends. The Server field definition is to remain unchanged for future upgrades.\n\nWhich configuration delivers this outcome?",
"e": "A dictionary override on the Linux Server class sets the child-specific default while preserving the Server field definition. Dictionary overrides belong to the platform table configuration and change selected properties of inherited fields on extended tables. A default-value override therefore supplies the requested starting value without editing the parent dictionary entry. Keeping this variation on the child table also leaves sibling classes outside the customization, matching the requirement to preserve the parent definition for upgrades.\n\nAn onLoad client script on the Linux Server form runs in the browser after a new record's form loads, and the platform documentation lists setting default record values as a typical use for this script type. The script can populate a nonempty value through browser-side logic without touching the Server dictionary entry, so the parent definition stays as configured. That value comes from script logic rather than the field's Default Value attribute in the system dictionary, so the Linux Server class still has no configured default value. A dictionary override actually sets a class-level default value, which a client script does not.\n\nA data policy applied to the Linux Server class enforces mandatory and read-only field states in the platform data layer. Data policies can apply to records submitted through forms, import sets, and web services, with configuration options governing their scope. Those actions control field requirements and editability; they do not define a different nonempty class default. An existing inherited dictionary default is not erased by adding a data policy, so changing the starting value still requires the dictionary configuration.\n\nA user interface (UI) policy action on the Linux Server form controls field behavior in the platform form interface. Its settings make a field mandatory, visible, or read-only, or clear the field when conditions are met. Clearing a field does not supply the different nonempty default requested in this scenario. These form actions also do not define the inherited field default at the table level, so they do not provide the requested class configuration while preserving Server.",
"r": [
[
"Dictionary overrides",
"https://www.servicenow.com/docs/r/platform-administration/table-administration-and-data-management/c_DictionaryOverrides.html"
],
[
"Dictionary entry form",
"https://www.servicenow.com/docs/r/platform-administration/table-administration-and-data-management/r_DictionaryEntryForm.html"
],
[
"Data policy",
"https://www.servicenow.com/docs/r/platform-administration/c_DataPolicy.html"
],
[
"Policies and rules properties in Table Builder",
"https://www.servicenow.com/docs/r/application-development/form-builder-glide-family-release/ui-policy-fields.html"
],
[
"Client scripts",
"https://www.servicenow.com/docs/r/api-reference/scripts/client-scripts.html"
]
],
"o": [
"A data policy applied to the Linux Server class",
"A user interface (UI) policy action on the Linux Server form",
"A dictionary override on the Linux Server class",
"An onLoad client script on the Linux Server form"
],
"a": [
2
]
},
{
"n": 46,
"t": "IRE",
"k": 1,
"q": "A company is populating CIs into CMDB. The IT Operations needs a reliable method to determine whether an incoming CI is inserted as a new record or updated as an existing one. \n\nWhich mechanism does the IT Operations team use?",
"e": "The IT Operations team should use the Identification and Reconciliation Engine (IRE). You can use IRE to process incoming configuration item (CI) data to determine whether a CI already exists by using identification rules. You can also use IRE to know how attributes should be updated by using reconciliation rules. This helps maintain Configuration Management Database (CMDB) accuracy and prevents duplicates. \n\nThe IT Operations team should not use Transform Map field mapping rules. You can use these rules to handle data transformations during imports, but you cannot use them to perform CI identification or enforce reconciliation logic. Transform Map scripts need to be edited to include a call to the CMDBTransformUtil API to explicitly apply the IRE. \n\nThe IT Operations team should not use the CMDB Query Builder, as it is intended for exploring and reporting CMDB relationships, rather than for data ingestion or identification logic. \n\nThe IT Operations team should not use the Data Management Policies because they are used for day-to-day record governance, not for data ingestion, CMDB population, or integration processing.",
"r": [
[
"Components and process of Identification and Reconciliation",
"https://www.servicenow.com/docs/bundle/yokohama-servicenow-platform/page/product/configuration-management/concept/c_CompsandProcessIDandReconcil.html"
],
[
"Import Sets and the IRE",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/querying-cmdb.html"
],
[
"Data Management Policies",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/managing-data/concept/exploring-data-management.html"
]
],
"o": [
"Transform Map field mapping rules",
"Identification and Reconciliation Engine (IRE)",
"Data Management Policies",
"CMDB Query Builder"
],
"a": [
1
]
},
{
"n": 47,
"t": "IRE",
"k": 1,
"q": "A company imports CI data into the CMDB using transform maps. They enable IRE so the system uses predefined identification rules, such as serial number or name, to detect existing CIs.\n\nWhich transform map component becomes unnecessary?",
"e": "Coalesce values are no longer needed. When the Identification and Reconciliation Engine (IRE) is enabled, the responsibility for finding an existing CI no longer depends on the transform map’s coalesce fields. Instead, the IRE uses predefined identification rules that are already configured in the CMDB. These rules rely on attributes such as serial number, name, or other unique identifiers to determine if the CI already exists.\n\nonBefore scripts are still needed to call the CMDBTransformUtil API, which explicitly triggers the IRE during the transform. Without these scripts, the system would not initiate the IRE logic, and the import would not follow the identification and reconciliation rules. This means onBefore scripts still play an active part in making the IRE process work.\n\nField maps still control how data is transferred from the source table into the target CMDB CI table. The IRE identifies records, but it does not replace the need to map incoming fields, such as serial number, model, or location, to their corresponding CMDB attributes.\n\nThe source table holds the incoming dataset, and the transform map uses it to read records, apply mapping rules, and run IRE‑triggering scripts. Regardless of whether coalesce fields or the IRE is used for identification, the import process requires a source table to determine where the data comes from.",
"r": [
[
"Identification and Reconciliation Engine (IRE)",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CMDBIdentifyandReconcile.html"
],
[
"CIs Processed Via IRE",
"https://noderegister.service-now.com/kb?id=kb_article_view&sysparm_article=KB0829078"
],
[
"CMDBTransformUtil Usage in Transform Maps",
"https://www.servicenow.com/community/cmdb-articles/cmdbtransformutil-usage-in-transform-maps/ta-p/2608369"
],
[
"Create a transform map",
"https://www.servicenow.com/docs/r/integrate-applications/system-import-sets/t_CreateATransformMap.html"
]
],
"o": [
"onBefore scripts",
"Field maps",
"Coalesce values",
"Source table"
],
"a": [
2
]
},
{
"n": 48,
"t": "HEA",
"k": 1,
"q": "A CMDB Manager is planning quarterly improvement initiatives and needs to identify the highest-priority areas for data quality focus. The Manager uses Foundation Dashboards to guide planning.\n\nHow do Foundation Dashboards provide actionable insights for improvement initiatives?",
"e": "Foundation Dashboards provide actionable insights by highlighting data quality gaps with recommendations and tracking progress toward readiness targets. Foundation Dashboards guide improvement planning by showing priorities based on actual data analysis and progress trends over time. Managers can see which gaps are closing and which require additional attention based on current trajectory versus targets. Impact-based prioritization helps focus limited improvement resources on changes that deliver the most business value.\n\nFoundation Dashboards do not provide actionable insights by providing pre-configured workflows bypassing manual intervention in planning. Dashboards inform decision-making rather than automatically executing changes to configuration management data base (CMDB) data that might have unintended consequences. Data corrections require human review to ensure changes are appropriate and do not introduce new problems. Foundation Dashboards identify what needs attention while humans decide how to address identified issues through planned initiatives.\n\nFoundation Dashboards do not provide actionable insights by offering static generic suggestions unrelated to specific issues. Recommendations are based on actual data quality analysis rather than random selection designed to rotate attention artificially. Persistent issues deserve continued focus until resolved rather than being deprioritized for variety sake. Data-driven recommendations ensure improvement efforts address real gaps rather than following arbitrary rotation schedules.\n\nFoundation Dashboards do not provide actionable insights by displaying historical information without current status. Foundation Dashboards show current status and recommendations for improvement rather than only historical information without actionable guidance. Historical trends provide context, but current metrics and future targets drive improvement planning decisions. Managers need to see where CMDB health stands today and what actions will move metrics toward targets.",
"r": [
[
"Monitor health in CSDM and CMDB Data Foundations Dashboards",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/csdm-cmdb-foundations-dashboards.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
]
],
"o": [
"Dashboards highlight data quality gaps with recommendations tracking progress.",
"Dashboards display historical information without current status or recommendations.",
"Dashboards provide pre-configured workflows bypassing manual intervention in planning.",
"Dashboards offer static generic suggestions unrelated to specific issues."
],
"a": [
0
]
},
{
"n": 49,
"t": "CLS",
"k": 2,
"q": "An organization wants CI operational status changes to automatically update corresponding Asset record states, and vice versa.\n\nWhich tools enable this?",
"e": "State mapping rules define how configuration item (CI) operational status values correspond to Asset install status values. These mappings establish the translation between records during synchronization. For example, CI status \"Retired\" maps to Asset status \"Disposed\" so both records reflect the same lifecycle stage automatically.\n\nSynchronization business rules trigger status updates when either the CI or Asset record changes. These rules provide real-time synchronization by detecting lifecycle status changes and updating the related record based on configured state mappings. When a CI status changes, the corresponding Asset updates automatically.\n\nCustom REST API scripts are not appropriate for CI-Asset lifecycle synchronization. Built-in state mapping and business rules handle this scenario more efficiently than custom scripted integrations. Platform-native functionality provides reliable, maintainable synchronization without custom development overhead.\n\nManual reconciliation processes do not enable automatic synchronization. The scenario requires automated updates when status changes occur, not periodic human review. Manual processes leave records out of sync until someone intervenes, creating data inconsistency between CI and Asset records.\n\nImport set scheduled jobs do not enable CI-Asset lifecycle synchronization. Import sets bring external data into ServiceNow rather than synchronizing internal records. CI-Asset synchronization requires real-time response to record changes through business rules, not batch processing on a schedule.",
"r": [
[
"Work with Asset and CI",
"https://www.servicenow.com/docs/r/it-asset-management/asset-management/work-with-asset-ci.html"
],
[
"CMDB CI Lifecycle Management",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/r/build-workflows/business-rules-classic/c_BusinessRules.html"
],
[
"Table API",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/integrate/inbound-rest/concept/c_TableAPI.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
]
],
"o": [
"Manual reconciliation processes",
"Custom REST API scripts",
"Import set scheduled jobs",
"State mapping rules",
"Synchronization business rules"
],
"a": [
3,
4
]
},
{
"n": 50,
"t": "CSDM",
"k": 1,
"q": "An organization wants to understand how CSDM affects their ability to implement new ServiceNow products. The platform owner needs to explain the compatibility benefits to stakeholders.\n\nHow does CSDM standardization ensure compatibility with current and future ServiceNow products?",
"e": "ServiceNow products consume CSDM-structured data for seamless integration. ServiceNow designs IT Service Management (ITSM), IT Operations Management (ITOM), and other products to leverage Common Service Data Model (CSDM) classes and relationships as their foundation. Organizations following CSDM can adopt new products with minimal integration effort because the data structures products expect already exist. This forward compatibility protects implementation investments as ServiceNow releases new capabilities.\n\nCSDM does not lock the data model to prevent conflicting modifications. CSDM is designed to be extensible, allowing organizations to add custom classes and attributes while maintaining core structures that products depend on. Compatibility comes from using standard structures that products expect rather than from preventing all customization entirely. Organizations extend CSDM as needed while preserving the base model that ensures product compatibility and upgrade success.\n\nServiceNow does not provide automatic migration scripts to convert legacy structures. While upgrade tools exist to assist with platform upgrades, CSDM compatibility results from proactive adoption of standard structures before new products are deployed rather than reactive conversion. Organizations actively implement CSDM rather than relying on automatic conversion that might not correctly map legacy custom structures to CSDM patterns or preserve business logic.\n\nCSDM compliance does not guarantee custom applications work across all versions. Custom applications might still require updates when platform versions change since custom code depends on many factors beyond CSDM data structures including APIs and platform behaviors. CSDM ensures out-of-box ServiceNow products work properly with the data model rather than guaranteeing all custom code remains compatible indefinitely without regression testing.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
]
],
"o": [
"CSDM compliance guarantees custom applications work across all versions.",
"CSDM locks the data model to prevent conflicting modifications.",
"ServiceNow provides automatic migration scripts to convert legacy structures.",
"ServiceNow products consume CSDM-structured data for seamless integration."
],
"a": [
3
]
},
{
"n": 51,
"t": "ING",
"k": 1,
"q": "An Administrator receives a daily CSV export from their asset management system containing hardware inventory data. The data changes infrequently, which impacts when the CMDB updates are performed. \n\nWhich integration approach does the Administrator apply?",
"e": "Scheduled imports are the most appropriate approach when data changes infrequently and near-real-time accuracy is not required. Daily CSV exports with infrequent changes are ideal for scheduled import jobs that run at defined intervals, minimizing system overhead while maintaining acceptable data freshness for asset management scenarios. Scheduled imports align well with batch file generation patterns and avoid the complexity of real-time integration infrastructure when immediate updates are not a business requirement.\n\nEvent-driven integration is not the most appropriate approach when data changes infrequently and near-real-time accuracy is not required. Event-driven integrations are designed for scenarios requiring immediate Configuration Management Database (CMDB) updates when changes occur, not batch file processing where timing is not critical. The overhead of establishing event-driven architecture for data that updates only once daily provides no practical benefit while adding unnecessary complexity to the integration design. This configuration supports ServiceNow platform best practices and enables effective enterprise CMDB management.\n\nContinuous polling is not the most appropriate approach when data changes infrequently and near-real-time accuracy is not required. Continuous polling wastes system resources monitoring a file that only changes once daily, and scheduled imports aligned with the export timing provide better efficiency for batch file processing. Polling every few seconds for a file that updates once per day generates hundreds of thousands of unnecessary checks without providing any benefit.\n\nManual triggered imports are not the most appropriate approach when data changes infrequently and near-real-time accuracy is not required. Relying on manual triggers creates risk of missed imports, inconsistent timing, and requires staff availability that automated scheduling avoids. Scheduled automated imports eliminate human error and ensure consistent data population without requiring administrator intervention for each import cycle throughout the year.",
"r": [
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/identification-import-sets.html"
],
[
"Discovery probes and sensors",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_DiscoveryProbesAndSensors.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
],
[
"Integration Hub spokes",
"https://www.servicenow.com/docs/r/integrate-applications/integration-hub/spokes-list.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
]
],
"o": [
"Manual triggered imports",
"Event-driven integration",
"Continuous polling",
"Scheduled imports"
],
"a": [
3
]
},
{
"n": 52,
"t": "HEA",
"k": 1,
"q": "Which KPI categories does ServiceNow use to calculate the overall CMDB Health score?",
"e": "The four KPI categories ServiceNow uses are Completeness, Correctness, Compliance, and Relationship Health, which measure different aspects of Configuration Management Database (CMDB) data quality. These four KPIs evaluate whether required fields are populated, data values are accurate, CIs conform to defined rules, and relationships are properly maintained. Each Key Performance Indicator (KPI) addresses a distinct dimension of data quality that contributes to overall CMDB usefulness. Together they provide comprehensive visibility into whether CMDB data reliably supports IT service management processes.\n\nAccuracy, Completeness, Consistency, Timeliness are not the CMDB Health KPI categories in ServiceNow. While these concepts relate to data quality in general terms, ServiceNow CMDB Health specifically uses Completeness, Correctness, Compliance, and Relationship Health as its four KPI categories. These alternative terms describe generic data quality dimensions that might apply to various enterprise systems. ServiceNow defines specific KPI categories optimized for configuration management data quality assessment and CMDB governance.\n\nDiscovery Coverage, Identification and Reconciliation Engine (IRE) Success, Duplicate Rate, and Staleness are not the main KPI categories in CMDB Health. These might be individual metrics within health audits but are not the four primary categories used to calculate overall CMDB Health scores. Individual audit checks roll up into the four main KPI categories rather than representing categories themselves.\n\nData Volume, Update Frequency, Query Performance, and Storage Utilization are not CMDB Health KPIs in ServiceNow. These metrics relate to system performance rather than data quality, which is the focus of CMDB Health metrics and dashboards. Performance metrics monitor platform operation and capacity while CMDB Health focuses on whether data content supports business processes effectively. Performance dashboards and CMDB Health dashboards serve different administrative purposes and audiences within IT operations.",
"r": [
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
],
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/config-cmdb-health-metric-weights.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html"
],
[
"ServiceNow CMDB Health Dashboard",
"https://www.kanini.com/blog/servicenow-cmdb-health-dashboard"
]
],
"o": [
"Completeness, Correctness, Compliance, Relationship Health",
"Data Volume, Update Frequency, Query Performance, Storage Utilization",
"Discovery Coverage, Reconciliation Success, Duplicate Rate, Staleness",
"Accuracy, Completeness, Consistency, Timeliness"
],
"a": [
0
]
},
{
"n": 53,
"t": "DM",
"k": 1,
"q": "An organization wants to ensure its ServiceNow CMDB is managed and maintained through an ongoing, structured process rather than a one‑time project.\n\nWhich action do they implement?",
"e": "The IT leadership should define a Configuration Management Database (CMDB) scope and configuration item (CI) class ownership, implement automated discovery and ingestion with reconciliation rules. Operationalizing a CMDB means treating it not as a one-time implementation, but as a living, governed system. According to CMDB best-practice guidance, you need clear governance roles and responsibilities to decide which CI classes to include. \n\nThe IT leadership should not populate all possible classes, as this overloads the CMDB, and should not rely on IT staff to update CIs, as this lacks accountability. \n\nThe IT leadership should not limit the automated ingest to principal CI classes only. While these classes play a crucial role in Service Management, all in-scope classes can benefit from automated ingestion, making the governance of the CMDB a more structured and reliable process. Not using automation for CI ingestion risks data becoming stale or incomplete. \n\nThe IT leadership should not store minimal data, and regularly monitor CMDB health, as this significantly degrades the value of the CMDB by omitting other core CI data.",
"r": [
[
"CMDB Design Guidance: Operationalizing your CMDB",
"https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-cmdb-design-guidance.pdf"
],
[
"Best practices for CMDB Data Management",
"https://www.servicenow.com/community/cmdb-articles/best-practices-for-cmdb-data-management/ta-p/2841377"
]
],
"o": [
"Define a CMDB scope and CI class ownership, implement automated discovery and ingestion with reconciliation rules",
"Store minimal data (names, types), and regularly monitor CMDB health",
"Limit automated ingest to the principal CI classes",
"Populate all possible CI classes, allow IT staff to update CIs, and perform regular audits"
],
"a": [
0
]
},
{
"n": 54,
"t": "M360",
"k": "d",
"q": "A configuration management database (CMDB) administrator investigates competing Operating system values on server configuration items (CIs) with CMDB 360 data collection enabled. The team also publishes a report from a scheduled saved query whose definition stays unchanged.\n\nMatch each requirement to its feature.\n\nSome options may not apply.",
"e": "The configuration management database (CMDB) stores retained records for discovery-source and configuration item (CI) combinations in the CMDB MultiSource Data table, including sources whose proposed updates were rejected. CMDB 360 makes that store available for examination, queries, and reports when collection is enabled for the class. The requirement identifies the underlying table rather than a comparison screen or rule configuration. Its retained source data supports investigation of competing attribute values without treating an incoming proposal as proof that the source was authorized to update the CI.\n\nCMDB 360 Data Preview on the CI form displays the current CMDB attribute value alongside incoming values from other discovery sources. The related link opens that comparison while the administrator is viewing the CI record. This location distinguishes the requested operation from querying the underlying data table or opening CI Class Manager. Seeing a source value in the preview establishes what it proposed, while reconciliation rules separately determine whether the source has update authority.\n\nThe Reconciliation Rules page in CI Class Manager provides a preview of authorized discovery sources for each attribute in precedence order. That view addresses the class-level authorization requirement rather than displaying the competing values on a particular CI form. A source appearing in CMDB 360 data has submitted information, but its appearance does not establish permission to update the stored value. Reviewing the rules separates the configured authority order from the retained record of source proposals.\n\nA dynamic Query Builder report on a scheduled saved query refreshes with the latest results when that saved query runs again. Query Builder creates the report after the query is saved, has a schedule, and its complete results are available. The requirement keeps the query definition unchanged, so subsequent runs update the associated report data. Editing the definition breaks synchronization and requires a new report; the dynamic report does not automatically adopt the edited query structure.\n\nCMDB Health Dashboard scorecards present aggregated health measures for selected CI classes, services, or health groups. The dashboard includes Completeness, Correctness, and Compliance key performance indicator (KPI) tiles, with drill-downs into the corresponding metrics and affected records. These views support monitoring the quality of CMDB populations. The requirements instead concern a retained source-data table, a CI-form comparison, source authorization rules, and a dynamic report from a saved query, so the scorecards remain unused in this matching exercise.",
"r": [
[
"CMDB 360",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/multisource-cmdb.html"
],
[
"Create a dynamic report",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-dynamic-report.html"
],
[
"View CMDB Health Dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_MonitorCMDBHealth.html"
]
],
"o": [
"Locate retained data for each discovery-source and CI combination.",
"Inspect competing submissions alongside the currently stored attribute value.",
"Preview authorized sources for a class attribute in their configured precedence order.",
"Keep published results current after each execution without rebuilding the output."
],
"c": [
"CMDB MultiSource Data table",
"CMDB 360 Data Preview",
"Reconciliation Rules page in CI Class Manager",
"Dynamic Query Builder report",
"CMDB Health Dashboard scorecards"
],
"a": [
0,
1,
2,
3
]
},
{
"n": 55,
"t": "ING",
"k": 2,
"q": "An external system sends CI data to the CMDB in near real time through an API. The configuration management team needs an ingestion method that ensures data accuracy, applies reconciliation rules, and minimizes manual effort.\n\nWhich data ingestion methods meet these requirements?",
"e": "The configuration management team should use Scripted Web Services or Service Graph Connectors. Service Graph Connectors are certified, pre-built integrations that enable push-based integrations, depending on the external system. \n\nScripted Web Services would be used for cases where pre-built Service Graph Connectors are not available, and thus, the integration needs to be custom-built. When an external system must push CI data into ServiceNow in near real-time, the most appropriate ingestion methods are Scripted Web Services or Service Graph Connectors, as they allow immediate data transfer and can trigger IRE evaluation as data arrives. \n\nThe configuration management team should not use Import Sets with Scheduled Data Sources. Import Sets with Scheduled Data Sources are a batch-oriented method for inserting CI data into ServiceNow, rather than in real-time. \n\nThe configuration management team should not use Discovery using MID Server Sensors. Discovery automatically identifies and maps IT infrastructure and services across an enterprise network, populating the CMDB with accurate, up-to-date CIs and their relationships. However, it pulls data from devices rather than accepting externally pushed CI data from an external source.",
"r": [
[
"Service Graph Connectors",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-sgc-available.html"
],
[
"Inbound Web Services",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/integrate/web-services/concept/inbound-web-services.html"
],
[
"Schedule a data import",
"https://www.servicenow.com/docs/bundle/yokohama-integrate-applications/page/administer/import-sets/task/t_ScheduleADataImport.html"
],
[
"Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/reference/r-discovery.html"
]
],
"o": [
"Discovery using MID Server Sensors",
"Import Sets with Scheduled Data Sources",
"Service Graph Connectors",
"Scripted Web Services"
],
"a": [
2,
3
]
},
{
"n": 56,
"t": "IRE",
"k": 1,
"q": "A CMDB Administrator uses the Duplicate CI Remediator to merge three duplicate server CIs. One CI was created by Discovery, one by a Service Graph Connector, and one was manually entered. After selecting a main CI, the Administrator needs to evaluate which duplicate's values are most accurate for each attribute that differs before merging them into the main CI.\n\nHow does the Duplicate CI Remediator support this comparison?",
"e": "The Duplicate CI Remediator uses the side-by-side comparison feature, on the Merge Attribute Values tab, to compare data quality across records after the main CI has already been selected. The comparison view shows attribute values from all duplicate configuration items (CIs), enabling informed selection of which value to retain for each attribute that differs. This visual comparison highlights attribute differences, missing values, and data source origins across duplicate records. Administrators evaluate which record contains more recent updates, more complete attribute population, and more reliable data sources to choose the most accurate value for the main CI, attribute by attribute, while merging valuable data from other duplicates.\n\nAutomatic selection based on attribute count does not help compare data quality. The administrator needs to evaluate accuracy, not just quantity. Human judgment is required to assess which record contains the most reliable information from the different sources. A record with many populated attributes might contain outdated or incorrect data while a record with fewer attributes might have more accurate information from authoritative sources. Attribute quantity does not correlate with data quality or reliability. The Duplicate CI Remediator enables administrators to evaluate each attribute individually for accuracy and source reliability.\n\nA simple table requiring manual deletion does not support comparing data quality. The Duplicate CI Remediator provides comparison capabilities specifically to help administrators evaluate which duplicate's values are most accurate before merging them into the main CI. Manual table deletion removes records without providing attribute-level comparison tools needed for informed decisions. The Duplicate CI Remediator presents duplicate records side-by-side showing all attribute values, enabling administrators to assess which record contains the most accurate and complete data. This comparison capability ensures data quality improves through the merge rather than retaining or discarding the wrong values.\n\nShowing only differences does not help compare overall data quality. The administrator needs to see complete records to assess which source provided the most accurate data across all attributes. Highlighting only differing fields obscures the full context needed to evaluate data completeness and accuracy across both duplicate records. The administrator does assess attribute accuracy, data completeness, recent update timestamps, and data source reliability simultaneously. Side-by-side full record comparison enables comprehensive evaluation that difference-only views does not provide when choosing which duplicate's values to merge into the main CI.",
"r": [
[
"Remediate a de-duplication task (manual)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/reconcile-dup-task.html"
],
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html"
],
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"System dictionary",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html"
]
],
"o": [
"Side-by-side comparison of attribute values",
"Simple table requiring manual deletion",
"Automatic selection based on attribute count",
"Shows differences only, creates new merged CI"
],
"a": [
0
]
},
{
"n": 57,
"t": "HEA",
"k": "d",
"q": "A configuration management database (CMDB) manager reviews low-scoring metrics on the CMDB Data Foundations dashboard and plans corrective work for configuration items (CIs).\n\nMatch each corrective action to the metric it directly addresses.\n\nSome options may not apply.",
"e": "Handled Duplicate CIs measures remediation of duplicate configuration items (CIs) in the Hardware and Virtual Machine Instance classes in the configuration management database (CMDB). The CMDB Data Foundations dashboard reports this metric. Its noncompliant population consists of installed, operational records with a populated duplicate_of field. Remediating the accumulated duplicate sets addresses that population directly. Identification-rule review can help investigate why duplicates arose, but a low metric score does not establish that faulty rules caused them or impose a universal sequence of rule changes before remediation.\n\nCIs Processed via IRE measures installed, operational Hardware and Virtual Machine Instance CIs whose identifiers appear as target_sys_id values in the Source table. Routing the third-party integration through the Identification and Reconciliation Engine (IRE) with source identifiers addresses that ingestion evidence. IRE supplies identification and reconciliation through supported interfaces rather than direct writes to CI tables. The metric checks this defined population and source-record linkage, so the proposed integration change includes the evidence the dashboard evaluates.\n\nChanges Referencing a CI measures change requests created in the last 90 days whose Configuration item field contains a CI reference. The indicator covers IT Service Management (ITSM) and appears on the ITSM Processes tab of the CMDB Data Foundations dashboard. Populating the cmdb_ci reference on affected change requests directly addresses its compliance test. Service ownership, duplicate remediation, and integration routing concern different records or fields, so they are separate from establishing the change-to-CI reference measured here.\n\nServices with Owners measures operational service records whose Owned by field is populated in the Service table. The indicator appears among the Best Practices metrics on the CMDB Data Foundations dashboard. Recording an owner on the affected operational services addresses that field-level test directly. The score concerns the owned_by value; it does not establish how a separate attestation, certification, or approval process assigns its tasks, because those processes have their own assignment configuration.\n\nCustom CMDB Tables Using Standard Naming evaluates custom CMDB table names on the Customizations tab of the CMDB Data Foundations dashboard. Its test identifies custom tables beginning with u_ that extend CMDB but lack the u_cmdb_ci prefix. The proposed actions address duplicate records, ingestion, change references, and service owners rather than table names. An existing internal table name cannot be changed after creation, and changing its display label does not alter this naming test.",
"r": [
[
"CMDB Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-foundations-dashboard.html"
],
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html"
],
[
"Identification and Reconciliation Engine (IRE)",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ire.html"
],
[
"Define and build the data model",
"https://www.servicenow.com/docs/r/application-development/define-and-build-data-model.html"
]
],
"o": [
"Resolve cases where several installed, operational Hardware or Virtual Machine Instance CIs represent the same entity.",
"Replace direct table writes from the third-party feed with ingestion that links external identifiers to target records in the Source table.",
"For change requests created in the last 90 days, record which configuration item each affects.",
"Assign an accountable person to each operational service record."
],
"c": [
"Handled Duplicate CIs",
"CIs Processed via IRE",
"Changes Referencing a CI",
"Services with Owners",
"Custom CMDB Tables Using Standard Naming"
],
"a": [
0,
1,
2,
3
]
},
{
"n": 58,
"t": "IRE",
"k": 1,
"q": "During a quarterly governance review, a Data Steward identifies that 30% of server CIs have mismatched location attributes. The organization uses two discovery sources for server data, and the discrepancies appeared after the second source was onboarded last month.\n\nWhat is the appropriate next step to resolve this data quality issue?",
"e": "The Configuration Management Database (CMDB) Administrator reviews and adjusts the reconciliation rules for the server configuration item (CI) class. Onboarding a second discovery source introduced conflicting location data because the reconciliation rules do not correctly prioritize which source is authoritative for location attributes. The CMDB Administrator configures source priority at the attribute level to ensure the correct discovery source takes precedence. This approach addresses the root cause rather than treating individual data discrepancies. Manual corrections without fixing the reconciliation rules result in recurring conflicts during future discovery scans.\n\nThe Configuration Manager does not resolve this issue by updating the governance policy. The data discrepancies result from a reconciliation rule configuration problem, not a missing governance policy. Defining attribute-level source authority in a governance document does not change how the platform processes incoming data from the two discovery sources. The Configuration Manager defines governance standards and data quality policies, while the CMDB Administrator handles platform configuration tasks like reconciliation rule adjustments based on those policies.\n\nThe Data Steward does not resolve this issue by manually correcting location attributes. Manual corrections address the symptom but do not fix the underlying reconciliation rule that allows the secondary source to overwrite authoritative data. Future discovery scans reintroduce the same conflicts because the reconciliation rules still prioritize the wrong source for location attributes. Data Stewards validate and correct CI data within their assigned scope, but platform configuration changes like reconciliation rule adjustments fall under the CMDB Administrator role.\n\nThe Service Owner does not resolve this issue by removing servers from business service maps. Removing CIs from service maps disrupts service visibility and incident correlation without addressing the data quality problem. The location attribute discrepancies stem from reconciliation rule configuration, not from service relationship errors. Service Owners define business service requirements and validate service-related CI relationships, but reconciliation rule configuration falls under the CMDB Administrator role.",
"r": [
[
"Reconciliation rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_ReconciliationRulesPrinciples.html"
],
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"'Run' stage reports on the CSDM Data Foundations dashboard",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/reference/csdm-datafdn-dash-run-tab.html"
]
],
"o": [
"The Configuration Manager updates the governance policy to define attribute-level source authority for server CIs.",
"The Data Steward manually corrects the location attributes on each affected server CI.",
"The CMDB Administrator reviews and adjusts the reconciliation rules for the server CI class.",
"The Service Owner removes the affected servers from business service maps pending data correction."
],
"a": [
2
]
},
{
"n": 59,
"t": "DM",
"k": 1,
"q": "A user needs to configure an attestation policy in Data Manager but lacks the required permissions.\n\nWhich role provides access to create and manage Data Manager policies?",
"e": "The CMDB Administrator role [sn_cmdb_admin] grants permissions to configure cleanup, attestation, and remediation policies in Data Manager. This administrative role provides access to CMDB configuration capabilities including Data Manager policy creation and management. CMDB Administrators require this role to define policy criteria, execution schedules, and automated actions that govern configuration item lifecycle and data quality. The role separates administrative configuration from routine data maintenance performed by data stewards.\n\nThe CMDB editor role [sn_cmdb_editor] does not provide permissions to create or configure Data Manager policies. This role allows users to create, edit, and delete CI records within CMDB Workspace, but it does not grant access to governance features such as Data Manager policy configuration or CI Class Manager settings. Users with only the sn_cmdb_editor role are able to perform hands-on data modifications but are not able to define the automated cleanup, attestation, or remediation policies that govern data quality workflows.\n\nThe ITIL role [itil] does not provide Data Manager policy permissions. This role grants access to IT Service Management processes like Incident and Change Management for working with CI records in those contexts, but does not include CMDB administrative capabilities. ITIL users are able to reference CIs in incidents and changes but are not able to configure the Data Manager policies that automate CI governance and lifecycle management.\n\nThe Data steward role [data_steward] does not provide Data Manager policy creation permissions. Data stewards perform hands-on data validation and remediation tasks assigned to them by Data Manager policies, but they do not create or configure the policies themselves. This separation ensures governance policies are defined by CMDB Administrators while data stewards focus on executing remediation work within those policy frameworks.",
"r": [
[
"Assign the data steward role",
"https://www.servicenow.com/docs/r/intelligent-experiences/assign-data-steward-role.html"
],
[
"What are the common roles and responsibilities of CMDB administrator and developer?",
"https://www.servicenow.com/community/itsm-forum/what-are-the-common-roles-and-responsibilities-of-cmdb/m-p/537316"
],
[
"Base system roles",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/roles/reference/r_BaseSystemRoles.html"
],
[
"The Importance of the ITIL Role in ServiceNow",
"https://kanini.com/blog/itil-role-in-servicenow/"
]
],
"o": [
"Data steward [data_steward]",
"CMDB Administrator [sn_cmdb_admin]",
"CMDB editor [sn_cmdb_editor]",
"ITIL [itil]"
],
"a": [
1
]
},
{
"n": 60,
"t": "HEA",
"k": 2,
"q": "A CMDB Program Manager develops a multi-year roadmap for CMDB improvement.\n\nHow does Foundation Dashboards support CMDB operational strength assessment and roadmap planning?",
"e": "Foundation Dashboards support operational strength assessment by providing maturity indicators. They show current capability levels across key configuration management data base (CMDB) dimensions to establish baseline measurements. Foundation Dashboards assess current state across dimensions including data quality, completeness, and relationship health. These maturity indicators help program managers understand where the organization stands today before setting improvement targets. Without accurate baseline measurements, teams cannot effectively prioritize improvement initiatives or demonstrate meaningful progress over time. The dashboards provide visual representations of maturity levels that stakeholders can easily interpret.\n\nFoundation Dashboards also support roadmap planning by tracking progress over time with trend visualizations that demonstrate improvement toward target maturity levels. Historical tracking supports roadmap monitoring and demonstrates progress toward goals established in the improvement plan. Foundation Dashboards store measurement data over time, enabling comparison between current and previous states. Program managers can use these trends to justify continued investment, identify when initiatives are falling behind schedule, and celebrate milestones when targets are achieved. Trend data also helps identify seasonal patterns or recurring issues.\n\nFoundation Dashboards do not automatically generate configuration baselines for configuration item (CI) classes. Baseline creation requires separate configuration using Data Manager policies that define expected attribute values and acceptable ranges. Foundation Dashboards display metrics and trends but do not create the underlying baseline definitions that governance policies enforce. Administrators configure baselines through Data Manager or Health Dashboard settings, then use Foundation Dashboards to monitor compliance against those manually established standards.\n\nFoundation Dashboards do not provide real-time alerting. Dashboards display point-in-time metrics and historical trends but do not send notifications when thresholds are breached. Real-time alerting requires configuration of Data Manager policies or Event Management rules that actively monitor for issues and trigger notifications. Foundation Dashboards support periodic review and planning activities rather than operational alerting workflows that require immediate administrator response.\n\nFoundation Dashboards do not create automated remediation actions. Dashboards provide visibility and assessment but do not automatically correct CMDB data issues. Automated remediation is handled by Data Manager policies that administrators configure separately based on dashboard insights. Foundation Dashboards inform decisions about what needs improvement but leave remediation execution to purpose-built governance tools. This separation ensures appropriate oversight of automated changes.",
"r": [
[
"CMDB Data Foundations dashboard",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/csdm-cmdb-foundations-dashboards.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"CMDB Health process tracking",
"https://www.servicenow.com/docs/bundle/washingtondc-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealthTroubleshooting.html"
],
[
"CMDB Compliance",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/compliance/concept/c_Compliance.html"
]
],
"o": [
"They track progress trends over time.",
"They provide maturity indicators.",
"They provide real-time alerting.",
"They create automated remediation actions.",
"They generate configuration baselines automatically."
],
"a": [
0,
1
]
},
{
"n": 61,
"t": "IRE",
"k": 2,
"q": "A CMDB Administrator discovers duplicate CIs for the same physical assets.\n\nWhich scenarios commonly cause duplicate CI creation?",
"e": "Different identifier values from multiple sources causes duplicate CIs. Multiple discovery sources providing different identifier values for the same asset prevents Identification and Reconciliation Engine (IRE) from matching records. When Discovery, Service Graph Connectors, and imports provide different attribute values for identifier fields, IRE does not match incoming data to existing CIs and creates duplicates. This commonly occurs when one source uses hostname while another uses fully qualified domain name (FQDN), or when serial numbers are formatted differently. Standardizing identifier values across sources is essential for preventing this type of duplicate creation.\n\nManual CI creation without checking for existing records results in duplicate entries alongside discovered CIs. Users creating CIs manually often do not verify whether the asset already exists in the configuration management data base (CMDB), leading to duplicate records that discovery does not automatically consolidate. This risk increases when organizations lack clear procedures requiring duplicate checks before manual CI creation. Training users on proper verification procedures and implementing pre-creation validation helps prevent manually created duplicates.\n\nCMDB Health backup record creation does not cause duplicate CIs. Health calculations generate metrics and scores but do not create backup copies of CIs. Backups and disaster recovery are handled through separate platform mechanisms unrelated to CMDB Health functionality. The scheduled jobs analyze existing CI data to calculate health scores and identify data quality issues but do not create new CI records as part of their processing.\n\nDiscovery patterns running in parallel causing race conditions does not cause duplicate CIs. ServiceNow Discovery and IRE are designed to handle concurrent operations safely. Duplicates result from identification rule matching failures, not race conditions during pattern execution. The platform includes mechanisms to serialize record processing through IRE even when multiple discovery operations run simultaneously. Parallel execution improves discovery performance without compromising identification accuracy.\n\nCMDB Health duplicate score calculations do not cause duplicate CI creation. CMDB Health calculates duplicate scores and metrics based on existing CI data but does not create, modify, or duplicate CI records. The health calculation process reads CI attributes to assess completeness, correctness, and relationship quality without writing data back to CI tables. Duplicates result from identification rule issues during data ingestion rather than from health metric analysis processes.",
"r": [
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/de-duplication-tasks.html"
],
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-table-property-descriptions.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_EnableCMDBHealthDashboardJob.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
]
],
"o": [
"Discovery pattern race conditions",
"CMDB Health duplicate score calculations",
"Manual CI creation without duplicate checking",
"CMDB Health backup record creation",
"Different identifier values from multiple sources"
],
"a": [
2,
4
]
},
{
"n": 62,
"t": "IRE",
"k": 2,
"q": "A CMDB Administrator merges duplicate CIs where one has relationships and both have linked incidents.\n\nWhat happens when using the De-duplication wizard?",
"e": "Relationships are preserved on the surviving configuration item (CI). Relationships from non-surviving CIs are transferred to the surviving CI so relationship data is preserved. The De-duplication wizard automatically moves relationships from duplicate CIs to the survivor, ensuring service mappings and dependency information is not lost during merge. This transfer maintains service context and impact analysis accuracy that is lost if relationships were simply deleted. Upstream and downstream dependencies continue to reference valid CI records after merge completion.\n\nTask references update to the retained record. This means that task records such as incidents and changes referencing non-surviving CIs are re-associated to the surviving CI. The wizard updates task CI references to point to the surviving record, maintaining the association between operational records and the merged CI. Historical incidents, changes, and problems remain linked to the correct configuration item for reporting and trend analysis. This re-association preserves operational context that supports future troubleshooting and root cause analysis activities.\n\nTasks do not remain orphaned after a merge process. The De-duplication wizard automatically updates task references from non-surviving CIs to point to the surviving CI record. This re-association process ensures incidents, changes, and problems maintain their CI linkage rather than becoming disconnected orphan records. The wizard specifically handles task references as part of the merge workflow to preserve operational history and reporting continuity.\n\nTasks are not duplicated on both records during the merge process. The De-duplication wizard moves task associations from the non-surviving CI to the surviving CI without creating duplicate task records. Each task maintains a single CI reference that is updated to point to the survivor. Duplication of task records is unnecessary because the original tasks simply need their reference pointer updated rather than being copied to a new location.\n\nRelationships are not deleted during the merge process. The De-duplication wizard transfers relationships from non-surviving CIs to the surviving CI rather than removing them. This transfer ensures service mappings, dependency information, and upstream/downstream connections are preserved on the merged record. Deleting relationships would defeat the purpose of consolidating duplicate records by losing the connectivity information that supports impact analysis and service context.",
"r": [
[
"Remediate a single de-duplication task",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/workspc-dedup-remediate-single-task.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html"
],
[
"Properties for duplicate CIs",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/properties-duplicate-ci.html"
],
[
"Data archiving",
"https://www.servicenow.com/docs/r/platform-administration/c_ArchiveData.html"
]
],
"o": [
"Tasks remain orphaned after the merge process.",
"Relationships are deleted during the merge process.",
"Relationships are preserved on the surviving CI.",
"Tasks are duplicated on both records.",
"Task references update to the retained record."
],
"a": [
2,
4
]
},
{
"n": 63,
"t": "CSDM",
"k": 1,
"q": "A CIO is frustrated that IT and business stakeholders use different terminology when discussing services, leading to misunderstandings and misalignment. They want to implement CSDM to address this challenge.\n\nHow does CSDM help the CIO in this situation?",
"e": "CSDM helps the CIO by defining standardized service concepts that connect business value to technical capabilities. Common Service Data Model (CSDM) provides shared definitions for Business Services, Technical Services, and their relationships, enabling IT and business to discuss services using consistent terminology. Both groups understand how business value connects to technical capabilities through the service model. This shared vocabulary reduces misunderstandings that occur when groups use different terms for similar concepts.\n\nCSDM does not translate technical terminology so business stakeholders can understand infrastructure. CSDM maintains both technical and business perspectives appropriate to each audience rather than eliminating either perspective entirely. IT staff still need technical knowledge to manage infrastructure effectively and troubleshoot issues. CSDM bridges perspectives by connecting business and technical views through service relationships rather than replacing technical understanding with business-only terminology.\n\nCSDM does not require business stakeholders to learn technical CMDB concepts first. CSDM is designed to make CMDB data accessible to business stakeholders through business-relevant service concepts that match their existing perspective and vocabulary. Business users interact with familiar concepts like services and applications rather than needing to understand technical database structures, class hierarchies, relationship types, or specialized configuration management terminology that IT professionals use.\n\nCSDM does not eliminate IT-business communication by automating all service decisions. CSDM enhances communication by providing shared terminology rather than eliminating the need to communicate about services entirely. Human collaboration remains essential for effective service management because decisions require context, judgment, and organizational knowledge. CSDM improves the quality of conversations by ensuring all participants share common definitions and understanding of service concepts.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Navigation",
"https://www.servicenow.com/docs/bundle/zurich-platform-user-interface/page/use/navigation/concept/c_Navigation.html"
],
[
"CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
]
],
"o": [
"CSDM translates technical terminology so business stakeholders can understand infrastructure.",
"CSDM requires business stakeholders to learn technical CMDB concepts first.",
"CSDM defines standardized service concepts that connect business value to technical capabilities.",
"CSDM eliminates IT-business communication by automating all service decisions."
],
"a": [
2
]
},
{
"n": 64,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator discovers that several third-party integrations are importing CI data without passing through the Identification and Reconciliation Engine. The Administrator opens the CMDB Data Foundations dashboard to assess the scope of the problem.\n\nWhich tab on the CMDB Data Foundations dashboard does the Administrator use?",
"e": "The Administrator selects the Data Management Practices tab, which contains metrics that evaluate how third-party data sources import CI data into the CMDB. This tab checks whether external integrations follow proper data handling procedures, including whether incoming data is processed through the Identification and Reconciliation Engine. Metrics on this tab identify integrations that bypass standard import processes, enabling the Administrator to assess which third-party sources require reconfiguration to maintain CMDB data integrity and consistency.\n\nThe Administrator does not select the Best Practices tab. This tab evaluates adherence to Common Service Data Model standards and general CMDB configuration recommendations rather than third-party data import handling. Best Practices metrics check whether the CMDB follows structural guidelines such as proper class hierarchy usage and CI attribute configuration. While important for overall CMDB health, this tab does not contain metrics that identify integrations bypassing the Identification and Reconciliation Engine during data import operations.\n\nThe Administrator does not select the Customizations tab. This tab assesses the appropriate use of customizations within the CMDB rather than monitoring third-party data import practices. Customizations metrics evaluate whether modifications to base system tables, fields, and configurations follow recommended patterns. This tab helps administrators identify customizations that could cause upgrade conflicts or maintenance challenges but does not track how external data sources deliver CI records into the CMDB.\n\nThe Administrator does not select the IT Service Management (ITSM) Processes tab. This tab checks whether ITSM processes effectively utilize CMDB data rather than evaluating how data enters the CMDB from external sources. ITSM Processes metrics verify that change requests, incidents, and other ITSM workflows reference CMDB CIs appropriately. This tab focuses on downstream consumption of CMDB data by service management processes rather than upstream data import and ingestion practices.",
"r": [
[
"CMDB Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-foundations-dashboard.html"
],
[
"Monitor health in CSDM and CMDB Data Foundations Dashboards",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/csdm-cmdb-foundations-dashboards.html"
],
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CMDBIdentifyandReconcile.html"
]
],
"o": [
"ITSM Processes",
"Best Practices",
"Customizations",
"Data Management Practices"
],
"a": [
3
]
},
{
"n": 65,
"t": "CSDM",
"k": 1,
"q": "A team has completed the Ideation lifecycle stage for a new tangible CI model, including evaluation and a successful pilot deployment.\n\nWhich lifecycle stage does the CI move to next in the CSDM tangible/physical lifecycle?",
"e": "The CI moves to the Purchase lifecycle stage after completing Ideation. The CSDM tangible/physical lifecycle progresses from Ideation to Purchase once a model is approved for use in the organization. During Purchase, the organization proceeds with procurement and the asset transitions through statuses such as On Order and Preallocated. The Ideation stage covers evaluation and pilot testing, and upon successful completion the approved model advances to procurement before any design, inventory, or deployment activities begin.\n\nThe CI does not move to the Design lifecycle stage directly after Ideation. Design follows Purchase in the CSDM tangible/physical lifecycle and covers the initial planning and setup phase where layout and system requirements are defined. The asset progresses through statuses such as Design, Chartered, and Build within this stage. Skipping Purchase would mean the organization begins planning and construction for an asset it has not yet procured, which does not reflect the documented lifecycle sequence.\n\nThe CI does not move to the Inventory lifecycle stage directly after Ideation. Inventory follows Design in the CSDM tangible/physical lifecycle and applies when the asset has been received and stored before deployment. The asset progresses through statuses such as Available, Reserved, and Pending Repair within this stage. Reaching Inventory requires that the asset has already been purchased, designed, and physically received by the organization.\n\nThe CI does not move to the Deploy lifecycle stage directly after Ideation. Deploy follows Inventory in the CSDM tangible/physical lifecycle and covers the period when an asset is prepared and moved toward operational use. The asset progresses through statuses such as In Stock, In Transit, and Test within this stage. Multiple lifecycle stages including Purchase, Design, and Inventory occur between Ideation and Deploy in the documented sequence.",
"r": [
[
"Definitions of life-cycle values for tangible/physical CIs",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-lifecycle-df-tangible-physical.html"
],
[
"Life cycle of tangible/physical CIs",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-lifecycle-hardware.html"
],
[
"CSDM life-cycle terms",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-life-cyle-terms.html"
]
],
"o": [
"Deploy",
"Inventory",
"Design",
"Purchase"
],
"a": [
3
]
},
{
"n": 66,
"t": "DM",
"k": 1,
"q": "An organization is establishing a CMDB governance program and needs to define success criteria that align with industry best practices.\n\nWhich set of characteristics represents the primary goals that effective CMDB governance achieves?",
"e": "The primary goals of effective Configuration Management Database (CMDB) governance are data accuracy, completeness, consistency, and timeliness ensuring configuration item (CI) records reflect reality. These four dimensions ensure CMDB data is correct, contains required attributes, follows standards, and remains current to support IT processes effectively. When CI data meets these quality dimensions, change managers trust impact analysis results, incident teams rely on service maps, and business stakeholders make decisions based on accurate infrastructure information.\n\nData encryption, access control, audit logging, and compliance do not represent the primary governance goals. While security is important, CMDB governance focuses on data quality dimensions rather than security controls that protect access to the data. A CMDB with excellent encryption and access control but inaccurate or incomplete CI data fails to support change management and incident response. Governance addresses data quality while security addresses data protection.\n\nData normalization, indexing, partitioning, and archiving do not represent the primary governance goals. These are database administration concerns for performance optimization rather than the data quality objectives that define effective CMDB governance. A CMDB with optimized indexes and efficient partitioning might still contain inaccurate server CIs with missing attributes. Governance focuses on whether CI data accurately represents the infrastructure, not on how efficiently that data is stored or retrieved.\n\nData federation, replication, synchronization, and caching do not represent the primary governance goals. These are architectural patterns for data distribution and availability rather than the quality dimensions that governance processes aim to achieve. Replicating inaccurate CI data across multiple systems does not improve data quality. CMDB governance ensures the underlying data is accurate, complete, and current before considering how that data is distributed or made available to consuming applications.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Data Management and Governance",
"https://www.servicenow.com/docs/bundle/zurich-impact/page/product/impact/reference/data-mgt-governance.html"
],
[
"Access control list rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"Data accuracy, completeness, consistency, and timeliness",
"Data normalization, indexing, partitioning, and archiving",
"Data federation, replication, synchronization, and caching",
"Data encryption, access control, audit logging, and compliance"
],
"a": [
0
]
},
{
"n": 67,
"t": "ING",
"k": 2,
"q": "A company needs to integrate two data sources with their CMDB: a cloud-based HR system that updates employee records in real-time, and a quarterly facilities spreadsheet containing 200 building locations.\n\nWhich ingestion methods are most appropriate?",
"e": "Service Graph Connector is appropriate for the cloud-based HR system with real-time updates. Cloud-based systems with frequent updates are best integrated using API-based connectors that support real-time or near-real-time data synchronization with the CMDB. These integration methods can respond to HR system events immediately, ensuring employee record changes are reflected in the configuration management data base (CMDB) without delay for processes that depend on current organizational data.\n\nImport sets with transform maps is appropriate for the quarterly facilities spreadsheet. Low-frequency bulk data from spreadsheets is efficiently handled by import sets, which stage the data and transform it to CMDB format without requiring ongoing integration infrastructure. The quarterly update frequency makes import sets ideal since they handle periodic bulk loads efficiently without maintaining persistent connections. Transform maps provide the column mapping needed to convert spreadsheet field names to CMDB attributes during each quarterly data refresh cycle.\n\nAgent Client Collector is not appropriate for spreadsheet data containing building locations. Agent Client Collector discovers endpoint device configurations by running software agents locally and does not process spreadsheet files containing facilities data. Building location data exists as static records in a spreadsheet file rather than as discoverable device configurations that Agent Client Collector is designed to capture from installed endpoints.\n\nScheduled Discovery is not appropriate for cloud HR system integration. Discovery probes network infrastructure and does not connect to remote cloud HR systems, which require API-based integration methods like Service Graph Connectors to access their data properly. HR systems hosted in the cloud expose data through APIs rather than the protocols that Discovery uses for infrastructure scanning.\n\nEstablishing a direct database connection to integrate external systems is not a recommended approach. Direct database access bypasses ServiceNow's integration framework including transformation, validation, and reconciliation capabilities. This approach creates tight coupling between systems that complicates maintenance and upgrades. ServiceNow provides structured integration methods like Service Graph Connectors and import sets that offer proper data transformation, error handling, and audit capabilities for CMDB data ingestion.",
"r": [
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-third-party-integrations.html"
],
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-aws-sg.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/identification-import-sets.html"
],
[
"Exploring Agent Client Collector",
"https://www.servicenow.com/docs/r/it-operations-management/agent-client-collector/exploring-agent-client-collector.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
]
],
"o": [
"Service Graph Connector",
"Agent Client Collector on endpoints",
"Import sets with transform maps",
"Direct database connection",
"Scheduled horizontal Discovery"
],
"a": [
0,
2
]
},
{
"n": 68,
"t": "CSDM",
"k": 1,
"q": "A financial organization needs to identify all critical operations that are subject to SOX compliance regulations.\n\nWhich CSDM table is the location for tagging this regulatory requirement?",
"e": "The Business Service [cmdb_ci_service_business] table is the primary location for tagging regulatory requirements like SOX compliance. Business Services represent the value delivered to the business, for instance Financial Reporting and are the logical level where regulatory obligations apply. Tagging the Business Service enables reporting on all downstream application services and infrastructure that support that regulated function, ensuring a comprehensive view of the compliance scope. This configuration supports ServiceNow platform best practices and enables effective enterprise Configuration Management Database (CMDB) management.\n\nThe Application Service [cmdb_ci_service_auto] table is not the primary location for compliance tagging, though it inherits compliance requirements. Application Services represent specific deployed instances of applications; for instance SAP Production. While they can be tagged, regulatory requirements typically apply to the broader business capability; the Business Service, rather than individual technical deployments. Tagging at the Business Service level ensures all instances; Prod, Test, Dev and related offering are correctly scoped.\n\nTechnical Service [cmdb_ci_service_technical] is not the primary location for tagging SOX compliance regulations. Technical Services represent the underlying technology components and infrastructure that support business capabilities rather than the business operations themselves. Regulatory compliance tagging for SOX applies at the business value level where financial reporting obligations originate, not at the technical implementation layer.\n\nThe Information Object [cmdb_ci_information_object] table is used to tag data sensitivity; for instance PII, PHI rather than broad regulatory mandates like SOX. While Information Objects link to Application Services to show what data is processed, the overall SOX Compliance obligation is a property of the Business Service that manages that financial process. Information Objects are granular data definitions, not service-level compliance tags.",
"r": [
[
"ServiceNow CMDB Health Dashboard",
"https://www.kanini.com/blog/servicenow-cmdb-health-dashboard"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"CMDB tables descriptions",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-tables-details.html"
]
],
"o": [
"Information Object [cmdb_ci_information_object]",
"Business Service [cmdb_ci_service_business]",
"Technical Service [cmdb_ci_service_technical]",
"Application Service [cmdb_ci_service_auto]"
],
"a": [
1
]
},
{
"n": 69,
"t": "IRE",
"k": 1,
"q": "A company regularly imports CI data from XML and CSV files. The imports include both new and existing CIs, and some incoming values conflict with data already in the CMDB. The team wants to ensure new CIs are created, existing CIs are updated, and data conflicts are handled according to predefined rules.\n\nWhich ServiceNow capability helps meet the requirements?",
"e": "The CMDBTransformUtil API enables the import process to leverage the Identification and Reconciliation Engine (IRE) during Transform Map execution. When a company imports CI data from XML or CSV files, the API allows the system to automatically determine whether each incoming record represents a new CI or an update to an existing one by evaluating the CMDB’s predefined identification rules. It also ensures that attribute‑level conflicts are resolved according to reconciliation definitions, so the most authoritative source updates the CMDB. This capability is designed specifically to create new CIs, update existing ones, and apply reconciliation logic consistently during imports. \n\nThe ServiceCatalog API is used to work with Service Catalog items, requests, request items (RITMs), and their associated workflows. Its purpose is to support service request fulfillment, such as ordering hardware, software, or business services, not to process CI records or interact with the CMDB. It cannot evaluate identification rules, determine whether a CI already exists, perform updates on CI attributes, or handle attribute‑level conflicts. The API operates entirely outside the import and reconciliation processes and therefore cannot meet the requirement to create new CIs, update existing ones, or resolve conflicting data in the CMDB.\n\nThe Import Set API supports loading data into staging tables (Import Sets) and triggering transforms, but it does not provide CI‑specific identification, reconciliation, or conflict‑resolution capabilities on its own. While it enables bulk data loading, it cannot determine whether an incoming record represents a new or existing CI without additional CI‑aware logic like that provided by CMDBTransformUtil. The API also does not evaluate CMDB reconciliation rules, so it cannot resolve attribute conflicts between discovery sources or authoritative data providers. \n\nDiscovery Patterns analyze devices and applications during Discovery scans and generate CI data based on discovered attributes and relationships. They run only during Discovery processes, not during manual imports from XML or CSV files, and their purpose is to map discovered data into the CMDB according to pattern logic. While they can populate and update the CMDB during Discovery, they do not run during Transform Map imports, and they are not involved in processing externally sourced files. They cannot apply identification rules or reconciliation definitions to imported data, nor can they resolve attribute conflicts coming from manual or automated file-based imports.",
"r": [
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"ServiceCatalog API",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/integrate/inbound-rest/concept/c_ServiceCatalogAPI.html"
],
[
"Import Set API",
"https://www.servicenow.com/docs/r/api-reference/rest-apis/c_ImportSetAPI.html"
],
[
"Configure discovery patterns",
"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0825587"
]
],
"o": [
"CMDBTransformUtil API",
"Import Set API",
"ServiceCatalog API",
"Discovery Patterns"
],
"a": [
0
]
},
{
"n": 70,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator wants to review CMDB Health scores and then immediately work on remediating data quality issues without navigating away from the workspace.\n\nHow does CMDB Workspace provide access to CMDB Health Dashboard and health management tools?",
"e": "Configuration Management Database (CMDB) Workspace integrates the CMDB Health Dashboard directly within the interface. Administrators can view health scores, drill down to affected configuration items (CIs), and access remediation tools from one location. This integration places health monitoring alongside other administrative functions, enabling quick identification of issues and immediate remediation without navigating between screens.\n\nPerformance Analytics dashboards can display CMDB Health data, but Performance Analytics is a separate reporting module. CMDB Workspace provides native health integration without requiring Performance Analytics configuration or dashboard navigation. Performance Analytics dashboards serve broader reporting needs across the platform, while CMDB Workspace offers purpose-built health management for CMDB administrators in their primary working context.\n\nService Portal widgets serve end users and service consumers, not CMDB administrators. CMDB Workspace is the administrative interface where health management, CI queries, and remediation occur. Service Portal provides self-service experiences for non-technical users. The Health Dashboard integration in CMDB Workspace is designed for administrators who need to act on health issues, not display metrics to end users.\n\nCMDB Workspace displays health scores for all CIs regardless of discovery source. CIs populated by Discovery, Integration Hub, manual entry, or any other method appear in CMDB Health. The workspace is not limited to Service Mapping results. Service Mapping creates application service maps, while CMDB Health evaluates data quality across the entire CMDB independent of how CIs were created.",
"r": [
[
"CMDB Workspace (4.0) store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
],
[
"System dictionary",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html"
],
[
"Performance Analytics (Indicator data sources)",
"https://www.servicenow.com/docs/r/now-intelligence/performance-analytics/pa-overview.html"
],
[
"Integration Hub",
"https://www.servicenow.com/docs/r/integrate-applications/integration-hub/integrationhub.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
]
],
"o": [
"It displays health metrics in a Service Portal widget for end users.",
"It integrates the Health Dashboard directly within the workspace interface.",
"It shows health scores only for CIs discovered through Service Mapping.",
"It links to health reports through Performance Analytics dashboards."
],
"a": [
1
]
},
{
"n": 71,
"t": "QB",
"k": 1,
"q": "A CMDB Analyst investigates intermittent failures affecting a business application. The Analyst needs to identify all infrastructure components that host the application, including virtualization layers, extending two levels into the hosting chain. The Analyst opens CMDB Query Builder to retrieve this data.\n\nHow does the Analyst configure the query to return the required results?",
"e": "Selecting the \"Runs on\" relationship type with downstream direction and depth of two returns the correct results. The \"Runs on\" relationship type defines hosting dependencies between configuration items (CIs) in the Configuration Management Database (CMDB). Setting the direction to downstream traverses from the application to the infrastructure components it depends on, following the hosting chain. A depth of two extends the traversal through both the immediate server and the underlying virtualization host. Query Builder uses relationship type, direction, and depth parameters to control how it traverses the CI relationship graph.\n\nApplying a CI class filter for Server with direction set to both does not return the required hosting chain. A CI class filter restricts results to a specific CI type but does not traverse relationships between CIs. The analyst needs to follow \"Runs on\" relationships from the application through its hosting layers, not filter by a single CI class. Setting the direction to both returns relationships in all directions, producing results beyond the hosting chain. Query Builder requires a relationship type selection to traverse CI dependencies.\n\nAdding a query condition on the cmdb_rel_ci table with a record limit of two does not replicate Query Builder depth traversal. A record limit restricts the number of returned rows, not the number of relationship hops in a dependency chain. The Analyst needs to traverse two levels of hosting relationships from the application CI, which requires depth configuration in Query Builder. Querying the cmdb_rel_ci table directly returns flat relationship records without recursive traversal through multiple hosting layers. Query Builder depth and record limits serve fundamentally different functions.\n\nSelecting the \"Runs on\" relationship type with upstream direction does not return infrastructure components that host the application. Upstream direction traverses from the selected CI toward CIs that depend on it, not toward the infrastructure it runs on. For the business application, upstream traversal returns services or processes that consume the application rather than the servers and virtualization hosts that support it. The Analyst needs downstream direction to follow the hosting chain from the application to its supporting infrastructure layers. Direction selection determines which end of the relationship chain Query Builder traverses.",
"r": [
[
"Build a CMDB query using the CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/use-cmdb-query-builder.html"
],
[
"Property settings for CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-querybldr-sysproprties.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"CMDB CI Class Models",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-class-models.html"
]
],
"o": [
"Select the \"Runs on\" relationship type, set the direction to downstream, and configure the depth to two",
"Select the \"Runs on\" relationship type, set the direction to upstream, and configure the depth to two",
"Apply a CI class filter for Server, set the direction to both, and configure the depth to two",
"Add a query condition on the cmdb_rel_ci table where type equals \"Runs on\" and set the record limit to two"
],
"a": [
0
]
},
{
"n": 72,
"t": "CLS",
"k": 2,
"q": "A company needs to add custom attributes to track vendor contract information on their Server CI class.\n\nWhich approaches preserve upgrade compatibility while meeting this requirement?",
"e": "Adding custom fields with a company-specific prefix (u_) to the existing class preserves upgrade compatibility. Custom fields prefixed with u_ are recognized by ServiceNow as customer customizations and are preserved during upgrades, while the base class continues to receive platform updates. This approach maintains full Discovery pattern compatibility and Service Graph Connector integration. The vendor contract information becomes available on all Server CIs without disrupting existing functionality or creating migration requirements during platform upgrades.\n\nCreating a child class extension preserves upgrade compatibility.  Extension classes inherit all functionality from the parent while allowing custom fields, and the parent class continues to receive ServiceNow updates during upgrades. This approach is useful when servers with vendor contracts need different behavior than standard servers. The extension class inherits Discovery pattern support while providing a dedicated space for contract-related attributes and any specialized business rules.\n\nReplacing the Server class does not preserve upgrade compatibility. Creating a replacement class loses all Discovery pattern support, Service Graph Connector compatibility, and future platform enhancements that ServiceNow provides for the standard Server class. Discovery patterns are designed to populate the standard Server class and require significant customization to work with a replacement. This approach creates substantial technical debt that compounds with each platform release.\n\nModifying the base dictionary directly does not preserve upgrade compatibility. Changes to base class fields without the u_ prefix risk being overwritten during upgrades or cause conflicts with ServiceNow's expected schema structure. ServiceNow upgrades assume standard field definitions and restore original configurations for non-prefixed attributes. Direct modifications to base dictionary entries create fragile customizations that are difficult to maintain across platform versions.\n\nStoring the data in an external system does not meet the requirement. Keeping CMDB-related data outside ServiceNow prevents integration with workflows, reporting, and CMDB Health features. This approach fragments configuration management data across multiple systems, complicating impact analysis and compliance reporting. ServiceNow provides multiple upgrade-compatible methods for extending CI classes that keep data within the platform where it integrates with other ITSM processes.",
"r": [
[
"Create a CI class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_CreateCIType.html"
],
[
"System dictionary",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html"
],
[
"Table extension and classes",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/table-administration/concept/table-extension-and-classes.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"ServiceNow Back-to-Box: Reducing Technical Debt",
"https://www.infosys.com/insights/other-insights/service-management.html"
]
],
"o": [
"Create a child class extension",
"Store the data in an external system",
"Modify the base dictionary directly",
"Replace the base Server class",
"Add custom u_ prefixed fields"
],
"a": [
0,
4
]
},
{
"n": 73,
"t": "CSDM",
"k": 1,
"q": "A CMDB Manager discovers that business application teams cannot determine which infrastructure components support their applications during major incidents. The CMDB contains well-populated server and network CI classes with validated attribute data.\n\nWhat does the CMDB Manager do?",
"e": "The Configuration Management Database (CMDB) Manager creates business service models in the CMDB. Business service models define the relationships between applications and their supporting infrastructure configuration items (CIs), enabling application teams to trace dependencies during major incidents. The existing CI data is well-populated and validated, indicating that the gap is missing service-to-infrastructure relationships rather than incomplete CI records. Business service modeling is a Walk phase Common Service Data Model (CSDM) activity that builds on the foundational CI data established during Crawl. Creating these models provides the service context that application teams need for incident impact analysis.\n\nThe CMDB Manager does not increase discovery scan frequency for infrastructure components. The CMDB already contains well-populated server and network CI classes with validated attribute data. Running discovery scans more frequently adds or updates individual CI records but does not create the service-to-infrastructure relationships that application teams need to understand dependencies. The visibility gap stems from missing business service models, not from missing or outdated CI data. Increasing scan frequency adds processing overhead without addressing the relationship modeling gap.\n\nThe CMDB Manager does not configure CMDB Health audits for CI attribute completeness. Health audits validate that CI records contain required attribute values and conform to defined data quality standards. The existing CI data is already well-populated and validated, so completeness audits confirm the current data quality rather than addressing the missing service relationships. Application teams need to trace from their applications to supporting infrastructure through defined business service models, not verify that individual CI attributes meet quality thresholds.\n\nThe CMDB Manager does not build filtered CI lists for application teams in CMDB Workspace. Filtered CI lists present subsets of CI records based on query criteria but do not establish the dependency relationships between applications and their supporting infrastructure. Application teams need to trace service impact paths during major incidents, which requires defined business service models with CI dependency relationships. Filtered lists provide a view of isolated CI records without the relational context needed for incident impact analysis across service layers.",
"r": [
[
"CSDM implementation stage — Walk",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/csdm-implement-walk-stage.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"CMDB Health experience in CMDB Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-health-exp-cmdb-workspace.html"
],
[
"Update class list in the Principal Class filter",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/update-principal-class-filter.html"
]
],
"o": [
"Increase discovery scan frequency",
"Configure CMDB Health audits",
"Build filtered CI lists",
"Create business service models"
],
"a": [
3
]
},
{
"n": 74,
"t": "QB",
"k": 2,
"q": "During an outage, the IT operations team wants to see which CIs, services, or applications are affected by the failure of a specific CI.\n\nWhich features do they use?",
"e": "The IT operations team should utilize the Unified Map or the Dependency View Map, as these tools enable users to visualize hierarchical configuration item (CI) relationships, both upstream and downstream, from a selected root CI. Users can filter by CI class, relationship type, or depth level, focusing on the most relevant portions of the map. The map can show related open incidents, change requests, or alerts, providing context for impact analysis and troubleshooting. \n\nThe IT operations team should not use Configuration Management Database (CMDB) groups. A CMDB group is a collection of CIs that allows you to apply CI actions collectively to all the CIs that are members of the group and can be monitored by CMDB Health. However, it does not provide information about the relationships between the CIs within the group. \n\nThe IT operations team should not use the CMDB Health Dashboard, as it does not display information about outages or incidents impacting CIs, and their related CIs. Instead, it shows health indicators, such as duplicate CIs, required CI fields, and audits, which are evaluated and aggregated into health scores at the class, health group, and service levels.",
"r": [
[
"Dependency Views Map",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/business-service-management-map-ng/concept/c_NextGenBSMMaps.html"
],
[
"Unified Map",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace-unified-map.html"
],
[
"CMDB groups Docs",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-groups.html"
],
[
"CMDB Health Dashboard Docs",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_MonitorCMDBHealth.html"
]
],
"o": [
"CMDB Health Dashboard",
"CMDB groups",
"Dependency View Map",
"Unified Map"
],
"a": [
2,
3
]
},
{
"n": 75,
"t": "QB",
"k": 1,
"q": "A CMDB Analyst needs to find all physical servers that host virtual machines (VMs) running applications that support the HR business service. This requires traversing multiple relationship levels.\n\nHow does the Analyst use Query Builder to do this?",
"e": "The Analyst adds relationship path nodes in Query Builder that define each hop from physical server to VM to application to business service, specifying the relationship type at each level. Query Builder supports multi-level relationship traversal through configurable path definitions that chain together multiple relationship hops. This declarative approach handles complex traversals within a single query definition without custom code.\n\nThe Analyst does not create multiple separate queries and manually join results. Query Builder handles multi-level relationships within a single query rather than requiring manual result combination across separate exports. Manual joining introduces error risk from mismatched identifiers and requires significant effort for complex relationship chains.\n\nThe Analyst does not write custom scripts to loop through relationship levels. Query Builder provides declarative relationship path configuration without requiring custom scripting knowledge or development effort. Script-based approaches require technical skills beyond typical analyst capabilities and introduce maintenance burden.\n\nThe Analyst does not request direct SQL queries from the database team. Query Builder provides a user interface for complex relationship queries without requiring direct database access, SQL knowledge, or database team involvement. Self-service query building empowers analysts to explore relationships independently without creating dependencies on technical teams.",
"r": [
[
"Build a CMDB query using the CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/use-cmdb-query-builder.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
]
],
"o": [
"Request a direct SQL query against the relationship tables",
"Add relationship path nodes for each hop through the chain",
"Create separate queries for each CI type and join them",
"Write a custom script that loops through relationship levels"
],
"a": [
1
]
},
{
"n": 76,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator sets up a new Orphan rule in CI Class Manager. As part of the configuration, the Administrator needs to decide which aspect of each CI the rule needs to evaluate to determine whether the CI qualifies as an orphan.\n\nWhich aspect does the Orphan rule analyze?",
"e": "Relationships are the key factor used to decide whether a configuration item (CI) is considered an orphan. In an orphan rule, the relationship conditions let you define either that the CI must have no relationships at all, or that it must be missing specific relationships. For example, an orphan rule can flag a CI in the Disk [cmdb_ci_disk] class as an orphan if it does not have a Contains::Contained by or Contained by::Contains relationship with a Computer CI.\n\nIdentifier Entries are used only to uniquely identify CIs during the identification and reconciliation process. They play no role in evaluating the CI’s relationships and therefore do not affect whether a CI is considered an orphan.\n\nThe Principal CI class flag determines which classes appear by default in the Configuration Item reference field on Information Technology Service Management (ITSM) forms like Incident, Problem, or Change. Its purpose is to simplify CI selection for end users, and it does not influence relationship evaluation in orphan rules.\n\nThe Extensible flag controls whether a CI class can be extended by creating new child classes that inherit its attributes. This setting affects class hierarchy, not CI relationships, and therefore is not used to determine if a CI is an orphan.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Create a CMDB Health orphan rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCMDBHealthOrphanRule.html"
],
[
"Create a CI class",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
],
[
"Identification Rules",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_IdentificationRules.html"
]
],
"o": [
"Extensible flag",
"Identifier Entries",
"Relationships",
"Principal CI class flag"
],
"a": [
2
]
},
{
"n": 77,
"t": "CLS",
"k": 1,
"q": "An Asset Manager updates a laptop's Asset State from \"In Use\" to \"Retired\" in the Asset Management module. The system is configured to synchronize this change with the corresponding CI record in the CMDB.\n\nWhich field on the CI record is updated to reflect this change?",
"e": "The Hardware Status field receives the Asset State synchronization update. ServiceNow provides Asset-CI Hardware Status Mapping specifically to map Asset State and Substate changes to the configuration item (CI) Hardware Status field. While older implementations synchronized to Install Status, the platform's Asset-CI synchronization logic for hardware assets specifically targets the Hardware Status field to maintain alignment between the financial asset state and the technical hardware state. This design ensures retirement workflows are reflected accurately on the technical CI record when assets are decommissioned.\n\nThe Install Status field does not receive Asset State synchronization updates. ServiceNow's Asset-CI synchronization logic for hardware assets specifically targets Hardware Status, not Install Status. Install Status tracks whether a CI is installed and operational rather than its asset lifecycle stage. Asset retirement workflows update Hardware Status to reflect decommissioning while Install Status remains independent.\n\nThe Operational Status field is not the target field for Asset State synchronization. Operational Status tracks whether a device is functioning, for instance; Operational, Non-operational, Repair in Progress, rather than its asset lifecycle stage. This field reflects current operational health that might be updated by monitoring tools or manual assessment. Asset State synchronization targets Hardware Status because it represents lifecycle position rather than operational health. Health monitoring and audit capabilities enable proactive data quality management at enterprise scale.\n\nThe Discovery Source field does not receive Asset State synchronization updates. Discovery Source tracks where the CI data originated, for instance; ServiceNow, SCCM, Service Mapping, Manual Entry, rather than lifecycle status. This field is set when the CI is initially created or updated by a data source and does not change based on Asset State transitions. Lifecycle status and data source provenance serve different governance purposes in Configuration Management Database (CMDB) management.",
"r": [
[
"Asset and CI management",
"https://www.servicenow.com/docs/r/it-asset-management/hardware-asset-management/c_ManagingAssets.html"
],
[
"Asset and CI Status field mappings",
"https://www.servicenow.com/community/developer-forum/asset-and-ci-status-field-mappings/m-p/1969476"
]
],
"o": [
"Operational Status",
"Install Status",
"Discovery Source",
"Hardware Status"
],
"a": [
3
]
},
{
"n": 78,
"t": "CSDM",
"k": 1,
"q": "A CMDB Administrator works with application owners to ensure business applications are correctly represented in CSDM-aligned tables. The application owners are unfamiliar with CSDM terminology.\n\nHow does the Administrator work with application owners to map Business Applications?",
"e": "The Administrator works with application owners by explaining that Business Applications represent logical groupings of technical components, and using terminology they understand. Translating Common Service Data Model (CSDM) concepts into familiar business language enables effective collaboration with non-technical stakeholders. Application owners know their applications by business function rather than technical implementation. Effective configuration management data base (CMDB) Administrators bridge this gap by asking questions in business terms while mapping answers to CSDM structures.\n\nThe Administrator does not work with application owners by providing direct database access to create records. Application owners need guidance on CSDM structures rather than unsupervised access to create unstructured records. Unguided data entry typically creates inconsistent configuration item (CI) records that violate naming conventions and relationship patterns. Administrators serve as translators who ensure application owner knowledge flows into properly structured CMDB data. Direct database access bypasses the quality controls that maintain CMDB integrity.\n\nThe Administrator does not work with application owners by listing server hostnames and generating Business Application records. Business Applications represent logical services, not physical infrastructure. A single application might span multiple servers, containers, and cloud resources across various environments. Generating application records from server names creates a physical-to-logical mapping that misrepresents how business applications actually function and deliver value. Proper mapping starts with business function identification, then connects to supporting technical components as child relationships.\n\nThe Administrator does not work with application owners by requiring CSDM certification before accepting input. Administrators translate concepts for stakeholders rather than requiring formal certification before conversations can begin. Application owners possess essential business knowledge that CMDB data requires, even without CSDM training. Creating certification barriers discourages participation and delays data collection indefinitely. Effective engagement meets stakeholders where they are rather than demanding they first acquire specialized technical knowledge that administrators already possess.",
"r": [
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"CMDB 360 experience in CMDB Workspace",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb360-exp-cmdb-workspace.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"They require CSDM certification before allowing owner input",
"They explain Business Applications represent logical groupings using owner terminology",
"They ask for server hostnames and generate application records",
"They provide direct database access without CSDM guidance"
],
"a": [
1
]
},
{
"n": 79,
"t": "M360",
"k": 1,
"q": "An enterprise IT operations team manages a CMDB using CMDB 360 to process large amounts of data. The team notices that the processing takes an unusually long time.\n\nWhich table does the team use to reduce the number of classes that are processed by CMDB 360?",
"e": "The team should use the cmdb_multisource_deny_class table to reduce the number of classes that are processed by Configuration Management Database (CMDB) 360. For each class that you want to exclude, add an active record for that class. Excluding a class from CMDB 360 also automatically excludes any of its descendant classes.\n\nThe team should not use the cmdb_multisource_query table to reduce the number of classes that are processed by CMDB 360. This table contains CMDB 360 query definitions created by the user in CMDB Workspace or in the legacy Multisource Report Builder.\n\nThe team should not use the cmdb_multisource_data table to reduce the number of classes that are processed by CMDB 360. The cmdb_multisource_data table is the CMDB 360 data store. It contains the raw data sent by all discovery sources.\n\nThe team should not use the sn_cmdb_ws_ms_skip_class table to reduce the number of classes that are processed by CMDB 360. This table is used to store records of classes for which the threshold number of multisource records has been exceeded. Classes in this table are excluded from the Coverage charts in CMDB Workspace.",
"r": [
[
"CMDB 360",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Exclude classes from CMDB 360",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/exclude-class-cmdb360.html"
],
[
"Components related to CMDB 360",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/components-multisource-cmdb.html"
]
],
"o": [
"cmdb_multisource_data",
"sn_cmdb_ws_ms_skip_class",
"cmdb_multisource_query",
"cmdb_multisource_deny_class"
],
"a": [
3
]
},
{
"n": 80,
"t": "CLS",
"k": 1,
"q": "An Incident Analyst receives a ticket about a failing database server. The Analyst wants to understand what other incidents might be related to this infrastructure issue and what components are affected.\n\nHow does Incident Management use CMDB data?",
"e": "Incident Management uses configuration management data base (CMDB) data by linking incidents to affected configuration items (CIs) and using relationships to identify related incidents and dependent services. CMDB data enriches incident management by providing context about affected infrastructure and the relationships between components. When analysts see related incidents on connected CIs, they can identify patterns suggesting common root causes. Viewing dependent services helps prioritize incidents based on business impact rather than just technical severity alone.\n\nIncident Management does not use CMDB data to automatically resolve incidents when the linked CI returns to normal operating status. Incident resolution requires human verification that the user-reported issue is actually resolved rather than automatic closure based solely on CI status changes. Automatic closure risks prematurely closing incidents where symptoms persist despite improved monitoring indicators. Analysts confirm resolution with affected users before closing tickets.\n\nIncident Management does not use CMDB data to prevent analysts from creating incidents unless they first verify the CI exists and passes health checks. Incidents can be created to capture issues even if CI identification is incomplete or unavailable at initial logging time. Blocking incident creation would delay issue documentation and create friction for users reporting problems urgently. CI linkage can be added or corrected after the incident is logged and initial triage begins.\n\nIncident Management does not use CMDB data to generate technical repair specifications from CI manufacturer data. Knowledge Management stores resolution procedures and troubleshooting guides, while CMDB provides CI configuration and relationship data separately. CMDB attributes describe what the CI is and how it connects to other infrastructure. Repair procedures require human-authored content based on experience rather than automated generation from configuration attributes.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Data Management and Governance",
"https://www.servicenow.com/docs/bundle/zurich-impact/page/product/impact/reference/data-mgt-governance.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Work with Asset and CI",
"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1602951"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"It links incidents to CIs using relationships for impact analysis.",
"It automatically resolves incidents when the linked CI returns to normal status.",
"It prevents incident creation until the CI is verified in the CMDB.",
"It generates technical repair specifications from CI manufacturer data."
],
"a": [
0
]
},
{
"n": 81,
"t": "DM",
"k": 1,
"q": "A CMDB Manager wants to prevent CMDB data quality from degrading over time. The organization needs a sustainable, repeatable review process with clear accountability.\n\nWhat does the Manager do to accomplish this task?",
"e": "The Manager implements scheduled attestation workflows that periodically assign configuration items (CI) review tasks to designated service stakeholders. This approach creates a sustainable validation cycle by routing accountability to the teams responsible for the services and infrastructure represented in the Configuration Management Database (CMDB). For example, service stakeholders can receive recurring attestation tasks to confirm CI relevance and accuracy, with reminders and escalations for overdue reviews.\n\nThe Manager does not configure automated scripts that delete CIs older than 90 days and require re-creation. This approach uses age as a proxy for quality, which can remove valid long-lived infrastructure records and degrade CMDB integrity. For example, production servers, core network devices, and enterprise databases often remain in service well beyond 90 days and should be validated through review, not deleted by policy.\n\nThe Manager does not establish monthly database exports that are reviewed by the DBA team for structural anomalies and schema violations. This approach emphasizes database-level technical checks rather than ongoing accountability for CI validity and service context. For example, DBAs may detect structural issues in exported data, but they are not the operational stakeholders best positioned to confirm whether CI ownership, environment, or lifecycle status is correct.\n\nThe Manager does not create manual spreadsheet tracking where administrators log CI changes for quarterly management review. This approach introduces manual overhead, weak traceability, and delayed feedback that does not scale for continuous CMDB governance. For example, spreadsheet logs can become outdated between review cycles and lack the automated assignment, notifications, and escalation controls that scheduled attestation workflows provide.",
"r": [
[
"Data Certification",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_DataCertification.html"
],
[
"Certification tasks",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_CertificationTasks.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
]
],
"o": [
"Configure automated scripts that delete CIs older than 90 days and require re-creation to ensure freshness",
"Implement scheduled attestation workflows that periodically assign CI review tasks to stakeholders",
"Establish monthly database exports reviewed by the DBA team for structural anomalies and schema violations",
"Create manual spreadsheet tracking where administrators log CI changes for quarterly management review"
],
"a": [
1
]
},
{
"n": 82,
"t": "CSDM",
"k": 1,
"q": "An operations team maintains the servers, databases and dependency maps behind a deployed payroll system.\n\nWhich Common Service Data Model domain holds those records?",
"e": "The Service Delivery domain holds the operational records behind a running service. ServiceNow describes it as the end-to-end system responsible for delivering technology services, and it contains service instances, which are logical representations of deployed systems or application stacks, together with the physical and logical components such as servers, databases and routers that support them and the relationships among them. Operations teams work in this domain, which places the deployed payroll system and its infrastructure here.\n\nThe Design and Planning domain describes intent rather than deployment. Enterprise architects use its business capability, business application and information object records to express which applications support which capabilities and what data those applications handle. ServiceNow states that records in this domain are not operational and are therefore unavailable for selection on incident, problem and change, which rules out the servers and databases an operations team maintains.\n\nThe Service Consumption domain covers what consumers request and receive, holding business services, business service offerings and the catalog elements through which people order them. Business relationship managers and customer service managers work with these records to publish and manage what the organization makes available. Payroll appears in this domain as a service an employee consumes rather than as the servers and databases that run it, so the operational infrastructure sits elsewhere.\n\nThe Build and Integration domain covers the systems development life cycle, holding records such as the agile development component, which represents a unique development effort of code within a larger application. Development teams populate these records through their delivery pipelines, and ServiceNow states that they are not operational configuration items. The domain describes how software is built rather than the infrastructure it runs on once deployed.",
"r": [
[
"Service Delivery domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/manage-tech-servs-domain.html"
],
[
"Design & Planning domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
],
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/build-domain.html"
],
[
"Service Consumption domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/sell-consume-domain.html"
]
],
"o": [
"The Design and Planning domain",
"The Service Consumption domain",
"The Build and Integration domain",
"The Service Delivery domain"
],
"a": [
3
]
},
{
"n": 83,
"t": "DM",
"k": 1,
"q": "The Server class and its descendants contain CIs and currently inherit from Hardware the field values that identify a CI as retired. That branch needs different values while other Hardware classes retain their present behavior.\n\nWhich change produces that result?",
"e": "A Server retirement definition with the new values gives that branch its own retirement behavior in the configuration management database (CMDB) through CMDB Data Manager. Retirement uses the definition most specific to the class of a configuration item (CI), so an active Server definition replaces the inherited Hardware definition for Server and its descendants in this scenario. Classes on other Hardware branches continue using their existing definition. The change belongs in the retirement definition because that configuration supplies the attributes applied during retirement.\n\nThe Retire policy filter in CMDB Data Manager selects the CIs evaluated by a policy using a table and record conditions. Selecting Server narrows that policy's target population to the specified class and matching records. The filter does not configure the attribute values written when those CIs retire, and it does not determine what other policies process. Server therefore continues using its inherited retirement definition until a more specific definition supplies the new values.\n\nThe Retire exclusion list in CMDB Data Manager holds selected CI records that policies of that type do not target. In Excluded records, an administrator filters a table, selects individual results, and chooses the applicable policy types. Adding selected Hardware CIs excludes those records from Retire processing; it does not designate whole Hardware classes or configure Server retirement attributes. The required change concerns retirement values for the Server branch, which remain controlled by its retirement definition.\n\nThe review requirement is the Needs review setting on a CMDB Data Manager policy, which requires review and approval of policy tasks. Review is handled through the CI's Managed by Group assignment or by an administrator, instead of automatic approval. Enabling that setting changes the approval step before the policy proceeds. It does not change the configured retirement attributes, so approved Server retirements still use the inherited definition until the Server definition is changed.",
"r": [
[
"Retirement definitions",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/life-cycle-rules.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"Manage exclusion lists for CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-mgr-manage-ci-exclusion-wrkspc.html"
]
],
"o": [
"Activating a Server retirement definition with the new values",
"Setting the Server class as the Retire policy filter target",
"Enabling the review requirement on the Retire policy tasks",
"Adding selected Hardware CIs to the Retire exclusion list"
],
"a": [
0
]
},
{
"n": 84,
"t": "ING",
"k": 1,
"q": "A CMDB Administrator needs to plan the data governance strategy for the Server CI class.\n\nWhich approach does the Administrator use to determine attribute population sources?",
"e": "The Administrator reviews Discovery patterns for the class to determine attribute population sources. Discovery patterns define which attributes are collected for each configuration item (CI) class, and comparing pattern output to the full class schema identifies fields requiring manual or integration-based population. This analysis reveals which attributes have technical data sources versus those requiring business input. Understanding this distinction helps administrators plan appropriate data governance and integration strategies for each attribute type.\n\nThe Administrator does not review Configuration Management Database (CMDB) Health reports to determine attribute sources. CMDB Health reports show data quality metrics like completeness and accuracy scores but do not indicate which attributes Discovery is designed to populate versus those requiring manual entry. CMDB Health evaluates whether fields have values, not which data source is expected to populate them. Discovery pattern definitions can be examined to understand the designed data flow for each attribute.\n\nThe Administrator does not run Discovery and examine which fields have data to reliably determine discoverability. Discovery might fail to collect certain attributes due to access issues, timing, or missing data on the target system, even when the attribute is defined in Discovery patterns. An empty field after Discovery might indicate a collection failure rather than a non-discoverable attribute. Reviewing Discovery patterns provides the authoritative source for designed attribute population.\n\nThe Administrator does not query the sys_dictionary table. This table describes field properties like type and length but does not track which data sources populate specific fields. The dictionary is a schema definition table rather than a data lineage system. Discovery pattern definitions document which attributes receive automated population for each CI class.",
"r": [
[
"Discovery probes and sensors",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_DiscoveryProbesAndSensors.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
],
[
"System dictionary",
"https://www.servicenow.com/docs/r/platform-administration/table-administration-and-data-management/c_SystemDictionary.html"
],
[
"View CMDB Health Dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_MonitorCMDBHealth.html"
]
],
"o": [
"Review Discovery patterns",
"Run Discovery and check field values",
"Review CMDB Health reports",
"Query the sys_dictionary table"
],
"a": [
0
]
},
{
"n": 85,
"t": "DM",
"k": 1,
"q": "A CMDB Administrator needs to automatically process CIs that Discovery has not updated in over 180 days. The records must remain visible in list views and continue to appear in CMDB Health calculations after processing.\n\nWhich policy type does the Administrator configure in Data Manager to meet this requirement?",
"e": "The Administrator configures a Retire policy, which changes the operational status of stale CIs while keeping those records in their original table, visible in list views, and included in CMDB Health calculations. Retirement definitions specify staleness thresholds such as days since last discovery, and the policy executes on a schedule to process matching CIs automatically. Unlike archiving, retirement preserves the CI record in place so that it remains available for reporting and health metric calculations across the environment.\n\nThe Administrator does not configure an Archive policy. Archiving removes CIs from their current table and stores them in a separate archive table, excluding them from list views, maps, and the relations formatter. Archiving moves records out of their original table entirely, so archived CIs do not remain visible in list views or CMDB Health processes. Administrators can restore archived CIs during the retention period, but the scenario requires that records stay active and visible after processing.\n\nThe Administrator does not configure an Attestation policy. Attestation assigns human verification tasks to CI owners rather than automatically processing stale CIs based on discovery inactivity. Attestation engages CI owners to confirm that the assets they manage still exist in the environment, supporting data integrity through owner review. This policy type does not change operational status or apply staleness thresholds, making it unsuitable for automated lifecycle processing of CIs that Discovery has not updated.\n\nThe Administrator does not configure a Certification. Certification validates that specific CI attributes hold expected values rather than processing stale CIs based on discovery activity. Certification supports compliance with standards such as the Common Service Data Model by verifying attribute data against predefined criteria. This policy type does not change operational status or manage lifecycle transitions, making it unsuitable for automatically handling records that Discovery has not updated in over 180 days.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"CIs attestation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/attesting-cis.html"
]
],
"o": [
"Attestation",
"Archive",
"Certification",
"Retire"
],
"a": [
3
]
},
{
"n": 86,
"t": "DM",
"k": 1,
"q": "A company discovers that business owner and support group fields are frequently outdated on their server CIs. Discovery does not populate these fields automatically.\n\nWhich process does the CMDB Administrator perform to maintain these non-discoverable attributes?",
"e": "The Configuration Management Database (CMDB) Administrator implements Data Certification campaigns for periodic owner review. Data Certification allows stakeholders to validate and update non-discoverable attributes through scheduled review cycles with tracked completion and accountability. Campaign administrators can target specific configuration item (CI) classes and assign review tasks to the managers or owners listed on each record. Task completion metrics provide visibility into which areas have been reviewed and which require follow-up, enabling continuous improvement of data quality governance processes.\n\nThe CMDB Administrator does not configure Discovery to poll Active Directory (AD) for ownership data. Discovery collects technical configurations from systems, but business attributes like ownership require human judgment and is not derived from AD, which contains identity information, not business ownership assignments. AD identifies who has administrative credentials on a server, but that differs from who owns the business application running on it. Business ownership is an organizational decision assigned through governance processes rather than inferred from technical access patterns.\n\nThe CMDB Administrator does not create a transform map to set default business owner values. Default values overwrite valid data previously entered by CI owners and fail to keep fields current as organizational structures change. This approach worsens data quality rather than addressing the maintenance challenge that requires periodic human review. Transform maps are designed for data import and transformation scenarios, not for maintaining accuracy of business attributes that require ongoing stakeholder input and validation.\n\nThe CMDB Administrator does not disable the business owner and support group fields. These are critical attributes for incident routing and change management as they determine who receives notifications and approvals for CI-related activities. Data quality challenges are addressed through governance processes like Data Certification rather than by removing fields from the CMDB. Disabling fields eliminates valuable functionality instead of addressing the underlying data maintenance process.",
"r": [
[
"Data Certification",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_DataCertification.html"
],
[
"Certification tasks",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_CertificationTasks.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/products/discovery.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
]
],
"o": [
"Disable the business owner and support group fields",
"Implement Data Certification campaigns for periodic owner review",
"Configure Discovery to poll Active Directory for ownership data",
"Create a transform map to set default business owner values"
],
"a": [
1
]
},
{
"n": 87,
"t": "HEA",
"k": 1,
"q": "A CMDB Manager needs to identify areas for improvement within the CMDB. To achieve this, the Manager requires a consolidated view of the CMDB's overall health and KPIs.\n\nWhat is the purpose of the CMDB Data Foundation Dashboard?",
"e": "The purpose of the Data Foundation Dashboard is to provide an executive-level view of Configuration Management Database (CMDB) data quality by aggregating health metrics and readiness indicators. The Data Foundation Dashboard consolidates data quality information to help prioritize CMDB improvement activities across the organization. It presents complex health data in digestible visualizations suitable for stakeholder communications and executive briefings. Dashboard configuration serves distinct stakeholder needs across organizational levels for effective CMDB governance.\n\nThe dashboard does not replace the standard CMDB Health Dashboard for non-technical users. It complements rather than replaces the Health Dashboard, providing additional perspectives on data quality for different audiences and use cases. The Health Dashboard remains essential for detailed KPI analysis and metric drill-downs into specific CI classes. The Data Foundation Dashboard provides executive-level summary views while the Health Dashboard offers detailed operational metrics for data stewards. Both dashboards serve distinct but complementary purposes in the overall CMDB governance framework. Organizations use both dashboards to serve different stakeholder needs and levels of detail.\n\nThe dashboard does not display real-time Discovery scan results and pattern statistics. Discovery monitoring uses separate interfaces designed for operational visibility, while the Data Foundation Dashboard focuses on aggregated data quality metrics rather than live scan status and pattern matching details. Discovery operations and pattern matching have dedicated dashboards showing scan progress. Discovery Status shows active scans, probe execution, and pattern matching in real time for operational monitoring. The Data Foundation Dashboard presents aggregated health metrics and compliance trends for strategic planning. These serve distinct purposes: operational monitoring versus strategic data quality oversight.\n\nThe dashboard does not provide detailed CI-level audit logs for compliance tracking. Audit logs track individual record changes at the field level, while the Data Foundation Dashboard provides aggregated quality metrics and readiness indicators for organizational planning. Audit functionality exists separately for compliance and change tracking purposes through audit history tables. The Data Foundation Dashboard focuses on summarized health scores, compliance percentages, and trend analysis rather than individual CI change history. Field-level audit trails are accessed through CI record history tabs and audit log tables. These serve different purposes: dashboards for strategic visibility, audit logs for detailed change tracking.",
"r": [
[
"CSDM Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/csdm-data-foundations-dashboard.html"
],
[
"CMDB Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-foundations-dashboard.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/products/discovery.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/r/xanadu/application-development/business-rules-classic/c_BusinessRules.html"
]
],
"o": [
"Provide detailed CI-level audit logs for compliance tracking",
"Provide an executive-level view of aggregated data quality metrics",
"Display real-time Discovery scan results and pattern statistics",
"Replace the standard CMDB Health Dashboard for non-technical users"
],
"a": [
1
]
},
{
"n": 88,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator is organizing CI classes and needs to mark a CI class as a principal class.\n\nWhich tab does the Administrator use to mark a CI class as a principal class?",
"e": "The administrator can mark a configuration item (CI) class as a principal class in the Basic Info tab. It serves as the central place for defining the core properties of the CI class. This tab includes key settings such as the class name, its parent class, and configuration options that shape how the class behaves in the Configuration Management Database (CMDB). The Principal CI class flag is also located here, allowing the administrator to determine whether the class should appear by default in CI lookup fields on Information Technology Service Management (ITSM) forms.\n\nThe administrator cannot mark a CI class as a principal class in the Attributes tab. This tab is used to review and configure the data structure of the class, including attributes inherited from parent classes and attributes added directly to the class. Although it provides a complete view of the class’s data model, it does not contain any settings related to marking a class as principal.\n\nThe administrator cannot mark a CI class as a principal class in the Correctness tab. The Correctness tab is where Staleness Rules and Orphan Rules are defined to ensure CI accuracy, integrity, and data quality across the CMDB. These rules contribute to the CMDB Health Dashboard but do not affect class-level properties such as the principal class designation.\n\nThe administrator cannot mark a CI class as a principal class in the Completeness tab. This tab is focused on defining what makes a CI complete based on recommended field population. It configures the Completeness sub‑metric of the CMDB Health Dashboard and does not include any option for marking a CI class as a principal class.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ci-class-manager-landing-page.html"
],
[
"Exploring CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/exploring-cmdb-health-parent.html"
],
[
"Understanding CMDB Health",
"https://www.servicenow.com/community/itsm-articles/understanding-cmdb-health/ta-p/2307033"
]
],
"o": [
"Attributes",
"Basic Info",
"Completeness",
"Correctness"
],
"a": [
1
]
},
{
"n": 89,
"t": "CLS",
"k": 1,
"q": "How does a well-maintained CMDB enable fast incident resolution?",
"e": "A well-maintained Configuration Management Database (CMDB) enables fast incident resolution because accurate configuration item (CI) relationship data allows analysts to immediately view dependent infrastructure supporting the affected application. This visibility enables rapid identification of potential root causes and affected components without manual infrastructure discovery or tribal knowledge. Analysts can trace service dependencies to pinpoint failure points within minutes.\n\nThe CMDB does not automatically resolve incidents. CMDB provides data for analysis and decision-making but does not autonomously diagnose and fix issues without human involvement. Automation exists in workflow routing but actual problem diagnosis requires human expertise to interpret and act upon. While CMDB relationships enable analysts to quickly understand infrastructure dependencies and identify potential root causes, humans must investigate the specific failure, evaluate possible solutions, and implement corrections.\n\nIncidents are not immediately routed to the central CMDB team. CMDB data empowers frontline analysts to investigate relationships themselves rather than centralizing troubleshooting expertise. Decentralized access to relationship data enables faster first-contact resolution by service desk analysts. When service desk analysts directly access CI relationships, they can perform initial impact assessment and root cause investigation without escalation delays. Centralizing all relationship analysis creates bottlenecks and increases resolution time.\n\nThe CMDB does not store recorded resolution steps. Knowledge management stores resolution procedures separately in a dedicated knowledge base, while CMDB provides infrastructure relationship data that informs troubleshooting rather than applying solutions directly. CMDB answers questions about infrastructure configuration. The knowledge base documents how to resolve specific problems while CMDB documents what infrastructure exists and how components relate. These complementary systems work together: CMDB identifies which components are affected and knowledge articles provide resolution procedures for addressing identified issues.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"Immediate view of dependent infrastructure relationships",
"Automatic application of recorded resolution steps",
"Immediate routing of incidents to the central CMDB team",
"Automatic incident resolution without analyst intervention"
],
"a": [
0
]
},
{
"n": 90,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator adds a new table to the CMDB to hold a type of IT configuration item using the CI Class Manager. \n\nWhich table does the Administrator select as the new table's parent?",
"e": "The Administrator should select the most specific applicable table as the parent. This ensures that the new class inherits the right attributes and fits correctly within the CMDB hierarchy. For example, if you create a new type of Server, the new table should extend the existing Server table rather than a more generic class.\n\nThe Administrator should not select the Base Configuration item [cmdb] table as the parent. Although cmdb is the root of the non‑IT side of the CMDB hierarchy, IT configuration item classes must inherit from the IT CI branch (cmdb_ci). The cmdb table is not intended for IT CI classes and extending it would break CMDB functionality; such as relationships and model categories.\n\nThe Administrator should not select the Configuration Item [cmdb_ci] table as the parent. This table should only be selected if there are no applicable child tables of the cmdb_ci table that fit the new table. This is the foundational CI class, and most new IT-CI types should inherit from one of its more specialized descendants, such as Hardware, Application.\n\nThe Administrator should not select the CI Relationship [cmdb_rel_ci] table as the parent. This table stores relationships between CIs, not CI data itself, and it is not part of the CMDB class hierarchy.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"CMDB tables descriptions",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-tables-details.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
]
],
"o": [
"The Configuration Item [cmdb_ci] table",
"The most specific applicable table",
"The Base Configuration item [cmdb] table",
"The CI Relationship [cmdb_rel_ci] table"
],
"a": [
1
]
},
{
"n": 91,
"t": "CSDM",
"k": 2,
"q": "An architecture team records an approved regulatory designation against the logical data its systems handle, and traces that designation to the software that consumes the data.\nWhich actions accomplish this?",
"e": "Selecting a classification tag in the Data classification field on an information object records the approved regulatory designation. The field displays the classification tags applied to that information object, which places the designation inside the model that already describes the data rather than in a custom attribute. Reporting on regulated data then follows the Common Service Data Model itself, and the architecture team maintains one structure instead of two.\n\nCreating a Uses relationship from the business application relates that application to the information object through the configuration item (CI) relationship table with the Uses and Used by type. The relationship records which software consumes the classified data, turning a designation held on a data record into an answer about which applications fall in scope. Tracing regulatory exposure across the estate then becomes a query across those relationships.\n\nAssigning the information object to the owning department populates the Department field, which identifies the organizational unit in the business unit that owns the information described by that record. Ownership establishes accountability for a data set and supports routing questions about it to the right group of people. Knowing which department owns data states nothing about which regulation applies to it, and it creates no link to the applications consuming that data.\n\nSetting the Owned by user on each information object records the individual who owns that record, which the Information Object form carries alongside Business Unit and Department. Naming an owner gives the architecture team somebody accountable for the data set and someone to approach when its description drifts. An owner is a person rather than a regulation, so the field states nothing about which rules apply to the data and creates no link to the software consuming it.\n\nAdding the classification to a Data Classification Group does not apply the regulatory designation to an information object or link its consuming application. The Data classification form organizes tags using Name, Description, Data Classification Group, Active, Application, Order, and Color. Data Classification Group identifies group membership, while the separate Order field determines presentation order. Organizing that tag catalog differs from applying a classification tag to a particular information object, which records the designation against the data.",
"r": [
[
"Create information object form",
"https://www.servicenow.com/docs/r/application-portfolio-management/eaw-information-object-form.html"
],
[
"Manage information objects in EA Workspace",
"https://www.servicenow.com/docs/r/application-portfolio-management/eaw-associate-info-obj-ba.html"
],
[
"Data classification form",
"https://www.servicenow.com/docs/r/pt-BR/application-portfolio-management/data-classification-form.html"
],
[
"Design & Planning domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
]
],
"o": [
"Setting the Owned by user on each information object",
"Assigning the information object to the owning department",
"Selecting a classification tag in the Data classification field",
"Creating a Uses relationship from the business application",
"Adding the classification to a Data Classification Group"
],
"a": [
2,
3
]
},
{
"n": 92,
"t": "CLS",
"k": "d",
"q": "An organization plans a data center migration. The migration coordinator needs to understand how each ITSM process uses CMDB data during the project.\n\nDrag each ITSM process the migration team uses to accomplish the desired outcome.\n\nSome options may not apply.",
"e": "Change Management uses configuration item (CI) dependency data to determine which downstream services to notify before decommissioning migrating servers. Dependency relationships map the infrastructure CIs that business services rely on, enabling the change advisory board to assess blast radius and coordinate communication before the decommission proceeds. This outcome is proactive and occurs before the infrastructure modification. Unlike Service Level Management, which evaluates contractual commitments at risk, Change Management focuses on identifying the full scope of affected services and stakeholders.\n\nIncident Management uses CI relationship data to prioritize the service restoration sequence when a migrating server fails unexpectedly. Relationship data identifies which business services depend on the failed server, allowing incident responders to restore the highest-priority services first based on downstream impact. This outcome is reactive and occurs during an active disruption. Unlike Problem Management, which investigates patterns across multiple incidents, Incident Management responds to a single unplanned failure to restore normal service operation.\n\nProblem Management uses CI topology data to link three separately reported outages to a shared switch awaiting migration. Topology data traces dependency paths across multiple incident records to reveal that distinct service disruptions share a common upstream infrastructure component. This cross-incident analysis identifies a root cause that individual incident records do not surface on their own. Unlike Incident Management, which restores service during a single disruption, Problem Management investigates recurring patterns to prevent future occurrences.\n\nService Level Management uses CI service map data to identify which service level agreement (SLA) commitments are at risk during the migration window. Service maps connect infrastructure CIs to the business services they support, and those business services carry contractual SLA targets. When the migration takes servers offline, Service Level Management determines which service level agreements face potential breach based on the affected service dependencies. Unlike Change Management, which identifies downstream services for communication and risk assessment, Service Level Management evaluates the contractual and compliance implications of the planned downtime.\n\nIT Asset Management is not matched to any of the four outcomes described. IT Asset Management uses CMDB data to track hardware and software lifecycle stages, cost allocation, and contract compliance during the migration. While IT Asset Management is relevant to the migration for asset tracking and financial planning, the four described outcomes focus on service impact, service restoration, root cause investigation, and contractual risk rather than asset lifecycle or cost management.",
"r": [
[
"Change Management",
"https://www.servicenow.com/docs/r/it-service-management/change-management/c_ITILChangeManagement.html"
],
[
"Incident Management",
"https://www.servicenow.com/docs/r/it-service-management/incident-management/c_IncidentManagement.html"
],
[
"Problem Management",
"https://www.servicenow.com/docs/r/it-service-management/problem-management/c_ProblemManagement.html"
],
[
"Service Level Management",
"https://www.servicenow.com/docs/r/it-service-management/service-level-management/service-level-mgmt-landing-page.html"
],
[
"IT Asset Management",
"https://www.servicenow.com/docs/r/it-asset-management/asset-management/it-asset-management.html"
]
],
"o": [
"Notify affected services before decommissioning migrating servers",
"Prioritize service restoration when a migrating server fails",
"Link separately reported outages to a shared switch",
"Identify SLA commitments at risk during the migration"
],
"c": [
"Problem Management",
"Service Level Management",
"Incident Management",
"Change Management",
"IT Asset Management"
],
"a": [
3,
2,
0,
1
]
},
{
"n": 93,
"t": "M360",
"k": 1,
"q": "A CMDB team wants CMDB 360 to capture attribute-level data from multiple data origins for the same CI. Before analyzing multi-origin data, they must activate a system property that allows the platform to store attribute values from different origins.\n\nWhich system property allows this?",
"e": "The glide.identification_engine.multisource_enabled system property controls Multisource Configuration Management Database (CMDB) capture, allowing CMDB 360 to:\n\nTrack attribute-level values from multiple discovery sources\nMaintain visibility into which source contributed each CI attribute\nSupport reconciliation, conflict resolution, and operational insights for CIs with multiple reporting sources\n\nThe glide.cmdb.logger.source.cmdb_multisource system property does not allow the platform to store attribute values from different sources. This property is related to CMDB logging, not multisource capture.\n\nThe glide.cmdb.logger.source.identification_engine system property does not allow the platform to store attribute values from different sources. This property configures what type of details the system logs when using Identification and Reconciliation Engine (IRE).\n\nThe glide.identification_engine.enable_identifier_optional_condition system property does not allow the platform to store attribute values from different sources. This property relates to identifier conditions, not multisource attribute tracking.",
"r": [
[
"Enable and configure CMDB 360",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html#:~:text=and%20CI%20records.-,Enable%20and%20configure%20CMDB%20360,-Activate%20the%20ITOM"
],
[
"Logging for CMDB 360",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html#:~:text=other%20discovery%20sources.-,Logging,-Enable%20logging%20for"
],
[
"Identifier conditions",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/properties-id-reconciliation.html#:~:text=glide.identification_engine.enable_identifier_optional_condition"
]
],
"o": [
"glide.cmdb.logger.source.identification_engine",
"glide.identification_engine.enable_identifier_optional_condition",
"glide.cmdb.logger.source.cmdb_multisource",
"glide.identification_engine.multisource_enabled"
],
"a": [
3
]
},
{
"n": 94,
"t": "DM",
"k": 1,
"q": "A CMDB Manager discovers that many CIs no longer exist in the infrastructure after a data center migration.\n\nHow does governance ensure CMDB data remains aligned with the physical infrastructure?",
"e": "Governance ensures Configuration Management Database (CMDB) data remains aligned with the physical infrastructure by establishing regular discovery schedules, reconciliation processes, and attestation workflows that continuously validate CMDB records against actual infrastructure state. These governance mechanisms ensure ongoing alignment by refreshing data from infrastructure sources, resolving conflicts, and engaging data owners to verify accuracy. After the data center migration, Discovery identifies removed equipment, attestation workflows prompt owners to confirm decommissioned assets, and cleanup policies remove configuration items (CIs) that no longer exist in the physical environment.\n\nGovernance does not ensure alignment by creating backup snapshots. Backups preserve data states for recovery purposes but do not provide the active validation, reconciliation, and attestation processes needed to maintain alignment between CMDB records and physical infrastructure. After the migration, comparing backup snapshots might identify which CIs are obsolete, but this passive comparison does not automatically update the CMDB or engage data owners to verify which infrastructure actually exists.\n\nGovernance does not ensure alignment by restricting CI creation to automated processes. While automated population improves consistency, governance also addresses CIs that become stale or obsolete after infrastructure changes. The Manager's problem is that existing CIs no longer exist in the infrastructure after the migration. Restricting how new CIs are created does not address the existing obsolete records that need to be identified, validated, and removed.\n\nGovernance does not ensure alignment by archiving all historical CI changes. Audit trails document changes for compliance purposes but do not actively validate that current CMDB records match the actual state of physical infrastructure. The Manager needs mechanisms to detect that CIs no longer exist and remove or archive those obsolete records. Audit archives provide historical documentation but do not identify which current CIs are misaligned with the migrated infrastructure.",
"r": [
[
"CMDB schema model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_ConfigurationManagementDatabase.html"
],
[
"Schedule a horizontal Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/task/t_CreateADiscoverySchedule.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Identification and Reconciliation engine (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/ire.html"
],
[
"Remediate duplicate CIs",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html"
]
],
"o": [
"Governance creates backup snapshots",
"Governance restricts CI creation",
"Governance archives historical CI changes",
"Governance establishes discovery schedules"
],
"a": [
3
]
},
{
"n": 95,
"t": "QB",
"k": 2,
"q": "Which two question types does Natural Language Query (NLQ) support for CMDB data?",
"e": "NLQ can answer questions about CI counts and quantities such as \"How many servers are running Linux?\". NLQ interprets count questions and returns aggregate results from configuration management data base (CMDB) data without requiring users to construct COUNT queries or GROUP BY clauses. Users phrase quantity questions naturally, and NLQ determines the appropriate aggregation logic internally. This capability supports quick inventory checks and capacity questions from business stakeholders.\n\nNLQ can also answer questions about CI attributes and relationships such as \"What applications depend on the HR database server?\". NLQ interprets questions about CI properties and relationship data to return relevant records by traversing CMDB relationships automatically. Users describe what they want to know conversationally, and NLQ identifies the appropriate tables and joins. This enables impact analysis questions without requiring knowledge of relationship table structures.\n\nNLQ does not answer predictive calculation questions. Questions for example that require real-time calculations such as projecting future server counts after completing data center migrations. The feature queries existing CMDB data but does not perform predictive calculations or projections about hypothetical future states after planned changes. Forecasting and what-if analysis require planning tools that model proposed changes and their impacts.\n\nNLQ does not answer user activity and audit questions. For example, questions about user behavior such as which administrator made the most CI changes last month. The feature focuses on CI data queries rather than user activity analytics, which requires access to audit logs and different data structures entirely. User activity analysis involves sys_audit and update history tables outside standard CMDB scope and table hierarchy.\n\nNLQ does not answer questions about real-time performance metrics. For example, questions about current CPU utilization or memory usage on servers. The feature queries CMDB configuration data rather than live monitoring data from infrastructure monitoring tools. Performance metrics require integration with monitoring applications that collect and store operational telemetry.",
"r": [
[
"Natural Language Query",
"https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/natural-language-query/concept/natural-language-query.html"
],
[
"Build a CMDB query",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/use-cmdb-query-builder.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"Using Natural Language Query",
"https://www.servicenow.com/docs/r/intelligent-experiences/natural-language-query/using-nlq.html"
],
[
"Performance Analytics properties",
"https://www.servicenow.com/docs/r/now-intelligence/performance-analytics/pa-properties.html"
]
],
"o": [
"CI relationship and dependency questions",
"CI count and inventory questions",
"User activity and audit questions",
"Predictive calculation questions",
"Real-time performance metric questions"
],
"a": [
0,
1
]
},
{
"n": 96,
"t": "CLS",
"k": 1,
"q": "An Administrator configures the Server class so that Server CIs are the only configuration items available for selection on incident and change forms. The organization also relies on several classes that extend Server.\n\nWhat does the Administrator do so that those extending classes carry the same designation?",
"e": "The Principal Class filter must include each extending class for that class to have the principal designation. For a configuration item (CI) class, the administrator opens Basic Info in CI Class Manager, selects Principal Class, and saves the change. The setting applies to the current class and does not derive to its children. Designating Server therefore leaves its extending classes unchanged until the administrator explicitly adds each required class to the filter.\n\nA suggested relationship in CI Class Manager supplies a relationship type and target class when creating a relationship for a CI. The administrator selects the source class in the hierarchy and adds the suggestion under Suggested Relationships. This configuration assists relationship creation between CIs, while the Principal Class designation is controlled separately on Basic Info. Adding a suggestion for an extending class therefore does not designate that class as principal.\n\nA health inclusion rule in CI Class Manager selects which CIs in the configuration management database (CMDB) enter CMDB Health calculations. Under Health Inclusion Rules, the administrator chooses the class, record conditions, and metrics to evaluate, including required, orphan, recommended, duplicate, and staleness metrics. This configuration changes the population measured by CMDB Health. It does not add the class to the Principal Class filter, which the administrator manages separately through the class's Basic Info form.\n\nAn identification rule in the CMDB defines attributes and related entries used to recognize a CI during identification processing. Each rule applies to a CI class, and a child class derives its parent's rule unless an explicit child rule replaces it. Creating a child-specific rule changes how the identification process recognizes records for that class. The rule does not alter the separate Principal Class setting, so it does not establish the requested designation.",
"r": [
[
"Principal Class",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/principal-class-filter.html"
],
[
"Update the list of classes in the Principal Class filter",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/update-principal-class-filter.html"
],
[
"Add a suggested relationship",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_AddANewSuggestedRelationship.html"
],
[
"Create health inclusion rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-health-inclusion-rule.html"
]
],
"o": [
"Create an identification rule for each extending class",
"Add each extending class to the Principal Class filter",
"Create a health inclusion rule for each extending class",
"Add a suggested relationship for each extending class"
],
"a": [
1
]
},
{
"n": 97,
"t": "ING",
"k": 1,
"q": "A company migrates to ServiceNow and wants to load 50,000 asset records from their legacy system. The CSV export has column names that differ from CMDB field names.\n\nWhich feature ensures that source columns are correctly aligned to target fields during the import?",
"e": "Transform maps ensure that source columns are correctly aligned to target fields during the import. Transform maps define the relationship between columns in the import set staging table and fields in the target Configuration Management Database (CMDB) table, allowing administrators to map mismatched column names to their correct destinations. This feature also supports scripted transformations, field-level defaults, and conditional logic during the import process. Transform maps are the standard mechanism for loading legacy data with non-matching column structures.\n\nCoalesce fields do not ensure that source columns are correctly aligned to target fields during the import. Coalesce fields define matching criteria that determine whether an incoming record updates an existing record or creates a new one. This feature prevents duplicate records by comparing incoming values against existing data but does not remap or translate column names from the source to the target table. Coalesce operates after column mapping has already been established through transform maps.\n\nIdentification rules do not ensure that source columns are correctly aligned to target fields during the import. Identification rules are part of the Identification and Reconciliation Engine (IRE) and define the criteria for matching incoming configuration item (CI) data against existing CMDB records. These rules determine whether a CI is new or already exists in the CMDB based on identifier entries and attributes. Identification rules operate at the reconciliation layer and do not handle column-to-field mapping during import set processing.\n\nReconciliation rules do not ensure that source columns are correctly aligned to target fields during the import. Reconciliation rules are part of the IRE and determine which data source takes precedence when multiple sources update the same CI attribute. These rules resolve conflicts between competing values from different authoritative sources. Reconciliation rules govern data priority after ingestion rather than column alignment during the import process.",
"r": [
[
"Transform maps",
"https://www.servicenow.com/docs/r/integrate-applications/system-import-sets/c_CreatingNewTransformMaps.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
]
],
"o": [
"Identification rules",
"Transform maps",
"Coalesce fields",
"Reconcilliation rules"
],
"a": [
1
]
},
{
"n": 98,
"t": "HEA",
"k": 2,
"q": "Which configuration elements within CMDB Health determine when a CI is considered stale?",
"e": "Staleness rules define conditions for evaluating specific CI classes and their staleness criteria. These rules allow administrators to configure which configuration item (CI) classes are evaluated and the specific conditions that determine staleness for each class type. For example, an organization creates separate staleness rules for servers, network devices, and applications, each with tailored staleness thresholds reflecting how frequently each type is expected to be refreshed.\n\nThe Effective Duration period specifies the time threshold after which a CI without updates is marked stale. This field in staleness rules defines the number of days a CI can go without updates before being flagged as stale in health calculations. For servers requiring 30-day currency, administrators set Effective Duration to 30 days, causing any server CI not updated within that window to appear as stale.\n\nDiscovery schedules do not determine staleness. While Discovery schedules control how often CIs are refreshed from source systems, the Stale metric evaluates CI timestamps against configured staleness rules and Effective Duration periods. A CI discovered weekly is still marked stale if the Effective Duration is set to five days. Discovery affects data freshness but does not define staleness thresholds.\n\nReconciliation rules do not determine staleness. Reconciliation rules manage how data from multiple sources is merged and conflicts are resolved in Identification and Reconciliation Engine (IRE), but they do not define the time thresholds used to identify stale CIs in CMDB Health. Staleness evaluation requires staleness rules with Effective Duration settings that specify the maximum acceptable age for CI records.\n\nCI class hierarchy settings do not determine staleness. Class hierarchy defines inheritance relationships and attribute structure between CI classes but does not configure staleness thresholds for CMDB Health evaluation. Staleness determination requires explicit staleness rules with Effective Duration periods that specify the time thresholds for each CI class.",
"r": [
[
"Create a CMDB Health staleness rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCMDBHealthStaleRule.html"
],
[
"Create a health inclusion rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-health-inclusion-rule.html"
],
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/config-cmdb-health-metric-weights.html"
],
[
"Schedule a horizontal Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/t_CreateADiscoverySchedule.html"
],
[
"Identification and Reconciliation Fundamentals",
"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1064718"
]
],
"o": [
"Discovery schedules",
"Effective Duration period",
"Staleness rules",
"CI class hierarchy settings",
"Reconciliation rules"
],
"a": [
1,
2
]
},
{
"n": 99,
"t": "CLS",
"k": 1,
"q": "A company needs to track IoT sensors deployed in their manufacturing facilities. A developer proposes creating a custom cmdb_ci_iot_sensor class to store temperature and humidity data.\n\nHow does the CMDB Administrator minimize the risk of technical debt from this change?",
"e": "Extending an existing out-of-box class and adding custom attributes for sensor data minimizes the risk of technical debt from this change. ServiceNow recommends extending classes such as cmdb_ci_ip_device or cmdb_ci_hardware within the established hierarchy rather than creating new base-level classes. Extending an existing class inherits Discovery patterns, identification rules, health metrics, and upgrade-tested configurations from the parent class. This approach preserves platform compatibility and reduces maintenance effort when ServiceNow releases new versions.\n\nCreating the custom class directly under the base cmdb_ci table does not minimize the risk of technical debt from this change. Placing a sensor class under cmdb_ci bypasses the established hardware and device hierarchy, which means the class does not inherit attributes, identification rules, or Discovery patterns from intermediate parent classes. This shortcut creates organizational debt by fragmenting the class structure and requires manual configuration of properties that would otherwise be inherited automatically.\n\nDefining the custom class as a principal class in Data Manager to enforce governance policies does not minimize the risk of technical debt from this change. Principal classes designate which CI classes are governed under Data Manager policies for data quality, attestation, and lifecycle management. Declaring a new custom class as principal establishes governance over it but does not address the underlying architectural decision of where the class sits in the hierarchy. The technical debt risk originates from class placement, not from governance policy assignment.\n\nRegistering the custom class as an independent table outside the CMDB hierarchy does not minimize the risk of technical debt from this change. An independent table loses access to CMDB capabilities including the Identification and Reconciliation Engine (IRE), Discovery integration, health scoring, and dependency mapping. This approach creates the highest level of technical debt because the organization must manually build and maintain functionality that the CMDB hierarchy provides natively. ServiceNow documentation recommends keeping CI data within the CMDB class structure.",
"r": [
[
"Create a CI class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_CreateCIType.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Table extension and classes",
"https://www.servicenow.com/docs/r/platform-administration/table-administration-and-data-management/table-extension-and-classes.html?contentId=kQJb_Zpl3y8M9CShF5oWSg"
]
],
"o": [
"Create the custom class under the base cmdb_ci table to simplify the class hierarchy",
"Extend an existing out-of-box class and add custom attributes for sensor data",
"Define the custom class as a principal class in Data Manager to enforce governance policies",
"Register the custom class as an independent table outside the CMDB hierarchy for flexibility"
],
"a": [
1
]
},
{
"n": 100,
"t": "CSDM",
"k": 2,
"q": "An organization has established its CMDB governance framework, defined business services in the service catalog, and populated foundational CI data. The CSDM steering committee plans the next implementation phase.\n\nWhich objectives are prioritized next?",
"e": "A primary focus of the Walk phase is to establish Technical Services that model IT capabilities supporting business functions. The Walk phase introduces the Manage Technical Services domain, creating services that represent IT capabilities like databases, web servers, and middleware that support higher-level Business Services. Technical Services bridge the gap between raw infrastructure configuration items (CIs) and business-focused services. Walk phase organizations begin modeling this middle tier that connects infrastructure to business value.\n\nAnother primary focus of the Walk phase is to configure Service Mapping foundations to begin discovering application dependencies. The Walk phase introduces Service Mapping capabilities to automatically discover relationships between Technical Services and their supporting CIs, building the dependency maps needed for service awareness. Service Mapping automation accelerates relationship discovery and helps maintain accuracy as infrastructure changes occur. Walk phase organizations begin leveraging this automation for their priority applications first before expanding to broader coverage across the environment.\n\nEstablishing the governance framework is a Crawl phase objective, not a Walk phase focus. The Crawl phase establishes foundational configuration management data base (CMDB) governance including data standards, ownership models, and quality policies before organizations progress to Walk phase activities. By the time an organization reaches Walk phase, governance foundations are already in place to support the more advanced Technical Services and Service Mapping work. Walk phase builds upon Crawl phase governance rather than establishing it.\n\nIntegrating predictive analytics is a Fly phase objective that requires mature service models and historical data. Predictive capabilities depend on established service hierarchies and accumulated trend data that Walk phase organizations are still building. The Walk phase focuses on foundational service modeling through Technical Services and Service Mapping rather than advanced analytics. Organizations need complete service structures before predictive models can identify meaningful patterns and forecast future states accurately.\n\nFull automation deployment is not a primary focus of the Walk phase. Comprehensive automation represents Fly phase maturity where organizations have validated their common service data model (CSDM) structures and are ready for large-scale automated processes. The Walk phase focuses on establishing foundational Technical Services and Service Mapping capabilities before automating at scale. Organizations need stable, proven service models before implementing automation that propagates errors across large CI populations if foundations are incomplete.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"The Common Service Data Model (CSDM) explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Pattern-based discovery in Service Mapping",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/service-mapping/concept/pattern-based-discovery.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"IT Financial Management",
"https://www.servicenow.com/docs/bundle/xanadu-it-business-management/page/product/it-finance/concept/c_ITFinance.html"
]
],
"o": [
"Establish the governance framework",
"Integrate predictive analytics",
"Deploy full automation",
"Configure Service Mapping foundations",
"Establish Technical Services"
],
"a": [
3,
4
]
},
{
"n": 101,
"t": "DM",
"k": 2,
"q": "An Administrator prepares a Retire policy for hardware CIs in the CMDB with associated asset records. Asset Management is active, active retirement definitions are configured, and approval tasks should route to whichever team is responsible for each CI rather than default to a single Administrator.\n\nWhich preparations support this retirement and approval workflow?",
"e": "Associated asset records in Asset Management need their asset state set to Retired before their hardware configuration items (CIs) are retired through Data Manager. The policy creation guidance calls for checking the linked asset record when Asset Management is active and verifying that its install_status value is Retired, which is the end-of-life state referenced in this option. The scenario establishes that these CIs have associated assets, so the check applies to them. Retirement definitions address the CI class's retirement state, while this preparation checks the corresponding asset.\n\nManaged by Group values on the target CIs direct Data Manager tasks to the teams responsible for each CI, matching the routing intended in the scenario. The users assigned to those groups also need privileges to approve policy tasks. An empty Managed by Group does not leave a task without a recipient: the approval process is directed to an administrator instead of the responsible team. Populating the attribute therefore supports the intended routing, rather than being a universal prerequisite for approval.\n\nIn the configuration management database (CMDB), CMDB Health Dashboard jobs in Health Preference calculate health scores and support recurring execution schedules. Their Run setting controls when the platform collects and aggregates results for completeness, compliance, correctness, and relationships. Scheduling those calculations keeps health information available for governance decisions. The Retire policy preparation in this scenario concerns the state of linked assets and routing approval tasks to the teams responsible for each CI; changing the Health jobs' schedule configures neither of those conditions.\n\nStatic reconciliation rules in CI Class Manager assign discovery sources permission to update specified CI attributes and establish priority between sources. Those settings govern attribute updates submitted through Identification and Reconciliation Engine processing. An asset association does not change their purpose into a retirement approval control. The Retire policy scenario instead calls for checking the associated asset state and arranging approval routing to the responsible team, which are separate preparations from configuring discovery-source authority.\n\nThe Retire policy exclusion list in Data Manager holds selected CI records outside processing by policies of that type. Administrators manage these lists in CMDB Workspace or Service Graph Workspace and choose the records and policy types involved. Adding the intended target CIs to this exclusion list would remove them from Retire policy targeting. That action changes the policy population rather than preparing those CIs for retirement with approval routing.",
"r": [
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_EnableCMDBHealthDashboardJob.html"
],
[
"Create a CI reconciliation rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-reconciliation-rule.html"
]
],
"o": [
"The static reconciliation rules exist for the asset-linked CI class",
"The target CIs are added to the Retire policy exclusion list",
"The CMDB Health Dashboard jobs use a recurring run schedule",
"The associated asset records have an end-of-life asset state",
"The Managed by Group attribute holds a value on the target CIs"
],
"a": [
3,
4
]
},
{
"n": 102,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator is working with a CI class in CI Class Manager and sees the Extensible flag on the Provide Basic Info tab. The team wants to know what this setting lets them do.\n\nWhat does the Extensible flag allow?",
"e": "The Extensible flag creates child classes from the configuration item (CI) class. the Extensible flag determines whether a CI class can act as a parent class within the Configuration Management Database (CMDB) hierarchy. When the flag is enabled, administrators can create new child classes that inherit attributes and behaviors from the parent CI class, allowing the CMDB structure to grow in a controlled and consistent way. Enabling extensibility ensures that the modeling of new configuration item types aligns with CMDB best practices and maintains proper inheritance across related classes.\n\nThe Extensible flag does not show CIs from the CI class in CI list views. CI visibility is regulated by filters, views, access controls, and table configurations rather than by whether the class is extensible. The Extensible flag only governs the ability to extend the class by creating subclasses. It does not impact record-level visibility or determine whether CIs from that class appear in list or related item views across the platform.\n\nThe Extensible flag does not apply a product model to new CIs of the CI class. Product model application is handled by CI creation logic, product catalog configuration, and normalization processes, not by the Extensible flag. The flag does not control lifecycle behaviors or the automatic assignment of product models to new CIs. Instead, the Extensible setting is strictly related to class inheritance and structural CMDB design, and it has no role in determining which product model is linked to new instances of the class.\n\nThe Extensible flag does not allow new attributes to the CI class. Attribute creation is managed through dictionary configuration and field definition settings, independent of the Extensible flag. Administrators can add attributes to a CI class regardless of whether it is marked as extensible. The Extensible flag only controls whether new child classes can inherit from the class, not whether the class itself can be modified by adding fields or attributes directly.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Create a CI class",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCIType.html"
],
[
"Table extension and classes",
"https://www.servicenow.com/docs/r/platform-administration/table-administration-and-data-management/table-extension-and-classes.html?contentId=kQJb_Zpl3y8M9CShF5oWSg"
]
],
"o": [
"Show CIs from the CI class in CI list views",
"Create child classes from the CI class",
"Apply a product model to new CIs of the CI class",
"Allow new attributes to the CI class"
],
"a": [
1
]
},
{
"n": 103,
"t": "QB",
"k": 1,
"q": "A CMDB has CI relationships where servers can be clustered with other servers creating circular dependency patterns. A CMDB analyst is concerned that a relationship query might enter an infinite loop when traversing these circular references.\n\nHow does Query Builder handle recursive relationships?",
"e": "Query Builder handles recursive relationships by implementing depth limits and cycle detection to stop traversal at maximum depth or when revisiting a configuration item (CI). These mechanisms prevent infinite loops while still returning comprehensive relationship data within defined boundaries for the analyst's needs. Depth limits cap how many relationship hops the query follows regardless of graph structure. Cycle detection prevents revisiting CIs already included in the current traversal path, avoiding infinite recursion through circular patterns.\n\nQuery Builder does not handle recursive relationships by requiring users to manually identify and exclude circular relationships before executing queries. Query Builder automatically manages cycle detection without requiring users to pre-identify circular patterns in the relationship data before query execution. Automatic detection handles circular references transparently regardless of data complexity or the analyst's knowledge of graph structure. This automation ensures safe query execution even when analysts are unaware of circular patterns in the configuration management data base (CMDB).\n\nQuery Builder does not handle recursive relationships by automatically deleting circular relationship records from the CMDB. Circular relationships might be valid data representing real infrastructure patterns such as clustered servers or load-balanced configurations. Query Builder manages traversal behavior without modifying underlying data that accurately represents the actual environment. Deleting valid relationships would corrupt CMDB accuracy to solve a query execution problem that has better solutions.\n\nQuery Builder does not handle recursive relationships primarily through parallel thread execution with timeout limits. Depth limits and cycle detection are the primary controls preventing infinite loops, not thread-based timeout termination as a fallback safety mechanism. Timeout-based termination would provide incomplete results without explanation when queries hit arbitrary time limits. Purpose-built cycle handling provides predictable, complete results within defined traversal boundaries that users control.",
"r": [
[
"Build a CMDB query using the CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/use-cmdb-query-builder.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"Query Builder implements depth limits and cycle detection.",
"Query Builder executes parallel threads with timeout limits.",
"Query Builder requires manual identification excluding circular relationships.",
"Query Builder automatically deletes circular relationship records."
],
"a": [
0
]
},
{
"n": 104,
"t": "CLS",
"k": 2,
"q": "During a CMDB data quality review, an administrator finds mismatches between Asset and CI records.\n\nWhich scenarios represent valid cases where an Asset exists without a corresponding CI?",
"e": "Office furniture is tracked as an Asset for financial purposes without requiring a configuration item (CI) record. Non-IT assets like furniture, vehicles, or facilities are tracked financially without needing configuration management data base (CMDB) representation since they do not support IT services. Asset Management handles depreciation and financial lifecycle for all company property. CMDB focuses specifically on configuration items that support IT service delivery and require technical configuration tracking.\n\nSpare laptops in storage exist as Asset records before deployment. Hardware in stockrooms is tracked for inventory and financial value but does not yet have a running configuration state on the network. No CI record is required until the hardware is deployed and becomes an active participant in IT service delivery.\n\nProduction database servers have both Asset and CI records. Server hardware extends the CI hierarchy while also corresponding to an Asset record for financial tracking. When Discovery finds a server, it updates the CI. If that CI is linked to an Asset, they exist as a pair.\n\nCloud-provisioned virtual machines (VMs) represent the reverse scenario: CIs without Assets. Virtual machines are treated as configuration items rather than capital assets, so they frequently exist as CIs only. Cloud-provisioned VMs are discovered and tracked in the CMDB but are not typically capitalized as financial assets since they lack physical hardware ownership.\n\nActive production database servers require both Asset and CI records. Servers running on the network have Asset records for financial tracking and CI records for configuration management. Discovery detects running servers and creates or updates their CI records automatically. This is the standard expected state for deployed production infrastructure where both financial and technical tracking are required for proper service management.",
"r": [
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Asset Management",
"https://www.servicenow.com/docs/bundle/zurich-it-service-management/page/product/asset-management/concept/c_AssetManagement.html"
],
[
"Work with Asset and CI",
"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1602951"
],
[
"CMDB CI Lifecycle Management",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html"
],
[
"Assets, Configuration Items, and Model Categories: understanding how they work together",
"https://www.servicenow.com/community/in-other-news/assets-configuration-items-and-model-categories-understanding/ba-p/2279633"
]
],
"o": [
"Active production database",
"Retired server Assets",
"Cloud-provisioned VMs",
"Office furniture assets",
"Spare laptops in storage"
],
"a": [
3,
4
]
},
{
"n": 105,
"t": "ING",
"k": 1,
"q": "A company uses AWS for cloud infrastructure and needs to populate the ServiceNow CMDB with EC2 instances and related resources. The Administrator requires a certified integration that handles data mapping and processes data using the Identification and Reconciliation Engine (IRE).\n\nWhich ServiceNow capability provides this?",
"e": "Service Graph Connectors provide pre-built integrations that automatically import and transform third-party tool data into Configuration Management Database (CMDB)-compliant configuration item (CI) records. These certified connectors handle authentication, data extraction, mapping to CMDB classes, and Reconciliation Engine (IRE) processing for sources like AWS, Azure, and other enterprise tools. Connectors are maintained by ServiceNow to stay current with source system changes. This reduces implementation time and ongoing maintenance compared to custom integrations that require in-house development and updates.\n\nCustom REST API integrations do not provide certified integration with data mapping and IRE processing. Building custom integrations requires development effort for authentication, data extraction, CMDB class mapping, and IRE rule configuration that Service Graph Connectors include out of the box. Custom development introduces technical debt and requires ongoing maintenance as source APIs change, whereas certified connectors are updated automatically by ServiceNow.\n\nDiscovery does not provide certified integration with data mapping and IRE processing for AWS environments. While Discovery handles on-premises infrastructure through network probes, cloud resources like AWS require Service Graph Connectors to import data from cloud provider APIs into the CMDB. Cloud providers expose infrastructure data through APIs rather than network-accessible probes, requiring connector-based integration to retrieve and import cloud resource information. This understanding prevents misconfiguration and supports proper system implementation.\n\nImport Sets with Transform Maps do not provide certified integration with data mapping and IRE processing. This approach requires manual configuration of import rules, field mappings, and transform scripts for each integration. Service Graph Connectors include pre-configured data mappings that automatically transform source data into CMDB-compliant records, eliminating the manual configuration work required for custom import solutions.",
"r": [
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-integration-aws-sg.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
],
[
"Table API",
"https://www.servicenow.com/docs/bundle/zurich-api-reference/page/integrate/inbound-rest/concept/c_TableAPI.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/standard/resource-center/data-sheet/ds-discovery.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
]
],
"o": [
"Service Graph Connectors",
"Discovery",
"Import Sets with Transform Maps",
"Custom REST API integrations"
],
"a": [
0
]
},
{
"n": 106,
"t": "DM",
"k": "d",
"q": "An organization launches a CMDB improvement initiative after an audit reveals inconsistent data quality across CI classes. The Project Sponsor asks the implementation team to define a governance structure with clear ownership at every level. The CMDB Administrator must assign each governance responsibility to the correct role.\n\nDrag and drop each governance role to its primary responsibility.\n\nSome options may not apply.",
"e": "Data Stewards validate and correct individual configuration item (CI) records within their assigned scope of responsibility. Also known as configuration management data base (CMDB) Librarians, they respond to attestation requests and perform hands-on data maintenance. Data Stewards ensure ongoing accuracy by reviewing CIs flagged for remediation. They operate within standards defined by CI Class Owners and governance frameworks established by Configuration Managers.\n\nCI Class Owners define data quality standards and required attributes for specific CI types they are responsible for. They establish what constitutes quality data for their technology domain based on expertise. CI Class Owners translate organizational governance policies into concrete standards for their classes. Data Stewards then enforce these standards through hands-on validation work.\n\nConfiguration Managers establish overall governance policies and coordinate stakeholders across the organization. They own the CMDB program strategy and ensure consistency across all CI classes. Configuration Managers resolve conflicts between stakeholder requirements and are accountable for overall data quality outcomes. They create the framework within which other roles operate.\n\nCMDB Administrators configure technical platform settings that enable governance processes to function. They manage identification rules, health dashboard parameters, and integration configurations. CMDB Administrators translate governance requirements into platform configuration. They maintain the technical infrastructure that supports Data Stewards, CI Class Owners, and Configuration Managers.",
"r": [
[
"Assign the data steward role",
"https://www.servicenow.com/docs/r/intelligent-experiences/assign-data-steward-role.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ci-class-manager-landing-page.html"
],
[
"Administer CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/administer-data-manager.html"
]
],
"o": [
"Validates and corrects individual CI records within assigned scope",
"Defines data quality standards and required attributes for specific CI types",
"Establishes governance policies and coordinates stakeholders across the organization",
"Configures technical platform settings including identification rules and dashboards"
],
"c": [
"CI Class Owner",
"CMDB Administrator",
"Configuration Manager",
"Data Steward"
],
"a": [
3,
0,
2,
1
]
},
{
"n": 107,
"t": "CSDM",
"k": 1,
"q": "A CMDB Manager joins an organization in the Crawl phase of its CSDM implementation. The Manager must implement the next quarterly initiative based on the current phase objectives.\n\nWhat action does the manager perform?",
"e": "The main objective of the Crawl phase is to establish foundation data and basic Configuration Management Database (CMDB) structure to support core IT Service Management (ITSM) processes. This initial phase establishes essential reference data, basic configuration item (CI) classes, and fundamental CMDB capabilities needed to support Incident Management, Change Management, and other core ITSM processes. Organizations in Crawl focus on getting foundational elements right before attempting more complex service modeling. Success in Crawl creates the stable base that later phases build upon.\n\nMapping business services to their supporting infrastructure CIs represents a Walk phase objective that requires established foundation data as a prerequisite. The Crawl phase focuses on populating base CI classes and reference data before business service relationships are defined. Service-to-infrastructure mapping depends on accurate and validated CI records that the Crawl phase produces. Organizations that attempt business service mapping before completing foundational data population encounter incomplete and inaccurate relationship models.\n\nIntegrating discovery patterns for automatic CI classification represents a Walk or Run phase initiative that builds on established CMDB foundations. The Crawl phase populates base CI classes and reference data through initial discovery and manual data entry rather than automated classification workflows. Pattern-based discovery integration requires stable CI class definitions and validated reference data to produce accurate classification results. Automated classification adds value after foundational CI data establishes the baseline taxonomy needed for pattern recognition.\n\nEstablishing service-level awareness by linking CIs to business service offerings represents a Walk or Run phase objective that depends on validated CMDB data. The Crawl phase establishes the foundational CI records and reference data that service-level linking later consumes. Service awareness requires organizations to first populate accurate infrastructure data and validate CI relationships before defining business service connections. Linking CIs to service offerings without completed foundation data produces unreliable service maps and inaccurate dependency views.",
"r": [
[
"Implementing the CSDM framework in stages",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implementation-stages.html"
],
[
"CSDM Data Foundations Dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/csdm-data-foundations-dashboard.html"
],
[
"Exploring Service Mapping",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/service-mapping-get-started.html"
],
[
"Patterns and horizontal discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c-UsingPatternsForHorizontalDiscovery.html"
],
[
"CSDM terms",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-term-definitions.html"
]
],
"o": [
"Establish foundation data and basic CMDB structure to support core ITSM processes",
"Integrate discovery patterns to automatically classify new configuration items",
"Establish service-level awareness by linking CIs to business service offerings",
"Map business services to their supporting infrastructure CIs in the CMDB"
],
"a": [
0
]
},
{
"n": 108,
"t": "IRE",
"k": 1,
"q": "The Administrator needs to merge duplicate CI records that require manual resolution while ensuring that existing relationships and task references are preserved.\n\nWhich action initiates the remediation process?",
"e": "Selecting the De-duplication Task and clicking Remediate initiates the remediation process. The De-duplication Wizard provides a side-by-side comparison of the records. This process allows the administrator to choose the main record and specifically preserves relationships and task history by moving them to the main record before deleting the duplicate.\n\nExporting duplicate records to a spreadsheet does not initiate the remediation process. While exporting allows attribute consolidation, re-importing the data does not automatically handle the complex relationships and task references associated with the records. This approach often results in orphaned records and broken links.\n\nManually moving related records does not initiate the remediation process. Manually finding and updating every Incident, Change, relationship, and reference pointing to the duplicate configuration item (CI) is time-consuming and prone to human error. The wizard automates this reparenting process to ensure nothing is missed.\n\nRunning a background script does not initiate the remediation process. While scripts can delete records, writing code to safely identify the correct main record, reparent all relationships, and handle references is complex and risky. The built-in wizard provides this logic out of the box with a safe user interface.",
"r": [
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html"
],
[
"Remediate a de-duplication task (manual)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/reconcile-dup-task.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
]
],
"o": [
"Manually move related records to the main CI and delete the duplicate",
"Run a background script to delete the duplicate CIs based on creation date",
"Select the De-duplication Task and click Remediate to launch the wizard",
"Export the duplicate records to a spreadsheet for external merging and re-import"
],
"a": [
2
]
},
{
"n": 109,
"t": "DM",
"k": 2,
"q": "An organization needs to establish governance for the complete CI lifecycle as assets move from deployment through decommissioning.\n\nWhich governance requirements address CI lifecycle management?",
"e": "A governance requirement that addresses configuration item (CI) lifecycle management is to define lifecycle states. Both these states and transitions between them track CIs from creation through active use to retirement. Lifecycle state management provides visibility into where each CI is in its lifecycle and enables governance processes to treat CIs appropriately based on their current state. For retired equipment, the organization transitions CIs to a Retired state that triggers attestation from asset managers and schedules eventual archival after a retention period.\n\nAnother governance requirement that addresses CI lifecycle management is to establish cleanup policies. These policies automatically remove or archive CIs beyond a defined retention period. Cleanup policies prevent configuration management data base (CMDB) bloat from obsolete records while ensuring proper archival for audit compliance before final removal. When equipment is decommissioned and marked as retired, cleanup policies can automatically archive those CIs after 90 days, maintaining audit history while removing obsolete records from active CMDB views.\n\nConfiguring discovery to run continuously does not address lifecycle governance. Discovery schedule frequency affects data freshness but does not establish the lifecycle states, transitions, or retirement processes needed to govern CIs through their complete lifecycle. When equipment is decommissioned, Discovery simply stops returning data for that CI. The organization needs formal lifecycle states and cleanup processes to properly handle retired equipment, not just faster Discovery scans.\n\nImplementing event correlation rules does not address lifecycle governance. Performance monitoring integration updates CI attributes but does not establish the governance framework for managing CIs through creation, active use, retirement, and archival stages. Event correlation addresses operational monitoring rather than the structured lifecycle state management needed for comprehensive CI governance. Monitoring integration updates CI health attributes but does not manage retirement and archival processes.\n\nCreating custom CI reports does not address lifecycle governance requirements. Reports provide visibility into current CI data but do not establish the governance processes needed to manage CI state transitions from deployment through decommissioning. Lifecycle governance requires defined states, transition rules, and automated cleanup policies rather than reporting capabilities. Reports help monitor lifecycle compliance but do not themselves implement the governance framework required for complete CI lifecycle management.",
"r": [
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-table-property-descriptions.html"
],
[
"CMDB CI Class Models app",
"https://www.servicenow.com/docs/r/servicenow-platform/cmdb-ci-class-models/cmdb-ci-class-models.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"Schedule a horizontal Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/t_CreateADiscoverySchedule.html"
],
[
"Exploring Event Management",
"https://www.servicenow.com/docs/r/it-operations-management/event-management/exploring-event-management.html"
]
],
"o": [
"Implement event correlation rules",
"Create custom CI reports",
"Establish cleanup policies",
"Define the lifecycle states",
"Configure continuous discovery schedules"
],
"a": [
2,
3
]
},
{
"n": 110,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator notices the CMDB Health Dashboard shows no data even though the instance has thousands of CIs. The Administrator needs to enable health score calculations.\n\nWhat does the Administrator configure?",
"e": "The Administrator activates and schedules the Configuration Management Database (CMDB) Health scheduled jobs to enable health score calculations. CMDB Health relies on scheduled jobs to periodically evaluate configuration items (CIs) against health rules and update the dashboard with calculated scores. Without active scheduled jobs, the dashboard does not display current health data. Administrators verify job schedules are configured appropriately for their organization's monitoring needs. This understanding prevents misconfiguration and supports proper system implementation.\n\nThe Administrator does not create custom business rules for this purpose. CMDB Health uses its own scheduled job framework rather than business rules to calculate health metrics. Business rules do not properly integrate with the health dashboard components. The CMDB Health calculation engine is specifically designed to efficiently process large CI populations and aggregate results for dashboard presentation.\n\nThe Administrator does not configure Discovery to enable health calculations. Discovery populates CI data from infrastructure sources but health scores are calculated separately by CMDB Health scheduled jobs that analyze the populated data. Discovery focuses on collecting configuration information from target systems while health scoring evaluates the quality of that collected data.\n\nThe Administrator does not install additional plugins for this purpose. CMDB Health is included with the base CMDB application and requires scheduled job activation rather than additional plugin installation. The necessary components for health calculation already exist within the base CMDB application package. Administrators activate health calculation scheduled jobs within the existing CMDB plugin rather than searching for additional plugins. The CMDB application includes all health monitoring capabilities out of the box. Configuration involves enabling scheduled jobs and defining health criteria rather than installing new software components.",
"r": [
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
]
],
"o": [
"Configure Discovery to include health scoring parameters",
"Create custom business rules for health calculations on CI changes",
"Activate and schedule the CMDB Health scheduled jobs",
"Install additional plugins for health score fields"
],
"a": [
2
]
},
{
"n": 111,
"t": "M360",
"k": 1,
"q": "A CMDB team is using CMDB 360 and wants to review the raw attribute values that are collected from each data origin.\n\nWhich table stores this information?",
"e": "The cmdb_multisource_data table stores the raw attribute values for each configuration item (CI) per discovery source, allowing Configuration Management Database (CMDB) 360 to:\n\nTrack which source contributed each CI attribute value\nSupport reconciliation and conflict resolution across multiple sources\nEnable operational insights and reporting based on per-source data\n\nThe cmdb_datasource_last_update table tracks the last update timestamp per discovery source, but does not store raw attribute values.\n\nThe cmdb_import_set_run table stores information about imported data that was processed by the Identification and Reconciliation Engine (IRE). It does not store multisource attributes.\n\nThe cmdb_health_metric_status table stores CMDB health metrics, not per-source attribute data.",
"r": [
[
"CMDB 360",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Data Source History",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/create-reconciliation-rule.html#:~:text=stored%20in%20the-,Data%20Source%20History,-%5Bcmdb_datasource_last_update%5D%20table%2C%20but"
],
[
"Apply IRE to Import Sets",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/identification-import-sets.html"
],
[
"CMDB Health process tracking and troubleshooting",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealthTroubleshooting.html"
]
],
"o": [
"cmdb_datasource_last_update",
"cmdb_health_metric_status",
"cmdb_import_set_run",
"cmdb_multisource_data"
],
"a": [
3
]
},
{
"n": 112,
"t": "CLS",
"k": 1,
"q": "A healthcare organization tracks which server CIs process protected health information to comply with HIPAA regulations.\n\nHow does the CMDB administrator configure the CMDB to support this requirement?",
"e": "The Configuration Management Database (CMDB) Administrator adds Regulatory Framework and Data Classification attributes to configuration item (CI) classes. Custom attributes on CI classes enable administrators to tag systems with applicable regulations, supporting compliance reporting and impact analysis for regulatory audits. These attributes integrate compliance tracking into the CMDB where relationship data already exists. This approach enables queries that identify all systems subject to HIPAA requirements and their dependencies for comprehensive compliance scope assessment.\n\nThe CMDB Administrator does not create separate CMDB instances. A single CMDB tracks compliance attributes across all CIs, and separation complicates relationship management and impact analysis across the infrastructure. Separate instances prevent visibility into dependencies between regulated and non-regulated systems. A unified CMDB with compliance attributes provides complete relationship context while still enabling filtered views for compliance-specific reporting.\n\nThe CMDB Administrator does not configure Discovery for compliance tagging. Regulatory applicability is a business determination based on what data systems process, not a technical configuration that Discovery identifies through system scanning. Whether a server processes protected health information depends on application design and data flows, not on discoverable technical characteristics. Compliance classification requires business input and is manually assigned or imported from authoritative compliance management systems.\n\nThe CMDB Administrator does not store compliance information in GRC only. In order to enable impact analysis, change management controls, and comprehensive reporting on regulated infrastructure, it is necessary to integrate compliance data with CMDB. GRC applications focus on control documentation and audit workflows while CMDB provides infrastructure context. Linking compliance classifications to CMDB records enables automated identification of regulated systems during change requests and incident triage.",
"r": [
[
"The Common Service Data Model (CSDM) explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/products/discovery.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html"
]
],
"o": [
"Create separate CMDB instances",
"Store compliance data in GRC only",
"Add compliance attributes to CI classes",
"Configure Discovery for compliance tagging"
],
"a": [
2
]
},
{
"n": 113,
"t": "HEA",
"k": 1,
"q": "A compliance requirement states that server CIs must have a valid relationship to their physical host, and the host must be in the same data center as the server.\n\nWhich CMDB feature does the Administrator use to validate this requirement?",
"e": "The Administrator uses a scripted audit. A scripted audit runs custom JavaScript that can query related records and evaluate complex conditions. The script follows the relationship to find the host configuration item (CI), checks its data center attribute, and compares it to the server location. Template audits cannot perform this kind of cross-record validation because they only check attributes on a single CI.\n\nThe Administrator does not use a template audit. A template audit checks attribute values on individual CIs against expected values, but cannot traverse relationships or compare values across multiple records. This requirement needs logic that follows the relationship to the host CI and compares data center values between two records.\n\nThe Administrator does not use a reconciliation rule. Reconciliation rules govern how attribute values from multiple discovery sources are merged and prioritized during CI updates in the Configuration Management Database (CMDB). These rules resolve conflicts when different sources report different values for the same CI attribute. This compliance requirement needs logic that traverses a relationship to a related CI and compares attribute values across two records, which reconciliation rules do not perform.\n\nThe Administrator does not use an identification rule. Identification rules define the criteria that the Identification and Reconciliation Engine (IRE) uses to determine whether incoming data represents an existing CI or a new record. These rules match attributes like serial number or name to prevent duplicate CIs during data ingestion. Validating that a related host CI shares the same data center attribute requires custom scripted logic that identification rules do not provide.",
"r": [
[
"Scripted audits",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_ScriptedAudits.html"
],
[
"Create a scripted audit",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateAScriptedAudit.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Reconciliation rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_ReconciliationRulesPrinciples.html"
],
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html"
]
],
"o": [
"Scripted audit",
"Identification rule",
"Template audit",
"Reconciliation rule"
],
"a": [
0
]
},
{
"n": 114,
"t": "DM",
"k": 1,
"q": "A governance team asks the owner of each infrastructure configuration item (CI) in the Configuration Management Database (CMDB) to confirm on a 90-day cycle that the equipment or application the record represents remains in place.\n\nWhich CMDB Data Manager policy delivers that confirmation?",
"e": "An Attestation policy on the targeted classes assigns tasks to verify that the infrastructure or applications represented by the configuration items (CIs) still exist. In the configuration management database (CMDB), Data Manager lets administrators specify the CIs, attestation frequency, and responsible reviewers. A 90-day interval supplies the recurring existence check in the scenario. Reviewers attest or reject the represented infrastructure or applications, and rejected CIs can subsequently be considered for retirement, archiving, or deletion as separate lifecycle decisions after the review.\n\nA Certification policy on the targeted classes validates selected attribute values through Data Certification in CMDB Data Manager. Administrators choose the certification fields and assign review work to people who evaluate those values, such as operating system or support ownership. Reviewers may consider existence while evaluating a field, but the policy's native purpose is field-value certification. The scenario directly requests recurring confirmation that the represented equipment or application exists, which is the purpose of Attestation.\n\nA Retire policy on the targeted classes performs CI retirement through CMDB Data Manager while retaining the records in list views and processes such as CMDB Health. The policy can require human review and approval before its lifecycle action runs. That review authorizes retirement of the target CIs; it is not the dedicated recurring existence-confirmation task described in the scenario. The governance team is asking owners to attest that represented infrastructure remains present before deciding whether any lifecycle action is warranted.\n\nAn Archive policy on the targeted classes moves CIs from their current tables to separate archive tables for temporary retention in CMDB Data Manager. Archived CIs leave active views, and retained records can be restored during the retention period. Human review and approval, when configured, authorize that archival action before it runs. The policy's approval concerns archiving records, whereas the scenario seeks recurring confirmation that the equipment or application represented by each CI remains present.",
"r": [
[
"CIs attestation",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/attesting-cis.html"
],
[
"Data Certification",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_DataCertification.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
]
],
"o": [
"A Retire policy on the targeted classes",
"An Attestation policy on the targeted classes",
"A Certification policy on the targeted classes",
"An Archive policy on the targeted classes"
],
"a": [
1
]
},
{
"n": 115,
"t": "QB",
"k": 1,
"q": "A web application requires a database server to function. The CMDB Administrator needs to document this functional dependency between the two CIs.\n\nWhich CMDB relationship does the Administrator use?",
"e": "The Administrator uses Depends on::Used by to document this functional dependency. This relationship type indicates that one CI requires another to operate, such as a web application depending on a database server for data storage and retrieval. Impact analysis uses these relationships to identify affected services when dependencies fail. The bidirectional naming convention shows the relationship from both perspectives, with Depends on indicating the consumer view and Used by showing the provider view.\n\nThe Administrator does not use Runs on::Runs to document this functional dependency. This relationship type documents where a CI executes, such as an application running on a specific server, rather than indicating that one component requires another external component to function properly. The Runs on relationship captures the execution environment rather than service-level dependencies between applications. A web application might run on a server but depend on a separate database server for data.\n\nThe Administrator does not use Hosted on::Hosts to document this functional dependency. This relationship type is used for virtualization scenarios where virtual machines are hosted on hypervisors, not for documenting functional requirements between applications and their external dependencies. The hosting relationship captures the virtualization layer hierarchy rather than the functional service dependencies that impact analysis needs to trace. This understanding prevents misconfiguration and supports proper system implementation.\n\nThe Administrator does not use Contains::Contained by to document this functional dependency. This relationship type documents physical enclosure relationships, such as a rack containing servers or a chassis containing blade servers, rather than application-level service dependencies. The containment relationship indicates physical location within a larger component and is used for asset tracking and data center management. This distinction is critical for proper platform configuration. Understanding this difference ensures administrators select the correct mechanisms for each specific use case.",
"r": [
[
"CMDB classifications and class dependency",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBClassifications.html"
],
[
"CMDB dependent relationship rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_ServiceRulesMetadata.html"
],
[
"The Common Service Data Model (CSDM) explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
]
],
"o": [
"Contains::Contained by",
"Runs on::Runs",
"Depends on::Used by",
"Hosted on::Hosts"
],
"a": [
2
]
},
{
"n": 116,
"t": "HEA",
"k": "d",
"q": "A CMDB Administrator explains the CMDB Health scoring hierarchy to stakeholders.\n\nDrag and drop each scoring component with what it represents in the health calculation.\n\nSome options may not apply.",
"e": "Completeness measures whether configuration item (CI) records have all required attributes populated according to defined standards. This key performance indicator (KPI) evaluates data gaps by checking for empty mandatory fields across CI classes. Higher completeness scores indicate fewer missing values in critical attributes. Organizations configure which attributes are required for each CI class to focus completeness scoring on operationally important data elements.\n\nCompliance measures whether CIs meet defined audit rules and organizational data standards. This KPI reflects pass rates from configured compliance audits that check attribute values against business rules. Higher compliance scores indicate better adherence to data governance policies. Audit definitions determine which checks contribute to compliance scoring for each CI class.\n\nCorrectness measures whether CI data is accurate, current, and free of quality issues like duplicates and stale records. This KPI encompasses multiple metrics including orphan detection, staleness evaluation, and duplicate identification. Higher correctness scores indicate data that accurately reflects current infrastructure state. The Correctness KPI helps identify CIs needing remediation due to data quality degradation.\n\nRelationship Health measures whether CI relationships are valid, properly typed, and correctly connected throughout the configuration management data base (CMDB) graph. This KPI evaluates relationship completeness, orphan relationships, and dependency accuracy. Higher relationship health scores indicate reliable service mapping and impact analysis capabilities. Accurate relationships enable downstream processes like change impact assessment and service dependency visualization.",
"r": [
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/config-cmdb-health-metric-weights.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/r/zurich/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
],
[
"CMDB Compliance",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_Compliance.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
]
],
"o": [
"Percentage of mandatory fields with values across CI classes",
"Audit pass rates from configured data governance checks",
"Staleness, orphan, and duplicate detection metrics",
"Upstream and downstream dependency graph integrity"
],
"c": [
"Compliance",
"Correctness",
"Completeness",
"Relationship Health"
],
"a": [
2,
0,
1,
3
]
},
{
"n": 117,
"t": "ING",
"k": 1,
"q": "A security team applies a payment-card compliance tag to its cloud resources in the cloud provider. After cloud discovery runs, the team reports on the configuration items (CIs) carrying that tag.\n\nWhere does the platform store the discovered tag?",
"e": "Key Value records associated with the configuration item (CI) store the cloud provider tag discovered in this scenario. Discovery and Cloud Provisioning and Governance populate discovered cloud and resource tags into the Key Value [cmdb_key_value] table. The CI Form Tags section displays those key/value pairs for the associated CI. The payment-card label identifies the team's reporting scope; it does not select a separate compliance storage mechanism. Reporting on the imported marker therefore follows the cloud-tag records associated with each CI.\n\nThe Tags column on the CI record holds platform tags, which are a separate labeling mechanism present on most platform tables. In the configuration management database (CMDB), the CMDB Workspace CI Form Tags section instead displays cloud tags stored as key/value pairs in the Key Values table. The similar labels refer to different storage mechanisms. The scenario specifically follows a provider tag through cloud discovery, so a report using the platform Tags column would not target the imported cloud-tag data described.\n\nCI Relationship records linking two CIs represent connections between a parent CI and a child CI through a relationship type in the CMDB. Relationship types express links such as hosting, containment, or dependency, and Discovery can populate CI relationships. These records support a model of how infrastructure and services relate to one another. The scenario concerns a provider tag's key/value pair, however, and the cloud-tag ingestion path stores that marker in Key Value records rather than as a link between two CIs.\n\nThe information object for the application describes the type of data exchanged between a business application and its database. Information objects reside in the Common Service Data Model (CSDM) Design & Planning domain and map to the Information Object table. They can classify sensitive data, including payment-card data, which makes them relevant to regulatory scope. Here the question follows a tag applied in the cloud provider and collected by Discovery, whose storage path is the Key Value table rather than the application's information object.",
"r": [
[
"Tag-based discovery in Service Mapping",
"https://www.servicenow.com/docs/r/it-operations-management/service-mapping/tag-based-mapping.html"
],
[
"Manage CI details using CI Form in CMDB Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/ci-form-cmdb-workspace.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
],
[
"Design & Planning domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/design-domain.html"
]
],
"o": [
"In Key Value records associated with the CI",
"In the information object for the application",
"In the Tags column on the CI record itself",
"In CI Relationship records linking two CIs"
],
"a": [
0
]
},
{
"n": 118,
"t": "IRE",
"k": 2,
"q": "An administrator submits Environment values for server CIs through the Identification and Reconciliation Engine (IRE) using ManualEntry. ManualEntry takes precedence over Discovery for this attribute. After 30 days without another ManualEntry update, the next incoming Discovery update is accepted.\n\nWhich rule types implement this source priority and fallback?",
"e": "Static reconciliation rules assign discovery sources authority and priority for configuration item (CI) attributes in CI Class Manager. Giving ManualEntry a higher priority than Discovery for Environment protects a manual value after ManualEntry supplies it through the Identification and Reconciliation Engine (IRE). A lower-priority Discovery update becomes eligible when the attribute is stale under the associated data refresh rule. Rules for Environment do not by themselves establish source priorities for other attributes on the server class.\n\nData refresh rules in CI Class Manager define the effective duration used to evaluate staleness for a discovery source. A 30-day duration for ManualEntry permits fallback when the relevant fields have received no ManualEntry update during that interval. An incoming update from an authorized lower-priority source then supplies the replacement value. The refresh rule establishes eligibility for that update; it does not schedule a write when the interval expires.\n\nDynamic reconciliation rules in CI Class Manager select values in the configuration management database (CMDB) from the CMDB 360 data store using criteria such as the largest or most frequently reported value. A dynamic rule takes precedence over a static rule for the same attribute, and data refresh rules have no effect while dynamic reconciliation applies. Those value-selection criteria address competing reported values, rather than implementing the specified ManualEntry source priority followed by a 30-day stale-source fallback.\n\nIRE data source rules in the Identification/Reconciliation configuration control whether a discovery source inserts new CIs for a class. A source barred from creating those records can remain trusted to update records that already exist in the CMDB. That distinction supports integrations intended to enrich an established inventory. The scenario instead concerns which source updates an existing Environment attribute and when its authority expires, neither of which is set by an insertion rule.\n\nCI identification rules in the CMDB define identifiers and prioritized entries that recognize configuration items from identifying attributes. Identification helps determine whether incoming data belongs to a stored CI or represents a new CI to add. The mechanism supports consistent matching as different sources submit information about the same server. Selecting a matching record does not assign authority over its Environment value or establish an effective duration for a source.",
"r": [
[
"Create a CI reconciliation rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-reconciliation-rule.html"
],
[
"Create a data refresh rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-datasource-staleness-rule.html"
],
[
"Create an IRE data source rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-ire-data-source-rule.html"
],
[
"Identification rules",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_IdentificationRules.html"
]
],
"o": [
"Static reconciliation rules",
"Dynamic reconciliation rules",
"Data refresh rules",
"IRE data source rules",
"CI identification rules"
],
"a": [
0,
2
]
},
{
"n": 119,
"t": "CSDM",
"k": 1,
"q": "An Incident Manager wants to understand the business impact when a server fails. Multiple systems from infrastructure to business services might be affected, and they need to prioritize response efforts.\n\nHow do CSDM relationships enable automated impact analysis?",
"e": "The primary way Common Service Data Model (CSDM) relationships enable automated impact analysis is through relationship chains from CIs through Technical Services to Business Services that allow automatic traversal. When a CI fails, the system traverses relationships upward through Technical Services to Business Services, automatically identifying which business functions and customers are impacted. This traversal happens instantly because relationships are pre-defined in the configuration management data base (CMDB). Incident responders receive immediate visibility into business impact without manual investigation.\n\nThe primary way CSDM enables impact analysis is not by automatically generating incident tickets for all potentially affected services without human review. While automation does assist incident creation, CSDM's impact analysis value lies in traversing relationships to identify impact scope rather than automated ticket generation without oversight. Human judgment determines which impacts warrant separate incidents versus consolidated handling. CSDM provides the impact information that humans use to make appropriate response and communication decisions.\n\nThe primary way CSDM enables impact analysis is not by providing real-time monitoring agents that detect failures before they occur. Monitoring is provided by separate tools like Event Management and infrastructure monitoring solutions deployed across the environment. CSDM relationships enable impact analysis after an issue is detected rather than performing the monitoring or prediction itself. CSDM consumes alerts from monitoring tools and adds business context through relationship traversal to affected services.\n\nThe primary way CSDM enables impact analysis is not through algorithms predicting future failures based on historical patterns. Predictive capabilities require separate analytics tools like AIOps that analyze historical data patterns and performance trends over time. CSDM enables understanding current impact through relationship traversal rather than prediction of future failures before they occur. Predictive and reactive impact analysis serve complementary purposes but use different mechanisms and data sources.",
"r": [
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"CSDM automatically generates incident tickets for all potentially affected services without human review.",
"Impact analysis algorithms predict future failures based on historical CI performance patterns.",
"Relationship chains from CIs through Technical Services to Business Services allow automatic traversal.",
"The framework provides real-time monitoring agents that detect failures before they occur."
],
"a": [
2
]
},
{
"n": 120,
"t": "DM",
"k": 2,
"q": "An organization has accumulated a large number of stale server CIs that have not been updated by Discovery in over 90 days. The CMDB Administrator needs to configure Data Manager to systematically decommission these CIs while preserving the ability to restore them during a grace period.\n\nWhich configuration steps does the Administrator complete in Data Manager?",
"e": "The Administrator creates a retirement definition that specifies the staleness threshold for the server class. A retirement definition establishes the criteria that determine when a configuration item (CI) is eligible for retirement, such as exceeding a specified number of days without an update from an authoritative data source. The administrator selects the CI class and configures the threshold, and due to derivation the definition applies to all child classes that do not have their own retirement definition. This is a prerequisite before creating life cycle policies.\n\nThe Administrator creates a retire policy targeting stale server CIs and an archive policy targeting retired CIs. The retire policy transitions CIs that meet the retirement definition criteria from an operational state to a retired state while keeping them visible in list views and Configuration Management Database (CMDB) Health processes. The archive policy then targets retired CIs and moves them to a separate archive table, removing them from active views for a specified retention period. This two-policy sequence implements the governed life cycle process the scenario describes.\n\nThe Administrator does not create a delete policy that removes stale CIs directly from the CMDB. A delete policy permanently removes CIs from their current table with no option to restore them to an active state. The scenario requires a governed process that preserves the ability to restore CIs during a grace period, which requires the retire-then-archive sequence rather than direct deletion. Deleting stale CIs without retirement bypasses the governed life cycle workflow.\n\nThe Administrator does not configure an attestation policy to notify server owners before archiving their CIs. Attestation policies assign tasks to verify the existence of actual IT infrastructure and applications that owners are responsible for managing. While attestation validates whether CIs are still in use, it does not govern life cycle transitions such as retirement or archival. Life cycle management requires retirement definitions and retire or archive policies rather than attestation workflows.\n\nThe Administrator does not enable CMDB Health staleness rules to automatically retire CIs that exceed the threshold. CMDB Health staleness rules determine when a CI is flagged as stale based on the duration since its last update, but flagging a CI as stale does not trigger an automatic retirement action. Transitioning CIs from an operational state to a retired state requires a Data Manager retire policy that references a retirement definition. Staleness rules and retirement policies serve complementary but distinct functions.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CMDBHealth.html"
],
[
"Certification tasks",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/data-certification/concept/c_CertificationTasks.html"
],
[
"Review CMDB Data Manager attestation tasks",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/review-data-manager-attes-task.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
]
],
"o": [
"Enable CMDB Health staleness rules to automatically retire CIs that exceed the threshold",
"Create a delete policy that removes stale CIs directly from the CMDB",
"Configure an attestation policy to notify server owners before archiving their CIs",
"Create a retire policy targeting stale server CIs and an archive policy targeting retired CIs",
"Create a retirement definition that specifies the staleness threshold for the server class"
],
"a": [
3,
4
]
},
{
"n": 121,
"t": "CLS",
"k": 1,
"q": "A Security team identifies a critical vulnerability in a specific software version. To address the issue, the team needs to locate all affected servers, assess the business impact of the vulnerability, and generate remediation tasks to mitigate the risk.\n\nHow does the CMDB facilitate this vulnerability response workflow?",
"e": "Configuration Management Database (CMDB) data supports this vulnerability response workflow by providing software inventory linked to server configuration item (CIs), enabling queries to identify affected systems and their business service relationships for impact assessment. Software CIs linked to servers allow identification of affected systems, while service relationships enable impact analysis to prioritize remediation. The security team can query for all servers running the vulnerable software version and trace upstream to identify affected business services. \n\nCMDB data does not support this workflow by automatically detecting vulnerabilities during Discovery. Discovery collects configuration data including installed software versions, while vulnerability scanning requires dedicated security tools that integrate with CMDB to correlate findings with CI records. Vulnerability detection requires specialized scanning capabilities that analyze software versions against known vulnerability databases and CVE feeds. Discovery identifies what software is installed but does not evaluate security posture, CVE applicability, or missing patches.\n\nCMDB data does not support this workflow by storing vulnerability scan results directly on CI records. Vulnerability Response or Security Operations applications integrate with CMDB, linking vulnerability items to affected CIs rather than storing scan data on configuration records themselves. Scan results are maintained in security-focused applications that specialize in vulnerability lifecycle management and remediation tracking. These applications reference CMDB CIs to identify affected infrastructure without duplicating vulnerability data in configuration records.\n\nCMDB data is not limited to read-only reporting capabilities in supporting vulnerability response workflows. CMDB relationships and attributes can trigger automated workflows for remediation task creation, change requests, and notification routing based on affected CI ownership and support group assignments. CMDB data actively drives operational processes by providing the assignment groups and approval chains required for remediation activities. Automation can create targeted remediation tasks assigned directly to the support groups responsible for affected systems.",
"r": [
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
]
],
"o": [
"CMDB stores vulnerability scan results.",
"CMDB provides read-only reporting.",
"CMDB links software inventory to servers.",
"CMDB automatically detects vulnerabilities."
],
"a": [
2
]
},
{
"n": 122,
"t": "CSDM",
"k": 2,
"q": "An IT leadership team is assessing how implementing the CSDM will enhance their portfolio management initiatives. Their focus is on improving both Service Portfolio Management and Technology Portfolio Management to drive better decision-making and alignment with business goals.\n\nWhich benefits does the CSDM provide for these portfolio management disciplines?",
"e": "A benefit Common Service Data Model (CSDM) provides for portfolio management is that Business Service structures provide foundation for Service Portfolio Management to track service lifecycle. The Sell/Consume domain defines Business Services that Service Portfolio Management uses to manage the service catalog, track service lifecycle stages, and demonstrate business value delivery to stakeholders. CSDM structures enable portfolio managers to view services from strategy through retirement. This comprehensive lifecycle view supports investment decisions about which services to grow, maintain, or retire.\n\nAnother benefit CSDM provides for portfolio management is that Technical Service and CI relationships enable Technology Portfolio Management to assess technology standards and lifecycle. CSDM's Technical Services and underlying CI classes provide the data Technology Portfolio Management needs to evaluate technology rationalization, standards compliance, and end-of-life planning across the organization. Portfolio managers can identify aging technologies, track adoption of standards, and plan migrations using CSDM relationship data that shows which business functions depend on specific technology platforms.\n\nCSDM does not require Technology Portfolio Management to use separate data models that operate independently. Technology Portfolio Management leverages CSDM data directly rather than maintaining duplicate structures. Using Technical Services and CI information from the Design and Manage Technical Services domains, Technology Portfolio Management does assess technology standards and lifecycle positioning. CSDM provides the single source of truth for technology assets that portfolio decisions rely upon.\n\nCSDM does not provide the benefit of automatically calculating total cost of ownership (TCO) for each service without configuration. While CSDM provides the data structures that enable cost analysis, organizations configure cost allocation rules, integrate financial data, and define calculation methods to determine TCO accurately. Cost calculations require business decisions about allocation methodologies that vary between organizations. CSDM enables cost management through service structures but does not automate the financial analysis itself.\n\nCSDM does not provide the benefit of replacing external portfolio management tools and methodologies. The framework provides the data foundation that portfolio management processes use, but organizations typically maintain their existing portfolio management tools, workflows, and governance structures. Consistent service and technology data enhances portfolio management rather than replacing established portfolio practices. Integration between CSDM data and existing tools provides the combined benefits of standardized data with proven management processes.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"CSDM implementation stage - Crawl",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/csdm-implement-crawl-stage.html"
],
[
"CMDB CI Lifecycle Management",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html"
],
[
"The Common Service Data Model (CSDM) explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Financial Management",
"https://www.servicenow.com/docs/bundle/xanadu-it-business-management/page/product/it-finance/concept/c_ITFinance.html"
]
],
"o": [
"Replacement of external portfolio tools",
"Automatic TCO calculation",
"Business Service structures",
"Technical Service relationships",
"Independently operating data models"
],
"a": [
2,
3
]
},
{
"n": 123,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator sees that the Stale metric shows 15% of CIs as stale and needs to identify specific records for remediation.\n\nHow does the Administrator drill down from the dashboard to view affected CIs?",
"e": "The Administrator clicks on the Stale metric in the dashboard to view a list of configuration items (CIs) flagged as stale with the ability to open individual records for review. The Configuration Management Database (CMDB) Health Dashboard provides interactive drill-down from metrics to affected CI lists, enabling Administrators to quickly identify and access specific records for remediation. This navigation eliminates manual searching and ensures Administrators see exactly which CIs contributed to the metric score.\n\nThe Administrator does not export dashboard data for this task. While exports are possible, the dashboard provides direct drill-down navigation that is more efficient than exporting and manually filtering spreadsheet data. Exports create static snapshots requiring additional manipulation to identify specific CIs. The interactive dashboard approach provides immediate access to affected records without intermediate steps.\n\nThe Administrator does not navigate to Configuration Items module to manually filter by last updated date. Manual filtering requires knowing the exact staleness criteria and does not leverage the dashboard's built-in navigation from health metrics to affected CIs. The dashboard already knows which CIs match the stale criteria based on the scheduled job calculations.\n\nThe Administrator does not run the Health scheduled job in debug mode. Debug mode is for troubleshooting job execution, not for identifying affected CIs. Debug output focuses on job processing details rather than presenting affected CIs in an actionable format. Debug logging captures technical execution details for troubleshooting but does not provide business-friendly views of affected records.",
"r": [
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/bundle/xanadu-servicenow-platform/page/product/configuration-management/task/create-data-manager-policy.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
]
],
"o": [
"Export dashboard data to CSV and filter the data in a spreadsheet",
"Run the Health scheduled job in debug mode to generate a log file",
"Navigate to the Configuration Items module and filter by last updated date",
"Click the Stale metric to view a list of stale CIs"
],
"a": [
3
]
},
{
"n": 124,
"t": "CLS",
"k": 1,
"q": "A Change Manager reviews a change request to upgrade firmware on a core network router. The Manager is worried about the services and users that might be affected if the change causes an outage.\n\nHow does Change Management leverage CMDB relationships?",
"e": "Change Management leverages configuration management data base (CMDB) relationships by using configuration item (CI) relationship data to display affected services and downstream dependencies for risk assessment. CMDB relationships provide impact visibility that informs change risk assessment and approval planning before implementation begins. When approvers see the full dependency chain from the router to business services, they can make informed decisions about timing and communication. Understanding blast radius helps determine whether changes require extended maintenance windows or staged rollouts.\n\nChange Management does not leverage CMDB relationships to automatically approve changes when all related CIs have passing health scores. Change approval requires human review of impact and risk rather than automatic decisions based solely on CI health status indicators. Healthy CIs can still be affected by poorly planned changes, and unhealthy CIs might need changes to restore their health. Approval automation based on health scores would bypass necessary human judgment about change appropriateness.\n\nChange Management does not leverage CMDB relationships to generate vendor compatibility matrices by querying manufacturer databases. CMDB stores configuration data about current CI states but compatibility verification typically uses vendor documentation and release notes rather than automated matrix generation. Vendors maintain compatibility information in their own systems outside ServiceNow. Change managers reference vendor resources directly when verifying compatibility for firmware and software updates.\n\nChange Management does not leverage CMDB relationships to schedule change windows automatically based on historical usage patterns. CMDB stores CI relationships and configuration data rather than traffic utilization patterns from monitoring systems. Change scheduling involves human coordination considering business calendars, staff availability, and stakeholder preferences beyond traffic metrics. Usage-based scheduling would require integration with monitoring tools rather than CMDB relationship queries.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"Agent Client Collector",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/agent-client-collector/concept/acc-landing-page.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"It generates vendor compatibility matrices from manufacturer databases.",
"It automatically approves changes when all related CIs have passing health scores.",
"It uses CI relationships to display affected services and dependencies.",
"It schedules change windows automatically based on historical usage patterns."
],
"a": [
2
]
},
{
"n": 125,
"t": "CLS",
"k": 1,
"q": "An IT manager wants to understand the relationship between a laptop's Asset record in the alm_hardware table and its CI record in the cmdb_ci_computer table.\n\nHow are these records linked?",
"e": "The Asset record contains a reference field called 'ci' that points to the configuration item (CI) record. The alm_hardware and cmdb_ci_computer tables are separate in ServiceNow's data model, connected through this reference relationship rather than table extension. This architecture allows simultaneous management of financial asset data and technical configuration data. Synchronization between these records is maintained through Asset-CI Field Mappings and business rules.\n\nThese records do not share sys_ids through table extension. The alm_hardware table is separate from the cmdb_ci hierarchy. While cmdb_ci_computer extends cmdb_ci_hardware within the Configuration Management Database (CMDB), the alm_hardware table exists independently in the Asset module. They are linked via a reference field, not by extending the same base table. The reference field approach maintains clear separation between asset management and configuration management concerns.\n\nA custom relationship table is not used. The alm_hardware table contains a built-in reference field that links to CI records. While they are separate records, standard ServiceNow implementations use synchronization capability to keep key attributes aligned. Custom relationship tables are unnecessary because this native reference linkage exists out of the box. The built-in relationship structure provides integrated asset and configuration tracking capabilities.\n\nThe CI is not auto-created as a child of the Asset. Assets and CIs are peer records in separate tables linked by a reference field, not a parent-child hierarchy. CI records can exist independently of assets, and the linkage is established through the asset's ci reference field rather than automatic child record creation. This design supports scenarios where CIs exist before assets are created or where assets track items that are not configuration items.",
"r": [
[
"Table extension and classes",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/table-administration/concept/table-extension-and-classes.html"
],
[
"CMDB CI Class Models store app",
"https://www.servicenow.com/docs/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-class-models.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Work with Asset and CI",
"https://www.servicenow.com/docs/r/it-asset-management/asset-management/work-with-asset-ci.html"
],
[
"Agent Client Collector",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/agent-client-collector/concept/acc-landing-page.html"
]
],
"o": [
"The CI is auto-created as a child when the Asset deploys",
"Both records share the same sys_id through table extension",
"A reference field on the Asset points to the CI",
"A custom relationship table links the two records"
],
"a": [
2
]
},
{
"n": 126,
"t": "IRE",
"k": 1,
"q": "A company is consolidating CIs from multiple discovery sources into its CMDB. The same server appears in several sources, and the team must prevent duplicate CIs and ensure records are correctly matched, merged, or updated.\n\nWhich ServiceNow capability meets the requirements?",
"e": "The Identification and Reconciliation Engine (IRE) capability meets the requirements in this scenario. IRE is responsible for identifying incoming configuration items from different discovery and integration sources and determining whether they represent new CIs or updates to existing ones. It prevents the creation of duplicates by applying identification rules, matches incoming payloads to the correct CMDB records, and reconciles attribute values using reconciliation rules that determine which source wins when multiple tools provide data for the same fields. By enforcing these rules during discovery or data imports, IRE ensures that the CMDB maintains a single, accurate, and authoritative record for each CI.\n\nThe CMDB Health Dashboard does not meet the requirements. This dashboard only reports on completeness, correctness, and compliance issues after the data is already in the CMDB. It does not identify CIs during import, prevent duplicates, or perform reconciliation. For this reason, it cannot ensure correct matching or merging of CI data coming from different tools.\n\n  CI Class Manager is also not suitable for this scenario. Its purpose is to manage the structure of CI classes, including attributes, inheritance, and schema configuration. It does not participate in the process of importing CIs or determining whether incoming data should create, update, or merge records in the CMDB.\n\nData Management policies do not satisfy the requirements either. They are used to enforce governance rules on existing records, such as ensuring certain fields are completed or preventing unauthorized state changes. They do not identify duplicate CIs, reconcile values from different sources, or manage how discovery and integration tools contribute data to the CMDB.",
"r": [
[
"Identification and Reconciliation Engine (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Data Management Policies",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/managing-data/concept/c_DataManagement.html"
]
],
"o": [
"Data Management policies",
"CMDB Health dashboard",
"Identification and Reconciliation Engine (IRE)",
"CI Class Manager"
],
"a": [
2
]
},
{
"n": 127,
"t": "CLS",
"k": 1,
"q": "An Incident Analyst reports that Printer CIs do not appear in the CI lookup field on Incident forms, even though printers exist in the CMDB.\n\nWhat explains this behavior?",
"e": "When a class is not marked as principal, its CIs do not appear in the CI lookup fields on Incident, Change, and Problem forms. This explains the scenario where printers exist in the CMDB but the analyst cannot find them in the lookup because the Printer class is not principal. This filtering keeps the lookup manageable by only showing CI types that are typically relevant for ITSM work.\n\nPrincipal class designation does not relate to business service visibility or user roles. Principal class determines which CI classes are relevant for ITSM processes. The analyst in this scenario has permission to view CIs through ACLs. Principal class controls which types of CIs appear in form lookups, which is separate from security and business relevance.\n\nNon-principal CIs do not stop syncing or get deleted. They remain fully functional in the CMDB and are accessible through direct navigation or reports. Principal class only affects whether CIs appear in ITSM form lookups. Discovery and connectors continue populating these classes normally. The printers exist but are filtered out of the incident form CI field.\n\nPrincipal class does not control dashboards or reports. Principal class specifically affects the CI lookup fields on ITSM forms. Reports can include any CI class regardless of principal status using their own filters and ACLs. Principal class designation only matters when selecting a CI on an Incident, Change, or Problem form.",
"r": [
[
"CMDB classifications",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBClassifications.html"
],
[
"CMDB CI Class Models store app",
"https://www.servicenow.com/docs/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-class-models.html"
],
[
"Access control list rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
],
[
"Create a CMDB Health staleness rule",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_CreateCMDBHealthStaleRule.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
]
],
"o": [
"Non-principal CIs stop syncing with external tools",
"Principal class affects dashboard visibility but not ITSM form lookups",
"Only CIs from principal classes appear in the lookup fields",
"Principal class limits visibility based on business service association"
],
"a": [
2
]
},
{
"n": 128,
"t": "CSDM",
"k": 1,
"q": "An organization has populated its foundation data and the CMDB tables associated with IT Service Management (ITSM). The next phase identifies and populates the network infrastructure CIs and the applications its technical teams support.\n\nWhich CSDM implementation stage covers that phase?",
"e": "The Walk stage covers identifying and populating the network infrastructure configuration items (CIs) and applications supported by the organization's technical teams. Within the Common Service Data Model (CSDM) implementation approach, this stage also establishes views of supported CIs and uses technology management offerings to help manage support metadata. The scenario already has its foundation data and IT Service Management (ITSM) tables in place. Its next focus on the technical support structure and supported infrastructure therefore matches the work assigned to Walk.\n\nThe Crawl stage works on base-system configuration management database (CMDB) tables associated with IT Service Management and provides the minimum CMDB support for Incident and Change Management. Its scope includes Business Application, Mapped Application Service, discoverable Application, and Server/host records, so application and server population does occur during Crawl. The scenario has this ITSM-related work in place already. The stated next phase, organizing supported network infrastructure and applications around technical teams, matches Walk's specific implementation focus.\n\nThe Run stage establishes relationships between technology and the businesses that sell or consume it within the CSDM implementation approach. Its work includes business services and business service offerings, supporting impact assessment and the identification of affected subscribers. The scenario focuses on identifying supported infrastructure and applications after the ITSM-related tables are in place. That technical-support focus belongs to Walk, while Run adds the business consumption and service relationships described by its scope.\n\nThe Fly stage completes remaining CSDM implementation work after most earlier stages have been accomplished. Its CMDB work includes Business Capability and Information Object records, supporting application and service portfolio decisions; Information Object work can also occur earlier when business requirements call for it. Fly therefore includes active implementation, not merely an end-state label. The scenario's specific next phase concerns technical teams' supported infrastructure and applications, which is the focus assigned to Walk.",
"r": [
[
"CSDM implementation stage — Walk",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implement-walk-stage.html"
],
[
"CSDM implementation stage — Crawl",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implement-crawl-stage.html"
],
[
"CSDM implementation stage — Run",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implement-run-stage.html"
],
[
"CSDM implementation stage — Fly",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/csdm-implement-fly-stage.html"
]
],
"o": [
"The Walk stage",
"The Crawl stage",
"The Run stage",
"The Fly stage"
],
"a": [
0
]
},
{
"n": 129,
"t": "DM",
"k": 1,
"q": "An organization discovers that server CIs have inconsistent naming patterns such as \"WEBSRV01\", \"web-server-1\", and \"WebServer_Prod_01\" for similar assets. This causes confusion when searching and reporting.\n\nWhat problem does defining data standards and naming conventions solve?",
"e": "Naming conventions solve the searchability and reporting problem. When everyone follows the same pattern, users can reliably find configuration items (CIs) and reports show accurate results. With inconsistent names like WEBSRV01, web-server-1, and WebServer_Prod_01, a search for \"WEBSRV\" misses two-thirds of the web servers. Identification rules also depend on consistent naming to match and deduplicate records properly.\n\nNaming conventions do not solve storage problems. The organization's issue is that users cannot find CIs and reports are inaccurate. This is a consistency problem, not a storage problem. Whether the naming uses \"WEBSRV01\" or \"web-server-1\", the storage difference is negligible.\n\nNaming conventions do not solve query performance problems. Database performance comes from indexing and query design, not from the name field values. The organization's users struggle because they cannot find web servers consistently. The queries run fine, but they return incomplete results because the naming is inconsistent.\n\nNaming conventions do not solve integration mapping problems. Integrations need data transformation regardless of internal naming standards. The organization's problem is internal. Users cannot search effectively and reports are inaccurate because the same type of server has three different naming patterns.",
"r": [
[
"CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Identification rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
],
[
"Access control list rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
]
],
"o": [
"Users can reliably search and reports show accurate results.",
"Query performance improves through better index utilization.",
"Database storage costs are reduced through shorter names.",
"External integrations require less custom data mapping."
],
"a": [
0
]
},
{
"n": 130,
"t": "CLS",
"k": 1,
"q": "An Administrator reviews the class hierarchy below. \n\ncmdb\n\n…            cmdb_ci\n\n…            …            cmdb_ci_hardware\n\n…            …            …            cmdb_ci_computer\n\n…            …            …            …            cmdb_ci_server\n\n…            …            …            …            …            cmdb_ci_win_server  \n\n…            …            …            …            …            cmdb_ci_linux_server \n\n…            …            …            …            …            cmdb_ci_unix_server \n\n…            …            …            …            cmdb_ci_pc_hardware\n\nWhich table does the admin add a new attribute to so that both the PC Hardware (cmdb_ci_pc_hardware) and Server (cmdb_ci_server) tables inherit it?",
"e": "You should add the attribute to the cmdb_ci_computer table because both cmdb_ci_pc_hardware and cmdb_ci_server extend from this class. By placing the attribute at the cmdb_ci_computer level, you ensure that the field is inherited by both child classes, allowing consistent data management across all computer‑related configuration items. This placement also aligns with CMDB best practices, which recommend adding attributes at the lowest common ancestor to avoid redundant customization and to maintain a clean class hierarchy.\n\nYou should not add the attribute higher in the hierarchy, such as cmdb, cmdb_ci, or cmdb_ci_hardware, because doing so would cause every descendant class to inherit the field. This would introduce the attribute into many unrelated CI types and pollute the CMDB with fields that have no functional relevance outside the intended scope. Over‑extending attributes in this way can lead to data quality issues, unnecessary clutter, and maintenance overhead during upgrades.\n\nYou should also not add the attribute directly to the cmdb_ci_pc_hardware class because that would limit the attribute to this class alone, excluding cmdb_ci_server, which also requires the field. Adding the attribute too low in the hierarchy defeats the purpose of leveraging inheritance and would force you to duplicate the same customization in multiple classes, reducing consistency and increasing the likelihood of errors.",
"r": [
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"CMDB tables descriptions",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-tables-details.html"
],
[
"CMDB schema model",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_ConfigurationManagementDatabase.html"
],
[
"CMDB Design Guidance",
"https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/resource-center/white-paper/wp-cmdb-design-guidance.pdf"
]
],
"o": [
"cmdb_ci_hardware",
"cmdb_ci_pc_hardware",
"cmdb_ci_computer",
"cmdb_ci"
],
"a": [
2
]
},
{
"n": 131,
"t": "M360",
"k": 2,
"q": "A CMDB Administrator confirms that a recently onboarded discovery tool has been submitting faulty data across hundreds of CI records.\n\nHow does the Administrator eliminate that tool's historical contributions and restore the CMDB to an accurate state?",
"e": "CMDB 360 retains raw data from all discovery sources in the Configuration Management Database (CMDB) MultiSource Data [cmdb_multisource_data] table, including sources whose proposed attribute values were rejected during reconciliation. When a specific source proves unreliable, CMDB 360 provides two paired capabilities to remediate the CMDB: reverting that source's historical contributions, then recomputing attribute values based only on the remaining trusted sources.\n\nRevert CI data integration from the unreliable discovery source is correct. CMDB 360 supports reverting CI data integration from a specified discovery source. When that source is excluded during a recompute operation, its records are removed from the CMDB 360 data store, eliminating its accumulated historical contributions to CI attribute values.\n\nRecompute CI attribute values while excluding the unreliable source is also correct. After removing a faulty source's contributions, CMDB 360 recomputes CI attribute values under the updated source priority, excluding the removed source so that the remaining reliable sources determine the final attribute values in the CMDB.\n\nThe Administrator does not create a dynamic reconciliation rule to adjust future attribute precedence. This is a CMDB 360 capability that selects among competing source values based on criteria such as most-reported or largest value. It governs future attribute updates only and does not revert values already written to the CMDB by a faulty source.\n\nThe Administrator does not run a Compare Attribute Values query to identify affected CI records. This would support investigation rather than remediation. This query type surfaces CIs whose attribute values differ across multiple discovery sources or against the CMDB. It helps an administrator gauge the scope of the problem, but does not remove a source's historical contributions or trigger recomputation of attribute values.\n\nThe Administrator does not exclude the affected CI classes from multisource data collection. This would prevent CMDB 360 from collecting and analyzing data for those classes going forward, and gradually removes existing tracking data from the data store. It does not revert attribute values already written to the CMDB by the faulty source, nor does it trigger recomputation of CI attributes based on remaining sources.",
"r": [
[
"CMDB 360",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/multisource-cmdb.html"
],
[
"Recompute CI attribute values",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/recompute-attribute-values.html"
],
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CMDBIdentifyandReconcile.html"
],
[
"CMDB 360 experience in CMDB Workspace and in Service Graph Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb360-exp-cmdb-workspace.html"
],
[
"Exclude classes from CMDB 360",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/exclude-class-cmdb360.html"
]
],
"o": [
"Revert CI data integration from the unreliable discovery source",
"Run a Compare Attribute Values query to identify affected CI records",
"Recompute CI attribute values while excluding the unreliable source",
"Exclude the affected CI classes from multisource data collection",
"Create a dynamic reconciliation rule to adjust future attribute precedence"
],
"a": [
0,
2
]
},
{
"n": 132,
"t": "CLS",
"k": "d",
"q": "A CMDB Administrator needs to configure different synchronization mechanisms for Asset-to-CI data alignment.\n\nDrag and drop each synchronization mechanism with its primary use case.\n\nSome options may not apply.",
"e": "Field Mapping defines which attributes automatically synchronize between linked Asset and configuration item (CI) records. The Asset-CI Field Mapping configuration controls bidirectional synchronization for shared attributes like asset tag, serial number, and model. When either record changes, field mappings propagate the update to maintain consistency. This mechanism handles routine attribute synchronization without requiring custom development or ongoing maintenance.\n\nBusiness Rules trigger automated actions when specific conditions occur on Asset records. The out-of-box Asset State to Hardware Status synchronization uses business rules on the alm_asset table to update CI status when asset lifecycle state changes. These rules reference mapping tables to translate asset states to appropriate CI hardware status values. This event-driven approach ensures status alignment happens immediately upon state changes.\n\nTransform Maps control how imported data populates CI attributes during data ingestion. Coalesce settings within transform maps enable initial population while preventing subsequent imports from overwriting manually maintained values. This mechanism suits batch data loading scenarios where initial values come from external sources but local changes persist unchanged. Transform maps provide granular control over create versus update behavior.\n\nReconciliation Rules resolve conflicts when multiple data sources provide different values for the same CI attribute. Source precedence configuration specifies which source wins when Discovery and Asset Management disagree on values like location. This mechanism protects manually maintained business attributes from automated technical updates. Identification and Reconciliation Engine (IRE) reconciliation ensures data integrity when integrating multiple authoritative sources.\n\nModel Categories define which CI classes correspond to specific Asset classes to automate record creation. This configuration determines whether creating a Configuration Item triggers the immediate creation of a linked Asset record. While Model Categories establish the initial one-to-one relationship between records in both tables, they do not handle the subsequent synchronization of fields, status updates, or data conflict resolution.",
"r": [
[
"Work with Asset and CI",
"https://www.servicenow.com/docs/r/it-asset-management/asset-management/work-with-asset-ci.html"
],
[
"CMDB CI Class Models app",
"https://www.servicenow.com/docs/r/servicenow-platform/cmdb-ci-class-models/cmdb-ci-class-models.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/r/build-workflows/business-rules-classic/c_BusinessRules.html"
],
[
"Create an ETL transform map",
"https://www.servicenow.com/docs/r/servicenow-platform/integration-hub-etl/create-etl-transform-map.html"
],
[
"Reconciliation rules",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_ReconciliationRulesPrinciples.html"
],
[
"Model categories",
"https://www.servicenow.com/docs/r/it-asset-management/product-catalog/c_ModelCategories.html"
]
],
"o": [
"Automatically sync attributes like asset tag between linked Asset and CI records",
"Trigger CI Hardware Status updates when Asset State changes",
"Populate CI attributes from imported data with coalesce control",
"Resolve conflicts when multiple sources provide different values for the same field"
],
"c": [
"Business Rules",
"Field Mapping",
"Reconciliation Rules",
"Transform Maps",
"Model Categories"
],
"a": [
1,
0,
3,
2
]
},
{
"n": 133,
"t": "DM",
"k": 1,
"q": "A CMDB Administrator needs to ensure that a Data Manager cleanup policy targets only Server CIs that have a Stale health condition while excluding all other CI classes and health states.\n\nHow does the Administrator define the scope of this policy?",
"e": "Setting condition filters on the policy specifies the CI class and health status criteria that define the scope of this policy. Data Manager policies support filter conditions that use standard ServiceNow query syntax to target specific CI classes such as Server and specific health conditions such as Stale. These filters narrow the initial set of target configuration items (CIs) before the policy processes them. The Administrator can run the filter to preview matching CIs and further refine the scope using exclusion lists before publishing the policy.\n\nCreating a Configuration Management Database (CMDB) Health staleness rule that limits the policy to the Server class does not define the scope of this policy. Staleness rules define the duration threshold after which a CI is considered stale, such as the default 60-day period, but they do not control which CIs a Data Manager policy targets. The staleness rule operates independently within the CMDB Health framework and applies across all CIs of a given class. Policy scope is controlled through condition filters configured directly within the Data Manager policy definition.\n\nConfiguring a CI exclusion list that removes all non-Server CIs from policy processing does not define the primary scope of this policy. Exclusion lists in Data Manager exempt specific individual CIs from an already-filtered policy scope rather than establishing the initial targeting criteria. Using exclusion lists as a primary scoping mechanism would require manually adding every non-Server CI, which is not scalable or maintainable. Condition filters within the policy definition provide the correct mechanism to specify target CI classes and health conditions without relying on per-record exclusions.\n\nDefining a life cycle rule does not restrict the policy to CIs in a Stale state. Life cycle rules in Data Manager govern CI state transitions such as moving CIs from operational to retired status based on defined criteria and approval workflows. The Stale health condition is determined by CMDB Health staleness rules based on update timestamps, not by life cycle stage. Condition filters within the policy definition provide the correct mechanism to target CIs matching specific health conditions.",
"r": [
[
"Create a CMDB Health staleness rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreateCMDBHealthStaleRule.html"
],
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
]
],
"o": [
"Set condition filters on the policy to specify the CI class and health status criteria",
"Create a CMDB Health staleness rule that limits the policy to the Server class",
"Configure a CI exclusion list that removes all non-Server CIs from policy processing",
"Define a life cycle rule that restricts the policy to CIs in a Stale state"
],
"a": [
0
]
},
{
"n": 134,
"t": "HEA",
"k": 2,
"q": "A CMDB Administrator gives the Completeness key performance indicator more influence over the overall CMDB Health score than Compliance holds.\n\nWhich steps produce that weighting?",
"e": "The Use legacy calculation methods switch enables custom weighting of configuration management database (CMDB) health scores through the CMDB Health Dashboard. Those weights let an organization give Completeness a larger contribution than Compliance when computing the overall score. Entering custom percentages without enabling this calculation method does not apply the requested weighting. The switch is therefore one required step, together with editing the contribution values that express the desired balance among the three key performance indicators (KPIs).\n\nHealth Metric Preferences stores the Weighted average contribution values used to combine metrics and KPIs in CMDB Health. Editing the KPI entries makes the Completeness contribution greater than the Compliance contribution in the overall score. The three KPI percentages need to total 100, and metric percentages within each KPI also total 100. Custom contributions take effect with legacy calculation methods enabled, so editing these settings works together with the dashboard switch.\n\nHealth Dashboard jobs in Health Preference determine when CMDB Health tests run and their scores are calculated. The Run setting supports a recurring schedule or an on-demand execution, with additional fields for precise timing. A schedule change therefore affects when the dashboard receives recalculated results. It does not set the Weighted average contribution values that determine how strongly Completeness and Compliance contribute to the overall score under the selected calculation method.\n\nHealth inclusion rules in CI Class Manager select configuration items (CIs) for particular health metrics using record conditions. The supported metrics are required, orphan, recommended, duplicate, and staleness, with the rule specifying its target class and metrics. Adjusting those conditions changes the measured population and can change the resulting scores. It does not edit the contribution percentages used to combine KPI scores, so it does not configure the requested relative weighting.\n\nThe Health Group dashboard view displays CMDB Health reports for CIs belonging to a selected health group. Selecting a group filters the dashboard tiles to that group's records, allowing a team to inspect health within its managed population. A different selection can display different Completeness and Compliance scores because the underlying CIs differ. The selection does not edit Health Metric Preferences or change the contribution percentages assigned to those KPIs.",
"r": [
[
"Configure aggregation weights for CMDB Health scores",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/config-cmdb-health-metric-weights.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_EnableCMDBHealthDashboardJob.html"
],
[
"Create health inclusion rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-health-inclusion-rule.html"
],
[
"View CMDB Health Dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_MonitorCMDBHealth.html"
]
],
"o": [
"Changing the run schedule on the Health Dashboard jobs",
"Adjusting the record conditions on health inclusion rules",
"Turning on the Use legacy calculation methods switch",
"Editing the contribution values in Health Metric Preferences",
"Choosing a health group in the Health Group dashboard view"
],
"a": [
2,
3
]
},
{
"n": 135,
"t": "ING",
"k": 1,
"q": "An organization wants to automatically update their CMDB when a virtual machine is provisioned in their VMware environment. The team wants to use Flow Designer with reusable connection components.\n\nWhich ServiceNow capability enables this automated CMDB synchronization?",
"e": "Integration Hub enables automated configuration Management Database (CMDB) synchronization using Flow Designer with reusable integration components. Integration Hub spokes contain pre-built actions for connecting to external systems like VMware, enabling event-driven CMDB updates through Flow Designer workflows without custom scripting. The combination of Integration Hub spokes and Flow Designer provides a no-code or low-code approach to building automated integrations that respond to external events and update CMDB data accordingly. This configuration supports ServiceNow platform best practices and enables effective enterprise CMDB management.\n\nScheduled Discovery does not enable automated CMDB synchronization using Flow Designer with reusable integration components. While Discovery does detect VMs during scheduled runs, it relies on polling intervals rather than responding to VMware provisioning events in real time. The delay between VM provisioning and the next Discovery run might leave the CMDB outdated during critical provisioning activities when accurate configuration item (CI) data is needed for other automation.\n\nCustom scripted REST APIs do not enable automated CMDB synchronization using Flow Designer with reusable integration components. Custom scripts require development effort and ongoing maintenance rather than leveraging pre-built spoke actions. Integration Hub provides pre-built VMware spoke actions that handle authentication and data transformation, eliminating custom development for common integration scenarios. Custom scripting introduces technical debt requiring developer resources for initial creation, troubleshooting, and updates when APIs change. Integration Hub spokes are maintained by ServiceNow.\n\nManagement, Instrumentation, and Discovery (MID) Server does not enable automated CMDB synchronization using Flow Designer with reusable integration components. MID Server facilitates communication between ServiceNow and on-premises systems but does not provide workflow automation or pre-built integration actions. The MID Server is a transport component that enables secure communication, while Integration Hub provides the reusable spoke actions and Flow Designer integration that orchestrate the end-to-end process.",
"r": [
[
"Integration Hub spokes",
"https://www.servicenow.com/docs/bundle/zurich-integrate-applications/page/administer/integrationhub/reference/spokes-list.html"
],
[
"Spokes",
"https://www.servicenow.com/docs/bundle/zurich-build-workflows/page/administer/flow-designer/concept/spokes.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
],
[
"Integrating third-party data into the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-third-party-integrations.html"
],
[
"MID Server",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/mid-server/concept/mid-server-landing.html"
]
],
"o": [
"Custom scripted REST APIs",
"Scheduled Discovery",
"Integration Hub",
"MID Server"
],
"a": [
2
]
},
{
"n": 136,
"t": "ING",
"k": "d",
"q": "A company needs to populate their CMDB with data from three sources: on-premises Windows servers, remote laptops used by field technicians, and their Salesforce CRM application.\n\nDrag and drop the ingestion method to its requirement.\n\nSome options may not apply.",
"e": "Using Discovery for servers, Agent Client Collector for laptops, and Service Graph Connector for Salesforce matches each method to its intended use case. Discovery probes network-accessible infrastructure, Agent Client Collector reaches endpoints outside the network, and Service Graph Connectors integrate with SaaS applications via APIs. This combination ensures comprehensive CMDB coverage by leveraging each tool's strengths for the appropriate data source type.\n\nUsing Discovery for servers, laptops, and Salesforce does not work because Discovery requires network access to probe systems. Discovery does not reach remote laptops outside the corporate network or integrate with SaaS applications like Salesforce that require API-based connectivity. Remote endpoints and cloud applications need Agent Client Collector and Service Graph Connectors respectively.\n\nUsing Agent Client Collector for servers, laptops, and Salesforce does not work because agents cannot be deployed on SaaS applications. Agent Client Collector is designed for endpoint devices where software agents are installed locally. SaaS applications run in vendor-managed cloud environments requiring API-based integration methods like Service Graph Connectors.\n\nUsing Service Graph Connector for servers, laptops, and Salesforce does not work because Service Graph Connectors are designed for third-party application integrations via APIs. On-premises servers need active network probing by Discovery, and remote laptops require locally installed agents. Service Graph Connectors complement these methods but do not replace them.",
"r": [
[
"Integrating third-party data into CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-third-party-integrations.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/identification-import-sets.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/r/it-operations-management/discovery/c_GetStartedWithDiscovery.html"
],
[
"Agent Client Collector",
"https://www.servicenow.com/docs/r/it-operations-management/agent-client-collector/acc-landing-page.html"
],
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/r/servicenow-platform/service-graph-connectors/cmdb-integration-aws-sg.html"
]
],
"o": [
"On-premises Windows servers",
"Remote laptops",
"Salesforce CRM application"
],
"c": [
"Agent Client Collector",
"Service Graph Connector",
"Discovery"
],
"a": [
2,
0,
1
]
},
{
"n": 137,
"t": "IRE",
"k": 1,
"q": "The CMDB team aims to prevent the creation of duplicate CIs and ensure that existing CIs are updated consistently utilizing IRE. During a design review, the team discusses when the IRE is triggered exactly.\n\nWhich event triggers IRE?",
"e": "Identification and Reconciliation Engine (IRE) is triggered when Discovery or Import Sets using CMDBTransformUtil run. IRE is triggered whenever CI data is written into the CMDB through supported ingestion methods. These include platform features such as Discovery and Service Mapping, Import Sets and Transform Maps that use the CMDBTransformUtil API, and integrations or scripts that explicitly call the IRE APIs. When any of these ingestion paths submit CI data, the IRE automatically runs its identification logic to determine if the CI already exists, and then applies reconciliation rules to decide how incoming attributes should be merged or updated. This process is essential to preventing duplicate CIs and ensuring that attribute updates follow the correct precedence across multiple data sources.\n\nIRE is not triggered when CMDB Health jobs run. CMDB Health only evaluates data quality and compliance metrics, such as completeness, correctness, and compliance, and does not create, modify, or identify CI records. Since these jobs are read-only evaluations, they do not involve the IRE.\n\nIRE is not triggered when users open CI records in the Unified Map. The map provides a visual representation of CIs and their relationships, but it performs no write operations to the CMDB. Since the IRE activates only during data ingestion or updates, viewing CI dependency information does not invoke it.\n\nIRE is not triggered when Data Policies enforce mandatory fields on CMDB tables. Data Policies are designed to enforce field-level requirements and validation rules on forms or data entry operations. They do not participate in CI identification or reconciliation and do not control duplicate prevention or attribute precedence. Their function is limited to validating record fields, not processing or evaluating CI records for uniqueness or updates.",
"r": [
[
"CMDB Identification and Reconciliation (IRE)",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBIdentifyandReconcile.html"
],
[
"CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CMDBHealth.html"
],
[
"Unified Map",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace-unified-map.html"
],
[
"Data Policies",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/field-administration/concept/c_DataPolicy.html"
]
],
"o": [
"When Data Policies enforce mandatory fields on CMDB tables.",
"When Discovery or Import Sets using CMDBTransformUtil run.",
"When users open CI records in the Unified Map.",
"When CMDB Health jobs run."
],
"a": [
1
]
},
{
"n": 138,
"t": "CSDM",
"k": 1,
"q": "A CMDB Administrator works with stakeholders to properly classify Technical Services and Business Services.\n\nWhat is the primary differentiator between these two service types?",
"e": "Technical Services provide technology capabilities; Business Services deliver business value. Technical Services exist in the Manage Technical Services domain and model IT capabilities like databases or middleware that provide infrastructure functions. Business Services exist in Sell/Consume and represent customer-facing value propositions that users actually subscribe to and consume. Understanding this distinction helps stakeholders correctly classify services within the Common Service Data Model (CSDM) model.\n \nIT does not exclusively manage Technical Services while business units manage Business Services. Both service types typically involve IT governance and management within ServiceNow regardless of which domain they reside in. The distinction is about what the services represent conceptually rather than who manages them administratively within the organization. Many organizations have IT teams managing both service types within the configuration management data base (CMDB) regardless of domain placement or organizational boundaries.\n\nDiscovery does not exclusively populate Technical Services while manual entry populates Business Services. Both can be populated through Discovery or manual entry depending on the organization's tools and processes. Service Mapping can discover Technical Services automatically through traffic analysis and agent data, but manual entry is also common for services without clear Discovery signatures. The distinction relates to the service's function and audience, not how the CI record was originally created in the CMDB.\n\nTechnical Services do not contain hardware while Business Services contain software only. Technical Services encompass both hardware and software components in their supporting relationships and infrastructure dependencies. The distinction is about the level of abstraction and business value delivered rather than the physical versus logical nature of child configuration items (CIs) within the service hierarchy. Business Services connect to Technical Services which then connect to underlying infrastructure of any type.",
"r": [
[
"Build & Integration domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/build-domain.html"
],
[
"Common Service Data Model explained",
"https://plat4mation.com/blog/the-common-service-data-model-explained-aligning-it-to-business-strategy/"
],
[
"Service Graph Connector for AWS",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-integration-aws-sg.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
]
],
"o": [
"Technical Services provide technology capabilities; Business Services deliver business value",
"Discovery populates Technical Services; manual entry populates Business Services",
"Technical Services contain hardware; Business Services contain software only",
"IT manages Technical Services; business units manage Business Services"
],
"a": [
0
]
},
{
"n": 139,
"t": "HEA",
"k": 1,
"q": "Which resource helps an administrator understand a low-scoring CMDB Data Foundations metric and determine the corrective work for affected records?",
"e": "The metric's remediation playbook article explains the issue and gives the administrator guidance for bringing affected records into compliance. The dashboard links applicable metrics to knowledge articles in Now Support, where access requires appropriate credentials. These articles supply the context and corrective guidance needed after a low score identifies an area for improvement. The dashboard's percentage, priority, and analytics views help describe or investigate the problem, while the playbook explains the remediation work to consider.\n\nThe metric's Performance Analytics widgets do not provide the playbook's corrective guidance. The widgets support drilling into the affected population, and the associated collection job provides trending data over time. These views help an administrator investigate the size and distribution of a problem and identify records contributing to a low score. That diagnostic information complements the requested guidance. The remediation playbook article supplies the issue context and instructions for addressing the underlying condition.\n\nThe metric's reported compliance percentage does not explain the corrective work for affected records. The Result column reports the percentage of measured items that meet the metric's conditions. Some metrics apply a lower threshold that affects the result displayed, so the number is a summarized assessment rather than a repair procedure. It identifies a low-scoring area, which the administrator has already recognized. The remediation playbook provides the additional issue context and guidance needed to plan corrective work.\n\nThe metric's calculated priority ranking does not provide instructions for repairing affected records. The Priority column ranks metrics using their weight and the severity of their percentage scores. This helps order improvement work when several metrics require attention, but the ranking is not a repair procedure. The administrator uses the remediation playbook article to understand the issue and determine corrective work, then considers the priority when deciding where that work belongs among other improvement activities.",
"r": [
[
"CMDB Data Foundations dashboard",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-foundations-dashboard.html"
],
[
"Monitor health in CSDM and CMDB Data Foundations Dashboards",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/csdm-cmdb-foundations-dashboards.html"
],
[
"CMDB Data Foundation insights dashboard in CMDB Workspace",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/sg-workspace-insights-cmdbgetwell.html"
]
],
"o": [
"The metric's calculated priority ranking",
"The metric's Performance Analytics widgets",
"The metric's reported compliance percentage",
"The metric's remediation playbook article"
],
"a": [
3
]
},
{
"n": 140,
"t": "DM",
"k": "d",
"q": "A CMDB Administrator develops CI retirement procedures to ensure proper decommissioning of assets in the CMDB. The process must align with best practices to maintain data accuracy and compliance. \n\nDrag and drop each retirement step with its purpose in the decommissioning process.\n\nSome options may not apply.",
"e": "Reviewing relationships before retirement prevents orphan dependencies and maintains accurate service impact data for remaining infrastructure. Relationships pointing to retired configuration items (CIs) cause confusion in impact analysis and dependency mapping. Proactive relationship cleanup during retirement planning prevents downstream service modeling inaccuracies. This step ensures remaining CIs have accurate dependency information after decommissioning.\n\nChecking IT Service Management (ITSM) records ensures open incidents, changes, and problems retain CI context for resolution and historical tracking. Active records referencing retiring CIs lose important context if the relationship becomes unclear. Verification ensures in-progress work completes before CI visibility changes affect analysts. This step protects ongoing operational activities from unexpected disruption.\n\nApplying retention periods keeps historical CI data available for audits, regulatory requirements, and trend analysis. Many regulations require demonstrating infrastructure state at specific historical points during compliance reviews. Retained records support compliance evidence and historical reporting needs organizations must satisfy. Premature deletion creates compliance gaps difficult to remediate later.\n\nUpdating status rather than deleting removes the CI from active operational views while preserving the audit trail. Status updates provide cleaner separation between active and inactive infrastructure than permanent deletion. Retired CIs remain queryable for historical analysis but are excluded from operational reports. Organizations purge truly obsolete data later when retention requirements allow.",
"r": [
[
"CMDB CI Lifecycle Management",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-ci-lifecycle-mgmt.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_CIRelationships.html"
],
[
"Change Management",
"https://www.servicenow.com/docs/r/it-service-management/change-management/c_ITILChangeManagement.html"
],
[
"Data archiving",
"https://www.servicenow.com/docs/r/platform-administration/c_ArchiveData.html"
]
],
"o": [
"Prevent orphan dependencies and maintain accurate service impact data",
"Ensure open incidents and changes retain CI context for resolution",
"Keep historical data available for audits and regulatory compliance",
"Remove CI from active views while preserving the audit trail"
],
"c": [
"Apply Retention Period",
"Check ITSM Records",
"Review Relationships",
"Update Status"
],
"a": [
2,
1,
0,
3
]
},
{
"n": 141,
"t": "CLS",
"k": 2,
"q": "A finance team wants to accurately allocate IT infrastructure costs to business departments based on actual usage and service consumption. They need to leverage CMDB data for this analysis.\n\nHow does CMDB support this?",
"e": "Configuration management data base (CMDB) supports cost allocation by using configuration item (CI) ownership and assignment attributes that enable tracking which departments own or consume specific infrastructure components for chargeback purposes. Ownership data provides the foundation for allocating infrastructure costs to consuming business units based on actual resource utilization. The Managed by, Owned by, and Department fields on CI records establish accountability and enable cost reports grouped by organizational unit. Finance teams generate chargeback reports showing infrastructure costs attributed to each department based on these ownership attributes.\n\nCMDB also supports cost allocation because CI relationships to business services allow costs to be traced from infrastructure through to the services consumed by each department. Service relationships enable cost allocation models connecting infrastructure spending to business service consumption patterns. When a database server supports multiple business applications, relationship data enables proportional cost distribution based on service dependencies. This traceability supports activity-based costing models where infrastructure expenses flow through service layers to consuming business functions.\n\nCMDB does not directly track cloud service costs directly from cloud providers. Cloud cost data comes from cloud management platforms and cost management tools that connect to provider billing APIs. CMDB stores configuration information about cloud resources but does not receive real-time cost feeds or store pricing information from cloud vendors. Cost allocation for cloud services requires integration between cloud cost management tools and CMDB to link spending data with CI records for departmental chargeback calculations.\n\nCMDB does not support cost allocation by using location-based cost centers. Location-based cost centers do not provide the granularity needed for accurate IT cost allocation. Physical location indicates where infrastructure resides but does not reflect which departments consume specific services. Multiple departments often share infrastructure within a single location, making location-based allocation inaccurate for chargeback purposes.\n\nCMDB does not provide cost allocation through automated invoice processing from vendors. Invoice processing is handled by accounts payable and financial management applications rather than the CMDB. The CMDB stores configuration and relationship data about infrastructure components but does not process financial transactions or vendor invoices. Integration between financial systems and CMDB links cost data to CIs, but the invoice processing itself occurs in dedicated financial applications.",
"r": [
[
"Working with CMDB Data Manager",
"https://docs.servicenow.com/bundle/xanadu-servicenow-platform/page/product/configuration-management/concept/cmdb-data-management.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
],
[
"IT Financial Management",
"https://www.servicenow.com/docs/bundle/xanadu-it-business-management/page/product/it-finance/concept/c_ITFinance.html"
],
[
"Procurement",
"https://www.servicenow.com/docs/bundle/zurich-it-service-management/page/product/procurement/concept/c_Procurement.html"
]
],
"o": [
"Tracking cloud service costs directly",
"Processing invoices automatically",
"Using location-based cost centers",
"Tracing costs through CI relationships",
"Using CI ownership for chargeback"
],
"a": [
3,
4
]
},
{
"n": 142,
"t": "HEA",
"k": 1,
"q": "A CMDB Administrator needs to verify that all Application CIs have specific attributes populated with values from an approved list, without scripting.\n\nWhich approach does the Administrator use?",
"e": "A CMDB Health compliance audit specifies which configuration item (CI) class to check, which attributes to validate, and what values are considered compliant. Compliance offers two audit types, one using a template to define conditions and one using a script; a template-based compliance audit defines the criteria through configuration without scripting. The Administrator selects the attributes and specifies the valid values, such as the five approved team names for Support Group, inside a certification template referenced by the audit. The results feed into the CMDB Health Compliance KPI for tracking.\n\nBusiness rules fire when records are saved, enforcing rules at data entry time. The scenario needs to check existing Application CIs already in the database. Business rules also require coding, while a compliance audit provides these checks through point-and-click configuration using a template.\n\nData policies work at data entry time, preventing non-compliant data from being saved. They do not scan existing records to find violations. The scenario needs to verify that current Application CIs have proper values, not block future bad entries. A compliance audit evaluates existing records against a template and reports violations for cleanup.\n\nA scheduled report exports data but requires manual review to identify problems. A compliance audit automatically compares attribute values against a certification template and flags violations. The results feed into the CMDB Health Compliance KPI with structured compliance scores rather than raw data exports requiring manual interpretation.",
"r": [
[
"Create a compliance audit",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/t_CreatingAudits.html"
],
[
"CMDB Compliance",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/compliance/concept/c_Compliance.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Classic Business rules",
"https://www.servicenow.com/docs/bundle/xanadu-application-development/page/script/business-rules/concept/c_BusinessRules.html"
],
[
"Data policy",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/field-administration/concept/c_DataPolicy.html"
]
],
"o": [
"Write a business rule to validate on record save events",
"Create a scheduled report with filter conditions",
"Configure a data policy with validation rules",
"Create a compliance audit that defines expected attribute values"
],
"a": [
3
]
},
{
"n": 143,
"t": "CLS",
"k": 1,
"q": "A server CI is set to Retired status after being decommissioned. An Analyst later searches for this server in the CI field on a new Incident form but does not find it.\n\nHow does CI lifecycle status affect visibility in CI reference fields and ITSM processes?",
"e": "By default, CIs with Retired status are filtered out of CI lookup fields to prevent selection of decommissioned items while preserving historical references. This behavior ensures users select active CIs while maintaining audit trails on records created before retirement for compliance purposes. Existing incidents and changes retain their CI references for historical accuracy. Health monitoring and audit capabilities enable proactive data quality management at enterprise scale.\n\nCIs with Retired status are not permanently deleted. Retired CIs remain in the  Configuration Management Database (CMDB) for historical reference, reporting, and compliance audit purposes rather than being removed immediately upon status change. The status change affects visibility in lookup fields rather than triggering deletion. Permanent deletion eliminates valuable audit trails. Organizations need historical CI data to analyze past incidents, understand configuration history, and maintain compliance records. Cleanup policies might eventually archive very old retired CIs but retirement itself does not trigger deletion.\n\nNon-Installed CIs do not appear with warning messages. Retired CIs are filtered from lookup fields by default rather than shown with warnings or requiring approval to select. Warning-based approaches would add unnecessary friction to normal record creation workflows. Filtering provides cleaner user experience while preventing retired CI selection. Default filter conditions exclude retired CIs from lookup field results automatically without requiring warnings or confirmations.\n\nRetired CIs do not remain fully visible in all forms. Default configuration filters retired CIs from lookup fields rather than showing them everywhere. Full visibility would defeat the purpose of retirement by allowing users to associate new records with decommissioned infrastructure inappropriately. Filtering achieves appropriate visibility restriction without removing historical data.",
"r": [
[
"CMDB CI Lifecycle Management",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-ci-lifecycle-mgmt.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Create a CMDB Health staleness rule",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_CreateCMDBHealthStaleRule.html"
],
[
"Access control list rules",
"https://www.servicenow.com/docs/bundle/zurich-platform-security/page/administer/contextual-security/concept/access-control-rules.html"
]
],
"o": [
"Displayed with warning messages",
"Remain fully visible in all forms",
"Permanently deleted within 24 hours",
"Filtered from lookup fields by default"
],
"a": [
3
]
},
{
"n": 144,
"t": "IRE",
"k": 1,
"q": "An administrator reviews duplicate CIs in a CMDB. The Select Main CI tab in the Duplicate CI Remediator wizard displays a Recommended list.\n\nWhat is a system recommendation criterion for that list?",
"e": "The earliest creation date qualifies a configuration item (CI) for the Recommended list in the Duplicate CI Remediator wizard. Oldest created is one of the criteria evaluated on the Select Main CI tab, alongside related items, relationships, recent discovery, recent updates, and a previous main CI selection. The recommendation identifies a candidate for the surviving record; the administrator can still review the duplicate set and select a different main CI from the complete list.\n\nBusiness criticality is not a recommendation criterion for the Duplicate CI Remediator wizard's Recommended list. It is an attribute usable in a Service Mapping query in the configuration management database (CMDB), through CMDB Query Builder, to select the most critical businesses. That query feature finds services matching a pattern of classes and relationships, with attribute filters narrowing results. A high Business criticality value therefore does not by itself qualify a duplicate record for the wizard's list.\n\nPassing CMDB Health audit checks does not qualify a CI for the Duplicate CI Remediator wizard's Recommended list. The checks compare actual field values with expected values in template or scripted audits, and their results feed the Compliance key performance indicator (KPI). Passing establishes compliance with those audit definitions. The wizard instead recommends records using creation, discovery, update, relationship, related-item, and previous-main criteria, so audit compliance and main-record recommendation assess different properties.\n\nA higher-priority discovery source does not establish that a duplicate CI belongs in the wizard's Recommended list. Static reconciliation rules in CI Class Manager authorize discovery sources to update specified attributes and establish precedence when several sources provide values. This priority applies to incoming attribute updates, rather than assigning a global rank to the entire record. The wizard's separate recommendation criteria evaluate properties such as creation dates and relationships when suggesting a surviving main CI.",
"r": [
[
"Remediate a de-duplication task (manual)",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/reconcile-dup-task.html"
],
[
"Build a Service Mapping query using the CMDB Query Builder",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/build-service-mapping-query.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/r_CMDBHealthMetrics.html"
],
[
"Create a CI reconciliation rule",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/create-reconciliation-rule.html"
]
],
"o": [
"The record carries the earliest creation date",
"The record passes its CMDB Health audit checks",
"Its attribute values come from higher-priority sources",
"The record carries the highest business criticality"
],
"a": [
0
]
},
{
"n": 145,
"t": "HEA",
"k": 1,
"q": "An organization enforces specific configuration standards for all production servers, including approved operating system versions and minimum memory requirements. To ensure compliance, the CMDB Administrator must identify servers that do not meet these standards.\n\nWhich approach does the Administrator use to create compliance audits that compare CI attribute values against expected baselines?",
"e": "Compliance audits are created by defining audit definitions that specify expected attribute values, then running them against the target configuration item (CI) class to identify non-compliant records. Configuration Management Database (CMDB) Health compliance audits compare actual CI data against defined baselines and report records that deviate from expected standards. Administrators define expected values such as minimum RAM, approved OS versions, or required field values. Health monitoring and audit capabilities enable proactive data quality management at enterprise scale.\n\nThe Administrator does not just use the dashboard to find discrepancies without configuration. CMDB Health provides built-in audit capabilities that automate baseline comparisons rather than requiring manual analysis. The question asks how to create the audits, not just where to view results. The dashboard displays results from configured audits but does not automatically create compliance audits. Administrators configure template audits that define expected baselines, schedule them to run automatically, and then view results on dashboards.\n\nThe Administrator does not leverage Event Management to generate alerts for deviations. Discovery collects data but compliance audits are separate CMDB Health functions that evaluate data against baselines independent of the discovery process. Discovery captures current system state while compliance audits compare that state against organizational standards. Event Management handles operational alerts from monitoring tools rather than providing compliance evaluation capabilities. Compliance audits systematically compare CI attributes against defined templates to identify policy violations.\n\nThe Administrator does not configure a Management, Instrumentation, and Discovery (MID) Server script to validate server attributes. Reports display data but compliance audits provide automated evaluation against defined criteria rather than relying on visual inspection of raw attribute lists. Manual inspection does not scale to hundreds or thousands of servers. MID Server scripts execute remote commands during Discovery rather than evaluating compliance against templates.",
"r": [
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/overview-cmdb-health.html"
],
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/multisource-cmdb.html"
],
[
"Mid Server",
"https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/doc-type/success/quick-answer/mid-server-basics.pdf"
],
[
"Explore Discovery",
"https://www.servicenow.com/products/discovery.html"
]
],
"o": [
"Use the CMDB Health Dashboard to identify discrepancies",
"Use Event Management to generate alerts for deviations",
"Create audit definitions and run against the target CI class",
"Configure a MID Server script to validate server attributes"
],
"a": [
2
]
},
{
"n": 146,
"t": "M360",
"k": 1,
"q": "Which components does CMDB 360 provide?",
"e": "The core components of Configuration Management Database (CMDB) 360 are: \nSource Cards: Show which discovery sources contributed specific attribute values and their reliability\nLineage: Visualizes relationships and dependencies across configuration items (CIs), showing how data flows between sources\nConflict Resolution: Supports reconciliation rules to manage conflicting attribute values and ensure authoritative data\nCI forms, workflows, notifications, and user roles relate to ServiceNow core platform functionality but are not specific to CMDB 360 components.\n\nClass definitions, inheritance rules, and schema mapping are part of CI Class Manager, not CMDB 360.\n\nPatterns, probes, sensors, and schedules are part of the Discovery tool rather than CMDB 360.",
"r": [
[
"CMDB 360/Multisource CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/multisource-cmdb.html"
],
[
"Configure ServiceNow AI Platform core features",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/general/concept/config-now-platform-core-features.html"
],
[
"CI Class Manager",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/ci-class-manager-landing-page.html"
],
[
"Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/reference/r-discovery.html"
]
],
"o": [
"Class definitions, inheritance rules, and schema mapping",
"Source Cards, Lineage, Conflict Resolution",
"Patterns, probes, sensors, and schedules",
"CI forms, workflows, notifications, and user roles"
],
"a": [
1
]
},
{
"n": 147,
"t": "QB",
"k": 2,
"q": "A network outage causes a critical application to go offline. The Incident Manager opens the dependency view map for the affected application server to identify the source of the disruption and determine which services are at risk.\n\nWhich types of information does the dependency view map provide?",
"e": "The dependency view map displays map indicators next to configuration item (CI) nodes showing related tasks and issues such as incidents, problems, changes, and outages. These indicators appear as visual badges adjacent to each node, allowing the incident manager to see at a glance which CIs have active work items associated with them. In the context of a network outage, these indicators help correlate the disruption with open incidents and pending changes across the dependency chain. Map indicators are a core feature that connects infrastructure topology with operational activity.\n\nThe dependency view map displays relationship lines between connected CIs. Lines drawn between nodes represent configured relationships such as Depends on, Runs on, and Hosted on, showing how CIs are structurally connected across upstream and downstream levels. The incident manager traces these lines from the affected application server through intermediate infrastructure to identify the root cause and determine which business services are at risk. Relationship visualization is the primary purpose of the dependency view map and enables topology-based impact analysis.\n\nThe dependency view map does not display Configuration Management Database (CMDB) Health compliance scores for each CI node. CMDB Health scores measure data quality dimensions such as completeness, correctness, and compliance and are accessed through the CMDB Health Dashboard rather than the dependency view map. The dependency view map focuses on CI relationships and task indicators rather than data governance metrics. Health compliance scoring evaluates whether CI records are well-maintained in the database, which is a separate function from runtime dependency visualization.\n\nThe dependency view map does not display Discovery schedule status for each CI in the map. Discovery schedule information indicates when a CI was last scanned and when the next scan is configured, which is managed through the Discovery Status module. The dependency view map presents CI relationships and associated task indicators rather than metadata about how CIs were originally populated. Discovery scheduling is an ingestion management function that operates independently from dependency visualization.\n\nThe dependency view map does not display service level agreement (SLA) targets for connected services. SLA targets, response times, and compliance metrics are managed through the Service Level Management module and appear on SLA-specific dashboards and reports. The dependency view map visualizes infrastructure topology and related operational tasks rather than contractual performance commitments. Incident managers access SLA information through separate service management interfaces when evaluating compliance against defined targets.",
"r": [
[
"Dependency Views map",
"https://www.servicenow.com/docs/r/servicenow-platform/dependency-views/c_NextGenBSMMaps.html"
],
[
"Unified Map",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace-unified-map.html"
],
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"CI relationships in the CMDB",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_CIRelationships.html"
]
],
"o": [
"Discovery schedule status for each CI in the map",
"CMDB Health compliance scores for each CI node",
"Service level agreement (SLA) targets for connected services",
"Relationship lines between connected CIs",
"Map indicators next to CI nodes"
],
"a": [
3,
4
]
},
{
"n": 148,
"t": "CSDM",
"k": 2,
"q": "An organization is implementing CSDM and has deployed an electronic health records system that clinical staff access. The platform team has created the application record but is unsure where to classify the catalog offering that clinical staff request.\n\nWhich CSDM domains does the platform team use to represent this system?",
"e": "The team uses Service Consumption to classify the service catalog offering that clinical staff request. Internal or external consumers request business services through the request catalogs in this domain. The EHR catalog offering belongs here because it represents the requestable business service from the perspective of clinical consumers. CSDM links business service offerings in Service Consumption to the deployed digital products in Service Delivery to establish the end-to-end service relationship.\n\nThe team uses Service Delivery to classify the deployed electronic health records application. This domain contains deployed instances of digital products and their related discoverable components, plus documentation of the services that provide and support those instances. The operational EHR application that processes patient records is a service instance mapped to this domain. These services are operational, meaning they can be selected for ITSM Incident Management, Problem Management, or Change Management.\n\nThe team does not use Manage Portfolios to classify the catalog offering or the operational application. This domain is a layer on top of the CSDM conceptual model that provides service owners with oversight into services across multiple domains. While a service owner may track the EHR service portfolio here, the catalog offering and operational application records themselves reside in Service Consumption and Service Delivery respectively.\n\nThe team does not use Design & Planning to classify a live catalog offering or an operational application. This domain contains details on the design and planning of digital products, such as business applications and architectural blueprints, prior to deployment. The EHR system in this scenario is already deployed and operational, which places its components in Service Delivery and Service Consumption rather than in the design phase.\n\nThe team does not use Foundation to classify the catalog offering or the operational application. This domain contains base data that is referenced from or to objects in the other CSDM domains, such as companies, locations, departments, users, and groups. While the clinical staff and hospital locations exist as Foundation data, service offerings and application service records reside in their respective operational domains.",
"r": [
[
"CSDM data domains",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/csdm-conceptual-model.html"
],
[
"Service Delivery domain in the CSDM model",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/manage-tech-servs-domain.html"
],
[
"CI relationships in the CSDM",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/csdm-implementation/concept/ci-relationships.html"
],
[
"Service Consumption domain in the CSDM model",
"https://www.servicenow.com/docs/r/servicenow-platform/common-service-data-model-csdm/sell-consume-domain.html"
]
],
"o": [
"Manage Portfolios",
"Design & Planning",
"Service Consumption",
"Service Delivery",
"Foundation"
],
"a": [
2,
3
]
},
{
"n": 149,
"t": "HEA",
"k": 1,
"q": "A new CMDB Administrator needs to review the current CMDB Health score and identify which CI classes have the most data quality issues.\n\nWhat does the Administrator do?",
"e": "The Administrator navigates to the Configuration Management Database (CMDB) Health Dashboard, views the overall score, and then selects key performance indicators (KPIs) to drill down into specific configuration item (CI) classes. The dashboard provides hierarchical navigation from overall score to KPI details to specific metrics and affected CIs. This interactive approach enables administrators to quickly identify problem areas without running separate queries. The drill-down capability connects high-level scores to actionable details about specific CI classes and records.\n\nThe Administrator does not run scheduled reports for this task. While reports supplement dashboard analysis, the primary method for real-time health review and drill-down is through the interactive CMDB Health Dashboard interface. Exported reports provide static snapshots that lack the interactive drill-down capabilities of the dashboard. Administrators needing to investigate specific CI classes benefit from the dashboard's ability to navigate directly from scores to affected records.\n\nThe Administrator does not query CMDB tables directly using Database Views. Direct database queries bypass the dashboard functionality designed for health monitoring and do not provide the drill-down capabilities built into the CMDB Health interface. Database queries require technical SQL knowledge and do not benefit from the precalculated health scores and metrics available through the dashboard.\n\nThe Administrator does not access the Performance Analytics dashboard for this task. Performance Analytics is a separate capability designed for custom metrics. CMDB Health has its own dedicated dashboard for viewing preconfigured health KPIs and metrics with established dimensions like Completeness, Correctness, Compliance, and Relationship Health that require no custom configuration.",
"r": [
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Enable and configure a CMDB Health Dashboard job",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/task/t_EnableCMDBHealthDashboardJob.html"
],
[
"CMDB Health KPIs and metrics",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/r_CMDBHealthMetrics.html"
],
[
"System dictionary",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/data-dictionary-tables/concept/c_SystemDictionary.html"
],
[
"Available system properties",
"https://www.servicenow.com/docs/bundle/zurich-platform-administration/page/administer/reference-pages/reference/r_AvailableSystemProperties.html"
]
],
"o": [
"Query CMDB tables using Database Views",
"Run scheduled reports for offline analysis",
"Access the Performance Analytics dashboard",
"Navigate to the CMDB Health Dashboard and drill down"
],
"a": [
3
]
},
{
"n": 150,
"t": "DM",
"k": 1,
"q": "An organization clears obsolete configuration items out of active configuration management database (CMDB) tables at year end, and an audit requirement keeps those records recoverable for a retention period.\n\nWhich CMDB Data Manager policy satisfies both conditions?",
"e": "An Archive policy on the obsolete records moves them out of their current tables into archive tables held for a retention period. The active tables clear, the records drop out of active views and features such as maps and the relations formatter, and administrators retain the ability to restore them. That pairing of removal with recoverability is what separates archiving from retiring and from deletion, and it satisfies both the year-end goal and the audit requirement.\n\nA Retire policy on the obsolete records sets the retired state defined for the class and leaves the records where they sit. Retired configuration items in the configuration management database (CMDB) stay visible in list views and continue to be counted by processes such as CMDB Health, so the active tables never clear. Retirement marks a lifecycle position on a record rather than relocating the data, which leaves the year-end objective unmet.\n\nA Delete policy on the obsolete records removes them from their tables, and CMDB Data Manager provides no action that returns a deleted configuration item to an active state. Deletion satisfies the goal of clearing the active tables and forfeits the recoverability that the audit requires, which leaves half the requirement unmet. An organization chooses deletion where its lifecycle process treats the disposition as final rather than as temporary retention with a defined window.\n\nA Certification policy on the obsolete records creates a review process in which assigned people validate selected attribute values on targeted records. Data Certification maintains the accuracy of information held on records that remain in service, generating tasks for reviewers rather than moving any data. Certification addresses the quality of live records instead of the disposition of obsolete ones, so it neither relocates data nor establishes the retention period the audit requires.",
"r": [
[
"Working with CMDB Data Manager",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/cmdb-data-management.html"
],
[
"Create a CMDB Data Manager policy",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/data-manager-create-policy-wrkspc.html"
],
[
"Data Certification",
"https://www.servicenow.com/docs/r/servicenow-platform/configuration-management-database-cmdb/c_DataCertification.html"
]
],
"o": [
"A Retire policy on the obsolete records",
"A Certification policy on the obsolete records",
"A Delete policy on the obsolete records",
"An Archive policy on the obsolete records"
],
"a": [
3
]
},
{
"n": 151,
"t": "IRE",
"k": 1,
"q": "After importing server data from a new monitoring tool, a CMDB Administrator discovers duplicate server CIs. The new source formats key server information differently than existing records.\n\nWhy were duplicates created?",
"e": "Duplicates were created because the identification rules did not match incoming data to existing configuration items (CIs) when key identifier values from the monitoring tool differed in format from existing records. When identifying values differ between sources, the Identification and Reconciliation Engine (IRE) does not recognize a match and creates new CIs instead of updating existing ones. For example, if identification rules rely on hostname and the monitoring tool formats hostnames differently than the existing data, IRE treats the incoming records as separate assets and generates duplicates.\n\nDuplicates were not created due to reconciliation priority configuration. Reconciliation priority determines which data source is authoritative after identification successfully matches a CI. Reconciliation does not control whether a new CI is created; it only governs attribute updates once a match exists. In this scenario, identification failed before reconciliation occurred. This distinction is critical because reconciliation settings influence data authority, whereas identification rules determine record matching and prevent duplicate creation.\n\nDuplicates were not created due to disabled duplicate detection. Duplicates result from identification rule matching failures, not disabled detection features. The platform relies on IRE identification rules rather than a separate duplicate detection mechanism. Identification and Reconciliation Engine rules determine whether incoming data matches existing CIs or creates new records. When identification rules fail to match incoming data to existing CIs, duplicates are created.\n\nDuplicates were not created due to import into a separate class. Data source priority affects attribute value selection during reconciliation, not whether new CIs are created. The scenario describes servers appearing as duplicates within the same class, not data being routed to different classes. Data source priority determines which source provides attribute values when reconciliation identifies matches, not whether CIs are created as duplicates. The duplicate servers indicate identification rule failures rather than class mapping issues. Proper identification rules prevent duplicates by correctly matching incoming data to existing CIs.",
"r": [
[
"Duplicate CIs remediation",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/de-duplication-tasks.html"
],
[
"Identification rules",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/c_IdentificationRules.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
],
[
"Configuration Item [cmdb_ci] class",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/reference/cmdb-table-property-descriptions.html"
],
[
"Identification and Reconciliation Fundamentals",
"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB1064718"
]
],
"o": [
"Monitoring tool data was imported into a separate CMDB class.",
"Identification rules did not match due to differing identifier attribute values.",
"The duplicate detection feature was disabled during the import process.",
"The import source was configured to update existing records during reconciliation."
],
"a": [
1
]
},
{
"n": 152,
"t": "CLS",
"k": 1,
"q": "A CMDB Administrator wants to understand the main navigation areas of CMDB Workspace.\n\nWhich set of views does CMDB Workspace provide for managing and exploring CI data?",
"e": "Configuration Management Database (CMDB) Workspace provides Home, CMDB 360, Management, and Unified Map as its main navigation views. Home provides search and configuration item (CI) overview with Natural Language Query (NLQ) capability. CMDB 360 shows CI history and discovery source tracking for attribute updates over time. Management View identifies duplicates and logs recent CMDB changes. Unified Map visualizes CI relationships and infrastructure dependencies. These views support core administrative tasks from searching to relationship analysis.\n\nDiscovery Status, Integration Hub, and Reconciliation are not the main views in CMDB Workspace. Discovery and integration monitoring have dedicated interfaces elsewhere in the platform. CMDB Workspace organizes navigation around CI exploration, health monitoring, and relationship visualization rather than data collection monitoring. Administrators access discovery status through Discovery application modules, not CMDB Workspace views.\n\nExecutive Dashboard, Technical View, and Audit Log are not standard views in CMDB Workspace. The workspace organizes views by workflow function rather than by audience type. CMDB Health dashboards exist within the workspace but are not called Executive Dashboard. Audit capabilities are embedded within CMDB 360 for tracking CI changes rather than as a separate Audit Log view.\n\nImport Sets, Export Definitions, and Archive Manager are not views in CMDB Workspace. Data import and export are handled through separate platform interfaces. Import Sets have their own module for data loading, and Service Graph Connectors handle external integrations.",
"r": [
[
"CMDB Workspace store app",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-workspace.html"
],
[
"CMDB Query Builder",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/cmdb-query-builder-landing-page.html"
],
[
"Exploring Discovery",
"https://www.servicenow.com/docs/bundle/zurich-it-operations-management/page/product/discovery/concept/c_GetStartedWithDiscovery.html"
],
[
"Overview of CMDB Health",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/overview-cmdb-health.html"
],
[
"Applying IRE to Import Sets",
"https://www.servicenow.com/docs/bundle/zurich-servicenow-platform/page/product/configuration-management/concept/identification-import-sets.html"
]
],
"o": [
"Discovery Status, Integration Hub, and Reconciliation",
"Home, CMDB 360, Management, and Unified Map",
"Import Sets, Export Definitions, and Archive Manager",
"Executive Dashboard, Technical View, and Audit Log"
],
"a": [
1
]
}
];
