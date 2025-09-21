import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Kalyana Ramanuja Swami Mudumby</h2>
      <h3>Fall 2025 - Section 4</h3>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-lab3-link">
            Kambaz{" "}
          </Link>{" "}
        </li>
        <li>
          <Link href="https://cs5610-kambaz-fa-25-kalyan-mudumby.vercel.app/" id="wd-lab3-link">
            Deployed Application Link{" "}
          </Link>{" "}
        </li>
        <li>
          <Link href="https://github.com/theinhumaneme/cs5610-kambaz-fa-25-kalyan-mudumby" id="wd-lab3-link">
            GitHub Repository{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
