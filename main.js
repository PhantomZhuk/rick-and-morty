$(`#characters`).click(() => {
    $('#characters').css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    });
    $(`#episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `flex`);
    $(`.homePage`).css(`display`, `none`);
});

$(`#episode`).click(() => {
    $('#characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`#episode`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })
    $(`#locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
});

$(`#locations`).click(() => {
    $('#characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#locations`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })
    $(`#watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
});

$(`#watchList`).click(() => {
    $('#characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`#episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#watchList`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })
});

$(`#logo`).click(() => {
    $('#characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`#episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`#watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
});

let pageOpen = 1;
let numberPage;
function getCharacters(page = 1) {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
        $('.charactersContainer').empty();
        for (let el of res.data.results) {
            if ((!$('#species').val() || el.species === $('#species').val()) &&
                (!$('#status').val() || el.status === $('#status').val()) &&
                (!$('#gender').val() || el.gender === $('#gender').val())) {
                $('.charactersContainer').append(`
                    <div class="characterItem">
                        <img src="${el.image}" alt="">
                        <h3>${el.name}</h3>
                        <button id="code${el.id}" class="viewInfoBtn">View</button>
                    </div>
                `);
            }
        }

        numberPage = res.data.info.pages;
    })
}

getCharacters(pageOpen)

$('#species, #status, #gender').change(() => {
    pageOpen = 1
    getCharacters(pageOpen)
    $(`#numberPage`).val(pageOpen);
});

$(`#reset`).click(()=>{
    $('#species').val(``);
    $('#status').val(``);
    $('#gender').val(``);
    pageOpen = 1
    getCharacters(pageOpen)
    $(`#numberPage`).val(pageOpen);
});

function getCharacterInfo(id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            $(`.rowContainer`).empty();
            $(`.rowContainer`).append(`
                <h3>${res.data.name}</h3>
                <p>Location: ${res.data.location.name}</p>
                <p>Gender: ${res.data.gender}</p>
                <p>Status: ${res.data.status}</p>
                <p>Species: ${res.data.species}</p>
            `)
        });
}



$(`#numberPage`).val(pageOpen);


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
    if (pageOpen <= numberPage - 1) {
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

$(`#numberPage`).keydown((e) => {
    if (e.keyCode == 13) {
        pageOpen = $(`#numberPage`).val();
        getCharacters(pageOpen);
        $(`#numberPage`).val(pageOpen);
    }
});