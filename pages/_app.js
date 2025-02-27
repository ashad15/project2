import { Provider } from "react-redux";
import { store } from "../reducer/index";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <div id="app">
      <Component {...pageProps} />
        </div>
    </Provider>
  );
}