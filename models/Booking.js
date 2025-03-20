module.exports = (sequelize, DataType) => {
    
    const Booking = sequelize.define("Booking", {
        number: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataType.STRING,
            allowNull: false,
        },
        price: {
            type: DataType.FLOAT,
            allowNull: false,
        },
        checkInDate: {
            type: DataType.DATE,
            allowNull: false,
        },
        checkOutDate: {
            type: DataType.DATE,
            allowNull: false,
        },
    });

    Booking.associate = (models) => {
        Booking.belongsTo(models.Room, {
            as: "Room",
        });
        Booking.belongsTo(models.User, {
            as: "User",
        });
        Booking.hasOne(models.Review, {
            as: "Review",
        });
    };

    return Booking;
};
