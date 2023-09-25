import { Container, Itens, Scroll } from './styles'
import { useState, useEffect, useRef } from 'react';

import { Card } from '../Card'
import { ButtonText } from '../ButtonText'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api';

export function Carousel({ title, name, isFavorite }) {

  const [search, setSearch] = useState(name)
  const [dishes, setDishes] = useState([])
  const carousel = useRef(null)
  const {innerWidth} = window




  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  function handleLeftClick(e) {
    e.preventDefault()
    
    innerWidth > 1024 ? carousel.current.scrollLeft = carousel.current.scrollLeft - 500 : carousel.current.scrollLeft = carousel.current.scrollLeft - 234
    if(carousel.current.scrollLeft < 20){
      carousel.current.scrollLeft = 0
    }
  }


  function handleRightClick(e) {
    e.preventDefault()
   
    innerWidth > 1024 ? carousel.current.scrollLeft = carousel.current.scrollLeft + 500 : carousel.current.scrollLeft = carousel.current.scrollLeft + 210
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?category=${title}&name=${search}`)
      setDishes(response.data)
    }
    fetchDishes()

  }, [search])

  useEffect(() => {
    setSearch(name)
  },)

  return (
    <Container>

      <h3>{title}</h3>

      <Scroll>
      <ButtonText icon={IoIosArrowBack} size={50} onClick={handleLeftClick} />

      {
        dishes.length ?
          <Itens ref={carousel}>
            {

              dishes.map((dish, index) => (
                <Card
                  isFavorite={isFavorite}
                  onClick={() => handleDetails(dish.id)}
                  key={String(dish.id)}
                  data={dish} />
              ))
            }
          </Itens> :

          <h1>Não há pratos disponiveis</h1>

      }


      <ButtonText icon={IoIosArrowForward} size={50} onClick={handleRightClick} />
      </Scroll>

    </Container>
  )

}