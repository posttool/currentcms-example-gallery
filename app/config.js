var config = {
  development: {
    name: 'Gallery',
    serverPort: 3333,
    mongoConnectString: 'mongodb://localhost/galleryx',
    sessionSecret: 'nfuds9543ythhfgjghdaF5euyhtfgxkj',

    /* storage */
    storage: "pkgcloud",
    pkgcloudConfig: {
      provider: 'rackspace',
      username: 'xxx',
      apiKey: 'xxx',
      region: 'DFW'
    },
    container: 'gallery',
    containerHttp: 'http://xxxxxxxxxxxxxx.rackcdn.com',

    /* kue */
    kueConfig: {
      redis: {
        port: 6379,
        host: '127.0.0.1'
        // for production: {  disableSearch: true }
      }
    }
  }
}

module.exports = config[process.env.NODE_ENV || 'development'];