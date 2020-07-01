const bthRegister = document.getElementById("button-register");

bthRegister.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (name.length !== 0 && password.length !== 0) {
        asyncRegister(name, password);
    } else {
        alert("Заполните все поля!");
    }
});

const asyncRegister = async (name, password) => {

    await fetch("http://localhost:1010/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, password})
        }
    )
        .then(res => {
            res.json().then(i => console.log(i));
            let info = document.getElementById("info");
            info.style.display = "block"
        })
        .catch(err => console.log(err))
};
