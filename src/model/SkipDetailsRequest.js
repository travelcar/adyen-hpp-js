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
    define(['ApiClient', 'model/RecurringContractType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecurringContractType'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenHppJs) {
      root.AdyenHppJs = {};
    }
    root.AdyenHppJs.SkipDetailsRequest = factory(root.AdyenHppJs.ApiClient, root.AdyenHppJs.RecurringContractType);
  }
}(this, function(ApiClient, RecurringContractType) {
  'use strict';




  /**
   * The SkipDetailsRequest model module.
   * @module model/SkipDetailsRequest
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>SkipDetailsRequest</code>.
   * @alias module:model/SkipDetailsRequest
   * @class
   * @param merchantReference {String} A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * @param paymentAmount {Number} The payable amount that can be charged for the transaction, in minor units.
   * @param currencyCode {String} The three-character ISO currency code.
   * @param shipBeforeDate {Date} The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD.
   * @param skinCode {String} A unique code to identify the skin you want to apply to the HPP to process the transaction.
   * @param merchantAccount {String} The merchant account identifier you want to process the (transaction) request with.
   * @param sessionValidity {Date} The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time.
   * @param merchantSig {String} The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @param shopperEmail {String} A shopper's email address.
   * @param shopperReference {String} A unique identifier for the shopper, for example, a customer ID.
   * @param recurringContract {module:model/RecurringContractType} 
   */
  var exports = function(merchantReference, paymentAmount, currencyCode, shipBeforeDate, skinCode, merchantAccount, sessionValidity, merchantSig, shopperEmail, shopperReference, recurringContract) {
    var _this = this;

    _this['merchantReference'] = merchantReference;
    _this['paymentAmount'] = paymentAmount;
    _this['currencyCode'] = currencyCode;
    _this['shipBeforeDate'] = shipBeforeDate;
    _this['skinCode'] = skinCode;
    _this['merchantAccount'] = merchantAccount;


    _this['sessionValidity'] = sessionValidity;

    _this['merchantSig'] = merchantSig;

    _this['shopperEmail'] = shopperEmail;
    _this['shopperReference'] = shopperReference;








    _this['recurringContract'] = recurringContract;
  };

  /**
   * Constructs a <code>SkipDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SkipDetailsRequest} obj Optional instance to populate.
   * @return {module:model/SkipDetailsRequest} The populated <code>SkipDetailsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('paymentAmount')) {
        obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
      }
      if (data.hasOwnProperty('currencyCode')) {
        obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
      }
      if (data.hasOwnProperty('shipBeforeDate')) {
        obj['shipBeforeDate'] = ApiClient.convertToType(data['shipBeforeDate'], 'Date');
      }
      if (data.hasOwnProperty('skinCode')) {
        obj['skinCode'] = ApiClient.convertToType(data['skinCode'], 'String');
      }
      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('shopperLocale')) {
        obj['shopperLocale'] = ApiClient.convertToType(data['shopperLocale'], 'String');
      }
      if (data.hasOwnProperty('orderData')) {
        obj['orderData'] = ApiClient.convertToType(data['orderData'], 'String');
      }
      if (data.hasOwnProperty('sessionValidity')) {
        obj['sessionValidity'] = ApiClient.convertToType(data['sessionValidity'], 'Date');
      }
      if (data.hasOwnProperty('merchantReturnData')) {
        obj['merchantReturnData'] = ApiClient.convertToType(data['merchantReturnData'], 'String');
      }
      if (data.hasOwnProperty('merchantSig')) {
        obj['merchantSig'] = ApiClient.convertToType(data['merchantSig'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('shopperEmail')) {
        obj['shopperEmail'] = ApiClient.convertToType(data['shopperEmail'], 'String');
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('allowedMethods')) {
        obj['allowedMethods'] = ApiClient.convertToType(data['allowedMethods'], 'String');
      }
      if (data.hasOwnProperty('blockedMethods')) {
        obj['blockedMethods'] = ApiClient.convertToType(data['blockedMethods'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('brandCode')) {
        obj['brandCode'] = ApiClient.convertToType(data['brandCode'], 'String');
      }
      if (data.hasOwnProperty('issuerId')) {
        obj['issuerId'] = ApiClient.convertToType(data['issuerId'], 'String');
      }
      if (data.hasOwnProperty('shopperStatement')) {
        obj['shopperStatement'] = ApiClient.convertToType(data['shopperStatement'], 'String');
      }
      if (data.hasOwnProperty('offerEmail')) {
        obj['offerEmail'] = ApiClient.convertToType(data['offerEmail'], 'String');
      }
      if (data.hasOwnProperty('resURL')) {
        obj['resURL'] = ApiClient.convertToType(data['resURL'], 'String');
      }
      if (data.hasOwnProperty('recurringContract')) {
        obj['recurringContract'] = RecurringContractType.constructFromObject(data['recurringContract']);
      }
    }
    return obj;
  }

  /**
   * A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * The payable amount that can be charged for the transaction, in minor units.
   * @member {Number} paymentAmount
   */
  exports.prototype['paymentAmount'] = undefined;
  /**
   * The three-character ISO currency code.
   * @member {String} currencyCode
   */
  exports.prototype['currencyCode'] = undefined;
  /**
   * The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD.
   * @member {Date} shipBeforeDate
   */
  exports.prototype['shipBeforeDate'] = undefined;
  /**
   * A unique code to identify the skin you want to apply to the HPP to process the transaction.
   * @member {String} skinCode
   */
  exports.prototype['skinCode'] = undefined;
  /**
   * The merchant account identifier you want to process the (transaction) request with.
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * It specifies the language to use during the transaction. For example en_GB sets the locale preferences to British English. locale = language code + country code
   * @member {String} shopperLocale
   */
  exports.prototype['shopperLocale'] = undefined;
  /**
   * An HTML fragment containing the order details to display to the shopper on the payment review page, just before the shopper proceeds to the final order confirmation.
   * @member {String} orderData
   */
  exports.prototype['orderData'] = undefined;
  /**
   * The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time.
   * @member {Date} sessionValidity
   */
  exports.prototype['sessionValidity'] = undefined;
  /**
   * This field value is appended as-is to the return URL when the shopper completes, or abandons, the payment process and is redirected to your web shop. Typically, this field is used to hold and transmit a session ID. Maximum allowed character length 128 characters.
   * @member {String} merchantReturnData
   */
  exports.prototype['merchantReturnData'] = undefined;
  /**
   * The signature in Base64 encoded format. The signature is generated by concatenating the values of a number of the payment session fields, and by computing the HMAC using the shared secret, as configured in the skin.
   * @member {String} merchantSig
   */
  exports.prototype['merchantSig'] = undefined;
  /**
   * the two letter country code (ISO 3166-1)
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * A shopper's email address.
   * @member {String} shopperEmail
   */
  exports.prototype['shopperEmail'] = undefined;
  /**
   * A unique identifier for the shopper, for example, a customer ID.
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * A comma-separated list of the allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. Only the listed payment methods are shown, if available; all other payment methods are ignored. Spaces are not allowed.
   * @member {String} allowedMethods
   */
  exports.prototype['allowedMethods'] = undefined;
  /**
   * A comma-separated list of the not allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. The listed payment methods are not made available on the HPP. Spaces are not allowed.
   * @member {String} blockedMethods
   */
  exports.prototype['blockedMethods'] = undefined;
  /**
   * An integer value that adds up to the normal fraud score. The value can be either a positive or negative integer.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Defines the specific payment method used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @member {String} brandCode
   */
  exports.prototype['brandCode'] = undefined;
  /**
   * Defines the specific issuer ID used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @member {String} issuerId
   */
  exports.prototype['issuerId'] = undefined;
  /**
   * Set this field in your payment request if you want to include a variable shopper statement.
   * @member {String} shopperStatement
   */
  exports.prototype['shopperStatement'] = undefined;
  /**
   * If offerEmail is set to prompt, an extra Pay by Email payment method is added to the available payment method list.
   * @member {String} offerEmail
   */
  exports.prototype['offerEmail'] = undefined;
  /**
   * Defines the result URL, i.e. the default result landing page shoppers are redirected to when they complete a payment on the HPP. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @member {String} resURL
   */
  exports.prototype['resURL'] = undefined;
  /**
   * @member {module:model/RecurringContractType} recurringContract
   */
  exports.prototype['recurringContract'] = undefined;


  /**
   * Returns A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * @return {String}
   */
  exports.prototype.getMerchantReference = function() {
    return this['merchantReference'];
  }

  /**
   * Sets A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   * @param {String} merchantReference A reference to uniquely identify the payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
   */
  exports.prototype.setMerchantReference = function(merchantReference) {
    this['merchantReference'] = merchantReference;
  }


  /**
   * Returns The payable amount that can be charged for the transaction, in minor units.
   * @return {Number}
   */
  exports.prototype.getPaymentAmount = function() {
    return this['paymentAmount'];
  }

  /**
   * Sets The payable amount that can be charged for the transaction, in minor units.
   * @param {Number} paymentAmount The payable amount that can be charged for the transaction, in minor units.
   */
  exports.prototype.setPaymentAmount = function(paymentAmount) {
    this['paymentAmount'] = paymentAmount;
  }


  /**
   * Returns The three-character ISO currency code.
   * @return {String}
   */
  exports.prototype.getCurrencyCode = function() {
    return this['currencyCode'];
  }

  /**
   * Sets The three-character ISO currency code.
   * @param {String} currencyCode The three-character ISO currency code.
   */
  exports.prototype.setCurrencyCode = function(currencyCode) {
    this['currencyCode'] = currencyCode;
  }


  /**
   * Returns The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD.
   * @return {Date}
   */
  exports.prototype.getShipBeforeDate = function() {
    return this['shipBeforeDate'];
  }

  /**
   * Sets The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD.
   * @param {Date} shipBeforeDate The date within which the ordered goods or services need to be shipped or provided to the shopper. Format ISO 8601; YYYY-MM-DDThh:mm:ssTZD.
   */
  exports.prototype.setShipBeforeDate = function(shipBeforeDate) {
    this['shipBeforeDate'] = shipBeforeDate;
  }


  /**
   * Returns A unique code to identify the skin you want to apply to the HPP to process the transaction.
   * @return {String}
   */
  exports.prototype.getSkinCode = function() {
    return this['skinCode'];
  }

  /**
   * Sets A unique code to identify the skin you want to apply to the HPP to process the transaction.
   * @param {String} skinCode A unique code to identify the skin you want to apply to the HPP to process the transaction.
   */
  exports.prototype.setSkinCode = function(skinCode) {
    this['skinCode'] = skinCode;
  }


  /**
   * Returns The merchant account identifier you want to process the (transaction) request with.
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets The merchant account identifier you want to process the (transaction) request with.
   * @param {String} merchantAccount The merchant account identifier you want to process the (transaction) request with.
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns It specifies the language to use during the transaction. For example en_GB sets the locale preferences to British English. locale = language code + country code
   * @return {String}
   */
  exports.prototype.getShopperLocale = function() {
    return this['shopperLocale'];
  }

  /**
   * Sets It specifies the language to use during the transaction. For example en_GB sets the locale preferences to British English. locale = language code + country code
   * @param {String} shopperLocale It specifies the language to use during the transaction. For example en_GB sets the locale preferences to British English. locale = language code + country code
   */
  exports.prototype.setShopperLocale = function(shopperLocale) {
    this['shopperLocale'] = shopperLocale;
  }


  /**
   * Returns An HTML fragment containing the order details to display to the shopper on the payment review page, just before the shopper proceeds to the final order confirmation.
   * @return {String}
   */
  exports.prototype.getOrderData = function() {
    return this['orderData'];
  }

  /**
   * Sets An HTML fragment containing the order details to display to the shopper on the payment review page, just before the shopper proceeds to the final order confirmation.
   * @param {String} orderData An HTML fragment containing the order details to display to the shopper on the payment review page, just before the shopper proceeds to the final order confirmation.
   */
  exports.prototype.setOrderData = function(orderData) {
    this['orderData'] = orderData;
  }


  /**
   * Returns The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time.
   * @return {Date}
   */
  exports.prototype.getSessionValidity = function() {
    return this['sessionValidity'];
  }

  /**
   * Sets The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time.
   * @param {Date} sessionValidity The payment deadline; the payment needs to occur within the specified time value. This is especially useful for tickets and reservations, where you want to hold items for sale for a short, limited period of time.
   */
  exports.prototype.setSessionValidity = function(sessionValidity) {
    this['sessionValidity'] = sessionValidity;
  }


  /**
   * Returns This field value is appended as-is to the return URL when the shopper completes, or abandons, the payment process and is redirected to your web shop. Typically, this field is used to hold and transmit a session ID. Maximum allowed character length 128 characters.
   * @return {String}
   */
  exports.prototype.getMerchantReturnData = function() {
    return this['merchantReturnData'];
  }

  /**
   * Sets This field value is appended as-is to the return URL when the shopper completes, or abandons, the payment process and is redirected to your web shop. Typically, this field is used to hold and transmit a session ID. Maximum allowed character length 128 characters.
   * @param {String} merchantReturnData This field value is appended as-is to the return URL when the shopper completes, or abandons, the payment process and is redirected to your web shop. Typically, this field is used to hold and transmit a session ID. Maximum allowed character length 128 characters.
   */
  exports.prototype.setMerchantReturnData = function(merchantReturnData) {
    this['merchantReturnData'] = merchantReturnData;
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
   * Returns the two letter country code (ISO 3166-1)
   * @return {String}
   */
  exports.prototype.getCountryCode = function() {
    return this['countryCode'];
  }

  /**
   * Sets the two letter country code (ISO 3166-1)
   * @param {String} countryCode the two letter country code (ISO 3166-1)
   */
  exports.prototype.setCountryCode = function(countryCode) {
    this['countryCode'] = countryCode;
  }


  /**
   * Returns A shopper's email address.
   * @return {String}
   */
  exports.prototype.getShopperEmail = function() {
    return this['shopperEmail'];
  }

  /**
   * Sets A shopper's email address.
   * @param {String} shopperEmail A shopper's email address.
   */
  exports.prototype.setShopperEmail = function(shopperEmail) {
    this['shopperEmail'] = shopperEmail;
  }


  /**
   * Returns A unique identifier for the shopper, for example, a customer ID.
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets A unique identifier for the shopper, for example, a customer ID.
   * @param {String} shopperReference A unique identifier for the shopper, for example, a customer ID.
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * Returns A comma-separated list of the allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. Only the listed payment methods are shown, if available; all other payment methods are ignored. Spaces are not allowed.
   * @return {String}
   */
  exports.prototype.getAllowedMethods = function() {
    return this['allowedMethods'];
  }

  /**
   * Sets A comma-separated list of the allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. Only the listed payment methods are shown, if available; all other payment methods are ignored. Spaces are not allowed.
   * @param {String} allowedMethods A comma-separated list of the allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. Only the listed payment methods are shown, if available; all other payment methods are ignored. Spaces are not allowed.
   */
  exports.prototype.setAllowedMethods = function(allowedMethods) {
    this['allowedMethods'] = allowedMethods;
  }


  /**
   * Returns A comma-separated list of the not allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. The listed payment methods are not made available on the HPP. Spaces are not allowed.
   * @return {String}
   */
  exports.prototype.getBlockedMethods = function() {
    return this['blockedMethods'];
  }

  /**
   * Sets A comma-separated list of the not allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. The listed payment methods are not made available on the HPP. Spaces are not allowed.
   * @param {String} blockedMethods A comma-separated list of the not allowed payment methods to filter the payment method options that would normally be available through the skinned HPP. The listed payment methods are not made available on the HPP. Spaces are not allowed.
   */
  exports.prototype.setBlockedMethods = function(blockedMethods) {
    this['blockedMethods'] = blockedMethods;
  }


  /**
   * Returns An integer value that adds up to the normal fraud score. The value can be either a positive or negative integer.
   * @return {Number}
   */
  exports.prototype.getOffset = function() {
    return this['offset'];
  }

  /**
   * Sets An integer value that adds up to the normal fraud score. The value can be either a positive or negative integer.
   * @param {Number} offset An integer value that adds up to the normal fraud score. The value can be either a positive or negative integer.
   */
  exports.prototype.setOffset = function(offset) {
    this['offset'] = offset;
  }


  /**
   * Returns Defines the specific payment method used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @return {String}
   */
  exports.prototype.getBrandCode = function() {
    return this['brandCode'];
  }

  /**
   * Sets Defines the specific payment method used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @param {String} brandCode Defines the specific payment method used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   */
  exports.prototype.setBrandCode = function(brandCode) {
    this['brandCode'] = brandCode;
  }


  /**
   * Returns Defines the specific issuer ID used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @return {String}
   */
  exports.prototype.getIssuerId = function() {
    return this['issuerId'];
  }

  /**
   * Sets Defines the specific issuer ID used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   * @param {String} issuerId Defines the specific issuer ID used to process the payment. This field is required in a payment request call to skipDetails.shtml to skip the payment method selection.
   */
  exports.prototype.setIssuerId = function(issuerId) {
    this['issuerId'] = issuerId;
  }


  /**
   * Returns Set this field in your payment request if you want to include a variable shopper statement.
   * @return {String}
   */
  exports.prototype.getShopperStatement = function() {
    return this['shopperStatement'];
  }

  /**
   * Sets Set this field in your payment request if you want to include a variable shopper statement.
   * @param {String} shopperStatement Set this field in your payment request if you want to include a variable shopper statement.
   */
  exports.prototype.setShopperStatement = function(shopperStatement) {
    this['shopperStatement'] = shopperStatement;
  }


  /**
   * Returns If offerEmail is set to prompt, an extra Pay by Email payment method is added to the available payment method list.
   * @return {String}
   */
  exports.prototype.getOfferEmail = function() {
    return this['offerEmail'];
  }

  /**
   * Sets If offerEmail is set to prompt, an extra Pay by Email payment method is added to the available payment method list.
   * @param {String} offerEmail If offerEmail is set to prompt, an extra Pay by Email payment method is added to the available payment method list.
   */
  exports.prototype.setOfferEmail = function(offerEmail) {
    this['offerEmail'] = offerEmail;
  }


  /**
   * Returns Defines the result URL, i.e. the default result landing page shoppers are redirected to when they complete a payment on the HPP. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @return {String}
   */
  exports.prototype.getResURL = function() {
    return this['resURL'];
  }

  /**
   * Sets Defines the result URL, i.e. the default result landing page shoppers are redirected to when they complete a payment on the HPP. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   * @param {String} resURL Defines the result URL, i.e. the default result landing page shoppers are redirected to when they complete a payment on the HPP. We recommend setting a fixed resultURL in the skin configuration. However, sometimes it may be preferable to set the result URL on a per-payment basis to override the resultURL value specified in the skin configuration, you need to set the result URL for the payment session with the resURL parameter.
   */
  exports.prototype.setResURL = function(resURL) {
    this['resURL'] = resURL;
  }


  /**
   * @return {module:model/RecurringContractType}
   */
  exports.prototype.getRecurringContract = function() {
    return this['recurringContract'];
  }

  /**
   * @param {module:model/RecurringContractType} recurringContract
   */
  exports.prototype.setRecurringContract = function(recurringContract) {
    this['recurringContract'] = recurringContract;
  }



  return exports;
}));


