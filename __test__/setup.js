import { shallow } from "enzyme";
import testSnapshot from "./snapshot";
import withRouter from "./withRouter";
import mocks from "./mocks.json";

global.shallow = shallow;
global.testSnapshot = testSnapshot;
global.withRouter = withRouter;
global.mocks = mocks;
