const { buildAltitude } = require("../entities/altitude")

const build = (/**Inyect your dependences here */) => {

    /**
     * 
     * @param {number} min minimun altitude
     * @param {number} max maximun altitude
     */
    const execute = (min, max) => {
        const randomAltitude = Math.floor(Math.random() * max) + min
        return buildAltitude(randomAltitude)
    }

    return execute

}

module.exports = build