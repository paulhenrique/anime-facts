import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>App</div>
    </Provider>
  );
};

export default App;
