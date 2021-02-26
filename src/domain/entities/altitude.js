class Altitude {

    constructor(item) {
        this.altitude = item.altitude
        this.x = item.x
        this.y = item.y
    }

}

const buildAltitude = ({ altitude, x, y }) => {
    checkNumber(altitude)
    checkNumber(x)
    checkNumber(y)
    const entity = new Altitude({ altitude, x, y })
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