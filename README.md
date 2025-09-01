# TutorHunt 🎯

## An Online Tutor Marketplace

**[Live Demo](https://tutor-hub-2025.web.app)**

TutorHunt is a full-stack web application designed to connect students with qualified tutors from around the globe. Built with the **MERN stack**, the platform provides a dynamic and secure environment for users to find, book, and manage language tutors. Whether you're a student looking to learn a new language or a tutor aiming to share your knowledge, TutorHunt offers a seamless and intuitive experience.



## ✨ Key Features

  * **Authentication & Authorization**: Secure user management with **JWT authentication** for registered users.

      * Basic login and signup functionality with email and password.
      * **Google Sign-In** for quick and easy access.
      * Private routes ensure that only authorized users can access specific pages like "Add Tutors" and "My Tutors".

  * **Dynamic Homepage**: A rich and engaging landing page.

      * **Hero Slider**: A captivating image slider with a prominent Call-to-Action (CTA) button.
      * **Statistics Section**: Displays real-time data on the number of tutors, students, and languages available on the platform.
      * **Language Categories**: A section with clickable cards that filter tutors by language, providing an easy way to browse.

  * **Tutor Management**: Comprehensive CRUD operations for tutors.

      * **Add Tutors**: Registered users can add new tutors by filling out a form with details like name, image, language, and pricing.
      * **Find Tutors**: A public page that lists all available tutors. It includes a search bar to find tutors by language and dynamic pagination for a smooth browsing experience.
      * **Tutor Details Page**: A private page that provides in-depth information about a specific tutor, including their description, pricing, and image.
      * **My Tutors**: A private dashboard where users can view, update, and delete the tutors they've added.

  * **Booking and Reviews**: A user-centric booking and feedback system.

      * **Booking System**: Registered students can book a tutor from the details page, saving the booking information to the database.
      * **My Booked Tutors**: A private page displaying all the tutors a student has booked.
      * **Review Feature**: A "Review" button on the booked tutors page allows students to add a review, which increments a counter on the tutor's profile.

  * **User Interface**:

      * **Light/Dark Theme Toggle**: A seamless theme switching feature is implemented across the entire website for enhanced accessibility and user comfort.
      * **Responsive Design**: The website is built to be fully responsive, ensuring a great experience on any device.



## 🛠️ Technologies Used

### Frontend

  * **React.js**: A JavaScript library for building user interfaces.
  * **Axios**: Promise-based HTTP client for making API requests.
  * **React Router**: For client-side routing.
  * **Tailwind CSS & DaisyUI**: A utility-first CSS framework and a component library for rapid and elegant styling.
  * **React Icons**: For a wide variety of vector-based icons.
  * **React Hot Toast**: For simple and accessible toast notifications.

### Backend

  * **Node.js & Express.js**: A fast, unopinionated, minimalist web framework for building APIs.
  * **MongoDB**: A NoSQL database for storing application data.
  * **JSON Web Tokens (JWT)**: For secure and stateless authentication.

### Deployment & Services

  * **Firebase**: Used for deployment and user authorization.
  * **NPM Packages**: Various other npm packages were used to handle specific features and secure environment variables.



## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/programmerjewel/TutorHunt-frontend.git
    cd TutorHunt
    ```

2.  **Install dependencies** for both the frontend and backend:

    ```bash
    # For the frontend
    cd client
    npm install

    # For the backend
    cd ../server
    npm install
    ```

3.  **Set up environment variables:**

      * Create a `.env` file in the `server` directory.
      * Add your MongoDB URI, JWT secret, and any other necessary variables.

4.  **Run the application:**

    ```bash
    # Run the backend server
    npm start

    # In a separate terminal, run the frontend
    cd ../client
    npm run dev
    ```

\<br\>

## 🤝 Contributing

Contributions are welcome\! If you find a bug or have a suggestion for a new feature, please open an issue or submit a pull request.
