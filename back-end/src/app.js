const express = require('express');
const { errors } = require('celebrate');
const cors = require('cors');

const routes = require('./routes');

const app = express(); // instanciando a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso
 */

 /**
  * Métodos Http:
  * 
  * GET: Buscar/listar informação do back-end
  * POST: Criar informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
   * Route Params: Parâmaetros utilizados para identificar rescursos.
   * Body Params: Corpo da requisição, utilizado para criar ou alterar recursos
   */
  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */
  /**
   * Driver: SELECT * FROM users
   * Query Builder: tables('users').select('*').where()
   */


