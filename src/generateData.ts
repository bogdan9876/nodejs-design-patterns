import fs from 'fs';

function generateCSV(filePath: string) {
    const writeStream = fs.createWriteStream(filePath);

    writeStream.write(
        'userId,name,email,roomId,number,type,price,checkInDate,checkOutDate,hotelId,hotelName,rating,comment\n'
    );

    const users = [];
    const hotels = [];
    const rooms = [];

    for (let i = 0; i < 1000; i++) {
        const userId = i + 1;
        users.push(userId);
        const userName = `User_${userId}`;
        const userEmail = `user${userId}@gmail.com`;

        const hotelId = Math.floor(Math.random() * 5) + 1;
        hotels.push(hotelId);
        const hotelName = `Hotel_${hotelId}`;

        const roomId = (i % 10) + 1;
        rooms.push(roomId);
        const roomNumber = 101 + (i % 20);
        const roomType = i % 2 === 0 ? 'Single' : 'Double';
        const roomPrice = (50 + (i % 50)).toFixed(2);

        const checkInDate = `2025-03-${(i % 30) + 1}`;
        const checkOutDate = `2025-03-${(i % 30) + 10}`;

        const rating = Math.floor(Math.random() * 5) + 1;
        const comment = i % 2 === 0 ? 'Great stay!' : 'Good experience';

        const dataRow = [
            userId,
            userName,
            userEmail,
            roomId,
            roomNumber,
            roomType,
            roomPrice,
            checkInDate,
            checkOutDate,
            hotelId,
            hotelName,
            rating,
            comment
        ].join(',');

        writeStream.write(dataRow + '\n');
    }

    writeStream.end();
}

generateCSV('data.csv');
