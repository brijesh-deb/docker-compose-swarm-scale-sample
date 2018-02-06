## Multi-container, multi-host app using Docker Compose and Docker Swarm
This sample shows how Docker Compose and Docker Swarm can be used for multi-container, multi-host app. Two containers include 1) NodeJS app 2) HAProxy

### Local deployment
- Download this sample SpringBoot application
- Database setup 
  - Access local Postgres using phpPgAdmin
  - Create a table "user_form" in public schema
    - id/bigint
    - column1/text
    - column2/text
    - column3/text
    - column4/text
  - Insert some dummy data 
- Uncomment section of application.properties marked for local deployment  
- Run the application locally and test [http://localhost:8080/data/userForms]
