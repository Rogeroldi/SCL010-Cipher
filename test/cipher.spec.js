describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    //test de mayusculas
    it('debería retornar "BCDEFGHIJKLMNOPQRSTUVWXYZA" para "abcdefghijklmnopqrstuvwxyz" con offset 1', () => {
      assert.equal(cipher.encode(1, "hola ro"), "IPMB SP");
    });


  //describe('cipher.decode', () => {

   // it('debería ser una función', () => {
    //  assert.equal(typeof cipher.decode, 'function');
   // });


   // it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
  //});

});
})
