import React  from 'react';
import ReactDOM from 'react-dom';
const SecondRhrcApp = React.lazy(() => import("secondRhrc/App"));

const Zapp = <div style={{ textAlign: "center" }}>
  <React.Suspense fallback="Loading HostApp">
    <SecondRhrcApp/>
    <div>
      react-host-react-consumer contents
    </div>
  </React.Suspense>
</div>

ReactDOM.render(Zapp, document.getElementById("app"));