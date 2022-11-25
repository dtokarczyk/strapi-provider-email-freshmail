# @strapi/provider-email-freshmail

## Links

- [Strapi website](https://strapi.io/)
- [Strapi documentation](https://docs.strapi.io)
- [Freshmail documentation](https://freshmail.pl/dokumentacja-rest-api-v3/docs/messaging/emails/)

## Installation

```bash
# using yarn
yarn add @strapi/provider-email-freshmail

# using npm
npm install @strapi/provider-email-freshmail --save
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
