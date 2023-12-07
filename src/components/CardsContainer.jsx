
import Exercise from "./cards/Exercise";
import Play from "./cards/Play";
import SelfCare from "./cards/SelfCare";
import Social from "./cards/Social";
import Study from "./cards/Study";
import Work from "./cards/Work";

const CardsContainer = ({time}) => {
  return (
    <div className="container">
      <Work time={time}/>
          <Play time={time}/>
          <Study time={time}/>
          <Exercise time={time}/>
          <Social time={time}/>
          <SelfCare time={time}/>
    </div>
  )
}

export default CardsContainer