const logger = require("../../external_interface/logger");

const Logger = logger(__filename)

const loggerMiddleware = (socket, next) => {
    try {
        Logger.debug(`socket data: 
            event_name: ${socket[0]}
            event_data: ${JSON.stringify(socket[1])},
            cb_fn: ${(socket[2]) ? true : false}`);
    } catch (err) {
        Logger.debug("Error : ", err.message);
    }

    return next();
}

module.exports = loggerMiddleware