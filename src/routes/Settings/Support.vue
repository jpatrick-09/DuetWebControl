		<style>
		.btns {
			margin: 30px 50px 30px 50px;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			}

		.text {
				font-size: 18px;
				font-family: Verdana, Geneva, Tahoma, sans-serif;
				}
		p {
			padding: 15px 7px 7px 0;
		}
			</style>

	<template>
		<v-content>
			
		<v-container>
		
			<v-row
			:align="center"
			:justify="justify-space-between"
			>
			<v-col
				cols="8"
				sm="4"
				md="10"
				class="text-center"
			>
			<img class="logo justify-top" src="../../assets/DWC_3DP_logo.png" width="150px">

				<v-card class="elevation-12">
				<v-toolbar color="secondary" dark>
					<v-toolbar-title>We're Happy to Help!</v-toolbar-title>
					<v-spacer></v-spacer>
				</v-toolbar>
				<v-card-text>
					<v-row align="center">
						<p class="text">If you encounter any issues, We encourage you to look through the documentation on our support portal.  If you don't find the answer you're looking for, feel free to use the link at the bottom of any page to submit a ticket once you're there.</p>

					</v-row>
					<v-row align-content="center" justify="center">
						<v-btn class="btns" large outlined color="secondary" href='https://www.3dplatform.com/Special-Pages/duet-support' target="_blank">Visit Our Support Portal</v-btn>
						<v-btn class="btns" large outlined color="secondary" href='https://www.3dplatform.com/Special-Pages/duet-spare' target="_blank">Purchase Spare Parts</v-btn>
					</v-row>
				</v-card-text>
				</v-card>
			</v-col>
			</v-row>
		</v-container>
		</v-content>
	</template>

	<script>
	export default {
		props: {
		source: String,
		},
	}
	</script>