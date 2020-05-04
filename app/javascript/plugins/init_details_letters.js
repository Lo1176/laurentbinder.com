window.onload = showDetails;

function showDetails() {
  var div = document.getElementById("show-details");
  div.initDetailsLetters = false;
  div.onmouseover = function() {
    this.initDetailsLetters = true;
  };
}

const initDetailsLetters = () => {
  var detailsLetters = {};
  detailsLetters.opacityIn = [0,1];
  detailsLetters.scaleIn = [0.2, 1];
  detailsLetters.scaleOut = 3;
  detailsLetters.durationFirst = 3800;
  detailsLetters.durationIn = 800;
  detailsLetters.durationOut = 600;
  detailsLetters.delay = 500;

  anime.timeline({loop: false})
    .add({
      targets: '.details-letters .letters-1',
      opacity: detailsLetters.opacityIn,
      scale: detailsLetters.scaleIn,
      duration: detailsLetters.durationFirst
    }).add({
      targets: '.details-letters .letters-1',
      opacity: 0,
      scale: detailsLetters.scaleOut,
      duration: detailsLetters.durationOut,
      easing: "easeInExpo",
      delay: detailsLetters.delay
    }).add({
      targets: '.details-letters .letters-2',
      opacity: detailsLetters.opacityIn,
      scale: detailsLetters.scaleIn,
      duration: detailsLetters.durationIn
    }).add({
      targets: '.details-letters .letters-2',
      opacity: 0,
      scale: detailsLetters.scaleOut,
      duration: detailsLetters.durationOut,
      easing: "easeInExpo",
      delay: detailsLetters.delay
    }).add({
      targets: '.details-letters .letters-3',
      opacity: detailsLetters.opacityIn,
      scale: detailsLetters.scaleIn,
      duration: detailsLetters.durationIn
    }).add({
      targets: '.details-letters .letters-3',
      opacity: 0,
      scale: detailsLetters.scaleOut,
      duration: detailsLetters.durationOut,
      easing: "easeInExpo",
      delay: detailsLetters.delay
    }).add({
      targets: '.details-letters .letters-4',
      opacity: detailsLetters.opacityIn,
      scale: detailsLetters.scaleIn,
      duration: detailsLetters.durationFirst
    }).add({
      targets: '.details-letters',
      opacity: 1,
      duration: 500,
      delay: 500
    });
}

// export default initDetailsLetters;
export default showDetails;
