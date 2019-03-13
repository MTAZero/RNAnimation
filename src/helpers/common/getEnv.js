const config = {
    domain: {
        $default: 'localhost',
    },

    baseAPIUrl: {
        $default: 'http://178.128.90.202:5000',//'http://localhost:5000',
        production: 'http://178.128.90.202:5000',//'http://localhost:5000',
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
 