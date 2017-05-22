/**
 * Adyen HPP
 * Hosted Payment Pages
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenHppJs) {
      root.AdyenHppJs = {};
    }
    root.AdyenHppJs.AuthResultType = factory(root.AdyenHppJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class AuthResultType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "AUTHORISED"
     * @const
     */
    "AUTHORISED": "AUTHORISED",
    /**
     * value: "REFUSED"
     * @const
     */
    "REFUSED": "REFUSED",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"  };

  /**
   * Returns a <code>AuthResultType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/AuthResultType} The enum <code>AuthResultType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


