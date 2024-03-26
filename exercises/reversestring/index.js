// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
function reverse(str) {
    return str.split('').reduce((rev, char) =>  char + rev, '');
}*/

/*
function reverse(str) {

    let reversed= '';


    for(let character of str){
        reversed=character+reversed;
    }

    return reversed;

}*/

/*
function reverse(str) {

    return str.split('').reverse().join('');

}
*/

/*

function reverse(str) {

    const stack=new Stack(); 
    let reversechar='';


    for (char of str){

        stack.push(char);
        
    }

    stack.print();

    while(stack.size()>0){
        
        reversechar=stack.pop() + reversechar;
        
    }

    return reversechar;



}

class Stack{
    constructor(){
        this.stack={};
        this.count=0;
    }

    push(element){
        this.stack[this.count]=element
        this.count++;
        return this.stack
    }
    pop(){
        this.count--;
        const element=this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek(){
        return this.stack[this.count -1];

    }

    size(){
        return this.count;
    }
    print(){
        console.log(this.stack);
    }
       
    

}
*/

console.log(reverse('hello'));

module.exports = reverse;
