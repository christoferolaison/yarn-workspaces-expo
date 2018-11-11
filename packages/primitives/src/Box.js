import { View } from 'react-native';
import { theme } from '@company/theme'

export function Box({ bg, style, ...props }) {
  return (
    <View
      style={{ ...style, backgroundColor: theme.colors[theme] }}
      {...props}
    />
  )
}

