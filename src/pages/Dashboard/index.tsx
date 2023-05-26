import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ModalAddContact } from "../../components/ModalAddContact";
import { Container } from "../../components/Container/style";
import { Button } from "../../components/Button/buttons";
import { Card } from "../../components/Card";

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

export const Dashboard = () => {
  const [contact, setContact] = useState<Contact[]>([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>('/contact')

      setContact(response.data)
    })()
  }, [])

  const toggleModal = () => setIsOpenModal(!isOpenModal)
  const renderBoard = (contactToRender: Contact[]) =>
    contactToRender.map(contact => <Card key={contact.id} contact={contact} setContact={setContact} />)

  return (
    <Container>
      <header>
        <Button typeButton="add" onClick={toggleModal}>New</Button>
      </header>

      {
        isOpenModal && <ModalAddContact toggleModal={toggleModal} setContact={setContact} />
      }

      <main>
        {renderBoard(contact)}
      </main>
    </Container>
  )
}