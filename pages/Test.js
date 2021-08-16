// Dark Notifications
import React from 'react';
import { Div, Button, Notification, Icon } from "atomize";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successDark: false,
      warningDark: false,
      infoDark: false,
      dangerDark: false,
    };
  }

  render() {
    const { successDark, warningDark, infoDark, dangerDark } = this.state;

    return (
      <Div d="flex">

        // Success
        <Button
          bg="success700"
          hoverBg="success600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ successDark: true })}
        >
          Success
        </Button>
        <Notification
          bg="success700"
          isOpen={successDark}
          onClose={() => this.setState({ successDark: false })}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a success message
        </Notification>

        // Warning
        <Button
          bg="warning700"
          hoverBg="warning600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ warningDark: true })}
        >
          Warning
        </Button>
        <Notification
          bg="warning700"
          isOpen={warningDark}
          onClose={() => this.setState({ warningDark: false })}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a warning message
        </Notification>

        // Info
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ infoDark: true })}
        >
          Info
        </Button>
        <Notification
          bg="info700"
          isOpen={infoDark}
          onClose={() => this.setState({ infoDark: false })}
          prefix={
            <Icon
              name="InfoSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a info message
        </Notification>

        // Alert
        <Button
          bg="danger700"
          hoverBg="danger600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ dangerDark: true })}
        >
          Alert
        </Button>
        <Notification
          bg="danger700"
          isOpen={dangerDark}
          onClose={() => this.setState({ dangerDark: false })}
          prefix={
            <Icon
              name="CloseSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a alert message
        </Notification>
      </Div>
    );
  }
}

export default Test;