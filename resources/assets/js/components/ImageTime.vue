<template>
	<div class="content">
		<timeline>
		    <div v-for="items in testJson">
		    	<timeline-title>{{items.data}} </timeline-title>
			    <timeline-item bg-color="#9dd8e0" v-for="part in items.items">
			    	<div class="image-time-data">
			    		<p>{{part.itemData}}</p>
			    	</div>
			    	<div class="image-time-box" v-for="url in part.partImg">
			    		<img v-bind:src="url.url">
			    	</div>
			    	<div class="image-time-text">
			    		<p>
			    			{{part.text}}
			    		</p>
			    	</div>
				</timeline-item>

		    </div>
		</timeline>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	</div>
</template>
<script type="text/javascript">
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';
export default{
    data:function(){
     	return{
     		testJson:[{
     			data:"2017-08",
     			items:[{
     					itemData:"08-19",
     					partImg:[
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"}
     					],
     					text:"这是一个阶段总结"
     				},
     				{
     					itemData:"08-24",
     					partImg:[
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"}
     					],
     					text:"这是另一个阶段总结"
     				}
     			]
     		},
     		{
     			data:"2017-04",
     			items:[{
     					itemData:"04-19",
     					partImg:[
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"}
     					],
     					text:"这是一个阶段总结"
     				},
     				{
     					itemData:"04-24",
     					partImg:[
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"},
     						{url:"img/article.jpg"}
     					],
     					text:"这是另一个阶段总结"
     				}]
     		}],
    	}
 	},
 	components: {
	    Timeline,
	    TimelineItem,
	    TimelineTitle
	},
	created:function(){
		// console.log(this.$ajax)
	}
}
</script>
<style lang="scss" scoped="true" type="text/css">
@import "../../sass/app.scss";
.image-time-box{
	display: inline-block;
	max-width: 275px;
    height: auto;
    margin-right: 10px;
    img{
    	width: 100%;
    }
}
@media #{$medie-type} and (max-width: $phone-size){
	.image-time-box{
	    img{
	    	
	    }
	}
}

</style>