import { Book } from './book'

export class Character{
    name: string
	gender: string
	culture: string
	born: Date
	died: Date
	titles: string[]
	aliases: string[]
	// allegiances: 
	books: Book[]
	povBooks: Book[]
	tvSeries: string[]
	playedBy: string[]
}