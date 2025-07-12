# Skill Swap Backend

A clean, modular Node.js + Express.js backend for a Skill Swap platform, following **Single Responsibility Principle** complete Postman-ready endpoint documentation.

---

## 📦 Project Structure
```
.
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── swapController.js
│   ├── feedbackController.js
│   └── adminController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Swap.js
│   ├── Feedback.js
│   └── Notification.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── swapRoutes.js
│   ├── feedbackRoutes.js
│   └── adminRoutes.js
│
├── seed/
│   └── seedAdmin.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 📌 .gitignore
```
/node_modules
.env
logs
*.log
npm-debug.log*
.DS_Store
Thumbs.db
.vscode/
.idea/
/dist
/build
```

---

## 📦 Install Dependencies
```bash
npm install
```

## 📦 Run Server
```bash
npm run dev
```

---

## 📌 API Endpoints (Base URL: `http://localhost/api`)

### 🔐 Auth Routes
- `POST /auth/register`  → Register user
- `POST /auth/login`     → Login user

### 👤 User Routes
- `GET /users/:userId`        → Get user profile
- `PATCH /users/:userId`      → Update profile
- `PATCH /users/:userId/togglePublic` → Toggle public/private
- `GET /users?skill=Flutter`  → Search users by skill

### 🔄 Swap Routes
- `POST /swaps`               → Send swap request
- `GET /swaps/:userId`        → Get user's swap requests
- `PATCH /swaps/:swapId`      → Update swap status
- `DELETE /swaps/:swapId`     → Delete swap request

### 💬 Feedback Routes
- `POST /feedback`            → Leave feedback
- `GET /feedback/:userId`     → Get user feedback

### 📢 Notification Routes
- `GET /notifications`        → Get all notifications

### 🛡️ Admin Routes
- `PATCH /admin/ban/:userId`  → Ban user
- `POST /admin/notifications` → Create notification


---

## 📌 Seed Admin User
```bash
node seed/seedAdmin.js
```
**Default Credentials:**
- Email: `admin@skillswap.com`
- Password: `Admin@123`

---
