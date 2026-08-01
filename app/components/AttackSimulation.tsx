/**
 * components/AttackSimulation.tsx
 * Warning-tinted card showing the realistic attack consequence narrative.
 */

interface Props {
  attack_simulation: string;
}

export default function AttackSimulation({ attack_simulation }: Props) {
  return (
    <div
      style={{
        padding: "1.125rem 1rem",
        border: "1px solid var(--color-warning)",
        borderRadius: "0.5rem",
        backgroundColor: "var(--color-warning-bg)",
      }}
    >
      <p
        className="label-upper"
        style={{ color: "var(--color-warning)", marginBottom: "0.25rem" }}
      >
        If you followed the request
      </p>
      <h3
        style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--color-text-primary)",
          marginBottom: "0.625rem",
        }}
      >
        Possible attack chain
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--color-text-secondary)",
          lineHeight: 1.7,
        }}
      >
        {attack_simulation}
      </p>
    </div>
  );
}
