const { buildAltitude } = require("../entities/altitude")

const build = (/**Inyect your dependences here */) => {

    /**
     * 
     * @param {number} min minimun altitude
     * @param {number} max maximun altitude
     */
    const execute = (min, max, min1, max2) => {
        const randomAltitude = Math.floor(Math.random() * max) + min
        const x = Math.floor(Math.random() * max2) + min1
        const y = Math.floor(Math.random() * max2) + min1
        return buildAltitude({ altitude: randomAltitude, x, y })
    }

    return execute

}

module.exports = build