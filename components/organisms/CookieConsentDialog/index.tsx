import React from "react";
import styles from "./index.module.scss";
import Button from "../../atoms/Button";

interface CookieConsentDialogProps {
  showDialog: boolean;
  handleAccept: () => void;
  handleDeny: () => void;
}

const CookieConsentDialog: React.FC<CookieConsentDialogProps> = (
  props: CookieConsentDialogProps
) => {
  const { showDialog, handleAccept, handleDeny } = props;
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
