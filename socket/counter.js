let countValue = 0;

export default io => {
  io.on("connection", socket => {
    socket.emit("UPDATE_COUNTER", countValue);

    socket.on("INCREASE_COUNTER", () => {
      countValue++;
      socket.emit("UPDATE_COUNTER", countValue);
      socket.broadcast.emit("UPDATE_COUNTER", countValue);
    });

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
    });
  });
};
