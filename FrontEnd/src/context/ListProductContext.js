import React ,{createContext,useState}from 'react';
export const ListProductContext = createContext();

const ListProductProvider = (props) => {
    const [products,setProducts] = useState([]);

    const addProduct = async (product) => {
        const check = products.every(item => {
            return item.id !== product.id;
        });
        if(!check){
            products.forEach(item => {
                if(item.id === product.id){
                item.amount += 1;
                }
            })
            setProducts([...products]);
            alert("Sản phẩm đã được thêm 1 !!!")
        }else{
            setProducts([...products,product]);
            alert("Sản phẩm đã được thêm mới!");
        }
    };

    const delProduct = (id) => setProducts(products.filter(n => n.id !== id));

    const upAmount = (id) => {
        products.forEach(item => {
            if(item.id === id){
            item.amount += 1;
            }
        })
        setProducts([...products]);
    };

    const downAmount = (id) => {
        products.forEach(item => {
            if(item.id === id){
                item.amount -= 1;
                if(item.amount <= 1){
                    item.amount = 1;
                }
            }
        })
        setProducts([...products]);
    }; 

    return (
        <ListProductContext.Provider value={{products,addProduct,delProduct,upAmount,downAmount}}>
            {props.children}
        </ListProductContext.Provider>
    );
};

export default ListProductProvider;