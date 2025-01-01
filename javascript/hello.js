var name ="2025" 
console.log("Hello Javascript ", name)

// create a function to store names in an array

function storeNames(){
    var names = ["2025", "2024", "2023", "2022", "2021"]

    // loop through the array
    for (var i = 0; i < names.length; i++){
        console.log(names[i])
    }
 return names
}

storeNames();