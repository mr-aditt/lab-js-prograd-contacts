//Enter your code here..
window.onload = ()=>fetchData();
document.querySelector("#btnGet").addEventListener("click", contactBook);


let person_details = [];
let url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
    try {
        let data = fetch(url);
        data.then(response => {
        console.log("Fetched Data");
        return response.json();
        }).then(people => {
        console.log("Appending Person Details");
        people.map((person, index) => {
            let details = {
                name: person.name,
                email: person.email,
                phone: person.phone,
                website: person.website,
                company: person.company.name,
                city: person.address.city,
                zipcode: person.address.zipcode
            };
            sessionStorage.setItem(index, JSON.stringify(details));
        })
        console.log("Appended Person Details");
        
    });
    } catch (error) {
        console.log(error);
    }
    console.log(person_details);
}



// async 
function contactBook(){

    // let promise = new Promise(() => {
        
        let subtitle = document.createElement("h2");
        subtitle.innerHTML = "List of Users";
        let header = document.querySelector("#message");
        header.append(subtitle);

        for (let index = 0; index < sessionStorage.length-1; index++) {
            let person = JSON.parse(sessionStorage[index]);
            let user = document.createElement("div");
            user.setAttribute("class", "player");
            let name = document.createElement("div");
            name.setAttribute("class", "strength");
            name.innerHTML = "Name: "+person.name;

            let email = document.createElement("div");
            email.innerHTML = "Email: "+person.email;

            let phone = document.createElement("div");
            phone.innerHTML = "Phone: "+person.phone;

            let website = document.createElement("div");
            website.innerHTML = "Website: "+person.website;
            
            let company = document.createElement("div");
            company.innerHTML = "Company: "+person.company;

            let city = document.createElement("div");
            city.innerHTML = "City: "+person.city;

            let zipcode = document.createElement("div");
            zipcode.innerHTML = "Zipcode: "+person.zipcode;


            user.appendChild(name);
            user.appendChild(email);
            user.appendChild(phone);
            user.appendChild(website);
            user.appendChild(company);
            user.appendChild(city);
            user.appendChild(zipcode);
            header.appendChild(user);
        }
    // }).then("Promise Fulfilled")
    // .catch("Error Occured");
}