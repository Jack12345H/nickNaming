var output = document.getElementById("result");
let nicknames = [
  "The Dull",
  "The crusher",
  "The Hawk",
  "The Megamind",
  "The Jester",
  "The Chief",
];

document.getElementById("random").addEventListener("click", randomNickName);
document.getElementById("all").addEventListener("click", allNickNames);

function randomNickName() {
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let randomPick = Math.floor(Math.random() * 6 + 0);

  document.getElementById(
    "result"
  ).innerHTML = `${first} "${nicknames[randomPick]}" ${last}`;
  console.log(randomPick);
}

function allNickNames() {
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;

  for (let i = 0; i < nicknames.length; i++)
    document.getElementById(
      "result"
    ).innerHTML += `${first} "${nicknames[i]}" ${last}<br>`;
}
