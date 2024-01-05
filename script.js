"use strict";

import { data } from "./data.js";

// arrays;
const { artistUnion } = data;
const { profile } = artistUnion;
const { stats } = artistUnion;

// const { discography } = artistUnion;
// const { albums } = discography;
// const { items } = albums;

const {
  artistUnion: {
    discography: {
      albums: { items: albumsList },
    },
  },
} = data;

console.log(albumsList);

// const { releases } = albumsList[0];
// const { items } = releases;

// const album1 = items[0];
// console.log(album1);

//selectors
const body = document.querySelector("body");

//variables
const artistName = profile.name;
const listeners = stats.monthlyListeners;

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

//header

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

//crear seccion

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

//////////////////////////////////tracklist///////////////////////////////////////////////

//crear seccion de albums

const albumSection = document.createElement("section");
albumSection.classList.add("sectionAlbums");
body.appendChild(albumSection);

//crear contenedores para los albumes

function albumContainer(classList) {
  const newAlbum = document.createElement("table");
  newAlbum.classList.add("albumTracklist");
  albumSection.appendChild(newAlbum);
}

albumsList.forEach((element) => {
  albumContainer();
});

const albumTables = document.querySelectorAll("table");

let albumTabArr = [albumTables];

console.log(albumTabArr);

albumTabArr.forEach((element) => {
  const tableHead = document.createElement("tHead");
  element.appendChild(tableHead);
});

const tracklistSection = `<section class="sectionTracklist">
<table cellspacing="0">
  <thead>
    <tr id="songInfo">
      <th class="trackNum">#</th>
      <th class="track">Title</th>
      <th class="plays">Plays</th>
      <th class="songDur">
        <ion-icon name="time-outline"></ion-icon>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td class="trackNum">1</td>
      <td class="trackTitle">
        <span class="songTitle">pool side</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">612,738</td>
      <td class="songDur">1:01</td>
    </tr>

    <tr>
      <td class="trackNum">2</td>
      <td class="trackTitle">
        <span class="songTitle">POOL</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">4,573,418</td>
      <td class="songDur">3:57</td>
    </tr>

    <tr>
      <td class="trackNum">3</td>
      <td class="trackTitle">
        <span class="songTitle">飛べ</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">1,045,206</td>
      <td class="songDur">3:55</td>
    </tr>

    <tr>
      <td class="trackNum">4</td>
      <td class="trackTitle">
        <span class="songTitle">おもてなし</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">956,029</td>
      <td class="songDur">3:28</td>
    </tr>

    <tr>
      <td class="trackNum">5</td>
      <td class="trackTitle">
        <span class="songTitle">artsick</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">2,426,824</td>
      <td class="songDur">5:02</td>
    </tr>

    <tr>
      <td class="trackNum">6</td>
      <td class="trackTitle">
        <span class="songTitle">C&C</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">638,068</td>
      <td class="songDur">3:08</td>
    </tr>

    <tr>
      <td class="trackNum">7</td>
      <td class="trackTitle">
        <span class="songTitle"> おちゃんせんすぅす</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">1,970,210</td>
      <td class="songDur">2:48</td>
    </tr>

    <tr>
      <td class="trackNum">8</td>
      <td class="trackTitle">
        <span class="songTitle"> 初耳</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">583,438</td>
      <td class="songDur">3:58</td>
    </tr>

    <tr>
      <td class="trackNum">9</td>
      <td class="trackTitle">
        <span class="songTitle">99.974°C</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">791,383</td>
      <td class="songDur">4:21</td>
    </tr>

    <tr>
      <td class="trackNum">10</td>
      <td class="trackTitle">
        <span class="songTitle"> タラッタラッタ</span>
        <span class="songArtist">tricot</span>
      </td>
      <td class="plays">492,161</td>
      <td class="songDur">4:53</td>
    </tr>
  </tbody>
</table>`;
