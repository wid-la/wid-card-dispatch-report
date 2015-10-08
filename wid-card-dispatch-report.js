'use strict';

(function () {

  Polymer({

    is: 'wid-card-dispatch-report',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * month_names
       * @type {Object}
       */
      monthNames: {
        type: Object
      },

      /**
       * person01
       * @type {Object}
       */
      person01: {
        type: Object
      },

      /**
       * person02
       * @type {Object}
       */
      person02: {
        type: Object
      },

      /**
       * person03
       * @type {Object}
       */
      person03: {
        type: Object
      },

      /**
       * person04
       * @type {Object}
       */
      person04: {
        type: Object
      },

      /**
       * person05
       * @type {Object}
       */
      person05: {
        type: Object
      },

      /**
       * person06
       * @type {Object}
       */
      person06: {
        type: Object
      },

      /**
       * person07
       * @type {Object}
       */
      person07: {
        type: Object
      },

      /**
       * person08
       * @type {Object}
       */
      person08: {
        type: Object
      },

      /**
       * person09
       * @type {Object}
       */
      person09: {
        type: Object
      },

      /**
       * person10
       * @type {Object}
       */
      person10: {
        type: Object
      }

    },

    _monthAbbrev: function _monthAbbrev(month) {
      if (month.length > 4) {
        return month.substr(0, 3);
      } else {
        return month;
      }
    }

  });
})();