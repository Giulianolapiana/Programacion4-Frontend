import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import styles from "./MainLayout.module.css";

interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.main}>
        <Navbar />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;