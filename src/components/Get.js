import React from "react";
import { Col, Row } from "react-bootstrap";
import ServerDownAlert from "./functional/ServerDownAlert";
import TableValues from "./functional/TableValues";
import Request from "../classes/Request";
import ValueChart from "./functional/ValueChart";
import HeaderSelect from "./functional/HeaderSelect";

class Get extends React.Component {
  constructor(props) {
    super(props);

    this.req = new Request();

    this.state = {
      isLoading: true,
      when: {
        year: "2019",
      },
    };

    this.getRequest();
  }

  averageAtemp(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "aTemp")
        .then((value) => this.setState({ aTemp: value[0].avg_aTemp }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "aTemp")
        .then((value) => this.setState({ aTemp: value[0].avg_aTemp }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "aTemp")
        .then((value) => this.setState({ aTemp: value[0].avg_aTemp }));
    }
  }

  averageAhum(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "aHum")
        .then((value) => this.setState({ aHum: value[0].avg_aHum }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "aHum")
        .then((value) => this.setState({ aHum: value[0].avg_aHum }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "aHum")
        .then((value) => this.setState({ aHum: value[0].avg_aHum }));
    }
  }

  averageBtemp(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "bTemp")
        .then((value) => this.setState({ bTemp: value[0].avg_bTemp }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "bTemp")
        .then((value) => this.setState({ bTemp: value[0].avg_bTemp }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "bTemp")
        .then((value) => this.setState({ bTemp: value[0].avg_bTemp }));
    }
  }

  averageBhum(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "bHum")
        .then((value) => this.setState({ bHum: value[0].avg_bHum }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "bHum")
        .then((value) => this.setState({ bHum: value[0].avg_bHum }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "bHum")
        .then((value) => this.setState({ bHum: value[0].avg_bHum }));
    }
  }

  averageExtTemp(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "extTemp")
        .then((value) => this.setState({ extTemp: value[0].avg_extTemp }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "extTemp")
        .then((value) => this.setState({ extTemp: value[0].avg_extTemp }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "extTemp")
        .then((value) => this.setState({ extTemp: value[0].avg_extTemp }));
    }
  }

  averageExtHum(when) {
    if (when.hasOwnProperty("year")) {
      this.req
        .avgOnYear("2019", "extHum")
        .then((value) => this.setState({ extHum: value[0].avg_extHum }));
    } else if (when.hasOwnProperty("month")) {
      this.req
        .avgOnMonth(when.month, when.monthYear, "extHum")
        .then((value) => this.setState({ extHum: value[0].avg_extHum }));
    } else if (when.hasOwnProperty("day")) {
      this.req
        .avgOnDay(when.day, "extHum")
        .then((value) => this.setState({ extHum: value[0].avg_extHum }));
    }
  }

  loadAvgs() {
    this.averageAtemp(this.state.when);
    this.averageAhum(this.state.when);
    this.averageBtemp(this.state.when);
    this.averageBhum(this.state.when);
    this.averageExtTemp(this.state.when);
    this.averageExtHum(this.state.when);
  }

  loadAvailableYear() {
    this.req.getAllAvailableYear().then((value) => {
      let y = [];

      for (let v of value) {
        y.push(<option>{v.year}</option>);
      }

      this.setState({
        years: y,
      });
    });
  }

  getRequest() {
    this.loadAvailableYear();

    if (this.state.when.hasOwnProperty("year")) {
      this.req.allDataInYear(this.state.when.year).then((value) => {
        let risultato = value;
        let array = [];

        array.push([
          { type: "date", label: "time" },
          { type: "number", label: "aTemp" },
          { type: "number", label: "aHum" },
          { type: "number", label: "bTemp" },
          { type: "number", label: "bHum" },
          { type: "number", label: "extTemp" },
          { type: "number", label: "extHum" },
        ]);

        if (!Array.isArray(risultato)) {
          risultato = [risultato];
        }

        for (let obj of risultato) {
          array.push([
            new Date(obj["time"]),
            obj["aTemp"],
            obj["aHum"],
            obj["bTemp"],
            obj["bHum"],
            obj["extTemp"],
            obj["extHum"],
          ]);
        }

        this.setState({
          isLoading: false,
          data: array,
        });
      });
    } else if (this.state.when.hasOwnProperty("month")) {
      this.req
        .allDataInMonth(this.state.when.monthYear, this.state.when.month)
        .then((value) => {
          let risultato = value;
          let array = [];

          array.push([
            { type: "date", label: "time" },
            { type: "number", label: "aTemp" },
            { type: "number", label: "aHum" },
            { type: "number", label: "bTemp" },
            { type: "number", label: "bHum" },
            { type: "number", label: "extTemp" },
            { type: "number", label: "extHum" },
          ]);

          if (!Array.isArray(risultato)) {
            risultato = [risultato];
          }

          for (let obj of risultato) {
            array.push([
              new Date(obj["time"]),
              obj["aTemp"],
              obj["aHum"],
              obj["bTemp"],
              obj["bHum"],
              obj["extTemp"],
              obj["extHum"],
            ]);
          }

          this.setState({
            isLoading: false,
            data: array,
          });
        });
    } else if (this.state.when.hasOwnProperty("day")) {
      this.req.allDataInDay(this.state.when.day).then((value) => {
        let risultato = value;
        let array = [];

        array.push([
          { type: "date", label: "time" },
          { type: "number", label: "aTemp" },
          { type: "number", label: "aHum" },
          { type: "number", label: "bTemp" },
          { type: "number", label: "bHum" },
          { type: "number", label: "extTemp" },
          { type: "number", label: "extHum" },
        ]);

        if (!Array.isArray(risultato)) {
          risultato = [risultato];
        }

        for (let obj of risultato) {
          array.push([
            new Date(obj["time"]),
            obj["aTemp"],
            obj["aHum"],
            obj["bTemp"],
            obj["bHum"],
            obj["extTemp"],
            obj["extHum"],
          ]);
        }

        this.setState({
          isLoading: false,
          data: array,
        });
      });
    }

    this.loadAvgs();
  }

  handeClick(data, closeModal, year = null) {
    if (data.id === "year") {
      this.setState(
        (state, props) => {
          return {
            when: {
              year: data.value,
            },
          };
        },
        () => {
          this.getRequest();
          closeModal();
        }
      );
    }else if (data.id == "month") {
        this.setState(
          (state, props) => {
            return {
              when: {
                month: data.value,
                monthYear: year.value,
              },
            };
          },
          () => {
            this.getRequest();
            closeModal();
          }
    );
    } else if (data.id === "day") {
      this.setState(
        (state, props) => {
          return {
            when: {
              day: data.value,
            },
          };
        },
        () => {
          this.getRequest();
          closeModal();
        }
      );
    } 
  }

  render() {
    if (this.state.serverDown) {
      return <ServerDownAlert />;
    }

    return (
      <div className="mt-3 h-100">
        <HeaderSelect
          years={this.state.years}
          click={this.handeClick.bind(this)}
        />
        <Row>
          <Col xs={12} md={3}>
            <TableValues
              darkMode={this.props.darkMode}
              aTemp={this.state.aTemp}
              aHum={this.state.aHum}
              bTemp={this.state.bTemp}
              bHum={this.state.bHum}
              extTemp={this.state.extTemp}
              extHum={this.state.extHum}
            />
          </Col>
          <Col xs={12} md={9}>
            <ValueChart
              isLoading={this.state.isLoading}
              data={this.state.data}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Get;
