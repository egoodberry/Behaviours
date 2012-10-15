(function($, ns) {
  var dictionary = {
    storage : {},
    add : function add(key, extension) {
      this.storage[key] = function constructor(argument) {
        var initializer;

        if(typeof extension === 'function') {
          extension = extension();
        }

        initializer = $.extend($(argument), new ns.initializers.Base(), extension);
        initializer.initialize();

        return initializer;
      };
    },
    get : function get(key) {
      return this.storage[key];
    },
    remove : function remove(key) {
      delete this.storage[key];
    }
  };

  $.extend(ns, {
    initializers : function initializers(key, extension) {
      if(extension) {
        dictionary.add(key, extension);
      }

      return dictionary.get(key);
    }
  });

  $.extend(ns.initializers, {
    Base : function Base() {},

    remove : function remove(key) {
      dictionary.remove(key);
    }
  });

  $.extend(ns.initializers.Base.prototype, {
    initialize : function initialize() {
      // override
    }
  });
})($, com.gust);
