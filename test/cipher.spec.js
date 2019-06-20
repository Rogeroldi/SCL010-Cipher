describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "GHIJKLMNOPQRSTUVWXYZABCDEF" para "abcdefghijklmnopqrstuvwxyz" con offset 32', () => {
      assert.equal(window.cipher.encode(32, "hola marcia"), "NURGSGXIOG");
    });


  //describe('cipher.decode', () => {

   // it('debería ser una función', () => {
    //  assert.equal(typeof cipher.decode, 'function');
   // });


   // it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
  //});

});
})
