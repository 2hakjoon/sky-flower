interface IHeartProps {
  type: "fill" | "stroke";
}

export const Heart = ({ type }: IHeartProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3.05262 11.0113L8.1868 16.4222C9.17262 17.4611 10.828 17.4611 11.8139 16.4222L16.948 11.0113C18.7955 9.06428 18.7955 5.90748 16.948 3.96042C15.1005 2.01336 12.1051 2.01336 10.2576 3.96042V3.96042C10.1178 4.10783 9.88288 4.10783 9.743 3.96042V3.96042C7.8955 2.01336 4.90012 2.01336 3.05262 3.96042C1.20512 5.90748 1.20512 9.06428 3.05262 11.0113Z"
          fill={type === "stroke" ? "none" : "#E3694B"}
          stroke={type === "stroke" ? "#6A6A6A" : "#E3694B"}
          stroke-width="1.5"
        />
      </svg>
    </>
  );
};
