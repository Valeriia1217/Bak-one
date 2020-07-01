const bthLogin = document.getElementById("button-login");

bthLogin.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if (name.length !== 0 && password.length !== 0) {
        asyncLogin(name, password);
    } else alert("Заполните все поля!");
});

const asyncLogin = async (name, password) => {
    await fetch("http://localhost:1010/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, password})
        }
    )
        .then(result => {
            result.json().then(i => {
                const successful = document.getElementById("info");
                let arr = Object.keys(i);
                if (arr.length === 0) {
                    alert("Неверные данные!")
                } else successful.style.display = "block";

            });
        })
        .catch(err => console.log(err))
};
