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
    instance = new AdyenHppJs.PaymentResponse();
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

  describe('PaymentResponse', function() {
    it('should create an instance of PaymentResponse', function() {
      // uncomment below and update the code to test PaymentResponse
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be.a(AdyenHppJs.PaymentResponse);
    });

    it('should have the property authResult (base name: "authResult")', function() {
      // uncomment below and update the code to test the property authResult
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property pspReference (base name: "pspReference")', function() {
      // uncomment below and update the code to test the property pspReference
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property merchantReference (base name: "merchantReference")', function() {
      // uncomment below and update the code to test the property merchantReference
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property skinCode (base name: "skinCode")', function() {
      // uncomment below and update the code to test the property skinCode
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property merchantSig (base name: "merchantSig")', function() {
      // uncomment below and update the code to test the property merchantSig
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property shopperLocale (base name: "shopperLocale")', function() {
      // uncomment below and update the code to test the property shopperLocale
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property merchantReturnData (base name: "merchantReturnData")', function() {
      // uncomment below and update the code to test the property merchantReturnData
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property additionalDataAcquirerReference (base name: "additionalData.acquirerReference")', function() {
      // uncomment below and update the code to test the property additionalDataAcquirerReference
      //var instane = new AdyenHppJs.PaymentResponse();
      //expect(instance).to.be();
    });

  });

}));
