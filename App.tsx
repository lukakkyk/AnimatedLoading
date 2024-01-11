import { Text, View } from "react-native";
import { MotiView } from "moti";
const LoadingIndicator = ({ size }: { size: number }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        // repeat:Infinity
        loop: true,
      }}
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#fff",
        shadowColor: "#fff",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010101",
      }}
    >
      <LoadingIndicator size={100} />
    </View>
  );
};

export default App;
