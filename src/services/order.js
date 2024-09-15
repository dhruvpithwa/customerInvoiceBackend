
const Dao = require("../dao");

module.exports= {
    createOrder: async (payload) => {
        try {
            const res = await Dao.order.createOrder(payload);
            return res;
        } catch (error) {
            throw error;
        }
    },
    listOrders: async (payload) => {
        try {
            const res = await Dao.order.listOrders(payload);
            return res;
        } catch (error) {
            throw error;
        }
    },
    getOrder: async (payload) => {
        try {
            const res = await Dao.order.getOrder(payload);
            return res;
        } catch (error) {
            throw error;
        }
    }
}