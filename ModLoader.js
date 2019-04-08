/* ===================
 * == Configuration ==
 * ===================
 */
var RESIDENCE = 'C:/AWBuchanan7/Ocarina of Time (Angrylion)/Scripts/';

/* =======================
 * == Define Mod Search ==
 * =======================
 */
Duktape.modSearch = function (id) {
    // This seems to require an absolute path. We'll need a fix to use a relative path here though.
    console.log('ModSearch Import: ' + RESIDENCE + id+ '.js') ;
    var res = fs.readFile(RESIDENCE + id+ '.js');   
    
    if (res == false) { console.log('Import Failed.'); }
    
    //Some error handling would be nice.
    return res.toString();
}

console.log('Loading the CameraControler mod...');
var CAMERAMOD = require('ExampleMods/CameraController.mod');
var CameraMod = new CAMERAMOD.ModMain();

console.log('Loading the DisplayAmplify mod...');
var DISPLAYMOD = require('ExampleMods/DisplayAmplify.mod');
var DisplayMod = new DISPLAYMOD.ModMain();

console.log('Loading the DisplayAmplify configuration...');
var config = fs.readFile(RESIDENCE + 'Config/DisplayAmplify.config.json');   
if (config == false) { console.log('Failed to read DisplayAmplify.config.json'); }

CameraMod.Init(mem, u8, u16, u32);
DisplayMod.Init(mem, u8, u16, u32, config);

console.log('Begin Temple Execution Cycle!');
while (true) {
    CameraMod.Run();
    DisplayMod.Run();
}