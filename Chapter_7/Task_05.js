const cars= 'Audi, Mercedes, BMW, Nissan, Dodge'
const newCars = cars.split(',')
if (newCars.length>3){
    console.log("Jest OK")
}else{
    console.log("Nie jest OK")
}
if (newCars.includes('Audi')){
    newCars.push('Toyota')
}else{
    newCars.pop()
}



console.log(newCars)