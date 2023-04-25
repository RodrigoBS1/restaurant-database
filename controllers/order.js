const Order = require("../models").Order;
const Party = require("../models").Party;
const Dish = require("../models").Dish;

module.exports = {
  list(req, res) {
    // show all orders
    return Order.findAll({
      // include: [
      //   {
      //     model: Party,
      //     as: "parties",
      //   },
      //   {
      //     model: Dish,
      //     as: "dishes",
      //   },
      // ],
      // order: [
      //   ["createdAt", "DESC"],
      //   [{ model: Party, as: "parties" }, "createdAt", "DESC"],
      // ],
    })
      .then((orders) => res.status(200).send(orders))
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    // add a new order
    return Order.create({
      partyId: req.body.partyId,
      dishId: req.body.dishId,
    })
      .then((order) => res.status(201).send(order))
      .catch((error) => res.status(400).send(error));
  },

  getById(req, res) {
    // get an order by ID
    return Order.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          as: "orders",
        },
      ],
    })
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message:
              "Order not found. Please check the receipts and try again.",
          });
        }
        return res.status(200).send(order);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  // handle requests to update a classroom by its id
  update(req, res) {
    return Order.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          as: "orders",
        },
      ],
    })
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message: "Order not found",
          });
        }
        return order
          .update({
            partyId: req.body.partyId || order.partyId,
            dishId: req.body.dishId || order.dishId,
          })
          .then(() => res.status(200).send(order))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Order.findByPk(req.params.id)
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message: "Order not found",
          });
        }
        return order
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
