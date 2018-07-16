
// Schema for Course
const  mongoose = require('mongoose');
//const  config = require('../database');

const CourseSchema = mongoose.Schema(
{

    course_name:
    {
        type: String,
        required: true
    },

    diff_rate:
    {
        type: String,
        required: true
    },

    course_material:
    {
        type: String,
        required: true
    },

    prof_friendli:
    {
        type: String,
        required: true
    },

    course_content:
    {
        type: String,
        required: true
    }

});

const Course = module.exports = mongoose.model('Course', CourseSchema);
