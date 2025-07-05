import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';  // IMPORTANDO o contexto exportado

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => <Component {...props} themeContext={context} />}
      </ThemeContext.Consumer>
    );
  };
}
