DataUser = [];
async function play() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (DataUser = data.results));
}

async function aff() {
  await play();

  const timeline = (date) => {
    let today = new Date();
    let timestamp = Date.parse(today);
    let timesdate = Date.parse(date);
    return Math.ceil((timestamp - timesdate) / 8.64e7); //( 8.64×10^7: 1journée= 60minutes + 60secondes + une seconde ou 1000miliseconde une journée 24hr24×60×60×1000 = 86400000 milisecondes)
  };
  const VerDate = (date) => {
    let NewDate = new Date(date).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    return NewDate;
  };

  DataUser.map((data) => {
    document.body.innerHTML += `
        <div class='card'>
        <img src='${data.picture.large}'>
        <h3>${data.name.last}</h3>
        <p>${data.location.country}, ${VerDate(data.dob.date)}</p>
        <em>${timeline(data.registered.date)} jours</em>
        </div>
        `;
  });
}
aff();
