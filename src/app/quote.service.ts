import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

interface QuoteResponse {
  quotes: {
    quote: string;
    author: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}
  quoteUrl: string =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  getQuote() {
    return this.http.get<QuoteResponse>(this.quoteUrl).pipe(pluck('quotes'));
  }
}
