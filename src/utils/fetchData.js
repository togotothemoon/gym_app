export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': '4cff622e20msh50effb9e243bf85p132687jsnc6e47626f577'
        }
};

export const fetchData = async (url,options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}