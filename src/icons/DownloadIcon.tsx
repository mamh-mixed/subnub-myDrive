interface DownloadIconProps {
  className?: string;
}

const DownloadIcon = (props: DownloadIconProps) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g id="cloud-computing">
        <path
          id="Combined Shape"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.11653 12.3601C3.15829 12.3694 3.19928 12.3733 3.24104 12.3733C3.50784 12.3733 3.74835 12.1872 3.80712 11.9139C3.87595 11.5985 3.6772 11.2871 3.36477 11.2185C2.06635 10.9335 1.16 9.81067 1.16 8.48769C1.16 6.94199 2.42595 5.68441 4.04453 5.68441C4.33376 5.68441 4.57813 5.47027 4.61912 5.18294C4.94392 2.8936 6.94685 1.16803 9.28 1.16803C11.1058 1.16803 12.7793 2.22549 13.5418 3.86073C13.6331 4.0554 13.8233 4.18388 14.036 4.19556C15.9229 4.29601 17.4 5.8495 17.4 7.73158C17.4 9.22432 16.455 10.5644 15.0483 11.0667C14.7467 11.1749 14.5882 11.5082 14.6957 11.8127C14.8031 12.1171 15.1349 12.2768 15.4365 12.1685C17.3049 11.5012 18.56 9.71879 18.56 7.73236C18.56 5.34413 16.7759 3.3538 14.4389 3.06024C13.4274 1.19061 11.4391 0 9.28 0C6.53853 0 4.16053 1.91946 3.55965 4.53897C1.56213 4.74999 0 6.44052 0 8.48769C0 10.3643 1.28141 11.9567 3.11653 12.3601ZM8.86635 16.9206C8.9744 17.0381 9.12354 17.1043 9.28029 17.1043C9.43704 17.1043 9.58618 17.0381 9.69347 16.9206L13.3078 12.9781C13.4654 12.8062 13.5087 12.5539 13.4189 12.3371C13.3291 12.1202 13.1229 11.9791 12.8947 11.9791H11.1826V8.62797C11.1826 8.0847 10.7557 7.64235 10.2314 7.64235H8.32914C7.80487 7.64235 7.37799 8.0847 7.37799 8.62797V11.9791H5.66592C5.43765 11.9791 5.23068 12.1194 5.14089 12.3371C5.0511 12.5547 5.09523 12.807 5.25198 12.9781L8.86635 16.9206Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default DownloadIcon;