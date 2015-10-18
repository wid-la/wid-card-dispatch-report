'use strict';

Polymer({
  is: 'person-header',
  properties: {
    name: String,
    icon: String,
    odd: {
      type: Boolean,
      value: false
    }
  },
  _iconPath: function _iconPath(value) {
    return '/images/cards/avatars/' + value;
  },
  _avatarClass: function _avatarClass(isOdd) {
    var ret = 'person-avatar flex-3 layout vertical center-center ';
    if (isOdd === true) {
      ret += 'person-avatar-odd';
    }
    return ret;
  },
  _nameClass: function _nameClass(isOdd) {
    var ret = 'person-name flex layout vertical center-center ';
    if (isOdd === true) {
      ret += 'person-name-odd ';
    }
    return ret;
  }

});
Polymer({
  is: 'month-header',
  properties: {
    month: String,
    odd: {
      type: Boolean,
      value: false
    }
  },
  _monthAbbrev: function _monthAbbrev(month) {
    if (month.length > 4) {
      return month.substr(0, 3);
    } else {
      return month;
    }
  },
  _mainClass: function _mainClass(isOdd) {
    var ret = 'flex layout horizontal ';
    if (isOdd === true) {
      ret += 'odd';
    }
    return ret;
  }

});
Polymer({
  is: 'person-cell',
  properties: {
    aiBinding: Object,
    erBinding: Object,
    miBinding: Object,
    odd: {
      type: Boolean,
      value: false
    }
  },
  _mainClass: function _mainClass(isOdd) {
    var ret = 'flex person-column layout vertical ';
    if (isOdd === true) {
      ret += 'odd';
    }
    return ret;
  }

});
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