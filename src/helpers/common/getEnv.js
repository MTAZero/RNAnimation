const config = {
    domain: {
        $default: 'localhost',
    },

    baseAPIUrl: {
        $default: 'http://localhost:5000',
        production: 'http://localhost:5000',
    }
}

const _getEnvironment = () => {
    return process.env.REACT_APP_ENV || 'development'
}

export default (key, defaultValue = null) => {
    if (!config.hasOwnProperty(key)) {
        return defaultValue
    }

    const env = _getEnvironment()
    const _dataConfig = config[key]

    return _dataConfig[env] ? _dataConfig[env] : _dataConfig['$default'] || defaultValue
}
 