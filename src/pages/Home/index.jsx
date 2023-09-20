import { Container, Content } from './styles'
import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Menu } from '../../components/Menu'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'



export function Home() {

  const [active, setActive] = useState(false)
  const [name, setName] = useState("")
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true);

  const { user } = useAuth()

  function handleActive() {
    setActive(!active)
  }

  const nameValue = e => setName(e.target.value)

  useEffect(() => {
    async function fetchFavorite() {
      setLoading(true);
      const response = await api.get("/favorites")
      setFavorites(response.data.map(data => data.dish_id))
      setLoading(false);
    }
    fetchFavorite()
  }, [])

  return (

    <Container>
      <Header onHandleActive={handleActive} nameValue={nameValue}/>

      <Menu
        enable={active}
        onHandleActive={handleActive}
        isAdmin={user.admin}
        nameValue={nameValue}
      />

      <Banner />

      <Content>
        {loading ? (
        <div>
          Loading...
        </div>
        ) : (
          <>
            <Carousel
              title="Refeições"
              name={name}
              isFavorite={favorites}
            />
    
            <Carousel
              title="Sobremesas"
              name={name}
              isFavorite={favorites} 
            />
    
            <Carousel
              title="Bebidas"
              name={name}
              isFavorite={favorites} 
            />
          </>
        )}


      </Content>

      <Footer />
    </Container>
  )


}