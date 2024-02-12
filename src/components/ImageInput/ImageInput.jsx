export default function ImageInput({ formData, handleChange }) {
  const handleFileChange = (e) => {
    handleChange({ target: { name: 'imageFile', value: e.target.files[0] } })
  }
  return (
    <>
      <label htmlFor="fileInput">Upload your photo</label>
      <input
        type="file"
        name={formData.imageUrl}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/jfif"
      />
    </>
  )
}
