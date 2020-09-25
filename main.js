

fetch('https://www.reddit.com/reddits.json')
    .then(response => response.json())
    .then(data => {
        let containerToAppend = document.getElementById('accordionExample')
        let html = ''
        let i = 0
        data.data.children.forEach(element => {
            i++
            html += `        
          <div class="card">
            <div class="card-header" id="heading${i}">
              <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                  ${element.data.display_name}
                </button>
              </h2>
            </div>
        
            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
              <div class="card-body">
                ${element.data.public_description}
              </div>
            </div>
            </div>`
        });
        containerToAppend.innerHTML = html
    });

   

