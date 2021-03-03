const express = require('express')
const path = require('path')
const app = express()
const request = require('request');

var backendApiUrl=''

function getBackendApiUrl(){
    if(!backendApiUrl){
        request('https://geolocation-db.com/json/344ec440-6bfc-11eb-a0c0-b5dee9e67313', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(JSON.stringify(body));
            console.log(body.IPv4);
            backendApiUrl = body.IPv4
            return backendApiUrl;
            console.log('Backend IP set to : '+body.IPv4);
        });
    }
}
getBackendApiUrl()


app.use(express.static(path.join(__dirname, 'dist')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/myip', (req, res) => {
    // return res.send(''+backendApiUrl)
    return res.json({ url: ''+backendApiUrl });
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`UI App Started...`);
    console.log(`Node Server is running on port ${PORT}.`);
});