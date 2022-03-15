import React from 'react'
import './Hom.css'

class Hom extends React.Component{
    render(){
        return(
	<div class="container">
		<div class="nav">
			<div class="logo">AirBnb</div>
		<div>
			<span>Products</span>
			<span class="active">About Us</span>
			<span>Contact Us</span>
		</div>
		</div>
		<div class="about-us">
			<div class="who-we-are">
				<h3>Who we are</h3>
				<span>AASTU Student</span>
			</div>
			<div class="cards">
				<div class="card">
					<div class="card-img card-img1"></div>
					<div class="card-body">
						<h3>Fentahun</h3>
						<span>Student</span>
						<p>AASTU Student</p>
					</div>
					</div>
			
			
			<div class="card">
					<div class="card-img card-img2"></div>
					<card class="card-body">
						<h3>Esubalew</h3>
						<span>Student</span>
						<p>AASTU Student</p>
					</card>
				</div>
			
			<div class="card">
					<div class="card-img card-img3"></div>
					<card class="card-body">
						<h3>Eyoel A</h3>
						<span>Student</span>
						<p>AASTU Student</p>
					</card>
				</div>
			
			<div class="card">
					<div class="card-img card-img4"></div>
					<card class="card-body">
						<h3>Eyoel Z</h3>
						<span>Student</span>
						<p>AASTU Student</p>
					</card>
				</div>
		
			
		</div>

	<div class="social-media">
				<i class="fa fa-github" style= {{fontSize:"24px"}}></i>
			<i class="fa fa-linkedin" style= {{fontSize:"24px"}}></i>
		<i class="fa fa-twitter" style= {{fontSize:"24px"}}></i>
		<i class="fa fa-facebook" style= {{fontSize:"24px"}}></i>
			</div>
	</div>

         </div>
        );
    }
}
export default Hom;