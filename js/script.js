const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");
// the above variable was created when the html dropdown menu was made visible (unhidden) - the direction was to `capture the select element` - the 'select' element has the ID of "users"

const getData = async function(numUsers) {
    // first, the below fetch data request allows us to retrieve 5 results at a time - due to the ending notation of "?results" = (https://randomuser.me/api?results=5)
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    // next, once the num-users class was reveiled, the above APL URL was modified to generate the numUsers people - and the URL was changed into template literal format to link to the numUsers variable

    const data = await userRequest.json();
    // console.log(data);

    const userResults = data.results;
    displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    
        for (const user of userResults) {
            const country = user.location.country;
            const name = user.name.first;
            const imageUrl = user.picture.medium;
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageUrl} alt="User avatar"/>
                `;
            // text: "append userDiv to the randomFolks element":
            randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    console.log(numUsers);
    getData(numUsers);
});