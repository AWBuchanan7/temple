/*
 *
 * THIS CLASS TO BE DEVELOPED
 *
 */

/*
 * Refer to: https://wiki.cloudmodding.com/oot/Cheat:Interface
 */

// magic meter size. (is this NTSC 1.0?)
// D01C84B4 0001
// 8011B9C5 0000
// D01C84B4 0001
// 8011B9C4 00xx
// xx can be : 00 - Tiny; 02 - Extra Large; 03- Off screen


var GameInterface = function() {
    console.log("More to come.")
};

exports.Name = function() {
    return "GameInterface";
}

exports.Function = function() {
    return new GameInterface();
}
