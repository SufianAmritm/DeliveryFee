const ContainerDTO = async (ContainerSpec) => ({
  container: ContainerSpec.container,

  quantity: ContainerSpec.quantity,
  price: ContainerSpec.price,
  product: {
    productName: ContainerSpec.product.name,
    productCompany: ContainerSpec.product.company,
    productExpDate: ContainerSpec.product.expDate,
    productProdDate: ContainerSpec.product.prodDate,
  },
});
module.exports = ContainerDTO;
