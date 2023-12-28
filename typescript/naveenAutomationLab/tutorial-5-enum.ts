//Enum: Enumeration: data type: hold the set of constants
//numeric
//string
//heterogenous

//numeric Enum
enum Browser {
  FIREFOX,
  SAFARI,
  EDGE,
  CHROME = getBrowser('chrome'),
}

function getBrowser(browserName: string): number {
  return browserName === 'chrome' ? 115 : -1
}

console.log(Browser)

// always be +1 incremental from previous value. Default value of starting variable is 0
console.log(Browser.CHROME)
console.log(Browser.EDGE)

//String: Enum
enum Environment {
  DEV = 'dev',
  QA = 'qa',
  STAGE = 'stage',
  PROD = 'prod',
}

console.log(Environment.PROD)

//Heterogenous: Enum
enum Status {
  ACTIVE = 'active',
  DEACTIVE = 1,
  NEUTRAL,
}

console.log(Status)

enum Machine {
  APPLE,
  WINDOWS,
  LINUX,
}

console.log(Machine[2])
