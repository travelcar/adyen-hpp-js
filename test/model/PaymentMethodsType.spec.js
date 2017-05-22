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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdyenHppJs);
  }
}(this, function(expect, AdyenHppJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdyenHppJs.PaymentMethodsType();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentMethodsType', function() {
    it('should create an instance of PaymentMethodsType', function() {
      // uncomment below and update the code to test PaymentMethodsType
      //var instane = new AdyenHppJs.PaymentMethodsType();
      //expect(instance).to.be.a(AdyenHppJs.PaymentMethodsType);
    });

    it('should have the property brandCode (base name: "brandCode")', function() {
      // uncomment below and update the code to test the property brandCode
      //var instane = new AdyenHppJs.PaymentMethodsType();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new AdyenHppJs.PaymentMethodsType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AdyenHppJs.PaymentMethodsType();
      //expect(instance).to.be();
    });

  });

}));
