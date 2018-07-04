var residence = 'C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/';

Duktape.modSearch = function (id) {
    // This seems to require an absolute path. We'll need a fix to use a relative path here though.
    console.log('Import: ' + residence + id + '.js');
    var res = fs.readFile(residence + id + '.js');   
    
    if (res == false) { console.log('Import Failed.'); }
    
    //Some error handling would be nice.
    return res.toString();
}

// Import Temple

// --Old Way--
// var CAMERA = require('Game/Camera');
// const camera = CAMERA.GameCamera();
// var INPUT = require('Game/Input');
// const player1 = INPUT.Player1();
// const player3 = INPUT.Player3();
// var BUTTON = require('Game/Button');
// --------


var templeDir = fs.readdir(residence + 'Game/');
var Temple = {};

if (templeDir != false) {
    templeDir.foreach(function(file, index) { 
        var SubTemple = require('Game/' + file);
        Temple[SubTemple.Name] = SubTemple.Function;
    });
}

console.log('Temple loaded.');

// Import Mods
var CAMERAMOD = require('ExampleMods/CameraController.mod');
console.log('Camera Control loaded.');

// Run Mods
while (true) {
  CAMERAMOD.Mod();
}
