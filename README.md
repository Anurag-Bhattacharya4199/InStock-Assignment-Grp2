Steps to Run Our Full Application

1) You would need to run the Server Application from GitHub Repo: https://github.com/Tsedhondup/in-stock-assignment-grp-2-API first
2) To Run Server Application:
   1) To install all packages, run npm i or npm install
   2) Create .env file, which includes the Server Port, Cors_Origin URL, which is client application url, DB Information. Sample .env includes in .env.sample
   3) To Create the necessary SQL Database tables, run command "run migrate", which creates the necessary tables, warehouses and inventories
   4) To Add the Data needed for the SQL Database, run command "run seed", which adds the necessary data to tables, warehouses and inventories
   5) To Run Server Application, run command "npm run dev"
   6) The Server Application is now Running

3) Now that Server Application is running, The Client Application can be found from GitHub Repo: https://github.com/Anurag-Bhattacharya4199/InStock-Assignment-Grp2
4) To Run Client Application:
   1) To install all packages, run npm i or npm install
   2) Don't forget additional packages, such as "validator"
   3) To run Client Application, run command "npm start"

5) Web Application should be running on a browser
