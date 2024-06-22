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
            throw new Error(error);
        }
    },
    getAllProducts: async () => {
        try {
            return await Widgets.find({});
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProduct: async ({ input }) => {
        try {
            // Update product as per the { input } or create a new product if { input } doesn't exists.
            const updateWidget = await Widgets.findOneAndUpdate({ _id: input.id}, input, { new: true});
            return updateWidget;
        } catch (error) {
            throw new error(error);
        }
    },
    deleteProduct: async ({ id }) => {
        try {
            await Widgets.deleteOne({ _id: id });
            return "Status of deletion: Success";
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default resolvers;