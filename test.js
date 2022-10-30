
/************Q1*************/
// function q1(x){
//     if (x<=0){
//         console.log("T");
//     }
//     else{
//         console.log("F");
//     }
// }
// q1(1);
/************Q2*************/

// function q2(y){
//     let z;
//     z=y+1;
//     console.log(z);
// }
// q2(2);

/************Q4*************/
// function q4(arr){
// let newarr=arr.map((i)=>{
//     if(i%2 !==0){
//         return("odd");
//     }
//     else{
//         return("even")
//     }
// })
// console.log(newarr);
// }
// q4([1,2,3,4,5,6,7,8,9]);

/************Q6+Q7*************/
//  let arr=["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
 
// arr.forEach((val)=>console.log(val));

/************Q8*************/
// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
//          ];

         
        //  newSeries.forEach((x)=>console.log(x.id,x.title));

         /************Q9*************/

//   let arry=newSeries.map((x)=>{
//     return([x.id,x.title]);
    
//   })
// console.log(arry);

/************Q10*************/
// let arr=newSeries.filter((x)=> x.rating<5);
// console.log(arr);

/************Q11*************/
// let courses = ["Java", "JavaScript", "Python", "C++", "PHP"];

// courses.reduce((acc, value) => {
//     if(acc > value.length)
//     {
//         console.log(acc);
//     }else{
//         acc = value.length;
//     }
// },0);

/************Q12*************/