# grunt-pogo [![Build Status](https://travis-ci.org/leecrossley/grunt-pogo.png?branch=master)](https://travis-ci.org/leecrossley/grunt-pogo) [![npm version](https://badge.fury.io/js/grunt-pogo.png)](https://npmjs.org/package/grunt-pogo) [![Dependency Status](https://david-dm.org/leecrossley/grunt-pogo/status.png)](https://david-dm.org/leecrossley/grunt-pogo#info=dependencies) [![devDependency Status](https://david-dm.org/leecrossley/grunt-pogo/dev-status.png)](https://david-dm.org/leecrossley/grunt-pogo#info=devDependencies)

### PogoScript

> [PogoScript](https://github.com/featurist/pogoscript) is a programming language that emphasises readability, is friendly to domain specific languages and compiles to regular Javascript.

It's written and maintained by [featurist](https://github.com/featurist).

### Grunt

[Grunt](http://gruntjs.com/) is "The JavaScript task runner". The Grunt ecosystem is huge and it's growing every day, with literally hundreds of plugins.

Although PogoScript has it's own CLI for compilation, other transpilers have a grunt plugin, to allow developers to hook into their task pipeline.


### Enter **grunt-pogo**

I'm not a massive fan of transpilers (*understatement?*) but I'd rather use PogoScript over something like CoffeeScript. Without a grunt plugin, it'd be a harder sell. Fortunately now there is one.

## Getting Started

The **grunt-pogo** plugin requires Grunt `~0.4.x`

### Install as a dev dependency

```shell
npm install grunt-pogo --save-dev
```

### Load "grunt-pogo" in your Gruntfile.js

```js
grunt.loadNpmTasks("grunt-pogo");
```

## The pogo task

You can run the pogo task with the  `grunt pogo` command, or combine it with other tasks in the usual way. See [configuring tasks](http://gruntjs.com/configuring-tasks) for more info.

### Basic example

```js
pogo: {
    compile: {
        files: {
            "file.js": ["file.pogo"]
        }
    }
}
```

## TODO

- Expose more options for compilation via the Gruntfile.js

## License

[MIT License](http://ilee.mit-license.org)
