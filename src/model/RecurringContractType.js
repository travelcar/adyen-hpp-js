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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenHppJs) {
      root.AdyenHppJs = {};
    }
    root.AdyenHppJs.RecurringContractType = factory(root.AdyenHppJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class RecurringContractType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ONECLICK"
     * @const
     */
    "ONECLICK": "ONECLICK",
    /**
     * value: "RECURRING"
     * @const
     */
    "RECURRING": "RECURRING",
    /**
     * value: "ONECLICK,RECURRING"
     * @const
     */
    "ONECLICK,RECURRING": "ONECLICK,RECURRING"  };

  /**
   * Returns a <code>RecurringContractType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/RecurringContractType} The enum <code>RecurringContractType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


