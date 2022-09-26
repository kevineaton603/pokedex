const PokeballSpinner: React.FC<
  Omit<React.HTMLAttributes<HTMLImageElement>, "src">
> = ({ className, ...props }) => {
  return (
    <img
      {...props}
      className={`motion-safe:animate-spin-slow ${className}`}
      src="https://cdn-icons-png.flaticon.com/512/743/743977.png"
      alt="pokeball"
    />
  );
};

export default PokeballSpinner;
