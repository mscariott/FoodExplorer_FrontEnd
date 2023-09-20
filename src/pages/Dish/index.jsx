import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Container, Content, Stepper, Order, Info } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Menu } from '../../components/Menu'
import { Tags } from "../../components/Tags"
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'


import avatarPlaceholder from "../../assets/avatar_placeholder.png"

import { FiMenu, FiPlus, FiMinus } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { IoIosArrowBack } from 'react-icons/io'


import { api } from '../../services/api'



export function Dish() {

  const { user } = useAuth()
  const navigate = useNavigate()
  const params = useParams()

  const [tags, setTags] = useState([])
  const [data, setData] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = useState()
  const [showValue, setShowValue] = useState("")
  const [active, setActive] = useState(false)



  let avatarUrl = null

  if (data) {
    avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder
  }

  function handleActive() {
    setActive(!active)
  }

  function handleBack() {
    navigate(-1)
  }

  function handleValue(index) {
    if (quantity < 2 && index < 0) {
      setQuantity(1)
    } else {
      setQuantity(prevState => prevState + index)
    }
  }

  async function handleSubmitItens(){

    const id = params.id

    await api.post("/itens", {quantity, id})
    alert("Itens adicionados ao carrinho")
    handleBack()
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      const { dish, ingridients } = response.data
      setData(dish)
      setValue(dish.price)
      setTags(ingridients)
      setShowValue(`incluir ∙ R$ ${value}`)
    }
    fetchDish()
  }, [])

  useEffect(() => {
    if (!data) {
      return
    } else {
      const price = Number(data.price.replace(',', '.'))
      setValue((price * quantity).toFixed(2))
    }

  }, [quantity])

  useEffect(() => {
    setShowValue(`incluir ∙ R$ ${String(value).replace('.', ',')}`)
  }, [value])

  return (
    <Container>

      <Header onHandleActive={handleActive}/>
      <Menu
        enable={active}
        onHandleActive={handleActive}
        isAdmin={user.admin}
      />
    

      <ButtonText icon={IoIosArrowBack} size={32} title="voltar" onClick={handleBack} />

      {avatarUrl &&

        <Content>

          <img src={avatarUrl} />

          <Info>
            <h3>{data.name}</h3>
            <p>
              {data.description}
            </p>

            <div className="ingridients">
              {
                tags.map((tag, index) => (
                  <Tags
                    key={String(index)}
                    title={tag.name} />
                ))
              }
            </div>

            {
              user.admin ?

                <Order>
                  <Button title="Editar Prato" onClick={() => navigate(`/edit/${params.id}`)} />
                </Order>
                :

                <Order>
                  <Stepper>
                    <ButtonText icon={FiMinus} size={27} onClick={e => handleValue(-1)} />
                    <p>{String(quantity).padStart(2,'0')}</p>
                    <ButtonText icon={FiPlus} size={27} onClick={e => handleValue(1)} />
                  </Stepper>

                  <Button title={showValue} icon={PiReceipt} size={21} onClick={handleSubmitItens} />
                </Order>
            }

          </Info>
        </Content>
      }

      <Footer />
    </Container>
  )
}