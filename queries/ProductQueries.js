class ProductQueries {
  static getAllProductQuery = "select * from products";

  static getProductByCategoryQuery({
    keyword,
    category,
    sort_by,
    moq,
    country,
    usa_stock,
    min_price,
    max_price
  }) {
    let query = `
    SELECT
      p.id,
      p.product_name,
      p.price,
      p.moq,
      p.rating,
      p.country,
      p.certificates,
      p.supplier,
      p.usa_stock,
      c.category_name AS product_category,
      pc.category_name AS parent_category
    FROM
      products p
      INNER JOIN categories c ON p.category_id = c.id
      LEFT JOIN categories pc ON c.parent_category_id = pc.id
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

    if (moq) {
      query += " AND p.moq < $1";
      values.push(moq);
    }

    if (country) {
      query += " AND p.country = $1";
      values.push(country);
    }

    if (min_price || max_price) {
      query += " (price >= $1 OR $1 IS NULL) AND (price <= $2 OR $2 IS NULL)";
      values.push(min_price, max_price);
    }

    // if (max_price) {
    //   query += " AND p.price <= $1";
    //   values.push(max_price);
    // }

    if (usa_stock) {
      query += " AND p.usa_stock = $1";
      values.push(usa_stock);
    }

    if (sort_by === "low_to_high") {
      query += " ORDER BY p.price ASC";
    } else if (sort_by === "high_to_low") {
      query += " ORDER BY p.price DESC";
    } else if (sort_by === "moq") {
      query += " ORDER BY p.moq ASC";
    } else if (sort_by === "rating") {
      query += " ORDER BY p.rating DESC";
    } else if (sort_by === "latest") {
      query += " ORDER BY p.created_at DESC";
    }

    // if(page){
    //   query +=" LIMIT {itemsPerPage} OFFSET {(page - 1) * itemsPerPage}"
    // }

    return { query, values };
  }
}

module.exports = ProductQueries;
