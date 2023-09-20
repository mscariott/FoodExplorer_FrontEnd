import { Container, Content, Show, Menu } from "./styles";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Logo } from "../Logo";
import { ButtonText } from "../ButtonText";
import { Input } from '../Input'
import { Button } from '../Button'

import { FiMenu, FiX, FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceipt } from 'react-icons/pi'

import { api } from "../../services/api";



export function Header({ onHandleActive, isMenu = false, nameValue }) {

  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(0)
  const [title, setTitle] = useState("")


  
  function handleSignOut() {
    signOut()
    navigate("/")
  }


 useEffect(() => {
    async function fetchItens(){
      const itens = await api.get("/itens")
      setQuantity(itens.data)
      setTitle(`Pedidos (${itens.data})`)
    }
    fetchItens()
 }, [])



  return (
    <Container >
      <Content>
        <div className="desktop">
          <Logo isAdmin={user.admin} />
          <Input
            placeholer="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={nameValue}
          />

          {
            user.admin ?

              <Button
                title="Novo Prato"
                onClick={() => navigate("/new")}
              />
              :
              <Button
                title={title}
                icon={PiReceipt}
                size={26}
              />

          }

          <ButtonText
            icon={FiLogOut}
            size={32}
            onClick={handleSignOut}
          />

        </div>

        <div className="mobile">
          {
            isMenu ?
              <Menu>
                <ButtonText icon={FiX} size={34} onClick={onHandleActive} />
                <p>Menu</p>
              </Menu>

              :
              <>
                {
                  user.admin ?
                    <Show>
                      <ButtonText icon={FiMenu} size={34} onClick={onHandleActive} />
                      <Logo isAdmin={user.admin} />
                    </Show>

                    :
                    <Show>
                      <ButtonText icon={FiMenu} size={34} onClick={onHandleActive} />
                      <Logo isAdmin={user.admin} />

                      <div className="cart">
                        <ButtonText icon={PiReceipt} size={34} />
                        <span>{quantity}</span>
                      </div>
                    </Show>
                }
              </>

          }


        </div>
      </Content>
    </Container>
  )
}