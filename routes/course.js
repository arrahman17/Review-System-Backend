const express = require('express');
const router  = express.Router();
const  Course = require('../models/course');


//retrieving course

router.get('/courses', (req,res,next)=>
    {
    //res.send('Retrieving the courses list ');
        Course.find(function(err, course)
        {
        res.json(course);
        }
    )}
);

//GET SINGLE Course BY ID 
router.get('/:id', function(req, res, next) {
    Course.findById(req.params.id, function (err, post) 
    {
      if (err) return next(err);
      res.json(post);
    });
  });
  

//adding course
router.post('/course',(req,res, next)=>{
  let newCourse = new Course({
    course_name: req.body.course_name,
    diff_rate: req.body.diff_rate,
    course_material: req.body.course_material,
    prof_friendli: req.body.prof_friendli,
    course_content: req.body.course_content

     });

    newCourse.save((err, course)=>{
        if(err)
        {
          res.json({msg:'Failed to add course'});
       }
        else{
          res.json({msg: 'Course added successfully'});
    }
    
})
})

//delete course 
router.delete('/course/:id',(req,res, next)=>{
Course.remove({_id: req.param.id}, function(err, result){
    if(err)
    {
        res.json(err);
    }
    else{
        res.json(result);
    }


});
})
module.exports = router;