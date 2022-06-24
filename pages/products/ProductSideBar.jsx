import React, { useState } from 'react'
import Search from '../../components/Search'

const sideBarItems = [
    { title: "Product Groups",
        list: ["Hotel Bedroom Furniture",
        "Restaurant Furniture",
        "Outdoor Furniture",
        "Office Chair",
        "Lobby Furniture",
        "Living Room Furniture",
        "Door and fix Furniture",
        "Sofa/Sofe Bed",
        "Coffee table",
        "Chair/Bar Chair",
        "Luggage rack",
        "Console"]
    },
    { title: "Feature List",
        list: [
        "Sample Available",
        "New Arrival",
        "Main Products",
        "Restaurant Furniture",
        "Reccomended for You"
    ]
    }
]

const ProductSideBar = () => {
    const [items, setItems] = useState(sideBarItems)
  return (
    <div>
        <Search styles={"bg-gray-400"}/>
        {
            items.map((item, index)=>(
                <div key={index}>
                    <h6 className="py-4">{item.title}</h6>
                    <ul className={`${item.list.length === items[index].list.length? "border-b" : null}`}>
                        {item.list.map((data, index)=>(
                            <li key={index} className="px-1 py-2 text-slate-500 text-sm cursor-pointer transition-all duration-300 hover:translate-x-1">{data}</li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default ProductSideBar