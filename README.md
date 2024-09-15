Simple Ticket Management System
A RESTful API built with Node.js and MongoDB that allows users to manage support tickets. 
The API enables basic CRUD (Create, Read, Update, Delete) operations for handling support tickets with fields like title, description, status, creation date, and last updated date.

Prerequisites:
Node.js (v14.x or higher)
MongoDB (locally or hosted on MongoDB Atlas)

Steps:
1- npm init
2- install npm dependencies (express, mongoose, body-parser, dotenv)

Configuration
The configuration is managed via the .env file, where you can set the following variables:

MONGO_URI: Your MongoDB connection string.
PORT: The port on which the application will run (default is 5000).

Features
Create Ticket: Users can create new support tickets.
Read Ticket: Retrieve all support tickets or a single ticket by its unique ID.
Update Ticket: Modify the title, description, or status of a ticket.
Delete Ticket: Remove a ticket from the system.
Status Tracking: Track the status of tickets (open, in-progress, closed).

Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js to build RESTful APIs.
MongoDB: NoSQL database for storing tickets.
Mongoose: MongoDB object data modeling for Node.js.
body-parser: Middleware for parsing incoming request bodies.
dotenv: For managing environment variables.

API Endpoints
Base URL: /api/tickets

1. Create a New Ticket
URL: /api/tickets
Method: POST
Description: Creates a new support ticket.
2. Retrieve All Tickets
URL: /api/tickets
Method: GET
Description: Retrieves all support tickets.
3. Retrieve a Single Ticket
URL: /api/tickets/:id
Method: GET
Description: Retrieves a ticket by its unique ID.
4. Update a Ticket
URL: /api/tickets/:id
Method: PUT
Description: Updates the details of a specific ticket.
5. Delete a Ticket
URL: /api/tickets/:id
Method: DELETE
Description: Deletes a ticket by its unique ID.

Running the Application
Start the server: node server.js

Testing the API - use the Postman
