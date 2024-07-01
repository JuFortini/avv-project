interface GradientImageProps {
  image: string;
}

export function GradientImage({ image }: GradientImageProps): JSX.Element {
  return (
    <div className="flex-1 relative max-h-full w-full">
      <div
        className="w-full h-full min-h-56 sm:min-h-80 lg:min-h-max bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="w-full h-full absolute z-10 bg-gradient-to-t from-slate-50 to-transparent to-60% top-0" />
    </div>
  );
}
