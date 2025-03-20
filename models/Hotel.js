module.exports = (sequelize, DataType) => {
    const Hotel = sequelize.define("Hotel", {
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    Hotel.associate = (models) => {
        Hotel.hasOne(models.Location, {
            as: "Location",
            foreignKey: "HotelId",
            onDelete: "CASCADE",
        });

        Hotel.hasMany(models.Room, {
            as: "Rooms",
            onDelete: "CASCADE",
        });

        Hotel.hasMany(models.Review, {
            as: "Reviews",
            onDelete: "CASCADE",
        });

        Hotel.belongsTo(models.HotelChain, {
            as: "HotelChain",
        });
    };

    return Hotel;
};
