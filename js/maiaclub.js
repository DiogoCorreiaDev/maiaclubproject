$(document).ready(function() {
    
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
  }});
    
$(".header__heading-1").waypoint(function(direction) {
        if (direction == "down") {
            $(".regressa-topo").css("display", "block");
        } else {
           $(".regressa-topo").css("display", "none");
        }
    },{
  offset: "0"
    });

    
/*mobile navigation*/

for (var index = 0; index < document.getElementsByClassName("navigation__link").length; index ++ ) {

document.getElementsByClassName("navigation__link")[index].addEventListener("click", function(){
    document.getElementById("navi-toggle").checked = false;
});
}
/* MAP: */

var map = new GMaps({
  div: '.contactos__mapa',
  lat: 41.233410,
  lng: -8.629,
    zoom: 18

});
map.addMarker({
  lat: 41.233410,
  lng: -8.626537,
  title: 'Maia Club',
    infoWindow: {
      content: '<p>Ginásio Maia Club</p>'
    }
});
    
});