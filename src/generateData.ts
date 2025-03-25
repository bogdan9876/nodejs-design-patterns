import fs from 'fs';

function generateCSV(filePath: string) {
    const writeStream = fs.createWriteStream(filePath);

    writeStream.write(
        'hotelChainId,hotelChainName,hotelId,hotelName,hotelAddress,hotelCity,hotelCountry,roomId,roomNumber,roomType,roomPrice,isAvailable,userId,userName,userEmail,bookingId,bookingNumber,bookingType,bookingPrice,checkInDate,checkOutDate,reviewId,rating,comment\n'
    );

    let hotelChainId = 1;
    let hotelId = 1;
    let roomId = 1;
    let userId = 1;
    let bookingId = 1;
    let reviewId = 1;

    const hotelChains = ['Hilton', 'Marriott', 'Hyatt', 'Sheraton', 'InterContinental'];

    for (const chain of hotelChains) {
        const hotelsInChain = Math.floor(Math.random() * 5) + 1;

        for (let h = 0; h < hotelsInChain; h++) {
            const hotelName = `${chain} Hotel ${hotelId}`;
            const hotelAddress = `Street ${hotelId}`;
            const hotelCity = `City_${hotelId}`;
            const hotelCountry = `Country_${hotelId}`;

            const roomsInHotel = Math.floor(Math.random() * 10) + 5;

            for (let r = 0; r < roomsInHotel; r++) {
                const roomNumber = 100 + roomId;
                const roomType = roomId % 2 === 0 ? 'Single' : 'Double';
                const roomPrice = (50 + (roomId % 50)).toFixed(2);
                const isAvailable = Math.random() > 0.2;

                const usersCount = Math.floor(Math.random() * 3) + 1;
                for (let u = 0; u < usersCount; u++) {
                    const userName = `User_${userId}`;
                    const userEmail = `user${userId}@gmail.com`;

                    const bookingNumber = bookingId;
                    const bookingType = roomType;
                    const bookingPrice = roomPrice;
                    const checkInDate = `2025-03-${(bookingId % 28) + 1}`;
                    const checkOutDate = `2025-03-${(bookingId % 28) + 3}`;

                    const rating = Math.floor(Math.random() * 5) + 1;
                    const comment = rating > 3 ? 'Great stay!' : 'Good experience';

                    const dataRow = [
                        hotelChainId, chain, hotelId, hotelName, hotelAddress, hotelCity, hotelCountry,
                        roomId, roomNumber, roomType, roomPrice, isAvailable,
                        userId, userName, userEmail,
                        bookingId, bookingNumber, bookingType, bookingPrice, checkInDate, checkOutDate,
                        reviewId, rating, comment
                    ].join(',');

                    writeStream.write(dataRow + '\n');

                    userId++;
                    bookingId++;
                    reviewId++;
                }

                roomId++;
            }

            hotelId++;
        }

        hotelChainId++;
    }

    writeStream.end();
}

generateCSV('data.csv');
