const express = require("express");
const axios = require("axios").default;
const cron = require("node-cron");
const app = express();
const endpoint = "https://be-b010.herokuapp.com/api/info";

function callApi() {
  axios({
    method: "get",
    url: endpoint,
  }).then(function (response) {
    console.log(response);
  });
}

cron.schedule("*/1 * * * *", () => {
    callApi();
});

app.listen(3000, () => console.log("App is running on port 3000"));
