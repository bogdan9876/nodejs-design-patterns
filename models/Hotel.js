module.exports = (sequelize, DataType) => {

    const Hotel = sequelize.define("Hotel", {
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    Hotel.associate = (models) => {
        Hotel.hasOne(models.Location, {
            onDelete: "cascade"
        })

        Hotel.hasMany(models.Room, {
            onDelete: "cascade"
        })

        Hotel.hasMany(models.Review, {
            onDelete: "cascade",
        });

        Hotel.belongsTo(models.HotelChain);
    }

    return Hotel
}