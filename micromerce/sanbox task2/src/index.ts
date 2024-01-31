type PositiveTemporal =
  | { days?: string }
  | { weeks?: string }
  | { months?: string }
  | { years?: string }
  | { hours?: string }
  | { minutes?: string }

const result = {}
const toPositiveTemporal = (
  amount: string,
  unit: string,
  nonNegative: string | boolean
) => {
  const newUnit = unit.toLowerCase()
  if (
    amount.startsWith("-") ||
    (amount === "0" && (newUnit === "m" || newUnit === "months"))
  ) {
    throw new Error("invalid amonut")
  }
  if (newUnit === "d" || newUnit === "day") {
    result.days = amount
  } else if (newUnit === "m" || newUnit === "month") {
    result.months = amount
  } else if (newUnit === "y" || newUnit === "year") {
    result.years = amount
  } else if (newUnit === "w" || newUnit === "week") {
    result.weeks = amount
  }
  return result
}

//const res = toPositiveTemporal("6", "M", true)
//const res = toPositiveTemporal("1", "M", 'nonNegative')
//const res = toPositiveTemporal("1", "y")
//const res = toPositiveTemporal("0", "M")
//const res = toPositiveTemporal("0", "year", true)
//const res = toPositiveTemporal("31", "day", true)
//const res = toPositiveTemporal("2", "m", false)
//console.log(res)

export default toPositiveTemporal
