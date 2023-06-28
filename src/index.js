
function getCharacters(){
  return fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((data) => renderCharacter(data))
}
function renderCharacter(characters){
  const characterBar = document.getElementById("character-bar")
  characters.forEach((character) => {
      const characterName = document.createElement("div")
      characterName.textContent = character.name
      characterBar.appendChild(characterName)

      /*const characterImage = document.createElement("img")
      characterImage.src = character.image
      characterBar.appendChild(characterImage)*/

      characterName.addEventListener("click", () => {
          characterInformation(character)
      })
  })          
}
function characterInformation(character){
  const characterName = document.getElementById('name')
  const characterVoteCount = document.getElementById("vote-count")
  const characterVoteForm = document.getElementById("vote-form")
  const characterImage = document.getElementById('image')

  characterName.textContent =  character.name
  characterImage.src = character.image
  characterVoteCount.textContent = character.votes

  characterVoteForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const votes = parseInt(document.getElementById("votes").value)
      console.log(`Total votes for ${character.name}: ${votes}`)
  })
}
getCharacters()