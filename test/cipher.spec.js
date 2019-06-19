describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "NOPQRSTUVWXYZABCDEFGHIJKLM" para "abcdefghijklmnopqrstuvwxyz" con offset 39', () => {
      assert.equal(cipher.encode(39, "hola marcia"), "UBYNZNEPVN");
    });


  //describe('cipher.decode', () => {

   // it('debería ser una función', () => {
    //  assert.equal(typeof cipher.decode, 'function');
   // });


   // it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
  //});

});
})
