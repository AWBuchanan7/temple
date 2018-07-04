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
    console.log('Import: ' + residence + id);
    var res = fs.readFile(residence + id);   
    
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

console.log(templeDir);

// If the Temple directory read didn't fail
if (templeDir != false) {
    //For each Subtemple found
    for (var i = 0; i < templeDir.length; i++) {
        // Load the Subtemple
        var SubTemple = require('Temple/' + templeDir[i]);

        console.log(SubTemple.Name());

        // Register the Subtemple
        Temple[SubTemple.Name()] = SubTemple.Function;
    }
} else {
    console.log('Failed to load Temple.');
    debug.breakhere();
}

console.log('Temple loaded:');

console.log(Temple);

/* =================
 * == Import Mods ==
 * =================
 */
var CAMERAMOD = require('ExampleMods/CameraController.mod.js');
console.log('Camera Control loaded.');

console.log('All temple mods loaded successfully.');

/* ==============
 * == Run Mods ==
 * ==============
 */
while (true) {
    CAMERAMOD.Mod(Temple);
}
