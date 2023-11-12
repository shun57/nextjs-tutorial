import React from "react";
import useCookieConsentDialog from "./hooks";
import CookieConsentDialog from ".";

const CookieConsentDialogContainer = () => {
  const cookieConsentDialog = useCookieConsentDialog();

  return (
    <CookieConsentDialog
      showDialog={cookieConsentDialog.showDialog}
      handleAccept={cookieConsentDialog.handleAccept}
      handleDeny={cookieConsentDialog.handleDeny}
    />
  );
};

export default CookieConsentDialogContainer;
