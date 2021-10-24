const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
      Project.getAll()
            .then(projects => {
                  res.json(projects)
            })
            .catch(next)
})

router.post('/', async (req, res, next) => {
      try {
            const addProject = await Project.add(req.body)
            res.status(201).json(addProject)
      }catch(e) {
            next(e)
      }
})

module.exports = router
