# Dice Ledger

Roll a tabletop dice pool, retain successes, and reroll only the dice that missed.

Let everyone at the table see which dice are already safe. Successes keep their faces when the next player clicks to reroll the misses, so there is no need to sort a handful of dice between throws.

## Build and roll the pool

1. Before rolling, turn the wheel to select one to eight dice. Press **Start** to choose the minimum successful face, from two through six.
2. Click to roll the pool. Read individual faces on the front and the success count on the rear.
3. Successful dice change color. The first clip adds a sixth die and rolls the group.

![A sixth empty die joins the pool and the first faces appear with a highlighted success.](media/guide/choose-and-roll-dice.gif)

## Reroll the misses

1. Click again. Dice meeting the threshold retain their values while the other faces are rolled anew.
2. Read the updated success and roll counts on the rear. Keep clicking if your tabletop rules allow further rerolls.
3. Hold **Start** for a fresh pool. You can then change pool size and threshold before the next player rolls.

![The highlighted successful die keeps its face while the remaining pool is rerolled.](media/guide/reroll-just-misses.gif)

## Example from the emulator

With six dice and a threshold of six, only sixes are kept. With a threshold of four, fours, fives and sixes all stay. The threshold is fixed for a pool once its first roll has been made.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
