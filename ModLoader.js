Duktape.modSearch = function (id) {
    var res = fs.readFile('C:/Users/Walker/OneDrive/Games/SuperSaix Mod Manager/Util/Ocarina of Time/Scripts/' + id + '.js');
    return res.toString();
}

var CAMERAMOD = require('CameraController.mod');

while (true) {
  CAMERAMOD.Mod();
}
