var jwt = require("jsonwebtoken");
const decode = require("jsonwebtoken/decode");
let secretKey = "harish";

function createJwtToken(params) {
  return new Promise((resolve, reject) => {
    var token = jwt.sign(params, secretKey);
    try {
      resolve(token);
    } catch (error) {
      //
      console.log("error with jwt token", params, error);
      reject(new Error("jwt token creating failed "));
    }
  });
  // return token
}
function validateJwtToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decode) => {
      if (err) {
        console.log("failed decoding token", err, token);
        return reject(new Error("Decode token failed " + err.message));
      }

      resolve(decode);
    });
  });
}
 createJwtToken({ id: "123" }).then((token)=>{
    console.log("token debug",token);
validateJwtToken(token);

});
