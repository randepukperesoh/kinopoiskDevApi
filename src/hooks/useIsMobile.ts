import { useWindowSize } from "@uidotdev/usehooks";

export const useIsMobile = () => {
  const width = useWindowSize().width;
  const isMobile = !!width && width < 675;
  return { isMobile };
};
