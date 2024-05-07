// ARRAY DI OGGETTI CON I DATI TEAM
let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg",
    },
];

// INIZIO CREAZIONE PAGINA
const container = document.querySelector(".cont-flex");

// FUNZIONE PER PRENDERE L'OGGETTO DALL'ARRAY E STAMPARLO
function printTeam(array) {

    for (let i = 0; i < array.length; i++) {
        let singleTeam = array[i];

        genCard(singleTeam)
    };
}

// FUNZIONE PER CREARE IN PAGINA LE CARD CON I DATI DEL TEAM
function genCard(oggetto) {
    let person = document.createElement("div");
    person.classList.add("card")

    for (const key in oggetto) {

        if (key == "immagine") {
            console.log("ciao")
            let imgCard = document.createElement("img")
            imgCard.src = `img/${oggetto["immagine"]}`
            person.append(imgCard)
        }

        else {

            let text = document.createElement("p");
            container.append(person);
            person.append(text)
            text.append(oggetto[key])
        }
    };
}

printTeam(team);

