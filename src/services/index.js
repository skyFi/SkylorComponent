const context = require.context('./', false, /\.js$/)
const services = {};
context.keys()
  .filter(item => (item !== './SkylorComponent.js'))
  .forEach(key => {
    services[key.replace(/^\.\//, '').replace(/\.js$/, '')] = (context(key).default || context(key));
  });
module.exports = services;