import { Dispatch, SetStateAction } from "react"
import { CreateContactData, schema } from "./validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api"
import { Contact } from "../../pages/Dashboard"
import { Modal } from "../Modal"

interface ModalAddContactProps {

  toggleModal: () => void
  setContact: Dispatch<SetStateAction<Contact[]>>
}

export const ModalAddContact = ({ toggleModal, setContact }: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(schema)
  })

  const create = async (data: CreateContactData) => {
    const response = await api.post<Contact>(`/contact`, { ...data})

    setContact(previousContact => [response.data, ...previousContact])
    toggleModal()
  }

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(create)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register('name')} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register('email')} />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" {...register('phone')} />


        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  )
}