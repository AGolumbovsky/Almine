var configValues = require('./config');

module.exports = {

    getDBConnectionString: function() {
        return 'mongodb://' + configValues.user + ':' + configValues.password + '@ds025583.mlab.com:25583/almine';
    }
}