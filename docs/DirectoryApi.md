# AdyenHppJs.DirectoryApi

All URIs are relative to *https://test.adyen.com/hpp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directory**](DirectoryApi.md#directory) | **POST** /directory.shtml | Directory lookup


<a name="directory"></a>
# **directory**
> directory(directoryRequest)

Directory lookup

Optionally, you may choose to host the payment selection on your website and skip the HPP part (directory lookup). Directory lookup enables you to directly show the entry fields for the selected payment methods to shoppers. It sends information such as the shopper location, shopping basket value and currency to the Adyen Payment Platform, which dynamically provides the list of the most relevant payment methods for this shopper to the merchant. By using this payment data, you can dynamically generate a customized payment page allowing the shopper to complete their purchase using a targeted selection of payment methods.  By selecting a payment method, the shopper is redirected to the local payment method check out of his choice, for example the shopper’s own bank iDEAL page, the shopper&#39;s own bank Suomen Verkumaksut page, PayPal page, etc. Following any payment request, Adyen sends back a notification providing the status of the payment and updates the status as soon as it changes. This means that our customers receive information about the status of the request in all cases.

### Example
```javascript
var AdyenHppJs = require('adyen-hpp-js');

var apiInstance = new AdyenHppJs.DirectoryApi();

var directoryRequest = new AdyenHppJs.DirectoryRequest(); // DirectoryRequest | The Directory Request

apiInstance.directory(directoryRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directoryRequest** | [**DirectoryRequest**](DirectoryRequest.md)| The Directory Request | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

