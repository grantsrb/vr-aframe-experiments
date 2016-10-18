$(document).ready(function() {
  var away = true;

  // Translation
  setInterval(function() {
    var spherePosition = $("a-sphere").attr("position");

    if(spherePosition.z >= -50 && away)
      spherePosition.z -= .5;
    else if (spherePosition.z <= -10 && away == false){
      spherePosition.z += .5;
    }
    if(spherePosition.z <= -50)
      away = false;
    if(spherePosition.z >= -30)
      away = true;
    var newSpherePosition = spherePosition.x + " " + spherePosition.y + " " + spherePosition.z;
    $("a-sphere").attr("position",  newSpherePosition);
  }, 100);


  // Orbit
  setInterval(function() {
    var spherePosition = $("a-sphere").attr("position");
    var sphereVector = [spherePosition.x,spherePosition.y,spherePosition.z];
    sphereVector = orbitalGenerator(sphereVector, (Math.PI/150.0));
    var newSpherePosition = sphereVector[0] + " " + sphereVector[1] + " " + sphereVector[2];
    $("a-sphere").attr("position",  newSpherePosition);
  }, 100);


});

function orbitalGenerator(vector, angle) {
  var x = Math.cos(angle)*vector[0] - Math.sin(angle)*vector[2];
  var z = Math.sin(angle)*vector[0] + Math.cos(angle)*vector[2];
  return [x,vector[1],z];
}
