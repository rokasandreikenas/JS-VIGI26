import {
  facebookBlue,
  gmailBlue,
  gmailRed,
  gmailLightRed,
  gmailYellow,
  gmailGreen,
  youtubeRed,
  youtubeBlack,
} from "./modules/colors.js";
import numbers, { zero, nine } from "./modules/numbers.js";
import { addition } from "./modules/math.js";
import renderHeader from "./modules/header.js";
import header from "./modules/codeAcademyHeader.js";

console.log(
  facebookBlue,
  gmailBlue,
  gmailRed,
  gmailLightRed,
  gmailYellow,
  gmailGreen,
  youtubeRed,
  youtubeBlack
);

console.log(numbers, zero, nine);
console.log(addition(zero, nine));

renderHeader();

header(document.body);
