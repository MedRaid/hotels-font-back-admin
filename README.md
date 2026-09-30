# Hotel Management

Application de gestion d'hôtels composée de trois projets :

| Dossier | Rôle | URL de développement |
| --- | --- | --- |
| `backend` | API Express, MongoDB, Cloudinary et authentification admin | `http://localhost:4000` |
| `frontend` | Application cliente React | `http://localhost:5173` |
| `admin` | Interface d'administration React | `http://localhost:5174` |

## Prérequis

- Node.js 18 ou plus récent
- Une base MongoDB
- Un compte Cloudinary pour l'upload d'images

## Installation

Installe les dépendances dans chaque dossier :

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

Crée ensuite le fichier `backend/.env` avec tes propres valeurs :

```env
MONGODB_URI=...
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_SECRET_KEY=...
ADMIN_EMAIL=...
ADMIN_PWD=...
JWT_SECRET=...
```

Ne versionne jamais ce fichier ni ses secrets.

## Démarrer le projet

Ouvre trois terminaux :

```bash
# Terminal 1
cd backend
npm run server
```

```bash
# Terminal 2
cd frontend
npm run dev
```

```bash
# Terminal 3
cd admin
npm run dev
```

## API principale

- `POST /api/user/admin` — connexion administrateur
- `POST /api/hotel/add` — ajout d'une chambre, avec une image `multipart/form-data`
- `GET /api/hotel/list` — liste des chambres
- `POST /api/reservation/create` — création d'une réservation
- `GET /api/reservation/get` — liste des réservations

L'interface admin envoie ses requêtes vers l'API sur le port `4000`.
