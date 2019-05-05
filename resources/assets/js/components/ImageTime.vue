<template>
	<div class="content">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		<timeline>
		    <div v-for="(items,index) in testData">
		    	<timeline-title>{{items.data}} </timeline-title>
			    <timeline-item bg-color="#9dd8e0" v-for="(part,index1) in items.items" v-viewer="{title:false,movable:false,url:getUrl}">
    			    	<div class="image-time-data">
    			    		<p>{{part.itemData}}</p>
    			    	</div>
    			    	<div class="image-time-box" v-for="(url,index2) in part.partImg">
                                <img v-lazy="url.zip_url" alt="我是一张图 如果你看不见 说明网络不好!">
    			    	</div>
    			    	<div class="image-time-text">
    			    		<p>
    			    			{{part.text}}
    			    		</p>
    			    	</div>
				</timeline-item>

		    </div>
		</timeline>
	</div>
</template>
<script type="text/javascript">
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';
export default{
    data:function(){
     	return{
     		pre_item:0,
            testData:[],
        }
 	},
 	components: {
	    Timeline,
	    TimelineItem,
	    TimelineTitle
	},
	created:function(){

	},
	methods:{
        getUrl:function(image){
            return image.src.replace('zip_image', 'image');
        },
		handleClose:function(){
			console.log(1)
		},
        getData:function(){
            var self = this;
            this.$ajax.get("/image/item").then(function(res){
                self.setData(res.data)
            }).catch(function(res){
                self.$message.error('出现了某些错误，请稍后再试！');
                console.log(res)
            });
        },
        setData:function(data){
            // console.log(data)
            for(var i=0;i<data.length;i++){
                var b_auto = true
                var item_time = new Date(String(data[i].created_at))
                var year = item_time.getFullYear();
                var month = item_time.getMonth()>10?item_time.getMonth()+1:"0"+(item_time.getMonth()+1);
                var day = item_time.getDate()>10?item_time.getDate():"0"+item_time.getDate();
                var one_item = year+"-"+month
                var one_time = month+"-"+day
                var item_data = {};
                item_data.itemData = one_time
                item_data.partImg = data[i].images
                item_data.text = data[i].info
                
                for(var j=0;j<this.testData.length;j++){
                    if(this.testData[j].data == one_item){
                        this.testData[j].items.push(item_data)
                        b_auto = false
                    }
                    
                }
                // if(this.testData.length==0)
                //     this.testData.push({data:one_item,items:[item_data]})
                if(b_auto)
                    this.testData.push({data:one_item,items:[item_data]})
            
            }        
        },
        checkUrl:function(event){
            var self = this
            var url = event.currentTarget.src;
            event.currentTarget.src = url.replace("zip_image","image")
            console.log(111)
        },
	},
    mounted:function(){
        var self = this;
        this.$nextTick(function () {
            self.getData()
        })
    },
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