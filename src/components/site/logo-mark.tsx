export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Artur Butsch Versicherungsmakler"
    >
      <rect width="40" height="40" rx="11" className="fill-primary" />
      <path
        d="M12 27L18 13H21.5L27.5 27H24.2L23 24H16.4L15.2 27H12ZM17.4 21.4H22L19.7 15.9L17.4 21.4Z"
        className="fill-primary-foreground"
      />
    </svg>
  )
}
