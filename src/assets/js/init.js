(function($){
  $(function(){
    $('.fixed-action-btn').floatingActionButton();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel({
      dist: -80,
      // numVisible: 5,
      // noWrap: false
    });
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
    $('.tap-target').tapTarget();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('input#input_text, textarea#description').characterCounter();    
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
   

  }); // end of document ready
})(jQuery); // end of jQuery name space