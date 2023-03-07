// typically it should be stored in {process.env.API_Key}

const Api_Key = "5ca10b1339e53f96246c0866b1e3dec0";


const requests = {
fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${Api_Key}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
fetchComedyMoies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,

}

export default requests;