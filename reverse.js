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
l.reverse()
// console.log(l.traverse()); 

/*                  Problem Solution            */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head){
    let curr=head
    let prev=null
    let next=null

    while (curr!=null) {
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    head=prev
    return head
}