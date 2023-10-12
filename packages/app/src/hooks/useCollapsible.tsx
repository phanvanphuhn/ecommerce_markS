import React from 'react';

export function useCollapsible(show?: boolean) {
  const [height, setHeight] = React.useState(0);

  const [isShow, setIsShow] = React.useState<boolean>(show || false);

  const onPress = () => {
    setIsShow(isShow => !isShow);
  };

  return {
    onPress,
    isShow,
  };
}
