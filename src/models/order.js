
module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define(
        'orders',
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
                unique: true,
                defaultValue: Sequelize.UUIDV4
            },
            orderNumber: {
                type: Sequelize.STRING,
                unique: true
            },
            orderDate: {
                type: Sequelize.STRING,
            },
            customerName: {
                type: Sequelize.STRING
            },
            customerMobile: {
                type: Sequelize.STRING
            },
            subTotal: {
                type: Sequelize.DOUBLE
            },
            total: {
                type: Sequelize.DOUBLE
            },
            tax: {
                type: Sequelize.DOUBLE
            },
            taxPercent: {
                type: Sequelize.DOUBLE
            }
        }
    );

    order.associate = (models) => {
        models.order.hasMany(models.orderItems);
    };

    return order;
};
