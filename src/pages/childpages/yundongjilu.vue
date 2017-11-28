<template>
	<div>
		<div class="head">
			<div class="head_img"><img onclick="window.history.go(-1)" src="../../assets/images/6yundong/back.png" alt="" /></div>
			<h1>运 动 记 录	</h1>
			<p></p>
		</div>
		 <div class="container">
		 	<el-tabs type="border-card" tab-position="right">
			  <el-tab-pane label="减脂">
			 	<highcharts :options = "options" ref="lineCharts" class="hc"></highcharts>
			  </el-tab-pane>
			  <el-tab-pane label="塑形"> 
			  	<highcharts :options = "options1" ref="lineCharts" class="hc"></highcharts>
			  </el-tab-pane>
			  <el-tab-pane label="增肌">
			   <highcharts :options = "options2" ref="lineCharts" class="hc"></highcharts>
			  </el-tab-pane>
			  <el-tab-pane label="跑步">
			  	 <highcharts :options = "options3" ref="lineCharts" class="hc"></highcharts>
			  </el-tab-pane>
			</el-tabs>
		 </div>
		 <div class="bing">
		 	 <highcharts :options = "options5" ref="lineCharts" class="bzt"></highcharts>
		 </div>
	</div>
</template>

<script>
	export default{
		name:'yundongjilu',
		data(){
			return {
options: {
          chart: {
            type: 'area'
          },
          title: {
            text: '2017.11.15-11.23'
          },
          xAxis: {
            categories: ['0', '1', '2',"3","4","5"],
             labels:{
               	 enabled: false
               } ,
               	tickLength:0  
          },
          yAxis: {
          	
          	title:{
          		text:null
          	},
               labels:{
               	 enabled: false
               }     
          },
           credits: {
            enabled: false
          },          
          series: [{
		        name: 'JianZhi',
		        data: [2, 3, 2.5,4,2.5,3],
		         showInLegend: false
		    }]
			},
 options1: {
          chart: {
            type: 'area'
          },
          title: {
            text: '2017.11.15-11.23'
          },
          xAxis: {
            categories: ['0', '1', '2',"3","4","5"],
             labels:{
               	 enabled: false
               } ,
               	tickLength:0  
          },
          yAxis: {
          	
          	title:{
          		text:null
          	},
               labels:{
               	 enabled: false
               }     
          },
           credits: {
            enabled: false
          },          
          series: [{
		        name: 'SuXing',
		        data: [2,4,5.6,7.8,9,3],
		         showInLegend: false
		    }]
},
		options2: {
          chart: {
            type: 'area'
          },
          title: {
            text: '2017.11.15-11.23'
          },
          xAxis: {
            categories: ['0', '1', '2',"3","4","5"],
             labels:{
               	 enabled: false
               } ,
               	tickLength:0  
          },
          yAxis: {
          	
          	title:{
          		text:null
          	},
               labels:{
               	 enabled: false
               }     
          },
           credits: {
            enabled: false
          },          
          series: [{
		        name: 'ZengJi',
		        data: [2,5.5,7,5,4,8],
		        showInLegend: false
		    }]
			},
		options3: {
          chart: {
            type: 'area'
          },
          title: {
            text: '2017.11.15-11.23'
          },
          xAxis: {
            categories: ['0', '1', '2',"3","4","5"],
             labels:{
               	 enabled: false
               } ,
               	tickLength:0  
          },
          yAxis: {
          	
          	title:{
          		text:null
          	},
               labels:{
               	 enabled: false
               }     
          },
           credits: {
            enabled: false
          },          
          series: [{
		        name: 'PaoBu',
		        data: [3.5,4,2.5,1,2.5,6],
		        showInLegend: false
		    }]
			},
		options5: {
          chart: {
          	 type: 'pie',
          },
          title: {
            text:'<span style="color:#5AA1FD;font-size:25px;">1996min</span>'+'<br/>'+'<span style="font-size:12px; margin-left:20px;">运动总时长</span>',
            verticalAlign:"middle",
            y:-18,
            useHTML:true
          },
          
           credits: {
            enabled: false
          }, 
          legend:{
          	backgroundColor:"red"
          } ,

           series: [{
           
            size: '225',
             innerSize: '55%',
            
            data: [
                {name:'塑形 ',   y: 20.0 ,color:"#B5BABE"},
                {name:'减脂 ',  y: 26.8,color:"#8C58FF"},
                {name: '跑步 ',y: 25.8,selected: true,color:"#CB49D9"},
                {name:'增肌',   y: 28.5,color:"#00C7FE"}  
            ]
        }]
			}
		}		
	}
}
</script>

<style scoped lang="less">
	
/*头部开始*/

.head{
	background: -webkit-linear-gradient(left, #6257FD, #9D4DFE);
	height: 1rem;
	line-height: 1rem;
	display: flex;
}
.head_img{
	display: inline-block;
	flex-grow: 1;
	text-align: center;
}
.head_img>img{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	vertical-align: middle;
}
.head>h1{
	display: inline-block;
	color: white;
	font-size: 0.37rem;
	flex-grow: 5;
	text-align: center;
}
.head>p{
	display: inline-block;
	flex-grow: 1;
	text-align: center;
	color: #D8B7FE;
	font-size: 0.28rem;
}

/*头部结束*/

/*内容开始*/
.container{
	padding: 4% 2%;
}
.hc{
	height: 210px;
	width: 270px;
}
.bing{
	height: 350px;
	margin-top: -10px;

	.bzt{
		
	height: 350px;
	width: 360px;
	margin: 0 auto;

}}
/*内容结束*/

</style>