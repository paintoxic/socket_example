const expressApp = require("./infrastructure/fnd/web/server");
const http = require("http");
const IoServer = require("./infrastructure/fnd/socket_io/socket_server")
const logger = require("./infrastructure/fnd/external_interface/logger")

const Logger = logger(__filename)

const PORT = process.env.PORT || 8080

const main = () => {
    try {
        const server = http.createServer(expressApp);
        IoServer(server);
        server.listen(PORT, () => {
            Logger.warn(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        Logger.error(`Error ${err}`);
    }
}

main()