import { Box, Icon, Text } from 'native-base';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TabBarIcon from './TabBarIcon';

export interface SettingsItemProps {
  title: string;
  source: ImageSourcePropType;
}
const SettingsItem = ({ title, source }: SettingsItemProps) => {
  return (
    <Box flexDirection="row" py={3} alignItems="center">
      <TabBarIcon size={10} source={source} />
      <Text
        flex={1}
        pl={8}
        fontFamily="Quicksand"
        textTransform="capitalize"
        fontWeight="700"
        letterSpacing={0.3}
        fontSize={16}>
        {title}
      </Text>
      <Icon
        as={<MaterialIcon name="arrow-forward-ios" />}
        size="xs"
        color="gray.300"
      />
    </Box>
  );
};

export default SettingsItem;
