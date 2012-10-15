// com.gust namespace
// ===========================================================================
(function($) {
  // top-level namespace
  // -------------------------------------------------------------------------
  var com = window.com  = window.com  || {};
  var ns  = com.gust    = com.gust    || {};

  // document ready
  // -------------------------------------------------------------------------
  $(function() {
    $(document).trigger('application:ready');
  });

  $(document).bind('monitored', function(e) {
    com.gust.monitored($(e.target));
  });

  // namespace utilities
  // -------------------------------------------------------------------------
  $.extend(ns, {
    // .monitor builds view instances for matching DOM, based on matching
    // data-presents attributes.
    monitor : function monitor(context) {
      var forms = $(context || "body").find("form");
      forms.each(function(i, form) {
        $form = $(form);
        var previousDataPresents = $form.attr('data-presents');
        previousDataPresents = (previousDataPresents === undefined) ? "" : previousDataPresents + " ";
        $form.attr('data-presents', previousDataPresents + 'track-changed-fields style-form-elements');
      });
      $('[data-presents]', context).add(context).present();
      $(context).trigger("monitored");
    },
    monitored: function monitored(context) {
    }
  });

  $(function(){
    ns.monitor();
  });
})($);
