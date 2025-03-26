import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import sequelize from '../config/sequelize';
import { HotelChain } from '../models/HotelChain';
import { Hotel } from '../models/Hotel';
import { Location } from '../models/Location';
import { Room } from '../models/Room';
import { User } from '../models/User';
import { Booking } from '../models/Booking';
import { Review } from '../models/Review';

class DataRepository {

    private filePath = path.join(__dirname, "..", "..", "data.csv");

    async get(): Promise<void> {
        try {
            if (!fs.existsSync(this.filePath)) {
                throw new Error(`File data.csv doesn't exist, please, create it`);
            }
            await importCSV();
        } catch (error) {
            throw error;
        }
    }
}

async function importCSV(): Promise<void> {
    return new Promise((resolve, reject) => {
        const results: any[] = [];

        fs.createReadStream('data.csv')
            .pipe(csvParser())
            .on('data', (row) => results.push(row))
            .on('end', async () => {                
                const transaction = await (await sequelize).transaction();
                try {
                    for (const row of results) {
                        let hotelChain = await HotelChain.findOne({ where: { id: row.hotelChainId }, transaction });
                        if (!hotelChain) {
                            hotelChain = await HotelChain.create(
                                { id: row.hotelChainId, name: row.hotelChainName },
                                { transaction }
                            );
                        }

                        let hotel = await Hotel.findOne({ where: { id: row.hotelId }, transaction });
                        if (!hotel) {
                            hotel = await Hotel.create(
                                { id: row.hotelId, name: row.hotelName, hotelChainId: hotelChain.id },
                                { transaction }
                            );

                            await Location.create(
                                { address: row.hotelAddress, city: row.hotelCity, country: row.hotelCountry, hotelId: hotel.id },
                                { transaction }
                            );
                        }

                        let room = await Room.findOne({ where: { id: row.roomId }, transaction });
                        if (!room) {
                            room = await Room.create(
                                {
                                    id: row.roomId,
                                    number: row.roomNumber,
                                    type: row.roomType,
                                    price: row.roomPrice,
                                    isAvailable: row.isAvailable === 'true',
                                    hotelId: hotel.id,
                                },
                                { transaction }
                            );
                        }

                        let user = await User.findOne({ where: { email: row.userEmail }, transaction });
                        if (!user) {
                            user = await User.create(
                                { id: row.userId, name: row.userName, email: row.userEmail },
                                { transaction }
                            );
                        }

                        const booking = await Booking.create(
                            {
                                id: row.bookingId,
                                number: row.bookingNumber,
                                type: row.bookingType,
                                price: row.bookingPrice,
                                checkInDate: row.checkInDate,
                                checkOutDate: row.checkOutDate,
                                roomId: room.id,
                                userId: user.id,
                            },
                            { transaction }
                        );

                        if (row.reviewId) {
                            await Review.create(
                                {
                                    id: row.reviewId,
                                    rating: row.rating,
                                    comment: row.comment,
                                    bookingId: booking.id,
                                    hotelId: hotel.id,
                                    userId: user.id,
                                },
                                { transaction }
                            );
                        }
                    }

                    await transaction.commit();
                    resolve();
                } catch (error) {
                    await transaction.rollback();
                    reject(error);
                }
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

export default DataRepository;