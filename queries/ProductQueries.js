class ProductQueries {
  static getAllProductQuery() {
    return "select *,COUNT(*) OVER() AS total_count from products";
  }

  static getProductByCategoryQuery({
    keyword,
    category,
    sort_by,
    moq,
    country,
    usa_stock,
    min_price,
    max_price,
    supplier,
    certificates,
  }) {
    let query = `
    SELECT
      COUNT(*) OVER() AS total_count,
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
      LEFT JOIN categories pc ON c.parent_category = pc.id
    WHERE
      1 = 1
  `;

  // put c.parent_category_id on line 32 on office laptop.

    const values = [];

    if (keyword) {
      query += ` AND p.product_name ILIKE $${values.length + 1}`;
      values.push(`%${keyword}%`);
    }

    if (category) {
      query += ` AND c.category_slug = $${values.length + 1}`;
      values.push(category);
    }
    
    if (moq) {
      query += ` AND p.moq < $${values.length + 1}`;
      values.push(moq);
    }
    
    if (country) {
      const countryList = country.split(",");
      const placeholders = countryList.map((_, index) => `$${values.length + index + 1}`);
      query += ` AND p.country = ANY(ARRAY[${placeholders}])`;
      values.push(...countryList);
    }

    if (min_price && max_price) {
      query += ` AND p.price BETWEEN $${values.length+1} AND $${values.length+2}`;
      values.push(min_price, max_price);
    } else if (min_price) {
      query += ` AND p.price >= $${values.length + 1}`;
      values.push(min_price);
    } else if (max_price) {
      query += ` AND p.price <= $${values.length + 1}`;
      values.push(max_price);
    }

    if (supplier) {
      const suppliers = supplier.split(",");
      query += ` AND p.supplier && $${values.length + 1}`;
      values.push(suppliers);
    }

    if (certificates) {
      const certificate = certificates.split(",");
      query += ` AND p.certificates && $${values.length + 1}`;
      values.push(certificate);
    }

    if (usa_stock) {
      query += ` AND p.usa_stock = $${values.length + 1}`;
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
    } else if (sort_by === "default") {
      query += " ";
    }

    return { query, values };
  }
}

module.exports = ProductQueries;
