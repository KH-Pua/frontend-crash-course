
// Featured playlists
// BQAlZsGx2azh_fK9g4UBChhinERaAq-cjp2UZ8N5gPBzb-QRTiTxITFG8g1uVxpiGK3rNQ3kW8lTgbBMURIHEqbXHFbq26WnJMdrVUBFSAAS1fx6VDmZQ8lW56_CJwLt2T7zlX9jcyshEs8MMEWmp_pmLFpl6hbcc0KhSP62gEWlt9-Uk_YIXXOBytvAL7YN_wQ

// Top playlist
// BQCZacm2ju_tFe-Jog9Cl-col60ioEk0Mg-OOghV1oDzkTRKqWZWXr3IdDGi9DuYXumtu8y68pcdk8bpHFQMBH82ZXtWqoAnOguTvOTKuwrvSrxuyZuP-6BB1zjrzIyeq1gNVWY47wo8M_MlLw3ZiUvDkZDheBZaPDHxTZJR1UsBy5FymhuOsYrLWnYnFn2T9iY

// Pseudocode
// var TOKEN = "" <-- Thisis the token we weill use to make  requests to the Spotify API,. Empty at fist, but will updated later.
// step 1 - wait for the page to be fully loaded.
// step 2 - authroize &  get the token.
// step 3 - store the token in the variable above
// step 4 - start fetching the user's top items using the token.
// step 5 - display the user's top items.
// step 6 - start fetching  the new releases using the same token.
// step 7 - display new releases
// step 8 - start fetching featured playlists using the token. 
// step 9 - display featured playslists

// defining variables and constants
let TOKEN = ""
let client_id = "284307d3bba4465cbfc0b5d00df2a867"
let redirect_uri = window.location.origin //The current page URL
// let scope = "user-read-private user-read-email"
let scope = "user-read-private user-read-email user-top-read"


function authorize(){
    let url= "https://accounts.spotify.com/authorize"
    url += "?response_type=token"
    url += "&client_id=" + encodeURIComponent(client_id)
    url += "&scope=" + encodeURIComponent(scope)
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri)
    window.open(url,"_self")
}

function extractTokenFromURI(){
    let hash = window.location.hash
    if(hash && hash.includes("access_token")){
        let url = hash.replace("#access_token=", "")
        let chunks = url.split("&")
        let token = chunks[0] //extracting the first half of the array that consists of the token content section
        return token
    }
    return null //return null if there's no token
}

window.addEventListener("load",()=>{
    TOKEN = extractTokenFromURI()
    if(TOKEN){
        console.log("Token",TOKEN)
        // fetch the endpoints
        fetchUserTopItems()
        fetchNewReleases()
        fetchFeaturedPlaylists()
    }
    else authorize()
})

async function fetchUserTopItems(){
    try{
        let endpoint = "https://api.spotify.com/v1/me/top/tracks"
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization:"Bearer " + TOKEN,
            },
        })

        let data = await response.json()
        console.log("User Top Items", data)

        displayUserTopItems(data)
    } catch(error){
        alert("Something is wrong with 1st function")
        console.log(error)
    }
}

async function fetchNewReleases(){
// BQAlZsGx2azh_fK9g4UBChhinERaAq-cjp2UZ8N5gPBzb-QRTiTxITFG8g1uVxpiGK3rNQ3kW8lTgbBMURIHEqbXHFbq26WnJMdrVUBFSAAS1fx6VDmZQ8lW56_CJwLt2T7zlX9jcyshEs8MMEWmp_pmLFpl6hbcc0KhSP62gEWlt9-Uk_YIXXOBytvAL7YN_wQ
    try{
        let endpoint = "https://api.spotify.com/v1/browse/new-releases"
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            }
        })

        let data = await response.json()
        console.log("New Releases", data)
        displayNewReleases(data)
    } catch(error){
        alert("Something is wrong with 2nd function")
        console.log(error)
    }

}

async function fetchFeaturedPlaylists(){
// BQCZacm2ju_tFe-Jog9Cl-col60ioEk0Mg-OOghV1oDzkTRKqWZWXr3IdDGi9DuYXumtu8y68pcdk8bpHFQMBH82ZXtWqoAnOguTvOTKuwrvSrxuyZuP-6BB1zjrzIyeq1gNVWY47wo8M_MlLw3ZiUvDkZDheBZaPDHxTZJR1UsBy5FymhuOsYrLWnYnFn2T9iY
    try{
        let endpoint = "https://api.spotify.com/v1/browse/featured-playlists"
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            }
        })

        let data = await response.json()
        console.log("Featured Playlists", data)

        displayFeaturedPlaylists(data)
    } catch(error){
        alert("Something is wrong with 3rd function")
        console.log(error)
    }
}

function displayUserTopItems(data){
    let section = document.querySelector('#your-top-items')
    let sectionTitle = section.querySelector(".title")
    let sectionSubtitle = section.querySelector(".subtitle")
    let sectionWrapper = section.querySelector(".card-wrapper")
    sectionTitle.textContent = "Your Top Items"
    sectionSubtitle.textContent = "Based on your recent listening"

    for(let i = 0; i<data.items.length; i++){
        let track = data.items[i]
        let image = track.album.images[1].url
        let title = track.name
        let subtitle = track.album.artists[0].name
        let href = track.album.external_urls.spotify

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function displayNewReleases(data){
    let section = document.querySelector('#new-releases')
    let sectionTitle = section.querySelector(".title")
    let sectionSubtitle = section.querySelector(".subtitle")
    let sectionWrapper = section.querySelector(".card-wrapper")
    sectionTitle.textContent = "New Releases"
    sectionSubtitle.textContent = "New releases from Spotify"
    console.log("yo",data.albums)
    for(let i = 0; i<data.albums.items.length; i++){
        let track = data.albums.items[i]

        let image = track.images[1].url
        let title = track.name
        let subtitle = track.artists[0].name
        let href = track.external_urls.spotify

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function displayFeaturedPlaylists(data){
    let section = document.querySelector('#featured-playlists')
    let sectionTitle = section.querySelector(".title")
    let sectionSubtitle = section.querySelector(".subtitle")
    let sectionWrapper = section.querySelector(".card-wrapper")
    sectionTitle.textContent = "Featured Playlist"
    sectionSubtitle.textContent = "Featured playlists from Spotify"
    console.log("yo2",data.playlists)
    for(let i = 0; i<data.playlists.items.length; i++){
        let track = data.playlists.items[i]

        let image = track.images[0].url
        let title = track.name
        let subtitle = track.description
        let href = track.external_urls.spotify

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function generateCard(image,title,subtitle,href){
    return `
    <a class="card" href="${href}" target="_blank">
        <img
            src="${image}"
            alt="peaceful piano"
            srcset=""
        />
        <span class="mdi mdi-pla mdi-36px"></span>
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
    </a>
    `
}

// let API_URL =""

// let result = await fetch(API_URL)
// let data = await result.json()
// data.then()
//     .catch((err)=>console.log(err))