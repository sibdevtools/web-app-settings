import React, { useState, useEffect } from 'react';
import { SelectSetting, Setting, Settings } from '../settings/types';
import { loadSettings, saveSettings } from '../settings/utils';
import { FloppyDiskIcon } from 'hugeicons-react';

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

  const renderField = (setting: Setting) => {
    switch (setting.type) {
      case 'text':
        return (
          <input
            id={setting.key}
            type="text"
            className="form-control"
            value={setting.value}
            onChange={(e) => handleChange(setting.key, e.target.value)}
          />
        );
      case 'select':
        const selectSetting = setting as SelectSetting
        return (
          <select
            id={setting.key}
            className="form-select"
            value={setting.value}
            onChange={(e) => handleChange(setting.key, e.target.value)}
          >
            {selectSetting.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className={'col-md-10 offset-md-1'}>
      <div className={`alert  alert-dismissible fade show alert-success ${showSaved ? '' : 'd-none'}`} role="alert">
        Saved!
      </div>
      <form onSubmit={handleSubmit} className="container mt-4">
        {Object.values(settings).map((setting) => (
          <div className="mb-3 row" key={setting.key}>
            <label htmlFor={setting.key} className="form-label col-md-2 col-form-label">{setting.label}</label>
            <div className="col-sm-10">
              {renderField(setting)}
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary float-end">
          <FloppyDiskIcon />
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
