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

]
console.log(team)


for (let i = 0; i < team.length; i++) {
    let singleTeam = team[i];

    console.log(singleTeam)

   console.log(`Nome e ruolo del membro del team: ${singleTeam.nome}, ${singleTeam.ruolo}`)
   
    // for (const key in singleTeam) {
    //     console.log(`${key}: ${singleTeam[key]}`)
    // }

}