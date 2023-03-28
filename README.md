### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "Please confirm email"   |
| POST   | /auth/login  | -     | -    | User Sign In          | email, password                                             | token   |
| GET    | /auth/verify | -     | -    | Sign Up Endpoint sends an Email to User and User verifies his email and autologin| -| token   |


### User Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET--    | /user                     | YES   | User  | Get all users                | -                          | [{ users }]                          |
| GET--    | /user/:userId             | YES   | User  | Get one user profile         | userId                     | { user }                             |
| GET    | /user/userId/designs      | YES   | User  | Get designs from a user      | userId                     | [{ designs }]                        |
| GET    | /user/:userId/printer     | YES   | -     | Frontend gets user printers  | -                          | [{ printers }]                       |
| GET    | /user/:userId/printer/:printerId/materials | YES  | - | Frontend gets user printer materials | -      | [{ materials }]                      |
| GET    | /user/:userId/software    | YES   | -     | Frontend gets user softwares | -                          | [{ softwares }]                      |
| POST   | /user/:userId/designs     | YES   | User  | Uploads a design             | designId, description, file| "Design uploaded"                    |
| POST--   | /admin/users              | YES   | Admin | Create a user                | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "User created"    |
| PUT--    | /admin/users/:userId      | YES   | Admin | Update user                  | user_id, param_to_update, value | "User updated"       |
| DELETE-- | /admin/users/:userId      | YES   | Admin | Remove one user              | user_id                    | "Profile deleted"    |


### Me Endpoint

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /me                       | YES   | User  | Get self user profile        | -                          | { user }                             |
| PUT    | /me                       | YES   | User  | Update self user             | userId, param_to_update, value | "User updated"                   |


### Designs Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                     |
| ------ | ------------- | ----- | ----- | ---------------------------- | -------------------------- | --------------------------- |
| GET    | /designs      | YES   | User  | Get all designs              | -                          | [{ designs }]               |
| POST   | /designs      | YES   | Admin | Insert a design              | designObj                  | "Design inserted"           |
| PUT    | /designs      | YES   | Admin | Modify a design              | designObj, param_to_update, value | "Design updated"     |
| DELETE | /designs      | YES   | Admin | Delete a design              | designObj                  | "Design deleted"            |


### Categories Endponts

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /categories               | YES   | User  | Get all categories           | -                          | [{ categories }]                     |
| GET    | /categories/:categoryId   | YES   | User  | Filters a category           | -                          | { categorie }                        |
| POST   | /categories               | YES   | Admin | Insert a categorie           | categoryObj                | "Category inserted"                  |
| PUT    | /categories               | YES   | Admin | Modify a categorie           | categoryObj, param_to_update, value | "Category updated"          |
| DELETE | /categories               | YES   | Admin | Delete a categorie           | categorObj                 | "Category deleted"                   |


### Printers Endpoints

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                        | RETURNS                              |
| ------ | ----------------- | ----- | ----- | --------------------- | ---------------------------------- | ------------------------------------ |
| POST   | /printers         | YES   | Admin | Insert a printer      | printerObj                         | "Printer inserted"                   |
| PUT    | /printers         | YES   | Admin | Modify a printer      | printerObj, param_to_update, value | "Printer updated"                    |
| DELETE | /printers         | YES   | Admin | Delete a printer      | printerObj                         | "Printer deleted"                    |


### Materials Endpoints

| METHOD | ENDPOINT          | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                         | RETURNS                    |
| ------ | ----------------- | ----- | ----- | --------------------- | ----------------------------------- | -------------------------- |
| POST   | /materials        | YES   | Admin | Insert a material     | materialObj                         | "Material inserted"        |
| PUT    | /materials        | YES   | Admin | Modify a material     | materialObj, param_to_update, value | "Material updated"         |
| DELETE | /materials        | YES   | Admin | Delete a material     | materialObj                         | "Material deleted"         |


