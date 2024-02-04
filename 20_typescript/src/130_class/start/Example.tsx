class User {
  public name: string = "Taro";
  private age: number = 18;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = 24;
  }
}

const Example = () => {
  const user = { name: "Hanako", age: 21 };
  const user1 = new User("Hanako", 22);
  console.log(user1);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Example;
