"use strict";

var axios = require("axios");

module.exports = {
  init(providerOptions = {}) {
    return {
      send(options) {
        return new Promise((resolve, reject) => {
          const { token } = providerOptions;

          const data = JSON.stringify(options);

          const config = {
            method: "post",
            url: "https://api.freshmail.com/v3/messaging/emails",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            data,
          };

          axios(config)
            .then(function (response) {
              resolve(response.data);
            })
            .catch(function (error) {
              reject(error);
            });
        });
      },
    };
  },
};
