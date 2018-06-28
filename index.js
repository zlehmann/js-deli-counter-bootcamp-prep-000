function takeANumber(currentLine, currentName) {
  for (let i=0; i<currentLine.length; i++) {
    if (currentLine[i] == currentName) {
      return `Welcome ${currentline[i]}. You are number ${i + 1} in line.`
    }
  }
}

function nowServing() {
  return
}