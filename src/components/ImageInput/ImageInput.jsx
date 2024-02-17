export default function ImageInput({ handleChange }) {
  const handleFileChange = (e) => {
    handleChange({ target: { name: 'imageFile', value: e.target.files[0] } })
  }
  return (
    <>
      <label htmlFor="fileInput">Upload your photo</label>
      <input
        type="file"
        name="imageFile"
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/jfif"
      />
    </>
  )
}
