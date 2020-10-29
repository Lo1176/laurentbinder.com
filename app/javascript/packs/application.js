require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
// require("letterfx")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";
// import initDetailsLetters from "../plugins/init_details_letters";
import initSrollUp from "../plugins/init_scrollup";
import { init } from 'ityped'
// import initItyped from "../plugins/init_ityped";


// initDetailsLetters();
initLetters();
initSrollUp();

// letterfx is not working
// $("#tagline").letterfx({"fx":"fly-right fly-bottom spin"});


// https://github.com/luisvinicius167/ityped
const devElement = document.querySelector('#dev')
const devSuffixElement = document.querySelector('#dev-suffix')
function firstSlogan(){
  init(devElement, { showCursor: false, loop: false, startDelay: 50, strings: [ 'Création de sites Web ' ]});
}

setTimeout(function suffixSlogan() {
     init(devSuffixElement, { loop: false, typeSpeed:  90, backDelay:  500, disableBackTyping: false, strings: [ 'modernes', 'sur mesure', 'responsive', 'référencés', 'magnifico !', 'sur mesure ;)' ] });

  }, 8000);

// firstSlogan();
