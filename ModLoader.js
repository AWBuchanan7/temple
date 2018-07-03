Duktape.modSearch = function (id) {
    var res = fs.readFile('C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/' + id + '.js');
    return res.toString();
}

// Import Temple
var CAMERA = require('Game/Camera');
const camera = CAMERA.GameCamera();
var INPUT = require('Game/Input');
const player1 = INPUT.Player1();
const player3 = INPUT.Player3();
const button = require('Game/Button');

// Import Mods
var CAMERAMOD = require('ExampleMods/CameraController.mod');
console.log('Camera Control loaded.')

// Run Mods
while (true) {
  CAMERAMOD.Mod();
}
