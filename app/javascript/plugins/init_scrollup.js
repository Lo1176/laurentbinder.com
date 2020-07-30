// my const 'myscroll' is not working ?? Why ??
// const myscroll = document.querySelector('.scrollup');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.querySelector('.scrollup').style.display = "block";
  } else {
    document.querySelector('.scrollup').style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
export default scrollFunction;
