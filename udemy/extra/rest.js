//rest parameter
const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum+= num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}
console.log(calculateAverage(`age`,0, 100, 88, 64))

///challenge
const printTeam = (teamName, coach, ...players) => { 
console.log(`Team: ${teamName}, Coach: ${coach}, Players: ${players.join(', ')}` )
}
printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')