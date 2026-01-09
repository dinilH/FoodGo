# FoodGo - Recipe Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing and discovering recipes.

## Features

-  Create, read, update, and delete recipes
-  Search recipes by name or ingredients
-  Responsive design
-  Clean and intuitive user interface

## Tech Stack

### Frontend
- React 19.2.3
- Axios for API calls
- CSS for styling

### Backend
- Node.js with Express 5.2.1
- MongoDB with Mongoose 9.1.2
- CORS enabled
- Environment variables with dotenv

## Project Structure

```
FoodGo/
├── backend/
│   ├── models/
│   │   └── Recipe.js
│   ├── routes/
│   │   └── recipeRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── RecipeForm.js
    │   │   ├── RecipeItem.js
    │   │   ├── RecipeList.js
    │   │   └── SearchBar.js
    │   ├── services/
    │   │   └── recipeService.js
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd FoodGo
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm start
# For development with auto-reload
npm run dev
```

2. Start the frontend (in a new terminal)
```bash
cd frontend
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)
The backend API runs on [http://localhost:5000](http://localhost:5000)

## Available Scripts

### Frontend

#### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

#### `npm test`
Launches the test runner in interactive watch mode

#### `npm run build`
Builds the app for production to the `build` folder

### Backend

#### `npm start`
Starts the server using Node.js

#### `npm run dev`
Starts the server with nodemon for auto-reload during development

## API Endpoints

- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a specific recipe
- `POST /api/recipes` - Create a new recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with Create React App
- Recipe data managed with MongoDB
