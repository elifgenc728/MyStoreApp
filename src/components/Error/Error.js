import LottieView from "lottie-react-native";

export default function Error(){
 return (
    <LottieView style={{flex:1}} source={require('../../assets/error.json')} autoPlay/>
 )
}