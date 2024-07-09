export function filterHelper(data) {
  let filteredData = {
    category: [],
    brand: [],
    priceRange: [],
  };

  if (data?.length === 0 || data?.length === undefined) {
    return filteredData;
  }

  // Can also be done using new Set()

  data.forEach((item) => {
    if (!filteredData.category.includes(item.category)) {
      filteredData.category.push(item.category);
    }

    if (!filteredData.brand.includes(item.brand)) {
      filteredData.brand.push(item.brand);
    }
  });

  const prices = data.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Calculate range size
  const rangeSize = (maxPrice - minPrice) / 3;

  //  Define price ranges

  filteredData.priceRange = [
    { min: minPrice, max: minPrice + rangeSize },
    { min: minPrice + rangeSize, max: minPrice + 2 * rangeSize },
    { min: minPrice + 2 * rangeSize, max: maxPrice },
  ];

  return filteredData;
}
