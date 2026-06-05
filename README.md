# CyberArk Safe Ownership Gap Mapper

CyberArk Safe Ownership Gap Mapper is a Kinetic Gain platform-signal repo for **CyberArk**. It turns synthetic privileged access governance signals into a board-ready view of exposure, savings, investment priority, and the story leaders can tell.

## Board question

> Which CyberArk safes are business-critical but still lack clean owner, reviewer, or rotation evidence?

## What it scores

- **Shared safe without accountable owner** — ownership; owner: Identity security; next action: Assign safe owner and reviewer group before next certification
- **Rotation SLA exception cluster** — rotation; owner: PAM operations; next action: Route stale credentials into remediation queue
- **Service account review gap** — review; owner: Access governance; next action: Attach approval evidence to privileged service accounts

## Run locally

`ash
npm test
npm start
npm start -- --json
`

## Example output

`	ext
# CyberArk Safe Ownership Gap Mapper
CyberArk: watch posture, risk score from synthetic signals, recoverable or protected value surfaced for executive review.
`

## Data posture

This repo uses synthetic demonstration data only. It does not connect to live CyberArk tenants, export customer records, or store credentials.

## Portfolio connection

- Platform signal: $(System.Collections.Hashtable.Platform)
- Domain: $(System.Collections.Hashtable.Domain)
- Live surface family: [https://cyberark.kineticgain.com/](https://cyberark.kineticgain.com/)
- Apex: [https://kineticgain.com/](https://kineticgain.com/)
- Portfolio: [https://portfolio.kineticgain.com/](https://portfolio.kineticgain.com/)
