/* Stack */

function Stack(){
    var top = null;
    var count = 0;
    
    // Returns the number of items in the queue
    this.GetCount = function(){
        return count;
    };
    
    /* Tacking on methods separately */
    this.Push = function(data) {
        // Creates a node containing the data and a reference to next item (if any).
        var node = {
            data: data,
            next: null
        };
        
        // links current node to top.
        node.next = top;
        
        // links the current node to the top node.
        top = node;
        
        count++;
    };
    
    this.Peek = function(){
        //If there are no items, returns null. (avoid error)
        if(top === null){
            return null;
        } else {
            return top.data;
        }
    };
    
    this.Pop = function(){
        if (top === null){
            return null;
            } else {
            // Use the 'out' variable to save the current top.
            var out = top;
            top = top.next;
            
            if (count > 0){
                count--;
            }
            
            return out.data;
        }
    };
    
    this.DisplayAll = function(){
        if(top === null){
            return null;
        } else {
            //instantiate an array
            var arr = new Array();
            var current = top;
            
            // iterate through array until we reach bottom
            for (var i = 0; i < count; i++){
                arr[i] = current.data;;
                current = current.next;
            }
            return arr;
        }
    }
}


module.exports = Stack;