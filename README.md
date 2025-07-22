# 🏞️ Natours API

A robust RESTful API for managing tour-related data like locations, users, bookings, and reviews. Built using the **Node.js + Express + MongoDB** stack and designed for scalability, security, and performance.

---

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (Environment config)
- JWT Authentication
- Multer + Sharp (Image uploads)
- Stripe API (for payments)
- Swagger/OpenAPI (optional docs)
- Mongoose Aggregation, Geospatial queries
- Helmet, Rate Limiting, Data Sanitization (Security)

---

## 📁 Folder Structure

```
natours-api/
├── controllers/        → Business logic for routes
├── models/             → Mongoose schemas for Tour, User, Review
├── routes/             → Express routes (modular)
├── utils/              → Custom error handlers, helpers
├── public/             → Static assets
├── config.env          → Environment variables
├── app.js              → Express app config
├── server.js           → App entry point
└── README.md           → Project documentation
```

---

## 🚀 Getting Started

### 🔧 1. Clone the repo

```bash
git clone https://github.com/your-username/natours-api.git
cd natours-api
```

### 📦 2. Install dependencies

```bash
npm install
```

### 🔐 3. Create `.env` file

```env
NODE_ENV=development
PORT=3000

# If you are using mongodb Atlas
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.nod8l.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority
# If you are using mongodb in your local pc
DATABASE_LOCAL=mongodb://127.0.0.1:27017/<DATABASE_NAME>

# You can keep passsword ans username empty if you are using it on your local pc
DATABASE_USERNAME=your actual username
DATABASE_PASSWORD=your actual aassword
DATABASE_NAME=your actual database name

JWT_SECRET=my-ultra-secure-and-ultra-long-secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=

EMAIL_FROM=
```

### ▶️ 4. Run in development

```bash
npm run start:dev
```

For production:

```bash
npm start
```

---

## 🧪 Scripts

```bash
npm run start         # Start app in production
npm run start:dev     # Start app in development with nodemon
npm test              # Run test suite (if implemented)
```

---

## 🔗 API Routes Overview

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/v1/tours`        | Get all tours                |
| GET    | `/api/v1/tours/:id`    | Get a tour by ID             |
| POST   | `/api/v1/tours`        | Create a new tour            |
| PATCH  | `/api/v1/tours/:id`    | Update an existing tour      |
| DELETE | `/api/v1/tours/:id`    | Delete a tour                |
| POST   | `/api/v1/users/signup` | Create new user account      |
| POST   | `/api/v1/users/login`  | Login user                   |
| GET    | `/api/v1/users/me`     | Get current user profile     |

Swagger-style docs (if set up):  
👉 `http://localhost:3000/api-docs`

---

## 📸 File Uploads

- Upload user and tour images using `Multer`
- Images resized using `Sharp`

---

## 🛡️ Security Features

- HTTP headers using `Helmet`
- Rate limiting (100 reqs/hour)
- Data sanitization against NoSQL injection
- XSS protection
- CORS enabled

---

## 🌐 Deployment

You can deploy this API to platforms like:
- Render
- Railway
- Heroku (legacy)
- Vercel (as backend functions)

> Make sure to configure `config.env` and database access accordingly.

---

## ✅ Testing

Add your test cases using tools like:
- Mocha + Chai
- Supertest (for HTTP testing)

Example:

```bash
npm install --save-dev mocha chai supertest
```

---

## 📄 License

Licensed under the **MIT License**.

---

## 👨‍💻 Author

Gaurav Sharma — [@gsharma101](https://github.com/gsharma101)

---

## 🙌 Support

Give this repo a ⭐️ if you found it helpful!
