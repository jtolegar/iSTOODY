interface Props {
  accent: string;
  accentSoft: string;
  children: React.ReactNode;
}
export function SubjectAccent({ accent, accentSoft, children }: Props) {
  return (
    <div style={{ "--accent": accent, "--accent-soft": accentSoft } as React.CSSProperties}>
      {children}
    </div>
  );
}
