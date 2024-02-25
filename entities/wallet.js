module.exports = (wallet) => {

  let newWallet = { 
    id: wallet.id,
    userId: wallet.userId,
    walletAmount: wallet.walletAmount,
    isActive: wallet.isActive,
    createdAt: wallet.createdAt,
    updatedAt: wallet.updatedAt,
    addedBy: wallet.addedBy,
    updatedBy: wallet.updatedBy,
    isDeleted: wallet.isDeleted,
  };

  // remove undefined values
  if (newWallet.id){
    Object.keys(newWallet).forEach(key =>{
      if (newWallet[key] === undefined) return newWallet[key] = null;
    });
  } else {
    Object.keys(newWallet).forEach(key => newWallet[key] === undefined && delete newWallet[key]);
  }

  // To validate Entity uncomment this block

  /*
   * const validate = (newWallet) => {
   *   if (!newWallet.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * 
   * validate(newWallet) 
   */
  return Object.freeze(newWallet);
};
