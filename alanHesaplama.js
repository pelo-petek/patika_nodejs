const input = require('readline');
const pi = 3.14;
const radius = input.createInterface({
    input: process.stdin,
    output: process.stdout
})

radius.question("what is the radius", (radius)=>{
    const area= pi*radius*radius;
    console.log(" Yarıçapı "+radius+ " olan dairenin alanı: "+area);
});