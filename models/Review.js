module.exports = (sequelize, DataType) => {

    const Review = sequelize.define("Review", {
        rating: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataType.STRING,
            allowNull: true,
        },
        date: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW,
        },
    });

    Review.associate = (models) => {
        Review.belongsTo(models.Booking, {
            as: "Booking",
        });
        Review.belongsTo(models.Hotel, {
            as: "Hotel",
        });
        Review.belongsTo(models.User, {
            as: "User",
        });
    };

    return Review
}