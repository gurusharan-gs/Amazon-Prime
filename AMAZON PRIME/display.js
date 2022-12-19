let data = JSON.parse(localStorage.getItem("appMovie"))

function append(){
     let ran = Math.floor((Math.random() * 10) + 1);
     let container = document.getElementById("container")
     let avt =  document.createElement("img")
     avt.setAttribute("src",data.Poster)
     let h1 = document.createElement("h1")
     h1.innerText = data.Title
     let p = document.createElement("p")
     p.innerText = `1 hr 54 min . ${data.Year}`
     let p1 = document.createElement("p")
     p1.innerText = `Type ${data.Type}`
     let p2 = document.createElement("p")
     p2.innerText = `Released Year - ${data.Year}`
     let h4 = document.createElement("h4")
     h4.innerText = `IMDB Rating ${ran}`
     h4.style.backgroundColor = "#00c853"
     h4.style.borderRadius = "5px"
     h4.style.padding = "6px 1px"
     h4.style.width = "60%"
     let div = document.createElement("div")
     let div1 = document.createElement("div")
     let div2 = document.createElement("div")
     div1.append(avt)
     div2.append(h1,p,p1,p2,h4)
     div.append(div1,div2)
     container.append(div)

  }
  append(data)


  