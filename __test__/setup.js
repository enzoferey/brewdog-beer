import { shallow } from "enzyme";
import testSnapshot from "./snapshot";

global.shallow = shallow;
global.testSnapshot = testSnapshot;
