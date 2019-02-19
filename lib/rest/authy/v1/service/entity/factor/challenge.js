'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../../base/values');  /* jshint ignore:line */

var ChallengeList;
var ChallengePage;
var ChallengeInstance;
var ChallengeContext;

/* jshint ignore:start */
/**
 * @description Initialize the ChallengeList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {Twilio.Authy.V1} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 * @param {string} identity - Unique identity of the Entity
 * @param {string} factorSid - Factor Sid.
 */
/* jshint ignore:end */
ChallengeList = function ChallengeList(version, serviceSid, identity, factorSid)
                                        {
  /* jshint ignore:start */
  /**
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Authy.V1.ServiceContext.EntityContext.FactorContext.ChallengeContext}
   */
  /* jshint ignore:end */
  function ChallengeListInstance(sid) {
    return ChallengeListInstance.get(sid);
  }

  ChallengeListInstance._version = version;
  // Path Solution
  ChallengeListInstance._solution = {
    serviceSid: serviceSid,
    identity: identity,
    factorSid: factorSid
  };
  ChallengeListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges' // jshint ignore:line
  )(ChallengeListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ChallengeInstance
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.expirationDate] -
   *          The future date in which this Challenge will expire
   * @param {string} [opts.details] -
   *          Public details provided to contextualize the Challenge
   * @param {string} [opts.hiddenDetails] -
   *          Hidden details provided to contextualize the Challenge
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ChallengeInstance
   */
  /* jshint ignore:end */
  ChallengeListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'ExpirationDate': serialize.iso8601DateTime(_.get(opts, 'expirationDate')),
      'Details': _.get(opts, 'details'),
      'HiddenDetails': _.get(opts, 'hiddenDetails')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ChallengeInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.factorSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a challenge
   *
   * @param {string} sid -
   *          A string that uniquely identifies this Challenge, or `latest`.
   *
   * @returns {Twilio.Authy.V1.ServiceContext.EntityContext.FactorContext.ChallengeContext}
   */
  /* jshint ignore:end */
  ChallengeListInstance.get = function get(sid) {
    return new ChallengeContext(
      this._version,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.factorSid,
      sid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ChallengeListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ChallengeListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ChallengeListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ChallengePagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ChallengeSolution} solution - Path solution
 *
 * @returns ChallengePage
 */
/* jshint ignore:end */
ChallengePage = function ChallengePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ChallengePage.prototype, Page.prototype);
ChallengePage.prototype.constructor = ChallengePage;

/* jshint ignore:start */
/**
 * Build an instance of ChallengeInstance
 *
 * @param {ChallengePayload} payload - Payload response from the API
 *
 * @returns ChallengeInstance
 */
/* jshint ignore:end */
ChallengePage.prototype.getInstance = function getInstance(payload) {
  return new ChallengeInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.identity,
    this._solution.factorSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @returns Object
 */
/* jshint ignore:end */
ChallengePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ChallengePage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ChallengeContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @property {string} sid - A string that uniquely identifies this Challenge.
 * @property {string} accountSid - Account Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {string} entitySid - Entity Sid.
 * @property {string} identity - Unique identity of the Entity
 * @property {string} factorSid - Factor Sid.
 * @property {Date} dateCreated - The date this Challenge was created
 * @property {Date} dateUpdated - The date this Challenge was updated
 * @property {Date} dateResponded - The date this Challenge was responded
 * @property {Date} expirationDate - The date this Challenge is expired
 * @property {challenge.challenge_statuses} status - The Status of this Challenge
 * @property {challenge.challenge_reasons} respondedReason -
 *          The Reason of this Challenge `status`
 * @property {string} details -
 *          Public details provided to contextualize the Challenge
 * @property {string} hiddenDetails -
 *          Hidden details provided to contextualize the Challenge
 * @property {challenge.factor_types} factorType -
 *          The Factor Type of this Challenge
 * @property {string} url - The URL of this resource.
 *
 * @param {V1} version - Version of the resource
 * @param {ChallengePayload} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique identity of the Entity
 * @param {sid} factorSid - Factor Sid.
 * @param {string} sid -
 *          A string that uniquely identifies this Challenge, or `latest`.
 */
/* jshint ignore:end */
ChallengeInstance = function ChallengeInstance(version, payload, serviceSid,
                                                identity, factorSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.entitySid = payload.entity_sid; // jshint ignore:line
  this.identity = payload.identity; // jshint ignore:line
  this.factorSid = payload.factor_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.dateResponded = deserialize.iso8601DateTime(payload.date_responded); // jshint ignore:line
  this.expirationDate = deserialize.iso8601DateTime(payload.expiration_date); // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.respondedReason = payload.responded_reason; // jshint ignore:line
  this.details = payload.details; // jshint ignore:line
  this.hiddenDetails = payload.hidden_details; // jshint ignore:line
  this.factorType = payload.factor_type; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    identity: identity,
    factorSid: factorSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(ChallengeInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ChallengeContext(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.factorSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * remove a ChallengeInstance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a ChallengeInstance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ChallengeInstance
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authPayload] - Optional payload to verify the Challenge
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @returns Object
 */
/* jshint ignore:end */
ChallengeInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ChallengeInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ChallengeContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param {V1} version - Version of the resource
 * @param {sid} serviceSid - Service Sid.
 * @param {string} identity - Unique identity of the Entity
 * @param {sid} factorSid - Factor Sid.
 * @param {string} sid -
 *          A string that uniquely identifies this Challenge, or `latest`.
 */
/* jshint ignore:end */
ChallengeContext = function ChallengeContext(version, serviceSid, identity,
                                              factorSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, identity: identity, factorSid: factorSid, sid: sid, };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * remove a ChallengeInstance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * fetch a ChallengeInstance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ChallengeInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.factorSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a ChallengeInstance
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authPayload] - Optional payload to verify the Challenge
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChallengeInstance
 */
/* jshint ignore:end */
ChallengeContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'AuthPayload': _.get(opts, 'authPayload')});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ChallengeInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity,
      this._solution.factorSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @returns Object
 */
/* jshint ignore:end */
ChallengeContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ChallengeContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ChallengeList: ChallengeList,
  ChallengePage: ChallengePage,
  ChallengeInstance: ChallengeInstance,
  ChallengeContext: ChallengeContext
};