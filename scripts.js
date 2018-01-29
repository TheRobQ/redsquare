$( document ).ready(function() {
  var rotater = 90
  var increment = 90
    $('.redSquare').click((event) =>{
    $(event.target).css('transform',  'rotate('+rotater+'deg)')
    rotater += increment
    })
});
