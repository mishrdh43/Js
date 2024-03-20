// write a program to print marks of a student in an object using for loop

let obj = {
    'harry' : 90,
    'rohan' : 80,
    'ravi' : 92
}

for (const key in obj) {
    console.log(key)
}