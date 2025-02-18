let Marks = prompt("Enter your marks");

if(Marks>=90 && Marks<=100) {
    console.log("your grade A1")

}
else if( Marks<=90 && Marks>=80){
    console.log("your grade A")
}
else if(Marks<=80 && Marks>=70) {
    console.log("B")
}
else if(Marks>=70 && Marks<=60) {
    console.log("c")
}
else if(Marks>=60 && Marks>=50){
    console.log( "D")
}
else{
    console.log("fail")
}