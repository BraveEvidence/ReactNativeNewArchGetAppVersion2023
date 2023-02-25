import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getAppVersion(): string;
}

export default TurboModuleRegistry.get<Spec>('RTNCheckVersion') as Spec | null;
