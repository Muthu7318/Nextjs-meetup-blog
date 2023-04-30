import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://nmuthukumaranm:bb5Byn1z7i7kxIC8@cluster0.wu0uqgm.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne({
      title,
      image,
      address,
      description,
    });
    console.log(result);

    client.close();

    res.status(201).json({
      status: "success",
      message: "meetup inserted successfully",
    });
  }
}

export default handler;
