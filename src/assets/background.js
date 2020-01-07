import BG1 from "./BG1.png";
import BG2 from "./BG2.png";
import BG3 from "./BG3.png";
import BG4 from "./BG4.png";
import BG5 from "./BG5.png";

const backgrounds = [BG1, BG2, BG3, BG4, BG5];

const rnd = max => Math.floor(Math.random() * Math.floor(max));

const background = backgrounds[rnd(backgrounds.length)];

export default background;
