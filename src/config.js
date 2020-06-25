module.exports = {
    API: process.env.NODE_ENV === "development" ? 'http://localhost:5000' : 'https://mindmusclebackend.herokuapp.com/'
}