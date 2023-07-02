class FilterQueries {
  static getAllFiltersQuery({ keyword, category }) {
    if (category) {
      let query = `
          SELECT
            array_agg(DISTINCT p.country) AS supplier_locations,
            array_agg(DISTINCT cert) AS product_certification,
            array_agg(DISTINCT sup) AS supplier_certification,
            c.category_name AS product_category,
            pc.category_name AS parent_category
          FROM
            products p
            INNER JOIN categories c ON p.category_id = c.id
            LEFT JOIN categories pc ON c.parent_category = pc.id
            CROSS JOIN unnest(p.certificates) AS cert
            CROSS JOIN unnest(p.supplier) AS sup
          WHERE
            1 = 1
        `;

      const values = [];

      if (category) {
        query += ` AND c.category_slug = $${values.length + 1}`;
        values.push(category);
      }

      query += ` GROUP BY c.category_name, pc.category_name`;

      return { query, values };
    } else {
      let query = "select * from filters";
      const values = [];
      return { query, values };
    }
  }

  static getPriceQuery({ category, keyword }) {
    if (category) {
      let query = `
      SELECT
        MIN(p.price) AS min_price,
        MAX(p.price) AS max_price
      FROM
        products p
        JOIN categories c ON p.category_id = c.id
      WHERE
        c.category_slug ILIKE $1;
    `;

      const values = [category];
      return { query, values };
    } else {
      let query = `
      SELECT
        MIN(p.price) AS min_price,
        MAX(p.price) AS max_price
      FROM
        products p
    `;

      const values = [];
      return { query, values };
    }
  }
}

module.exports = FilterQueries;
