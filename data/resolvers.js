import { Widgets } from './dbConnectors';

// Define the responses from the GraphQL server.
// This is a resolver/functions that resolves the request and sends response back to the client.

const resolvers = {
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch (error) {
            throw new Error(error);
        }
    },
    createProduct: async ({ input }) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });
        newWidget.id = newWidget._id;

        try {
            await newWidget.save();
            return newWidget;
        } catch (error) {
            throw new error(error);
        }
    }
}

export default resolvers;