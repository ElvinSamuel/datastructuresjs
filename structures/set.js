/* Sets */

function Set() {
    var collection = [];
    
    // No repeat data in a set, this is where we check for that:
    this.Has = function(element){
        // clever way of making a boolean (true/false)
        return (collection.indexOf(element) !== -1);
    };
    
    this.Values = function(){
        return collection;
    };
    
    this.Add = function(element){
        if(!this.Has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    
    this.Remove = function(element){
        if(this.Has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        
        return false;
    };
    
    this.Size = function(){
        return collection.length;
    };
    
    this.Union = function(otherSet){
        var unionSet = new Set();
        var firstSet = this.Values;
        var secondSet = otherSet.Values();
        
        firstSet.forEach(function(e){
            unionSet.Add(e);
        });
        
        secondSet.forEach(function(e){
            unionSet.Add(e);
        });
        
        return unionSet;
    };
    
    // Intersection: combines the two sets into a new set
    // remember -- no repeats
    this.Intersection = function(otherSet){
        var intersectionSet = new Set();
        var firstSet = this.Values();
        firstSet.forEach(function(e){
            if(otherSet.Has(e)){
                intersectionSet.Add(e);
            }
        });
        
        return intersectionSet;
    };
    
    // Difference: returns the values that are different b/w sets
    this.Difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.Values();
        
        firstSet.forEach(function(e){
            if(!otherSet.Has(e)){
                differenceSet.Add(e);
            }
        });
        
        return differenceSet;
    };
    
    this.Subset = function(otherSet){
        var firstSet = this.Values();
        return firstSet.every(function(value){
            return otherSet.Has(value);
        });
    };
}

var setA = new Set();
var setB = new Set();
setA.Add("a");
setB.Add("b");
setB.Add("c");
setB.Add("a");
setB.Add("d");

console.log(setA.Values());
console.log(setB.Values());
// shouldn't return the duplicate 'b'
console.log(setA.Subset(setB));
console.log(setA.Intersection(setB).Values());
console.log(setB.Difference(setA).Values());

var setC = new Set();
var setD = new Set();

setC.Add("a");
setD.Add("b");
setD.Add("c");
setD.Add("a");
setD.Add("d");

console.log(setD.Values());
setD.Remove("a");
console.log(setD.Values());
// return --> ['b', 'c', 'd']
console.log(setD.Has("a"));
// return --> false (removed a right before)
console.log(setD.Add("d"));
// return --> false (we already have a 'd')