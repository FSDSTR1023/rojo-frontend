export default function ImageInput({ formData, imageUrl, handleChange }) {
  const handleFileChange = (e) => {
    handleChange({ target: { name: 'imageFile', value: e.target.files[0] } })
  }
  return (
    <div>
      <label htmlFor="fileInput">Upload your photo</label>
      <input
        type="file"
        name={imageUrl}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/jfif"
      />
    </div>
  )
}
