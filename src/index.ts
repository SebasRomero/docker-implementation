import express, { Request, Response } from "express";
import mysql from "mysql2";
import { config } from "dotenv";
import { StatusCodes } from "http-status-codes";

config();

const { PORT, DB_PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = process.env;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
});

// Establecer conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error sd al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});
console.log("hola")
// Crear una instancia de Express
const server = express();
// Ruta de ejemplo para obtener datos de la base de datos
server.get(
  "/main",
  async (request: Request, response: Response): Promise<Response> => {
    return response.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
    });
  }
);

// Puerto en el que se ejecutará el servidor
const port = PORT ?? 3000;

// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
  console.log("sisdd")
  console.log("Sascassadasasas");
});
