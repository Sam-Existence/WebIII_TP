# Tâches

## API

| Verbe  | Route                                       | Description                                | Responsable |
| ------ | ------------------------------------------- | ------------------------------------------ | ----------- |
| GET    | /api/repertoire/pieces                      | Consulter les données du répertoire        | Félix       |
| POST   | /api/repertoire/pieces                      | Ajouter une pièce                          | Félix       |
| GET    | /api/repertoire/pieces/:id                  | Consulter une pièce                        | Félix       |
| PUT    | /api/repertoire/pieces/:id                  | Modifier une pièce                         | Félix       |
| DELETE | /api/repertoire/pieces/:id                  | Supprimer une pièce                        | Félix       |
| GET    | /api/repertoire/pieces/top/:quantite        | Consulter le top x des pièces              | Sam         |
| GET    | /api/demandes-speciales                     | Consulter les demandes spéciales           | Sam         |
| POST   | /api/demandes-speciales                     | Ajouter une demande spéciale               | Félix       |
| GET    | /api/demandes-speciales/actives             | Consulter les demandes spéciales actives   | Sam         |
| PUT    | /api/demandes-speciales/:id/desactiver      | Désactiver une demande spéciale            | Félix       |
| POST   | /api/demandes-speciales/:id/pieces          | Ajouter une pièce à la demande spéciale    | Félix       |
| DELETE | /api/demandes-speciales/:id/pieces/:idpiece | Supprimer une pièce de la demande spéciale | Félix       |

## Site web

### Administrateur

| Route                                    | Description                         | Responsable |
| ---------------------------------------- | ----------------------------------- | ----------- |
| /admin/repertoire                        | Consulter les données du répertoire | Sam         |
| /admin/repertoire/ajouter                | Ajouter une pièce au répertoire     | Sam         |
| /admin/repertoire/modifier/:id           | Modifier une pièce                  | Sam         |
| /admin/repertoire/top/5                  | Consulter le top 5                  | Félix       |
| /admin/demandes-speciales(?actives=true) | Consulter les demandes spéciales    | Félix       |
| /admin/demandes-speciales/:id            | Consulter une demande spéciale      | Sam         |

### Client

| Route                   | Description                                    | Responable |
| ----------------------- | ---------------------------------------------- | ---------- |
| /                       | Page d'accueil                                 | Sam        |
| /repertoire             | Consulter les données du répertoire            | Sam        |
| /demandes-speciales     | Recherche demandes spéciales par nom du client | Félix      |
| /demandes-speciales/:id | Ajouter/modifier/consulter demande spéciale    | Sam        |
