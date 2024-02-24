const fs = require('fs');

fs.writeFile('employees.json','{"name": "pelo", "salary":"25"}',(err)=>{
    if(err) console.log(err);
    console.log("the file has been created succefully");
})

fs.readFile('employees.json',(err, data) => {
    if(err) console.log(error);
    let names = JSON.parse(data);
    console.log("the file has been read succesfully "+ names.name);
});

fs.appendFile('employees.json', '\n{"name":"tari","sallary":"30000"}', (err) => {
    if(err) console.log(err)
    console.log("the new data has been added");
})

fs.rmdir('employees.json', (err) => {
    if(err) console.log(err);
    console.log("the file has been deleted succesfully");
})