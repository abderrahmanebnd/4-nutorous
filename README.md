# Natours Project

Natours is a comprehensive tour booking application built using Node.js, Express, and MongoDB. It was developed as part of Jonas Schmedtmann's [Node.js course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) on Udemy. The application serves as a backend project to demonstrate advanced Node.js concepts, RESTful APIs, authentication, and deployment techniques.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **RESTful API**: Built following best practices for designing RESTful APIs.
2. **Authentication and Authorization**:
   - JWT-based authentication.
   - Role-based access control for users, guides, and admins.
3. **Tour Management**:
   - CRUD operations for tours.
   - Geo-spatial queries to find tours within a specific radius.
4. **User Management**:
   - Secure sign-up and login.
   - Password reset via email.
5. **Advanced Features**:
   - Data sanitization and rate limiting for enhanced security.
   - Aggregation pipelines for advanced data filtering and statistics.
   - Stripe integration for secure payments.
6. **Deployment**:
   NOT YET 😶

---

## Technologies

The project utilizes modern web technologies:

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT), bcrypt.js
- **Payment Integration**: Stripe
- **Email**: Nodemailer with SendGrid
- **Development Tools**: ESLint, Prettier, Postman for API testing

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abderrahmanebnd/4-nutorous.git
   cd 4-nutorous
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following keys:
   ```env




   NODE_ENV=development
   PORT=3000
   DATABASE=<your-mongodb-connection-string>
   DATABASE_PASSWORD=<your-database-password>
   JWT_SECRET=<your-jwt-secret>
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90
   EMAIL_USERNAME=<your-email-username>
   EMAIL_PASSWORD=<your-email-password>
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT = 25
   ```

4. Run the development server:
   ```bash
   npm run start:dev
   ```

## Usage

- **Users**: Sign up, log in, book tours, and manage bookings.
- **Admin**: Manage users, tours, reviews, and bookings.
- Use Postman or similar tools to interact with the API endpoints during development.

---


## Contributing
Contributions are welcome! Feel free to submit a pull request or report issues.

## Acknowledgements

- Special thanks to Jonas Schmedtmann for providing the course and guidance to build this project.

```

