
module.exports = (sequelize, Sequelize) => {
    const orderItems = sequelize.define(
        'orderItems',
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                unique: true,
                defaultValue: Sequelize.UUIDV4
            },
            quantity: {
                type: Sequelize.DOUBLE
            },
            price: {
                type: Sequelize.DOUBLE
            }
        }
    );

    orderItems.associate = (models) => {
        models.orderItems.belongsTo(models.order);
        models.orderItems.belongsTo(models.product);
    };

    return orderItems;
};
