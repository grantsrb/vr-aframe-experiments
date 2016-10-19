$(document).ready(function() {
  var away = true;

  // // Translation
  // setInterval(function() {
  //   var spherePosition = $("a-sphere").attr("position");
  //
  //   if(spherePosition.z >= -50 && away)
  //     spherePosition.z -= .5;
  //   else if (spherePosition.z <= -10 && away == false){
  //     spherePosition.z += .5;
  //   }
  //   if(spherePosition.z <= -50)
  //     away = false;
  //   if(spherePosition.z >= -30)
  //     away = true;
  //   var newSpherePosition = spherePosition.x + " " + spherePosition.y + " " + spherePosition.z;
  //   $("a-sphere").attr("position",  newSpherePosition);
  // }, 100);


  // Orbit
  setInterval(function() {
    var spherePosition = $("a-sphere").attr("position");
    $("a-sphere").attr("position",  orbit(spherePosition));

    var boxRotation = $("a-box").attr("rotation");
    $("a-box").attr("rotation", rotate(boxRotation));

  }, 100);

});

function orbit(position) {
  var positionVector = [position.x,position.y,position.z];
  positionVector = orbitalGenerator(positionVector, (Math.PI/150.0));
  return positionVector.join(" ");
}

function rotate(rotationAngles) {
  var rotationVector = [rotationAngles.x,rotationAngles.y,rotationAngles.z];
  rotationVector = rotationTransform(rotationVector, 1, 5, -3);
  return rotationVector.join(" ");
}

function rotationTransform(angleVector, xAng, yAng, zAng) {
  angleVector[0] += xAng;
  angleVector[1] += yAng;
  angleVector[2] += zAng;
  return angleVector;
}

function orbitalGenerator(vector, angle) {
  var x = Math.cos(angle)*vector[0] - Math.sin(angle)*vector[2];
  var z = Math.sin(angle)*vector[0] + Math.cos(angle)*vector[2];
  return [x,vector[1],z];
}
