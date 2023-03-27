### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, email, date_of_birth, password, confirm_password | token   |
| POST   | /auth/login  | -     | -    | Delete skills form DB | email, password                                             | token   |

### Users Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /users                    | YES   | Admin | Get all users                | -                          | [{ users }]                          |
| GET    | /users/:userId            | YES   | Admin | Get one user                 | user_id                    | { user }                             |
| PUT    | /users/:userId            | YES   | Admin | Update user                  | user_id                    | "User updated"                       |
| DELETE | /users/:id                | YES   | Admin | Remove one user              | user_id                    | "Profile deleted"                    |

### Admins Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, email, date_of_birth, password, confirm_password | token   |
| POST   | /auth/login  | -     | -    | Delete skills form DB | email, password                                             | token   |
