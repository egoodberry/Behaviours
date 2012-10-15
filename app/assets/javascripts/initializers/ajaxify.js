(function($, ns, callbacks) {
  ns('ajaxify', function() {
    var members = {
      $link: null
    };

    members.initialize = function() {
      members.$link = this;

      members.$link.click(function(e) { members.performAjax(e); });
    };

    members.performAjax = function(e) {
      e.preventDefault();
      e.stopPropagation();

      $.ajax({
        type: members.$link.data('method'),
        url: members.$link.attr('href'),
        dataType: 'text',
        success: members.success
      });
    };

    members.success = function(response) {
      console.log(response);
      // var callbackNames = members.$link.data('callback').split(' ');
      // for (var i = 0; i < callbackNames.length; i++) {
        // callbacks(callbackNames[i])(members.$link, members.$link.data("parentSelector"), response);
      // }
    }

    return members;
  });
})($, com.gust.initializers, com.gust.callbacks);
