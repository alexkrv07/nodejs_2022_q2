# simple-crud-api

## How to run
1. Download and install latest LTS version of [Node.js](https://nodejs.org/en/). (Version 16.15.1 is required!)
2. Clone this repository: `git@github.com:alexkrv07/nodejs_2022_q2.git`
4. Go to folder nodejs_2022_q2: `nodejs_2022_q2`
5. Checkout branch: `git checkout origin/simple-crud-api`
6. Run `npm install` in your terminal
6. Run program in development mode `npm run start:dev`
7. Run program in production mode `npm run start:prod`
8. To exit, enter ```ctrl + c```.

## Usage

Default url for this app `localhost:3000`

### Methods

The CRUD API supports 4 methods:

- GET `/api/users` or `/api/users/${userId}` returns all users or a user with corresponding `userId`
- POST `/api/users` is used to create a record about a new user and store it in the database
- PUT `/api/users/${userId}` is used to update a record about an existing user
- DELETE `/api/users/${userId}` is used to delete a record about an existing user from the database

### User's data and user's properties types and required properties
Users are stored as objects that have following properties:

- `id` — a unique identifier (string, uuid) generated on a server side
- `name` — user's name (string, **required**)
- `age` — user's age (number, **required**)
- `hobbies` — user's hobbies (array of strings or empty array, **required**)
