import { CountUp } from "../node_modules/countup.js/dist/countUp.min.js";

const options = {
  duration: 10,
};

window.onload = function () {
  var countUp = new CountUp("countUp-el1", 4568, options);
  countUp.start();
  var countUp = new CountUp("countUp-el2", 6513, options);
  countUp.start();
  var countUp = new CountUp("countUp-el3", 780, options);
  countUp.start();
  var countUp = new CountUp("countUp-el4", 1356, options);
  countUp.start();
};
