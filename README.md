### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "Please confirm email"   |
| POST   | /auth/login  | -     | -    | User Sign In          | email, password                                             | token   |
| GET    | /auth/verify | -     | -    | Sign Up Endpoint sends an Email to User and User verifies his email and autologin| -| token   |

### Users Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /users                    | YES   | User  | Get all users                | -                          | [{ users }]                          |
| GET    | /users/:userId            | YES   | User  | Get one user profile         | userId                     | { user }                             |
| GET    | /designs                  | YES   | User  | Get all designs              | -                          | [{ designs }]                        |
| GET    | /users/userId/designs     | YES   | User  | Get designs from a user      | userId                     | [{ designs }]                        |
| GET    | /me                       | YES   | User  | Get self user profile        | -                          | { user }                             |
| PUT    | /me                       | YES   | User  | Update self user             | userId, param_to_update, value | "User updated"                   |
| GET    | /user/:userId/printer     | YES   | -     | Frontend gets user printers  | -                          | [{ printers }]                       |
| GET    | /user/:userId/printer/:printerId/materials | YES  | - | Frontend gets user printer materials | -      | [{ materials }]                      |
| GET    | /user/:userId/software    | YES   | -     | Frontend gets user softwares | -                          | [{ softwares }]                      |
| GET    | /categories               | YES   | User  | Get all categories           | -                          | [{ categories }]                     |
| GET    | /categories/:categoryId   | YES   | User  | Filters a category           | -                          | { categorie }                        |
| POST   | /user/:userId/designs     | YES   | User  | Uploads a design             | designId, description, file| "Design uploaded"                    |

### Admins Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                                                 | RETURNS              |
| ------ | ------------  | ----- | ----  | --------------------- | ----------------------------------------------------------- | -------              |
| PUT    | /users/:userId| YES   | Admin | Update user           | user_id, param_to_update, value                             | "User updated"       |
| DELETE | /users/:id    | YES   | Admin | Remove one user       | user_id                                                     | "Profile deleted"    |
| POST   | /categories   | YES   | Admin | Insert a categorie    | categoryObj                                                 | "Category inserted"  |
| PUT    | /categories   | YES   | Admin | Modify a categorie    | categoryObj, param_to_update, value                         | "Category updated"   |
| DELETE | /categories   | YES   | Admin | Delete a categorie    | categorObj                                                  | "Category deleted"   |
| POST   | /material     | YES   | Admin | Insert a material     | materialObj                                                 | "Material inserted"  |
| PUT    | /material     | YES   | Admin | Modify a material     | materialObj, param_to_update, value                         | "Material updated"   |
| DELETE | /material     | YES   | Admin | Delete a material     | materialObj                                                 | "Material deleted"   |
| POST   | /printer      | YES   | Admin | Insert a printer      | printerObj                                                  | "Printer inserted"   |
| PUT    | /printer      | YES   | Admin | Modify a printer      | printerObj, param_to_update, value                          | "Printer updated"    |
| DELETE | /printer      | YES   | Admin | Delete a printer      | printerObj                                                  | "Printer deleted"    |

