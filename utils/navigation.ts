import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
export function navigate(name: string, params?: object, reset?: boolean) {
  if (navigationRef.isReady()) {
    !reset
      ? // @ts-ignore
        navigationRef.navigate(name, params)
      : navigationRef.reset({
          index: 0,
          routes: [{name: name, params: params}],
        });
  }
}

export function push(name: string, params?: object, reset?: boolean) {
  if (navigationRef.isReady()) {
    !reset
      ? // @ts-ignore
        navigationRef.navigate(name, params)
      : navigationRef.reset({
          index: 1,
          routes: [{name: name, params: params}],
        });
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
