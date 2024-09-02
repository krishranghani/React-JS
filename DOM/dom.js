document.getElementById("title").style.color = "red";

const variabal = document.getElementsByClassName("sub");
variabal[0].style.backgroundColor = "red";
variabal[0].style.Color = "green";

Array.from(document.getElementsByTagName("li")).forEach(li => {
    li.style.color = "red";
    li.style.fontWeight = "bold";
    li.style.fontSize = '40px';
});

function change() {
    const variabal = document.getElementsByTagName('p');
    for (let i = 0; i < variabal.length; i++) {
        variabal[i].style.backgroundColor = "grreen";
        variabal[i].style.color = "red";
        variabal[i].style.fontSize = "20px";

    }
}

document.querySelector('h3').style.fontSize = "50px"


const dom = document.querySelectorAll("span");
dom[1].style.backgroundColor = "red";
dom[1].style.color = "white";