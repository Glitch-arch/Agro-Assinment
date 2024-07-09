export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
