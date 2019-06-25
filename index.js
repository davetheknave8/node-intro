const characters = [
    {
        name: 'Spike',
        show: 'Cowboy Bebop'
    },
    {
        name: 'L',
        show: 'Death Note'
    },
    {
        name: 'Goku',
        show: 'Dragonball Z'
    },
    {
        name: 'Gon',
        show: 'Hunter X Hunter'
    }
]

for(let currentCharacter of characters){
    console.log(`${currentCharacter.name} is from ${currentCharacter.show}`)
}