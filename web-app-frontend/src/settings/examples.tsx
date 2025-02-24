import React from 'react';

import AceThemeExample from '../examples/AceThemeExample';
import { Setting, Settings } from './types';

export const getExample = (setting: Setting, settings: Settings): React.ReactNode => {
  if (setting.key === 'aceTheme') {
    return (<AceThemeExample settings={settings} />);
  }
  return (<></>);
};
