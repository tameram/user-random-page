
const m = new APIManager()

const loadDate = function(){
    
    m.getUsers()
    m.getQuote()
    m.getPokemon()
    m.getAbout()


}
const display = function () {

    const re = new Renderer()
    re.putUser()
    re.putFriends()
    re.putQuote()
    re.putPoky()
    re.putMent()

  }


  
  