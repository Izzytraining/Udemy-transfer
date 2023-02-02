const printTeam = (teamName, coach, ...players) => { 
    console.log(`Team: ${teamName}, Coach: ${coach}, Players: ${players.join(', ')}` )
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    // console.log(firstPlayer, secondPlayer)

    }

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

    printTeam(team.name, team.coach, ...team.players)

let cities = ['Peru', 'Brazil', 'Philipinnes']
cities = ['Saville', ...cities, 'Manilla']

// citiesCopy.push('Miami')

console.log(cities)

