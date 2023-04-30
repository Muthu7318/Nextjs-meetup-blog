import React from "react";
import Meetuplist from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage({ meetups }) {
  return (
    <div>
      <Meetuplist meetups={meetups}></Meetuplist>
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from db
  //fetch data from file
  const client = await MongoClient.connect(
    "mongodb+srv://nmuthukumaranm:bb5Byn1z7i7kxIC8@cluster0.wu0uqgm.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const result = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
