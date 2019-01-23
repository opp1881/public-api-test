var moment = require('moment');
var jwtsimple = require('jwt-simple');

exports.createToken = function (user, secret) {
  var now = parseInt(moment.utc().format("X"));
  var expires = parseInt(moment.utc().add(1, 'day').format("X"));
  //Creates a token that is valid for 1 day
  var jwt = jwtsimple.encode({
    VK1881Identity: user,
    iss: "VK1881Issuer",
    aud: "VK1881Services",
    exp: expires,
    nbf: now
    }, secret);

  return `JWT ${jwt}`;
}
