// eslint-disable-next-line
const { React, Component } = require('react');

let options = {};

class SkylorComponent extends Component {
  constructor(props) {
    super(props);
    Object.keys(options).forEach(key => {
      this[key] = options[key];
      Object.freeze(options[key]);
    })
  }
}
exports.init = (opts = {}) => {
  options = opts;
  Object.freeze(options);
};

module.exports = SkylorComponent;