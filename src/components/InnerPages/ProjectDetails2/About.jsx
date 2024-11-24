import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function About() {
	useEffect(() => {
		parallaxie('.back-image.parallaxie', 0.4);
	}, []);

	return (
		<section className="section-padding">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="cont">
							<h3 className="mb-15">About the Project.</h3>
							<p>Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
							<div className="info d-flex mt-50">
								<div className="item mr-50">
									<h6 className="fz-16">Category</h6>
									<span className="sub-title ls1">Digital Design</span>
								</div>
								<div className="item mr-50">
									<h6 className="fz-16">Customer</h6>
									<span className="sub-title ls1">ThemesCamp</span>
								</div>
								<div className="item">
									<h6 className="fz-16">Date</h6>
									<span className="sub-title ls1">August 6, 2020</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="back-image bg-img parallaxie mt-100" data-background="/dark/assets/imgs/works/projects/2/2.jpg"></div>
		</section>
	)
}

export default About