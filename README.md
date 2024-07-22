# chatapp-2024

# MERN Stack Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to register, log in, and participate in chat rooms.

## Project Structure

The project follows the Model-View-Controller (MVC) pattern and has the following structure:

- `client/`: Contains the React front-end code.
- `server/`: Contains the Node.js back-end code and Express.js server.
- `config/`: Contains configuration files, such as database configuration.
- `models/`: Defines data models for MongoDB.
- `routes/`: Defines API routes.
- `controllers/`: Contains the logic for handling requests and responses.
- `services/`: Contains service functions for business logic.

## Setup

### Server

1. **Navigate to the Server Directory:**

   ```bash
   cd server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `server/` directory and add the following variables:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/chatapp
   JWT_SECRET=your_jwt_secret
   ```

   - **`MONGO_URI`**: Connection string for MongoDB.
   - **`JWT_SECRET`**: Secret key for JWT authentication.

4. **Start the Server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

### Client

1. **Navigate to the Client Directory:**

   ```bash
   cd client
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Client:**

   ```bash
   npm start
   ```

   The client will run on `http://localhost:3000`.

## Features

- **User Authentication**: Register and log in using JWT.
- **Real-Time Chat**: Send and receive messages in real-time.
- **Chat Rooms**: Join and create chat rooms for different topics.

## API Endpoints

### User Registration

**Endpoint:** `POST /api/users/register`

**Request Body:**

```json
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
```

### User Login

**Endpoint:** `POST /api/users/login`

**Request Body:**

```json
{
  "email": "user1@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

### Get Chat Rooms

**Endpoint:** `GET /api/chatrooms`

**Response:**

```json
[
  {
    "id": "room1",
    "name": "General Chat"
  },
  {
    "id": "room2",
    "name": "Technology"
  }
]
```

### Send Message

**Endpoint:** `POST /api/messages`

**Request Body:**

```json
{
  "roomId": "room1",
  "message": "Hello, World!"
}
```

### Receive Messages

**Endpoint:** `GET /api/messages/:roomId`

**Response:**

```json
[
  {
    "user": "user1",
    "message": "Hello, World!",
    "timestamp": "2024-07-22T12:34:56Z"
  }
]
```

## Development

- **Run Tests:** Tests can be added in the `tests/` directory. Use `npm test` to run them.
- **Lint Code:** Use `npm run lint` to check code quality and style.

## Contributing

Feel free to fork the repository, make changes, and submit a pull request. Please follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- MERN stack for providing a robust framework for web applications.
- Socket.io for real-time communication.
- MongoDB Atlas for hosting the database (if applicable).

