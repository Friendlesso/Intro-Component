type RulesProps = {
  ruleStatus: {
    label: string;
    passed: boolean;
  }[];
  showRules: boolean;
}

export function PasswordRules({ ruleStatus, showRules }: RulesProps) {

  return (
    <div
      className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${showRules
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0'
        }
          `}
    >
      {ruleStatus.map((rule, index) => (
        <p key={index} className={` mt-1 ${rule.passed ? "text-green-500" : "text-gray-500"}`}>
          {rule.passed ? "✔" : "✖"} {rule.label}
        </p>
      ))}
    </div>
  )
}