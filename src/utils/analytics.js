import ReactGA from 'react-ga';
// ReactGA.initialize('UA-000000-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-180233172-1');
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
