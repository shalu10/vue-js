export default mobile => {
  if (true === /^([0-9]{12})$/.test(mobile)) {
    return true;
  }
  return false;
}
