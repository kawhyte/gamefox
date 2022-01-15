import axios from "axios";
import { convertDateToEpoch } from "../util/convertDate";

let today = new Date();
let date = convertDateToEpoch(today.setMonth(today.getMonth() - 1));
let date2 = convertDateToEpoch(today.setMonth(today.getMonth() - 50));

export function getTrendingGames(platform) {
	return async () => {
		const games = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 15; where first_release_date > ${date2} & platforms = ${platform} & rating > 5; sort rating desc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
			revalidate: 1,
		};
	};
}
export function getGames(platform) {
	return async () => {
		const games = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 150; where first_release_date > ${date2} & platforms = ${platform} & rating > 45; sort rating desc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
			revalidate: 1,
		};
	};
}

export function getGamesByDate(from, to) {
	return async () => {
		const bestGamesOfTheYear = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 70; where first_release_date > ${from} & first_release_date < ${to}  & rating > 85; sort rating asc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { bestGamesOfTheYear },
			revalidate: 1,
		};
	};
}
export function getGamesByID(gameIds) {
	return async () => {
		const games = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 120; where id = (${gameIds});;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
			revalidate: 1,
		};
	};
}
export function getGamesByName(gameName) {
	return async () => {
		const games = await axios({
			url: "https://api.igdb.com/v4/games",
			//url: "https://api.igdb.com/v4/search",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			search "${gameName}"; limit 120; `,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		return {
			props: { games },
		};
	};
}

export function filterByConsole(sortedGames, gameId, gameId2) {
	return sortedGames.filter((platforms) => {
		let found = false;
		platforms.platforms.map((element) => {
			if (element.id === gameId || element.id === gameId2) {
				found = true;
			}
		});

		//console.log("Look what I found",found)
		return found;
	});
}

export function getIndexPageGamesByID(platform, gameIds2020) {
	let today = new Date();
	let todayEpoch = convertDateToEpoch(today);
	return async () => {
		const trendingGames = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 255; where release_dates.date < ${todayEpoch} & release_dates.y >= 2021  & platforms = ${platform} & rating > 30; sort release_dates.y desc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		// const trendingGames2 = await axios({
		// 	//url: "http://localhost:8001/games",
		// 	url: "https://api.igdb.com/v4/games",
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Client-ID": process.env.ClientID,
		// 		Authorization: process.env.Authorization,
		// 	},
		// 	data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
		// 	 limit 15; where first_release_date < ${todayEpoch}  & rating > 55; sort first_release_date desc;`,
		// })
		// 	.then((response) => {
		// 		return response.data;
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});

		const bestOf2021 = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 32; where first_release_date < 1640822884 & first_release_date > 1609459684  & rating > 85; sort rating asc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		const bestOf2020 = await axios({
			//url: "http://localhost:8001/games",
			url: "https://api.igdb.com/v4/games",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Client-ID": process.env.ClientID,
				Authorization: process.env.Authorization,
			},
			data: `fields age_ratings,similar_games,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
			 limit 13; where first_release_date < 1609353752 & first_release_date > 1577904152  & rating > 85; sort rating asc;`,
		})
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				console.error(err);
			});

		// 	const games2020 = await axios({
		// 	//url: "http://localhost:8001/games",
		// 	url: "https://api.igdb.com/v4/games",
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Client-ID": process.env.ClientID,
		// 		Authorization: process.env.Authorization,
		// 	},
		// 	data: `fields age_ratings,platforms.*,artworks.*,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover.*,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.*,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates.*,remakes,remasters,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*,websites;
		// 	 limit 120; where id = (${gameIds2020});;`,
		// })
		// 	.then((response) => {
		// 		return response.data;
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});

		return {
			props: {
				trendingGames: trendingGames,
				//trendingGames2:trendingGames2,
				bestOf2021: bestOf2021,
				bestOf2020: bestOf2020,
			},
			//revalidate: 1
		};
	};
}
