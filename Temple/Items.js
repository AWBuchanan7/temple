// https://wiki.cloudmodding.com/oot/Cheat:Items

var Items = function() {
    var ItemEnum = {
        "SWORD_KOKIRI" : 0x003B,
        "SWORD_MASTER" : 0x003C,
        "SWORD_GIANTKNIFE" : 0x003D,
        
        "DEKU_STICK" : 0x0000,
        "DEKU_NUT" : 0x0001,
        "BOMB" : 0x0002

    }    
    return Object.freeze(ItemEnum)
}

exports.ItemMap = function() {
    return new Items();
}
