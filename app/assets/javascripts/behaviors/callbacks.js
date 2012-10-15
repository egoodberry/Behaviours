(function($, ns) {
  var dictionary = {
    storage : {},

    add: function add(key, extension) {
      this.storage[key] = extension;
    },

    get: function get(key) {
      return this.storage[key];
    }
  };

  $.extend(ns, {
    callbacks: function callbacks(key, callback) {
      if(callback) {
        dictionary.add(key, callback);
      }

      return dictionary.get(key);
    }
  });
})($, com.gust);
