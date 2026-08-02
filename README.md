# VaultKey 🔐

A simple, secure password manager built with the MERN stack — save your logins manually, view them on demand, and keep everything organized in one place.

> ⚠️ **Work in progress / learning project.** Passwords are currently stored as plain text in MongoDB. Encryption, Authentication using Auth.js and Deployment are planned next steps before this should be used for real credentials.

---

## Features

- **Add password entries** — site name, site URL, username/email, and password, with a live strength indicator (checks for numerals and special characters) via `react-hook-form`
- **Auto-fetched site favicons** — each entry displays the site's real icon, pulled automatically from its domain (no manual upload needed)
- **Reveal on demand** — passwords aren't loaded with the main list; visiting an entry's dedicated page (`/showpassword/[id]`) fetches it fresh from the server
- **Copy to clipboard** — one click copies the password directly, with a "Copied!" confirmation tooltip
- **Edit and delete entries** — full CRUD support against the backend
- **Live search** — filter saved entries by site name as you type
- **Animated UI** — custom Lottie micro-interactions throughout (lock logo transition, spinning search/refresh icons, action-button animations for copy/reveal/edit/delete)

---

## Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (App Router) + React
- [Tailwind CSS](https://tailwindcss.com/)
- [react-hook-form](https://react-hook-form.com/) for form state and validation
- [lottie-react](https://github.com/Gamote/lottie-react) for animated icons

**Backend**
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

---

## Project Structure

```
my_vault/
├── app/
│   ├── page.jsx              # Home — vault dashboard, search, entry list
│   ├── addpassword/
│   │   └── page.jsx          # Add password form
│   └── showpassword/
│       └── [id]/
│           └── page.jsx      # Dynamic route — reveal one entry's full details
├── components/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   └── EntryCard.jsx         # Renders one saved entry + copy/reveal/edit/delete actions
├── public/
│   └── animations/           # Lottie JSON files (lock, search, refresh, copy, eye, edit, delete, socials)
├── backend/
│   ├── server.js             # Express app entry point
│   └── models/
│       └── vaultentry.js     # Mongoose schema for a vault entry
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally (`mongodb://127.0.0.1:27017`), or a MongoDB Atlas connection string

### 1. Clone the repo
```bash
git clone https://github.com/maximuagandalf-lgtm/my_vault.git
cd my_vault
```

### 2. Set up the backend
```bash
cd backend
npm install
node server.js
```
The API runs on `http://localhost:8000` by default.

### 3. Set up the frontend
```bash
cd ..
npm install
npm run dev
```
The app runs on `http://localhost:3000` by default.

---

## API Routes

| Method | Route | Description |
|---|---|---|
| `GET` | `/vault` | Get all saved entries |
| `GET` | `/vault/:id` | Get one entry by ID (includes password) |
| `POST` | `/addpassword` | Save a new entry |
| `DELETE` | `/vault/:id` | Delete an entry by ID |

---

## Roadmap

- [ ] Encrypt passwords at rest (AES-256-GCM) instead of storing plain text
- [ ] User authentication / master password + login
- [ ] "Connect an account" flow (OAuth-linked entries for Google/GitHub/Facebook)
- [ ] Deploy (frontend + backend + hosted MongoDB)

---

## Author

**Ayush Chauhan**
- GitHub: [@maximuagandalf-lgtm](https://github.com/maximuagandalf-lgtm)
- X (Twitter): [@AyushChauh2076](https://x.com/AyushChauh2076)
- Instagram: [@ayush426884](https://www.instagram.com/ayush426884/)

---

## License

This project is open source and available under the [MIT License](LICENSE).