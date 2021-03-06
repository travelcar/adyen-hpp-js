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
    define(['ApiClient', 'model/Error', 'model/PaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenHppJs) {
      root.AdyenHppJs = {};
    }
    root.AdyenHppJs.SelectApi = factory(root.AdyenHppJs.ApiClient, root.AdyenHppJs.Error, root.AdyenHppJs.PaymentRequest);
  }
}(this, function(ApiClient, Error, PaymentRequest) {
  'use strict';

  /**
   * Select service.
   * @module api/SelectApi
   * @version 1.1.0
   */

  /**
   * Constructs a new SelectApi. 
   * @alias module:api/SelectApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * One-page payment flow
     * The multi-page payment flow splits the payment process into two or discrete steps or more. It is lightweight and it does not require JavaScript. This ensures maximum compatibility with a wide range of browsers and devices, including mobile phones and PDAs.
     * @param {module:model/PaymentRequest} paymentRequest The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.selectWithHttpInfo = function(paymentRequest) {
      var postBody = paymentRequest;

      // verify the required parameter 'paymentRequest' is set
      if (paymentRequest === undefined || paymentRequest === null) {
        throw new Error("Missing the required parameter 'paymentRequest' when calling select");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/html'];
      var returnType = null;

      return this.apiClient.callApi(
        '/select.shtml', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * One-page payment flow
     * The multi-page payment flow splits the payment process into two or discrete steps or more. It is lightweight and it does not require JavaScript. This ensures maximum compatibility with a wide range of browsers and devices, including mobile phones and PDAs.
     * @param {module:model/PaymentRequest} paymentRequest The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.select = function(paymentRequest) {
      return this.selectWithHttpInfo(paymentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
