const NUMS_OF_USERS = 7
const NUMS_OF_POKEMON = 949

class APIManager {
    tempData = {}
    constructor() {
        this.data = {}
    }

    getUsers() {
        const tempdata = this.data
        $.ajax(
            {

                method: "GET",
                url: 'https://randomuser.me/api/?results=7',
                success: function (data) {
                    tempdata.users = usersData(data)
                    console.log("SUCCESS GET USERS DATA")
                }
                , error: function (text) {
                    console.log(text);
                }
            }
        )
    }

    getQuote() {
        const tempdata = this.data
        $.ajax(
            {
                method: "GET",
                url: 'https://api.kanye.rest/',
                success: function (data) {
                    tempdata.quote = data.quote
                    console.log("SUCCESS GET QUOTE DATA")
                }
                , error: function (text) {
                    console.log(text);
                }
            }
        )
    }

    getPokemon() {
        const tempdata = this.data
        const randomPoky = Math.floor(Math.random() * NUMS_OF_POKEMON) + 1
        $.ajax(
            {
                method: "GET",
                url: `http://pokeapi.co/api/v2/pokemon/${randomPoky}`,
                success: function (data) {
                    tempdata.poke = pokemonData(data)
                    console.log("SUCCESS GET POKYMON DATA")
                }
                , error: function (text) {
                    console.log(text);
                }
            }
        )
    }

    getAbout() {
        const tempdata = this.data
        $.ajax(
            {
                method: "GET",
                url: `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`,
                success: function (data) {
                    tempdata.aboutMe = data[0]
                    console.log("SUCCESS GET ABOUTME DATA")
                }
                , error: function (text) {
                    console.log(text);
                }
            }
        )
    }

}

const usersData = function (data) {

    const _data = {}
    const arrayOfUsers = []
    const _main_user = {
        name: data.results[0].name.first + " " + data.results[0].name.last,
        picture: data.results[0].picture.large,
        city: data.results[0].location.city,
        country: data.results[0].location.country,
        state: data.results[0].location.state
    }

    for (let index = 1; index < NUMS_OF_USERS; index++) {
        const _user = {
            name: data.results[index].name.first + " " + data.results[index].name.last
        }
        arrayOfUsers[index - 1] = _user
    }

    _data.mainuser = _main_user
    _data.friends = arrayOfUsers


    return _data
}

const pokemonData = function (data) {
    const poke = {
        name: data.name,
        img: data.sprites.back_default
    }

    return poke

}


