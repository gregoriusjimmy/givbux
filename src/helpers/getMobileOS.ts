export const getMobileOS = (): "ios" | "android" | "other" => {
  const userAgent =
    typeof window !== "undefined"
      ? navigator.userAgent || navigator.vendor
      : "";

  if (/android/i.test(userAgent)) return "android";
  if (
    /iPad|iPhone|iPod/.test(userAgent) &&
    typeof window !== "undefined" &&
    "MSStream" in window === false
  ) {
    return "ios";
  }

  return "other";
};
