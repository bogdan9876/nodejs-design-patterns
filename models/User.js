module.exports = (sequelize, DataType) => {

    const User = sequelize.define("User", {
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
    });

    User.associate = (models) => {
        User.hasMany(models.Booking, {
            as: "Bookings",
        });

        User.hasMany(models.Review, {
            as: "Reviews",
        });
    };

    return User;
};
