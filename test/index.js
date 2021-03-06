'use strict'

const split = require('../index')

describe('Split text without spaces', () => {
	it('should split the text into the correct words', () => {
		return split('wodemaoxihuanheniunai').then((data) => {
			const list = ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wo3demao1xi3huan1he2niu3nai3').then((data) => {
			const list = ['wo3', 'de', 'mao1', 'xi3', 'huan1', 'he2', 'niu3', 'nai3']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wǒdemāoxǐhuānhéniǔnǎi').then((data) => {
			const list = ['wǒ', 'de', 'māo', 'xǐ', 'huān', 'hé', 'niǔ', 'nǎi']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('derewofendoudouworenwei').then((data) => {
			const list = ['de', 're', 'wo', 'fen', 'dou', 'dou', 'wo', 'ren', 'wei']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('de2re3wo3fen4dou4dou3wo3ren4wei4').then((data) => {
			const list = ['de2', 're3', 'wo3', 'fen4', 'dou4', 'dou3', 'wo3', 'ren4', 'wei4']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('dérěwǒfèndòudǒuwǒrènwèi').then((data) => {
			const list = ['dé', 'rě', 'wǒ', 'fèn', 'dòu', 'dǒu', 'wǒ', 'rèn', 'wèi']
			data.should.deepEqual(list)
		})
	})
})

describe('Split spaced text without keeping spaces', () => {
	it('should split the text into the correct words', () => {
		return split('wo de mao xihuan he niunai').then((data) => {
			const list = ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wo3 de mao1 xi3huan1 he2 niu3nai3').then((data) => {
			const list = ['wo3', 'de', 'mao1', 'xi3', 'huan1', 'he2', 'niu3', 'nai3']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wǒ de māo xǐhuān hé niǔnǎi').then((data) => {
			const list = ['wǒ', 'de', 'māo', 'xǐ', 'huān', 'hé', 'niǔ', 'nǎi']
			data.should.deepEqual(list)
		})
	})
})

describe('Split spaced text and keep spaces', () => {
	it('should split the text into the correct words', () => {
		return split('wo de mao xihuan he niunai', {keepSpaces: true}).then((data) => {
			const list = ['wo', ' ', 'de', ' ', 'mao', ' ', 'xi', 'huan', ' ', 'he', ' ', 'niu', 'nai']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wo3 de mao1 xi3huan1 he2 niu3nai3', {keepSpaces: true}).then((data) => {
			const list = ['wo3', ' ', 'de', ' ', 'mao1', ' ', 'xi3', 'huan1', ' ', 'he2', ' ', 'niu3', 'nai3']
			data.should.deepEqual(list)
		})
	})
	it('should split the text into the correct words', () => {
		return split('wǒ de māo xǐhuān hé niǔnǎi', {keepSpaces: true}).then((data) => {
			const list = ['wǒ', ' ', 'de', ' ', 'māo', ' ', 'xǐ', 'huān', ' ', 'hé', ' ', 'niǔ', 'nǎi']
			data.should.deepEqual(list)
		})
	})
})
