import ReactGA from 'react-ga';

export const readGAEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// category: 'home',
// action: 'click to compare page',
// label: 'compare btn',
