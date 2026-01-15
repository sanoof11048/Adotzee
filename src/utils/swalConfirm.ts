import Swal, { SweetAlertIcon } from "sweetalert2";

interface SwalConfirmOptions {
  title?: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: SweetAlertIcon; // ✅ FIXED TYPE
}

export const swalConfirm = async ({
  title = "Are you sure?",
  text = "You won't be able to revert this!",
  confirmText = "Yes",
  cancelText = "Cancel",
  icon = "warning",
}: SwalConfirmOptions): Promise<boolean> => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    confirmButtonColor: "#2563eb",
    cancelButtonColor: "#dc2626",
  });

  return result.isConfirmed;
};
