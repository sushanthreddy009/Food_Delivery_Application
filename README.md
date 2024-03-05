# Food Delivery Application Using MERN Stack



Welcome to the Food Delivery Application project! This application is a comprehensive solution for online food ordering and delivery, built using the modern MERN stack (MongoDB, Express.js, React.js, Node.js). Designed with both end-users and restaurant administrators in mind, this platform offers a seamless and intuitive experience for browsing menus, placing orders, and managing the delivery process.

## Application Screenshots

### Home Page
![Home Page of the Food Delivery Application](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/image2.jpg)

This screenshot shows the home page of the Food Delivery Application, featuring a user-friendly interface and easy navigation options.

### Registration Page
![Registration Page of the Food Delivery Application](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/Register_Image.jpg)

This image shows the registration page of the Food Delivery Application, featuring a user-friendly form for new users to sign up.

### Add to Cart and Confirm Order Features
![Add to Cart and Confirm Order](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/image%203.jpg?raw=true)

This screenshot highlights the application's "Add to Cart" functionality, allowing users to select their desired food items, and the "Confirm Order" feature, where users review and finalize their orders. These intuitive features enhance the user experience by streamlining the order process.

### Payment Details Interface
![Payment Details](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/image4.jpg)

This screenshot displays the Payment Details interface of the Food Delivery Application. It showcases the seamless and secure process users experience when entering payment information to complete their food orders.

### Order Successful Confirmation
![Order Successful](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/image5.jpg)

This image captures the "Order Successful" page, reassuring customers that their food order has been successfully placed and is being processed. It's a critical part of the user experience, providing immediate feedback and confirmation after an order is made.


### Order Details History
![Order Details History](https://github.com/sushanthreddy009/Food_Delivery_Application/blob/main/Images_Results_Website/image8.jpg)

This screenshot shows the final output of the 'Order Details History' feature in the Food Delivery Application. It provides users with a comprehensive view of their past orders, including details such as order dates, items purchased, and total amounts, enhancing the user's ability to track and manage their orders efficiently.


## Key Features

- User Registration and Authentication: Secure sign-up and login processes, complete with user profile management.

- Menu Browsing: An interactive interface to browse through various restaurant menus and select delicious items.

- Online Ordering System: A streamlined process for placing and managing food orders.

- Location-Based Services: Integration of location services to identify nearby restaurants and available delivery options.

- Payment Integration: Secure payment gateway to handle transactions.

- Real-Time Order Tracking: Live updates on order status for customers.

- Ratings and Reviews: A feedback system for customers to rate and review their dining experiences.

- Admin Panel: A comprehensive dashboard for restaurant owners to manage menus, orders, and view insights.

- Responsive Design: Compatible with various devices for an optimal viewing experience.


# Technology Stack


## Frontend:

- HTML, CSS, JavaScript: The core building blocks of the web interface.

- React.js: A JavaScript library for building dynamic and interactive user interfaces.

- Redux: Used for state management in React applications.

## Backend:

- JavaScript: The primary programming language for backend development.

- Node.js: The JavaScript runtime environment for building the server-side of the application.

- Express.js: A web application framework for Node.js, used for building APIs and web applications.

## Database:

- MongoDB: A NoSQL database used for storing application data.

## Additional Libraries & Tools:

JSON Web Tokens (JWT): For secure user authentication.

Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

React Router: For handling navigation in React applications.

This comprehensive stack ensures a robust, scalable, and interactive web application, catering to the needs of an online food delivery service.

## Getting Started

Prerequisites

Node.js and npm (Node Package Manager)
MongoDB (Local setup or MongoDB Atlas)

# Installation

1. Clone the Repository:

    git clone https://github.com/sushanthreddy009/Food_Delivery_Application.git
  
    cd Food_Delivery_Application

2. Install Backend Dependencies:

    cd backend
    npm install

3. Install Frontend Dependencies:

    cd frontend
    npm install

4. Set Environment Variables:

 - Create a '.env' file in the backend directory.
 - Add necessary configurations (e.g., MongoDB URI, JWT Secret).

5. Run the Application:

- Run the backend server:

   cd backend nodemon run server

    Ensure Nodemon is Installed.
    
    If Nodemon is not installed globally, install it using npm:
    
    npm install -g nodemon


- Run the frontend:
   
  cd frontend npm start

## Running the Application

- Access the application at localhost:3000 (or your configured port) in your web browser.
