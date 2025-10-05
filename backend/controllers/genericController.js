exports.createGenericController = (Model, primaryKey) => ({
    getAll: async (req, res) => {
        try {
            const items = await Model.findAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: `Error fetching items`, error: error.message });
        }
    },
    getById: async (req, res) => {
        try {
            const item = await Model.findByPk(req.params.id);
            if (item) res.status(200).json(item);
            else res.status(404).json({ message: 'Item not found' });
        } catch (error) {
            res.status(500).json({ message: `Error fetching item by ID`, error: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const newItem = await Model.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(400).json({ message: 'Error creating item', error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const [updated] = await Model.update(req.body, { where: { [primaryKey]: req.params.id } });
            if (updated) {
                const updatedItem = await Model.findByPk(req.params.id);
                res.status(200).json(updatedItem);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            res.status(400).json({ message: 'Error updating item', error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Model.destroy({ where: { [primaryKey]: req.params.id } });
            if (deleted) res.status(204).send();
            else res.status(404).json({ message: 'Item not found' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting item', error: error.message });
        }
    },
});