document.getElementById("search").addEventListener("keyup", (e) => {
 debouceEvent(handleKeyUp)(e.target.value);
});

const listSearch = document.getElementById("search-list");
let timer = null;

function fetchUsersName(name) {
 return fetch(
  `https://jsonplaceholder.typicode.com/users?name_like=${name}`
 ).then((response) => response.json());
}

function debouceEvent(fn) {
 return function (value) {
  clearTimeout(timer);
  timer = setTimeout(() => fn(value), 800);
 };
}

function handleKeyUp(value) {
 if (!value) {
  clearTimeout(timer);
  listSearch.innerHTML = "";
  return;
 }

 fetchUsersName(value).then((data) => {
  const filteredUsers = data
   .map(
    (user) =>
     `
      <li>
        <a>
          <span>${user.name}</span>
          <p>${user.id}</p>
        </a>
      </li>
      `
   )
   .join("");

  listSearch.innerHTML = filteredUsers;
 });
}
