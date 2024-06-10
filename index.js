function OpenNav(){
    document.getElementById("Nav").style.width= "100%"
}
function CloseNav(){
    document.getElementById("Nav").style.width= "0"
}
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function url() {
  location.href="https://www.hay88.one/?inviteCode=2883543";
}