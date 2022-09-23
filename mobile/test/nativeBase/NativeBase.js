import React from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  HStack,
  VStack,
  Pressable,
  Image,
  Text,
  useDisclose,
  CheckCircleIcon,
  ChevronDownIcon,
  Checkbox,
  Icon,
} from 'native-base';
// import {
//   MaterialCommunityIcons,
//   AntDesign,
//   Entypo,
// } from 'react-native-vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
// import Ionicons from '@expo/vector-icons/Ionicons';
const NativeBase = () => {
  const colors = {
    primary: {
      50: '#ecfeff',
      100: '#164e63',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
  };
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box
          bg="primary.600"
          mt="20"
          p="5"
          borderRadius="5"
          rounded="md"
          width={375}
          maxWidth="100%">
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack space="2">
                <Text fontSize="sm" color="white">
                  Today @ 9PM
                </Text>
                <Text color="white" fontSize="xl">
                  Let's talk about avatar!
                </Text>
              </VStack>
              <Pressable
                _hover={{bg: '#000'}}
                rounded="xs"
                bg="primary.400"
                alignSelf="flex-start"
                py="1"
                px="3">
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  color="white">
                  Remind me
                </Text>
              </Pressable>
            </Box>
            <Image
              source={{
                uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
              }}
              alt="Aang flying and surrounded by clouds"
              height="100"
              rounded="full"
              width="100"
            />
          </HStack>
        </Box>
        <CheckCircleIcon size="5" mt="0.5" color="emerald.500" />
        <ChevronDownIcon />
        <Box bg="primary.100" p="10" mt="4" py="2" px="2">
          <Text color="secondary.500">Testing</Text>
        </Box>
        <Box bg={colors.primary[100]} mt="10" p="5">
          <Text color="secondary.500">Test</Text>
        </Box>
        <HStack>
          <Icon
            as={AntDesign}
            name="android1"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
          />
        </HStack>
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Box my="4" flex={1}>
          <Pressable
            _hover={{
              bgColor: 'primary.900',
            }}
            _focus={{
              bg: 'primary.700',
              borderColor: 'primary.400',
              borderWidth: '2px',
            }}
            bg="primary.600"
            py="2"
            px="3"
            rounded="sm"
            alignSelf="center">
            <Text textTransform="uppercase" fontWeight="bold" color="white">
              Hover
            </Text>
          </Pressable>
          <Checkbox
            mt={3}
            value="test"
            accessibilityLabel="This is a dummy checkbox"
            defaultIsChecked
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
export default NativeBase;
