const Potion = require('../lib/Potion.js');
test('creates a health potion object', () => {
    const myPotion = new Potion('health');
  
    expect(myPotion.name).toBe('health');
    expect(myPotion.value).toEqual(expect.any(Number));
  });
// goobe;
  test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });
  