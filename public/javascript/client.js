
const hamburgerButton = document.querySelector('header nav button')
const hamburgerMenu = document.querySelector('header nav ul')
const layOver = document.querySelector('span:first-of-type')
const headingOne = document.querySelector('section:first-of-type article p')
const dienstenButton = document.querySelector('section:first-of-type article button')
const buttbutt = document.querySelector('section:first-of-type article button a')
const bannerImage = document.querySelector('section:first-of-type article img')



hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    hamburgerButton.classList.toggle('cross')
    layOver.classList.toggle('layOver')
})

const bannerAnimation = () => {
    if(bannerImage)
    setInterval(() => {
        bannerImage.onload = () => {
            headingOne.classList.add('onload')
            dienstenButton.classList.add('onload')
        }
        if (bannerImage.getAttribute('src') === '/images/multi.jpg'){
            bannerImage.src = '/images/notes.jpg'
            headingOne.innerHTML = 'Direct <a href="/contact">financieel advies</a> nodig? Neem dan contact met ons op.'
            buttbutt.innerHTML = "Contact"
            headingOne.classList.remove('onload')
            dienstenButton.classList.remove('onload')
        } else if (bannerImage.getAttribute('src') === '/images/notes.jpg') {
            bannerImage.src = '/images/papier2.jpg'
            headingOne.innerHTML = 'Meer weten over onze <a href="/tarieven">tarieven</a>?'
            buttbutt.innerHTML = "Tarieven"
            headingOne.classList.remove('onload')
            dienstenButton.classList.remove('onload')
        } else {
            bannerImage.src = '/images/multi.jpg'
            headingOne.innerHTML = 'Bent u benieuwd welke financieele diensten <a href="/diensten">Caspar Finance</a> biedt?'
            buttbutt.innerHTML = "Diensten"
            headingOne.classList.remove('onload')
            dienstenButton.classList.remove('onload')
        }
    }, 5000)
}

if(bannerImage){
    bannerImage.addEventListener('animationend', bannerAnimation)
}



window.onload = () => {
    if(dienstenButton)
        headingOne.classList.add('onload')
        dienstenButton.classList.add('onload')
}






 initMap = () => {
    const options = {
        zoom: 12,
        center: {lat:52.28240616061442, lng:5.154936510761147}
    }

    const map = new google.maps.Map(document.getElementById('map'), options)
    
    const marker = new google.maps.Marker({
        position: {lat:52.28240616061442, lng:5.154936510761147},
        map:map
    })
}


