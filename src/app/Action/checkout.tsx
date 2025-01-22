import { client } from '@/sanity/lib/client';
import React from 'react'


interface Product {
  title: string;
  description: string;
  price: number;
  _id: string;
  image_url: string;
  tags: [];
}
interface Customer {
name : string,
email : string,
phone : string 
}



const createCustomerInSanity = async (customerInfo: Customer) => {
    try{
        const customerObject = {
            _type : "customer",
            name : customerInfo.name,
            email : customerInfo.email,
            phone : customerInfo.phone
        }

        const response = await client.create(customerObject);
        console.log("user created in sanity", response)
        return response
    } catch (error) {
        console.log("found error", error)
        throw error
    }
}

const createOrderInSanity = async (cartData: Product[], customer_id:string) => {
    try{
        const orderObject = {
            _type : "order",
            customer : {
                _type : "reference",
                _ref : customer_id
            },
            item: cartData.map((item)=> (
                {
                    _type:"item",
                    _id:item._id,
                    product_Name : item.title,
                    product_Description : item.description,
                    product_price : item.price,
                    quantity : 1

                }
            )),
            order_data : new Date().toISOString()
        }

        const response = await client.create(orderObject);
        console.log("user order in sanity", response)
        return response
    } catch (error) {
        console.log("found error", error)
        throw error
    }
}
 async function checkout(cartData:Product[], CustomerData: Customer) {
  try{
    const customer = await createCustomerInSanity(CustomerData)
    await createOrderInSanity(cartData,customer._id)
    console.log("checkOut Completed")
  }catch (error) {
    console.log("error to create order and cutomer in sanity", error)
    throw error
}
}



export default checkout
