import Link from "next/link";
import classes from "./cards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faChartLine, faRoute, faCircleNodes, faCircleCheck, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className={classes.Cards}>
      <div className={classes.Card}>
        {" "}
        <Link href="/AboutRacine/Getting_Start/quickStart">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faSitemap} className={classes.Icon} /> 
            Getting Start
          </span>
        </Link>
      </div>

      <div className={classes.Card}>
        <Link href="/AboutRacine/Classification/dataset">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faChartLine} className={classes.Icon} />
            Traffic Classification
          </span>
        </Link>
      </div>
      <div className={classes.Card}>
        <a href="/AboutRacine/PossiblePaths/node">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faRoute} className={classes.Icon} />
            Possible Paths
          </span>
        </a>
      </div>
      <div className={classes.Card}>
        <Link href="/AboutRacine/AcceptablePaths/index">
          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCircleCheck} className={classes.Icon} />
            Acceptable Paths
          </span>
        </Link>
      </div>
      <div className={classes.Card}>
        <Link href="/AboutRacine/OptimalPaths/Metric">

          <span className={classes.Title}>
            <FontAwesomeIcon icon={faBolt} className={classes.Icon} />
            Optimal Path
          </span>
        </Link>
      </div>
      <div className={classes.Card}>
        <Link href="/AboutRacine/Routing/index">

          <span className={classes.Title}>
            <FontAwesomeIcon icon={faCircleNodes} className={classes.Icon} />
            Routing
          </span>
        </Link>
      </div>
    </div>
  );
}