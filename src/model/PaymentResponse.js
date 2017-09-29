/**
 * Adyen HPP
 * Hosted Payment Pages
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AuthResultType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthResultType'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenHppJs) {
      root.AdyenHppJs = {};
    }
    root.AdyenHppJs.PaymentResponse = factory(root.AdyenHppJs.ApiClient, root.AdyenHppJs.AuthResultType);
  }
}(this, function(ApiClient, AuthResultType) {
  'use strict';




  /**
   * The PaymentResponse model module.
   * @module model/PaymentResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>PaymentResponse</code>.
   * @alias module:model/PaymentResponse
   * @class
   * @param authResult {module:model/AuthResultType} 
   * @param merchantReference {String} The reference you assigned to the original payment.
   * @param skinCode {String} The code that identifies the skin used to process the payment.
   * @param merchantSig {String} The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @param shopperLocale {String} The shopperLocale value provided in the payment request. If no value is specified in the request, the default value en_GB is returned.
   */
  var exports = function(authResult, merchantReference, skinCode, merchantSig, shopperLocale) {
    var _this = this;

    _this['authResult'] = authResult;

    _this['merchantReference'] = merchantReference;
    _this['skinCode'] = skinCode;
    _this['merchantSig'] = merchantSig;

    _this['shopperLocale'] = shopperLocale;


  };

  /**
   * Constructs a <code>PaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentResponse} obj Optional instance to populate.
   * @return {module:model/PaymentResponse} The populated <code>PaymentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authResult')) {
        obj['authResult'] = AuthResultType.constructFromObject(data['authResult']);
      }
      if (data.hasOwnProperty('pspReference')) {
        obj['pspReference'] = ApiClient.convertToType(data['pspReference'], 'String');
      }
      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('skinCode')) {
        obj['skinCode'] = ApiClient.convertToType(data['skinCode'], 'String');
      }
      if (data.hasOwnProperty('merchantSig')) {
        obj['merchantSig'] = ApiClient.convertToType(data['merchantSig'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('shopperLocale')) {
        obj['shopperLocale'] = ApiClient.convertToType(data['shopperLocale'], 'String');
      }
      if (data.hasOwnProperty('merchantReturnData')) {
        obj['merchantReturnData'] = ApiClient.convertToType(data['merchantReturnData'], 'String');
      }
      if (data.hasOwnProperty('additionalData.acquirerReference')) {
        obj['additionalData.acquirerReference'] = ApiClient.convertToType(data['additionalData.acquirerReference'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AuthResultType} authResult
   */
  exports.prototype['authResult'] = undefined;
  /**
   * Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
   * @member {String} pspReference
   */
  exports.prototype['pspReference'] = undefined;
  /**
   * The reference you assigned to the original payment.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * The code that identifies the skin used to process the payment.
   * @member {String} skinCode
   */
  exports.prototype['skinCode'] = undefined;
  /**
   * The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @member {String} merchantSig
   */
  exports.prototype['merchantSig'] = undefined;
  /**
   * The payment method used in the transaction. When authResult equals CANCELLED, the payment method may not be known – in this case, it is not included.
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * The shopperLocale value provided in the payment request. If no value is specified in the request, the default value en_GB is returned.
   * @member {String} shopperLocale
   */
  exports.prototype['shopperLocale'] = undefined;
  /**
   * If you define this field in the payment session setup, the value is returned as is. This information is useful to build a custom result page, and it integrates seamlessly with the shopper's session on your server.When the payment status is defined, we send you a server-to-server notification. This notification is the recommended way to update the payment status in your back office. The notification system is more reliable in its delivery because the  resultURL parameter relies on the shopper's browser/computer/Internet connection, any of which could fail at any time. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @member {String} merchantReturnData
   */
  exports.prototype['merchantReturnData'] = undefined;
  /**
   * This field is returned for open invoice in the result URL.
   * @member {String} additionalData.acquirerReference
   */
  exports.prototype['additionalData.acquirerReference'] = undefined;


  /**
   * @return {module:model/AuthResultType}
   */
  exports.prototype.getAuthResult = function() {
    return this['authResult'];
  }

  /**
   * @param {module:model/AuthResultType} authResult
   */
  exports.prototype.setAuthResult = function(authResult) {
    this['authResult'] = authResult;
  }


  /**
   * Returns Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
   * @return {String}
   */
  exports.prototype.getPspReference = function() {
    return this['pspReference'];
  }

  /**
   * Sets Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
   * @param {String} pspReference Adyen's 16-digit unique reference associated with the transaction/the request. This value is globally unique; quote it when communicating with us about this request.
   */
  exports.prototype.setPspReference = function(pspReference) {
    this['pspReference'] = pspReference;
  }


  /**
   * Returns The reference you assigned to the original payment.
   * @return {String}
   */
  exports.prototype.getMerchantReference = function() {
    return this['merchantReference'];
  }

  /**
   * Sets The reference you assigned to the original payment.
   * @param {String} merchantReference The reference you assigned to the original payment.
   */
  exports.prototype.setMerchantReference = function(merchantReference) {
    this['merchantReference'] = merchantReference;
  }


  /**
   * Returns The code that identifies the skin used to process the payment.
   * @return {String}
   */
  exports.prototype.getSkinCode = function() {
    return this['skinCode'];
  }

  /**
   * Sets The code that identifies the skin used to process the payment.
   * @param {String} skinCode The code that identifies the skin used to process the payment.
   */
  exports.prototype.setSkinCode = function(skinCode) {
    this['skinCode'] = skinCode;
  }


  /**
   * Returns The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @return {String}
   */
  exports.prototype.getMerchantSig = function() {
    return this['merchantSig'];
  }

  /**
   * Sets The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @param {String} merchantSig The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   */
  exports.prototype.setMerchantSig = function(merchantSig) {
    this['merchantSig'] = merchantSig;
  }


  /**
   * Returns The payment method used in the transaction. When authResult equals CANCELLED, the payment method may not be known – in this case, it is not included.
   * @return {String}
   */
  exports.prototype.getPaymentMethod = function() {
    return this['paymentMethod'];
  }

  /**
   * Sets The payment method used in the transaction. When authResult equals CANCELLED, the payment method may not be known – in this case, it is not included.
   * @param {String} paymentMethod The payment method used in the transaction. When authResult equals CANCELLED, the payment method may not be known – in this case, it is not included.
   */
  exports.prototype.setPaymentMethod = function(paymentMethod) {
    this['paymentMethod'] = paymentMethod;
  }


  /**
   * Returns The shopperLocale value provided in the payment request. If no value is specified in the request, the default value en_GB is returned.
   * @return {String}
   */
  exports.prototype.getShopperLocale = function() {
    return this['shopperLocale'];
  }

  /**
   * Sets The shopperLocale value provided in the payment request. If no value is specified in the request, the default value en_GB is returned.
   * @param {String} shopperLocale The shopperLocale value provided in the payment request. If no value is specified in the request, the default value en_GB is returned.
   */
  exports.prototype.setShopperLocale = function(shopperLocale) {
    this['shopperLocale'] = shopperLocale;
  }


  /**
   * Returns If you define this field in the payment session setup, the value is returned as is. This information is useful to build a custom result page, and it integrates seamlessly with the shopper's session on your server.When the payment status is defined, we send you a server-to-server notification. This notification is the recommended way to update the payment status in your back office. The notification system is more reliable in its delivery because the  resultURL parameter relies on the shopper's browser/computer/Internet connection, any of which could fail at any time. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @return {String}
   */
  exports.prototype.getMerchantReturnData = function() {
    return this['merchantReturnData'];
  }

  /**
   * Sets If you define this field in the payment session setup, the value is returned as is. This information is useful to build a custom result page, and it integrates seamlessly with the shopper's session on your server.When the payment status is defined, we send you a server-to-server notification. This notification is the recommended way to update the payment status in your back office. The notification system is more reliable in its delivery because the  resultURL parameter relies on the shopper's browser/computer/Internet connection, any of which could fail at any time. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @param {String} merchantReturnData If you define this field in the payment session setup, the value is returned as is. This information is useful to build a custom result page, and it integrates seamlessly with the shopper's session on your server.When the payment status is defined, we send you a server-to-server notification. This notification is the recommended way to update the payment status in your back office. The notification system is more reliable in its delivery because the  resultURL parameter relies on the shopper's browser/computer/Internet connection, any of which could fail at any time. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   */
  exports.prototype.setMerchantReturnData = function(merchantReturnData) {
    this['merchantReturnData'] = merchantReturnData;
  }


  /**
   * Returns This field is returned for open invoice in the result URL.
   * @return {String}
   */
  exports.prototype.getAdditionalDataAcquirerReference = function() {
    return this['additionalData.acquirerReference'];
  }

  /**
   * Sets This field is returned for open invoice in the result URL.
   * @param {String} additionalDataAcquirerReference This field is returned for open invoice in the result URL.
   */
  exports.prototype.setAdditionalDataAcquirerReference = function(additionalDataAcquirerReference) {
    this['additionalData.acquirerReference'] = additionalDataAcquirerReference;
  }



  return exports;
}));


