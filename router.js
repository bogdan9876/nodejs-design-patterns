const { Router } = require("express");
const UserRouter = require("./routes/UserRouter.js");
const BookingRouter = require("./routes/BookingRouter.js");
const HotelChainRouter = require("./routes/HotelChainRouter.js");
const HotelRouter = require("./routes/HotelRouter.js");
const LocationRouter = require("./routes/LocationRouter.js");
const ReviewRouter = require("./routes/ReviewRouter.js");
const RoomRouter = require("./routes/RoomRouter.js");

const router = new Router()

router.use('/users', UserRouter)
router.use('/booking', BookingRouter)
router.use('/hotelchain', HotelChainRouter)
router.use('/hotel', HotelRouter)
router.use('/location', LocationRouter)
router.use('/review', ReviewRouter)
router.use('/room', RoomRouter)

module.exports = router;