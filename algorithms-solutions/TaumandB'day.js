function taumBday(b, w, bc, wc, z) {
  // Write your code here
  let bcost = wc + z < bc ? BigInt(wc + z) : BigInt(bc);
  let wcost = bc + z < wc ? BigInt(bc + z) : BigInt(wc);
  return BigInt(BigInt(b) * bcost) + BigInt(BigInt(w) * wcost);
}
