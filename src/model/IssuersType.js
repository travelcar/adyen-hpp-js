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
    root.AdyenHppJs.IssuersType = factory(root.AdyenHppJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IssuersType model module.
   * @module model/IssuersType
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>IssuersType</code>.
   * Returned only in case of bank payments.
   * @alias module:model/IssuersType
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>IssuersType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssuersType} obj Optional instance to populate.
   * @return {module:model/IssuersType} The populated <code>IssuersType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('issuerId')) {
        obj['issuerId'] = ApiClient.convertToType(data['issuerId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the issuer.
   * @member {String} issuerId
   */
  exports.prototype['issuerId'] = undefined;
  /**
   * Name of the issuer
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Returns ID of the issuer.
   * @return {String}
   */
  exports.prototype.getIssuerId = function() {
    return this['issuerId'];
  }

  /**
   * Sets ID of the issuer.
   * @param {String} issuerId ID of the issuer.
   */
  exports.prototype.setIssuerId = function(issuerId) {
    this['issuerId'] = issuerId;
  }


  /**
   * Returns Name of the issuer
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets Name of the issuer
   * @param {String} name Name of the issuer
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }



  return exports;
}));


