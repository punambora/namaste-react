import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="user-card">
        <div>Name: {this.props.name} Bora</div>
        <div>Location: Karanja</div>
        <div>Contact: @punambora</div>
      </div>
    );
  };
}

export default UserClass;
