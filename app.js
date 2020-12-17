$(".btn-add").mouseenter(function() {
  var chosenButton = $(this).attr("id");
  animateHighlight(chosenButton);
});

$(".btn-add").mouseleave(function() {
  var chosenButton = $(this).attr("id");
  removeHighlight(chosenButton);
});

function animateHighlight(currentButton) {
  $("." + currentButton).addClass("highlight");
}

function removeHighlight(currentButton) {
    $("." + currentButton).removeClass("highlight");
}
