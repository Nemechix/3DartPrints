### Auth Endpoints

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------ | ----- | ---- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup | -     | -    | User Sign Up          | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "Please confirm email"   |
| POST   | /auth/login  | -     | -    | User Sign In          | email, password                                             | token   |
| GET    | /auth/verify | -     | -    | Sign Up Endpoint sends an Email to User and User verifies his email and autologin| -| token   |


### User Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET--√ | /user                     | YES   | User  | Get all users                | -                          | [{ users }]                          |
| GET--√ | /user/:userId             | YES   | User  | Get one user profile         | userId                     | { user }                             |
| GET--√ | /user/:userId/designs     | YES   | User  | Get designs from a user      | userId                     | [{ designs }]                        |
| GET--√ | /user/:userId/printer     | YES   | -     | Frontend gets user printers  | -                          | [{ printers }]                       |
| GET--  | /user/:userId/printer/:printerId/materials | YES  | - | Frontend gets user printer materials | -      | [{ materials }]                      |
| GET    | /user/:userId/software    | YES   | -     | Frontend gets user softwares | -                          | [{ softwares }]                      |
| POST   | /user/:userId/designs     | YES   | User  | Uploads a design             | designId, description, file| "Design uploaded"                    |
| GET    | /user/me                  | YES   | User  | Get self user profile        | -                          | { user }                             |
| PUT    | /user/me                  | YES   | User  | Update self user             | userId, param_to_update, value | "User updated"                   |
| DELETE | /user/me                  | YES   | User  | Delete self user             | -                          | "Profile deleted"                    |
| POST-- | /user                     | YES   | Admin | Create a user                | user_name, phone, email, date_of_birth, password, confirm_password, printer (DEFAULT NULL) designer (DEFAULT NULL) | "User created"    |
| PUT--  | /user/:userId             | YES   | Admin | Update user                  | user_id, param_to_update, value | "User updated"                  |
| DELETE-| /user/:userId             | YES   | Admin | Remove one user              | user_id                    | "Profile deleted"                    |


### Designs Endpoints

| METHOD | ENDPOINT            | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                     |
| ------ | ------------------- | ----- | ----- | ---------------------------- | -------------------------- | --------------------------- |
| GET --   | /design             | YES   | User  | Get all designs              | -                          | [{ designs }]               |
| GET --   | /design/:designId   | YES   | User  | Get one design               | -                          | { designs }                 |
| POST --  | /design/:designId   | YES   | User  | Upload a design              | designObj                  | "Design inserted"           |
| PUT --   | /design/:designId   | YES   | User  | Update a design              | designObj, param_to_update, value | "Design updated"     |
| DELETE -- | /design/:designId   | YES   | User  | Delete a design              | -                          | "Design deleted"            |
| POST  -- | /design/:designId   | YES   | Admin | Insert a design              | designObj                  | "Design inserted"           |
| PUT  --  | /design/:designId   | YES   | Admin | Modify a design              | designObj, param_to_update, value | "Design updated"     |
| DELETE -- | /design/:designId   | YES   | Admin | Delete a design              | designObj                  | "Design deleted"            |


### Categories Endponts

| METHOD | ENDPOINT                 | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------ | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET --   | /categorie               | YES   | User  | Get all categories           | -                          | [{ categories }]                     |
| GET --   | /categorie/:categoryId   | YES   | User  | Get a category               | -                          | { categorie }                        |
| POST --  | /categorie               | YES   | Admin | Insert a categorie           | categoryObj                | "Category inserted"                  |
| PUT --   | /categorie               | YES   | Admin | Modify a categorie           | categoryObj, param_to_update, value | "Category updated"          |
| DELETE -- | /categorie               | YES   | Admin | Delete a categorie           | categorObj                 | "Category deleted"                   |


### Printers Endpoints

| METHOD | ENDPOINT            | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                        | RETURNS                              |
| ------ | ------------------- | ----- | ----- | --------------------- | ---------------------------------- | ------------------------------------ |
| GET --   | /printer            | YES   | Admin | Get all printers      | -                                  | [{ printers }]                       |
| GET --   | /printer/:printerId | YES   | Admin | Get a printer         | -                                  | { printer }                          |
| POST --  | /printer            | YES   | Admin | Insert a printer      | printerObj                         | "Printer inserted"                   |
| PUT  --  | /printer            | YES   | Admin | Modify a printer      | printerObj, param_to_update, value | "Printer updated"                    |
| DELETE -- | /printer            | YES   | Admin | Delete a printer      | printerObj                         | "Printer deleted"                    |


### Materials Endpoints

| METHOD | ENDPOINT              | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                         | RETURNS                    |
| ------ | --------------------- | ----- | ----- | --------------------- | ----------------------------------- | -------------------------- |
| GET --   | /material             | YES   | Admin | Get all materials     | -                                   | [{ materials }]            |
| GET --   | /material/:materialId | YES   | Admin | Get a material        | -                                   | { material }               |
| POST --  | /material             | YES   | Admin | Insert a material     | materialObj                         | "Material inserted"        |
| PUT --   | /material             | YES   | Admin | Modify a material     | materialObj, param_to_update, value | "Material updated"         |
| DELETE -- | /material             | YES   | Admin | Delete a material     | materialObj                         | "Material deleted"         |


### Software Endpoints

| METHOD | ENDPOINT              | TOKEN | ROLE  | DESCRIPTION           | POST PARAMS                         | RETURNS                    |
| ------ | --------------------- | ----- | ----- | --------------------- | ----------------------------------- | -------------------------- |
| GET    | /software             | YES   | Admin | Get all softwares     | -                                   | [{ softwares }]            |
| GET    | /software/:softwareId | YES   | Admin | Get a software        | -                                   | { software }               |
| POST   | /software             | YES   | Admin | Insert a software     | softwareObj                         | "Software inserted"        |
| PUT    | /software             | YES   | Admin | Modify a software     | softwareObj, param_to_update, value | "Software updated"         |
| DELETE | /software             | YES   | Admin | Delete a software     | softwareObj                         | "Software deleted"         |

