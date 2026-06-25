//local test
/*
import Constants from 'expo-constants';

function getUrl() {
  const hostUri = Constants.expoConfig?.hostUri;

  if (!hostUri) {
    console.warn('Host URI não encontrado');
    return 'http://localhost:4000';
  }

  const ip = hostUri.split(':')[0];

  return `http://${ip}:4000`;
} */

function getUrl() {
  return "https://chocadeira-app-production.up.railway.app"
}

export const URL = getUrl();