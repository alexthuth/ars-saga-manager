import React from 'react';

function Modal({ isOpen, onClose, title, children, confirmText, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-dark-brown">{title}</h3>
          <div className="mt-2 px-7 py-3">
            {children}
          </div>
          <div className="items-center px-4 py-3">
            {onConfirm && (
              <button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-24 mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={onConfirm}
              >
                {confirmText || 'Confirm'}
              </button>
            )}
            <button
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-24 ml-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;