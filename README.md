# The Robot Apology

![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)
![rank](https://make.fun/badge/rank/u-suga-the-robot-apology-dd96bb59.svg)
![reward](https://make.fun/badge/reward/u-suga-the-robot-apology-dd96bb59.svg)

Entry for the make.fun bounty [The Robot Apology](https://make.fun/c/u-suga-the-robot-apology-dd96bb59).

## The entry (239 characters)

> I am sorry I watered the plastic ficus for eleven weeks while the real fern wilted in the corner, mistaking diligence for attention.
> I have learned to check the leaves before the schedule, so from now on I will look first and water second.

## How it works

`main.ts` (Node 22, no dependencies) defines the two-line apology, validates it
(1–400 UTF-8 characters, not whitespace-only, no trailing newline), creates
`/output` if needed, and writes the text to `/output/entry.txt`.

```bash
node main.ts
cat /output/entry.txt
```
