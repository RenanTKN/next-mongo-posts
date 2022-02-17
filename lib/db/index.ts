import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Adicione a variável de ambiente MONGODB_URI no .env.local");
}

// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

interface ConnectionProps {
  status: number;
}

const connection: ConnectionProps = {
  status: 0,
};

const db = async () => {
  if (connection.status === 0) {
    const db = await mongoose.connect(MONGODB_URI);
    connection.status = db.connections[0].readyState;
  }
};

export default db;
