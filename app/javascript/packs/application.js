require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";
// import initDetailsLetters from "../plugins/init_details_letters";
import initSrollUp from "../plugins/init_scrollup";

initLetters();
// initDetailsLetters();
initSrollUp();
