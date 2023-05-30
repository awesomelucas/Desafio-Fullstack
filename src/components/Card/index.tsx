import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"
import { api } from "../../services/api"
import { Button } from "../Button/buttons"
import { ModalEditContact } from "../ModalEditContact"

interface CardProps {
  contact: Contact
  setContact: Dispatch<SetStateAction<Contact[]>>
}

export const Card = ({ contact, setContact }: CardProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleModal = () => setIsOpenModal(!isOpenModal)

  const del = async () => {
    
    const response = await api.delete<Contact>(`/contact/${contact.id}`)

    setTimeout(() => {
      window.location.reload()
    }, 500);

  }
  return (
    <Container>
      <Button typeButton="att" onClick={toggleModal}>Editar</Button>
      {
        isOpenModal && <ModalEditContact contact={contact} toggleModal={toggleModal} setContact={setContact}/>
      }
      <h1>{contact.name}</h1>
      <Button onClick={del} typeButton="delete">X</Button>
    </Container>
  )
}