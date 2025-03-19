module.exports = (sequelize, DataType) => {

    const Location = sequelize.define("Location", {
        address: {
            type: DataType.STRING,
            allowNull: false,
        },
        city: {
            type: DataType.STRING,
            allowNull: false,
        },
        country: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    Location.associate = (models) => {
        Location.belongsTo(models.Hotel, {
            onDelete: "cascade"
        })
    }

    return Location
}