function F(n, q, v, w, m) { window.FR[n] = { q: q, v: v, w: w, m: m }; }

F(32, "Quelles relations Discovery ne détecte pas automatiquement et doivent donc être créées à la main ?",
 [["Discovery", "Détecte les CI techniques et leurs connexions réseau/processus."], ["Relation manuelle", "Dépendance documentée par un humain."]],
 "Réponses C + D : un contrat fournisseur externe et une application SaaS tierce ne sont pas détectables techniquement. A (VM sur cluster VMware), B (IIS sur Windows) et E (Apache sur Linux) sont détectés par Discovery.",
 "Si ça ne tourne pas dans ton réseau, il faut le relier à la main.");

F(33, "Après avoir réduit le nombre d'attributs identifiants pour les serveurs, CMDB Health montre une forte hausse de doublons. Pourquoi ?",
 [["Identifier attributes", "Attributs utilisés pour décider qu'un CI est le même."], ["Duplicate", "Plusieurs CI qui représentent le même élément réel."]],
 "Réponse A : moins d'identifiants rendent les critères moins précis, donc certains CI ne sont plus reconnus comme identiques. B, C, D décrivent des effets qui n'existent pas.",
 "Moins de critères d'identification = moins de matchs = plus de doublons.");

F(34, "Vérifier périodiquement que des valeurs d'attributs de serveurs sont exactes ; le processus génère des tâches planifiées assignées aux équipes. Quelle politique Data Manager ?",
 [["Certification", "Revalidation périodique de valeurs d'attributs par des tâches."], ["Attestation", "Confirmation de l'existence du CI."], ["Retire / Archive", "Fin de vie et archivage."]],
 "Réponse A : on vérifie des valeurs d'attributs, c'est la Certification. B vérifie l'existence du CI, C et D traitent le cycle de vie.",
 "Valeurs d'attributs → Certification.");

F(35, "Les agents rattachent des tickets au mauvais serveur et les analyses d'impact manquent des applications. La métrique Duplicate échoue. Quelle est la cause ?",
 [["Duplicate CIs", "Plusieurs fiches pour un même actif réel."]],
 "Réponse B : plusieurs CI pour le même actif dispersent les relations et les tickets. Le symptôme (Duplicate qui échoue) pointe directement les doublons ; A, C, D ne produisent pas ce symptôme.",
 "Doublons = relations éparpillées = mauvaises décisions.");

F(36, "Seuls serveurs, applications et bases de données doivent apparaître dans les champs CI des formulaires Incident/Change. Quel concept ?",
 [["Principal class", "Classe marquée comme principale : seuls ses CI s'affichent par défaut dans les lookups ITSM."]],
 "Réponse C : les principal classes filtrent les CI proposés. A est une structure d'héritage, B un cloisonnement de données, D de la sécurité d'accès.",
 "Principal class = le filtre des listes de CI dans l'ITSM.");

F(37, "Un utilisateur cherche les serveurs Windows du datacenter Finance sans connaître la structure des tables CMDB.",
 [["NLQ", "Recherche en langage naturel."]],
 "Réponse B : il tape sa question en anglais courant (NLQ) et consulte les résultats. A, C, D exigent de connaître les tables, filtres ou opérateurs.",
 "Pas d'expertise technique ? NLQ.");

F(38, "Quand une même valeur d'attribut est rapportée différemment selon les sources, comment imposer quelle source prévaut ?",
 [["Reconciliation Rules", "Définissent les sources autorisées et leur priorité par attribut."]],
 "Réponse C : la réconciliation tranche entre sources. D identifie les CI, A/B ne gèrent pas la priorité des sources.",
 "Conflit de valeurs → Reconciliation.");

F(39, "Des relecteurs corrigent des attributs pendant une tâche de certification, et un enregistrement avec un attribut de certification vide reste non certifié. Quels paramètres de politique produisent ce comportement ?",
 [["Allow empty field values", "Si décoché, un champ vide empêche la certification."], ["Allow field updates", "Permet aux relecteurs de modifier les valeurs pendant la tâche."]],
 "Réponses B + E : décocher « Allow empty field values » bloque la certification des vides, et activer « Allow field updates » permet de corriger. A, C, D ne changent pas ce comportement (affichage, texte d'instruction, délai).",
 "Corriger = Allow updates ; vide refusé = décocher Allow empty.");

F(40, "De nouveaux composants applicatifs ne rentrent dans aucune classe. L'équipe veut examiner les attributs, imposer les champs obligatoires et décider d'une hiérarchie personnalisée.",
 [["CI Class Manager", "Outil de gestion des classes CMDB, attributs et hiérarchie."]],
 "Réponse B : CI Class Manager. A est trop bas niveau, C mesure la santé, D concerne les politiques de données.",
 "Modèle de classes = CI Class Manager.");

F(41, "Suivre des load balancers F5 avec des champs de conformité personnalisés sans reprise de travail lors des montées de version.",
 [["Préfixe u_", "Champs personnalisés ajoutés sans modifier l'OOB, compatibles upgrade."], ["Out-of-box (OOB)", "Fonctionnalité livrée en standard."]],
 "Réponse C : utiliser la classe OOB Load Balancer avec champs u_ évite le rework. A est irréaliste, B éloigne les données, D crée une classe enfant inutile qui complique Discovery.",
 "Extension minimale : champs u_ sur la classe standard.");

F(42, "Associer chaque constat de gouvernance à l'endroit où l'administrateur le traite.",
 [["Data Manager", "Politiques de retrait, certification, attestation."], ["CMDB Workspace", "Interface pour résoudre doublons et gérer les CI."], ["CMDB Health Dashboard", "Mesure la santé (non utilisé ici comme lieu d'action)."]],
 "1) Serveurs d'un datacenter fermé encore actifs → CI Class Manager (cycle de vie / statuts). 2) Applications sans propriétaire → Data Manager (certification). 3) Doublons après migration cloud → CMDB Workspace. 4) Valeurs inexactes d'une intégration tierce → Data Manager. Le CMDB Health Dashboard est le distracteur.",
 "Doublons → Workspace ; validation par propriétaires → Data Manager.");

F(43, "Les agents voient trop de types de CI dans le lookup. Comment limiter ceux qui apparaissent par défaut ?",
 [["Principal CI Class attribute", "Marque une classe comme principale pour les listes ITSM."]],
 "Réponse C : la propriété de classe principale filtre les lookups. A (réf qualifier) existe mais n'est pas la solution CMDB prévue, B et D sont sans rapport.",
 "Filtrer les lookups = principal class.");

F(44, "Des relations sont créées entre serveurs d'application et bases de données qui se connectent. Comment ?",
 [["Discovery", "Détecte aussi les connexions TCP et dépendances entre processus."]],
 "Réponse C : Discovery détecte connexions et processus et crée les relations. A (seulement Service Mapping), B (tout à la main) et D (intégration séparée) sont faux.",
 "Discovery = CI + relations.");

F(45, "Sur Linux Server, un champ hérité doit avoir une valeur par défaut différente de Server sans modifier la définition de Server.",
 [["Dictionary override", "Surcharge d'une définition de champ dans une classe enfant."]],
 "Réponse C : le dictionary override modifie le défaut uniquement pour la classe enfant. A, B, D ne changent pas la valeur par défaut au niveau du dictionnaire.",
 "Défaut différent dans l'enfant = dictionary override.");

F(46, "Quel mécanisme détermine si un CI entrant est inséré comme nouveau ou mis à jour ?",
 [["IRE", "Identification and Reconciliation Engine."]],
 "Réponse B : l'IRE décide insert vs update. A mappe des champs, C impose des règles de données, D est un outil de requête.",
 "Nouveau ou existant ? → IRE.");

F(47, "Avec IRE activé dans une transform map, quel composant devient inutile ?",
 [["Coalesce", "Champ servant à retrouver un enregistrement existant (import set classique)."]],
 "Réponse C : avec IRE, les règles d'identification remplacent les valeurs de coalesce. Les field maps, scripts et table source restent nécessaires.",
 "IRE remplace le coalesce.");

F(48, "Comment les Foundation Dashboards aident-ils à prioriser des initiatives d'amélioration ?",
 [["Foundation Dashboards", "Tableaux de bord de maturité avec recommandations."]],
 "Réponse A : ils montrent les écarts de qualité, avec recommandations et suivi de progression. Les autres options décrivent des tableaux statiques ou génériques, ce qui est faux.",
 "Écarts + recommandations + suivi.");

F(49, "Quels outils synchronisent le statut opérationnel du CI et l'état de l'asset dans les deux sens ?",
 [["State mapping rules", "Table de correspondance entre états CI et asset."], ["Synchronization business rules", "Règles qui propagent les changements entre les deux enregistrements."]],
 "Réponses D + E. A (manuel), B (scripts REST) et C (imports) ne constituent pas le mécanisme natif de synchronisation.",
 "Mapping + business rules = synchro native.");

F(50, "Comment la standardisation CSDM garantit-elle la compatibilité avec les produits ServiceNow actuels et futurs ?",
 [["CSDM", "Modèle de données consommé par les produits ServiceNow."]],
 "Réponse D : les produits ServiceNow consomment des données structurées selon le CSDM. A (garantie sur apps custom), B (verrouillage) et C (scripts de migration automatiques) sont faux.",
 "Les produits parlent CSDM.");

F(51, "Un export CSV quotidien d'un système d'asset change peu. Quelle approche d'intégration ?",
 [["Scheduled import", "Import planifié à fréquence fixe."]],
 "Réponse D : un fichier quotidien se traite en import planifié. Manuel (A) est fragile, événementiel (B) et polling continu (C) sont surdimensionnés.",
 "Fichier quotidien → import planifié.");

F(52, "Quelles catégories de KPI composent le score global de CMDB Health ?",
 [["Completeness", "Champs obligatoires renseignés."], ["Correctness", "Staleness, orphelins, doublons."], ["Compliance", "Résultat des audits."], ["Relationship Health", "Intégrité des relations."]],
 "Réponse A : Completeness, Correctness, Compliance, Relationship Health. Les autres listes sont inventées ou mélangent des concepts.",
 "CCCR : Complétude, Correction, Conformité, Relations.");

F(53, "Comment gérer la CMDB de façon continue et structurée, pas comme un projet ponctuel ?",
 [["CI class ownership", "Chaque classe a un responsable."], ["Governance", "Processus récurrent de qualité."]],
 "Réponse A : définir périmètre et propriété des classes, automatiser découverte et ingestion, puis surveiller. B, C, D sont partiels ou excessifs (minimaliste, limité, tout peupler).",
 "Périmètre + propriété + automatisation + suivi.");

F(54, "Associer chaque besoin d'analyse CMDB 360 à l'outil correspondant.",
 [["CMDB MultiSource Data table", "Stocke les données retenues par couple source/CI."], ["CMDB 360 Data Preview", "Compare les soumissions concurrentes à la valeur stockée."], ["Reconciliation Rules page", "Montre l'ordre de priorité des sources par attribut."], ["Dynamic Query Builder report", "Rapport dynamique qui reste à jour sans reconstruction."]],
 "1) Données retenues → table MultiSource. 2) Comparer soumissions → Data Preview. 3) Priorité des sources → page Reconciliation Rules. 4) Résultats à jour → rapport Dynamic Query Builder. Health scorecards est le distracteur.",
 "Table, Preview, Rules, Report : 1-2-3-4.");

F(55, "Un système externe envoie des CI en quasi temps réel par API. Quelles méthodes assurent exactitude, réconciliation et peu d'effort manuel ?",
 [["Service Graph Connector", "Intégration certifiée qui passe par l'IRE."], ["Scripted Web Service", "API personnalisée qui peut appeler l'IRE."]],
 "Réponses C + D : les deux peuvent envoyer des données via l'IRE (réconciliation). A est du Discovery, B des imports planifiés (pas temps réel).",
 "Temps réel + IRE → SGC ou web service scripté.");

F(56, "Le Duplicate CI Remediator fusionne trois CI doublons. Quelle vue aide à choisir ce qui est conservé ?",
 [["Duplicate CI Remediator", "Assistant de fusion de doublons."]],
 "Réponse A : comparaison côte à côte des valeurs d'attributs. B, C, D proposent des méthodes manuelles ou automatiques non décrites.",
 "Fusion = comparaison côte à côte.");

F(57, "Associer chaque action corrective à la métrique Data Foundation qui la mesure.",
 [["Handled Duplicate CIs", "Résout les doublons de Hardware/VM."], ["CIs Processed via IRE", "Fait passer les écritures par l'IRE."], ["Changes Referencing a CI", "Lie les changes à un CI."], ["Services with Owners", "Responsabilise chaque service."]],
 "1) Doublons → Handled Duplicate CIs. 2) Écritures directes → CIs Processed via IRE. 3) Change liés à un CI → Changes Referencing a CI. 4) Propriétaire → Services with Owners. Custom tables est le distracteur.",
 "Le nom de la métrique décrit l'action.");

F(58, "30 % des serveurs ont un attribut location incohérent depuis l'ajout d'une seconde source de découverte. Quelle action pour résoudre la cause ?",
 [["Reconciliation rules", "Priorité des sources par attribut."]],
 "Réponse C : le conflit entre deux sources se règle en ajustant les règles de réconciliation. A (politique) et B (corrections manuelles) ne traitent pas la cause. D retire des serveurs sans corriger.",
 "Deux sources en conflit → réconciliation.");

F(59, "Quel rôle permet de créer et gérer les politiques Data Manager ?",
 [["sn_cmdb_admin", "Administrateur CMDB."]],
 "Réponse B : sn_cmdb_admin. Data steward, editor et itil n'ont pas ce droit.",
 "Admin = politiques.");

F(60, "Comment les Foundation Dashboards soutiennent-ils l'évaluation de la maturité et la planification d'une feuille de route ?",
 [["Maturity indicators", "Indicateurs de maturité."], ["Trends", "Évolution dans le temps."]],
 "Réponses A + B : suivi des tendances et indicateurs de maturité. C (alertes temps réel), D (remédiation automatisée) et E (baselines) ne sont pas leur rôle.",
 "Tendances + maturité.");

F(61, "Quels scénarios créent couramment des doublons de CI ?",
 [["Duplicate CI", "CI qui représente un même actif."]],
 "Réponses C + E : saisie manuelle sans contrôle de doublons et valeurs d'identifiants différentes selon les sources. A, B, D sont des mécanismes inexistants ou du simple calcul de score.",
 "Doublons = entrée sans contrôle + identifiants divergents.");

F(62, "Lors d'une fusion via l'assistant de dé-duplication, que deviennent les relations et les tickets liés ?",
 [["Surviving CI", "CI conservé après la fusion."]],
 "Réponses C + E : relations préservées sur le CI survivant, références des tâches mises à jour vers l'enregistrement conservé. A, B, D (orphelines, supprimées, dupliquées) sont faux.",
 "La fusion conserve relations et tickets.");

F(63, "Le CIO constate que IT et métier n'emploient pas les mêmes termes pour les services. Comment CSDM aide-t-il ?",
 [["CSDM", "Langage commun des services."]],
 "Réponse C : CSDM définit des concepts de service standardisés qui relient valeur métier et technique. A, B, D sont faux ou exagérés.",
 "CSDM = vocabulaire commun métier/IT.");

F(64, "Des intégrations tierces importent des CI sans passer par l'IRE. Quelle catégorie du dashboard Data Foundations montre l'ampleur du problème ?",
 [["Data Management Practices", "Catégorie mesurant les bonnes pratiques d'alimentation (usage de l'IRE...)."]],
 "Réponse D : Data Management Practices couvre l'usage de l'IRE. Les autres catégories (ITSM, Best Practices, Customizations) ne portent pas sur ça.",
 "IRE contournée → Data Management Practices.");

F(65, "Après Ideation (évaluation et pilote réussi) d'un modèle de CI tangible, quelle étape suit dans le cycle de vie CSDM ?",
 [["Lifecycle tangible", "Ideation → Purchase → Deploy → ... (cycle des actifs physiques)."]],
 "Réponse D : Purchase suit Ideation. Deploy, Inventory et Design viennent ailleurs dans le cycle.",
 "Idée → Achat → Déploiement.");

F(66, "Quels sont les objectifs principaux d'une gouvernance CMDB efficace ?",
 [["Qualité des données", "Exactitude, complétude, cohérence, actualité."]],
 "Réponse A : précision, complétude, cohérence, actualité. Les autres listes concernent l'ingénierie de données ou la sécurité.",
 "Les 4 qualités : exactitude, complétude, cohérence, actualité.");
