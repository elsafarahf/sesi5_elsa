function printRightTriangle(rows) {
  console.log("=== Right Triangle with Loop Statement ===");
  for (let i = 1; i <= rows; i++) {
    console.log("* ".repeat(i));
  }
}

printRightTriangle(5);
