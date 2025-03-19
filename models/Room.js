module.exports = (sequelize, DataType) => {

    const Room = sequelize.define("Room", {
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

    Room.associate = (models) => {
        Room.hasMany(models.Booking);
        Room.belongsTo(models.Hotel)
    };

    return Room
}