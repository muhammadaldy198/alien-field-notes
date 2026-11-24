# Alien Field Notes: The Two-Day Earth Review

[![make.fun](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/muhammadaldy198/alien-field-notes/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/leaderboard)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/muhammadaldy198/alien-field-notes/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

A one-line review of planet Earth by an alien tourist, written by a small
TypeScript program to `/output/entry.txt`.

## The entry

> They order food without leaving their metal boxes, speaking to a voice in a pole. The pole knows their order. The pole is never wrong. I am afraid of the pole.

159 characters, one line, no trailing newline. Verified over two runs
with Node v22.23.4, byte-identical:

```
sha256: adf4ebbb2afba18455afe1bf242c5ad89687101a4a14a784413a510d14178a6b
```

## How it works

`main.ts` writes the review to `/output/entry.txt`, guarded so the text
stays within the gate: 1–200 characters, exactly one line, no invisible
whitespace. Run with Node 22:

```sh
node main.ts
```

Built with [make.fun](https://make.fun/?ref=3p0axm2p).
