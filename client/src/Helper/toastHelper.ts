import { toast } from "react-toastify";

export const toastSuccess = (
  message: string,
  toastErrorOptions: Object = {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
  }
) => {
  toast.success(message, toastErrorOptions);
};

export const toastError = (
  message: string,
  toastErrorOptions: Object = {
    position: "top-center",
    hideProgressBar: false,
    autoClose: 2500,
  }
) => {
  toast.error(message, toastErrorOptions);
};

export const toastWarning = (
  message: string,
  toastWarningOptions: Object = {
    position: "top-center",
    hideProgressBar: false,
    autoClose: 2000,
  }
) => {
  toast.warning(message, toastWarningOptions);
};
