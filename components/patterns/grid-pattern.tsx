export function GridPattern() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(79, 70, 229, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(79, 70, 229, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  )
}
