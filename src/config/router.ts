import { Router } from 'express';
import UserRouter from '../routes/UserRouter';
import BookingRouter from '../routes/BookingRouter';
import HotelChainRouter from '../routes/HotelChainRouter';
import HotelRouter from '../routes/HotelRouter';
import LocationRouter from '../routes/LocationRouter';
import ReviewRouter from '../routes/ReviewRouter';
import RoomRouter from '../routes/RoomRouter';

const router = Router();

router.use('/hotelchain', HotelChainRouter);
router.use('/users', UserRouter);
router.use('/booking', BookingRouter);
router.use('/hotel', HotelRouter);
router.use('/location', LocationRouter);
router.use('/review', ReviewRouter);
router.use('/room', RoomRouter);

export default router;
