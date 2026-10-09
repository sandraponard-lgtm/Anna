window.FR = window.FR || {};
function F(n, q, v, w, m) { window.FR[n] = { q: q, v: v, w: w, m: m }; }

F(1, "Tu as corrigé les règles d'identification qui créaient des doublons à cause d'une nouvelle source de découverte. Il reste maintenant à nettoyer les doublons existants ET à mettre en place une gouvernance. Quel outil structuré utiliser ?",
 [["Identification rule", "Règle qui détermine si un CI entrant est nouveau ou déjà connu."], ["Merge wizard / De-duplication", "Assistant de fusion de doublons : il traite le curatif, pas la gouvernance."], ["CI Playbook", "Parcours guidé en étapes (phases) pour corriger un problème de qualité de données, ici les doublons."], ["Correctness score", "Indicateur de santé CMDB : il mesure, il ne corrige pas."]],
 "Réponse C : un Playbook donne une démarche structurée en phases (remédier aux doublons existants puis installer des contrôles). A est déjà fait (la cause est corrigée). B ne fusionne que ponctuellement, sans cadre de gouvernance. D recalcule un score, ce qui ne résout rien.",
 "Playbook = « recette pas à pas » pour corriger un problème de données.");

F(2, "L'équipe veut suivre en continu des métriques agrégées multisources (origine des attributs, couverture des CI, conflits, résultats de réconciliation) pour les tableaux de bord CMDB 360.",
 [["CMDB 360", "Fonction de la CMDB qui conserve les valeurs d'attributs de chaque source (multisource)."], ["Multisource Dashboard Analytics Population", "Job qui alimente (peuple) les données analytiques des dashboards multisource."], ["Correctness / Completeness score", "Scores de CMDB Health, sans lien direct avec les stats par source."]],
 "Réponse A : c'est le mécanisme qui calcule et rafraîchit les métriques du dashboard multisource. B et C sont des scores de CMDB Health (qualité), pas des analytiques multisources. D (Saved Queries) sert à interroger, pas à maintenir des métriques à jour.",
 "Dashboard multisource à jour = « Analytics Population ».");

F(3, "Avant d'utiliser les Playbooks des Foundation Dashboards, comment sont-ils organisés ?",
 [["Foundation Dashboard", "Tableau de bord de maturité des données CMDB (Data Foundation)."], ["Playbook", "Guide de remédiation composé d'étapes séquentielles."], ["Phase", "Regroupement d'étapes dans un Playbook."]],
 "Réponse C : un Playbook est une suite d'étapes ordonnées regroupées en phases. A est faux (l'ordre compte). B est faux (ce ne sont pas des scripts qui s'exécutent seuls sur la base). D est faux (ce n'est pas un simple lien vers de la doc externe).",
 "Playbook = étapes → phases → résolution guidée.");

F(4, "Les règles de sécurité interdisent toute connexion entrante depuis Internet vers le datacenter. Il faut faire du Discovery sur des serveurs on-premise et s'intégrer à une base Oracle. Quel rôle joue le MID Server ?",
 [["MID Server", "Application Java installée dans le réseau du client qui exécute Discovery/intégrations pour l'instance ServiceNow."], ["Probe", "Petite tâche d'exploration envoyée au MID Server."], ["Connexion sortante", "Le MID Server initie la connexion vers l'instance (HTTPS 443), jamais l'inverse."]],
 "Réponse A : le MID Server ouvre une connexion sortante vers ServiceNow, récupère les tâches et exécute les probes à l'intérieur du réseau protégé. B est faux (aucune règle entrante n'est nécessaire). C est faux (ce n'est pas un VPN). D est faux (il ne réplique pas la CMDB).",
 "MID Server = sortant uniquement, comme un facteur qui vient chercher le courrier.");

F(5, "Après un peuplement initial (Discovery + Service Graph Connectors), les scores de santé baissent et les données deviennent obsolètes six mois plus tard. Qu'est-ce qui aurait évité cela ?",
 [["Governance", "Ensemble de processus, rôles et règles qui maintiennent la CMDB dans la durée."], ["Stale (obsolète)", "CI qui n'a pas été mis à jour depuis longtemps."]],
 "Réponse C : la qualité se maintient par une surveillance et une amélioration continues. A (passif) et B (abandonner la gouvernance) provoquent justement la dégradation. D : un déploiement technique complet ne suffit pas sans processus.",
 "La CMDB est un processus continu, pas un projet ponctuel.");

F(7, "L'administrateur veut automatiser les tâches récurrentes de qualité des données : nettoyer les enregistrements obsolètes, faire valider les données par leurs propriétaires, corriger les attributs non conformes.",
 [["Data Manager", "Module de gouvernance basé sur des politiques : Retire, Archive, Delete, Certification, Attestation."], ["CMDB Health Dashboard", "Mesure la santé, n'automatise pas les actions."], ["IRE", "Moteur d'identification/réconciliation à l'insertion des données."]],
 "Réponse D : Data Manager automatise le cycle de vie et la validation via des politiques. A affiche des scores. B alimente la CMDB. C gère l'identification et la réconciliation à l'ingestion, pas le nettoyage ni la revue par les propriétaires.",
 "Data Manager = le « robot de ménage » de la CMDB.");

F(8, "Avant d'approuver une fenêtre de maintenance sur un serveur applicatif critique, le Change Manager doit visualiser les relations pour mesurer le « rayon d'impact ».",
 [["Unified Map", "Carte graphique des dépendances d'un CI (amont/aval) pour l'analyse d'impact."], ["Service Mapping", "Découverte top-down qui crée des cartes de services applicatifs."], ["Query Builder", "Outil de requête qui renvoie une liste filtrée de CI."], ["Blast radius", "Étendue des services touchés par un incident ou changement."]],
 "Réponse A : Unified Map permet d'explorer visuellement le graphe de dépendances. B sert à construire des cartes de services, pas à explorer l'existant. C donne une liste, pas une vue graphique. D évalue un score de complétude, pas l'impact.",
 "Impact visuel = Unified Map ; liste filtrée = Query Builder.");

F(9, "Quel rôle de moindre privilège permet de configurer les politiques de validation des CI, gérer les exclusions et superviser les revues de gouvernance récurrentes ?",
 [["data_manager_admin", "Rôle d'administration de Data Manager (politiques, exclusions, revues)."], ["Least privilege", "Donner uniquement les droits nécessaires."], ["cmdb_dedup_admin / cmdb_ms_admin", "Rôles pour la dé-duplication et pour le multisource."]],
 "Réponse B : data_manager_admin couvre exactement ces tâches. A concerne la fusion de doublons, C le multisource (CMDB 360), D l'édition de CI sans administration de politiques.",
 "Politiques de gouvernance → data_manager_admin.");

F(10, "Trois sources de découverte écrasent le même attribut d'un serveur. Quelle fonctionnalité contrôle cela ?",
 [["Reconciliation Rules", "Règles qui décident quelle source fait autorité pour chaque attribut."], ["Identification Rules", "Règles qui décident quel CI est « le même »."], ["Precedence", "Priorité entre sources pour un attribut donné."]],
 "Réponse D : c'est un conflit de valeurs entre sources, donc de la réconciliation. A détermine l'unicité d'un CI, pas qui gagne sur un attribut. B et C ne gèrent pas la priorité des sources.",
 "Identification = « qui est qui ? » ; Réconciliation = « qui a raison ? ».");

F(12, "Le rapport de population après un mois de Discovery montre : serveurs 97 %, réseau 97,5 %, applications métier 0/50, contrats fournisseurs 0/30. Quelle action est recommandée ?",
 [["Population report", "Rapport comparant les CI attendus aux CI réellement présents."], ["Import set", "Table tampon pour charger des données externes (ici un outil de gestion des contrats)."], ["Discovery", "Détecte des éléments techniques, pas des contrats ni des applications métier."]],
 "Réponse B : les contrats fournisseurs et applications métier ne se découvrent pas techniquement ; ils proviennent d'un système source (gestion des contrats) importé via import sets. A, C, D concernent la découverte technique, qui fonctionne déjà bien (97 %).",
 "Ce qui n'est pas technique ne se « découvre » pas : on l'importe.");

F(13, "Besoin d'une façon réutilisable et structurée d'analyser les CI de plusieurs sources, repérer les incohérences et comparer les valeurs d'attributs.",
 [["Saved queries (CMDB 360)", "Requêtes enregistrées pour comparer les attributs multisources."], ["Unified Map", "Cartographie des relations."], ["Coverage cards", "Cartes de couverture."], ["CI Class Manager", "Gestion du modèle de classes."]],
 "Réponse C : les Saved queries sont réutilisables et dédiées à l'analyse comparative multisource. Les autres outils ne comparent pas les valeurs par source.",
 "Comparer des sources de façon réutilisable = Saved queries.");

F(14, "Comment le CSDM permet-il d'obtenir des rapports standardisés sur la performance des services malgré des structures de données hétérogènes ?",
 [["CSDM", "Common Service Data Model : modèle de référence des services et de leurs relations."], ["Agrégation", "Regrouper les données par service de façon cohérente."]],
 "Réponse C : des hiérarchies et relations de services standardisées permettent d'agréger les données de façon uniforme. A est faux (pas besoin de contourner). B exagère (pas de dashboards « clés en main »). D est trop rigide (CSDM n'impose pas une structure de reporting unique).",
 "CSDM = langage commun → rapports cohérents.");

F(15, "Associer chaque type d'enregistrement CSDM à l'équipe qui en est responsable.",
 [["Business Application", "Application décrite par les architectes, qui supporte une capacité métier."], ["Agile Development Component", "Composant produit par un pipeline de développement."], ["Service Instance", "Instance déployée d'un service technique, gérée par les opérations."], ["Business Service Offering", "Ce que les consommateurs peuvent demander, publié par le business relationship manager."]],
 "1) Architectes → Business Application. 2) Équipe de dev → Agile Development Component. 3) Opérations → Service Instance. 4) BRM → Business Service Offering. Information Object est le distracteur : il décrit des données logiques, aucun de ces rôles.",
 "Archi = Business App ; Dev = Component ; Ops = Instance ; BRM = Offering.");

F(16, "Pourquoi une propriété claire des données (data ownership) est-elle essentielle à la gouvernance CMDB ?",
 [["Data ownership", "Une personne ou équipe désignée responsable de la qualité d'une donnée."], ["Accountability", "Redevabilité : savoir qui doit corriger."]],
 "Réponse C : sans propriétaire, personne ne valide ni ne corrige. A, B, D (performance, reporting, licences) ne sont pas l'objectif de la propriété des données.",
 "Pas de propriétaire = pas de responsable = données qui se dégradent.");

F(17, "Un fournisseur cloud n'a pas de Service Graph Connector certifié. Quelle approche permet des imports automatisés et récurrents dans la CMDB ?",
 [["Scheduled data source", "Source de données planifiée qui charge régulièrement un import set."], ["REST integration", "Appel d'API REST pour récupérer les données."], ["Transform map", "Règles qui mappent les colonnes sources vers les champs cibles."]],
 "Réponse B : source planifiée + REST + transform maps = import automatisé sur mesure. A : une règle de réconciliation n'importe rien. C : Cloud Discovery scanne des fournisseurs supportés, pas un fournisseur non pris en charge. D : les principal classes ne génèrent pas de CI.",
 "Pas de connecteur ? Import planifié + REST + transform map.");

F(18, "Les propriétaires d'applications doivent vérifier tous les 90 jours que les valeurs de Business criticality et Support group sont exactes ; la plateforme crée des tâches de revue et enregistre leur achèvement.",
 [["Data Certification", "Politique Data Manager qui génère des tâches pour faire revalider des valeurs d'attributs par des propriétaires."], ["Attestation", "Confirmation que le CI lui-même existe encore."]],
 "Réponse C : la Certification vérifie la valeur des champs, de façon récurrente, avec tâches assignées. A exporte seulement. B mesure la complétude, sans tâche. D relance un scan, sans revue humaine.",
 "Certification = vérifier les valeurs ; Attestation = vérifier l'existence.");

F(19, "Dans Query Builder, comment retourner les serveurs de support quel que soit le nombre de niveaux de relation, en affichant leur système d'exploitation ?",
 [["Convert attached nodes to pattern", "Option de nœud permettant de traverser un nombre indéterminé de niveaux de relation."], ["Add Columns", "Ajoute des colonnes (ex. OS) dans les résultats."], ["Level", "Nombre de niveaux de relation limité (ex. 2e niveau)."]],
 "Réponses B + C : B donne la traversée multi-niveaux, C affiche l'OS dans le rapport. A (CI reference column), D (limité à 2 niveaux) et E (related item) ne répondent pas au « n niveaux + colonne OS ».",
 "Niveaux illimités = pattern ; colonnes = Add Columns.");

F(20, "Associer chaque composant d'audit de conformité à son rôle dans le score Compliance KPI.",
 [["Pass Rate", "Pourcentage de CI conformes ; contribue directement au score."], ["Audit Weight", "Poids de cet audit dans le KPI global."], ["Failure List", "Liste détaillée des CI en échec pour prioriser la remédiation."], ["Schedule", "Fréquence de recalcul."]],
 "1) % de CI conformes → Pass Rate. 2) Influence sur le KPI → Audit Weight. 3) Détail de drill-down → Failure List. 4) Fréquence de recalcul → Schedule. Remediation Rule est le distracteur.",
 "PWFS : Pass rate, Weight, Failure list, Schedule.");

F(21, "Avec CMDB 360 (Discovery, scanner de vulnérabilités, API cloud), comment créer un rapport montrant tous les attributs de toutes les sources ?",
 [["CMDB 360 view", "Vue qui expose les attributs de chaque source stockés en CMDB."]],
 "Réponse C : la vue CMDB 360 contient déjà tous les attributs multisources. A (API temps réel), B (rapports séparés) et D (scripts GlideRecord par source) sont inutilement complexes et contournent la fonctionnalité.",
 "Les données multisources sont déjà en CMDB : utilise la vue.");

F(22, "Service Mapping avec un point d'entrée : comment les relations entre composants sont-elles créées ?",
 [["Entry point", "Point de départ d'une carte (ex. URL d'application)."], ["Pattern", "Script de découverte qui suit les connexions."], ["Service Mapping", "Cartographie top-down des services applicatifs."]],
 "Réponse A : les patterns tracent les connexions à partir du point d'entrée et créent les relations automatiquement. B, C, D supposent de la configuration manuelle ou un import externe, ce n'est pas le principe.",
 "Service Mapping = entry point + patterns = relations automatiques.");

F(23, "Évaluer l'impact d'un correctif de sécurité sur un serveur de base de données : comment la CMDB soutient-elle la gestion des changements ?",
 [["Impact analysis", "Analyse des services touchés via les relations de dépendance."], ["Change Management", "Processus ITIL de gestion des changements."]],
 "Réponse C : la CMDB fournit les relations de dépendance permettant l'analyse d'impact. A, B, D sont des fonctions étrangères à la CMDB (planification, notes d'éditeur, calcul de probabilité d'échec).",
 "CMDB + changement = relations → impact.");

F(24, "Dans CMDB Workspace, comment analyser les relations d'un serveur avec les autres composants et services ?",
 [["CMDB Workspace", "Interface moderne pour gérer et explorer la CMDB."], ["Related items", "Panneau listant les éléments liés."], ["Dependency map", "Vue graphique des dépendances."]],
 "Réponses B + C : la carte graphique et le panneau d'éléments liés servent à analyser les relations. A (suppression en masse), D (formulaire d'édition) et E (indicateurs de santé) ne portent pas sur l'analyse des relations.",
 "Relations = carte graphique + related items.");

F(25, "Phase « Run » du CSDM : comment permet-elle de comprendre l'impact de la technologie sur le métier ?",
 [["Crawl / Walk / Run / Fly", "Les 4 étapes d'adoption progressive du CSDM."], ["Business Service", "Service vu du côté métier."], ["Technical Service", "Service technique qui le supporte."]],
 "Réponse C : en Run, on relie Business Services et Technical Services, donc un incident d'infrastructure se traduit en impact métier. A est du Crawl (inventaire). B et D ne correspondent pas au modèle.",
 "Run = relier le métier à la technique.");

F(26, "Quel bénéfice offre CMDB Workspace à un nouvel administrateur ?",
 [["CMDB Workspace", "Point d'entrée unique pour CI, requêtes, santé, qualité des données."]],
 "Réponse A : un seul endroit pour gérer les CI et contrôler leur santé. B (remplace les menus) est faux, C (système séparé) est faux, D (mobile) n'est pas le bénéfice central.",
 "Workspace = tout au même endroit.");

F(27, "Les équipes Incident et Change identifient mal les services touchés. Comment la gouvernance CMDB aide-t-elle les processus aval ?",
 [["Governance", "Règles et responsabilités qui garantissent la qualité des données."]],
 "Réponse A : la gouvernance assure des données exactes, base de tous les processus ITSM. B, C, D sont des fonctions de workflow ou de conformité, pas l'effet principal.",
 "Gouvernance → données fiables → ITSM efficace.");

F(28, "Quels widgets sont disponibles sur le CMDB Data Foundation Dashboard ?",
 [["Data Foundation Dashboard", "Tableau de bord stratégique sur la maturité des fondations de données."]],
 "Réponse A : on y trouve les métriques de couverture (Discovery coverage). B, C et D (topologie réseau, listes de CI individuels, coûts) n'y figurent pas.",
 "Data Foundation = vue stratégique de couverture.");

F(29, "Quand utiliser le Data Foundation Dashboard plutôt que le CMDB Health Dashboard ?",
 [["Strategic readiness", "Évaluation de la maturité globale à haut niveau."], ["CMDB Health Dashboard", "Vue opérationnelle de santé (completeness, correctness, compliance...)."]],
 "Réponse A : le Data Foundation Dashboard sert l'évaluation stratégique de la maturité ; le Health Dashboard est plus opérationnel. Les autres différences (audience, fréquence, historique) ne sont pas le critère distinctif.",
 "Foundation = stratégie ; Health = opérationnel.");

F(30, "200 serveurs Windows manquent d'attributs de patch. Il faut les isoler, les assigner à une équipe pour correction en masse et suivre la population jusqu'à résolution.",
 [["CMDB Group", "Groupe de CI (souvent alimenté par une requête) qui peut être assigné et suivi."], ["Query Builder (saved query)", "Requête enregistrée réutilisable."]],
 "Réponse B : une requête sauvegardée alimente un CMDB Group pour assigner et suivre. A n'agit qu'à l'entrée des données. C et D ne permettent pas d'isoler et d'assigner un lot de CI.",
 "Isoler + assigner + suivre = Saved query → CMDB Group.");

F(31, "À quoi sert le Natural Language Query (NLQ) ?",
 [["NLQ", "Interrogation de la CMDB en langage courant, sans syntaxe de requête."]],
 "Réponse D : poser une question en langage naturel sans maîtriser la syntaxe. A (commande vocale), B (résumés) et C (traduction) sont faux.",
 "NLQ = poser la question comme à un collègue.");
