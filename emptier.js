const selectedContainers = document.querySelectorAll('._OxEpxzAgJiTENfolVUN')

const containers = Object.keys(selectedContainers).map((key) => {
    return selectedContainers[key];
})

containers.map((item) => {
    return item.querySelector('.TT1tIewS2iI8Uz8kLuQB .DbMYFmOEEz9PH1h1zK9n .Fm7C3gdh5Lsc9qSXrQwO').click();
})
