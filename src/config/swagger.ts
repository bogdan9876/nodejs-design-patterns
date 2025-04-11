const swaggerOptions = {
  "openapi": "3.0.0",
  "info": {
    "title": "Booking API",
    "version": "1.0.0",
    "description": "API documentation using Swagger"
  },
  "paths": {
    "/api/user": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "List of users"
          }
        }
      },
      "post": {
        "summary": "Create a new user",
        "responses": {
          "200": {
            "description": "User created"
          }
        }
      }
    },
    "/api/user/{id}": {
      "get": {
        "summary": "Get a user by ID",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "User ID"
          }
        ],
        "responses": {
          "200": {
            "description": "User data"
          }
        }
      },
      "put": {
        "summary": "Update a user by ID",
        "responses": {
          "200": {
            "description": "User updated"
          }
        }
      },
      "delete": {
        "summary": "Delete a user by ID",
        "responses": {
          "204": {
            "description": "User deleted"
          }
        }
      }
    }
  }
}

export default swaggerOptions;