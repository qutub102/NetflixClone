class APIFeatures {
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
  }
  filter() {
    // /api/movies?genre_ids=thriller&vote_average[gt]=7.2
    const queryCopy = { ...this.queryStr };
    // console.log(queryCopy); //  { genre_ids: 'thriller', vote_average: { gt: '7.2' } }

    this.query = this.query.find(queryCopy);
    return this;
  }
}
module.exports = APIFeatures;
