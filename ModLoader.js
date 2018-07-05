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

var CAMERAMOD = require('ExampleMods/CameraController.mod.js');
var TEST = new CAMERAMOD.ModMain();
TEST.Init(mem, u8, u16, u32);
while (true) {
    TEST.Run();
}