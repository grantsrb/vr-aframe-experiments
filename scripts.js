$(document).ready(function() {
  setInterval(function() {
    var stringInput = $("a-sphere").attr("position");
    console.log(stringInput.z);
    stringInput.z -= .1;
    console.log(stringInput.z);
    var stringOutput = stringInput.x + " " + stringInput.y + " " + stringInput.z;
    $("a-sphere").attr("position",  stringOutput);
  }, 100);
});
