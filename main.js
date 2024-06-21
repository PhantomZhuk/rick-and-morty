$(`.characters`).click(() => {
    $('.characters').css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    });
    $(`.episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `flex`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
    $(`.navContainer`).css(`display`, `none`);
});

$(`.episode`).click(() => {
    $('.characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`.episode`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })
    $(`.locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `flex`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
    $(`.navContainer`).css(`display`, `none`);
});

$(`.locations`).click(() => {
    $('.characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.locations`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })
    $(`.watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `flex`);
    $(`.watchListPage`).css(`display`, `none`);
    $(`.navContainer`).css(`display`, `none`);
});

$(`.watchList`).click(() => {
    $('.characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`.episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.watchList`).css({
        'color': 'rgb(189, 255, 160)',
        'text-shadow': 'rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px -2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) 0px 2px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -2px 0px 4px, rgb(9, 178, 14) 2px 0px 4px, rgb(9, 178, 14) -1px -2px 4px, rgb(9, 178, 14) 1px -2px 4px, rgb(9, 178, 14) -1px 2px 4px, rgb(9, 178, 14) 1px 2px 4px, rgb(9, 178, 14) -2px -1px 4px, rgb(9, 178, 14) 2px -1px 4px, rgb(9, 178, 14) -2px 1px 4px, rgb(9, 178, 14) 2px 1px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px, rgb(9, 178, 14) -2px -2px 4px, rgb(9, 178, 14) 2px -2px 4px, rgb(9, 178, 14) -2px 2px 4px, rgb(9, 178, 14) 2px 2px 4px'
    })

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `none`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `flex`);
    $(`.navContainer`).css(`display`, `none`);
});

$(`.logo`).click(() => {
    $('.characters').css({
        'color': `#fff`,
        'text-shadow': `none`
    });
    $(`.episode`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.locations`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })
    $(`.watchList`).css({
        'color': `#fff`,
        'text-shadow': `none`
    })

    $(`.charactersPage`).css(`display`, `none`);
    $(`.homePage`).css(`display`, `flex`);
    $(`.episodePage`).css(`display`, `none`);
    $(`.locationsPage`).css(`display`, `none`);
    $(`.watchListPage`).css(`display`, `none`);
    $(`.navContainer`).css(`display`, `none`);
});


$(`.navBtn`).click(() => {
    $(`.navContainer`).css(`display`, `flex`);
});


let charactersPageOpen = 1;
let numberCharactersPage;
let gender = ``;
let species = ``;
let status = ``;

function filterCharacters(page = 1, gender = '', species = '', status = '') {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&gender=${gender}&species=${species}&status=${status}`)
        .then(res => {
            // console.log(res)
            $('.charactersContainer').empty();
            for (let el of res.data.results) {
                $('.charactersContainer').append(`
                    <div class="characterItem">
                        <img src="${el.image}" alt="">
                        <h3>${el.name}</h3>
                        <button id="code${el.id}" class="viewInfoBtn">View</button>
                    </div>
                `);
            }
            numberCharactersPage = res.data.info.pages;
        })
}

filterCharacters(charactersPageOpen, gender, species, status);


$('#species, #status, #gender').change(() => {
    gender = $(`#gender`).val();
    species = $(`#species`).val();
    status = $(`#status`).val();
    charactersPageOpen = 1
    filterCharacters(charactersPageOpen, gender, species, status);
    $(`#numberCharactersPage`).val(charactersPageOpen);
});

$(`#resetCharacters`).click(() => {
    gender = ``;
    species = ``;
    status = ``;
    charactersPageOpen = 1
    filterCharacters(charactersPageOpen, gender, species, status);
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
        filterCharacters(charactersPageOpen, gender, species, status);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});

$(`#prewCharactersPage`).click(() => {
    if (charactersPageOpen > 1) {
        charactersPageOpen--
        filterCharacters(charactersPageOpen, gender, species, status);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});

$(`#numberCharactersPage`).keydown((e) => {
    if (e.keyCode == 13) {
        charactersPageOpen = $(`#numberCharactersPage`).val();
        filterCharacters(charactersPageOpen, gender, species, status);
        $(`#numberCharactersPage`).val(charactersPageOpen);
    }
});


let episodePageOpen = 1;
let numberEpisodePage;

function filterEpisode(page = 1, searchName = ``) {
    axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}&name=${searchName}`)
        .then(res => {
            $(`#epicodeControl`).show();
            $(`.episodeContainer`).empty();
            if (res.data.info.count > 0) {
                for (let el of res.data.results) {
                    $(`.episodeContainer`).append(`
                        <div class="episodeItem">
                            <h3>${el.episode}</h3>
                            <p><span>Name:</span> ${el.name}</p>
                            <p><span>Data:</span> ${el.air_date}</p>
                            <button class="addWatchList" id="addWatchList${el.id}">Add to watch list</button>
                        </div>
                    `)
                }
            }

            numberEpisodePage = res.data.info.pages;
        })
        .catch(error => {
            $(`.episodeContainer`).empty();
            $(`.episodeContainer`).append(`
                    <img src="./img/errorImg.png" alt="arror">
                `)
            $(`#epicodeControl`).hide();
        });
}

filterEpisode(episodePageOpen);

$(`#searchEpisode`).on(`input`, () => {
    filterEpisode(episodePageOpen, $(`#searchEpisode`).val());
});

$(`#numberEpisodePage`).val(episodePageOpen);

$(`#nextEpisodePage`).click(() => {
    if (episodePageOpen <= numberEpisodePage - 1) {
        episodePageOpen++
        filterEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

$(`#prewEpisodePage`).click(() => {
    if (episodePageOpen > 1) {
        episodePageOpen--
        filterEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

$(`#numberEpisodePage`).keydown((e) => {
    if (e.keyCode == 13) {
        episodePageOpen = $(`#numberEpisodePage`).val();
        filterEpisode(episodePageOpen);
        $(`#numberEpisodePage`).val(episodePageOpen);
    }
});

let locationsPageOpen = 1;
let numberLocationsPage;
let type = ``;
let dimension = ``;

function filterAndSearchLocations(page = 1, name, type, dimension) {
    axios.get(`https://rickandmortyapi.com/api/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`)
        .then(res => {
            $(`.locationsContainer`).empty();
            for (let el of res.data.results) {
                $(`.locationsContainer`).append(`
                        <div class="locationsItem">
                            <h3>${el.name}</h3>
                            <p><span>Name:</span> ${el.type}</p>
                            <p><span>Dimension:</span> ${el.dimension}</p>
                        </div>
                    `)
            }
            numberLocationsPage = res.data.info.pages;
        })
        .catch(error => {
            $(`.locationsContainer`).empty();
            $(`.locationsContainer`).append(`
                    <img src="./img/errorImg.png" alt="arror">
                `)
            $(`#locationsControl`).hide();
        });
}

filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);

$('#type, #dimension').change(() => {
    locationsPageOpen = 1
    type = $(`#type`).val();
    dimension = $(`#dimension`).val();
    filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);
    $(`#numberLocationsPage`).val(locationsPageOpen);
});

$(`#resetLocations`).click(() => {
    type = ``;
    dimension = ``;
    $(`#searchLocations`).val(``);
    $(`#type`).val(``);
    $(`#dimension`).val(``);
    locationsPageOpen = 1
    filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);
    $(`#numberLocationsPage`).val(locationsPageOpen);
});

$(`#searchLocations`).on(`input`, () => {
    filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);
});

$(`#numberLocationsPage`).val(locationsPageOpen);

$(`#nextLocationsPage`).click(() => {
    if (locationsPageOpen <= numberLocationsPage - 1) {
        locationsPageOpen++
        filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);
        $(`#numberLocationsPage`).val(locationsPageOpen);
    }
});

$(`#prewLocationsPage`).click(() => {
    if (locationsPageOpen > 1) {
        locationsPageOpen--
        filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(), type, dimension);
        $(`#numberLocationsPage`).val(locationsPageOpen);
    }
});

$(`#numberLocationsPage`).keydown((e) => {
    if (e.keyCode == 13) {
        locationsPageOpen = $(`#numberLocationsPage`).val();
        filterAndSearchLocations(locationsPageOpen, $(`#searchLocations`).val(``), type, dimension);
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
