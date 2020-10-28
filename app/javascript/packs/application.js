require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
// require("letterfx")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";
// import initDetailsLetters from "../plugins/init_details_letters";
import initSrollUp from "../plugins/init_scrollup";
import { init } from 'ityped';
// import initItyped from "../plugins/init_ityped";


// initDetailsLetters();
initLetters();
initSrollUp();

// letterfx is not working
// $("#tagline").letterfx({"fx":"fly-right fly-bottom spin"});

const devElement = document.querySelector('#dev')

init(devElement, { showCursor: false, startDelay: 50, typeSpeed:  90, backDelay:  500, disableBackTyping: false, strings: ['Création de sites Web modernes', 'sur mesure', 'responsive', 'référencés', 'magnifico !' ] });
