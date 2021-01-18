const { sendData } = require("./controllers/socket_io_cont")
const loggerMid = require("./middlewares/logger_middleware");
const logger = require("../external_interface/logger");

const PING_INTERVAL = process.env.PING_INTERVAL || "20000"
const PING_TIMEOUT = process.env.PING_TIMEOUT || "5000"

const Logger = logger(__filename)

const IoServer = async (http) => {
    try {
        const io = require("socket.io")(http, {
            serveClient: true,
            pingInterval: parseInt(PING_INTERVAL),
            pingTimeout: parseInt(PING_TIMEOUT),
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        io.close();

        io.set('origins', '*:*');

        io.on("connection", onQueuesStatsConnection)

    } catch (err) {
        throw err;
    }
}

const onQueuesStatsConnection = (socket) => {
    try {
        Logger.warn('A user connect to a socket');
        middlewares(socket)
        // after connected client
        registerRoutes(socket);
    } catch (err) {
        throw (err);
    }
}

const middlewares = (socket) => {
    socket.use(loggerMid)
}

const registerRoutes = (socket) => {
    sendData(socket)
}

module.exports = IoServer