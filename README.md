#  Leaderboard System - Full Stack App

This is a full-stack **Leaderboard Web App** where users can be added, claim random points (1–10), and rankings update in real-time. It also tracks each user's **claim history**, paginates the leaderboard, and uses **Redux** for global state.


------

##  Features

###  Frontend (React + Redux)
- View leaderboard with pagination
- Claim random points (1–10) per user
- Claim history tracked and displayed
- Redux for state (users, selected user, claim history)
- Centralized API logic in `userAPI.js`
- Responsive and clean UI using TailwindCSS
- Icons and UI enhancements via `react-icons`

### 🔹 Backend (Node.js + Express)
- REST API for users and claim history
- MongoDB models: `User` and `ClaimHistory`
- Pagination logic in `/api/users`
- Points updating logic in `/api/claim/:userId`
- Claim history recording in `/api/claim-history`


-----


# Tech stack and Description
React--->Frontend UI
Redux--->State Management
Node.js--->Backend Runtime
Express.js--->Server & API Framework
MongoDB--->Database
Mongoose--->MongoDB ODM
TailwindCSS--->Styling


---



##  Installation & Run

### Backend Setup
cd server
npm install
npm start

### Frontend Setup
cd client
npm install
npm run dev

# API Endpoints

* Users
GET /api/users?page=1 – Fetch paginated users
POST /api/claim/:userId – Claim random points

* Claim History
GET /api/history/:userId – Get history for user


## Developed by
Mr. Ajay

