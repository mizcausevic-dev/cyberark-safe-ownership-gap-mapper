export const snapshot = {
  platform: "CyberArk",
  title: "CyberArk Safe Ownership Gap Mapper",
  domain: "Privileged access governance",
  boardQuestion: "Which CyberArk safes are business-critical but still lack clean owner, reviewer, or rotation evidence?",
  liveSurface: "https://cyberark.kineticgain.com/",
  signals: [
  {
    "Confidence": 94,
    "Owner": "Identity security",
    "Recoverable": 0,
    "Severity": 89,
    "Action": "Assign safe owner and reviewer group before next certification",
    "Name": "Shared safe without accountable owner",
    "Area": "ownership"
  },
  {
    "Confidence": 90,
    "Owner": "PAM operations",
    "Recoverable": 0,
    "Severity": 78,
    "Action": "Route stale credentials into remediation queue",
    "Name": "Rotation SLA exception cluster",
    "Area": "rotation"
  },
  {
    "Confidence": 86,
    "Owner": "Access governance",
    "Recoverable": 0,
    "Severity": 73,
    "Action": "Attach approval evidence to privileged service accounts",
    "Name": "Service account review gap",
    "Area": "review"
  }
]
};
