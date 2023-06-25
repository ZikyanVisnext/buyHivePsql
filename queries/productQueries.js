class ProductQueries {
  static getAllProductQuery = "select * from products";

  static getProductByCategoryQuery({ keyword, category, sort_by }) {
    let query = `
    SELECT
      p.id,
      p.product_name,
      p.price,
      p.moq,
      p.rating,
      c.category_name AS product_category,
      pc.category_name AS parent_category
    FROM
      products p
      INNER JOIN categories c ON p.category_id = c.id
      LEFT JOIN categories pc ON c.parent_category = pc.id
    WHERE
      1 = 1
  `;

    const values = [];

    if (keyword) {
      query += " AND p.product_name ILIKE $1";
      values.push(`%${keyword}%`);
    }

    if (category) {
      query += " AND c.category_slug = $1";
      values.push(category);
    }

    if (sort_by === "low_to_high") {
      query += " ORDER BY p.price ASC";
    } else if (sort_by === "high_to_low") {
      query += " ORDER BY p.price DESC";
    } else if (sort_by === "moq") {
      query += " ORDER BY p.moq ASC";
    } else if (sort_by === "rating") {
      query += " ORDER BY p.rating DESC";
    } else if (sort_by === 'latest') {
      query += ' ORDER BY p.created_at DESC';
    }

    return { query, values };
  }
}

module.exports = ProductQueries;
