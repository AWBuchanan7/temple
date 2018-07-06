/* ===================
 * == Configuration ==
 * ===================
 */
var RESIDENCE = 'C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/';

/* =======================
 * == Define Mod Search ==
 * =======================
 */
Duktape.modSearch = function (id) {
    // This seems to require an absolute path. We'll need a fix to use a relative path here though.
    console.log('Import: ' + RESIDENCE + id+ '.js') ;
    var res = fs.readFile(RESIDENCE + id+ '.js');   
    
    if (res == false) { console.log('Import Failed.'); }
    
    //Some error handling would be nice.
    return res.toString();
}

var CAMERAMOD = require('ExampleMods/CameraController.mod');
var CameraMod = new CAMERAMOD.ModMain();

var DISPLAYMOD = require('ExampleMods/DisplayAmplify.mod');
var DisplayMod = new DISPLAYMOD.ModMain();

CameraMod.Init(mem, u8, u16, u32);
DisplayMod.Init(mem, u8, u16, u32);

while (true) {
    CameraMod.Run();
    DisplayMod.Run();
}