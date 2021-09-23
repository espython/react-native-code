import { Box, Icon, Image, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native';
import SettingsItem from '../components/SettingsItem';
import { dataSaver, notification, profile, saved } from '../assets';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea pt={4} bg="white">
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <TouchableOpacity
          style={{ position: 'absolute', left: 24 }}
          onPress={() => navigation.goBack()}>
          <Box>
            <Icon as={<MaterialIcon name="arrow-back-ios" />} size="sm" />
          </Box>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4103244/pexels-photo-4103244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          alt="profile image"
          width={20}
          height={20}
          borderRadius={12}
        />
      </Box>
      <Box px={6} pt={53}>
        <Text
          fontFamily="Quicksand"
          fontSize={24}
          fontWeight="700"
          pb={4}
          textTransform="capitalize">
          Settings
        </Text>
        <SettingsItem title="profile" source={profile} />
        <SettingsItem title="notifications" source={notification} />
        <SettingsItem title="saved" source={saved} />
        <SettingsItem title="data saver" source={dataSaver} />
        <SettingsItem title="profile" source={profile} />
        <SettingsItem title="profile" source={profile} />
        <SettingsItem title="profile" source={profile} />
        <SettingsItem title="profile" source={profile} />
        <SettingsItem title="profile" source={profile} />
      </Box>
    </Box>
  );
};

export default Settings;
