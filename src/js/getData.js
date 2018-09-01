const request = require("es6-request");

// you can exchange "get" with "head", "delete" or "options" here
// they all have the exact same API
request.get("ec2-13-209-88-11.ap-northeast-2.compute.amazonaws.com/zone/1")
  .then(([body, res]) => {
    console.log(body);
    // should output this README file!
  });

