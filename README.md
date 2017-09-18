# Default MEAN stack

This is the default MEAN stack with NO and I say again, "NO" bloatware -> Do what you wish with it. Change the world.]

## Requirements:

You must have MongoDB installed and running. If you do not have MongoDB go into the app/config.json file and change from:
```JSON
"database": true
```

TO:
```JSON
"database": false
```

## How to install

```bash
#First clone the mean stack git repository:
git clone https://github.com/tsulli123/meanstack.git

#Now move your terminal into your newly created folder:
cd meanstack

#Run these two commands:
npm install
npm install -g concurrently
```

## How to run

To run normally:
```bash
npm start
```

To Run as a watcher (This will allow you to auto refresh your server/Web browser):
```bash
npm run watch
```

## Future Progress:

I will be creating this to further develop my personal skills so the updates may be slow. However I would love to add my own personal CLI into it so you do not have to git clone, but also change the project name with the CLI etc.

## Updates:

Version | Details
---     | ---
0.0.1   | Initial Upload with MEAN stack.

## Documentation:

Coming Soon!! <3

## License:

MIT
