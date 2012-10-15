describe("ajaxify", function() {
  var presenter, $link;

  beforeEach(function() {
    $link = $("<a class='action' data-callback='show-message' data-presents='ajaxify' data-method='put' href='foo'>");
    this.setFixture($link);

    presenter = com.gust.initializers("ajaxify")($link);
  });

  describe("initialize", function() {
    beforeEach(function() {
      spyOn(presenter, "performAjax");
      $link.click();
    });

    it("hooks up the link's click event", function() {
      expect(presenter.performAjax).toHaveBeenCalled();
    });
  });

  // describe("performAjax", function() {
    // var event, $link;

    // beforeEach(function() {
      // spyOn($, "ajax");

      // event = jasmine.createSpyObj("e", ["preventDefault", "stopPropagation"]);
      // presenter.performAjax(event);
    // });

    // it("cancels the event", function(){
      // expect(event.preventDefault).toHaveBeenCalled();
      // expect(event.stopPropagation).toHaveBeenCalled();
    // });

    // it("calls $.ajax with the link's properties", function() {
      
    // });
  // });
});
