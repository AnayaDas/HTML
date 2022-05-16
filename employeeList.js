let details = JSON.parse(localStorage.getItem("details"));
let screen = document.getElementById('screen');

for( let i in details){
    screen.innerHTML +='<a href="#">'+(++i)+'. '+details[i-1]+'</a>';
}