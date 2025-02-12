
# WhereIsIt - Lost and Found Website  

## Project Overview  

WhereIsIt is a Lost and Found platform designed to help individuals recover their lost items by connecting them with those who may have found them. This web application allows users to report lost items, browse found items, and interact to recover their belongings. It is built with React for the front-end and Node.js for the back-end, offering a full-stack solution with a MongoDB database.  

## Live URL  
[https://whereisit-21db1.web.app/](https://whereisit-21db1.web.app/)  

---

## Key Features  

- **User Authentication**: Login/Registration via email & password, or Google/GitHub login.  
- **Lost & Found Items Management**: Users can add, update, and delete lost or found items.  
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices.  
- **Profile Management**: Displays user’s profile picture and name on hover when logged in.  
- **Post Recovery**: Users can mark items as recovered and update the item’s status.  
- **Interactive UI**: Animations and transitions using Framer Motion.  
- **Search and Filter**: Search and filter lost/found items by category and title.  

---

## Tech Stack  

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Firebase  
- **Animations**: Framer Motion  
- **Modern JavaScript**: ES6 Syntax  

---

## How to Run Locally  

### Prerequisites  

Before running the project locally, ensure you have the following installed on your machine:  

- [Node.js](https://nodejs.org/en/) (v14 or higher)  
- [npm](https://www.npmjs.com/) (or **yarn**)  
- [MongoDB](https://www.mongodb.com/try/download/community) (For local database setup or use MongoDB Atlas)  
- A Firebase Project (For authentication)  

---

### Step-by-Step Guide  

### 1️⃣ Clone the Repository  
Open your terminal and run:  

```sh
git clone https://github.com/your-username/whereisit.git
```

Then, navigate to the project folder:  

```sh
cd whereisit
```

---

### 2️⃣ Install Dependencies  
Run the following command to install all required dependencies for both the **client** and **server**:  

#### For the client:  

```sh
cd client
npm install
```

#### For the server:  

```sh
cd ../server
npm install
```

---

### 3️⃣ Configure Environment Variables  

Create a `.env` file in both the **client** and **server** folders and add the following credentials:  

#### **Client-side (`client/.env`)**  

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=http://localhost:5000
```

#### **Server-side (`server/.env`)**  

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

---

### 4️⃣ Start the Backend Server  

Inside the `server` directory, start the backend:  

```sh
npm run dev
```

You should see a message like:  

```
Server is running on http://localhost:5000
```

---

### 5️⃣ Start the Frontend  

Inside the `client` directory, start the frontend:  

```sh
npm run dev
```

It will launch the project at:  

```
http://localhost:5173
```

---

### 6️⃣ Access the Application  
Once both the backend and frontend are running:  

- Open your browser and go to `http://localhost:5173`  
- Sign up or log in using Firebase authentication.  
- Report lost/found items and explore the platform.  

---
