function main() {
  //var
  const timestamp = Date.now().toString();
  const public = "f4b237434fd279effac6b2401acf7647";
  const private = "515f7d92eac9738641b32fd2a96617604b1c24e6";
  const hash = md5(timestamp + private + public);
  const url = `http://gateway.marvel.com/v1/public/characters?limit=1&offset=${2}&ts=${timestamp}&apikey=${public}&hash=${hash}`;
  //request
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      createHero(data.data.results);
      console.log(data);
    }
  };
  request.open("GET", url, false);
  request.send();
}
main();

function createHero(heros) {
  heros.forEach((hero) => {
    //id
    const teste = document.querySelector("#principal")
    //create
    const section = document.createElement("section")
    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const divTable = document.createElement("div")
    const hTable = document.createElement("h3")
    const table = document.createElement("table") //table
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody")
    //const thID, thTitulo, thTipo = document.createElement("th")
    
    
    const div2 = document.createElement("div")
    const h3 = document.createElement("h3")
    const ul = document.createElement("ul")
    //class
    section.classList.add("container")
    section.classList.add("d-flex")
    div.classList.add("content")//div1
    img.src = (hero.thumbnail.path + "." + hero.thumbnail.extension)
    img.classList.add("img-personagem")
    divTable.classList.add("d-flex")//divTable
    divTable.classList.add("table")
    div2.classList.add("list") //div2
    div2.classList.add("color-white")
    h3.classList.add("title-list")
    //textContent
    h4.textContent = "Personagem Marvel"
    h1.textContent = hero.name
    p.textContent = hero.description
    h3.textContent = "Lista de Aparições (comics)"
    hTable.textContent = "Tabela"
    
    //th.textContent = 
    
    //loop pra percorrer o array series.items
    hero.series.items.forEach(serie => {
      const li = document.createElement("li");
      li.textContent = serie.name;
      ul.append(li);
    })
    
    hero.stories.items.forEach(storie => {
      const tr = document.createElement("tr") 
      const tdId = document.createElement("td")
      const tdTitle = document.createElement("td")
      const tdType = document.createElement("td")
      let id = storie.resourceURI
      console.log(id)
      let regex = /\d{2,}/g //todo conjunto de numeros
      let variavel = id.match(regex)
      console.log(variavel)
      tdId.textContent = id.match(regex)
      tdTitle.textContent = storie.name
      tdType.textContent = storie.type
      
      tr.append(tdId)
      tr.append(tdTitle)
      tr.append(tdType)

      tbody.append(tr)
      
    })
    
    //append
    div.append(h4)//div1
    div.append(h1)
    div.append(img)
    div.append(divTable)
    divTable.append(hTable)//divTable
    divTable.append(table)
    table.append(thead)
    table.append(tbody)
    div2.append(h3)//div2
    div2.append(ul)
    section.append(div)
    section.append(div2)
    teste.append(section)
    //funcao pra percorrer o array stories.items
  });
}
