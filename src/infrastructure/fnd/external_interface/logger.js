const pino = require('pino');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

const LOG_LEVEL = env === 'development' ? 'debug' : 'warn';

const NAMESPACE_ROOT = process.env.DEBUG !== undefined ?
    process.env.DEBUG.replace(":*", "") :
    'src:*'.replace(":*", "");

const init = (absoluteFilePath) => {
    if (absoluteFilePath === '')
        return pino({ name: NAMESPACE_ROOT, level: LOG_LEVEL });
    else {
        return pino({
            name: `${NAMESPACE_ROOT}:${path.relative(__dirname, absoluteFilePath)
                .replace(/.js/gi, "")
                .replace(/.ts/gi, "")
                .replace(/\//g, ":")
                .replace(/\.\.:/g, "")}`,
            level: LOG_LEVEL
        });
    }
};

module.exports = init;






