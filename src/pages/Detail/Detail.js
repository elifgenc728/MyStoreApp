import { SafeAreaView, Text,Image } from "react-native"
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styles from './DetailStyle';
const Detail = ({route}) =>{
    const {id}= route.params; //params' ın içinden id'yi çekiyoruz.
    const {loading, error,data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
    if (loading) {
        return < Loading />;
    }
    if (error) {
        return <Error />;
    }
    return(
        <SafeAreaView >
            <Image source={{uri: data.image}} style={styles.image} />
            <Text style={styles.title}>{data.title}</Text>
        </SafeAreaView>
    )
}
export default Detail;