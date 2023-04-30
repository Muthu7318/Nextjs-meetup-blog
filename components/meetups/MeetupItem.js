import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

function MeetupItem(props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
    setIsLoading(true);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        {isLoading && (
          <div className={classes.actions}>
            <p>Loading...</p>
          </div>
        )}
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
