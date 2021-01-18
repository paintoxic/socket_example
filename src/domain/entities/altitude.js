class Altitude {

    constructor(altitude) {
        this.altitude = altitude
    }

}

const buildAltitude = (altitude) => {
    checkNumber(altitude)
    const entity = new Altitude(altitude)
    return Object.freeze(entity)
}

const checkNumber = (number) => {
    if (isNaN(number)) {
        throw new Error('Parameter its not a number')
    }
}

module.exports = {
    Altitude,
    buildAltitude
}