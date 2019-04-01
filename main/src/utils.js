const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const client = jwksClient({
  jwksUri: `https://dev-wkyjoddr.auth0.com/.well-known/jwks.json`
});

function getKey(header, cb) {
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: "8p9t7Wt45PIfYAb4tr2YqtpcCTmg3ZJP",
  issuer: `https://dev-wkyjoddr.auth0.com`,
  algorithms: ["RS256"]
};
