console.log("chaliye shuru karte hai");
//object create
let rectangle={
    length: 1,
    breadth: 2,
    draw: function() {
        console.log('drawing the rectangle');

    }
}
//factory function

function createReactangle(length ,breadth){
    let rectangle ={
        length, breadth,
        draw: function(){
            console.log('drawing the rectangle');
        }
    }
    return rectangle ;
}
 let rectangleobj1=createReactangle(5,6);


//type 2
 //function createReactangle(length ,breadth){
   //  let rectangle ={
   //  length:length , breadth:breadth,
   //     draw: function(){
   //         console.log('drawing the rectangle');
   //     }
//    }
//    return rectangle ;
//}
// let rectangleobj1=createReactangle();
//
////type 3
// function createReactangle(length ,breadth){
//    let rectangle ={
//        length, breadth,
//        draw: function(){
//            console.log('drawing the rectangle');
//        }
//    }
//    return rectangle ;
//}
// let rectangleobj1=createReactangle();
//
//
// //type4
// function createReactangle(len ,brea){
//    let rectangle ={
//        length:len, breadth:brea,
//        draw: function(){
//            console.log('drawing the rectangle');
//        }
//    }
//    return rectangle ;
//}
// let rectangleobj1=createReactangle();


//constructor function -> pascal notation -> first letter of every word is capital 
// constructor function-> prop/method-> intialise/define
//function Rectangle(){
//
//    this.length=2;
//    this.breadth=3;
//    this.draw=function(){
//        console.log('drawing');
//    }
//}
////object creation using constructor function
//let  rectangleobject= new Rectangle();
//rectangleobject.color='yellow';
//console.log(rectangleobject);
// delete rectangleobject.color;
// console.log(rectangleobject);
//
//

 //constructor of Rectangle is Function ->F must be in capital->how these function is excuting
 //let Rect =new Function ('length','breadth',`this.length=2;
 // this.breadth=3;
 //this.draw=function(){
 //    console.log('drawing');
 //}`)
 //let object1= new Rect(2,4);
 //console.log(object1);

 //let a={vslue: 10};
 //// let b=a;
 //a.value++;
 //console.log(a.value);
 //console.log(b.value);


//function ind(a){
//    a.value++;
//}
// let a={value:10}
// ind(a);
// console.log(a.value);


let krishna={
    length:4,
    breadth:5
};

////for -in
//for(let key in krishna){
//    console.log(key ,krishna[key]);
//}
//
////for -of
//for(let key of krishna ){
//    console.log(key);
//}
//for(let key of Object.keys(krishna) ){
//    console.log(key);
//}
//for(let key of Object.entries(krishna) ){
//    console.log(key);}
//
//
//if('length' in krishna){
//    console.log("yes");    //to check wheather key is present or not;
//}
//else 
//console.log("no");



 //cloning by iteration
//let src={
////    a:23,d:12,f:34
////};
////let des={};
////for(let key in src){
////    des[key]=src[key];
////}
////console.log(des);
////src.a++;
//console.log(des);

 //cloning by asasign
//let src={
//    a:23,d:12,f:34
//};
//
//let dest = Object.assign({},src);
//console.log(dest);
//src.b++;
//console.log(dest);


//cloning by spreads
//let src={
//    a:23,d:12,f:34
//};
//let dest={...src};
//console.log(dest);
//src.a++;
//console.log(dest);


let src={
    a:23,d:12,f:34
};
let src2={
    a:23,e:90,
};
let est= Object.assign({},src,src2);
console.log(est);
