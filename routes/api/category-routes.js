const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // ********  THIS IS CODE WAS PUT IN BY ME  **********
  const categoryData = await Category.findAll({
    include: [{ model: Product}]
  });

  return res.json(categoryData);
});
// --------------------------------------------------------------------------
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // ********  THIS IS CODE WAS PUT IN BY ME  **********
const categoryData = await Category.findByPk(req.params.id, {
  include: [{ model: Product}]
});

return res.json(categoryData);
});
// --------------------------------------------------------------------------
router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
});
// --------------------------------------------------------------------------
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
    // ********  THIS IS CODE WAS PUT IN BY ME  **********
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});
// --------------------------------------------------------------------------
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  return res.json(categoryData);
});

module.exports = router;
