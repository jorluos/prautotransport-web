import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LockIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  origen: string;
  destino: string;
  tipoVehiculo: string;
}

interface FormErrors {
  nombre: boolean;
  telefono: boolean;
  email: boolean;
  origen: boolean;
  destino: boolean;
  tipoVehiculo: boolean;
}

interface FormTouched {
  nombre: boolean;
  telefono: boolean;
  email: boolean;
  origen: boolean;
  destino: boolean;
  tipoVehiculo: boolean;
}

function QuoteForm() {
  const navigate = useNavigate();

  const origenRef = useRef<HTMLInputElement>(null);
  const destinoRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    origen: "",
    destino: "",
    tipoVehiculo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nombre: true,
    telefono: true,
    email: true,
    origen: true,
    destino: true,
    tipoVehiculo: true,
  });

  const [touched, setTouched] = useState<FormTouched>({
    nombre: false,
    telefono: false,
    email: false,
    origen: false,
    destino: false,
    tipoVehiculo: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (!(window as any).google) return;

    initAutocomplete(origenRef.current, "origen");
    initAutocomplete(destinoRef.current, "destino");
  }, []);

  const initAutocomplete = (element: HTMLInputElement | null, fieldName: keyof FormData) => {
    if (!element || !(window as any).google) return;

    const autocomplete = new (window as any).google.maps.places.Autocomplete(element, {
      types: ["geocode"],
      componentRestrictions: { country: ["us", "pr", "gt", "sv", "ni", "hn"] },
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        setErrors((prev) => ({ ...prev, [fieldName]: true }));
        setTouched((prev) => ({ ...prev, [fieldName]: true }));
      } else {
        const address = place.formatted_address || element.value;
        setFormData((prev) => ({ ...prev, [fieldName]: address }));
        setErrors((prev) => ({ ...prev, [fieldName]: false }));
        setTouched((prev) => ({ ...prev, [fieldName]: true }));
      }
    });
  };

  const validateField = (name: keyof FormData, value: string): boolean => {
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}-?\d{0,4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case "tipoVehiculo":
      case "nombre":
      case "origen":
      case "destino":
        return value.trim() !== "";
      case "telefono":
        return phoneRegex.test(value);
      case "email":
        return emailRegex.test(value);
      default:
        return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    let isValid = true;

    if (name === "telefono") {
      const digits = value.replace(/\D/g, "");
      const limitedDigits = digits.slice(0, 15);

      let formattedNumber = "";
      if (limitedDigits.length <= 3) {
        formattedNumber = `(${limitedDigits}`;
      } else if (limitedDigits.length <= 6) {
        formattedNumber = `(${limitedDigits.slice(0, 3)})-${limitedDigits.slice(3)}`;
      } else if (limitedDigits.length <= 10) {
        formattedNumber = `(${limitedDigits.slice(0, 3)})-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      } else {
        formattedNumber = `(${limitedDigits.slice(0, 3)})-${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 10)}-${limitedDigits.slice(10)}`;
      }
      formattedNumber = formattedNumber.substring(0, 19);

      isValid = validateField(name, formattedNumber);
      setFormData((prevData) => ({ ...prevData, [name]: formattedNumber }));
    } else {
      isValid = validateField(name, value);
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: !isValid }));
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Mark all fields as touched
    setTouched({
      nombre: true,
      telefono: true,
      email: true,
      origen: true,
      destino: true,
      tipoVehiculo: true,
    });

    const { nombre, telefono, email, origen, destino, tipoVehiculo } = formData;

    // Verify all fields
    const nombreValid = validateField("nombre", nombre);
    const telefonoValid = validateField("telefono", telefono);
    const emailValid = validateField("email", email);
    const origenValid = validateField("origen", origen);
    const destinoValid = validateField("destino", destino);
    const tipoVehiculoValid = validateField("tipoVehiculo", tipoVehiculo);

    if (
      !nombreValid ||
      !telefonoValid ||
      !emailValid ||
      !origenValid ||
      !destinoValid ||
      !tipoVehiculoValid
    ) {
      setErrors({
        nombre: !nombreValid,
        telefono: !telefonoValid,
        email: !emailValid,
        origen: !origenValid,
        destino: !destinoValid,
        tipoVehiculo: !tipoVehiculoValid,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            TITLE: nombre,
            EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
            PHONE: [{ VALUE: telefono, VALUE_TYPE: "WORK" }],
            UF_CRM_1470686551: origen,
            UF_CRM_1470686597: destino,
            SOURCE_ID: "Solicitud de cotización Prautotransport",
            UF_CRM_1486142337: tipoVehiculo,
            ASSIGNED_BY_ID: "2", // Jose Garavito ID
          },
        }),
      };

      const response = await fetch("https://carmoversus.com/api/v1/lead", options);
      if (!response.ok) throw new Error("Respuesta de red no válida");

      resetFormStates();
      navigate("/gracias");
    } catch (error) {
      console.error("Error al enviar la solicitud de cotización:", error);
      setSubmitError("Ocurrió un error al enviar tu solicitud. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormStates = () => {
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      origen: "",
      destino: "",
      tipoVehiculo: "",
    });
    setErrors({
      nombre: true,
      telefono: true,
      email: true,
      origen: true,
      destino: true,
      tipoVehiculo: true,
    });
    setTouched({
      nombre: false,
      telefono: false,
      email: false,
      origen: false,
      destino: false,
      tipoVehiculo: false,
    });
  };

  return (
    // Tarjeta del formulario con sombra y bordes muy redondeados
    <div className="w-full max-w-[460px] bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#DDE2EC]/45 flex flex-col gap-5">
      <h3 className="text-[20px] md:text-[22px] font-instrument font-bold text-[#003087]">
        Obtén tu cotización gratis
      </h3>

      {submitError && (
        <div className="p-3 text-xs text-red-700 bg-red-50 rounded-xl border border-red-200">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Cuadrícula de 2 columnas para los inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={() => handleBlur("nombre")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.nombre && errors.nombre ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.nombre && errors.nombre && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Campo obligatorio</span>
            )}
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1">
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              onBlur={() => handleBlur("telefono")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.telefono && errors.telefono ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.telefono && errors.telefono && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Teléfono inválido</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.email && errors.email ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.email && errors.email && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Email inválido</span>
            )}
          </div>

          {/* Origen */}
          <div className="flex flex-col gap-1">
            <input
              ref={origenRef}
              type="text"
              name="origen"
              placeholder="Origen"
              value={formData.origen}
              onChange={handleChange}
              onFocus={() => handleBlur("origen")}
              onBlur={() => handleBlur("origen")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.origen && errors.origen ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.origen && errors.origen && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Ubicación requerida</span>
            )}
          </div>

          {/* Destino */}
          <div className="flex flex-col gap-1">
            <input
              ref={destinoRef}
              type="text"
              name="destino"
              placeholder="Destino"
              value={formData.destino}
              onChange={handleChange}
              onFocus={() => handleBlur("destino")}
              onBlur={() => handleBlur("destino")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.destino && errors.destino ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.destino && errors.destino && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Ubicación requerida</span>
            )}
          </div>

          {/* Tipo de vehículo */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="tipoVehiculo"
              placeholder="Tipo de vehículo"
              value={formData.tipoVehiculo}
              onChange={handleChange}
              onBlur={() => handleBlur("tipoVehiculo")}
              className={`w-full h-11 bg-[#F4F6FA] border ${touched.tipoVehiculo && errors.tipoVehiculo ? "border-red-500" : "border-transparent"
                } rounded-xl px-4 font-instrument text-[14px] text-[#0D1B3E] placeholder-[#8A90A0] focus:outline-none focus:border-[#003087] transition-all`}
            />
            {touched.tipoVehiculo && errors.tipoVehiculo && (
              <span className="text-[11px] text-red-500 font-instrument px-1">Campo obligatorio</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-[#C8102E] hover:bg-[#b00e28] disabled:opacity-60 transition-colors rounded-xl text-white font-instrument font-semibold text-[16px] shadow-sm mt-2 cursor-pointer flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            <span>Obtener cotización</span>
          )}
        </button>
      </form>

      {/* Privacidad de datos */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#5A6070] font-instrument">
        <LockIcon />
        <span>Tus datos están protegidos</span>
      </div>
    </div>
  );
}

export default QuoteForm;
