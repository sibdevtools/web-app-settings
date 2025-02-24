import React, { useEffect, useState } from 'react';
import { Settings } from '../settings/types';
import { loadSettings, saveSettings } from '../settings/utils';
import { FloppyDiskIcon } from 'hugeicons-react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import SettingField from '../component/SettingField';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({});
  const [showSaved, setShowSaved] = useState(false)

  useEffect(() => {
    const loadedSettings = loadSettings();
    setSettings(loadedSettings);
  }, []);

  const handleChange = (key: string, value: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: {
        ...prevSettings[key],
        value,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSaved(false);
    saveSettings(settings);
    setShowSaved(true);
  };

  return (
    <Col md={{ span: 10, offset: 1 }}>
      <Alert
        dismissible={true}
        variant={'success'}
        className={`fade show ${showSaved ? '' : 'd-none'}`}
        role="alert"
      >
        Saved!
      </Alert>
      <Container>
        <Form onSubmit={handleSubmit} className="mt-4">
          {Object.values(settings).map((setting) => (
            <Row className="mb-3 align-items-center" key={setting.key}>
              <Col xs={2}>
                <Form.Label htmlFor={setting.key}>{setting.label}</Form.Label>
              </Col>
              <Col xs={10}>
                <SettingField
                  setting={setting}
                  settings={settings}
                  handleChange={handleChange}
                />
              </Col>
            </Row>
          ))}
          <Button variant={'primary'} type="submit" className="float-end">
            <FloppyDiskIcon />
          </Button>
        </Form>
      </Container>
    </Col>
  );
};

export default SettingsPage;
