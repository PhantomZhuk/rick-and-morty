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
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
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

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `flex`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
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

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `flex`);
    $(`.watchListPage`).css(`display`, `none`);
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

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `flex`);
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
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
});

let charactersPageOpen = 1;
let numberCharactersPage;
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

            numberCharactersPage = res.data.info.pages;
        })
}

getCharacters(charactersPageOpen)

$('#species, #status, #gender').change(() => {
    charactersPageOpen = 1
    getCharacters(charactersPageOpen)
    $(`#numberCharactersPage`).val(charactersPageOpen);
});

$(`#resetCharacters`).click(() => {
    $('#species').val(``);
    $('#status').val(``);
    $('#gender').val(``);
    charactersPageOpen = 1
    getCharacters(charactersPageOpen)
    $(`#numberCharactersPage`).val(charactersPageOpen);
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

$(`#numberCharactersPage`).val(charactersPageOpen);


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

$(`#nextCharactersPage`).click(() => {
    if (charactersPageOpen <= numberCharactersPage - 1) {
        charactersPageOpen++
        getCharacters(charactersPageOpen);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});

$(`#prewCharactersPage`).click(() => {
    if (charactersPageOpen > 1) {
        charactersPageOpen--
        getCharacters(charactersPageOpen);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});

$(`#numberCharactersPage`).keydown((e) => {
    if (e.keyCode == 13) {
        charactersPageOpen = $(`#numberCharactersPage`).val();
        getCharacters(charactersPageOpen);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});


let episodePageOpen = 1;
let numberEpisodePage;

function getEpisode(page = 1) {
    axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then(res => {
            $(`.episodeContainer`).empty();

            let filterEpisodeName = res.data.results.filter(el => el.name.toLowerCase().includes(`${$(`#searchEpisode`).val().toLowerCase()}`))

            for (let el of filterEpisodeName) {
                $(`.episodeContainer`).append(`
                    <div class="episodeItem">
                        <h3>${el.episode}</h3>
                        <p><span>Name:</span> ${el.name}</p>
                        <p><span>Data:</span> ${el.air_date}</p>
                        <button class="addWatchList" id="addWatchList${el.id}">Add to watch list</button>
                    </div>
                `)
            }

            numberEpisodePage = res.data.info.pages;
        });
}

getEpisode(episodePageOpen);

$(`#searchEpisode`).on(`input`, () => {
    getEpisode(episodePageOpen);
});

$(`#numberEpisodePage`).val(episodePageOpen);

$(`#nextEpisodePage`).click(() => {
    if (episodePageOpen <= numberEpisodePage - 1) {
        episodePageOpen++
        getEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

$(`#prewEpisodePage`).click(() => {
    if (episodePageOpen > 1) {
        episodePageOpen--
        getEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

$(`#numberEpisodePage`).keydown((e) => {
    if (e.keyCode == 13) {
        episodePageOpen = $(`#numberEpisodePage`).val();
        getEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

let locationsPageOpen = 1;
let numberLocationsPage;

function getLocations(page = 1) {
    axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then(res => {
            $(`.locationsContainer`).empty();

            let filterLocationsName = res.data.results.filter(el => el.name.toLowerCase().includes(`${$(`#searchLocations`).val().toLowerCase()}`))

            for (let el of filterLocationsName) {
                if ((!$('#type').val() || el.type === $('#type').val()) &&
                    (!$('#dimension').val() || el.dimension === $('#dimension').val())) {
                    $(`.locationsContainer`).append(`
                        <div class="locationsItem">
                            <h3>${el.name}</h3>
                            <p><span>Name:</span> ${el.type}</p>
                            <p><span>Dimension:</span> ${el.dimension}</p>
                        </div>
                    `)
                }
            }

            numberLocationsPage = res.data.info.pages;
        });
}

getLocations(locationsPageOpen);

$('#type, #dimension').change(() => {
    locationsPageOpen = 1
    getLocations(locationsPageOpen)
    $(`#numberLocationsPage`).val(locationsPageOpen);
});

$(`#resetLocations`).click(() => {
    $('#type').val(``);
    $('#dimension').val(``);
    $(`#searchLocations`).val(``)
    locationsPageOpen = 1
    getLocations(locationsPageOpen)
    $(`#numberLocationsPage`).val(locationsPageOpen);
});

$(`#searchLocations`).on(`input`, () => {
    getLocations(locationsPageOpen);
});

$(`#numberLocationsPage`).val(locationsPageOpen);

$(`#nextLocationsPage`).click(() => {
    if (locationsPageOpen <= numberLocationsPage - 1) {
        locationsPageOpen++
        getLocations(locationsPageOpen);
        $(`#numberLocationsPage`).val(locationsPageOpen);
    }
});

$(`#prewLocationsPage`).click(() => {
    if (locationsPageOpen > 1) {
        locationsPageOpen--
        getLocations(locationsPageOpen);
        $(`#numberLocationsPage`).val(locationsPageOpen);
    }
});

$(`#numberLocationsPage`).keydown((e) => {
    if (e.keyCode == 13) {
        locationsPageOpen = $(`#numberLocationsPage`).val();
        getLocations(locationsPageOpen);
        $(`#numberLocationsPage`).val(locationsPageOpen);
    }
});

let episodeList = JSON.parse(localStorage.getItem('episodeList')) || [];

function showWatchListItem(episodeList) {
    $('.watchListContainer').empty();

    for (let el of episodeList) {
        let checkboxContent = el.fulfill
            ? `<button class="checkbox" id="checkbox${el.id}"><i class="fa-regular fa-square-check"></i></button>`
            : `<button class="checkbox" id="checkbox${el.id}"><i class="fa-regular fa-square"></i></button>`;

        $('.watchListContainer').append(`
            <div class="watchListItem" id="watchListItem${el.id}">
                <h3>${el.episode}</h3>
                <p><span>Name:</span> ${el.name}</p>
                <p><span>Data:</span> ${el.data}</p>
                <div class="btnContainer">
                    <button class="delete" id="delete${el.id}"><i class="fa-solid fa-trash-can"></i></button>
                    ${checkboxContent}
                </div>
            </div>
        `);
    }
}


showWatchListItem(episodeList);

$('.episodeContainer').on('click', (e) => {
    let targetElement = $(e.target).closest('[id^="addWatchList"]');
    if (targetElement.length) {
        let id = targetElement.attr('id');
        if (/^addWatchList\d+$/.test(id)) {
            let episodeID = id.substring(12);
            axios.get(`https://rickandmortyapi.com/api/episode/${episodeID}`)
                .then(res => {
                    let newItem = {
                        id: res.data.id,
                        episode: res.data.episode,
                        name: res.data.name,
                        data: res.data.air_date,
                        fulfill: false
                    };
                    let exists = episodeList.some(item => item.id === newItem.id);
                    if (!exists) {
                        episodeList.push(newItem);
                        localStorage.setItem('episodeList', JSON.stringify(episodeList));
                        showWatchListItem(episodeList);
                    }
                });
        }
    }
});

$('.watchListContainer').on('click', '.delete', (e) => {
    let ID = $(e.target).closest('.delete').attr('id').replace('delete', '');
    let indexToRemove = episodeList.findIndex(item => item.id == ID);
    if (indexToRemove !== -1) {
        episodeList.splice(indexToRemove, 1);
        localStorage.setItem('episodeList', JSON.stringify(episodeList));
        showWatchListItem(episodeList);
    }
});

$('.watchListContainer').on('click', '.checkbox', (e) => {
    let ID = $(e.target).closest('.checkbox').attr('id').replace('checkbox', '');
    let indexTofulfill = episodeList.findIndex(item => item.id == ID);
    if (indexTofulfill !== -1) {
        episodeList[indexTofulfill].fulfill = !episodeList[indexTofulfill].fulfill;
        localStorage.setItem('episodeList', JSON.stringify(episodeList));
        showWatchListItem(episodeList);
    }
});
