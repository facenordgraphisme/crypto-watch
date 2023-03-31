export const isStableCoin = (coin) => {
  let stables = ["usdt", "usdc", "busd", "dai", "mim", "tusd", "usdn"];
  if (stables.includes(coin)) {
    return false;
  } else {
    return true;
  }
};
