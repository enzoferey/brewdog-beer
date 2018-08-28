import { shallow } from "enzyme";
import testSnapshot from "./snapshot";
import withRouter from "./withRouter";
import * as mocks from "./mocks";

global.shallow = shallow;
global.testSnapshot = testSnapshot;
global.withRouter = withRouter;
global.mocks = mocks;
