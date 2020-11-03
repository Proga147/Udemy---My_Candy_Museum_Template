    $(function () {

        $(document).scroll(function () {
  
          var $nav = $("#mainNavbar");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  
  
        })
  
  
      });
  
      var text="";
      var i;
      for (i = 0; i < 7; i++) {
      text += "<h2>MUSEUM <span>/</span>OF<span>/</span>CANDY</h2>"
      }
      $("#headingGroup").html(text);