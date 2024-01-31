type Dates = {
  startDate: string
  endDate: string
}
import {
  example1Customer,
  example2Customer,
  example3Customer,
  example4Customer,
} from "./data/customer"
let result: { startDate?: string; endDate?: string }[] = []
const extractDates = (customer: any) => {
  if (customer.ListOfPeriods === "NULL") {
    return result
  }
  if (!customer.hasOwnProperty("ListOfPeriods")) {
    return result
  }
  const data = customer.ListOfPeriods.trimStart().split(/[-|]+/)
  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      result.push({ startDate: data[i], endDate: data[i + 1] })
    }
  }
}

//extractDates(example2Customer)
//extractDates(example1Customer)
//extractDates(example3Customer)
//extractDates(example4Customer)
//console.log(result)

export default extractDates
