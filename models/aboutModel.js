const mongoose = require('mongoose')
const { Schema, model } = mongoose

const StrObj = {
  type: String,
  default: ''
}

const aboutSchema = new Schema({
  note: StrObj,
  nameTw: { ...StrObj, default: '吳佾闈' },
  nameEn: { ...StrObj, default: 'Wilson Wu' },
  slogan: StrObj,
  brief: StrObj
}, {
  versionKey: false
})

const About = model('About', aboutSchema)

module.exports = About