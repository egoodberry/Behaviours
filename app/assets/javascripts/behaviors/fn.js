(function($, ns) {
  function parseBehaviors(element) {
    var presentationBehaviorsString = $(element).data("presents");
    if (presentationBehaviorsString) {
      return presentationBehaviorsString.split(" ");
    }
    return [];
  }

  function extendElementWithViewBehaviors(element, behaviors) {
    $.each(behaviors, function(i, behavior) {
      var viewConstructor = ns(behavior);
      if (viewConstructor) {
        viewConstructor($(element));
      }
    });
  }

  $.fn.extend({
    present: function present() {
      this.each(function() {
        var presentationBehaviors = parseBehaviors(this);
        extendElementWithViewBehaviors(this, presentationBehaviors);
      });
      return this;
    }
  });
})($, com.gust.initializers);
