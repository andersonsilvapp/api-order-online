const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT *
      FROM categories
      ORDER BY name
    `);
    return rows;
  }

  async findById(id) {}

  async create({ name }) {}

  async update(id, { name }) {}

  async delete(id) {}
}

module.exports = new CategoriesRepository();
