### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "Please confirm email"   |
| POST   | /auth/login  | -     | -    | User Sign In | email, password                                             | token   |
| POST   | /auth/verify | YES   | -    | Sign Up Endpoint sends an Email to User and User verifies his email | token |

### Users Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /users                    | YES   | User | Get all users                | -                          | [{ users }]                          |
| GET    | /users/:userId            | YES   | User | Get one user                 | user_id                    | { user }                             |
| PUT    | /users/:userId            | YES   | User | Update user                  | user_id                    | "User updated"                       |
| DELETE | /users/:id                | YES   | User | Remove one user              | user_id                    | "Profile deleted"                    |
| DELETE | /users/:id                | YES   | Admin | Remove one user              | user_id                    | "Profile deleted"                    |

### Admins Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ----  | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -     | User Sign Up          | user_name, email, phone, date_of_birth, password, confirm_password, address, | token   |
| POST   | /auth/login  | -     | -     | Delete skills form DB | email, password                                             | token   |
| PUT    | /users/:userId| YES  | Admin | Update user          | user_id                                                     | "User updated"|
| DELETE | /users/:id   | YES   | Admin | Remove one user      | user_id                                                     | "Profile deleted"|
