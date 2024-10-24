import { ReactNode, useEffect, useState } from "react";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { createPortal } from "react-dom";

import styles from "./PopoverMenu.module.scss";

export const PopoverMenu = ({
  content,
  children,
}: {
  content: ReactNode;
  children: (
    menu: boolean,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
}) => {
  const [isOpen, setisOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setisOpen,
    middleware: [flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={styles.button}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children(isOpen, setisOpen)}
      </button>
      {isOpen &&
        createPortal(
          <div className={styles.wrapper}>
            <FloatingFocusManager context={context} modal={true}>
              <div
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
              >
                {content}
              </div>
            </FloatingFocusManager>
          </div>,
          document.body
        )}
    </>
  );
};
