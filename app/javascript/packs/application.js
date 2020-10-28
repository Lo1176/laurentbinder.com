require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
// require("letterfx")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";
// import initDetailsLetters from "../plugins/init_details_letters";
import initSrollUp from "../plugins/init_scrollup";

initLetters();
// initDetailsLetters();
initSrollUp();

$("#tagline").letterfx({"fx":"fly-right fly-bottom spin"});
