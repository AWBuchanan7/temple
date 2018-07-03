# Temple
A JS library for modding Ocarina of Time.

## Usage
Grab the latest version of Project64 and include the Temple files in your "./Project64/Scripts/" directory. The scripts should be available under the 'Debugger' menu at the 'Scripts' option.

## Current State
Temple is in _very_ early stage development. Currently the actual implementation of Temple exists in the "./Game/" directory. An early example of how Temple would be used is defined in the files in "./ExampleMods/".

## Objectives of Temple

### Versioning
Temple currently targets the NTSC 1.0 version of Ocarina of Time. Though supporting other versions, the debug ROM, Master Quest, and Majora's Mask is on our roadmap, these implementations will come in the distant future.

### Scope
Currently Temple provides classes for using the controller/inputs and the game's camera in a limited fashion. The goal is for Temple to, in broad strokes, expand to provide classes for modifying anything and everything in the game, from equipment and items to the game's interface, and so on. 

### Mod Loader
Currently the ModLoader (defined in the "./ModLoader.js" file) statically loads the CameraController.mod that is in "./ExampleMods/" and runs it in an unending loop. Going forward, the goal is for the ModLoader to be more dynamic, loading any mods present in Project64's "./Scripts/" directory.
