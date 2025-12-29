export const rules =
  [
    {
      label: "Must Have at least 8 Characters!",
      test: (p: string) => p.length >= 8
    },
    {
      label: "At least one uppercase letter",
      test: (p: string) => /[A-Z]/.test(p)
    },
    {
      label: "At least one lowercase letter",
      test: (p: string) => /[a-z]/.test(p)

    },
    {
      label: "At least one number",
      test: (p: string) => /\d/.test(p)
    },
    {
      label: "At least one special character",
      test: (p: string) => /[^A-Za-z0-9]/.test(p)
    },
  ]