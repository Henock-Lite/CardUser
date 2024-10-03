DataUser = [];
async function play() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (DataUser = data.results));
  console.log(DataUser[0]);
}

async function aff() {
  await play();

  const timeline = (date) => {
    let today = new Date();
    let timestamp = Date.parse(today);
    let timesdate = Date.parse(date);
    return Math.ceil((timestamp - timesdate) / 6.84e7);
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
