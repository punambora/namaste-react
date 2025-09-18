import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Punam Bora learning react from Namaste React web Series</h2>
      <div>
        <User name="Punam(function)" />
        <UserClass name="Punam(class)" />
      </div>
    </div>
  );
};

export default About;
