interface Prototype<T> {
  clone(): T;
}

class Article implements Prototype<Article> {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  clone(): this {
    return { ...this };
  }
}

///////////
const article = new Article("Protype pattern");
const copy = article.clone();
