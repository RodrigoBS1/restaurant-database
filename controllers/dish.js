const Dish = require("../models").Dish;

module.exports = {
  list(req, res) {
    // show the menu (all dishes)
    return Dish.findAll({
      include: [
        {
          model: Dish,
          as: "dishes",
        },
      ],
      order: [
        ["createdAt", "DESC"],
        [{ model: Dish, as: "dishes" }, "createdAt", "DESC"],
      ],
    })
      .then((dishes) => res.status(200).send(dishes))
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    // add a dish
    return Dish.create({
      name: req.body.name,
      description: req.body.description,
      isGlutenFree: req.body.isGlutenFree,
      isSpicy: req.body.isSpicy,
    })
      .then((dish) => res.status(201).send(dish))
      .catch((error) => res.status(400).send(error));
  },

  getById(req, res) {
    // get a dish by its id
    return Dish.findByPk(req.params.id, {
      include: [
        {
          model: Dish,
          as: "dishes",
        },
      ],
    })
      .then((dish) => {
        if (!dish) {
          return res.status(404).send({
            message: "Dish not found. Please check the menu and try again.",
          });
        }
        return res.status(200).send(dish);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  update(req, res) {
    return Dish.findByPk(req.params.id, {
      include: [
        {
          model: Dish,
          as: "dishes",
        },
      ],
    })
      .then((dish) => {
        if (!dish) {
          return res.status(404).send({
            message: "Dish not found",
          });
        }
        return dish
          .update({
            name: req.body.name || dish.name,
          })
          .then(() => res.status(200).send(dish))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Dish.findByPk(req.params.id)
      .then((dish) => {
        if (!dish) {
          return res.status(404).send({
            message: "Dish not found",
          });
        }
        return dish
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
