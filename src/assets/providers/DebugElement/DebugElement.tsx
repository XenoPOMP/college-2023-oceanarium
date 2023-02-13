import { FC, useEffect } from 'react';
import { DebugElementProps } from './DebugElement.props';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

const DebugElement: FC<DebugElementProps> = ({ useDebug }) => {
  const { appVersion, language }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );

  const debugLog = (...data: any[]) => console.log(`[DEBUG] ${data}`);

  useEffect(() => {
    if (!useDebug) return;

    debugLog(`App version: ${appVersion}`);
    debugLog(`Language: ${language}`);
  }, [language]);

  return <></>;
};

export default DebugElement;
