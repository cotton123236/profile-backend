const mongoose = require('mongoose')
const { Schema, model } = mongoose


const indexSchema = new Schema({
  about: {
    type: mongoose.Types.ObjectId,
    ref: 'About',
  },
  works: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Work'
    }
  ],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Project'
    }
  ]
}, {
  versionKey: false
})

const Index = model('index', indexSchema)

module.exports = Index