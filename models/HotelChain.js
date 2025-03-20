module.exports = (sequelize, DataType) => {

    const HotelChain = sequelize.define("HotelChain", {
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    HotelChain.associate = (models) => {
        HotelChain.hasMany(models.Hotel, {
            as: "Hotels",
            onDelete: "CASCADE",
        });
    };

    return HotelChain;
};
