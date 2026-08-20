export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      className={className}
      role="img"
      aria-label="Artur Butsch, ARAG-Vertriebspartner"
    >
      <path
        d="M20 3L35 9V19C35 29 29 37 20 41C11 37 5 29 5 19V9L20 3Z"
        className="fill-primary"
      />
      <path
        d="M20 3L35 9V19C35 29 29 37 20 41V3Z"
        className="fill-primary-foreground/10"
      />
      <path
        d="M12 28L18 14H21.5L27.5 28H24.2L23 25H16.4L15.2 28H12ZM17.4 22.4H22L19.7 16.9L17.4 22.4Z"
        className="fill-primary-foreground"
      />
    </svg>
  )
}
