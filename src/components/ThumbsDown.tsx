import React from "react";
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path, Circle, G } from "react-native-svg";

interface IThumbsDown {
  width: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ThumbsDown: React.FC<IThumbsDown> = ({ width, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.thumbsDown} activeOpacity={0.8}>
      <Svg width={width} height={width} viewBox="0 0 300 300">
        <G transform="matrix(-1 0 0 1 300 0)">
          <Circle fill="#E50914" cx="126" cy="130" r="96" />
          <Path
            fill="#edebdc"
            d="m228.078 168-14.156-111.709h-103.772c-23.236 0-42.072 18.836-42.072 42.072v40.547c0 12.762 7.702 24.262 19.502 29.121 31.111 12.81 56.035 37.197 69.52 68.021l3.184 7.278c2.305 5.268 7.509 8.671 13.258 8.671 9.415 0 16.323-8.848 14.04-17.982l-18.855-52.96c-2.267-6.367 2.454-13.058 9.212-13.058h50.139z"
          />
          <Path
            fill="#4C241D"
            d="m173.543 256c-7.339 0-13.981-4.344-16.924-11.068l-3.184-7.278c-13.139-30.031-37.067-53.444-67.379-65.925-13.352-5.498-21.979-18.38-21.979-32.819v-40.548c0-25.404 20.668-46.072 46.072-46.072h103.771c2.015 0 3.715 1.499 3.968 3.497l14.157 111.709c.144 1.14-.208 2.286-.968 3.147-.76.862-1.853 1.355-3.001 1.355h-50.139c-1.903 0-3.624.892-4.722 2.447-1.098 1.556-1.36 3.476-.722 5.269l18.855 52.96c.043.122.081.246.112.372 1.389 5.557.164 11.333-3.361 15.848s-8.828 7.106-14.556 7.106zm-63.393-195.709c-20.993 0-38.072 17.079-38.072 38.072v40.547c0 11.185 6.683 21.164 17.024 25.422 32.238 13.274 57.688 38.176 71.663 70.117l3.184 7.277c1.667 3.812 5.434 6.274 9.594 6.274 3.247 0 6.256-1.468 8.254-4.027 1.962-2.512 2.667-5.714 1.947-8.811l-18.785-52.762c-1.5-4.213-.856-8.91 1.722-12.564s6.787-5.835 11.259-5.835h45.6l-13.144-103.71z"
          />
          <Path fill="#edebdc" d="m173.922 84.291h48.178c7.732 0 14-6.268 14-14 0-7.732-6.268-14-14-14h-36.178" />
          <Path
            fill="#4C241D"
            d="m222.1 88.291h-48.178c-2.209 0-4-1.791-4-4s1.791-4 4-4h48.178c5.514 0 10-4.486 10-10s-4.486-10-10-10h-36.178c-2.209 0-4-1.791-4-4s1.791-4 4-4h36.178c9.925 0 18 8.075 18 18s-8.076 18-18 18z"
          />
          <Path fill="#edebdc" d="m192.078 168h50.134c7.572 0 13.709-6.045 13.709-13.503v-.704c0-7.457-6.138-13.503-13.709-13.503h-52.581" />
          <Path
            fill="#4C241D"
            d="m242.213 172h-50.135c-2.209 0-4-1.791-4-4s1.791-4 4-4h50.135c5.354 0 9.709-4.263 9.709-9.503v-.704c0-5.24-4.355-9.503-9.709-9.503h-52.582c-2.209 0-4-1.791-4-4s1.791-4 4-4h52.582c9.765 0 17.709 7.852 17.709 17.503v.704c0 9.651-7.944 17.503-17.709 17.503z"
          />
          <Path fill="#edebdc" d="m188.631 140.424h53.581c7.571 0 13.709-6.138 13.709-13.709v-.715c0-7.571-6.138-13.709-13.709-13.709h-52.581" />
          <Path
            fill="#4C241D"
            d="m242.213 144.424h-53.582c-2.209 0-4-1.791-4-4s1.791-4 4-4h53.582c5.354 0 9.709-4.355 9.709-9.709v-.715c0-5.354-4.355-9.709-9.709-9.709h-52.582c-2.209 0-4-1.791-4-4s1.791-4 4-4h52.582c9.765 0 17.709 7.944 17.709 17.709v.714c0 9.765-7.944 17.71-17.709 17.71z"
          />
          <Path fill="#edebdc" d="m185.922 112.291h44c7.732 0 14-6.268 14-14 0-7.732-6.268-14-14-14h-44" />
          <G fill="#4c241d">
            <Path
              fill="#4C241D"
              d="m229.922 116.291h-44c-2.209 0-4-1.791-4-4s1.791-4 4-4h44c5.514 0 10-4.486 10-10s-4.486-10-10-10h-44c-2.209 0-4-1.791-4-4s1.791-4 4-4h44c9.925 0 18 8.075 18 18s-8.075 18-18 18z"
            />
            <Path fill="#4C241D" d="m189.631 60.291h-11.886c-2.209 0-4-1.791-4-4s1.791-4 4-4h11.886c2.209 0 4 1.791 4 4s-1.791 4-4 4z" />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbsDown: {
    position: "relative"
    // borderRadius: 30 / PixelRatio.get()
    // backgroundColor: COLORS.white,
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default ThumbsDown;
