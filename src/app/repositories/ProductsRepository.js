const db = require('../../database');

class ProductsRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT *
      FROM products
      ORDER BY id
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT *
      FROM products
      WHERE id=$1
    `, [id]);

    return row;
  }

  async create({
    name, description, price, image_url, ingredients, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO products( name, description, price, image_url, ingredients, category_id)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [name, description, price, image_url, ingredients, category_id]);

    return row;
  }

  async update(id, {
    name, description, price, image_url, ingredients, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET name=$1, description=$2, price=$3, image_url=$4, ingredients=$5, category_id=$6
      WHERE id=$7
      RETURNING *
    `, [name, description, price, image_url, ingredients, category_id, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM products
      WHERE id=$1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new ProductsRepository();
