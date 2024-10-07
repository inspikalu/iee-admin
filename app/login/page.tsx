"use client"
import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { FiMail } from 'react-icons/fi'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { baseBackendUrl } from '../const'
import { useLoginContext } from '@/contexts/LoginContext'
import Alert from '@/components/Alert'
import "../globals.css"
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [isPassShowing, setIsPassShowing] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState({
    message: "",
    error: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const context = useLoginContext()
  const handleChange = function (field: string, value: string) {
    const newValue = {
      ...formData,
      [field]: value
    }
    setFormData(newValue)
  }
  const handleOpenAlert = function (message: string, error = false) {
    setAlertMessage({
      message,
      error
    })
    setAlertVisible(true)
  }
  const handleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post(`${baseBackendUrl}/login`, formData)
      const token = response.data.token
      context.setUserData({ loggedIn: true, token })
      handleOpenAlert("Logged In successfully")
      setIsLoading(false)
      setTimeout(() => router.push("/")
        , 700)
      console.log(context)

    } catch (err) {
      if (err?.response) {
        console.log(err?.response, "This is the error")
        handleOpenAlert(`Log In failed: ${err?.response.data.message}`, true)
        setIsLoading(false)
      }
    }

  }
  return (
    <div className='h-screen w-full flex items-center justify-center bg-white'>
      <Alert
        message={alertMessage.message}
        error={alertMessage.error}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
      <form onSubmit={e => handleSubmit(e)} className='flex flex-col items-center justify-center gap-2'>
        <Image src={'/logo.jpeg'} alt='Logo' width={100} height={40} />
        <h2 className='text-xl font-bold py-3 text-black'>Login Into the Admin Dashboard</h2>
        <label className="input rounded-none input-bordered flex items-center gap-2 bg-gray-200 text-green-500">
          <FiMail />
          <input
            type="email"
            required
            className="grow text-black"
            placeholder="Email"
            value={formData.email}
            onChange={e => handleChange("email", e.target.value)}
          />
        </label>
        <label className="input rounded-none input-bordered flex items-center gap-2 bg-gray-200 text-green-500">
          <input
            type={`${isPassShowing ? "text" : "password"}`}
            className="grow text-black"
            placeholder="Password" value={formData.password}
            onChange={e => handleChange("password", e.target.value)}
          />
          <div onClick={() => setIsPassShowing(!isPassShowing)}>
            {isPassShowing ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </label>
        <button
          className={`btn rounded-none bg-green-600 hover:bg-green-500 border-none text-white disabled:text-black`}
          type='submit'
          disabled={isLoading}
        >
          {!isLoading ? "Login" : "Loading ..."}
        </button>
      </form>
    </div>
  )
}

