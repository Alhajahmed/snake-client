const { KEYMAPPINGS } = require("./constants");

let connection;

const handleUserInput = (data) => {
  if (data === "\u0003") {
    console.log("GameOver");
    process.exit();
  }

  if (KEYMAPPINGS[data]) {
    connection.write(KEYMAPPINGS[data]);
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => {
    handleUserInput(data);
  });

  return stdin;
};

module.exports = { setupInput };
