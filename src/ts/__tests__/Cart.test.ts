import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('correct movie', ()=>{
  const avengers = new Movie(1005,'The Avengers', 499,2012,
    'USA', 'Avengers Assemble!',['Fantasy', 'Adventures'], 137);
  expect(avengers).toEqual({
    "id": 1005,
    "name": "The Avengers",
    "price": 499,
    "year": 2012,
    "country": "USA",
    "slogan": "Avengers Assemble!",
    "genres": [
      "Fantasy",
      "Adventures"
    ],
    "timeInMinutes": 137
  })
})
