function F(n, q, v, w, m) { window.FR[n] = { q: q, v: v, w: w, m: m }; }

F(67, "Deux sources à intégrer : un SIRH cloud mis à jour en temps réel et un tableur trimestriel de 200 sites. Quelles méthodes d'ingestion conviennent ?",
 [["Service Graph Connector", "Intégration certifiée, adaptée aux flux continus."], ["Import set + transform map", "Chargement de fichiers (CSV/Excel) avec mapping."]],
 "Réponses A + C : le connecteur pour le flux temps réel, l'import set pour le tableur occasionnel. B (agent sur postes), D (accès direct base) et E (Discovery horizontal) ne répondent pas à ces sources.",
 "Flux continu → connecteur ; fichier ponctuel → import set.");

F(68, "Dans quelle table CSDM étiqueter une exigence réglementaire SOX pour les opérations critiques ?",
 [["Business Service", "Service vu par le métier (cmdb_ci_service_business)."]],
 "Réponse B : la conformité réglementaire se tague sur le Business Service. Information Object, Technical Service et Application Service sont à un autre niveau.",
 "Réglementaire → Business Service.");

F(69, "Imports XML/CSV mêlant CI nouveaux et existants avec valeurs en conflit : créer les nouveaux, mettre à jour les existants et résoudre les conflits. Quel élément ?",
 [["CMDBTransformUtil", "API qui appelle l'IRE pendant un import."]],
 "Réponse A : CMDBTransformUtil applique identification et réconciliation. Import Set API, ServiceCatalog API et patterns Discovery ne gèrent pas cette logique.",
 "Import + IRE → CMDBTransformUtil.");

F(70, "Comment CMDB Workspace donne-t-il accès au CMDB Health Dashboard et aux outils de remédiation ?",
 [["CMDB Workspace", "Interface unifiée."]],
 "Réponse B : le Health Dashboard est intégré dans le Workspace. Les autres options (portail, Service Mapping uniquement, PA) sont fausses.",
 "Tout intégré dans le Workspace.");

F(71, "Identifier les composants d'infrastructure qui hébergent une application, sur deux niveaux. Quelle configuration Query Builder ?",
 [["Runs on", "Relation « s'exécute sur » (application → hôte)."], ["Downstream", "Direction vers le support technique."]],
 "Réponse A : relation « Runs on », direction downstream, 2 niveaux. B est upstream (mauvais sens), C filtre une classe sans le bon chemin, D est une requête directe sur la table des relations, non recommandée.",
 "Application → hôtes = Runs on, downstream.");

F(72, "Ajouter des attributs de contrat fournisseur à la classe Server en préservant la compatibilité aux upgrades.",
 [["Child class", "Classe enfant qui étend une classe existante."], ["u_ fields", "Champs personnalisés préfixés."]],
 "Réponses A + E : une classe enfant ou des champs u_ ne modifient pas la base. B (externe) ne résout pas le besoin, C et D modifient ou remplacent l'OOB.",
 "On étend, on ne modifie jamais l'OOB.");

F(73, "Les équipes applicatives ne savent pas quelle infrastructure supporte leurs applications. Les CI serveur/réseau sont bien peuplés. Que créer ?",
 [["Business service models", "Modèles qui relient services métier et infrastructure."]],
 "Réponse D : le manque est la modélisation des services. Plus de scans, audits Health ou listes filtrées ne créent pas ces liens.",
 "Pour relier le métier aux CI : modèle de service.");

F(74, "Pendant une panne, voir quels CI, services ou applications sont touchés par la défaillance d'un CI précis. Quelles fonctionnalités ?",
 [["Dependency View Map", "Carte des dépendances d'un CI."], ["Unified Map", "Carte unifiée des relations."]],
 "Réponses C + D. A mesure la qualité, B regroupe des CI sans montrer l'impact.",
 "Impact en incident = cartes de dépendances.");

F(75, "Trouver les serveurs physiques qui hébergent des VM exécutant des applications du service RH. Comment dans Query Builder ?",
 [["Relationship path", "Chemin de relation à plusieurs nœuds."]],
 "Réponse B : ajouter des nœuds de chemin de relation pour chaque saut. SQL direct, requêtes séparées ou script sont inutilement complexes.",
 "Un saut = un nœud dans Query Builder.");

F(76, "Pour une règle Orphan dans CI Class Manager, quel aspect de chaque CI est évalué ?",
 [["Orphan CI", "CI sans relation attendue."]],
 "Réponse C : les relations. L'extensibilité, les identifiants ou le flag principal ne définissent pas un orphelin.",
 "Orphelin = sans relations.");

F(77, "Passer l'asset « In Use » à « Retired » : quel champ du CI est mis à jour ?",
 [["Hardware Status", "Champ de statut matériel synchronisé avec l'asset."]],
 "Réponse D : Hardware Status. Operational Status, Install Status et Discovery Source ne reflètent pas l'état de l'asset dans cette synchronisation.",
 "Asset State ↔ Hardware Status.");

F(78, "Comment travailler avec les propriétaires d'applications qui ne connaissent pas CSDM pour représenter les Business Applications ?",
 [["Business Application", "Groupement logique d'une application métier."]],
 "Réponse B : leur expliquer les Business Applications avec leur propre terminologie. Exiger une certification, partir des hostnames ou donner un accès base sont inadaptés.",
 "Parler la langue du métier.");

F(79, "CMDB 360 met trop de temps à traiter. Quelle table réduit les classes traitées ?",
 [["cmdb_multisource_deny_class", "Liste des classes exclues du traitement multisource."]],
 "Réponse D : deny_class exclut des classes. Les autres tables stockent des données ou requêtes, ou n'existent pas dans ce rôle.",
 "Deny class = exclure pour accélérer.");

F(80, "Comment la gestion des incidents utilise-t-elle la CMDB ?",
 [["Impact analysis", "Via les relations entre CI."]],
 "Réponse A : lier incidents et CI via relations. Résolution automatique, blocage de création ou spécifications de réparation ne sont pas des fonctions CMDB.",
 "Incident + CMDB = liens CI.");

F(81, "Éviter la dégradation de la qualité des données avec un processus de revue durable et responsable. Que mettre en place ?",
 [["Attestation workflow", "Tâches de revue périodiques assignées."]],
 "Réponse B : attestations planifiées avec tâches assignées. A (suppression aveugle), C (exports DBA) et D (tableur) ne créent pas de responsabilité durable.",
 "Revue planifiée + responsable = attestation.");

F(82, "Quel domaine CSDM contient les serveurs, bases et cartes de dépendances derrière un système de paie déployé ?",
 [["Service Delivery", "Domaine des services déployés et de l'infrastructure."]],
 "Réponse D : Service Delivery. Design, Consumption et Build concernent autre chose.",
 "Déployé et en production = Service Delivery.");

F(83, "La branche Server doit avoir des valeurs de « retired » différentes de Hardware, sans changer le reste. Quelle modification ?",
 [["Retirement definition", "Définit les valeurs qui identifient un CI retiré."]],
 "Réponse A : activer une définition de retrait propre à Server. Les autres options (filtre, revue, exclusion) ne changent pas les valeurs.",
 "Valeurs spécifiques = retirement definition.");

F(84, "Planifier la gouvernance de la classe Server : comment déterminer les sources de peuplement des attributs ?",
 [["Discovery patterns", "Définissent ce qui est collecté et où."]],
 "Réponse A : analyser les patterns montre quels attributs sont peuplés. Lancer Discovery, rapports Health ou requête sys_dictionary ne répondent pas directement.",
 "Qui remplit quoi ? Lire les patterns.");

F(85, "Traiter automatiquement des CI non mis à jour depuis 180 jours, qui restent visibles en liste et dans les calculs Health. Quelle politique ?",
 [["Retire policy", "Change le statut du CI sans le supprimer."]],
 "Réponse D : Retire garde le CI visible. Archive et Delete retirent les données, Certification et Attestation valident.",
 "Retire = visible ; Archive = hors tables actives.");

F(86, "Propriétaire métier et groupe de support souvent périmés, non peuplés par Discovery. Quel processus ?",
 [["Data Certification", "Campagnes de revue périodique par propriétaires."]],
 "Réponse B : campagnes de certification. Désactiver les champs, interroger AD ou des transform maps ne maintiennent pas ces attributs.",
 "Champs non découvrables → certification.");

F(87, "À quoi sert le CMDB Data Foundation Dashboard ?",
 [["Executive view", "Vue agrégée pour décideurs."]],
 "Réponse B : vue exécutive des métriques de qualité agrégées. Logs d'audit, résultats Discovery ou remplacement du Health Dashboard sont faux.",
 "Foundation = vue exécutive.");

F(88, "Dans quel onglet marquer une classe comme principale ?",
 [["Basic Info", "Onglet des propriétés générales de la classe."]],
 "Réponse B : Basic Info. Attributes, Completeness et Correctness sont d'autres onglets.",
 "Principal class → Basic Info.");

F(89, "Comment une CMDB bien tenue accélère-t-elle la résolution des incidents ?",
 [["Relationships", "Dépendances visibles immédiatement."]],
 "Réponse A : vue immédiate des relations d'infrastructure. Les autres options décrivent de l'automatisation hors périmètre.",
 "CMDB = contexte instantané.");

F(90, "Dans CI Class Manager, quelle table choisir comme parent d'une nouvelle classe ?",
 [["Most specific table", "Parent le plus précis qui convient."]],
 "Réponse B : la table la plus spécifique applicable. Utiliser cmdb_ci directement perdrait les attributs hérités.",
 "Parent le plus précis possible.");

F(91, "Enregistrer une désignation réglementaire sur des données logiques et la tracer jusqu'aux logiciels qui les consomment.",
 [["Information Object", "Objet CSDM représentant les données logiques."], ["Data classification", "Champ de classification."]],
 "Réponses C + D : choisir la classification et créer une relation Uses depuis la Business Application. Owner, département ou groupe ne servent pas la traçabilité.",
 "Classifier + relier à l'application.");

F(92, "Associer chaque processus ITSM à son usage de la CMDB pendant une migration de datacenter.",
 [["Change Management", "Notifier avant décommissionnement."], ["Incident Management", "Prioriser la restauration."], ["Problem Management", "Relier des pannes à une cause commune."], ["Service Level Management", "Identifier les SLA à risque."]],
 "1) Notifier avant décommissionnement → Change. 2) Priorité en cas de panne → Incident. 3) Liens vers un switch commun → Problem. 4) SLA à risque → Service Level. IT Asset Management est le distracteur.",
 "Change, Incident, Problem, SLA.");

F(93, "Quelle propriété système activer pour que CMDB 360 stocke des valeurs d'attribut de plusieurs origines ?",
 [["multisource_enabled", "Propriété d'activation du multisource."]],
 "Réponse D : glide.identification_engine.multisource_enabled. Les autres sont des propriétés de logs ou d'identification.",
 "Multisource = multisource_enabled.");

F(94, "Après une migration, de nombreux CI n'existent plus. Comment la gouvernance garde la CMDB alignée ?",
 [["Discovery schedules", "Planifications de découverte."]],
 "Réponse D : établir des planifications Discovery qui reflètent l'état réel. Sauvegardes, restriction de création et archivage historique ne rafraîchissent pas.",
 "Réalité à jour = découverte régulière.");

F(95, "Quels deux types de questions NLQ gère-t-il ?",
 [["CI relationship", "Dépendances."], ["CI count", "Inventaire."]],
 "Réponses A + B. L'activité utilisateur, le prédictif et les métriques temps réel ne sont pas pris en charge.",
 "Relations et inventaire.");

F(96, "Server est la seule classe disponible sur les formulaires, mais des classes enfants sont utilisées aussi. Que faire ?",
 [["Principal class filter", "Liste des classes proposées dans les lookups."]],
 "Réponse B : ajouter chaque classe enfant au filtre. Règles d'identification, health ou relations n'y contribuent pas.",
 "Enfants non héritent automatiquement : à ajouter.");

F(97, "Charger 50 000 assets depuis un CSV dont les colonnes diffèrent des champs CMDB. Quelle fonctionnalité aligne les colonnes ?",
 [["Transform map", "Mapping colonnes source → champs cible."]],
 "Réponse B : transform maps. Les autres règles (identification, coalesce, réconciliation) ne font pas l'alignement.",
 "Colonnes → champs = transform map.");

F(98, "Quels éléments de CMDB Health déterminent qu'un CI est obsolète ?",
 [["Staleness rules", "Règles de détection."], ["Effective Duration", "Durée au-delà de laquelle un CI est jugé obsolète."]],
 "Réponses B + C. Discovery, hiérarchie et réconciliation ne définissent pas l'obsolescence.",
 "Stale = règle + durée.");

F(99, "Suivre des capteurs IoT : comment limiter la dette technique du développeur qui veut créer cmdb_ci_iot_sensor ?",
 [["Extend OOB class", "Étendre une classe standard."]],
 "Réponse B : étendre une classe existante et ajouter des attributs. Créer sous cmdb_ci, définir en principal ou hors hiérarchie ajoute de la dette.",
 "Étends l'existant.");

F(100, "Gouvernance établie, services définis, CI de base peuplés. Quels objectifs prioriser ensuite pour CSDM ?",
 [["Service Mapping foundations", "Bases de cartographie des services."], ["Technical Services", "Services techniques."]],
 "Réponses D + E. Gouvernance est déjà faite, analytique prédictive et automatisation totale viennent plus tard.",
 "Progression : services techniques et fondations Service Mapping.");

F(101, "Préparer une politique Retire pour des CI matériels avec assets : quelles conditions sont nécessaires ?",
 [["Asset end-of-life", "État d'asset en fin de vie."], ["Managed by Group", "Équipe responsable du CI."]],
 "Réponses D + E : état d'asset en fin de vie et attribut Managed by Group renseigné pour router l'approbation. A, B, C ne conditionnent pas ce résultat.",
 "Fin de vie + groupe responsable.");

F(102, "Que permet le flag Extensible d'une classe ?",
 [["Extensible", "Autorise la création de classes enfants."]],
 "Réponse B : créer des classes enfants. Il n'affecte ni l'affichage, ni le product model, ni l'ajout d'attributs.",
 "Extensible = on peut étendre (enfants).");

F(103, "Les relations circulaires peuvent-elles créer une boucle infinie dans Query Builder ?",
 [["Cycle detection", "Détection de cycle."]],
 "Réponse A : limites de profondeur et détection de cycles. Les autres propositions sont fausses.",
 "Query Builder gère les cycles.");

F(104, "Quels cas valides ont un Asset sans CI ?",
 [["Asset sans CI", "Actif non technique ou en stock."]],
 "Réponses D + E : mobilier et ordinateurs en stock n'ont pas de CI. Les bases actives, VM cloud et serveurs retirés ont des CI ou en ont eu.",
 "Pas de CI pour mobilier et stock.");

F(105, "Peupler la CMDB depuis AWS avec une intégration certifiée qui gère le mapping et passe par l'IRE.",
 [["Service Graph Connector", "Connecteur certifié."]],
 "Réponse A : Service Graph Connector for AWS. Discovery, import sets et REST custom sont moins adaptés.",
 "AWS → SGC.");

F(106, "Associer chaque rôle de gouvernance à sa responsabilité.",
 [["Data Steward", "Valide et corrige les CI."], ["CI Class Owner", "Définit standards et attributs requis."], ["Configuration Manager", "Établit politiques et coordonne."], ["CMDB Administrator", "Configure la plateforme."]],
 "1) Valider/corriger → Data Steward. 2) Standards par type de CI → CI Class Owner. 3) Politiques et coordination → Configuration Manager. 4) Règles d'identification et dashboards → CMDB Administrator.",
 "Opérationnel, classe, stratégie, technique.");

F(107, "Phase Crawl du CSDM : quelle action mener ?",
 [["Crawl", "Fondations."]],
 "Réponse A : établir les données de fondation et la structure de base. Les autres actions sont des phases suivantes.",
 "Crawl = fondations.");

F(108, "Fusionner des doublons qui exigent une résolution manuelle en préservant relations et tâches. Quelle action lance la remédiation ?",
 [["De-duplication Task", "Tâche de dé-duplication."]],
 "Réponse C : sélectionner la tâche et cliquer Remediate pour lancer l'assistant. Les autres méthodes risquent de perdre relations et références.",
 "Tâche → Remediate.");

F(109, "Gouvernance du cycle de vie complet des CI : quelles exigences ?",
 [["Cleanup policies", "Politiques de nettoyage."], ["Lifecycle states", "États du cycle de vie."]],
 "Réponses C + D. Corrélation d'événements, rapports et découverte continue ne gouvernent pas le cycle de vie.",
 "États + nettoyage.");

F(110, "Le Health Dashboard est vide malgré des milliers de CI. Que configurer ?",
 [["Health scheduled jobs", "Jobs planifiés qui calculent les scores."]],
 "Réponse C : activer et planifier les jobs Health. Rien n'est calculé sans eux.",
 "Dashboard vide = jobs inactifs.");
