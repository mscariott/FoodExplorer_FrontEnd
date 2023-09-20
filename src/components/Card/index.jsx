import { Container, Content, Stepper, Order } from "./styles";
import { useState, useEffect } from 'react'

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";


import { FiPlus, FiMinus, FiHeart, FiEdit } from 'react-icons/fi'
import {PiPencilSimple} from 'react-icons/pi'
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.png"
import { api } from "../../services/api";



export function Card({ data, onClick, isFavorite }) {

  const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder;
  const { user } = useAuth()

  const navigate = useNavigate()
  const [favorite, setFavorites] = useState(isFavorite.find(fav => Number(fav) === Number(data.id)) !== undefined)
  const [quantity, setQuantity] = useState(1)

  

  async function handleFavorites(event) {
    event.stopPropagation()
    try{
      if(favorite)
        await removeFavorite()
      else
        await addFavorite();

      setFavorites(state => !state)
    }catch(err){
      alert(err.message);
    }
  }


  async function handleSubmitItens(event){
    event.stopPropagation()

    const id = data.id
    await api.post("/itens", {quantity, id})
    alert("Itens adicionados ao carrinho")
    window.location.reload() 
    setQuantity(1)
    
  }

  function handleAddItem(event) {
    event.stopPropagation()
    setQuantity(prevState => prevState + 1)
  }

  function handleRemoveItem(event) {
    event.stopPropagation()
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1)
    }
  }

  async function removeFavorite() {
    await api.delete(`/favorites?dish_id=${data.id}`)
  }

  async function addFavorite() {
    await api.post(`/favorites?dish_id=${data.id}`)
  }

  function handleEdit(event) {
    event.stopPropagation()
    navigate(`/edit/${data.id}`)
  }


  useEffect(() => {
    console.log(isFavorite, favorite, Number(data.id))
  }, [ favorite])

  return (
    <Container
      role="button"
      onClick={onClick}
    >

      {user.admin ? <ButtonText icon={PiPencilSimple} size={24} onClick={handleEdit} /> :
        <ButtonText icon={FiHeart} size={24} onClick={handleFavorites} favorite={favorite} />}

      <Content>

        <img src={avatarUrl} alt="Imagem do prato" />

        <h3>{data.name}</h3>

        <p className="description-of-dish">{data.description}</p>

        <span>R$ {data.price}</span>

        <Order>
        {user.admin === 0 &&
          <Stepper>
            <ButtonText icon={FiMinus} size={24} onClick={handleRemoveItem} />
            <p>{String(quantity).padStart(2, '0')}</p>
            <ButtonText icon={FiPlus} size={24} onClick={handleAddItem} />
          </Stepper>
        }
        {user.admin === 0 &&
          <Button style={{ height: "3.2rem" }} title="incluir" onClick = {handleSubmitItens} />
        }
        </Order>
      </Content>



    </Container>

  )

}