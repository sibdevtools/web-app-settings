import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-min-noconflict/mode-json'
import 'ace-builds/src-min-noconflict/snippets/json'

import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/theme-tomorrow';
import 'ace-builds/src-min-noconflict/theme-kuroir';
import 'ace-builds/src-min-noconflict/theme-twilight';
import 'ace-builds/src-min-noconflict/theme-xcode';
import 'ace-builds/src-min-noconflict/theme-textmate';
import 'ace-builds/src-min-noconflict/theme-solarized_dark';
import 'ace-builds/src-min-noconflict/theme-solarized_light';
import 'ace-builds/src-min-noconflict/theme-terminal';

import 'ace-builds/src-min-noconflict/ext-language_tools';

import { Settings } from '../settings/types';

interface AceThemeExampleProps {
  settings: Settings
}

const AceThemeExample: React.FC<AceThemeExampleProps> = ({
                                                           settings
                                                         }) => {
  const example = {
    'string': 'hello!',
    'integer': 123456,
    'float': 123.456,
    'array': [
      'item1',
      true,
      false,
      123456
    ],
    'object': {
      'hello': 'world'
    },
    'boolean': true
  }

  return (
    <>
      <AceEditor
        mode={'json'}
        theme={settings['aceTheme'].value}
        name={`aceThemeExample`}
        value={JSON.stringify(example, null, 4)}
        className={'rounded'}
        style={{
          resize: 'vertical',
          overflow: 'auto',
          minHeight: '320px',
        }}
        fontSize={14}
        width="100%"
        height="320px"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          showLineNumbers: true,
          useWorker: false,
          readOnly: true,
        }}
        editorProps={{ $blockScrolling: true }}
      />
    </>
  )
};

export default AceThemeExample;
