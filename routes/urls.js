const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')


const router = express.Router()

const Url = require('../models/URLModel')

baseURl = 'http:localhost:5000'

router.post('/shorten', async (req, res) => {
    const { actualUrl } = req.body

    if(!validUrl.isUri(baseURl)){
        return res.status(401).json('Invalid Base URL')
    }

    const urlCode = shortid.generate()

    if(validUrl.isUri(actualUrl)){
        try{

            let url = await Url.findOne({
                actualUrl
            })

            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseURl + '/' + urlCode

                // invoking the Url model and saving to the DB
                url = new Url({
                    actualUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    }
    else {
        res.status(401).json('Invalid longUrl')
    }
})

module.exports = router