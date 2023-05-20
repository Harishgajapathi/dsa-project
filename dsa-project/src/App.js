

function App() {

// cities visited
const cities = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"]


//possible available ticket routes
const availableTickets = ["Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich", "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris", "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"]

// Starting point (known)
let initialPlaceVisited = "Kiev"

// possible route way = Kiev->Prague->Zurich->Amsterdam->Barcelona->Berlin (expected-output)

const array1 = [] //empty array 

for (let i in availableTickets){
    array1.push(availableTickets[i].split("-"))
}

let array2 = [] //empty array to add ordered routes
for (let num in cities){
    for (let city in array1){
        const cities = array1[city]
        if (initialPlaceVisited === cities[0]){
            array2.push(cities[0])
            initialPlaceVisited = cities[1]
            break;
    }
}
}
    
console.log("Route:", array2.join("->"));
}

export default App;
