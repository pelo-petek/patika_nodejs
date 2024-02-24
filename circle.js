const pi = 3.14;

let circleArea =(radius) =>{
    let area = pi * radius * radius;
    console.log("The area of the circle is: "+area);
}

let circleCircumference = (radius) =>{
    let circumference = 2 * pi * radius;
    console.log("The circumference is "+ circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}