document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById('breed-list');
            data.forEach(breed => {
                fetch(`https://dog.ceo/api/breed/${breed.name.toLowerCase().replace(' ', '')}/images/random`)
                    .then(response => response.json())
                    .then(imageData => {
                        const breedCard = document.createElement('div');
                        breedCard.classList.add('breed-card');
                        
                        const breedImage = document.createElement('img');
                        breedImage.src = imageData.message;
                        
                        const breedName = document.createElement('h2');
                        breedName.textContent = breed.name;
                        
                        const breedDescription = document.createElement('p');
                        breedDescription.textContent = breed.description;
                        
                        breedCard.appendChild(breedImage);
                        breedCard.appendChild(breedName);
                        breedCard.appendChild(breedDescription);
                        
                        breedList.appendChild(breedCard);
                    })
                    .catch(error => console.error('Error fetching image:', error));
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
