
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
        subjects_name:  {
            type: String,
            required: true
     }
})

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true,
    subjects: [subjectSchema]
    }     
});


module.exports= mongoose.model('Student', studentSchema)
