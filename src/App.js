import React from "react";
// import { Input } from "./input";
// import LoginForm from "./loginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleData = this.handleData.bind(this);
//   }

//   handleData(username, password, event) {
//     event.preventDefault();
//     console.log(username, password);
//   }

//   render() {
//     return <Input handleData={this.handleData} />;
//   }
// }

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Jari" />} />
      </Routes>
    </BrowserRouter>
  );
}
