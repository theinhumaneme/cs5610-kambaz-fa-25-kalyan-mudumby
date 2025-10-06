import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import Margins from "./Margins";
import Padding from "./Padding";
import Position from "./Positions";
import ReactIconsSampler from "./ReactIcons";
import Zindex from "./Zindex";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&rsquos s another paragraph using a different ID and a different
          look and feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&rsquos s CLASS attribute
        </p>

        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&rsquos red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <ForegroundColors></ForegroundColors>
      <BackgroundColors></BackgroundColors>
      <Borders></Borders>
      <Padding></Padding>
      <Margins></Margins>
      <Corners></Corners>
      <Dimensions></Dimensions>
      <Position></Position>
      <Zindex></Zindex>
      <Float></Float>
      <GridLayout></GridLayout>
      <Flex></Flex>
      <ReactIconsSampler></ReactIconsSampler>
      <BootstrapGrids></BootstrapGrids>
      <ScreenSizeLabel></ScreenSizeLabel>
      <BootstrapTables></BootstrapTables>
      <BootstrapLists></BootstrapLists>
      {/* <BootstrapForms></BootstrapForms> */}
      <BootstrapNavigation></BootstrapNavigation>
    </Container>
  );
}
