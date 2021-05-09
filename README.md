# Caesar cipher cli

This is a command line application. It encrypts and decrypts Caesar's cypher.
The application encrypts and decrypts only letters of the Latin alphabet. All
other characters remain unchanged.

# How to install

To install this application, you must perform the following steps:
1. Download it from this repository.
2. Run the command line and go to the application folder.
3. Enter the command "npm install" or "npm i" and wait for the dependency installation
process to complete.
4. The application is ready to go.

# How to use

In the folder with the application enter the following into the command line: 
"node caesar [options]", where options are command line parameters that determine the
operation of the application (short alias and full name):
1. -s, --shift: a shift.
2. -a, --action: an action encode/decode.
3. -i, --input: an input file.
4. -o, --output: an output file.

The action option can take the values **encode** and **decode** and indicates what needs
to be done with the incoming text: **encrypt** or **decrypt**.

The shift option must be a positive integer. It denotes a **shift** of letters for
encryption and decryption.

**Action** and **shift** options are mandatory: if one of them missed, there will be 
an **error**. **Input** and **output** options must be relative or absolute paths to file
or even a filename if file is in the application root folder (**input** is the path to the
file from which the text must be read, **output** is the path to the
file to which the text must be written).

If the file on any of the path **doesn't exist** or the path is **incorrect**,
there will be an **error**.

If the **input** and **output** options are missed, then **reading** and/or **writing**
will be carried out from/to the **command line**. To interrupt the process, in this case,
please, press **Ctrl+C**.

## Examples of usage

### Encryption with shorthand names of the options

```bash
$ node caesar -i ./input.txt -o ./output.txt -a encode -s 11
```

Before:

> input.txt
> This is secret. Message about "_" symbol!

> output.txt
> *empty*

After:

> input.txt
> This is secret. Message about "_" symbol!

> output.txt
> Estd td dpncpe. Xpddlrp lmzfe "_" djxmzw!

### Decryption with full names of the options

```bash
$ node caesar --input ./input.txt --output ./output.txt --action decode --shift 11
```

Before:

> input.txt
> Estd td dpncpe. Xpddlrp lmzfe "_" djxmzw!

> output.txt
> *empty*

After:

> input.txt
> Estd td dpncpe. Xpddlrp lmzfe "_" djxmzw!

> output.txt
> This is secret. Message about "_" symbol!