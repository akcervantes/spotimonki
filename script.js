"use strict";

import { data } from "./data.js";

// arrays;
const { artistUnion } = data;
const { profile } = artistUnion;
const { stats } = artistUnion;

const {
  artistUnion: {
    discography: {
      albums: { items: albumsList },
    },
  },
} = data;

const body = document.querySelector("body");
const artistName = profile.name;
const listeners = stats.monthlyListeners;

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

//page header

const headerSection = elementFromHtml(`<header class="mainHeader">
<div class="headerText">
  <p class="verifiedArtist">
    <ion-icon name="checkmark-circle" class="verifiedIcon"></ion-icon
    >Verified artist
  </p>
  <h1 class="bandName">${artistName} </h1>
  <p class="monthlyListeners">${listeners} monthly listeners</p>
</div>
</header>`);

body.append(headerSection);

//////////////////////////CONTROLES////////////////////////////

const newSection = document.createElement("section");
newSection.classList.add("sectionControls");
body.append(newSection);

// hacer fragmento
const fragmentCtrl = document.createDocumentFragment();

//botones
function createButton(classList, innerHTML) {
  const button = document.createElement("button");
  button.classList.add("btn", ...classList);
  button.innerHTML = innerHTML;
  return button;
}

const buttonsData = [
  {
    classList: ["playButton"],
    innerHTML: `<ion-icon name="play-sharp"></ion-icon>`,
  },
  {
    classList: ["btn--2", "shuffleButton"],
    innerHTML: `<ion-icon name="shuffle"></ion-icon>`,
  },
  {
    classList: ["btn--2", "followingButton"],
    innerHTML: `<span>Following</span>`,
  },
  {
    classList: ["btn--2", "optionsButton"],
    innerHTML: `<ion-icon name="ellipsis-horizontal"></ion-icon>`,
  },
];

buttonsData.forEach((buttonData) => {
  const button = createButton(buttonData.classList, buttonData.innerHTML);
  fragmentCtrl.appendChild(button);
});

newSection.appendChild(fragmentCtrl);

/////////////////////////////tracklist/////////////////////////////

//crear seccion de albums

const albumSection = document.createElement("section");
albumSection.classList.add("sectionAlbums");
body.appendChild(albumSection);

//crear albumes

const { items: allAlbums } = data.artistUnion.discography.albums;

function generateAlbum(position) {
  const album = allAlbums[position].releases.items[0];
  const songs = album.tracks.items;

  const albumHeader = elementFromHtml(`
    <div class='album-header'>
      <img src=${album.coverArt.sources[0].url} class='albumImg'/> 
      <div class='album-info'>
      <span class='albumInfo'>Album</span> 
      <h2 class='albumName'>${album.name}</h2>
      <div class='albumInfo'>
      <span>Arctic monkeys •</span> <span>${album.date.year} •</span>
      <span>${album.tracks.totalCount} songs</span>
      </div>
      </div>
    </div>
    `);

  const tracklistSection = document.createElement("div");
  tracklistSection.classList.add("sectionTracklist");

  const songInfo = elementFromHtml(
    `<div id="songInfo">
  <span class="trackNum">#</span>
  <span class="track">track</span>
  <span class="plays">Plays</span>
  <span class="songDur"><ion-icon name="time-outline"></ion-icon></span>
  </div> `
  );

  let track = "";

  // agregar las secciones de cada album al documento
  albumSection.appendChild(albumHeader);
  albumSection.appendChild(tracklistSection);
  tracklistSection.appendChild(songInfo);

  // crear lista de tracks para cada album y hacerles append
  songs.forEach((element) => {
    track = elementFromHtml(`
              <div class="trackRow">
                <span class="trackNum">${element.track.trackNumber}</span>
                <span class="trackTitle">
                  <span class="songTitle">${element.track.name}</span>
                  <span class="songArtist">${element.track.artists.items[0].profile.name}</span>
                </span>
                <span class="plays">${element.track.playcount}</span>
                <span class="songDur">${element.track.duration.totalMilliseconds}</span>
              </div> `);

    tracklistSection.appendChild(track);
  });
}

// generar los 3 albums
for (let i = 0; i <= allAlbums.length; i++) {
  generateAlbum(i);
}
