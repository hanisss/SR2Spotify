const getP1 = document.querySelector('#get_p1');
const getP2 = document.querySelector('#get_p2');
const getP3 = document.querySelector('#get_p3');
const getP4 = document.querySelector('#get_p4');

const getData = (url) => {
    $(document).ready(function(){
        $.ajax({
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'GET',
            url: url,
        }).then(function(data) {
            $('.channel_id').html("Kanal: " + data.channelname);
            $('.title').html("Nuvarande låt:  " + data.previoustitle);
            $('.artist').html("Artist:  " + data.previousartist);
            $('.album').html("Album:  " + data.previousalbum);
            $('.next_title').html("Nästa låt: " + data.nexttitle);
            $('.next_artist').html("Nästa artist: " + data.nextartist);
            $('.next_album').html("Nästa album:  " + data.nextalbum);
        });
    });
    console.log(url);
};

getP1.addEventListener('click', () => {
    getData('http://localhost:4567/api/v1/sveriges-radio/songs/132')
})

getP2.addEventListener('click', () => {
    getData('http://localhost:4567/api/v1/sveriges-radio/songs/163')
})

getP3.addEventListener('click', () => {
    getData('http://localhost:4567/api/v1/sveriges-radio/songs/164')
})

getP4.addEventListener('click', () => {
    getData('http://localhost:4567/api/v1/sveriges-radio/songs/207')
})

const getMyPlayList_1 = document.querySelector('#get_playlist');
const getMyPlayList_ID_1 = document.querySelector('#get_playlist');
const getMyPlayList_2 = document.querySelector('#get_playlist');
const getMyPlayList_ID_2 = document.querySelector('#get_playlist');
const getMyPlayList_3 = document.querySelector('#get_playlist');
const getMyPlayList_ID_3 = document.querySelector('#get_playlist');
const getMyPlayList_4 = document.querySelector('#get_playlist');
const getMyPlayList_ID_4 = document.querySelector('#get_playlist');
const getMyPlayList_5 = document.querySelector('#get_playlist');
const getMyPlayList_ID_5 = document.querySelector('#get_playlist');
const getMyPlayList_6 = document.querySelector('#get_playlist');
const getMyPlayList_ID_6 = document.querySelector('#get_playlist');
const getMyPlayList_7 = document.querySelector('#get_playlist');
const getMyPlayList_ID_7 = document.querySelector('#get_playlist');
const getMyPlayList_8 = document.querySelector('#get_playlist');
const getMyPlayList_ID_8 = document.querySelector('#get_playlist');
const getMyPlayList_9 = document.querySelector('#get_playlist');
const getMyPlayList_ID_9 = document.querySelector('#get_playlist');
const getMyPlayList_10 = document.querySelector('#get_playlist');
const getMyPlayList_ID_10 = document.querySelector('#get_playlist');

const getPlaylist = (url) => {
    $(document).ready(function(){
        $.ajax({
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'GET',
            url: url,
        }).then(function(data) {
            $('.my_playlist_1').html("Spellista:  " + data.arrayOfPlaylists[0].playlist_name);
            $('.my_playlist_id_1').html("Spellista ID:  " + data.arrayOfPlaylists[0].playlist_id);
            $('.my_playlist_2').html("Spellista:  " + data.arrayOfPlaylists[1].playlist_name);
            $('.my_playlist_id_2').html("Spellista ID:  " + data.arrayOfPlaylists[1].playlist_id);
            $('.my_playlist_3').html("Spellista:  " + data.arrayOfPlaylists[2].playlist_name);
            $('.my_playlist_id_3').html("Spellista ID:  " + data.arrayOfPlaylists[2].playlist_id);
            $('.my_playlist_4').html("Spellista:  " + data.arrayOfPlaylists[3].playlist_name);
            $('.my_playlist_id_4').html("Spellista ID:  " + data.arrayOfPlaylists[3].playlist_id);
            $('.my_playlist_5').html("Spellista:  " + data.arrayOfPlaylists[4].playlist_name);
            $('.my_playlist_id_5').html("Spellista ID:  " + data.arrayOfPlaylists[4].playlist_id);
            $('.my_playlist_6').html("Spellista:  " + data.arrayOfPlaylists[5].playlist_name);
            $('.my_playlist_id_6').html("Spellista ID:  " + data.arrayOfPlaylists[5].playlist_id);
            $('.my_playlist_7').html("Spellista:  " + data.arrayOfPlaylists[6].playlist_name);
            $('.my_playlist_id_7').html("Spellista ID:  " + data.arrayOfPlaylists[6].playlist_id);
            $('.my_playlist_8').html("Spellista:  " + data.arrayOfPlaylists[7].playlist_name);
            $('.my_playlist_id_8').html("Spellista ID:  " + data.arrayOfPlaylists[7].playlist_id);
            $('.my_playlist_9').html("Spellista:  " + data.arrayOfPlaylists[8].playlist_name);
            $('.my_playlist_id_9').html("Spellista ID:  " + data.arrayOfPlaylists[8].playlist_id);
            $('.my_playlist_10').html("Spellista:  " + data.arrayOfPlaylists[9].playlist_name);
            $('.my_playlist_id_10').html("Spellista ID:  " + data.arrayOfPlaylists[9].playlist_id);
        });
    });
    console.log(url);
};

getMyPlayList_1.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_1.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_2.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_2.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_3.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_3.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_4.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_4.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_5.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_5.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_6.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_6.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_7.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_7.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_8.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_8.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_9.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_9.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_10.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

getMyPlayList_ID_10.addEventListener('click', () => {
    getPlaylist('http://localhost:4567/api/v1/spotify/myplaylists/10')
})

const getMySessionID = document.querySelector('#get_session_id');

const getSessionID = (url) => {
    $(document).ready(function(){
        $.ajax({
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: 'GET',
            url: url,
        }).then(function(data) {
            $('.my_session_id').html("Session ID:  " + data.session_id);
        });
    });
    console.log(url);
};

getMySessionID.addEventListener('click', () => {
    getSessionID('http://localhost:4567/api/v1/spotify/session')
})

const getMyLyrics = document.querySelector('#search');
const getArtist = document.querySelector('#artist_my_input');
const getSong = document.querySelector('#song_my_input');

const getLyrics =(url)=> {
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: url,
        }).then(function(data) {
            const parsedData = JSON.parse(data)
            console.log(parsedData)
            $('.lyrics').html(parsedData.text);
        });
    });
};

getMyLyrics.addEventListener('click', () => {
    const artist = getArtist.value
    const song = getSong.value
    getLyrics('http://localhost:4567/api/v1/chartlyrics/getLyrics/' + artist + '/' + song)
})