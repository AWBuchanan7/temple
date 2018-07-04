/* ===================
 * == Configuration ==
 * ===================
 */
var residence = 'C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/';

/* =======================
 * == Define Mod Search ==
 * =======================
 */
Duktape.modSearch = function (id) {
    // This seems to require an absolute path. We'll need a fix to use a relative path here though.
    console.log('Import: ' + residence + id + '.js');
    var res = fs.readFile(residence + id + '.js');   
    
    if (res == false) { console.log('Import Failed.'); }
    
    //Some error handling would be nice.
    return res.toString();
}

/* ===================
 * == Import Temple ==
 * ===================
 */

// Search the Temple directory
var templeDir = fs.readdir(residence + 'Temple/');
var Temple = {};

// If the Temple directory read didn't fail
if (templeDir != false) {
    //For each Subtemple found
    templeDir.foreach(function(file, index) {
        // Load the Subtemple
        var SubTemple = require('Temple/' + file);
        // Register the Subtemple
        Temple[SubTemple.Name] = SubTemple.Function;
    });

    const ButtonMap = 'ButtonMap';
    const GameCamera = 'GameCamera';
    const Player1 = 'Player1';
    const Player3 = 'Player3';
} else {
    console.log('Failed to load Temple.');
    debug.breakhere();
}

console.log('Temple loaded successfully.');

/* =================
 * == Import Mods ==
 * =================
 */
var CAMERAMOD = require('ExampleMods/CameraController.mod');
console.log('Camera Control loaded.');

console.log('All temple mods loaded successfully.');

/* ==============
 * == Run Mods ==
 * ==============
 */
while (true) {
    CAMERAMOD.Mod();
}
