const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
// ********  THIS CODE WAS PUT IN BY ME  **********
  const tagData = await Tag.findAll({
    include: [{ model: Product, through: ProductTag, as: 'tags_for_products'}]
  });

  return res.json(tagData);
});

// --------------------------------------------------------------------------

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // ********  THIS IS CODE WAS PUT IN BY ME  **********
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tags_for_products'}]
    });
    return res.json(tagData);
  } catch (err) {
    res.status(500).json('Error, something went wrong:', err);
    
  }
});

// --------------------------------------------------------------------------

router.post('/', async (req, res) => {
  // create a new tag
  // ********  THIS CODE WAS PUT IN BY ME  **********
  const tagData = await Tag.create(req.body);

  return res.json(tagData);
});
// --------------------------------------------------------------------------

router.put('/:id', async (req, res) => {
  // ********  THIS CODE WAS PUT IN BY ME  **********
  // ***********     Not sure if I'm doing the "ID's" correctly. ***** 
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(tagData);
});
// --------------------------------------------------------------------------

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // ********  THIS CODE WAS PUT IN BY ME  **********
  // ***********     Not sure if I'm doing the "ID's" correctly. ***** 
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(tagData);
});

module.exports = router;
