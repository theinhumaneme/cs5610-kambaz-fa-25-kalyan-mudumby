"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import KambazNavigation from "./Navigation";
import store from "./store";
import "./styles.css";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <div className="d-flex align-items-start">
          <div>
            <KambazNavigation />
          </div>
          <div className="wd-main-content-offset p-3 flex-fill">{children}</div>
        </div>
      </div>
    </Provider>
  );
}
