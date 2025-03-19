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
        User.hasMany(models.Booking);
        User.hasMany(models.Review);
    };

    return User;
};
