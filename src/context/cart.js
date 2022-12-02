import React, { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext()

export default function CartProvider ({ children }) {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const servicos = [{
      id: 1,
      nome: 'Banho',
      preco: 80,
      descricao: 'Traga seu pet para tomar um banho digno de um rei!',
    },
    {
      id: 2,
      nome: 'Vacina V4',
      preco: 100,
      descricao: 'Uma dose da vacina V4. Seu pet precisa de duas.',
    },
    {
      id: 3,
      nome: 'Vacina Antirrábica',
      preco: 90,
      descricao: 'Uma dose da vacina antirrábica. Seu pet precisa de uma por ano.',
    },
    {
      id: 4,
      nome: 'Vacina polivalente (V8 e V10)',
      preco: 120,
      descricao: 'Essa vacina imuniza o pet contra doenças de origem viral e bacteriana',
    }]
    

    useEffect(() => {
        let value = 0
        cart.map((item) => {
          value = value + item.preco
        })

        setTotalValue(value)
    }, [cart])

    function add (item) {
        const newCart = cart
        newCart.push(item)

        setCart([...newCart])
    }

    function remove (index) {
      let newCart = cart.filter((item, i) => i !== index)
      setCart([...newCart])
  }

    const store = {
        add,
        remove,
        cart,
        totalValue,
        servicos,
        mail,
        setMail,
        pass,
        setPass,
        setCart
    }
    return(
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const { 
        cart,
        add,
        remove,
        totalValue,
        servicos,
        mail,
        setMail,
        pass,
        setPass,
        setCart

    } = context

    return{
        cart,
        add,
        remove,
        totalValue,
        servicos,
        mail,
        setMail,
        pass,
        setPass,
        setCart
    }
}