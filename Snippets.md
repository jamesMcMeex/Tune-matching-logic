# Code Snippets

Prints metadata of file at [filepath] to new created file `storedfile.json`

```ffprobe -v quiet -print_format json -show_format -show_streams [filepath] > "storedfile.json"```
