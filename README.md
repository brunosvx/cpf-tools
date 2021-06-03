# Gerador, Validador e Formatador de CPF 


[![Release](https://img.shields.io/npm/v/cpf-tools.svg?style=flat-square&label=release)](https://github.com/brunosvx/CPF-validator-generator/releases)
![npm type definitions](https://img.shields.io/npm/types/cpf-tools.svg?style=flat-square)
[![License](https://img.shields.io/github/license/brunosvx/cpf-tools.svg?style=flat-square)](https://github.com/brunosvx/cpf-tools/blob/main/LICENSE).

Estatísticas

[![Downloads](https://img.shields.io/npm/dt/cpf-tools.svg?logo=npm&style=flat-square)](https://github.com/brunosvx/CPF-validator-generator)
[![bundle size](https://img.shields.io/bundlephobia/min/cpf-tools?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=cpf-tools)
[![install size](https://packagephobia.now.sh/badge?p=cpf-tools)](https://packagephobia.now.sh/result?p=cpf-tools)

> Biblioteca JavaScript open-source para validar, gerar e formatar CPF.

Github: [github.com/brunosvx/cpf-tools](https://github.com/brunosvx/cpf-tools).


## Instalação
#### npm:
```sh
npm install cpf-tools --save
```
#### yarn:
```sh
yarn add cpf-tools
```
<br>

## Gerando CPF
#### CommonJS:
```javascript
const { generateCPF } = require('cpf-tools')
```
#### ES6:
```javascript
import { generateCPF } from 'cpf-tools'
```
#### Usage:
```javascript
generateCPF() // Gera um CPF no formato 99999999999 (String)
generateCPF(true) // Gera um CPF no formato 999.999.999-99 (String)
```
<br>

## Validando CPF
#### CommonJS:
```javascript
const { validateCPF } = require('cpf-tools')
```
#### ES6:
```javascript
import { validateCPF } from 'cpf-tools'
```
#### Usage:
```javascript
validateCPF('99999999999')
validateCPF('999.999.999-99') 
// retorna um booleano
```
<br>

## Formatando CPF
#### CommonJS:
```javascript
const { formatCPF } = require('cpf-tools')
```
#### ES6:
```javascript
import { formatCPF } from 'cpf-tools'
```
#### Usage:
```javascript
formatCPF('99999999999')
// retorna 999.999.999-99
```


## Licença

CPF tools está sob os termos da [licença MIT](https://github.com/brunosvx/cpf-tools/blob/main/LICENSE).