This project is a Node.js API that manages spatial data, including points and polygons, using MongoDB Atlas. The API allows for storing, updating, and retrieving spatial data, and provides endpoints for handling both point and polygon data.

Key Features
Point Data Management:

Store: Add new point data to the database.
Update: Modify existing point data.
Retrieve: Fetch point data based on various query parameters.
Polygon Data Management:

Store: Add new polygon data to the database.
Update: Modify existing polygon data.
Retrieve: Fetch polygon data based on various query parameters.
Technologies Used
Node.js: JavaScript runtime for building the API.
Express: Web framework for building the API endpoints.
MongoDB Atlas: Cloud database for storing spatial data.
Mongoose: ODM library for MongoDB, used to define schemas and interact with the database.
API Endpoints
Point Data Endpoints:

POST /api/points: Store new point data.
PUT /api/points/:id: Update existing point data by ID.
GET /api/points: Retrieve point data with optional query parameters.
Polygon Data Endpoints:

POST /api/polygons: Store new polygon data.
PUT /api/polygons/:id: Update existing polygon data by ID.
GET /api/polygons: Retrieve polygon data with optional query parameters.


IMP - add .env file and add the mongoDBURI to it that consists of username and password to connect with cluster

In .env add these lines,
MONGO_URI=mongodb+srv://abhiramb85:29kLW0bWBALhUyx9@cluster0.ginrf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3000