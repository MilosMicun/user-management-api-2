# User Management API

A mini backend project built with **Node.js** and **Express**, focused on learning
real-world backend structure and REST API fundamentals.

This project is part of a long-term learning path toward becoming a
**full-stack blockchain developer**.

---

## 🚀 Features

- Express server with clean project structure
- REST API for user management
- In-memory data storage
- Global error handling middleware
- JSON request and response handling
- Tested using Postman

---

## 🗂️ Project Structure

user-management-api-2/
│
├─ server.js
├─ package.json
├─ README.md
└─ src/
├─ app.js
├─ routes/
│ └─ users.routes.js
├─ controllers/
│ └─ users.controller.js
├─ middleware/
│ └─ error.middleware.js
└─ data/
└─ users.js

yaml
Copy code

---

## 📌 API Endpoints

### GET /users
Returns a list of all users.

**Response:**
```json
[]
POST /users
Creates a new user.

Request body:

json
Copy code
{
  "name": "Milos",
  "email": "milos@example.com"
}
Response:

json
Copy code
{
  "message": "newUser created",
  "user": {
    "name": "Milos",
    "email": "milos@example.com"
  }
}
⚠️ Error Handling
If name or email is missing in the request body:

json
Copy code
{
  "status": 400,
  "message": "name and email required"
}
▶️ How to Run the Project
Clone the repository

Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
node server.js
The server runs on:

arduino
Copy code
http://localhost:3000
🧪 Testing
The API was tested using Postman.

🎯 Project Goal
The goal of this project is to understand backend fundamentals such as
API design, routing, controllers, and error handling — concepts that are
directly applicable to Web3 and blockchain backend services.

🧑‍💻 Author
Milos Mirkovic


