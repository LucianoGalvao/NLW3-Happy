import express from "express";
import path from 'path';
import cors from 'cors';

import 'express-async-errors'

import "./database/connection";

import errorHandler from './errors/handler';

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')));
app.use(errorHandler);

// Rota = Conjunto
// Recurso = Usuário

// Métodos HTTP = GET, POST, PUT e DELETE

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Parâmetros
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body Params: http://localhost:3333?users/1 (Identificar um recurso)

app.listen(3333);
