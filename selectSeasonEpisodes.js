// Select only Season 1

const selectedContainers = document.querySelectorAll('.hTRqaN61SDG95erQGMmx')

const containers = Object.keys(selectedContainers).map((key) => {
    return selectedContainers[key];
})

for(let i = containers.length-1; 0 <= i; i--) {
    const item = containers[i];
        for(let x = containers.length-1; 0 <= x; x--) {
            console.log(item.querySelector('.TT1tIewS2iI8Uz8kLuQB h4').innerText.split(' ')[0].substring(1)[0]);
             if(item.querySelector('.TT1tIewS2iI8Uz8kLuQB h4').innerText.split(' ')[0].substring(1)[0] == '1' ) {

                 item.querySelector('.TT1tIewS2iI8Uz8kLuQB .DbMYFmOEEz9PH1h1zK9n .Fm7C3gdh5Lsc9qSXrQwO').click();
             }
        }

}
