const ProductsRepository = require('../repositories/ProductsRepository');

class ProductController {
  async index(request, response) {
    const products = await ProductsRepository.findAll();
    response.json(products);
  }

  async show(request, response) {
    const { id } = request.params;

    const product = await ProductsRepository.findById(id);

    if (!product) {
      return response.status(400).json({ error: 'Product not found' });
    }

    response.json(product);
  }

  async store(request, response) {
    const {
      name, description, price, image_url, ingredients, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!category_id) {
      return response.status(400).json({ error: 'Category is required' });
    }

    const product = await ProductsRepository.create({
      name, description, price, image_url, ingredients, category_id,
    });

    response.json(product);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, description, price, image_url, ingredients, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const product = await ProductsRepository.update(id, {
      name, description, price, image_url, ingredients, category_id,
    });

    response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ProductsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ProductController();
