import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Container, Content, Edit, Row } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';
import { Menu } from '../../components/Header/styles';


import { FiUpload } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'

import { api } from '../../services/api';

export function EditDish() {

  const params = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarChange, setAvatarChange] = useState(false)
  const [active, setActive] = useState(false)



  const [ingridients, setIngridients] = useState([])
  const [newIngridient, setNewIngridient] = useState("")
  
  function handleActive() {
    setActive(!active)
  }

  function handleBack() {
    navigate(-1)
  }

  function handleAddIngridient() {
    setIngridients(prevState => [...prevState, newIngridient])
    setNewIngridient("")
  }

  function handleRemoveIngridient(deleted) {
    setIngridients(prevState => prevState.filter(ingridient => ingridient !== deleted))
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?")
    if (confirm) {
      await api.delete(`dishes/${params.id}`)
      navigate("/")
    }
  }

  async function handleUpdate() {
    await api.put(`/dishes/${params.id}`, { name, price, category, description, ingridients })

    if (avatarFile && avatarChange) {
      try {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        await api.patch(`/dishes/avatar/${params.id}`, fileUploadForm)
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível atualizar o avatar")
        }
      }
    }
    alert("Usuario atualizado com sucesso!")
    navigate("/")
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    setAvatarChange(true)
  }


  useEffect(() => {

    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      const { dish } = response.data
      const requestIngridients = response.data.ingridients
      setName(dish.name)
      setPrice(dish.price)
      setCategory(dish.category)
      setDescription(dish.description)
      setAvatarFile(dish.avatar)

      requestIngridients.map(ingridient => (
        startIngridient(ingridient.name)
      ))
    }

    function startIngridient(name) {
      setIngridients(prevState => [...prevState, name])
    }
    fetchDish()
  }, [])

  return (
    <Container>

      <Header onHandleActive={handleActive} />

      <Menu
        enable={active}
        onHandleActive={handleActive}
        isAdmin={1}
      />

      <Content>

        <ButtonText icon={IoIosArrowBack} size={22} title="voltar" onClick={handleBack} />
        <h2>Editar Prato</h2>

        <Row>
          <div className="InputWrapper">
            <label>Imagem do prato</label>
            <div className="field">
              <label htmlFor="dishImage"> <FiUpload size={24} /> <p>Selecione imagem para alterá-la</p> </label>
              <input
                id="dishImage"
                type="file"
                onChange={handleChangeAvatar} />
            </div>
          </div>

          <div className="InputWrapper">
            <label>Nome</label>
            <Input
              type="text"
              isDish={true}
              placeholer={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="InputWrapper">
            <label>Categoria</label>
            <div className="stylingSelect">
              <select id="form-category"
                value={category}
                onChange={e => setCategory(e.target.value)}>
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
              type="text"
              isDish={true}
              placeholer={`R$ ${price}`}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </Row>

        <div className="InputWrapper">
          <label>Descrição</label>
          <TextArea
            type="text"
            placeholder={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div >

        <Edit>
          <Button title="Excluir Prato" deleted={true} onClick={handleRemove} />
          <Button title="Salvar Alterações" disabled={false} onClick={handleUpdate} />
        </Edit>

      </Content >

      <Footer />
    </Container >
  )


}