// server.js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.VITE_BASE_URL || 8080

server.use(middlewares);
server.use(router);
server.listen(port);
