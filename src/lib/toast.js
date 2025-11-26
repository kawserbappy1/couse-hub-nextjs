// src/lib/toast.js
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  background: "#1e293b", // slate-800 (dark mode friendly)
  color: "#e2e8f0", // slate-200
  iconColor: "#10caf7", // sky-500
  customClass: {
    popup: "rounded-2xl shadow-2xl",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
