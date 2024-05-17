import { FlatList } from "react-native"
import ProductCard from "../../components/ProductCard";
import Config from 'react-native-config';
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Products = ({ navigation }) => {
    const { loading, data, error } = useFetch(Config.API_PRODUCT_URL);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    const handleProductSelect = (id) => navigation.navigate('DetailPage', { id })
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;


    return (

        <FlatList data={data} renderItem={renderProduct} />


    )
}
export default Products;

