import React, {useState,useContext} from "react";
import Purchase from "./Purchase";
import { PurchaseContext } from "../utils/PurchaseContextComponent";

const AddToCard = () => {
  
  let {product, setProduct} = useContext(PurchaseContext)
  let [value, setValue] = useState(1)
  let [temp, setTemp] = useState(product.map((e)=>  e.price))
  let [Total, setTotal] = useState(temp.reduce((p, c) => {return p = p + c}, 0))
  
  
  return (
    <>
      <div className="container-fulid pb-5 mt-5  addToCart">       
        <div className="container">
            <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2">
                {product.map((e, i) =>{
                return      <Purchase product={product} data={e} temp={temp[i]} tempArray={temp} setTemp={setTemp}
                    setTotal={setTotal} setProduct={setProduct} values={value} setValue={setValue} key={i} />
                })}

            </div>
        </div>

        <div className="container">
            <div className="total-amount">
                <div className="subTotal">
                    <p>SUBTOTAL :</p>
                    <p>₹{Total}</p>
                </div>
                <div className="shipping">
                    <p >SHIPPING :</p>
                    <p>FREE</p>
                </div>
                <hr />
                <div className="total">
                    <p className="fw-bold">TOTAL : </p>
                    <p>₹{Total}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default AddToCard;