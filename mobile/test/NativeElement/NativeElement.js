import React from 'react';
import {ThemeProvider, AirbnbRating} from '@rneui/themed';
import {StyleSheet, Text, View, Platform, ScrollView} from 'react-native';

const NativeElement = () => {
  return (
    // <ThemeProvider>
    <View style={styles.container}>
      <ScrollView style={styles.viewContainer}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <AirbnbRating />
          <AirbnbRating isDisabled={true} />
          <AirbnbRating
            count={11}
            reviews={[
              'Terrible',
              'Bad',
              'Meh',
              'OK',
              'Good',
              'Hmm...',
              'Very Good',
              'Wow',
              'Amazing',
              'Unbelievable',
              'Jesus',
            ]}
            defaultRating={11}
            size={20}
          />
        </View>
      </ScrollView>
    </View>
    // </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    paddingTop: 50,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
    color: '#34495e',
  },
  viewContainer: {
    flex: 1,
  },
  rating: {
    paddingVertical: 10,
  },
});

export default NativeElement;
