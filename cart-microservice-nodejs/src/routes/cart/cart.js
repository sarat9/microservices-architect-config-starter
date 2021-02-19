const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    let sampleJson = [
        { itemNo : 1, item: 'Nike Shoe' },
        { itemNo : 2, item: 'Tommy Hilfiger Shirt' },
        { itemNo : 3, item: 'Calvin Klien Trousers' }
    ]
    res.send({ data: sampleJson })
})


router.post('/deleteall', (req, res) => {
    res.send({ data: "Deleted all Items in Cart" })
})

router.get('/add/:id', (req, res) => {
    const id = req.params.id;
    res.send({ data: "Added "+ id +" to Cart" })
})


module.exports = router