📚 Live Support Learning - Frontend

This is the frontend for the Live Support Learning platform built with Next.js 14 App Router, Tailwind CSS, and API Routes.
It allows users to register, login, view dashboard, and manage live classes.

✅ Features
🔒 User Authentication
Register & Login with JWT authentication.
🎥 Live Class Management
Dashboard with list of live classes.
Create new live classes using modal form.
📊 Responsive Dashboard
Sidebar navigation, header, and components.
⚡️ API Routes
api/login → Handle login requests.
api/register → Handle registration.
api/live-class → CRUD for live classes.

🗂️ Project Structure

frontend/
│
├── public/
├── .env                # Environment variables (e.g., BACKEND_URL)
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── login/route.js
    │   │   ├── logout/route.js
    │   │   ├── register/route.js
    │   │   └── live-class/route.js
    │   ├── dashboard/page.js      # Dashboard page
    │   ├── register/page.js       # Register page
    │   ├── start-live/page.js     # Start Live page
    │   ├── layouts.js             # Root layout
    │   └── page.js                # Landing page
    │
    ├── components/
    │   ├── Sidebar.js
    │   ├── Header.js
    │   ├── CreateLiveButton.js
    │   ├── CreateLiveModal.js
    │   ├── LiveList.js
    │   ├── Dashboard.js
    │   ├── Login.js
    │   ├── Register.js
    │   └── SideBarWrapper.js
    │
    └── services/
        ├── authService.js         # Login & Register API calls
        └── liveClassService.js    # CRUD for Live Classes

⚙️ Environment Variables
Create a .env file in your root directory and add your backend URL:

BACKEND_URL=http://localhost:5000
Update this URL to match your deployed backend.

🚀 Getting Started
1. Install dependencies

npm install

2. Run the development server

npm run dev

3. Open http://localhost:3000 with your browser


🗝️ Main Components
CreateLiveButton.js – Opens the modal to add a new live class.
CreateLiveModal.js – Modal form to create live classes.
LiveList.js – Displays the list of live classes for the user.
Sidebar.js – Navigation sidebar with routes.
Header.js – Top bar with user info an.

✨ How it works
Users can register or login.
Authenticated users see their dashboard.
Users can view all live classes they have created.
Users can create new live classes using the modal form.
Onclicking User image in header logout and redirect to login page.

📦 Scripts
npm run dev – Run the app in development mode.
npm run build – Build for production.


📄 Notes
This frontend uses Next.js App Router.
Make sure the backend URL in .env is correct.
Auth tokens are handled via cookies/local storage in authService.js.