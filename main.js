class MediaItem {
    constructor(title, year, genre){
        this.title=title
        this.year=year
        this.genre=genre
    }
    getSummary(){console.log(`title: ${this.title}, year:${this.year}, genre:${this.genre}`);
    }
}
class Book extends MediaItem{
    constructor(title, year, genre, author, pageCount){
        super(title, year, genre)
        this.author=author
        this.pageCount=pageCount
    }
    getSummary(){console.log(`Book: ${this.title} by ${this.author}, ${this.pageCount} pages`);
    }
}
class Movie extends MediaItem{
    constructor(title, year, genre, director, durationMinutes){
        super(title, year, genre)
        this.director=durationMinutes
    }
        getSummary(){console.log(`Movie: ${this.title}directed by ${this.author}, ${this.durationMinutes} min`)};

}
class Library{
    constructor(mediaList){
        this.mediaList=mediaList
    }
    addItem(item){this.mediaItem.push(item)}
    search(term){
                    let result=[]
        this.mediaList.forEach(item => {
           if(item.title.includes(term)){
            result.push(item)
           }
        });
        return result;

    }
    listByGenre(genre){
                    let result=[]
        this.mediaList.forEach(item=>{
            if(item.genre===genre){
                result.push(item)
            }
        })
        return result
    }
}