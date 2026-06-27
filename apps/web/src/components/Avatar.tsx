type AvatarProps = {
  avatar?: string;
  online?: boolean;
};

export function Avatar({ avatar, online }: AvatarProps) {
  return (
    <div className="relative shrink-0">
      <div
        className="flex size-12 items-center justify-center rounded-2xl font-semibold bg-primary"
      >
        {avatar ? avatar : (<span className="material-symbols-outlined">person</span>)}
      </div>

      {online && (
        <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-bg bg-emerald-400" />
      )}
    </div>
  );
}