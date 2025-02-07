import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    // Store in db
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${mongodb_clustername}.m8cmc.mongodb.net/${mongodb_database}?retryWrites=true&w=majority&appName=${mongodb_clustername}`

    try {
      console.log("Connecting to database...");
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      console.error("Database connection error: ", error);
      res.status(500).json({ message: 'Could not connect to the database' });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
      console.log("Message stored:", result);
    } catch (error) {
      console.error("Error storing message: ", error);
      client.close();
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res.status(200).json({ message: 'Message stored successfully', message: newMessage });
  }
}

export default handler;
