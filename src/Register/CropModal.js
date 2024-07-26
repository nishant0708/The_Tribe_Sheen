import React from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-easy-crop';

const CropModal = ({ image, crop, zoom, onCropChange, onZoomChange, onCropComplete, onCancel, onSave, isLoading }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="crop-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="modal-actions">
          <button onClick={onCancel} disabled={isLoading}>Cancel</button>
          <button onClick={onSave} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Confirm Crop'}
          </button>
        </div>
      </div>
    </div>
  );
};

CropModal.propTypes = {
  image: PropTypes.string.isRequired,
  crop: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  onCropChange: PropTypes.func.isRequired,
  onZoomChange: PropTypes.func.isRequired,
  onCropComplete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CropModal;