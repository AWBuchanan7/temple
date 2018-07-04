var residence = 'C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/';

Duktape.modSearch = function (id) {
    // This seems to require an absolute path. We'll need a fix to use a relative path here though.
    console.log('Import: ' + residence + id + '.js');
    var res = fs.readFile(residence + id + '.js');   
    
    if (res == false) { console.log('Import Failed.'); }
    
    //Some error handling would be nice.
    return res.toString();
}

/*
 * == Import Temple ==
 */

// Search the Temple directory
var templeDir = fs.readdir(residence + 'Game/');
var Temple = {};

// If the Temple directory read didn't fail
if (templeDir != false) {
    //For each Subtemple found
    templeDir.foreach(function(file, index) {
        // Load the Subtemple
        var SubTemple = require('Game/' + file);
        // Register the Subtemple
        Temple[SubTemple.Name] = SubTemple.Function;
    });
}

console.log('Temple loaded.');

/*
 * == Import Mods ==
 */
var CAMERAMOD = require('ExampleMods/CameraController.mod');
console.log('Camera Control loaded.');

/*
 * == Run Mods ==
 */
while (true) {
  CAMERAMOD.Mod();
}
