import React from "react";

import "./HomePage.scss";
import Directory from "../../components/directory/Directory";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
}

export default HomePage;
