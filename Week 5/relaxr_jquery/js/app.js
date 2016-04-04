$(document).ready(function() {
$("#show-this-on-click").click(showAdditionalText)
  function showAdditionalText() {
  console.log(this)
  $("#show-this-on-click").slideDown()
  $(".readmore").hide()
  $(".readless").show()
  event.preventDefault()

  $(".readless").click(hideAdditionalText)
    function hideAdditionalText() {
      $("#show-this-on-click").slideUp()
      $(".readless").hide()
      $(".readmore").show()
      event.preventDefault()
    }
   // Prevents browser from scrolling to top when clicking
}

});
