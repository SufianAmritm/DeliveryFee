export const ContainerDTO = async (ContainerSpec) => ({
  container: ContainerSpec.container,
  product: ContainerSpec.product,
  quantity: ContainerSpec.quantity,
  price: ContainerSpec.price,
});
