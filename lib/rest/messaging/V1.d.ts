/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Messaging = require('../Messaging');
import Version = require('../../base/Version');
import { ServiceList } from './v1/service';
import { ServiceListInstance } from './v1/service';
import { SessionList } from './v1/session';
import { SessionListInstance } from './v1/session';
import { WebhookList } from './v1/webhook';
import { WebhookListInstance } from './v1/webhook';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Messaging
   *
   * @property sessions - sessions resource
   * @property services - services resource
   * @property webhooks - webhooks resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Messaging);

  readonly services: ServiceListInstance;
  readonly sessions: SessionListInstance;
  readonly webhooks: WebhookListInstance;
}

export = V1;