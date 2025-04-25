import { Platform } from 'react-native';
import { getBundleId } from 'react-native-device-info';

const shortCodes = {
  dizu:'b30b66'
};

const appIds = {
  dizu: Platform.select({
    ios: 'com.dizu.driver',
    android: 'com.dizu.driver',
  }),
};

const socialKeys = {
  TWITTER_COMSUMER_KEY:
    'R66DHARfuoYAPowApUxNxwbPi',
  TWITTER_CONSUMER_SECRET:
    'itcicJ7fUV3b73B8V05GEDBo4tzxGox2Si2q0BCk5pue327k15',
};

export { appIds, socialKeys, shortCodes };
