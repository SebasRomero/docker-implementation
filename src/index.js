const express = require("express")
const mysql = require("mysql2")
const { config } = require("dotenv")
const { StatusCodes } = require("http-status-codes")

config();

const { PORT, DB_PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

const server = express();

server.get(
  "/main",
  async (request, response) => {
    return response.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
    });
  }
);

const port = PORT ?? 3000;

server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
  
});
