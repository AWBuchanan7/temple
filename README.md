# Temple
A library for modding The Legend of Zelda: Ocarina of Time with TypeScript in Project64. Temple is in _very_ early stage development. Currently the actual implementation of Temple exists in the "./Temple/" directory. An early example mod that uses Temple is defined in the "./ExampleMods/" directory.

Feel free to open an issue if you have problems! Or, if you are a hacker feel free to contribute or to open an issue to get in touch with me to share information about the game! Anything helps, even just Gameshark codes/memory addresses and what they do!

## Building
You'll need [grunt-cli](https://github.com/gruntjs/grunt-cli), once you have it just run the "grunt" command in the root directory of the project and it will bundle everything up into the "./builds/" directory.

## Editing ModLoader.js
ModLoader.js is a JavaScript "compatibility layer" that loads the compiled TypeScript up into Project64's debugger. If you add new mods you'll have to edit this file.

As well, currently you have to edit ModLoader.js to tell it where your Project64 directory is located.

## Usage
Grab the latest version of Project64 and include the built Temple files in your ".../Project64/Scripts/" directory. You should find that "ModLoader.js" is available under the 'Debugger' menu's 'Scripts' option, right-click it and select 'Run'. ModLoader will import and register Temple and then load any __configured__ mods from the "./ExampleMods/" or "./Mods/" directories.

## Example Mods
Currently Temple comes bundled with some example mods, the most notable of these mods are described here. _(Note: these mods are in early alpha stage development and come with many bugs, give them a try, but please understand they are essentially "early access")_

 * __CameraController.mod.js__ this mod adds dynamic control to the game's camera, allowing player three's analog stick to rotate the camera around Link freely. This way you can bind palyer three's controller as you see fit and have some extra flexibility in the game's controls.
 * __DisplayAmplify.mod.js__ this mod aims to overhaul the game by enhancing the aspect ratio, framerate, and draw distance.

## Objectives of Temple

### Scope
Currently Temple provides a limited set of objects for accessing the controller's input, controlling the game's camera and some other basic functionalities in a limited fashion. The goal is for Temple to, in broad strokes, expand to provide classes for modifying anything and everything in the game, from equipment and items to the game's interface, and so on.

My hope is to develop Temple to such a point that it becomes possible to fix all bugs associated with the 30 frames per second hack included in DisplayAmplify.

### Versioning
Temple currently targets the NTSC 1.0 version of Ocarina of Time. Though supporting other versions, such as the debug ROM, Master Quest, and even Majora's Mask is on our roadmap, these implementations will come in the distant future.

### Mod Loader
Currently the ModLoader (defined in the "./ModLoader.js" file) statically loads the CameraController.mod that is in "./ExampleMods/" and runs it in an unending loop. Going forward, the goal is for the ModLoader to be more dynamic, loading any mods present in Project64's "./Scripts/Mods/" or "./Scripts/ExampleMods/" directories.
