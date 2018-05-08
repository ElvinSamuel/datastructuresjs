/* Queue */

function Queue(){
    var count = 0;
    
    var head = null;
    var tail = null;
    
    this.GetCount = function(){
        return count;
    }
    
    /* 
    ========================================
       Methods
    ======================================== 
    */
    this.Enqueue = function(data) {
        // Creates a node with data
        var node = {
            data: data,
            next: head
        };
        
        // if first item, head is also tail
        if (head === null){
            tail = node;
        }
        
        head = node;
        count++;
    }
    
    this.Dequeue = function(){
        if (count === 0){
            return;
        }
        
        else {
            var current = head;
            var previous = null;
            
            while(current.next){
                previous = current;
                current = current.next;
            }
            
            if(count > 1){
                previous.next = null;
                tail = previous;
            }
            else {
                head = null;
                tail = null;
            }
            
            count--;
        }
    }
    
    this.DisplayAll = function(){
        if (head === null){
            return null;
        }
        else {
            var arr = new Array();
            var current = head;
            
            for (var i = 0; i < count; i++){
                arr[i] = current.data;
                current = current.next;
            }
            
            return arr;
        }
    }
    
    this.PeakAt = function(index){
        if (index > -1 && index < count){
            var current = head;
            
            for(var i = 0; i < index; i++){
                current = current.next;
            }
            
            return current.data;
        }
        
        else {
            return null;
        }
    }
}

module.exports = Queue;