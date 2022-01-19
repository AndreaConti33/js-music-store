const endpoint = 'https://flynn.boolean.careers/exercises/api/array/music';

axios
    .get(endpoint)
    .then((response) => {
        viewMusic(response);
    })
    .catch((error) => {
      console.log(error);
    });

function viewMusic(response) {
    for(let i = 0; i < 10; i++){

        const imgUrl = response.data.response[i].poster;
    console.log(imgUrl);

    const div = document.createElement('div');
    div.classList.add('card', 'col-5', 'px-0', 'm-2');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.className = 'img-fluid';
    div.appendChild(img);
    document.getElementById('box').appendChild(div);

    const author = response.data.response[i].author;
    authorElement = document.createElement('h2');
    authorElement.innerText = author;
    div.appendChild(authorElement);

    const title = response.data.response[i].title;
    titleElement = document.createElement('h2');
    titleElement.innerText = title;
    div.appendChild(titleElement);

    const year = response.data.response[i].year;
    yearElement = document.createElement('h3');
    yearElement.innerText = year;
    div.appendChild(yearElement);

    const genre = response.data.response[i].genre;
    genreElement = document.createElement('h3');
    genreElement.innerText = genre;
    div.appendChild(genreElement);


    }
}