var utils = require('currentcms/lib/utils');
utils.create_admin({
  config: require('./config'),
  models: require('./models'),
  workflow: require('./workflow'),
  permission: require('./permission')
});