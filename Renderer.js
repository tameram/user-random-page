
class Renderer {
    constructor() {
        
        $(".friends-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        $(".quote-container").empty()
        $(".user-container").empty()

        this.fri_container = $(".friends-container")
        this.poke_container = $(".pokemon-container")
        this.about_container = $(".meat-container")
        this.quot_container = $(".quote-container")
        this.user_container = $(".user-container")
    }

    putUser() {
        this.user_container.append(`
        <img src=${m.data.users.mainuser.picture}
          id="profile-pic" alt="" srcset="">
             <div class="user-infoe">
             <h4>${m.data.users.mainuser.name}</h4>
            <h5>${m.data.users.mainuser.state} , ${m.data.users.mainuser.city}</h5>
         </div>
        `)
    }

    putFriends() {
        const friends = m.data.users.friends
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({friends})

        this.fri_container.append(newHTML)
    }

    putQuote() {
        this.quot_container.append(`
        <div id="textFavorite">Favarite quote :</div>
        <p>${m.data.quote}</p>
        `)
        
    }

    putPoky(){
        this.poke_container.append(`
        <img src=${m.data.poke.img}
          id="pokemon-image" alt="" srcset="">
        <div id ="pokemon-text">Favorite Pokemon : ${m.data.poke.name}</div>
        `)
    }

    putMent(){
        this.about_container.append(`
        <div class ="meat-text">About me:</div>
        <div class ="meat-text">Favorite Pokemon : ${m.data.aboutMe}</div>
        `)
    }



}


