let getData = async () => {
  let query = document.getElementById("query").value;
  let url = `https://www.omdbapi.com/?apikey=aa50c9e9&s=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.Search);
  append(data.Search);
};

let showData = async () => {
  let url = `https://www.omdbapi.com/?apikey=aa50c9e9&s=avengers`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.Search);
  append1(data.Search);
};
showData()


let append = (data) => {
  // let display = document.querySelector("#display");
  let cont = document.querySelector(".right");
  document.querySelector(".right").innerHTML = null
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "show");
    let img = document.createElement("img")
    img.src = el.Poster;
    let p = document.createElement("p");
    p.innerText = el.Title;
    let pp = document.createElement("p");
    pp.innerText = el.Year;
    div.addEventListener("click", function () {
      localStorage.setItem("appMovie", JSON.stringify(el))
      sendMoves()
  })
 let div1 = document.createElement("div")
    div.append(p);
    cont.append(div);
    // div1.append(img, p, pp)
    // display.append(div1)
  });
};



// debounce
let id;
let debounce = (delay, func) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, delay);
};

// slide show function
let image = [
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX3000_FMwebp_.jpeg",
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_LOTRTrilogy_LaunchV2/aff5e242-51fd-4e52-b726-cf5966cfc551._UR3000,600_SX3000_FMwebp_.jpeg",
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TheBadGuys/269b2768-5b5c-408c-8bc1-a6821e3e6967._UR3000,600_SX3000_FMwebp_.jpeg",
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Uncharted/90097e63-ec24-4589-a7d6-922e413ca5c9._UR3000,600_SX3000_FMwebp_.jpeg",
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MoonFall_LP/95c92bb2-611c-463b-87b6-9787891bdc94._UR3000,600_SX3000_FMwebp_.jpeg",
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SamratPrithviraj_Launch/c7358dc2-f7a7-4abc-85a2-77bb68b3a449._UR3000,600_SX3000_FMwebp_.jpeg",
];

let index = 0;
let address;
let slideShow = () => {
  let container = document.getElementById("slide");
  address = setInterval(() => {
    if (index === image.length) {
      index = 0;
    }
    container.innerHTML = null;
    let img = document.createElement("img");
    img.src = image[index];
    container.append(img);
    index++;
  }, 1000);
};
slideShow();

let stop = () => {
  clearInterval(address);
};
let start = () => {
  slideShow();
};

let slider = (x) => {
  stop();
  address = address + x;
  if (address == image.length) {
    address = 0;
  } else if (address < 0) {
    address = image.length - 1;
  }
  console.log(address);
  let container = document.getElementById("slide");
  let img = document.createElement("img");
  img.src = image[address];
  container.innerHTML = null;
  container.append(img);
};



function sendMoves() {
  window.location.href = "display.html"
}

let append1 = (data) => {
  let display = document.querySelector("#display");
  // document.querySelector(".right").innerHTML = null
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "show");
    let img = document.createElement("img")
    img.src = el.Poster;
    let p = document.createElement("p");
    p.innerText = el.Title;
    let pp = document.createElement("p");
    pp.innerText = el.Year;

 let div2 = document.createElement("div")
    div2.append(img, p, pp)
    display.append(div2)
  });
};


var trendd = JSON.parse(localStorage.getItem("trend"))
function trend(trendd){
 // var ccc = document.getElementById("aaa")
 // var avv = document.createElement("img")
 avv.src = `https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path}`
 var tre = document.getElementById("display")
 // console.log(trend)
 trendd.forEach(function(el){
  
     // console.log(el.original_title)
     // console.log(el.overview)
     // console.log(el.release_date)
     var div = document.createElement("div")
     var avtar = document.createElement("img")
     avtar.src = `https://image.tmdb.org/t/p/original/${el.backdrop_path}`
     var h1 = document.createElement("h1")
     h1.innerText = el.original_title
     var p = document.createElement("p")
     p.innerText = el.overview
     var p1 = document.createElement("p")
     p1.innerText = el.release_date
     var h4 = document.createElement("h4")
     h4.innerText = `Rating - ${el.vote_average}`
     if(el.vote_average>8){
         h4.style.backgroundColor = "green"
     }
     var marq = document.getElementById("display")
     var avt = document.createElement("img")
    //  avt.src = `https://image.tmdb.org/t/p/original/${el.backdrop_path}`
     marq.append(avt)
     div.append(avtar,h1,p,p1,h4)
     tre.append(div)
   
 })
 localStorage.setItem("trend",JSON.stringify(trendd))
}
// trend()