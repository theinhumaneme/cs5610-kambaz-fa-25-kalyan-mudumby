export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" defaultValue={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option defaultValue="">Assignments</option>
              <option defaultValue="">Quizzes</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option defaultValue="">Percentage</option>
              <option defaultValue="">Grade Point</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option defaultValue="">Online</option>
              <option defaultValue="">In Person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>Online Entry Options</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" id="wd-text-entry" name="scales" />{" "}
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" id="wd-website-url" name="scales" />{" "}
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" id="wd-media-recordings" name="scales" />{" "}
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" id="wd-student-annotation" name="scales" />{" "}
            <label htmlFor="wd-student-annotation">Student Annotations</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="checkbox" id="wd-file-upload" name="scales" />{" "}
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <select id="wd-points">
              <option defaultValue="">Everyone</option>
              <option defaultValue="">TA</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input
              type="date"
              id="wd-due-date"
              name="trip-start"
              defaultValue="2025-09-29"
              min="2018-01-01"
              max="2018-12-31"
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input
              type="date"
              id="wd-available-from"
              name="trip-start"
              value="2025-09-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </td>
          <td>
            <input
              type="date"
              id="wd-available-until"
              name="trip-start"
              value="2025-09-29"
              min="2018-01-01"
              max="2018-12-31"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={5}>
            <hr />
          </td>
        </tr>
        <tr>
          <td colSpan={2}></td>
          <td colSpan={3}>
            <input type="button" value="Cancel" />
            <input type="button" value="Save" />
          </td>
        </tr>
      </table>
    </div>
  );
}
