import { toast } from 'react-toastify';

export const toastSuccess = (message : any, toastSuccessOptions : any) => {
  toastSuccessOptions = {
    position: 'top-right',
    hideProgressBar: false,
    autoClose: 2000,
  };
  toast.success(message, toastSuccessOptions);
};

export const toastError = (message : any, toastErrorOptions : any) => {
  toastErrorOptions = {
    position: 'top-center',
    hideProgressBar: false,
    autoClose: 2500,
  };
  toast.error(message, toastErrorOptions);
};

export const toastWarning = (message : any, toastWarningOptions : any) => {
  toastWarningOptions = {
    position: 'top-center',
    hideProgressBar: false,
    autoClose: 2000,
  };
  toast.warning(message, toastWarningOptions);
};