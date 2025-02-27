import type { WalletsModal, WalletsModalState } from "@tonconnect/ui";
import { useEffect, useState } from "react";
import { useTonConnectUI } from "./useTonConnectUI";

/**
 * Use it to get access to the open/close modal functions.
 */
export function useTonConnectModal(): Omit<WalletsModal, "onStateChange"> {
  const [tonConnectUI] = useTonConnectUI();
  const [state, setState] = useState(tonConnectUI?.modal.state || null);

  useEffect(() => {
    if (tonConnectUI) {
      setState(tonConnectUI.modal.state);
      return tonConnectUI.onModalStateChange((value: WalletsModalState) => {
        setState(value);
      });
    }
  }, [tonConnectUI]);

  return {
    state: state,
    open: () => tonConnectUI?.modal.open(),
    close: () => tonConnectUI?.modal.close(),
  };
}
