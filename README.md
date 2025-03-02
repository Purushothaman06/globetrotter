# Globetrotter - Travel Guessing Game

Globetrotter is a full-stack MERN (MongoDB, Express, React, Node.js) travel guessing game that provides AI-generated clues, fun facts, and trivia to challenge players.

## **Features**
- Random destination selection with clues
- Fun facts and trivia about each location
- Score tracking and feedback system
- Multiplayer invite functionality (coming soon)
- AI-generated clues (future enhancement)

## **Tech Stack**
- **Frontend:** React, Vite, Axios, React Router, Confetti
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Deployment:** Render (Backend), Vercel (Frontend)

---

## **1. Backend Setup**
### **Installation**
```bash
# Clone the repository
git clone https://github.com/Purushothaman06/globetrotter.git
cd globetrotter/globetrotter-backend

# Install dependencies
npm install

# Create a .env file and add your MongoDB connection string
MONGO_URI=your_mongo_connection_string

# Start the backend server
npm start
```
The backend will run on `http://localhost:5000/`

### **API Endpoints**
| Method | Endpoint                 | Description                |
| ------ | ------------------------ | -------------------------- |
| GET    | /api/destinations/random | Fetch a random destination |

### **Database Seeding**
To populate MongoDB with initial destinations:
```bash
node config/seeder.js
```

---

## **2. Frontend Setup**
### **Installation**
```bash
cd ../globetrotter-frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev
```
The frontend will run on `http://localhost:5173/`

### **Environment Variables**
Create a `.env` file in the frontend folder and add:
```
VITE_BACKEND_URL=http://localhost:5000
```

### **Usage**
- Enter a guess based on the clue provided.
- Receive instant feedback and fun facts.
- Continue playing and improve your travel knowledge!

---

## **Deployment**
### **Backend Deployment (Render)**
1. Push your backend code to GitHub.
2. Create a new **web service** on [Render](https://render.com/).
3. Connect to the GitHub repository.
4. Set environment variables (`MONGO_URI`).
5. Deploy the project.

### **Frontend Deployment (Vercel)**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the frontend:
   ```bash
   vercel
   ```

---

## **Future Enhancements**
- Leaderboard system
- Multiplayer mode
- AI-enhanced question generation
- More destinations and challenges

---

## **Contributing**
Feel free to contribute by submitting a pull request or reporting an issue!

**Author:** Your Name  
**GitHub:** [Copernicus](https://github.com/Purushothaman06)

