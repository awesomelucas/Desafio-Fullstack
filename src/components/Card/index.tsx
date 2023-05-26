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

  const updateStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const response = await api
      .patch(`tasks/${contact.id}`, { status: event.target.value })

  }


  return (
    <Container>
      <Button typeButton="att" onClick={toggleModal}>Editar</Button>
      {
        isOpenModal && <ModalEditContact contact={contact} toggleModal={toggleModal} setContact={setContact} />
      }
      <h1>{contact.name}</h1>
      <Button typeButton="delete">X</Button>
    </Container>
  )
}