const logger = require("../../external_interface/logger");
const { createRandomAltitude } = require("../../../../domain/use_cases");
const Events = require("../events/events")

const Logger = logger(__filename)

const sendData = (socket) => {
    socket.on(Events.ALTIMETER, async (data, fn) => {
        const randomAltitude = createRandomAltitude(1, 30, 1, 360)
        socket.emit(Events.ALTIMETER,
            randomAltitude
        )
    });
}

module.exports = {
    sendData
}