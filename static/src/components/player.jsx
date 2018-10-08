import React,{ PureComponent } from "react";
import Api from "../utils/api_calls.js";
import $ from "../utils/ajax";
import store from "../store";
import Playerlib from "../libs/playerLib";
import Dotdotdot from "react-dotdotdot";
import Common from "../utils/common";
import scrollToComponent from "react-scroll-to-component";
import asyncComponent from "./asyncComponent.jsx";
import * as actionType from "../actions";
import Analytics from "../libs/analytics";

const ProductScroller = asyncComponent(() => import('./product-scroller').then(module => module.default), {});
const VideoDetails = asyncComponent(() => import('./VideoDetails/VideoDetails').then(module => module.default), {});
const VideoDescription = asyncComponent(() => import('../libs/react-clamp-lines').then(module => module.default), {});
class Player extends PureComponent{
	constructor(props){
		super(props);
		const ambassador = {}; 
		this.state ={
			hasProducts : false,
			products : [],
			video:props.video || null,
			player : null,
			ambassador : ambassador
		}
		
		if(props.video.hasOwnProperty("id")){
			this.loadProducts(props.video.id);
		}
	}
	ambassadorOnLoad(){
		let ambassador = {};
		if(TVSite.isAmbassadorPage || TVSite.isVideoPage){
			if(TVSite.ambassadorData.hasOwnProperty("user_id")){
				ambassador = TVSite.ambassadorData;
			}
		}
		return ambassador;
	}
	loadProducts = (videoId) => {
		var that= this;
		Api.products(videoId).done(function(data){
			var newState = {};
			if(!data.length){
				newState = {
					hasProducts : false,
					products : []
				};
			}
			else{
				for (let index = 0; index < data.length; index++) {
					const element = data[index];
					Common.createProductStructureData(element);
					Analytics.productImpresion(element);
				}
				newState = {
					products : data,
					hasProducts : true
				};
			}
			that.setState(newState);

		});
	}
	storeSubscribe = () => {
		const storeState = store.getState();
		if(storeState.event === actionType.VIDEO){
			scrollToComponent(this.refs.tvpageplayer,{
				offset: -200,
				align: 'top'
			});

            document.querySelector('.tvp-player-video-title-text').innerHTML = storeState.video.title;

			this.loadProducts(storeState.video.id);
			this.getAmbassador(storeState.video);
			this.state.player.loadSelected(storeState.video);
			this.setState({
				video : storeState.video
			});
			
			
		}
	}
	playerStateChange(e){
		if('tvp:media:videoended' === e){
			setTimeout( ()=>{
			  store.dispatch({
				type: actionType.VIDEO_EVENT,
				video_event: e
			  });
			},200);
			
		}
	}
	initPlayer(){
		const options ={
	        play_button_border_radius: '50%',
	        play_button_border_width: '5px',
	        play_button_border_color: '#121212',
			play_button_border_style: 'solid',
			play_button_background_color: '#121212',
	        progress_color: '#CC0000',
	        api_base_url: TVSite.apiUrl,
	        data: [this.state.video],
	        analytics: true,
	        autoplay: true,
			autonext: true,
			player_version : "3.1.6",
	        loginId: TVSite.loginId
		};
		const globalConfig = {
			onChange: this.playerStateChange
		}
		return new Playerlib('tvpageplayer', options, globalConfig);

	}
	componentDidMount(){
		store.subscribe(this.storeSubscribe);
		this.getAmbassador(this.state.video);
		let player  = this.initPlayer();
		this.setState({player : player});

		let videoObj = this.props.video;

		$.ajax({
			url: '//api.tvpage.com/v1/videos/' + videoObj.id + '?X-login-id=' + TVSite.loginId,
			dataType: 'jsonp',
		}).done(function(response){
			document.querySelector('.tvp-player-video-title-text').innerHTML = response && response.title ? response.title : videoObj.title;

			let videoDescription = response && response.description ? response.description : videoObj.description;

			videoDescription = String(videoDescription).replace(/\n/g," ");

			setTimeout(function () {
				document.querySelector('.tvp-video-description').innerHTML = videoDescription;
			},100);
		});
	}
	getAmbassador = (video) => {
		//if(TVSite.isAmbassadorPage)
		//	return;
		const that = this;
		if(video && video.user_id){
			Api.ambassador(video.user_id).done( data => {
				that.setState({
					ambassador : data
				});
			});
		}
	} 
	render(){
		const video = this.state.video;
		const url = video.hasOwnProperty("title") ? Common.getVideoPageUrl(video) : "";
		const ambassador = this.state.ambassador;
		return (
			<div ref="tvpageplayer">
				<div className="tvp-player-products-container">
				<div id="player-container" className="container player-container">
				<div className="row">
					<h1 className={"tvp-player-video-title col-xs-12 "+(this.state.hasProducts ? "col-md-10" : "col-md-12")}>
                        <Dotdotdot clamp={2}>
                            <span className="tvp-player-video-title-text"></span>
                        </Dotdotdot>
					</h1>
					
					<h2 className={"tvp-player-video-title-products "+(this.state.hasProducts ? "col-md-2 text-center" : "tvp-hidden")}>
					Shop Now
					</h2>
					
					<div id="tvpageplayer-container" className={"col-xs-12 col-sm-12 col-md-10 col-md-offset-"+(this.state.hasProducts ? "0" : "0")} >
						<div id="tvpageplayer-wrapper" className="TVPagePlayer-wrapper">
							<div id="tvpageplayer" className="tvp-player">
							</div>
						</div>
					</div>
				{
					this.state.hasProducts &&
					<div className="col-md-2 col-xs-12">
						<ProductScroller ambassador={ambassador} products={this.state.products} /> 
					</div>
				}
				</div>
				<div className="tvp-line-detail">
					<div className="text-center">
						DETAILS
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 tvp-row-separator">
						<VideoDetails url={url} video={video} ambassador={ambassador} />
					</div>
					<div className="col-md-12">
						{
							video.hasOwnProperty("description") && 
							<VideoDescription className="tvp-video-description"  
							lines="2" 
							moreText="Show More" 
							lessText="Show Less" 
							buttons={true}
							text="-"
							 />
						}
					</div>
					
				</div>
				</div>
				</div>
			</div>
			);
	}
}
export default Player;
