---
id: rust
title: Rust
---

## About

> Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references. Rust achieves memory safety without garbage collection, and reference counting is optional.
> [(Wikipedia, 2020)](<https://en.wikipedia.org/wiki/Rust_(programming_language)>)

- [https://www.rust-lang.org](https://www.rust-lang.org)

## Getting started

- Follow [https://www.rust-lang.org/learn/get-started](https://www.rust-lang.org/learn/get-started)
- Use IntelliJ IDEA from JetBrains with [https://intellij-rust.github.io/](https://intellij-rust.github.io/) plugin

## Rustup: the Rust installer and version management tool

The primary way that folks install Rust is through a tool called Rustup, which is a Rust installer and version management tool.
- Install Rust
  ```shel
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```
- Update Rust
  ```shell
  rustup update
  ```

## Cargo: the Rust build tool and package manager
When you install Rustup you’ll also get the latest stable version of the Rust build tool and package manager, also known as Cargo. Cargo does lots of things:

- build your project with `cargo build`
- run your project with `cargo run`
- test your project with `cargo test`
- build documentation for your project with `cargo doc`
- publish a library to crates.io with `cargo publish`

To test that you have Rust and Cargo installed, you can run this in your terminal of choice:
```shell
cargo --version
```

## Create a new project

```shell
cargo new my_project
```

## Clippy: the Rust linter
A collection of lints to catch common mistakes and improve your Rust code.

- [https://doc.rust-lang.org/stable/book/appendix-04-useful-development-tools.html?highlight=clippy#more-lints-with-clippy](https://doc.rust-lang.org/stable/book/appendix-04-useful-development-tools.html?highlight=clippy#more-lints-with-clippy)
- To run Clippy’s lints on any Cargo project, enter the following
  ```shell
  cargo clippy
  ```

## How to setup a workspace
- follow [https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html)

## How to work with Rust in IntelliJ IDEA
- follow [https://intellij-rust.github.io/docs/quick-start.html](https://intellij-rust.github.io/docs/quick-start.html)

## Debugging with Macro `std::dbg`
Prints and returns the value of a given expression for quick and dirty debugging.
Use `dbg!(..)` see [https://doc.rust-lang.org/std/macro.dbg.html](https://doc.rust-lang.org/std/macro.dbg.html)

```rust
let a = 2;
let b = dbg!(a * 2) + 1;
//      ^-- prints: [src/main.rs:2] a * 2 = 4
assert_eq!(b, 5);
```

## Resources

- [https://www.rust-lang.org/learn](https://www.rust-lang.org/learn)
- [The Rust Programming Language](https://doc.rust-lang.org/book/) (book)

## Compile error?

If you are facing an error like that on new MacOS version.
```shell
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
It means that you need to install XCode command line, open a Terminal and run this command:
```shell
xcode-select --install
```
Note:
If you want to download and install Command Line tools manually, it can be downloaded from: [https://developer.apple.com/download/more/](https://developer.apple.com/download/more/)

