import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ModalAddContact } from "../../components/ModalAddContact";
import { Container, ContainerNoventaHeader } from "../../components/Container/style";
import { Button } from "../../components/Button/buttons";
import { Card } from "../../components/Card";
import { jsPDF } from "jspdf";

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

export const Dashboard = () => {
  const [contact, setContact] = useState<Contact[]>([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const doc = new jsPDF()

 
  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>('/contact')

      setContact(response.data)

    })()
  }, [])

  const toggleModal = () => setIsOpenModal(!isOpenModal)
  const renderBoard = (contactToRender: Contact[]) =>
    contactToRender.map(contact => <Card key={contact.id} contact={contact} setContact={setContact} />)

    const print = ()=>{
      

      doc.text(contact.map((contact, index) => `Contato N-${index+1} -- ${contact.name} // ${contact.email} // ${contact.phone}` ),10,10)
      doc.save('contatos.pdf')
      
    }
    

  return (
    <Container>
      <ContainerNoventaHeader>
        <Button typeButton="primario" onClick={toggleModal}>New</Button>
        <Button typeButton="primario" onClick={print}>Imprimir</Button>
      </ContainerNoventaHeader>

      {
        isOpenModal && <ModalAddContact toggleModal={toggleModal} setContact={setContact}  />
      }

      <main>
        {renderBoard(contact)}
      </main>
    </Container>
  )
}