import { SelectSetting, Setting, Settings } from '../settings/types';
import { Form, Row } from 'react-bootstrap';
import React from 'react';
import { getExample } from '../settings/examples';

interface SettingsFieldProps {
  setting: Setting,
  settings: Settings,
  handleChange: (key: string, value: string) => void,
}

const SettingField: React.FC<SettingsFieldProps> = ({
                                                      setting,
                                                      settings,
                                                      handleChange
                                                    }
) => {
  const example = getExample(setting, settings)
  switch (setting.type) {
    case 'text':
      return (
        <Row>
          <Row className={example ? 'mb-2' : ''}>
            <Form.Control
              id={setting.key}
              type="text"
              value={setting.value}
              onChange={(e) => handleChange(setting.key, e.target.value)}
            />
          </Row>
          {example ? (<Row>{example}</Row>) : <></>}
        </Row>
      );
    case 'select':
      const selectSetting = setting as SelectSetting
      return (
        <Row>
          <Row className={example ? 'mb-2' : ''}>
            <Form.Select
              id={setting.key}
              value={setting.value}
              onChange={(e) => handleChange(setting.key, e.target.value)}
            >
              {selectSetting.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Row>
          {example ? (<Row>{example}</Row>) : <></>}
        </Row>
      );
    default:
      console.error(`Unsupported settings type: ${setting.type}`)
      return (<></>);
  }
};

export default SettingField;
