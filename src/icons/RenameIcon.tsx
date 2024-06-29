interface RenameIconProps {
  className?: string;
}

const RenameIcon = (props: RenameIconProps) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        id="Combined Shape"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.90955 17.1859C8.90955 17.6355 9.27402 18 9.72362 18H16.598L16.622 17.9997C17.0605 17.987 17.4121 17.6275 17.4121 17.1859C17.4121 16.7363 17.0476 16.3719 16.598 16.3719H13.9749V13.2513H17.3668C18.0163 13.2513 18.5427 12.7248 18.5427 12.0754V5.74372C18.5427 5.0943 18.0163 4.56784 17.3668 4.56784H13.9749V1.62814H16.598L16.622 1.62779C17.0605 1.6151 17.4121 1.25564 17.4121 0.81407C17.4121 0.364472 17.0476 0 16.598 0H9.72362L9.69962 0.000347075C9.26112 0.013044 8.90955 0.3725 8.90955 0.81407C8.90955 1.26367 9.27402 1.62814 9.72362 1.62814H12.3467V16.3719H9.72362L9.69962 16.3722C9.26112 16.3849 8.90955 16.7444 8.90955 17.1859ZM13.9749 5.83417V11.9849H17.2764V5.83417H13.9749ZM10.7638 4.56784H1.17588C0.526459 4.56784 0 5.0943 0 5.74372V12.0754C0 12.7248 0.526459 13.2513 1.17588 13.2513H10.7638V11.9849H1.26633V5.83417H10.7638V4.56784ZM2.80402 7.46231H9.31658V10.2663H2.80402V7.46231Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RenameIcon;