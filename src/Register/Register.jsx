import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './register.css';

const Register = () => {
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
        photoUrls: {
            frontFacing: null,
            leftProfile: null,
            rightProfile: null,
        },
        idProof: null,
        description: '',
        confidentSize: '',
        auditionDate: '',
    });

    const [fileNames, setFileNames] = useState({
        frontFacing: '',
        leftProfile: '',
        rightProfile: '',
        idProof: '',
    });

    const onDrop = (acceptedFiles, photoType) => {
        const file = acceptedFiles[0];
        setFormData((prevState) => ({
            ...prevState,
            photos: {
                ...prevState.photos,
                [photoType]: file,
            },
            photoUrls: {
                ...prevState.photoUrls,
                [photoType]: URL.createObjectURL(file),
            },
        }));
        setFileNames((prevState) => ({
            ...prevState,
            [photoType]: file.name,
        }));
    };

    const onDropIdProof = (acceptedFiles) => {
        setFormData((prevState) => ({
            ...prevState,
            idProof: acceptedFiles[0],
        }));
        setFileNames((prevState) => ({
            ...prevState,
            idProof: acceptedFiles[0].name,
        }));
    };

    const { getRootProps: getFrontProps, getInputProps: getFrontInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'frontFacing'),
    });

    const { getRootProps: getLeftProps, getInputProps: getLeftInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'leftProfile'),
    });

    const { getRootProps: getRightProps, getInputProps: getRightInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => onDrop(acceptedFiles, 'rightProfile'),
    });

    const { getRootProps: getIdProps, getInputProps: getIdInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: onDropIdProof,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSizeSelect = (size) => {
        setFormData({ ...formData, confidentSize: size });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        return () => {
            // Cleanup function to revoke object URLs
            Object.values(formData.photoUrls).forEach(url => {
                if (url) URL.revokeObjectURL(url);
            });
        };
    }, [formData.photoUrls]);

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
                        <div className='name-category'>
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
                                <option value="Ms">Ms</option>
                            </select>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-input flex-child"
                                placeholder='Full Name'
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
                                placeholder='Age'
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
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder='Contact Number'
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder='Email'
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
                                placeholder='Height in cm'
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
                                placeholder='Weight in kg'
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
                                placeholder='Country'
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
                                placeholder='State'
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
                                placeholder='City'
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
                                placeholder='Describe Yourself'
                                required
                            />
                        </div>

                        <div className='photos full-width'>
                            <label className="photo-title">Upload Your Photos </label>
                            <div className='drop-container'>
                                {/* Front Facing */}
                                <div className="form-field">
                                    <label className="form-label">Front Facing</label>
                                    <div {...getFrontProps()} className="dropzone form-input">
                                        <input {...getFrontInputProps()} required />
                                        {formData.photoUrls.frontFacing ? (
                                            <img
                                                src={formData.photoUrls.frontFacing}
                                                alt="Front Facing Preview"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        ) : (
                                            <p>
                                                <span className='pinktxt'>
                                                    Browse Files <br />
                                                </span>
                                            </p>
                                        )}
                                        <p>
                                            Drag n drop a file here
                                        </p>
                                    </div>
                                </div>

                                {/* Left Profile */}
                                <div className="form-field">
                                    <label className="form-label">Left Profile</label>
                                    <div {...getLeftProps()} className="dropzone form-input">
                                        <input {...getLeftInputProps()} required />
                                        {formData.photoUrls.leftProfile ? (
                                            <img
                                                src={formData.photoUrls.leftProfile}
                                                alt="Left Profile Preview"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        ) : (
                                            <p>
                                                <span className='pinktxt'>
                                                    Browse Files <br />
                                                </span>
                                            </p>
                                        )}
                                        <p>
                                            Drag n drop a file here
                                        </p>
                                    </div>
                                </div>

                                {/* Right Profile */}
                                <div className="form-field">
                                    <label className="form-label">Right Profile</label>
                                    <div {...getRightProps()} className="dropzone form-input">
                                        <input {...getRightInputProps()} required />
                                        {formData.photoUrls.rightProfile ? (
                                            <img
                                                src={formData.photoUrls.rightProfile}
                                                alt="Right Profile Preview"
                                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                            />
                                        ) : (
                                            <p>
                                                <span className='pinktxt'>
                                                    Browse Files <br />
                                                </span>
                                            </p>
                                        )}
                                        <p>
                                            Drag n drop a file here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form-field full-width">
                            <label className="form-label">ID Proof</label>
                            <div {...getIdProps()} className="dropzone form-input idproof">
                                <input {...getIdInputProps()} required />
                                <p>
                                    <span className='pinktxt'>
                                        Browse Files <br />
                                    </span>
                                    Drag n drop a file here
                                </p>
                                {fileNames.idProof && <p>Selected file: {fileNames.idProof}</p>}
                            </div>
                        </div>

                        <div className="">
                            <label className="form-label day">Which day would be suitable to you for audition:</label>
                            <input
                                type="date"
                                name="auditionDate"
                                value={formData.auditionDate}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label day">What size do you feel confident in:</label>
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
                        <div className="form-field">
                            <p className="form-label day">Registration Fee: <span className='black'>Rs. 200/-</span></p>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div >
        </div >
    );
};

export default Register;
