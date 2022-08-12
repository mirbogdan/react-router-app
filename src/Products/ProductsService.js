export const listProducts = async () => {
  const response = await fetch(`/api/products`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};

export const retrieveProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("something went wrong");
};
