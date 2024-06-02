let progress = 0;
const space-y-4 = document.getElementsByClassName ('space-y-4')

function space-y-4(){
    if (progress <= 100){
        space-y-4.style.width = progress + '%'
        progress ++;
        setTimeout (updateloader, 50);
    }
}