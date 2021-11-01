import { getPopularArtistsWorld, getPopularTracksWorld, getPopularArtistsCountry, getPopularTracksCountry } from "./fetches.mjs";

let country = "netherlands";

async function getStuff() {
  await getPopularArtistsWorld().then((popularArtists) => {
    console.log("worldArtist:", popularArtists[0].name);
  });
  await getPopularTracksWorld().then((popularTracks) => {
    console.log("worldTrack:", popularTracks[0].name);
  });
  await getPopularArtistsCountry(country).then((popularArtists) => {
    console.log("countryArtist:", popularArtists[0].name);
  });
  await getPopularTracksCountry(country).then((popularTracks) => {
    console.log("countryTrack:", popularTracks[0].name);
  });
}

getStuff();
