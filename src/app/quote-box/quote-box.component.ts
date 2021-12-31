import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

interface QuoteSearch {
  quote: string;
  author: string;
}
@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css'],
})
export class QuoteBoxComponent implements OnInit {
  quotes: QuoteSearch[] = [];
  selectedQuote: any;
  selectedColor: string = '';
  colors = [
    'rgb(14, 115, 96)',
    'rgb(22, 90, 51)',
    'rgb(44, 62, 80)',
    'rgb(144, 94, 14)',
    'rgb(180, 74, 48)',
    'rgb(155, 89, 182)',
    'rgb(134 53 50)',
    'rgb(52, 34, 36)',
    'rgb(71, 46, 50)',
    'rgb(115, 114, 99)',
    'rgb(45, 88, 82)',
    'rgb(66, 94, 51)',
  ];

  constructor(private quote: QuoteService) {}

  ngOnInit(): void {
    this.quote.getQuote().subscribe((quotes) => (this.quotes = quotes));
    this.randomColor();
  }

  randomQuote() {
    let num = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[num];
    this.randomColor();
  }

  randomColor() {
    let num = Math.floor(Math.random() * this.colors.length);
    this.selectedColor = this.colors[num];
    document.body.style.background = this.colors[num];
  }

  tweetQuote(tweetQuote: any) {
    const { quote, author } = tweetQuote;
    return `https://twitter.com/intent/tweet?hashtags=quotes&text=%22%20${quote}%22%20${author}`;
  }
}
