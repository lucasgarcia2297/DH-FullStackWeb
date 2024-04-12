let elementos =[];
// elementos.forEach((num, index, cual) => {
//     cual[index] = num * num;
// });

for (let i = 0; i < 100; i++) {
  elementos.push(i);
}

let i = 0;
let flag;
console.log(flag);
console.log(!flag);
//flag = false;
console.log(!flag);
while(!flag){
    if(i < 10){
        console.log(i);
    }else{
        console.log("es mayor a 10");
        flag = true;
    }
    i++;
}
console.log(!flag);