export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Intro to Internet</span>
              <ul className="wd-content">
                <li className="wd-content-item">History of the Internet</li>
                <li className="wd-content-item">
                  Intranet vs Internet
                </li>
                <li className="wd-content-item">
                  Types of network
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Into to HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul>
                <li className="wd-content-item">
                  XMl vs HTML, All about Markup Languages
                </li>
                <li className="wd-content-item">
                  HTML elements
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div >
  );
}
