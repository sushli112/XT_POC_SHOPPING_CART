import { getItemsForCart } from "../js/ShoppingCart/ShoppingCartService";
const assert = require("assert");

it("Succesfully got the response from json server", () => {
  assert.equal(getItemsForCart(), 4);
});
