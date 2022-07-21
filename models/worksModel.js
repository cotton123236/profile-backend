const mongoose = require('mongoose')
const { Schema, model } = mongoose

const StrObj = {
  type: String,
  default: ''
}

const worksSchema = new Schema({
  title: StrObj,
  subTitle: StrObj,
  image: StrObj,
  href: StrObj,
  tech: StrObj
}, {
  versionKey: false
})

const Works = model('Work', worksSchema)

module.exports = Works