import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@redux/index';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export interface RenderOptions {
  useRedux?: boolean;
  useRouter?: boolean;
}

type Wrapper = (ui: JSX.Element) => JSX.Element;

const wrapInRedux: Wrapper = (ui) => {
  return <ReduxProvider store={store}>{ui}</ReduxProvider>;
};

const wrapInRouter: Wrapper = (ui) => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={ui} />
      </Routes>
    </Router>
  );
};

const renderWithProviders = (ui: JSX.Element, options?: RenderOptions) => {
  const renderOptions: RenderOptions = {
    useRedux: false,
    useRouter: false,
    ...options,
  };
  let renderUi: JSX.Element = ui;

  if (renderOptions.useRedux) {
    renderUi = wrapInRedux(renderUi);
  }

  if (renderOptions.useRouter) {
    renderUi = wrapInRouter(renderUi);
  }

  return render(renderUi);
};

export default renderWithProviders;
