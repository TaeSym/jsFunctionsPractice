var startMyDay = function () {
  return "Time to get your glow on!";
};

console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie());
console.log(favoriteCookie("Snickerdoodle"));

var introduce = function (name, occupation) {
  return `My name is ${name} and I am a ${occupation}.`;
};

console.log(introduce("Shaunte", "Accountant"));
console.log(introduce("Jordan", "Pharmacy Technician"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Good job staying hydrated!");
  } else if (numGlasses < 8) {
    console.log("Not bad, but let's aim for 8 glasses tomorrow!");
  }
};

hydrationFeedback();
