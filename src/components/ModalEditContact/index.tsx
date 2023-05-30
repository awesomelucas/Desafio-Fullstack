import { Dispatch, SetStateAction, useEffect } from "react"
import { UpdateContactData, schema } from "./validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { Contact } from "../../pages/Dashboard"
import { Modal } from "../Modal"
import { Button } from "../Button/buttons"

interface ModalEditContactProps {
  contact: Contact
  toggleModal: () => void
  setContact: Dispatch<SetStateAction<Contact[]>>
}

export const ModalEditContact = ({ contact, toggleModal, setContact }: ModalEditContactProps) => {
  const { register, handleSubmit} = useForm<UpdateContactData>({
    resolver: zodResolver(schema)
  })

  const update = async (data: UpdateContactData) => {
    console.log({...contact, ...data})
    const response = await api.patch<Contact>(`/contact/${contact.id}`, {...contact, ...data})

    toggleModal()
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }



  return (
    <Modal toggleModal={toggleModal}>
      <h1>Editar</h1>
      <form onSubmit={handleSubmit(update)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" defaultValue={contact.name} {...register('name')} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" defaultValue={contact.email} {...register('email')} />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" defaultValue={contact.phone} {...register('phone')} />

        <Button type="submit" typeButton="att">Editar</Button>
      </form>
    </Modal>
  )
}