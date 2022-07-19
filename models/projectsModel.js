const mongoose = require('mongoose')
const { Schema, model } = mongoose

const StrObj = {
  type: String,
  default: ''
}

const projectsSchema = new Schema({
  href: StrObj,
  title: StrObj,
  brief: StrObj,
  tech: StrObj
}, {
  versionKey: false
})

const Projects = model('Project', projectsSchema)

module.exports = Projects