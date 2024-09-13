const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomtext:{
        type: String,
        require: true,
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    caption:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    {
        type: String,
        require: true,
    },
})

const aboutSection = new mongoose.Schema({
    lotiURL:{
        type: String,
        require: true,
    },
    description1:{
        type: String,
        require: true,
    },
    description2:{
        type: String,
        require: true,
    },
    skills:{
        type: Array,
        require: true,
    },
})

const expirenceSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    period:{
        type: String,
        require: true,
    },
    company:{
        type: String,
        require: true,
    },
})


const projectsSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    link:{
        type: String,
        require: true,
    },
    technologies:{
        type: Array,
        require: true,
    },
})
const constactSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    country:{
        type: String,
        require: true,
    },

})

const accountsSchema = new mongoose.Schema({
    name:{
        type: String ,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    link:{
        type: String,
        require: true,
    },
})
module.exports = {
    Intro: mongoose.model("Intro", introSchema),
    AboutSection: mongoose.model("AboutSection", aboutSectionSchema),
    Experience: mongoose.model("Experience", experienceSchema),
    Project: mongoose.model("Project", projectsSchema),
    Contact: mongoose.model("Contact", contactSchema),
    Account: mongoose.model("Account", accountsSchema),
};