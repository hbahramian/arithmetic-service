const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(8);
  });

  test('2099999999999999999 + 30000000000000 is equal to 5', () => {
    expect(add(2099999999999999999, 30000000000000))
    .toBe(2100030000000000000);
  });

  test('789123479888888882344444445674847484774747 + 390888888888888888888888888888888 is equal to 5', () => {
    expect(add(789123479888888882344444445674847484774747, 
        390888888888888888888888888888888))
        .toBe(7.891234802797778e+41);
  });

