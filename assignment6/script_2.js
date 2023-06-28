//Spotify Web App//
//Pseudocode
//1) When login is clicked, request authorization code
//2) Uses authorization code to request access token and refresh token
//3) Uses access token to request user's top item
//4) Display user's top item
//   ***Uses refresh token to request new access token if the token expired.


// defining variables and constants.
const clientId = "08d46a999dff4c2da08f57e366a52ea0"
const clientSecret = "13a367c03b8a45f1a54c3ccc8a6afd61"
const params = new URLSearchParams(window.location.search);
let code = params.get("code");
console.log(code);
let scope = "user-read-private user-read-email user-top-read"
let redirectURI = "http://127.0.0.1:5500/assignment6/index.html" //window.location.origin //The current page url

let apiRequest = [
    {
        endpoints: "https://api.spotify.com/v1/me/top/tracks?limit=10",
        //arrayName: "[items]",
        playlistName: "Top Tracks",
        callFunction: topTrackReturn
        
    },
    {
        endpoints: "https://api.spotify.com/v1/browse/new-releases?limit=10",
        //arrayName: "[albums][items]",
        playlistName: "New Releases",
        callFunction: newReleasesReturn
        
    },
]


if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, clientSecret, code);

    for (let i = 0; i < apiRequest.length; i++) {
        let data = await fetchData(accessToken, apiRequest[i].endpoints);
        populateUI(data, apiRequest[i].playlistName, apiRequest[i].callFunction);
    }
}

async function redirectToAuthCodeFlow(clientId){
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", redirectURI);
    params.append("scope", scope);
    
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    //document.location
}

async function getAccessToken(clientId, clientSecret, code){
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirectURI);

    
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
        },
        body: params
    });
        
    if (result.ok) {
        const { access_token, refresh_token } = await result.json();
        localStorage.setItem("refresh_token", refresh_token);
        return access_token;

    } else if (result.status === 400){
        //redirectToAuthCodeFlow(clientId);

    } else if (result.status === 401){
        return await refreshToken(clientId, clientSecret);
    }

}

async function refreshToken(clientId, clientSecret){
    const refresh_token_memory = localStorage.getItem("refresh_token");
    const params_refresh = new URLSearchParams();
    params_refresh.append("grant_type", "refresh_token");
    params_refresh.append("code", refresh_token_memory);
    params_refresh.append("redirect_uri", redirectURI);
    

    
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
        },
        body: params_refresh
    });

    if (result.ok) {
        const { access_token, refresh_token } = await result.json();
        localStorage.setItem("refresh_token", refresh_token);
        return access_token;

    } else if (result.status == 401){
        await refreshToken(clientId, clientSecret);
    }
}


async function fetchData(token, apiEndpoints){
    
    const result = await fetch(apiEndpoints, {
        method: "GET",
        headers:{ Authorization: `Bearer ${token}`}
    });

    return await result.json();
}

function populateUI(object, playlistName, callFunction) {
    let playlistContainer = document.querySelector(".spotify-playlists");
    playlistContainer.innerHTML += generatePlaylist(playlistName);
    let cardRow = document.getElementById(playlistName); 

    let trackReturnArray = callFunction(object);
    // Append row list to div tag
    for (let i = 0; i < trackReturnArray.length; i++) {
        const { name, joinArtistName, albumArt, externalURL } = trackReturnArray[i];
        cardRow.innerHTML += generateCard(albumArt, name, joinArtistName, externalURL);
    }
}

// Return an object to each of the array element
function topTrackReturn(object){

    let mappedResult = object['items'].map(
        ({name, artists, album, external_urls}) => {

            let joinArtistName = artists.map(artist => artist.name).join(', ');
            let albumArt = album.images[1].url;
            let externalURL = external_urls.spotify;

            return{
                name,
                joinArtistName,
                albumArt,
                externalURL
            }
        }
    )
    return mappedResult;
}

function newReleasesReturn(object){

    let mappedResult = object['albums']['items'].map(
        ({name, artists, images, external_urls}) => {

            let joinArtistName = artists.map(artist => artist.name).join(', ');
            let albumArt = images[1].url;
            let externalURL = external_urls.spotify;

            return{
                name,
                joinArtistName,
                albumArt,
                externalURL
            }
        }
    )
    return mappedResult;
}

function generatePlaylist(playlistName){
    return `
    <div class="playlistRow">
        <h2>${playlistName}</h2>
        <div class="cardRow" id="${playlistName}">
        </div>
    </div>
    `
}

function generateCard(albumArt, title, subtitle, href){
    return `
    <a class="card" href="${href}">
        <img src="${albumArt}"/>
        <div class="play">
            <span class="fa fa-play"></span>
        </div>
        <h4>${title}</h4>
        <p>${subtitle}</p>
    </a>
    `
}

