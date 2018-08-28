import React from "react";
import { MemoryRouter } from "react-router-dom";

const withRouter = Component => props => (
  <MemoryRouter>
    <Component {...props} />
  </MemoryRouter>
);

export default withRouter;
