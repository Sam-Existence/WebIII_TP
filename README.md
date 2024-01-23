# Liste de répertoire – Exercice
## Mandat

À faire en équipe de trois personnes. Vous devez créer un site permettant à un musicien d'afficher et de gérer la liste des pièces qu'il peut jouer. Nous commencerons avec une simple preuve de concept.

##Récits utilisateurs :

- En tant qu'administrateur, je veux être capable de consulter les données de mon répertoire;
- En tant qu'administrateur, je veux pouvoir créer une pièce en lui spécifiant un titre, un artiste et une catégorie;
- En tant qu'administrateur, je veux pouvoir modifier les données d'une pièce existante;
- En tant qu'administrateur, je veux pouvoir retirer une pièce de mon répertoire;
- En tant que client, je veux être capable de consulter les données du répertoire.

Pour réaliser les récits utilisateurs, la stratégie ci-dessous est proposée :

##Front-end :

- / : page d'accueil avec texte de présentation
- /repertoire : affiche le répertoire (titre et artiste), trié par catégorie
- /admin : affiche le répertoire (titre et artiste), trié par catégorie. Pour chaque pièce, ajouter deux boutons pour modifier ou effacer la pièce du répertoire
- /ajouter : offre un formulaire pour ajouter une nouvelle pièce (titre, artiste, catégorie) ainsi qu'un bouton « Annuler » qui nous ramène à la page /admin. Pour l'instant, une pièce doit avoir une seule catégorie
- /modifier/:id : permet de modifier une pièce existante
- /supprimer/:id : page demandant la confirmation de suppression

##Back-end :

- GET /api/pieces : retourne la liste de toutes les pièces
- GET /api/pieces/:id : retourne les informations pour une pièce
- POST /api/pieces/ajouter : envoie les informations d'une nouvelle pièce à ajouter en JSON
- PUT /api/pieces/:id/modifier : envoie les informations pour modifier une pièce existante
- DELETE /api/pieces/:id/supprimer : supprime une pièce du répertoire

Il est courant en méthode Agile de découper le travail en courtes tâches :

- Dressez une liste des tâches à faire pour réaliser les récits utilisateurs;
- Essayez de prévoir concrètement le travail à faire, ce n'est pas juste de faire une tâche par route, page ou récit utilisateur;
- Évaluez le temps nécessaire pour accomplir chaque tâche;
- Assignez-vous les tâches et notez le temps passé sur chacune.
- Au besoin, rajoutez des tâches pendant le développement mais n'effacez pas ou ne modifiez pas les tâches déjà créées.

**Vous devez remettre votre liste de tâches ainsi qu'un lien vers le dépôt Git de votre équipe.**