import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Content, Row, Save } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Menu } from '../../components/Menu';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';



import { FiArrowDown, FiMenu, FiUpload } from 'react-icons/fi'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'

import { api } from '../../services/api'
import { useEffect } from 'react';


export function NewDish() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Refeições")
  const [disable, setDisable] = useState(true)
  const [active, setActive] = useState(false)

  const [ingridients, setIngridiensts] = useState([])
  const [newIngridient, setNewIngridient] = useState("")

  const [avatarFile, setAvatarFile] = useState(null)

  function handleActive() {
    setActive(!active)
  }

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngridient() {
    setIngridiensts(prevState => [...prevState, newIngridient])
    setNewIngridient("")
  }

  function handleRemoveIngridient(deleted) {
    setIngridiensts(prevState => prevState.filter(ingridient => ingridient !== deleted))
  }

  function handleAddAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
  }


  async function handleNewDish() {
    const newDishForm = new FormData()

    newDishForm.append("avatar", avatarFile)
    newDishForm.append("name", name)
    newDishForm.append("price", (Number(price.replace(',', '.')).toFixed(2)).replace('.', ','))
    newDishForm.append("category", category)
    newDishForm.append("description", description)
    newDishForm.append("ingridients", ingridients)
    
    await api.post("/dishes", newDishForm).then(() => {
      alert("Prato criado com sucesso")
      handleBack()
    })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  useEffect(() => {
    if (!name || !price || !description || newIngridient) {
      setDisable(true)
    }
    else {
      setDisable(false)
    }

  }, [name, price, description, newIngridient])

  return (
    <Container>

      <Header onHandleActive={handleActive} />

      <Menu
        enable={active}
        onHandleActive={handleActive}
        isAdmin={1}
      />


      <Menu
        enable={active}
        onHandleActive={handleActive}
        isAdmin={1}
      />



      <Content>

        <ButtonText icon={IoIosArrowBack} size={22} title="voltar" onClick={handleBack} />
        <h2>Novo Prato</h2>

        <Row>
          <div className="InputWrapper">
            <label>Imagem do prato</label>
            <div className="field">
              <label htmlFor="dishImage"> <FiUpload size={24} /> <p>Selecione imagem</p> </label>
              <input
                id="dishImage"
                type="file"
                onChange={handleAddAvatar} />
            </div>
          </div>

          <div className="InputWrapper">
            <label>Nome</label>
            <Input
              isDish={true}
              placeholer="Ex.: Salada Ceaser"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="InputWrapper">
            <label>Categoria</label>
            <div className="stylingSelect">
              <select id="form-category"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>

        </Row>

        <Row>
          <div className="InputWrapper">
            <label> Ingredientes</label>
            <div className="field">
              {
                ingridients.map((ingridient, index) => (
                  <NoteItem
                    key={String(index)}
                    value={ingridient}
                    onClick={() => handleRemoveIngridient(ingridient)}
                  />
                ))
              }

              <NoteItem
                isNew={true}
                value={newIngridient}
                placeholder="Adicionar"
                onChange={e => setNewIngridient(e.target.value)}
                onClick={handleAddIngridient}
              />
            </div>
          </div>


          <div className="InputWrapper">
            <label> Preço</label>
            <Input
              isDish={true}
              placeholer="R$ 00,00"
              type="text"
              onChange={e => setPrice(e.target.value)} />
          </div>
        </Row>

        <div className="InputWrapper">
          <label>Descrição</label>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
          />
        </div >

        <Save>
          <Button title="Salvar Alterações" onClick={handleNewDish} disabled={disable} />
        </Save>

      </Content >

      <Footer>

      </Footer>
    </Container >
  )


}