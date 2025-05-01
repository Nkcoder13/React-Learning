import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: "sample",
        location: "usa",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nkcoder13");
    const json = await data.json();
    this.setState({ data: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.data;
    return (
      <div>
        <h1>This is render method inside class component</h1>
        <img src={avatar_url}></img>
        <h3>
          {name} -- {location}
        </h3>
      </div>
    );
  }
}

export default AboutClass;
