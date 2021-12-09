console.log('1st debug log');

// const URL = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

// axios.get(URL)
// .then(HTTPResponse => {
//   console.log(HTTPResponse);
//   console.log(HTTPResponse.data);
//   const states = Object.values(response.data);
//   console.log(states);
// })
// .catch(error => {
//   console.error(error);
// });


const URL = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const filterInput = document.getElementById("filter");
const list = document.getElementById("list");


axios // axios always returns a Promise (the promise of a valid dataset)
.get(URL)
.then((response) => {
  // if everything goes fine, you’ll get access to an object containing the data
  // console.log(response); // the full response
  // console.log(response.data);
  const states = Object.values(response.data);
  // console.log(states);
  displayStates(states);
  filterInput.addEventListener("input", () => { handleFilter(states) });
})
.catch((error) => {
  // if the promise is not fullfilled, you’ll get an error instead of the targetd data
  console.error(error);
});

function displayStates(stateList) {
  list.innerHTML = '';
  for(const state of stateList) {
    list.innerHTML += `<li>${state}</li>`;
  }
}


function handleFilter(states) {
  // get filter value
  const value = filterInput.value.toLowerCase();
  // loop through the array to filter corresponding items
  const filteredStates = states.filter((state) => {
    return state.toLowerCase().includes(value);
  });
  console.log(filteredStates);
  displayStates(filteredStates);
}

