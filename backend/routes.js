const express = require('express');
const controllers = require('./controller.js');

const router = express.Router();

router.route('/questions')
    .get(controllers.getQuestions)
    .post(controllers.insertquestion)
    .delete(controllers.deleteQuestions)

router.route('/results')
    .get(controllers.getResults)
    .post(controllers.insertResults)
    .delete(controllers.deleteResults)

    module.exports = router;


