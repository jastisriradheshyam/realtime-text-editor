# Real Time Text Editor

## Setup
- `node index`

## Usage
- Open IP:3000 (IP - figure it out)
- Random editor id is created and redirected to the page with query parameter `editorID`
    - If page is loaded with query parameter `editorID`, then it will load the text from server for that editor ID.
- For trying realtime editing, open another tab along with the editor id (copy the current URL if on same browser)

## Features
- Session maintenance (editor session)
- Selection memory (so that one person is working on one line then another person can work on different line, with certain time delay, it has to be improved)
- Number of users in the editor

## Limitations

- Not efficient
- No application caching (redis or rethink)
- No cleanup