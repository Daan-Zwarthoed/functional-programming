import axios from "axios";

export function getPopularTracksCountry(country) {
  return axios
    .request(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&limit=1000&api_key=424df88f98fb9a993131121f6457c381&format=json`)
    .then(function (response) {
      return response.data.tracks.track;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function getPopularArtistsCountry(country) {
  return axios
    .request(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&limit=50&api_key=424df88f98fb9a993131121f6457c381&format=json`)
    .then(function (response) {
      return response.data.topartists.artist;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function getPopularTracksWorld() {
  return axios
    .request(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=1000&api_key=424df88f98fb9a993131121f6457c381&format=json`)
    .then(function (response) {
      let tracks = response.data.tracks.track;
      tracks.sort((a, b) => {
        return b.listeners - a.listeners;
      });
      return tracks;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export function getPopularArtistsWorld() {
  return axios
    .request(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=1000&api_key=424df88f98fb9a993131121f6457c381&format=json`)
    .then(function (response) {
      let artists = response.data.artists.artist;
      artists.sort((a, b) => {
        return b.listeners - a.listeners;
      });
      return artists;
    })
    .catch(function (error) {
      console.error(error);
    });
}
