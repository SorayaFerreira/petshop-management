class BaseController {
    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const items = await this.service.getAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getById = async (req, res) => {
        const { id } = req.params;
        try {
            const item = await this.service.getById(id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    create = async (req, res) => {
        try {
            const data = req.body;
            const newItem = await this.service.create(data);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    update = async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedItem = await this.service.update(id, data);
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    delete = async (req, res) => {
        const { id } = req.params;
        try {
            await this.service.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}

module.exports = BaseController;
