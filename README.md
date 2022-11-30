# @strapi/provider-email-freshmail

## Links

- [Strapi website](https://strapi.io/)
- [Strapi documentation](https://docs.strapi.io)
- [Freshmail documentation](https://freshmail.pl/dokumentacja-rest-api-v3/docs/messaging/emails/)

## Installation

Currently It's not official provider in @strapi scope. But you should install package as @strapi/provider-email-freshmail for catch by Strapi.

```bash
# using yarn
yarn add @strapi/provider-email-freshmail@npm:strapi-provider-email-freshmail

# using npm
npm i @strapi/provider-email-freshmail@npm:strapi-provider-email-freshmail --save
```

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "freshmail",
      providerOptions: {
        token: env("FRESHMAIL_TOKEN"),
      },
      settings: {
        defaultFrom: "no-reply@domain.pl",
        defaultFromName: "Your company",
      },
    },
  },
  // ...
});
```
