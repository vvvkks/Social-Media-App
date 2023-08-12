import SocialApp from "./App";
import ReactDOM from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
