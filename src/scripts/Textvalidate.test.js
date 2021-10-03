const validate = require('./TextValidate')

test("returns false for empty input", () => {
  expect(validate("")).toBe(false)
})

test("returns false for input without numbers", () => {
  expect(validate("aksjgkaasdf")).toBe(false)
})

test("returns false for input without letters", () => {
  expect(validate("1251234563246")).toBe(false)
})

test("returns true for input with numbers, letters, >= 8 characters", () => {
  expect(validate("12512ajskdhgk")).toBe(true)
})

test("returns false for input with numbers, letters, < 8 characters", () => {
  expect(validate("a1")).toBe(false)
})

test("returns true for input with numbers, uppercase letters, and >= 8 characters", () => {
  expect(validate("12512ASDFA")).toBe(true)
})

test("returns true for input with numbers, uppercase and lowercase letters, and >= 8 characters", () => {
  expect(validate("12512ASDasdfasd")).toBe(true)
})