  export function passwordStrength(password: string) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Z-a-z0-9]/.test(password)) score++;

    return score;
  }

  export function strengthLavel(score: number) {
    if(score <= 2) return {label: "Weak", color: "text-red-400"};
    if(score === 3) return {label: "Medium", color: "text-yellow-400"};
    if(score >= 4) return {label: "Strong", color: "text-green-400"};
    return null;
  }