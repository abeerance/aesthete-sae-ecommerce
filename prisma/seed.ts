import { Categories, PrismaClient, Products } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const featured = await createCategory('Featured');
  const shorts = await createCategory('Shorts');
  const pants = await createCategory('Pants');
  const tops = await createCategory('Tops');
  const accessories = await createCategory('Accessories');

  const trending = await createCategory('Trending', featured.id);
  const newArrivals = await createCategory('New Arrivals', featured.id);

  const casualShorts = await createCategory('Casual Shorts', shorts.id);
  const loungeShorts = await createCategory('Lounge Shorts', shorts.id);

  const shopByCategory = await createCategory('Shop by category', pants.id);

  const shortSleeve = await createCategory('Short Sleeve', tops.id);
  const longSleeve = await createCategory('Long Sleeve', tops.id);
  const outerLayers = await createCategory('Outer Layers', tops.id);

  // Add more categories for the accessories section as needed.
  const accessoryCategory1 = await createCategory(
    'Accessory Category 1',
    accessories.id,
  );

  // Create sample products for each category
  await createProduct('Trending Product 1', trending.id);
  await createProduct('New Arrival Product 1', newArrivals.id);

  await createProduct('Casual Short 1', casualShorts.id);
  await createProduct('Lounge Short 1', loungeShorts.id);

  await createProduct('Shop by Category Product 1', shopByCategory.id);

  await createProduct('Short Sleeve Product 1', shortSleeve.id);
  await createProduct('Long Sleeve Product 1', longSleeve.id);
  await createProduct('Outer Layer Product 1', outerLayers.id);

  await createProduct('Accessory Category 1 Product 1', accessoryCategory1.id);
}

async function createCategory(
  name: string,
  parentId?: string,
): Promise<Categories> {
  return await prisma.categories.create({
    data: {
      name,
      parentId,
    },
  });
}

async function createProduct(
  name: string,
  categoryId: string,
): Promise<Products> {
  return await prisma.products.create({
    data: {
      name,
      categoryId,
      description: { text: 'Sample description' },
      sustainability: { level: 'High' },
      shippgingAndReturns: { shipping: 'Free', returns: '30 days' },
      price: 49.99,
      imageUrl: 'https://example.com/image.jpg',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
