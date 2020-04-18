# commodo-fields-date
[![Build Status](https://travis-ci.org/doitadrian/commodo-fields-date.svg?branch=master)](https://travis-ci.org/doitadrian/commodo-fields-date)
[![Coverage Status](https://coveralls.io/repos/github/doitadrian/commodo-fields-date/badge.svg?branch=master)](https://coveralls.io/github/doitadrian/commodo-fields-date?branch=master)
[![](https://img.shields.io/npm/dw/commodo-fields-date.svg)](https://www.npmjs.com/package/commodo-fields-date) 
[![](https://img.shields.io/npm/v/commodo-fields-date.svg)](https://www.npmjs.com/package/commodo-fields-date)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  
A simple `date` field for the [Commodo](https://github.com/webiny/commodo) library. 

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
    createdOn: date()
  })
)(function() {});

const company = new Company();
company.name = "Acme Corporation";

// The date field can accept a Date object... 
company.createdOn = new Date();

// ...or an ISO 8601 formatted date/time string.
company.createdOn =  "2020-04-18T15:50:44.205Z";

// The following will throw the WithFieldsError error.
company.createdOn =  "2020-04-18";
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/5121148?v=4" width="100px;"/><br /><sub><b>Adrian Smijulj</b></sub>](https://github.com/doitadrian)<br />[💻](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Code") [📖](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Documentation") [💡](#example-doitadrian "Examples") [👀](#review-doitadrian "Reviewed Pull Requests") [⚠️](https://github.com/doitadrian/commodo-fields-date/commits?author=doitadrian "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
