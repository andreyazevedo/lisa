import config from '../config.json';

export const loadConfig = () => {
  return {
    type: 'LOAD_CONFIG',
    payload: {
      config,
    },
  };
};
