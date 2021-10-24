const express = require('express')

const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
      Resource.getAll()

            .then(resources => {

                  res.json(resources)
            })

            .catch(next)
})

router.post('/', async (req, res) => {
      
      try {

            const addResource = await Resource.add(req.body)

            res.status(201).json(addResource)

      }catch(e) {

            res.status(500).json({message: `Can't add the resource to our database : ${e}`})

      }
})

module.exports = router
