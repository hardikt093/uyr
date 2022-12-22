<template>
  <what3words-map
    current_location
    :id="mapId"
    api_key="CVQHCR0K"
    map_api_key="AIzaSyAONdWlvzm8Jc8elwxfe4_hQwcjZDnAH38"
    zoom="8"
    selected_zoom="20"
    search_control_position="5"
    zoom_control
    fullscreen_control
    fullscreen_control_position="9"
    current_location_control_position="3"
    disable_default_ui
    :words="w3words"
  >

    <div slot="map" id="map" v-bind:style="!this.mapDiv && 'display:none'"></div>
    <div slot="search-control" v-if="this.autoSuggest">
      <what3words-autosuggest id="what3words">
        <input type="text"/>
      </what3words-autosuggest>
    </div>
  </what3words-map>
</template>
<script >

export default {
  name: "Autosuggest",
  props: {
    autoSuggest: Boolean,
    mapDiv: Boolean,
    mapId: String,
    w3words: String
  },
  data() {
    return {
      words: null,
      lat: null,
      lng: null,
      allData: null
    }
  },
  watch: {
    w3words(val) {
      console.log(val);
    }
  },
  mounted() {
    this.$nextTick(function () {
      const w3wMap = document.getElementById(this.mapId);

      w3wMap.addEventListener("selected_square", async (data) => {
        // this.lat = await w3wMap.getLat();
        // this.lng = await w3wMap.getLng();
        // this.words = data.detail.words;
        // this.allData = data;
       
        this.$emit('getmapdata', data.detail)
      });
    });
  },
};
</script>
<style>
#map {
  width: 100%;
  height: 80vh;
}
html,
body {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
</style>
