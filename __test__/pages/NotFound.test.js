import React from "react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "pages/NotFound";

test("renders correctly", () => {
  testSnapshot(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
});

test("renders correctly `message` prop", () => {
  testSnapshot(
    <MemoryRouter>
      <NotFound message="hello" />
    </MemoryRouter>
  );
});
