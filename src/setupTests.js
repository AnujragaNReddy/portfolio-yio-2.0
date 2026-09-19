// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which the scroll-reveal
// hook relies on to detect when sections enter the viewport.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;

// jsdom does not implement matchMedia, which components use to detect
// touch/coarse pointers and reduced-motion preferences.
window.matchMedia =
  window.matchMedia ||
  function matchMedia(query) {
    return {
      matches: false,
      media: query,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  };
