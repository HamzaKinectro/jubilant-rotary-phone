import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  renderTitle() {
    return this.state.data.map(album => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }

  renderAlbums() {
    return this.state.data.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
