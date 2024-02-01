
    function getCharacterInfo() {
      const characterNameInput = document.getElementById('characterName');
      const characterInfo = document.getElementById('characterInfo');
  
      const characterName = characterNameInput.value.toLowerCase();
  
      fetch(`http://localhost:3000/characters/${characterName}`)

        .then(response => response.json())
        .then(data => {
            console.log("hola")
          characterInfo.innerHTML = `
            <h2>Character Information</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Species:</strong> ${data.species}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Origin:</strong> ${data.origin}</p>
            <img src="${data.image}" alt="${data.name}">
          `;
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An unexpected error occurred.');
        });
    }
  
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
      searchButton.addEventListener('click', getCharacterInfo);
    } else {
      console.error('Error: Search button not found.');
    }