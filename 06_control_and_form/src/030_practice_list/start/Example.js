import Profile from "./components/Profile";

const Example = () => {
  const profiles = [
    {
      name: "Lisa",
      age: 21,
      hobbies: ["sports", "travel", "game"],
    },
    {
      name: "Tom",
      age: 25,
      hobbies: ["movie", "music"],
    },
    {
      name: "Geo",
      age: 54,
      hobbies: ["sports", "travel", "game"],
    },
  ];
  return (
    <>
      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>
            <Profile
              name={profile.name}
              age={profile.age}
              hobbies={profile.hobbies}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
