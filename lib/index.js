"use strict";

var axios = require("axios");

module.exports = {
  init(providerOptions = {}) {
    return {
      send(options) {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } =
            options;

          const { token } = providerOptions;

          var data = JSON.stringify({
            recipients: [
              {
                email: to,
              },
            ],
            from: {
              name: "Example",
              email: from,
            },
            subject,
            contents: [
              {
                type: "text/html",
                body: `${text}${html}`,
              },
            ],
          });

          var config = {
            method: "post",
            url: "https://api.freshmail.com/v3/messaging/emails",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            data: data,
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
