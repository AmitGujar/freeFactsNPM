# freeFacts

A NPM Package for quotes. The database currently includes more than 15000 facts.

freefactsdk library is just wrapper around https://github.com/AmitGujar/freeFacts

## Install

```
npm install freefactsdk
```

## Usage

Get random fact

```javascript
const { getRandomFacts } = require("freefactsdk");

getRandomFacts()
  .then((fact) => {
    console.log(fact);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Contributing

All feedback and contributions are welcome!
