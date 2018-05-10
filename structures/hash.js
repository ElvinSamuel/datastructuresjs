/* Hash Table */

var Hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++){
        hash += string.charCodeAt(i);
    }
    
    return hash % max;
}

let HashTable = function(){
    
    let storage = [];
    const storageLimit = 14;
    
    this.print = function(){
        console.log(storage);
    }
    
    this.add = function(key, value) {
        // index builds that unique index from the value of the string
        var index = Hash(key, storageLimit);
        
        // we check to see if we have that index already
        if (storage[index] === undefined){
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key) {
                    storage[index][i][1] === value;
                    inserted = true;
                }
            }
            
            if (inserted === false){
                storage[index].push([key, value]);
            }
        }
    };
    
    this.remove = function(key) {
        var index = has(key, storageLimit);
        
        if (storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    delete storage[index][i];
                }
            }
        }
    };
    
    this.lookup = function(key){
        var index = hash(key, storageLimit);
        
        if (storage[index] === undefined){
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    return storage[index][i][1];
                }
            }
        }
    };
};

module.exports = Hash;