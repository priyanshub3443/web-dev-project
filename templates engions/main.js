const express = require('express');
const { blob } = require('node:stream/consumers');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName= "adidas"
    let searchTest = "Search Now"
  res.render("index", {siteName: siteName, searchTest: searchTest})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle= "adidas why and when"
    let blogContent = "its aa very good"
  res.render("blogpost", {blogTitle : blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})