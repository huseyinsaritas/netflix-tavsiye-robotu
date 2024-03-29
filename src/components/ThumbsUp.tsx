import React from "react";
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { G, Path, Circle } from "react-native-svg";

interface IThumbsUp {
  width: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ThumbsUp: React.FC<IThumbsUp> = ({ width, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.thumbsUp} activeOpacity={0.8}>
      <Svg width={width} height={width} viewBox="0 0 300 300">
        <G>
          <Circle fill="#E50914" cx="130" cy="180" r="96" />
          <Path
            fill="#edebdc"
            d="m212 123.566v112l-94.547-.082c-18.48-.017-33.453-15.002-33.453-33.483v-34.057c0-11.094 4.598-21.691 12.699-29.27l24.667-23.078 35.154-45.192c4.06-5.219 10.989-7.278 17.24-5.124 9.357 3.225 13.316 14.289 8.129 22.718l-21.889 35.568z"
          />
          <Path
            fill="#4c241d"
            d="m212 239.566c-.001 0-.002 0-.004 0l-94.547-.082c-20.649-.018-37.449-16.833-37.449-37.483v-34.058c0-12.154 5.09-23.887 13.965-32.191l24.438-22.862 34.96-44.943c5.109-6.569 13.83-9.161 21.7-6.45 5.614 1.935 9.981 6.251 11.981 11.842s1.362 11.697-1.75 16.754l-18.136 29.472h44.842c2.209 0 4 1.791 4 4v112c0 1.062-.422 2.08-1.173 2.83-.75.75-1.766 1.171-2.827 1.171zm-43.276-171.131c-3.469 0-6.833 1.578-9.047 4.424l-35.154 45.192c-.129.166-.271.321-.425.465l-24.667 23.078c-7.265 6.797-11.431 16.401-11.431 26.35v34.058c0 16.243 13.214 29.468 29.457 29.482l90.543.078v-103.996h-48c-1.449 0-2.785-.784-3.492-2.049-.706-1.265-.674-2.813.086-4.047l21.888-35.568c1.832-2.978 2.208-6.574 1.03-9.866s-3.75-5.834-7.057-6.974c-1.225-.424-2.485-.627-3.731-.627z"
          />
          <Path fill="#edebdc" d="m230 151.566h-32c-7.732 0-14-6.268-14-14 0-7.732 6.268-14 14-14h32c7.732 0 14 6.268 14 14 0 7.732-6.268 14-14 14z" />
          <Path
            fill="#4c241d"
            d="m230 155.566h-32c-9.925 0-18-8.075-18-18s8.075-18 18-18h32c9.925 0 18 8.075 18 18s-8.075 18-18 18zm-32-28c-5.514 0-10 4.486-10 10s4.486 10 10 10h32c5.514 0 10-4.486 10-10s-4.486-10-10-10z"
          />
          <Path fill="#edebdc" d="m230 179.566h-32c-7.732 0-14-6.268-14-14 0-7.732 6.268-14 14-14h32c7.732 0 14 6.268 14 14 0 7.732-6.268 14-14 14z" />
          <Path
            fill="#4c241d"
            d="m230 183.566h-32c-9.925 0-18-8.075-18-18s8.075-18 18-18h32c9.925 0 18 8.075 18 18s-8.075 18-18 18zm-32-28c-5.514 0-10 4.486-10 10s4.486 10 10 10h32c5.514 0 10-4.486 10-10s-4.486-10-10-10z"
          />
          <Path fill="#edebdc" d="m230 207.566h-32c-7.732 0-14-6.268-14-14 0-7.732 6.268-14 14-14h32c7.732 0 14 6.268 14 14 0 7.732-6.268 14-14 14z" />
          <Path
            fill="#4c241d"
            d="m230 211.566h-32c-9.925 0-18-8.075-18-18s8.075-18 18-18h32c9.925 0 18 8.075 18 18s-8.075 18-18 18zm-32-28c-5.514 0-10 4.486-10 10s4.486 10 10 10h32c5.514 0 10-4.486 10-10s-4.486-10-10-10z"
          />
          <Path fill="#edebdc" d="m230 235.566h-32c-7.732 0-14-6.268-14-14 0-7.732 6.268-14 14-14h32c7.732 0 14 6.268 14 14 0 7.732-6.268 14-14 14z" />
          <Path
            fill="#4c241d"
            d="m230 239.566h-32c-9.925 0-18-8.075-18-18s8.075-18 18-18h32c9.925 0 18 8.075 18 18s-8.075 18-18 18zm-32-28c-5.514 0-10 4.486-10 10s4.486 10 10 10h32c5.514 0 10-4.486 10-10s-4.486-10-10-10z"
          />
          <Path fill="#edebdc" d="m160 123.566s-12 20-4 32" />
          <Path
            fill="#4c241d"
            d="m156.004 159.566c-1.293 0-2.562-.625-3.332-1.782-9.297-13.946 3.355-35.372 3.898-36.277 1.137-1.894 3.595-2.507 5.487-1.372 1.894 1.136 2.508 3.59 1.375 5.484-2.969 4.972-9.491 19.646-4.104 27.727 1.226 1.838.729 4.322-1.109 5.547-.682.455-1.453.673-2.215.673z"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbsUp: {
    position: "relative",
    top: -12
    // borderRadius: 30 / PixelRatio.get(),
    // backgroundColor: COLORS.white,
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default ThumbsUp;
