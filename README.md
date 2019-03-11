# Tune-matching-logic
Module for determining the key DJ mixing criteria of a song

## Why?
Serato tells you which key and tempo a tune plays at. In order to find a tune to match it with and mix together, a user can then search other tunes that are either:

- a) of the same key and similar tempo
- b) of a complimentary key and similar tempo
- c) of a different key and different tempo, that when pitched up/down to the same speed become complimentary.

In order to find any of these tracks the user has to manually filter or sort tracks by key, and then scroll through the results, calculating whether or not the tempo / key parameters make a match to the current track.

## What?

The idea of this app is to handle all of that cognitive 'heavy lifting' for the user. To give an example:

Hyph Mngo by Joy Orbison is in the key of Bbm, and tempo of 138bpm.

Most tracks can be sped up or down by up to 6 or 7 bpm before the key has been shifted by 1 semitone (a key up when sped up, or down when slowed down). So Hyph Mngo - in theory - could be matched with any tracks that are:

- Of a complimentary key (Bbm, Fm, Ebm, C#, or potentially even G#) at tempos between 132bpm and 144bpm

- Down 1 semitone from any of the complimentary keys, at tempos between 132bpm and 126bpm (pitched down).

- Up 1 semitone from any of the complimentary keys, at tempos between 144bpm and 150 bpm (pitched down).

All of this logic describes the cognitive load that the app handles for the user, and simplify the process as much as possible. A user would be able to select one tune in the app, and be presented with a list of all possible complimentary matches for mixing, based on key and tempo.

The one bit of initial setup is that the user would need create an account, and submit their record collection to the app, including each tracks key and bpm.

## Useful links:

#### Reading bpm and key metadata from local files
- [ffprobe-static](https://github.com/joshwnj/ffprobe-static)
- [Reading MP3 ID3 tags in Javascript](https://ericbidelman.tumblr.com/post/8343485440/reading-mp3-id3-tags-in-javascript)
- ffprobe: [Github Repo](https://github.com/eugeneware/ffprobe), [NPM Package](https://www.npmjs.com/package/ffprobe)
