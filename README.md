# adyen-hpp-js

AdyenHppJs - JavaScript client for adyen-hpp-js
Hosted Payment Pages
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1
- Package version: 1.1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install adyen-hpp-js --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your adyen-hpp-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('adyen-hpp-js')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AdyenHppJs = require('adyen-hpp-js');

var api = new AdyenHppJs.DirectoryApi()

var directoryRequest = new AdyenHppJs.DirectoryRequest(); // {DirectoryRequest} The Directory Request

api.directory(directoryRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://test.adyen.com/hpp*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdyenHppJs.DirectoryApi* | [**directory**](docs/DirectoryApi.md#directory) | **POST** /directory.shtml | Directory lookup
*AdyenHppJs.PayApi* | [**pay**](docs/PayApi.md#pay) | **POST** /pay.shtml | Multi-page payment flow
*AdyenHppJs.SelectApi* | [**select**](docs/SelectApi.md#select) | **POST** /select.shtml | One-page payment flow
*AdyenHppJs.SkipDetailsApi* | [**skipDetails**](docs/SkipDetailsApi.md#skipDetails) | **POST** /skipDetails.shtml | Skip HPP


## Documentation for Models

 - [AdyenHppJs.AuthResultType](docs/AuthResultType.md)
 - [AdyenHppJs.DirectoryRequest](docs/DirectoryRequest.md)
 - [AdyenHppJs.DirectoryResponse](docs/DirectoryResponse.md)
 - [AdyenHppJs.Error](docs/Error.md)
 - [AdyenHppJs.ErrorType](docs/ErrorType.md)
 - [AdyenHppJs.IssuersType](docs/IssuersType.md)
 - [AdyenHppJs.PaymentMethodsType](docs/PaymentMethodsType.md)
 - [AdyenHppJs.PaymentRequest](docs/PaymentRequest.md)
 - [AdyenHppJs.PaymentResponse](docs/PaymentResponse.md)
 - [AdyenHppJs.RecurringContractType](docs/RecurringContractType.md)
 - [AdyenHppJs.SkipDetailsRequest](docs/SkipDetailsRequest.md)
 - [AdyenHppJs.SkipDetailsResponse](docs/SkipDetailsResponse.md)


## Documentation for Authorization

 All endpoints do not require authorization.

