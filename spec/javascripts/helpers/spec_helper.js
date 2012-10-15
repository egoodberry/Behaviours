(function($) {
  beforeEach(function() {
    $.fx.off = true;
    this.fixture = $("<div id='fixtures' />").appendTo("body");
    debugger;

    this.setFixture = function setFixture(html, fireApplicationReady) {
      this.fixture.html(html);
      if(fireApplicationReady || fireApplicationReady === undefined) {
        this.ready();
      }
    };

    this.ready = function ready(){
      com.gust.monitor(this.fixture);
    };
  });

  afterEach(function() {
    this.fixture.remove();
    _.each($("body").children(), function(child) {
      var $child = $(child);
      if ($child.attr("id") != "jasmine_content" && $child.attr("id") != "HTMLReporter" && $child.attr('name') != "top") {
        $child.remove();
      }
    });
  });

  afterEach(function(){
   $('body').scrollTop(0);
  });
})($);
