# AdyenHppJs.SelectApi

All URIs are relative to *https://test.adyen.com/hpp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**select**](SelectApi.md#select) | **POST** /select.shtml | One-page payment flow


<a name="select"></a>
# **select**
> select(paymentRequest)

One-page payment flow

The multi-page payment flow splits the payment process into two or discrete steps or more. It is lightweight and it does not require JavaScript. This ensures maximum compatibility with a wide range of browsers and devices, including mobile phones and PDAs.

### Example
```javascript
var AdyenHppJs = require('adyen-hpp-js');

var apiInstance = new AdyenHppJs.SelectApi();

var paymentRequest = new AdyenHppJs.PaymentRequest(); // PaymentRequest | The Payment Request

apiInstance.select(paymentRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md)| The Payment Request | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

