$(document).ready(function() {
  var away = true;

  // // Translation
  // setInterval(function() {
  //   var horizontalSpherePosition = $("#horizontal-orbit").attr("position");
  //
  //   if(horizontalSpherePosition.z >= -50 && away)
  //     horizontalSpherePosition.z -= .5;
  //   else if (horizontalSpherePosition.z <= -10 && away == false){
  //     horizontalSpherePosition.z += .5;
  //   }
  //   if(horizontalSpherePosition.z <= -50)
  //     away = false;
  //   if(horizontalSpherePosition.z >= -30)
  //     away = true;
  //   var newSpherePosition = horizontalSpherePosition.x + " " + horizontalSpherePosition.y + " " + horizontalSpherePosition.z;
  //   $("#horizontal-orbit").attr("position",  newSpherePosition);
  // }, 100);


  // Orbit
  setInterval(function() {
    var orbitAngle = Math.PI/150.0;
    var horizontalSpherePosition = $("#horizontal-orbit").attr("position");
    var verticalSpherePosition = $("#vertical-orbit").attr("position");
    $("#horizontal-orbit").attr("position",  orbit(horizontalSpherePosition, orbitAngle, 1));
    $("#vertical-orbit").attr("position",  orbit(verticalSpherePosition, orbitAngle, 0));

    var boxRotation = $("a-box").attr("rotation");
    $("a-box").attr("rotation", rotate(boxRotation));

  }, 100);

});

function orbit(position, angle, rotationAxis) {
  var positionVector = [position.x,position.y,position.z];
  positionVector = orbitalGenerator(positionVector, angle, rotationAxis);
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

function orbitalGenerator(vector, angle, rotationAxis) {
  var axes = findAxes(rotationAxis);

  var newCoord1 = Math.cos(angle)*vector[axes[0]] - Math.sin(angle)*vector[axes[1]];
  var newCoord2 = Math.sin(angle)*vector[axes[0]] + Math.cos(angle)*vector[axes[1]];

  vector[axes[0]] = newCoord1;
  vector[axes[1]] = newCoord2;

  return vector;
}

function findAxes(rotationAxis) {
  var axes = [];
  for(var i = 0; i < 3; i++) {
    if(i != rotationAxis) {
      axes.push(i);
    }
  }
  return axes;
}
