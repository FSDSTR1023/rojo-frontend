import axios from './axios'

export function prepareImageData(imageFile) {
  const imageData = new FormData()
  imageData.append('file', imageFile)
  imageData.append('upload_preset', 'zfyebhwz')
  return imageData
}

export async function uploadImageToCloudinary(imageData) {
  try {
    const response = await axios.post(import.meta.env.VITE_CLOUDINARY_URL, imageData, {
      withCredentials: false,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data.secure_url
  } catch (error) {
    console.error('Error al subir la imagen a Cloudinary:', error)
    throw error
  }
}
