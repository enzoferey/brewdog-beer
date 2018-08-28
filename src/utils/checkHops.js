const checkHops = hops => {
  // Get by type
  const findByTime = time => hops.filter(hop => hop.add === time);
  const startHops = findByTime("start");
  const middleHops = findByTime("middle");

  // Check them
  const hopDone = hop => hop.done;
  const startDone = startHops.every(hopDone);
  const middleDone = middleHops.every(hopDone);

  return {
    startDone,
    middleDone,
  };
};

export default checkHops;
