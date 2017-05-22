# AdyenHppJs.PaymentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantReference** | **String** | A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. | 
**paymentAmount** | **Number** | The payable amount that can be charged for the transaction, in minor units. | 
**currencyCode** | **String** | The three-character ISO currency code. | 
**shipBeforeDate** | **Date** | The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD. | 
**skinCode** | **String** | A unique code to identify the skin you want to apply to the HPP to process the transaction. | 
**merchantAccount** | **String** | The merchant account identifier you want to process the (transaction) request with. | 
**shopperLocale** | **String** | It specifies the language to use during the transaction. For example en_GB sets the locale preferences to British English. locale &#x3D; language code + country code | [optional] 
**orderData** | **String** | An HTML fragment containing the order details to display to the shopper on the payment review page, just before the shopper proceeds to the final order confirmation. | [optional] 
**sessionValidity** | **Date** | The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time. | 
**merchantReturnData** | **String** | This field value is appended as-is to the return URL when the shopper completes, or abandons, the payment process and is redirected to your web shop. Typically, this field is used to hold and transmit a session ID. Maximum allowed character length 128 characters. | [optional] 
**merchantSig** | **String** | The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin. | 
**countryCode** | **String** | the two letter country code (ISO 3166-1) | [optional] 
**shopperEmail** | **String** | A shopper&#39;s email address. | 
**shopperReference** | **String** | A unique identifier for the shopper, for example, a customer ID. | 
**allowedMethods** | **String** | A comma-separated list of the allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. Only the listed payment methods are shown, if available; all other payment methods are ignored. Spaces are not allowed. | [optional] 
**blockedMethods** | **String** | A comma-separated list of the not allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. The listed payment methods are not made available on the HPP. Spaces are not allowed. | [optional] 
**offset** | **Number** | An integer value that adds up to the normal fraud score. The value can be either a positive or negative integer. | [optional] 
**brandCode** | **String** | Defines the specific payment method used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection. | [optional] 
**issuerId** | **String** | Defines the specific issuer ID used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection. | [optional] 
**shopperStatement** | **String** | Set this field in your payment request if you want to include a variable shopper statement. | [optional] 
**offerEmail** | **String** | If offerEmail is set to prompt, an extra Pay by Email payment method is added to the available payment method list. | [optional] 
**telephoneNumber** | **String** | A shopper&#39;s telephone number. | [optional] 
**resURL** | **String** | Defines the result URL, i.e. the default result landing page shoppers are redirected to when they complete a payment on the HPP. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter. | [optional] 
**recurringContract** | [**RecurringContractType**](RecurringContractType.md) |  | 
**metadata** | **Object** | a map of key/value pairs of metadata sent by merchant | [optional] 

