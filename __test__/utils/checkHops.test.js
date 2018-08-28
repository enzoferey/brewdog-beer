import checkHops from "utils/checkHops";

const checkValue = (hops, startDone, middleDone) => {
  const result = checkHops(hops);
  expect(result.startDone).toBe(startDone);
  expect(result.middleDone).toBe(middleDone);
};

describe('when all hops with "start" and "middle" labels are done', () => {
  test("it should return { startDone: true, middleDone: true }", () => {
    checkValue(mocks.hopsStartMiddle, true, true);
  });
});

describe('when all hops with "start" label are done but "middle" label ones are not', () => {
  test("it should return { startDone: true, middleDone: false }", () => {
    checkValue(mocks.hopsStart, true, false);
  });
});

describe('when neither all hops with "start" and "middle" labels are not done', () => {
  test("it should return { startDone: false, middleDone: false }", () => {
    checkValue(mocks.hops, false, false);
  });
});

describe('when some hops with "start" labels are done', () => {
  test("it should return { startDone: false }", () => {
    checkValue(mocks.hopsNotAllStart, false, false);
  });
});

describe('when some hops with "start" labels are done', () => {
  test("it should return { middleDone: false }", () => {
    checkValue(mocks.hopsStartNotAllMiddle, true, false);
  });
});
