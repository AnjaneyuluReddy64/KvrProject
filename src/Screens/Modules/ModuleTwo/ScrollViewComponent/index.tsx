import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  RefreshControl,
  Image,
} from 'react-native';

const ScrollViewComponent = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {/* Body */}

      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Proin non sem sed velit hendrerit vehicula. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </Text>
        <Text style={styles.bodyText}>
          More dummy text here for scrolling purposes. Donec faucibus fermentum
          lectus at volutpat. Ut hendrerit erat eu ultricies pharetra.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#343a40',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ScrollViewComponent;
