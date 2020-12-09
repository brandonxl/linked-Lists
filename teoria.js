class Node{
    constructor(data, next){
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // addNode
    addLastNode(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head;
            while(current.next){;
            current = current.next;
        }
        current.next = newNode;
        }
        this.size++;
    }
    // addFirstNode
    addFirstNode(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    // insert at index
  insertAt(data, position){
      if(position> 0 && position > this.size){
          return
      }
      if(position === 0 ){
          this.addFirstNode(data);
          return;
      }

      let node = new Node(data);
      let current, previous;

    //   set current to first
      current = this.head;
      let count = 0;

      while(count < position){
          previous = current; //node before index
          count++;
          current = current.next; //node after index
      }
      node.next = current;
      previous.next = node;
      this.size++;
  }

    //getIndex
    getIndex(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next
        }
        return null;
    }   

    // removeindex
    removeAtIndex(index){
        if(index > 0 && index > this.size){
            return
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    // clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }
    // printList
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }

}
let li = new LinkedList();
li.addFirstNode(100);
li.addFirstNode(200);
li.addLastNode(300);
li.insertAt(400, 1)
li.removeAtIndex(12)

li.printList();
li.getIndex(3)
console.log(li);
// li.clearList()