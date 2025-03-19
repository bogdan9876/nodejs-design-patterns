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
    }

    return Hotel
}