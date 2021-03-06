const permissionButton = document.getElementById("permission")
permissionButton.addEventListener("click", requestOrientationPermission)

function requestOrientationPermission() {
  if (
    typeof( DeviceOrientationEvent ) !== "undefined" &&
    typeof( DeviceOrientationEvent.requestPermission !== "undefined")
  ) {
    DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == "granted") {
        window.addEventListener("deviceorientation", handleOrientation)
      }
    })
    .catch(console.error)
  }
}

// document.getElementById("permission").addEventListener("click", (e) => {
//   DeviceOrientationEvent.requestPermission()
//     .then(response => {
//       if (response == 'granted')
//         window.addEventListener("deviceorientation", handleOrientation, true)
//     })
//     .catch(console.error)
// })

function handleOrientation(event) {
  console.log(event.absolute)
  console.log(event.alpha)
  console.log(event.beta)
  console.log(event.gamma)
  document.getElementById("data").innerHTML = `alpha: ${event.alpha}, beta: ${event.beta}, gamma: ${event.gamma}`
}

// function setup() {
//   const canvas = createCanvas(500, 500).parent("canvas")
//   rectMode(CENTER)
// }

// function windowResized() {
//   resizeCanvas(500, 500) //remember to adjust
// }

// function draw() {
//   background(11)
//   fill(255)
//   rect(width / 2, height / 2, 40, 40)


// }


