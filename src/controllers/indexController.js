const getIndex = (req, res) => {
    res.render('home', {
        style: '/styles/style.css',
        img1: '/images/books.jpg',
        img2: '/images/homepagina banner.jpg',
        img3: '/images/papier.jpg'    
    })
}

const getAbout = (req, res) => {
    res.render('about', {
        style:"/styles/about.css"
    } )
}

const getDiensten = (req, res) => {
    res.render('diensten', {
        style:"/styles/diensten.css"
    } )
}

const getTarieven = (req, res) => {
    res.render('tarieven', {
        style:"/styles/tarieven.css"
    } )
}

const getContact = (req, res) => {
    res.render('Contact', {
        style:"/styles/contact.css"
    } )
}

// const carroussel = (req, res) => {
//     res.render('home', {
//         img1: '/images/books.jpg',
//         img2: '/images/homepagina banner.jpg',
//         img3: '/images/papier.jpg'    
//     })
// }

module.exports = {
    getIndex,
    getAbout,
    getContact,
    getTarieven,
    getDiensten
}