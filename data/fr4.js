function F(n, q, v, w, m) { window.FR[n] = { q: q, v: v, w: w, m: m }; }

F(111, "Quelle table stocke les valeurs brutes d'attributs collectées de chaque origine dans CMDB 360 ?",
 [["cmdb_multisource_data", "Table des données multisources."]],
 "Réponse D. Les autres tables concernent last update, health ou import.",
 "Brut par origine = multisource_data.");

F(112, "Un hôpital doit suivre les serveurs traitant des données de santé (HIPAA). Comment configurer la CMDB ?",
 [["Compliance attributes", "Attributs de conformité."]],
 "Réponse C : ajouter des attributs de conformité aux classes. Instances séparées, GRC seul ou tagging via Discovery ne conviennent pas.",
 "Besoin spécifique = attribut dédié.");

F(113, "Chaque serveur doit avoir une relation vers son hôte physique et être dans le même datacenter. Quelle fonctionnalité valide cela ?",
 [["Scripted audit", "Audit par script pour logique complexe."]],
 "Réponse A : un audit scripté permet cette règle croisée. Template audit est limité à des conditions simples, les autres règles ne valident pas la conformité.",
 "Règle complexe = audit scripté.");

F(114, "Le propriétaire de chaque CI doit confirmer tous les 90 jours que l'équipement ou l'application existe toujours. Quelle politique ?",
 [["Attestation", "Confirme l'existence du CI."]],
 "Réponse B : Attestation. La Certification vérifie des valeurs d'attributs, Retire et Archive traitent la fin de vie.",
 "Existence → Attestation.");

F(115, "Documenter qu'une application web a besoin d'un serveur de base de données : quelle relation ?",
 [["Depends on::Used by", "Dépendance fonctionnelle."]],
 "Réponse C. Contains, Runs on et Hosted on décrivent d'autres types de liens.",
 "Dépendance fonctionnelle = Depends on.");

F(116, "Associer chaque composant du score CMDB Health à ce qu'il représente.",
 [["Completeness", "Champs obligatoires renseignés."], ["Compliance", "Résultats des audits."], ["Correctness", "Staleness, orphelins, doublons."], ["Relationship Health", "Intégrité des dépendances."]],
 "1) Champs renseignés → Completeness. 2) Audits → Compliance. 3) Détection d'anomalies → Correctness. 4) Dépendances → Relationship Health.",
 "Complétude, Conformité, Correction, Relations.");

F(117, "Un tag de conformité posé chez le fournisseur cloud est détecté. Où la plateforme le stocke-t-elle ?",
 [["Key Value records", "Enregistrements clé-valeur associés au CI."]],
 "Réponse A : les tags sont stockés en enregistrements Key Value. Pas de colonne Tags sur le CI ni d'information object.",
 "Tag cloud = clé-valeur.");

F(118, "ManualEntry prend la priorité sur Discovery pour Environment, puis plus rien ne l'a mis à jour pendant 30 jours. Quelles règles contrôlent ce comportement ?",
 [["Static reconciliation rules", "Priorités fixes."], ["Data refresh rules", "Expiration de la priorité après un délai."]],
 "Réponses A + C. Les règles dynamiques, de data source ou d'identification ne régissent pas ce délai.",
 "Priorité + expiration.");

F(119, "Comment les relations CSDM aident-elles à évaluer l'impact métier d'une panne de serveur ?",
 [["Relationship chain", "Chaîne CI → Technical Service → Business Service."]],
 "Réponse C. Les autres options invoquent de la prédiction, génération de tickets ou agents.",
 "Impact = suivre la chaîne.");

F(120, "Retirer systématiquement des serveurs obsolètes (90 jours) en conservant les données. Que configurer ?",
 [["Retire + Archive", "Retrait puis archivage."], ["Retirement definition", "Seuil de péremption."]],
 "Réponses D + E : une politique Retire et Archive, avec une définition de retrait fixant le seuil. Delete détruit, les staleness rules ne retirent pas, l'attestation notifie seulement.",
 "Retire puis Archive.");

F(121, "Failles de sécurité sur une version logicielle : comment la CMDB aide-t-elle ?",
 [["Software inventory", "Inventaire logiciel lié aux serveurs."]],
 "Réponse C : liens logiciel–serveur. La CMDB ne stocke pas les scans ni ne détecte les vulnérabilités.",
 "CMDB relie, ne scanne pas.");

F(122, "Quels éléments CSDM renforcent la gestion de portefeuille de services et de technologie ?",
 [["Business Service structures", "Structures de services métier."], ["Technical Service relationships", "Relations des services techniques."]],
 "Réponses C + D. Pas de remplacement d'outils ni TCO automatique ni modèles indépendants.",
 "Structure + relations.");

F(123, "La métrique Stale affiche 15 %. Comment voir les CI concernés ?",
 [["Drill-down", "Clic sur la métrique."]],
 "Réponse D : cliquer sur la métrique pour voir la liste. Exports ou filtres manuels sont inutiles.",
 "Cliquer pour descendre au détail.");

F(124, "Mise à jour du firmware d'un routeur central : comment Change Management utilise-t-il la CMDB ?",
 [["CI relationships", "Relations pour voir services affectés."]],
 "Réponse C. Matrices fournisseur, approbation automatique ou planification ne relèvent pas de la CMDB.",
 "Change = impact via relations.");

F(125, "Comment relier un asset alm_hardware et son CI cmdb_ci_computer ?",
 [["Reference field", "Champ de référence sur l'asset vers le CI."]],
 "Réponse C. Pas d'extension de table partagée ni de table de liaison.",
 "Asset → CI par référence.");

F(126, "Prévenir les doublons et fusionner correctement les CI de plusieurs sources : quel mécanisme ?",
 [["IRE", "Identification and Reconciliation Engine."]],
 "Réponse C. Data Management policies, Health et Class Manager n'ont pas cette fonction.",
 "Matcher + fusionner = IRE.");

F(127, "Les imprimantes n'apparaissent pas dans le lookup CI d'Incident. Pourquoi ?",
 [["Principal class", "Seuls les CI des classes principales sont proposés."]],
 "Réponse C : seules les classes principales apparaissent. Les autres propositions inventent des effets.",
 "Pas principal = pas dans le lookup.");

F(128, "Fondations et tables ITSM peuplées. La phase suivante identifie les CI réseau et les applications. Quelle étape ?",
 [["Walk", "Deuxième étape."]],
 "Réponse A : Walk. Crawl est déjà fait, Run et Fly sont après.",
 "Crawl → Walk → Run → Fly.");

F(129, "Noms de serveurs incohérents (WEBSRV01, web-server-1...). Quel bénéfice d'une convention de nommage ?",
 [["Naming convention", "Règle de nommage."]],
 "Réponse A : recherche fiable, rapports exacts. Performance, stockage et intégrations ne sont pas le but premier.",
 "Cohérence = recherche fiable.");

F(130, "Dans quelle table ajouter un nouvel attribut pour que cmdb_ci_pc_hardware ET cmdb_ci_server en héritent tous les deux ?",
 [["Héritage", "Une classe enfant reçoit tous les attributs de ses parents."], ["Ancêtre commun le plus bas", "Le plus proche parent commun aux deux classes."]],
 "Réponse C : cmdb_ci_computer est le parent direct de cmdb_ci_pc_hardware et de cmdb_ci_server (ancêtre commun le plus bas). cmdb_ci_hardware et cmdb_ci propageraient l'attribut à beaucoup trop de classes ; cmdb_ci_pc_hardware ne le donne pas à Server.",
 "Attribut partagé = ancêtre commun le plus bas.");

F(131, "Un outil de découverte a soumis des données erronées. Comment éliminer ses contributions historiques ?",
 [["Revert / recompute", "Retour arrière et recalcul."]],
 "Réponses A + C : annuler l'intégration de la source puis recalculer les valeurs sans elle. Comparer ou exclure des classes ne supprime pas les contributions.",
 "Retirer la source puis recalculer.");

F(132, "Associer chaque mécanisme de synchro Asset-CI à son usage.",
 [["Field Mapping", "Alignement d'attributs."], ["Business Rules", "Mise à jour du statut."], ["Transform Maps", "Import avec coalesce."], ["Reconciliation Rules", "Conflits entre sources."]],
 "1) Sync asset tag → Field Mapping. 2) Hardware Status selon Asset State → Business Rules. 3) Import avec coalesce → Transform Maps. 4) Conflits → Reconciliation Rules.",
 "Mapping, Rules, Transform, Reconciliation.");

F(133, "Cibler uniquement les serveurs en état Stale dans une politique Data Manager. Comment ?",
 [["Condition filters", "Filtres de la politique."]],
 "Réponse A : définir des filtres de classe et d'état de santé sur la politique. Staleness rules, exclusion ou life cycle rule ne limitent pas ainsi.",
 "Cible = filtre de la politique.");

F(134, "Donner plus de poids à Completeness qu'à Compliance : quelles étapes ?",
 [["Health Metric Preferences", "Contribution des KPI."], ["Legacy calculation", "Méthode de calcul historique."]],
 "Réponses C + D. Planification, conditions des règles d'inclusion ou vue de groupe ne règlent pas le poids.",
 "Poids = préférences + méthode.");

F(135, "Mettre à jour la CMDB à la création d'une VM VMware avec Flow Designer et connexions réutilisables.",
 [["Integration Hub", "Spokes et connexions réutilisables."]],
 "Réponse C. Scripted REST, Discovery planifié et MID ne fournissent pas ces composants.",
 "Flow Designer + connexions = Integration Hub.");

F(136, "Associer chaque source à la méthode d'ingestion.",
 [["Discovery", "Serveurs on-premise."], ["Agent Client Collector", "Portables distants."], ["Service Graph Connector", "Salesforce (SaaS)."]],
 "1) Serveurs Windows → Discovery. 2) Portables → Agent Client Collector. 3) Salesforce → Service Graph Connector.",
 "Réseau interne, poste distant, SaaS.");

F(137, "Quel événement déclenche l'IRE ?",
 [["CMDBTransformUtil", "Appel à l'IRE lors d'imports."]],
 "Réponse B : Discovery ou import sets via CMDBTransformUtil. Politiques, Unified Map ou jobs Health ne déclenchent pas l'IRE.",
 "IRE s'exécute à l'entrée des données.");

F(138, "Différence principale entre Technical Service et Business Service ?",
 [["Technical Service", "Capacité technologique."], ["Business Service", "Valeur délivrée au métier."]],
 "Réponse A. Les autres critères (source de peuplement, contenu, propriétaire) ne sont pas le différenciateur.",
 "Technique = capacité ; Métier = valeur.");

F(139, "Quelle ressource explique une métrique Data Foundations faible et guide la remédiation ?",
 [["Remediation playbook article", "Article de remédiation."]],
 "Réponse D. Rang, widgets PA ou pourcentage ne guident pas.",
 "Métrique faible → article de remédiation.");

F(140, "Associer chaque étape de retrait de CI à son objectif.",
 [["Review Relationships", "Éviter les orphelins."], ["Check ITSM Records", "Garder le contexte des tickets ouverts."], ["Apply Retention Period", "Conserver pour audit."], ["Update Status", "Retirer des vues actives."]],
 "1) Dépendances → Review Relationships. 2) Tickets → Check ITSM Records. 3) Historique → Apply Retention Period. 4) Piste d'audit → Update Status.",
 "Relations, ITSM, Rétention, Statut.");

F(141, "Comment la CMDB aide-t-elle à répartir les coûts IT par département ?",
 [["CI relationships", "Chaînes pour tracer les coûts."], ["CI ownership", "Propriété pour la refacturation."]],
 "Réponses D + E. Les coûts cloud, factures ou centres de coûts par lieu ne sont pas des fonctions CMDB.",
 "Relations + propriété.");

F(142, "Vérifier que les CI Application ont des attributs aux valeurs d'une liste approuvée, sans script.",
 [["Compliance audit", "Audit de valeurs attendues."]],
 "Réponse D. Business rule est du code, rapport planifié ne valide pas, data policy ne vérifie pas rétroactivement.",
 "Sans script = audit de conformité.");

F(143, "Un serveur retiré n'apparaît plus dans le champ CI d'un Incident. Pourquoi ?",
 [["Lifecycle status", "Statut du CI."]],
 "Réponse D : filtré par défaut. Il n'est ni supprimé ni toujours visible.",
 "Retiré = masqué par défaut.");

F(144, "Critère de la liste recommandée dans Select Main CI ?",
 [["Recommended", "Suggestion du système."]],
 "Réponse A : date de création la plus ancienne. Santé, source ou criticité ne sont pas retenues.",
 "Le plus ancien est recommandé.");

F(145, "Faire respecter des standards de configuration serveur (OS, mémoire) : comment identifier les non-conformes ?",
 [["Audit definition", "Définition d'audit."]],
 "Réponse C : créer des audits sur la classe cible. Health Dashboard, Event Management ou scripts MID ne vérifient pas ce standard.",
 "Standard à vérifier = audit.");

F(146, "Quels composants fournit CMDB 360 ?",
 [["Source Cards, Lineage, Conflict Resolution", "Composants multisources."]],
 "Réponse B. Les autres listes concernent classes, Discovery ou ITSM.",
 "360 = sources, lignée, conflits.");

F(147, "Dans la vue carte de dépendances, quels éléments aident à localiser la panne et les services menacés ?",
 [["Relationship lines", "Lignes de relation."], ["Map indicators", "Indicateurs sur les nœuds."]],
 "Réponses D + E. Statut Discovery, scores et SLA ne sont pas affichés sur la carte.",
 "Lignes + indicateurs.");

F(148, "Où classer l'offre de catalogue d'un système de dossiers médicaux dont l'application existe déjà ?",
 [["Service Consumption", "Offres consommées."], ["Service Delivery", "Service déployé."]],
 "Réponses C + D. Les domaines Design, Foundation ou Portfolios ne sont pas ciblés ici.",
 "Offre = consommation + livraison.");

F(149, "Voir le score Health et les classes à problème : que faire ?",
 [["CMDB Health Dashboard", "Tableau de bord Health."]],
 "Réponse D : naviguer vers le dashboard et approfondir. Les autres chemins sont indirects.",
 "Health → Dashboard → drill-down.");

F(150, "Fin d'année : retirer les CI obsolètes des tables actives, mais les garder récupérables selon une durée de rétention. Quelle politique ?",
 [["Archive", "Déplace hors des tables actives en conservant."]],
 "Réponse D. Retire laisse en place, Delete détruit, Certification valide.",
 "Récupérable + hors tables = Archive.");

F(151, "Après import d'un nouvel outil, des doublons apparaissent car le format des clés diffère. Pourquoi ?",
 [["Identifier values", "Valeurs d'identifiants."]],
 "Réponse B : les règles n'ont pas matché à cause de valeurs différentes. L'import dans une autre classe, la détection désactivée ou la mise à jour configurée ne l'expliquent pas.",
 "Format différent = pas de match.");

F(152, "Quelles vues principales offre CMDB Workspace ?",
 [["Home, CMDB 360, Management, Unified Map", "Vues principales."]],
 "Réponse B. Les autres combinaisons mélangent d'autres modules.",
 "Quatre vues : Home, 360, Management, Map.");
