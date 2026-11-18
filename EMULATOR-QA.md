# Emulator verification

On-device interaction and graphics on BUSY Bar firmware 1.3.1.

Rolled a pool of six with threshold six, then rerolled failures while keeping successful dice.

15 distinct frames were recorded on firmware 1.3.1. App io.ncoooooper.diceledger exited: finished; heap peak 94.2 of 128 KiB. Screenshots are in screenshots/ and the recording is in media/.

## Display capture

Firmware 1.3.1 rendered both README examples. Each square in a guide GIF is one front LED in a 16 × 16 cell. The production archive was built from the source in this repository.

## Screen transition capture

Firmware 1.3.1 rendered the display sequences in the README. The guide uses a 14 × 14 lit area inside each 16 × 16 cell. Input sequences, frame counts and the release archive checksum are in [the capture record](media/screen-transitions.json).
