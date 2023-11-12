import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Button from "../../atoms/Button";

const CookieConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setShowDialog(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowDialog(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && (
        <div className={styles.cookieContent}>
          <p>
            当サイトはクッキー(Cookie)を使用します。詳細は「プライバシーポリシー」をご覧ください。
          </p>
          <Button className={styles.cookieAgreeBtn} onClick={handleAccept}>
            同意する
          </Button>
          <Button className={styles.cookieDenyBtn} onClick={handleDeny}>
            拒否する
          </Button>
        </div>
      )}
    </>
  );
};

export default CookieConsentDialog;
