# AdyenHppJs.SkipDetailsApi

All URIs are relative to *https://test.adyen.com/hpp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**skipDetails**](SkipDetailsApi.md#skipDetails) | **POST** /skipDetails.shtml | Skip HPP


<a name="skipDetails"></a>
# **skipDetails**
> skipDetails(skipDetailsRequest)

Skip HPP

If you want, you can skip displaying the payment method selection page with the list of available payment methods returned by the directory lookup. You can route your shopper directly to the payment or order detail entry page.

### Example
```javascript
var AdyenHppJs = require('adyen-hpp-js');

var apiInstance = new AdyenHppJs.SkipDetailsApi();

var skipDetailsRequest = new AdyenHppJs.SkipDetailsRequest(); // SkipDetailsRequest | The SkipDetails Request

apiInstance.skipDetails(skipDetailsRequest).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipDetailsRequest** | [**SkipDetailsRequest**](SkipDetailsRequest.md)| The SkipDetails Request | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

