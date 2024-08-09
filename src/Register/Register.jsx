import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
// import Cropper from 'react-easy-crop';
import CropModal from './CropModal'
import { database, storage } from '../firebaseConfig'
import { ref as storageRefer } from 'firebase/storage'
import { uploadBytes, getDownloadURL } from 'firebase/storage'
import './register.css'
import QR from '../assets/qr.jpg'
import { ref, set, get } from 'firebase/database'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'
const Register = () => {
  function generateUUID() {
    var d = new Date().getTime()
    var d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16
        if (d > 0) {
          r = (d + r) % 16 | 0
          d = Math.floor(d / 16)
        } else {
          r = (d2 + r) % 16 | 0
          d2 = Math.floor(d2 / 16)
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      },
    )
  }

  const [formData, setFormData] = useState({
    category: '',
    name: '',
    age: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    height: '',
    weight: '',
    country: '',
    state: '',
    city: '',
    photos: {
      frontFacing: null,
      leftProfile: null,
      rightProfile: null,
    },
    idProof: null,
    payment: null,
    description: '',
    confidentSize: '',
    auditionDate: '',
    photoUrls: {},
  })

  const [fileNames, setFileNames] = useState({
    frontFacing: '',
    leftProfile: '',
    rightProfile: '',
    idProof: '',
    payment: '',
  })
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentImageType, setCurrentImageType] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showCropModal, setShowCropModal] = useState(false)
  const [idProofPreview, setIdProofPreview] = useState(null)
  const [payment, setPayment] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onDrop = useCallback((acceptedFiles, photoType) => {
    const file = acceptedFiles[0]
    setCurrentImage(URL.createObjectURL(file))
    setCurrentImageType(photoType)
    setShowCropModal(true)
  }, [])

  const onDropIdProof = (acceptedFiles) => {
    const file = acceptedFiles[0]
    setFormData((prevState) => ({
      ...prevState,
      idProof: file,
    }))
    setFileNames((prevState) => ({
      ...prevState,
      idProof: file.name,
    }))
    setIdProofPreview(URL.createObjectURL(file))
  }
  const onDropPayment = (acceptedFiles) => {
    const file = acceptedFiles[0]
    setFormData((prevState) => ({
      ...prevState,
      payment: file,
    }))
    setFileNames((prevState) => ({
      ...prevState,
      payment: file.name,
    }))
    setPayment(URL.createObjectURL(file))
  }

  const { getRootProps: getFrontProps, getInputProps: getFrontInputProps } =
    useDropzone({
      accept: { 'image/*': [] },
      name: 'Front',
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'frontFacing'),
    })

  const { getRootProps: getLeftProps, getInputProps: getLeftInputProps } =
    useDropzone({
      accept: { 'image/*': [] },
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'leftProfile'),
    })

  const { getRootProps: getRightProps, getInputProps: getRightInputProps } =
    useDropzone({
      accept: { 'image/*': [] },
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'rightProfile'),
    })

  const { getRootProps: getIdProps, getInputProps: getIdInputProps } =
    useDropzone({
      accept: { 'image/*': [] },
      onDrop: onDropIdProof,
    })
  const { getRootProps: getPaymentProps, getInputProps: getPaymentInputProps } =
    useDropzone({
      accept: { 'image/*': [] },
      onDrop: onDropPayment,
    })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'contactNumber') {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          contactNumber: 'Please enter a valid 10-digit phone number',
        }))
      } else {
        setErrors((prev) => ({ ...prev, contactNumber: null }))
      }
    }
  }
  const handleSizeSelect = (size) => {
    setFormData({ ...formData, confidentSize: size })
  }

  const uploadImage = async (file, path) => {
    const storageRef = storageRefer(storage, path)
    await uploadBytes(storageRef, file)
    return await getDownloadURL(storageRef)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const requiredFields = [
      'name',
      'age',
      'dateOfBirth',
      'contactNumber',
      'email',
      'height',
      'weight',
      'category',
      'country',
      'state',
      'city',
      'description',
      'confidentSize',
      'auditionDate',
    ]
    let hasErrors = false

    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i]
      if (!formData[field]) {
        alert(
          `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
        )
        hasErrors = true
        break // Stop the loop after the first empty field is found
      }
    }

    const photoFields = ['frontFacing', 'leftProfile', 'rightProfile']
    for (let i = 0; i < photoFields.length; i++) {
      const field = photoFields[i]
      if (!formData.photos[field]) {
        alert(
          `Please upload a photo for ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
        )
        hasErrors = true
        break
      }
    }

    if (!formData.idProof) {
      alert('Please upload an ID proof')
      hasErrors = true
    }

    if (!formData.payment) {
      alert('Please upload a payment proof')
      hasErrors = true
    }

    if (!validatePhoneNumber(formData.contactNumber)) {
      toast.error('Please enter a valid 10-digit phone number')
      hasErrors = true
    }

    if (hasErrors) {
      setIsSubmitting(false)
      return
    }

    try {
      const snapshot = await get(ref(database, 'Registrant'))
      const registrants = snapshot.val()
      const emailExists = Object.values(registrants || {}).some(
        (registrant) => registrant.details.email === formData.email,
      )

      if (emailExists) {
        alert('Email already in use . Please use Different Email')
        setIsSubmitting(false)
        return
      }

      const fullName = formData.name.replace(/\s+/g, '-').toLowerCase()
      const userId = generateUUID()

      // Save form data to Firebase Realtime Database
      await set(
        ref(database, `Registrant/${fullName}-${userId}/details`),
        formData,
      )

      // Upload images to Firebase Storage and get download URLs
      const photoUrls = {}
      for (const [photoType, photo] of Object.entries(formData.photos)) {
        if (photo) {
          const downloadUrl = await uploadImage(
            photo,
            `Registrant/${fullName}-${userId}/${fullName}-${photoType}`,
          )
          photoUrls[`${photoType}Url`] = downloadUrl
        }
      }

      if (formData.idProof) {
        const idProofUrl = await uploadImage(
          formData.idProof,
          `Registrant/${fullName}-${userId}/${fullName}-idproof`,
        )
        photoUrls.idProofUrl = idProofUrl
      }

      if (formData.payment) {
        const paymentUrl = await uploadImage(
          formData.payment,
          `Registrant/${fullName}-${userId}/${fullName}-payment`,
        )
        photoUrls.paymentUrl = paymentUrl
      }

      // Save photo URLs to Firebase Realtime Database
      await set(
        ref(database, `Registrant/${fullName}-${userId}/photoUrls`),
        photoUrls,
      )

      const emailParams = {
        user_name: formData.name,
        user_email: formData.email,
        sendername: 'Nishant Kaushal',
        message:
          'Thank you for your registration. We have received your details and will contact you soon.',
      }

      await emailjs.send(
        'service_b4x5mm9',
        'template_nb89wtt',
        emailParams,
        'pxwCwubANMKDGb28R',
      )

      alert('Registration successful')
      window.location.reload()
    } catch (error) {
      toast.error('Error saving data, please try again.')
      console.error('Error saving data:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCropCancel = () => {
    setShowCropModal(false)
    setCurrentImage(null)
    setCurrentImageType(null)
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', (error) => reject(error))
      image.src = url
    })

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    )

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob)
      }, 'image/jpeg')
    })
  }

  const handleSaveCroppedImage = async () => {
    if (currentImage && croppedAreaPixels) {
      setIsLoading(true)
      try {
        const croppedImageBlob = await getCroppedImg(
          currentImage,
          croppedAreaPixels,
        )
        const croppedImageUrl = URL.createObjectURL(croppedImageBlob)

        setFormData((prevState) => ({
          ...prevState,
          photos: {
            ...prevState.photos,
            [currentImageType]: croppedImageBlob,
          },
          photoUrls: {
            ...prevState.photoUrls,
            [currentImageType]: croppedImageUrl,
          },
        }))

        setShowCropModal(false)
        setCurrentImage(null)
        setCurrentImageType(null)
      } catch (e) {
        console.error('Error cropping image:', e)
      } finally {
        setIsLoading(false)
      }
    }
  }
  useEffect(() => {
    return () => {
      Object.values(formData.photoUrls).forEach((url) => {
        if (url) URL.revokeObjectURL(url)
      })
      if (currentImage) URL.revokeObjectURL(currentImage)
      if (idProofPreview) URL.revokeObjectURL(idProofPreview)
    }
  }, [formData.photoUrls, currentImage, idProofPreview])

  //Phone nmber validation
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/ // Assumes a 10-digit phone number
    return phoneRegex.test(phoneNumber)
  }

  return (
    <div className="registerContainer">
      {/* <div className="">
                <img src="https://blog.planoly.com/hubfs/Imported_Blog_Media/Planoly-Blog-Post-How-to-Use-StoriesEdit-as-a-Beauty-Content-Creator-or-Beauty-Brand-Banner-2.jpg"
                    alt="register" className="registerimg w-full h-96 object-cover" />
            </div> */}
      <div className="regiterform">
        <form onSubmit={handleSubmit} className="vogue-star-form">
          <h2 className="form-title">REGISTER</h2>
          <div className="form-grid">
            <div className="name-category">
              <label className="form-labell">Name</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select smaller-space"
                required
              >
                <option value="">Category</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </select>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input flex-child"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Age"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className={`form-input ${errors.contactNumber ? 'error' : ''}`}
                placeholder="Contact Number"
                required
              />
              {errors.contactNumber && (
                <span className="error-message">{errors.contactNumber}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Height</label>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Height in ft"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Weight in kg"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Country"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="form-input"
                placeholder="State"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="form-input"
                placeholder="City"
                required
              />
            </div>

            <div className="form-field full-width">
              <label className="form-label">Describe Yourself</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="text-input"
                placeholder="Describe Yourself"
                required
              />
            </div>

            <div className="photos full-width">
              <label className="photo-title">Upload Your Photos </label>
              <div className="drop-container">
                {/* Front Facing */}
                <div className="form-field">
                  <label className="form-label">Front Facing</label>
                  <div {...getFrontProps()} className="dropzone form-input">
                    <input {...getFrontInputProps()} required />
                    {formData.photoUrls.frontFacing ? (
                      <>
                        <img
                          src={formData.photoUrls.frontFacing}
                          alt="Front Facing Preview"
                          style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                        <p>Click here to reupload</p>
                      </>
                    ) : (
                      <p>
                        <span className="pinktxt">
                          Browse Files <br />
                        </span>
                        Drag n drop a file here
                      </p>
                    )}
                  </div>
                </div>

                {/* Left Profile */}
                <div className="form-field">
                  <label className="form-label">Left Profile</label>
                  <div {...getLeftProps()} className="dropzone form-input">
                    <input {...getLeftInputProps()} required />
                    {formData.photoUrls.leftProfile ? (
                      <>
                        <img
                          src={formData.photoUrls.leftProfile}
                          alt="Left Profile Preview"
                          style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                        <p>Click here to reupload</p>
                      </>
                    ) : (
                      <p>
                        <span className="pinktxt">
                          Browse Files <br />
                        </span>
                        Drag n drop a file here
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Profile */}
                <div className="form-field">
                  <label className="form-label">Right Profile</label>
                  <div {...getRightProps()} className="dropzone form-input">
                    <input {...getRightInputProps()} required />
                    {formData.photoUrls.rightProfile ? (
                      <>
                        <img
                          src={formData.photoUrls.rightProfile}
                          alt="Right Profile Preview"
                          style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                        <p>Click here to reupload</p>
                      </>
                    ) : (
                      <p>
                        <span className="pinktxt">
                          Browse Files <br />
                        </span>
                        Drag n drop a file here
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {showCropModal && (
              <CropModal
                image={currentImage}
                crop={crop}
                zoom={zoom}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                onCancel={handleCropCancel}
                onSave={handleSaveCroppedImage}
                isLoading={isLoading}
              />
            )}

            <div className="form-field full-width">
              <label className="form-label">ID Proof</label>
              <div {...getIdProps()} className="dropzone form-input idproof">
                <input {...getIdInputProps()} required />
                {idProofPreview ? (
                  <>
                    <img
                      src={idProofPreview}
                      alt="ID Proof Preview"
                      style={{ maxWidth: '100%', maxHeight: '200px' }}
                    />
                    <p>Click here to reupload</p>
                  </>
                ) : (
                  <p>
                    <span className="pinktxt">
                      Browse Files <br />
                    </span>
                    Drag n drop a file here
                  </p>
                )}
                {fileNames.idProof && <p>Selected file: {fileNames.idProof}</p>}
              </div>
            </div>

            <div className="">
              <label className="form-label day">
                Which day would be suitable to you for audition:
              </label>

              <select
                name="auditionDate"
                value={formData.auditionDate}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Pick a date</option>
                <option value="21 August">21 August 2024</option>
                <option value="22 August">22 August 2024</option>
              </select>
            </div>

            <div>
              <label className="form-label day">
                What size do you feel confident in:
              </label>
              <div className="size-selector">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleSizeSelect(size)}
                    className={`size-button ${formData.confidentSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-field full-width">
              <p className="form-label day">
                Registration Fee: <span className="black">Rs. 1000/-</span>
              </p>
            </div>
            <div className="qr-code-section">
              <p className="qr-code-title pinktxt">Scan this QR to pay</p>
              <div className="qr-code-container">
                <img
                  src={QR}
                  alt="QR Code for payment"
                  className="qr-code-image"
                />
              </div>
            </div>

            <div className="form-field full-width">
              <label className="form-label">
                Submit your payment screenshot here:{' '}
              </label>
              <div
                {...getPaymentProps()}
                className="dropzone form-input idproof"
              >
                <input {...getPaymentInputProps()} required />
                {payment ? (
                  <>
                    <img
                      src={payment}
                      alt="Payment Preview"
                      style={{ maxWidth: '100%', maxHeight: '200px' }}
                    />
                    <p>Click here to reupload</p>
                  </>
                ) : (
                  <p>
                    <span className="pinktxt">
                      Browse Files <br />
                    </span>
                    Drag n drop a file here
                  </p>
                )}
                {fileNames.payment && <p>Selected file: {fileNames.payment}</p>}
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
