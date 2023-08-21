import app from "./app.js";
import { Server } from "socket.io";
import http from "http";
import { connectDB } from "./db.js";
import sockets from "./sockets.js";
import { PORT } from "./config.js";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log(`Server port ${PORT}`);

const io = new Server(httpServer);
sockets(io);
