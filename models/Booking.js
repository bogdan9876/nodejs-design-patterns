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
        isAvailable: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
    });

    return Booking
}