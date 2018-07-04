/*
 * Refer to: https://wiki.cloudmodding.com/oot/Link_Animations
 */

var Link = function() {
  // Link's tunic's color 801DAB6C 00??
  
  // Age Modifier:
  // D01C84B5 0010
  // 8011A5D7 00??
  // Digits: 00 Adult; 01 Child
  
  // Use Items Anywhere
  // 8106ECA2 0000
  // 8106ECAA 0000
  
  // Replace Roll with Jump 
  // D11DABF0 3FA0
  // 811DAA90 40FF
};


exports.Link = function() {
    return new Link();
}
