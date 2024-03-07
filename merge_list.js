class Node{
    constructor(value){
        this.head=null
        this.value=value
    }
}

class linklist{
    constructor(){
        this.head=null
    }
    prepand(value){
        let new_node=new Node(value)
        if(this.head==null){
            new_node.next=this.head
            this.head=new_node
        }else{
            new_node.next=this.head
            this.head=new_node
        }
    }
    traverse(){
        let curr=this.head
        let arr=[]
        while (curr!=null) {
            arr.push(curr.value)
            curr=curr.next
        }
        return arr
    }
    reverse(){
        let next=null
        let prev=null
        let curr=this.head
        while (curr!=null) {
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}

let l=new linklist()
l.prepand(9)
l.prepand(10)
l.prepand(90)
l.prepand(100)
// console.log(l.traverse()); 

let g=new linklist()
g.prepand(9)
g.prepand(10)
g.prepand(90)
g.prepand(100)


// console.log(merge(list1,list2))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    /*
    set the base cnditions
        1-if list1 is none retur list2 
        2-if lisr2 is nonne return list1
    Remaining code
        1-make a empty link list called dummy
        2-itrate a loop on both list
        3-compare list element with list 2.
        4-if list is less add in the empty list adn increment the list1 and vice versa.
    */
   if(list1==null){
    return list2
   }else if (list2==null){
    return list1
   }else{
    let dummy=new linklist()
    let curr=dummy
    // console.log(dummy,list1,list2);
    // console.log(curr);
    while ((list1)&& (list2)) {
        // console.log(list1.value,list2.value);
        if(list1.value<list2.value){
            console.log(list1.value);
            curr.next=list1
            list1=list1.next    
        }else{
            console.log(list2.value);
            curr.next=list2
            list2=list2.next
        }
        curr=curr.next
        console.log(dummy);
    }
    if (list1!=null) {
        curr.next=list1
    } else {
        curr.next=list2
    }
    return dummy.next
   }
}
// let x=mergeTwoLists(l,g)
console.log(mergeTwoLists(l,g));