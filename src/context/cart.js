import React, { createContext, useState, useContext, useEffect } from "react"

const CartContext = createContext()

export default function CartProvider ({ children }) {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()

    const servicos = [{
      id: 1,
      nome: 'Banho',
      preco: "R$ " + 80,
      descricao: 'NÃO DE BANHO NO SEU PET! Mas se precisar nós damos.',
    },
    {
      id: 2,
      nome: 'Vacina V4',
      preco: "R$ " + 100,
      descricao: 'Uma dose da vacina V4. Seu PET precisa de duas.',
    },
    {
      id: 3,
      nome: 'Vacina Antirrábica',
      preco: "R$ " + 90,
      descricao: 'Uma dose da vacina antirrábica. Seu PET precisa de uma por ano.',
    },
    {
      id: 4,
      nome: 'Ração Pedigree Nutrição Essencial',
      preco: "R$ " + 149,
      descricao: 'Nutrição essencial sabor carne para cães adultos.',
    },
    {
      id: 5,
      nome: 'Ração Whiskas para Gatos',
      preco: "R$ " + 169,
      descricao: 'Ração premium 100% completa e balanceada.',
    },]
    

    useEffect(() => {
        let value = 0
        cart.map((item) => {
          value = value * item.preco
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
        servicos
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
        servicos
    } = context

    return{
        cart,
        add,
        remove,
        totalValue,
        servicos
    }
}