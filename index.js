function takeANumber(katzDeliLine, currentName) {
  katzDeliLine.push(currentName)
  return `Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`
}

