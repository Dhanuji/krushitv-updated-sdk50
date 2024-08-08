import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const Govibima = () => {
  const [playlistData, setPlaylistData] = useState([]);
  const [filteredPlaylistData, setFilteredPlaylistData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const bannerimg = require('../assets/GoviBimata.jpg');
  const naicc = require('../assets/naicc.png');

  useEffect(() => {
    const apiKey = 'AIzaSyCiLXph9sQkRsG1N6ajLrujzrNftp4S2Us';
    const playlistId = 'PLWQ5Ps8soI9jmuXrR6-C0rCbE1SctpcOx';
    // Fetch playlist data using YouTube Data API
    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: 'snippet',
        maxResults: 50,
        playlistId,
        key: apiKey,
      }
    })
    .then(response => {
      setPlaylistData(response.data.items);
    })
    .catch(error => {
      console.error('Error fetching playlist data:', error);
    });
  }, []);

  useEffect(() => {
    // Update the filtered data whenever the playlist data changes
    const filteredData = playlistData.filter((item) =>
      item.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlaylistData(filteredData);
  }, [playlistData, searchQuery]);

  const updateSearch = (query) => {
    setSearchQuery(query);
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>  </Text>
      <Text>{item.snippet.title}</Text>
      <Text>  </Text>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}` }}
        style={{ height: 200 }}
      />
    </View>
  );

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={updateSearch}
        value={searchQuery}
      />
      <View style={styles.top}>
        <LinearGradient
          colors={['rgba(0,100,250,0.5)', 'transparent']}
          style={styles.background}
        />
        <Image source={bannerimg} resizeMode="cover" style={styles.bannerImage} />
        <Text style={styles.newsline}>Govibimata Arunalu</Text>
        <Image source={naicc} resizeMode="cover" style={styles.logo3} />
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={filteredPlaylistData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: 550,
    backgroundColor: '#fff',
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    top: 30,
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006400',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  bannerImage: {
    width: '95%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 10,
  },
  newsline: {
    position: 'absolute',
    top: 210,
    left: 50,
    fontWeight: '800',
    fontSize: 20,
    color: '#000',
  },
  logo3: {
    width: 50,
    height: 30,
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default Govibima;
