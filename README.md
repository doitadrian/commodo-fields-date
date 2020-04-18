# commodo-fields-date
[![Build Status](https://travis-ci.org/doitadrian/commodo-fields-date.svg?branch=master)](https://travis-ci.org/doitadrian/commodo-fields-date)
[![Coverage Status](https://coveralls.io/repos/github/doitadrian/commodo-fields-date/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/commodo-fields-date?branch=master)
[![](https://img.shields.io/npm/dw/commodo-fields-date.svg)](https://www.npmjs.com/package/commodo-fields-date) 
[![](https://img.shields.io/npm/v/commodo-fields-date.svg)](https://www.npmjs.com/package/commodo-fields-date)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A simple date field, used with the [Commodo `withFields`](https://github.com/webiny/commodo/tree/master/packages/fields) higher order function. 

## Install
```
npm install --save commodo-fields-date
```

Or if you prefer yarn: 
```
yarn add commodo-fields-date
```

## Quick Example:
 
```javascript
import { compose } from "ramda";
import { withFields, string } from "@commodo/fields";
import { date } from "commodo-fields-date";

const Company = compose(
  withFields({
    name: string(),
    foundedOn: date(), // Use it to store a single date.
    topMoments: date({ list: true }) // Or use it to store a list of dates.
    // Other fields you might need...
  }),
  // Other higher order functions (HOFs) you might need...
)();

const company = new Company();
company.name = "Acme Corporation";

// The date field can accept a Date object... 
company.foundedOn = new Date();
company.topMoments = [new Date(), new Date()];

// ...or an ISO 8601 formatted date/time string.
company.foundedOn =  "2020-04-18T15:50:44.205Z";
company.topMoments = [
  "2020-04-18T15:50:44.205Z",
  "2020-04-10T00:00:00.000Z",
  new Date()
];

// The following will throw the WithFieldsError error.
company.foundedOn =  "2020-04-18";
company.topMoments =  ["2020-04-18", new Date()];
```

Note: alternatively, you could've also used the [`populate`](https://github.com/webiny/commodo/tree/master/packages/fields#populatedata-object-void) method to assign the data:

```javascript
const company = new Company();
company.populate = {
  foundedOn: new Date(),
  topMoments: [
    "2020-04-18T15:50:44.205Z",
    "2020-04-10T00:00:00.000Z",
    new Date()
  ]
};
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
