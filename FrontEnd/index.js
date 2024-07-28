const url = "http:localhost:3000/msg";
const config = {
    method: "get",
    headers: {},
    mode: "cors",
}

function getData(){
    fetch(url, config).then(response => {
        if(response.status == 200){
            console.log("request send");
        }else{
            console.log("error");
        }
        return response.json();
    }).then(sir => {
        let obj = JSON.parse(JSON.stringify(sir));
        let corpo = obj.message;
        document.getElementById("corpo").innerHTML = corpo;
    })
}

window.onload = () => {
    let butao = document.getElementById("butao");
    butao.addEventListener("click", getData);
}