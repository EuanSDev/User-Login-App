Getting Started

Ensure you have node js installed
Both the front and backend were made with node: v22.14.0

Backend:
1. open a terminal and cd into the backend folder and run npm i to install the dependencies
2. make a copy of .env.example and call it .env
3. sign up to https://www.mongodb.com/
4. once signed up create a cluster
5. within the cluster create a database e.g. node_user_login_app with a collection called users
6. Ensure you have added your IP address to the IP access list with mongodb under Security - Network access
7. Under database - clusters, click connect on the cluster you just created, it should then allow you to copy a connection string
8. Going back to the backend .env file add the connection string under MONGO_URI and ensure to add your db_password to the connection string
9. Add the database name you created within the cluster with .env under MONGO_DB for example: node_user_login_app
10. Next visit https://jwtsecret.com/generate and generate a token, copy and paste that to the .env file under JWT_SECRET
11. Add a port to the .env file under PORT for example: 8000
12. Within the termianl run `npm run dev` to run the server in development mode or `npm run start` to run it in production
13. The backend should now setup

Frontend:
1. Within a seperate terminal to the backend cd into frontend folder and run npm i to install the dependencies
2. Make a copy of the .env.example file and name it .env, then add the backend URL to NEXT_PUBLIC_BACKEND_API for example: http://localhost:8000
3. To run the site in development run `npm run dev`, to run it in production first run `npm run build` and then `npm run start`
4. The frontend should now be setup and you should be able to visit it on http://localhost:3000 (or whatever PORT nextjs chose to serve it on)
5. If you want to run tests, open another terminal and cd into the frontend folder, then run `npm run test`