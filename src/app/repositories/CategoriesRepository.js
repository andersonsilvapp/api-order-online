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

  async findById(id) {
    const [row] = await db.query(`
      SELECT *
      FROM categories
      WHERE id=$1
    `, [id]);

    return row;
  }

  async create({ name }) {}

  async update(id, { name }) {}

  async delete(id) {}
}

module.exports = new CategoriesRepository();
