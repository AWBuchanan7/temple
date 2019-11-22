# Temple

![https://raw.githubusercontent.com/moon-raccoon-mods/Temple/master/triforce.jpg](https://raw.githubusercontent.com/moon-raccoon-mods/Temple/master/triforce.jpg)

A library for modding The Legend of Zelda: Ocarina of Time with TypeScript in Project64. Temple is in _very_ early stage development. Currently the actual implementation of Temple exists in the "./Temple/" directory of the repository. Early demonstrative mods that are built with Temple are included in the "./ExampleMods/" directory of the repository.

__Please see our wiki for more information: [Temple Wiki](https://github.com/moon-raccoon-mods/Temple/wiki)!__ The wiki includes info on where the project is going, and how to install Temple!

Also, feel free to open an issue if you have problems! Or, if you are a hacker feel free to contribute or to open an issue to get in touch with me to share information about the game! Anything helps, even just Gameshark codes/memory addresses and what they do!

## Building
You'll need [grunt-cli](https://github.com/gruntjs/grunt-cli), once you have it just run the "grunt" command in the root directory of the project and it will bundle everything up into the "./builds/" directory, where it will be ready for deployment.

## Support
Please consider supporting me (and thus, development) on [Patreon](https://www.patreon.com/moonraccoon)!

## Example Mods
Currently Temple comes bundled with some example mods, the most notable of these mods are described here. _(Note: these mods are in early alpha stage development and come with a fair share of bugs, give them a try, but please understand they are essentially "early access")._

 * __CameraController.mod.ts__ this mod adds dynamic control to the game's camera, allowing player three's analog stick to rotate the camera around Link freely.
 * __DisplayAmplify.mod.ts__ this mod aims to overhaul the game by enhancing the aspect ratio, framerate, and draw distance.
 * __EquipmentChange.mod.ts__ this mod simply binds the Slingshot to B and the kokiri sword to C-Down as a proof of concept for dynamically controlling what items are equipped. This mod is not configured to run by default. 
