// Reference: https://www.lambdatest.com/jest

beforeAll(() => {
  console.log(
    "This function is run once before running the tests in this file."
  );
});

beforeEach(() => {
  console.log(
    "This function is called each time before running the tests in this file."
  );
});

afterAll(() => {
  console.log(
    "This function is run only once, after all the tests in this file have been run."
  );
});

afterEach(() => {
  console.log(
    "This function is called each time after running the tests in this file."
  );
});

describe("Describe #1", () => {
  beforeAll(() => {
    console.log(
      "This function is run once before running the tests in this describe block."
    );
  });

  afterAll(() => {
    console.log(
      "This function is run only once, after all the tests in this describe block have been run."
    );
  });

  test("[Test #1-1] should be passed", () => {
    console.log("Running the test #1-1");
    expect(0).toEqual(0);
  });

  test("[Test #1-2] should be failed", () => {
    console.log("Running the test #1-2");
    expect(0).toEqual(1);
  });
});

describe("Describe #2", () => {
  beforeEach(() => {
    console.log(
      "This function is called each time before running the tests in this describe block."
    );
  });

  afterEach(() => {
    console.log(
      "This function is called each time after running the tests in this describe block."
    );
  });

  test("[Test #2-1] should be passed", () => {
    console.log("Running the test #2-1");
    expect(0).toEqual(0);
  });

  test.each([
    [1, 1, 1],
    [2, 2, 2],
  ])("[Test #2-2] should be passed and failed", (index, input, expected) => {
    console.log(`Running the test #2-2-${index}`);
    expect(input).toEqual(expected);
  });
});

// console log of this file is:
// This function is run once before running the tests in this file.
// This function is run once before running the tests in this describe block.
// This function is called each time before running the tests in this file.
// Running the test #1-1
// This function is called each time after running the tests in this file.
// This function is called each time before running the tests in this file.
// Running the test #1-2
// This function is called each time after running the tests in this file.
// This function is run only once, after all the tests in this describe block have been run.
// This function is called each time before running the tests in this file.
// This function is called each time before running the tests in this describe block.
// Running the test #2-1
// This function is called each time after running the tests in this describe block.
// This function is called each time after running the tests in this file.
// This function is called each time before running the tests in this file.
// This function is called each time before running the tests in this describe block.
// Running the test #2-2-1
// This function is called each time after running the tests in this describe block.
// This function is called each time after running the tests in this file.
// This function is called each time before running the tests in this file.
// This function is called each time before running the tests in this describe block.
// Running the test #2-2-2
// This function is called each time after running the tests in this describe block.
// This function is called each time after running the tests in this file.
// This function is run only once, after all the tests in this file have been run.
