const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    response.json(categories);
  }

  async show(request, response) {}

  async store(request, response) {}

  async update(request, response) {}

  async delete(request, response) {}
}

module.exports = new CategoryController();
