// for(let userName = 10; userName >= 0; userName--){
//     console.log(userName); 
// }


// const oquvchilar = [1,10,82,89,13,12,43,56,22,33,44,11,55,];
// const juft = [];
// const toq = [];


// for(let index = 0; index < oquvchilar.length; index++ ){
//     console.log(oquvchilar[index]);
//     if(oquvchilar[index] % 2 == 0){
//         juft.push(oquvchilar[index])
//     }else{
//         toq.push(oquvchilar[index])  
//     }
// }
// console.log(`Juft sonlar:${juft}
//     toq sonlar:${toq}
//     `)


// const userPassword = +prompt("Password kiriting");
// const userLogin = +prompt("Login kiriting");

// const oquvchilar = [
//     {
//         ism:"Mahmud",
//         password:9817,
//         login:8761,
//     },
//     {
//         ism:"Ismoil",
//         password:9897,
//         login:9821,
//     },
//     {
//         ism:"Boisxon",
//         password:1234,
//         login:8762,
//     },
//     {
//         ism:"Temur",
//         password:9820,
//         login:8761,
//     }
// ]

// for(let index = 0; index < oquvchilar.length;index++){
//     if(userPassword == password && userLogin == login){
//         alert(`Xush kelibsiz:${oquvchilar[ism]}`)
//     }else{
//         alert("Siz kirolmadingiz")
//     }
// }

// const userPassword = +prompt("Password kiriting");
// const userLogin = +prompt("Login kiriting");

// const oquvchilar = [
//     {
//         ism: "Mahmud",
//         password: 9817,
//         login: 8761,
//     },
//     {
//         ism: "Ismoil",
//         password: 9897,
//         login: 9821,
//     },
//     {
//         ism: "Boisxon",
//         password: 1234,
//         login: 8762,
//     },
//     {
//         ism: "Temur",
//         password: 9820,
//         login: 8761,
//     }
// ];

// for (let index = 0; index < oquvchilar.length; index++) {
//     if (userPassword === oquvchilar[index].password && userLogin === oquvchilar[index].login) {
//         alert(`Xush kelibsiz: ${oquvchilar[index].ism}`);
//     }else{
//         alert("Siz kirolmadingiz");
//     }
// }



// const oquvchilar = [2,4,9,10,45,67,8,90];
// const numbers = [2,4,10,8,90];

// const juft = [];
// const toq = [];

// for(let index = 0; index < oquvchilar.length; index++ ){
//     if(oquvchilar[index] % 2 == 0){
//        console.log(`Boshlanishdagi array:${oquvchilar}`);
//     }else{
//         console.log(`Juft sonlarga ajratilgan array:${numbers}`);
//     }
// }

const oquvchilar = [2, 4, 9, 10, 45, 67, 8, 90];
const numbers = [2,4,10,8,90];
const juft = [];
const toq = [];

for (let index = 0; index < oquvchilar.length; index++) {
    if (oquvchilar[index] % 2 === 0) {
        juft.push(oquvchilar[index]);
    } else {
        toq.push(oquvchilar[index]);
    }
}
console.log(oquvchilar, "boshlanishdagi array");
console.log(numbers, "juft sonlarga ajratilgan array");



