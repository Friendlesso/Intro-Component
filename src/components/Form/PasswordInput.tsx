import { useState } from "react";
import type { InputProps } from "../../types/InputTypes";
import { rules } from "../../utils/passwordRules";
import { passwordStrength, strengthLavel } from "../../utils/score";
import { PasswordRules } from "./PasswordRules";

export function PasswordInput({ type, label, id, value, setValue, minLength, validation }: InputProps) {
  const [error, setError] = useState("");
  const [strength, setStrength] = useState<{ label: string; color: string; } | null>(null);
  const [ruleStatus, setRuleStatus] = useState<{ label: string; passed: boolean }[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showRules, setShowRules] = useState(false);

  function getRuleStatus(password: string) {
    return rules.map(rule => ({
      label: rule.label,
      passed: rule.test(password)
    }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Uptade the strength 
    const score = passwordStrength(inputValue);
    setStrength(strengthLavel(score));

    setRuleStatus(getRuleStatus(inputValue))

    if (inputValue.length === 0 || (validation && validation.test(inputValue))) {
      setError("")
    }
  }

  function handleBlur() {
    if (!validation) return;
    if (value.length === 0) return;
    if (value.length < minLength || !validation.test(value)) {
      setError(`Please provide a valid ${label}!`)
    } else {
      setError("")
    }
  }

  return (
    <>
      <div className="relative flex flex-col">
        <input
          id={id}
          type={showPassword ? "text" : `${type}`}
          required
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          minLength={minLength}
          className=
          {`
            w-full 
            py-3 px-4 
            rounded-lg 
            border-2 
            outline-none
            ${error
              ? 'border-red-400'
              : 'border-(--purple-300) '
            }
          `}
        />
        <label
          htmlFor={id}
          className=
          {`
          absolute  left-3 top-1/2
          transition-all duration-150
          px-2
          rounded-2xl
          select-none
          ${value
              ? '-translate-y-[175%] bg-white text-sm '
              : '-translate-y-1/2'
            }
            ${error
              ? 'text-red-300'
              : 'text-gray-500'
            }
        `}
        >
          {label}
        </label>
        <div
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Show Password"
          onClick={() => {
            if (value.length === 0) {
              setShowPassword(false)
            } else {
               setShowPassword(prev => !prev)
            }

          }}
        >
          <i className="fa-solid fa-eye text-lg text-gray-400 hover:text-black"></i>
        </div>
      </div>
      <div className="text-sm flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p>Password Strength</p>
            <i
              onClick={() => {
                if (error) {
                  setShowRules(prev => !prev)
                } else {
                  return null;
                }
              }}
              className={`fa-solid fa-caret-down text-lg ${error ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            ></i>
          </div>
          <p className={`${strength?.color}`}>{strength?.label}</p>
        </div>
        {error && (
          <PasswordRules
            showRules={showRules}
            ruleStatus={ruleStatus}
          />
        )}

      </div>
      {/* {error && <p className="text-right text-sm text-red-400">{error}</p>} */}
    </>
  )
}
