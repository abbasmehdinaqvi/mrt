
const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const port=process.env.PORT || 3000

//define paths for express config
const publicpath=path.join(__dirname,'../public')
const viewspath=path.join(__dirname, '../templates/views')
const partialspath=path.join(__dirname, '../templates/partials')

//setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)

//setup static directory to serve
app.use(express.static(publicpath))

app.listen(port,()=>{
    console.log('Server is up')
})