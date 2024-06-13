let pageOpen = 1;
let numberPage;
function getCharacters(page = 1) {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => {
            $(`.charactersContainer`).empty();
            for (let el of res.data.results) {
                $(`.charactersContainer`).append(`
                <div class="characterItem">
                    <img src="${el.image}" alt="">
                    <h3>${el.name}</h3>
                    <button id="code${el.id}" class="viewInfoBtn">View</button>
                </div>
                `)
            }
            numberPage = res.data.info.pages
        });
}

function getCharacterInfo(id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            $(`.rowContainer`).empty();
            $(`.rowContainer`).append(`
                <h3>${res.data.name}</h3>
                <p>${res.data.gender}</p>
                <p>${res.data.status}</p>
                <p>${res.data.species}</p>
            `)
        });
}

$(`#numberPage`).val(pageOpen);
getCharacters(pageOpen);

$(`.wrap`).click((e) => {
    if ((e.target.id).substring(0, 4) == `code`) {
        let ID = (e.target.id).substring(4);
        $(`.popup`).css(`display`, `flex`);
        getCharacterInfo(ID);
    };
});

$(`#close`).click(() => {
    $(`.popup`).css(`display`, `none`);
});

$(`#nextPage`).click(() => {
    if (pageOpen <= numberPage-1) {
        pageOpen++
        getCharacters(pageOpen);
        $(`#numberPage`).val(pageOpen);
    }
});

$(`#prewPage`).click(() => {
    if (pageOpen > 1) {
        pageOpen--
        getCharacters(pageOpen);
        $(`#numberPage`).val(pageOpen);
    }
});

$(`#numberPage`).keydown((e)=>{
    if (e.keyCode == 13){
        pageOpen = $(`#numberPage`).val();
        getCharacters(pageOpen);
        $(`#numberPage`).val(pageOpen);
    }
});