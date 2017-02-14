<html>
<head>
	<title>TweetCloud</title>
	<script type='text/javascript' src='js/jquery.js'></script>
	<script type='text/javascript' src='js/get-data.js'></script>
	<script type='text/javascript' src='js/data-ready.js'></script>
	<script type='text/javascript' src='js/send-ajax-request.js'></script>
	<script type='text/javascript' src='js/parse-tweets.js'></script>
	<script type='text/javascript' src='js/shuffle.js'></script>
	<script type='text/javascript' src='js/word-count.js'></script>
	<script type='text/javascript' src='js/init-cloud.js'></script>
	<script type='text/javascript' src='js/remove-words.js'></script>
	<script type='text/javascript' src='js/set-font-size.js'></script>
	<script type='text/javascript' src='js/hsl-to-rgb.js'></script>
	<script type='text/javascript' src='js/get-hex.js'></script>
	<script type='text/javascript' src='js/rgb-to-hex.js'></script>
	<script type='text/javascript' src='js/build-cloud-2.js'></script>
	<script type='text/javascript' src='js/script-main.js'></script>

	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">

	<style type="text/css">
		.grid-item {
			display: inline-block;
			border: 1px solid gray;
		}
		#progress-div, #status {
			display: none;
		}
		#cloud {
			width: 100%;
		}
		.spacer-sm {
			height: 20px;
		}
		.spacer-lg {
			height: 35px;
		}
	</style>
</head>

<body>
	<div class='container text-center'>
		<div class='row'><div class='col-md-12'>
			<h1>Tweet Cloud</h1>
		</div></div>
		
		<div class='row'><div class='col-md-12 spacer-sm'></div></div>
		
		<div class='row'>
			<form>
				<div class='col-md-5 col-md-offset-3'>
					<input id='query-input' class='form-control' name='query' type='text' placeholder='search query'></input>
				</div>

				<div class='col-md-1 text-right'>
					<button id='button' class='btn btn-primary'>&nbsp; Go! &nbsp;</button>
				</div>
			</form>
		</div>

		<div class='row'><div class='col-md-12 spacer-sm'></div></div>

		<div class='row'><div class='col-md-6 col-md-offset-3'>
			<div id='progress-div' class="progress">
  				<div id="progress" class="progress-bar" role="progressbar" style="width: 0"></div>
			</div>
		</div></div>

		<div class='row'><div class='col-md-6 col-md-offset-3'>
  			<span id='status'>Status</span>
		</div></div>
		
		<div class='row'><div class='col-md-12 spacer-lg'></div></div>
		
		<div class='row'><div class='col-md-12'>
			<canvas id='cloud'></canvas>
		</div></div>
	</div>
</body>
</html>