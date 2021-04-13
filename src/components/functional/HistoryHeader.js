import React from "react";
import { Container } from "react-bootstrap";

function HistoryHeader() {
  return (
    <Container fluid>
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="input-group">
            <span className="input-group-text">Inizio</span>
            <input type="date" aria-label="Year" class="form-control" />
          </div>
        </div>
        <div className="col-auto">
          <div className="input-group">
            <span className="input-group-text">Fine</span>
            <input type="date" aria-label="Year" class="form-control" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HistoryHeader;
