# Pantry Pal

> A smart pantry inventory tracker — know what you have, reduce waste, and never forget what's running low.

<!-- Add a screenshot or GIF of the app here -->
<!-- ![Pantry Pal in action](./assets/demo.gif) -->

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Changelog](#changelog)
- [License](#license)
- [Contributors](#contributors)

---

## Description

Pantry Pal is a full-stack smart inventory tracker that helps you manage what's in your pantry. Add and organize your pantry items, track quantities and expiration dates, and stay on top of what needs restocking — all in one place.

Built as a team project with a focus on high-performance form management using React Hook Form and a RESTful API backend, Pantry Pal is an ongoing project with a robust roadmap of features in active development.

---

## Features

| Feature | Status |
|---|---|
| View pantry inventory | ✅ |
| Add pantry item | ✅ |
| Auto-refresh after adding item | ⏳ |
| Edit pantry item | ⏳ |
| Delete pantry item | ⏳ |
| Search / filter inventory | ⏳ |
| Expiration date tracking | ⏳ |
| Low stock alerts | 🙏 |
| Barcode scanning | 🙏 |
| Recipe suggestions from inventory | 🙏 |

- ✅ Complete
- ⏳ In progress
- 🙏 Looking for contributors

---

## Tech Stack

**Frontend:** React, TypeScript, Vite, React Hook Form, React Router  
**Backend:** Node.js, Express, TypeScript  
**Database:** MongoDB Atlas, Mongoose  

---

## Getting Started

### Prerequisites

- Node.js `>=18.0.0`
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and cluster

### Installation

Clone the repository and install dependencies for the root, client, and server in one command:

```bash
git clone https://github.com/BloodR00t/pantry-pal.git
cd pantry-pal
npm run install-all
```

### Environment Variables

Create a `.env` file inside the `server/` directory:

```bash
cp server/.env.example server/.env
```

Then open `server/.env` and fill in your values:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

You can find your MongoDB connection string in Atlas under **Database → Connect → Connect your application**. Make sure to include your database name in the URI:

```
mongodb+srv://username:password@cluster.mongodb.net/your-database-name?appName=Cluster0
```

### Running the Application

From the project root, run both the client and server concurrently:

```bash
npm run dev
```

The client will be available at `http://localhost:5173` and the server at `http://localhost:3000`.

To run them separately:

```bash
npm run client   # frontend only
npm run server   # backend only
```

---

## Usage

1. **View your pantry** — The main view displays all items currently in your inventory.
2. **Add an item** — Use the form to add a new pantry item including name, quantity, and other details.

> Screenshot / GIF walkthrough coming soon.

---

## Roadmap

See the [Features](#features) table above for planned additions. Current development priorities include completing edit and delete functionality, connecting search and filter to the backend, and implementing expiration date tracking. Low stock alerts, barcode scanning, and recipe suggestions are planned for future iterations.

---

## Changelog

### v1.0.0 — Current
- Pantry inventory view
- Add pantry item with React Hook Form
- RESTful API with Express and Node.js
- MongoDB Atlas database with Mongoose

---

## License

[MIT](./LICENSE)

---

## Contributors

| Name | GitHub |
|---|---|
| Katy Wells | [@katygus](https://github.com/katygus) |
| Lawrenzo Lue | [@lawrenzo456](https://github.com/lawrenzo456) |
| Robyn Geldner | [@5Runi](https://github.com/5Runi) |
| Xavier (Sarai) Roberson | GitHub link pending |
