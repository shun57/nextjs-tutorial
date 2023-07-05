import { useState, useEffect, useCallback } from "react";

const useCookieConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowDialog(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem("cookieConsent", "true");
    setShowDialog(false);
  }, []);

  const handleDeny = useCallback(() => {
    localStorage.setItem("cookieConsent", "true");
    setShowDialog(false);
  }, []);

  return {
    showDialog,
    handleAccept,
    handleDeny,
  };
};

export default useCookieConsentDialog;
