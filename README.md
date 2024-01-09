Event Ticketing System
Introduction
The Event Ticketing System is a web application designed to facilitate the authorized purchase of event tickets while maintaining data integrity. This platform ensures a seamless experience for both event organizers and attendees.

Features
User authentication and authorization for secure ticket transactions.
Event creation and management with real-time updates.
Easy ticket purchasing and selling functionality.
Integration with MySQL database for data storage and retrieval.
Tech Stack
React (Frontend)
Motoko (Backend)
MySQL (Database)
Getting Started
Prerequisites
Ensure you have the following software installed:

Node.js: Download Node.js
npm (Node Package Manager): Install npm
Installation
Clone the repository:

git clone https://github.com/Bonfacekiprop/Event_Booking
Configuration
Before running the application, configure the following:

Set environment variables for authentication and database connection.

Contributing
We welcome contributions from the community. To contribute to the project, follow these steps:

Fork the project.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add new feature'.
Push to the branch: git push origin feature-name.
Submit a pull request.
For major changes, please open an issue first to discuss the proposed changes.
License
This project is licensed under the MIT License.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`NODE_ENV` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.NODE_ENV` in the autogenerated declarations
- Write your own `createActor` constructor