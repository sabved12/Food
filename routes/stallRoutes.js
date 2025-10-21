const express=require("express");
const {createStall, getStall, updateStall, addCommentOnStall, getStallById, addStar, addReportToStall, searchStall}=require('../controllers/stallController');

const router=express.Router();

router.route('/')
.post(createStall)
.get(getStall)

router.route('/:id')
.put(updateStall)
.get(getStallById)
.post(addStar)

router.route('/:id/report')
.post(addReportToStall)

router.route('/:id/comments')
.post(addCommentOnStall)

router.route('/search/:name')
.get(searchStall)

module.exports=router;