import React from "react";

const page = () => {
	return (
		<main className="h-fit w-full p-6 py-16 lg:py-40 lg:px-64 text-justify">
			<h1 className="text-2xl md:text-5xl text-center font-bold mb-10">
				MEETUP - Legal Notice
			</h1>

			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					1. Introduction
				</h2>
				<p className="text-base md:text-xl">
					Welcome to <b>MEETUP</b>, an event listing website that
					allows users to create, view, and participate in various
					events. By using our services, you agree to comply with the
					terms and conditions set forth in these legal notices.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					2. Website Information
				</h2>
				<p className="text-base md:text-xl">
					<b>Website name:</b> MEETUP
					<br />
					<b>Publication Director:</b> Kyllian Vibancos
					<br />
					<b>Hosting Provider:</b> Vercel, Heroku
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					3. Terms of Use
				</h2>
				<p className="text-base md:text-xl">
					By accessing and using the MEETUP website, you agree to
					comply with our terms and conditions of use, as well as any
					other policies and guidelines that we may post on the
					website from time to time. If you do not agree with these
					terms, please refrain from using our website.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					4. Intellectual Property
				</h2>
				<p className="text-base md:text-xl">
					The content of the website, including but not limited to
					text, images, logos, graphics, videos, and software, is the
					property of the Publisher or its licensors and is protected
					by copyright and other intellectual property laws. You may
					not use, reproduce, or distribute any content from the
					website without prior written consent from the Publisher.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					5. Personal Data
				</h2>
				<p className="text-base md:text-xl">
					The collection and use of personal data are governed by our{" "}
					<a href="/privacy-policy">Privacy Policy</a>, which outlines
					how we collect, process, and protect your information. By
					using the website, you consent to the collection and
					processing of your personal data as described in our Privacy
					Policy.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					6. Liability
				</h2>
				<p className="text-base md:text-xl">
					The Publisher makes every effort to ensure that the
					information provided on the website is accurate and
					up-to-date. However, we cannot guarantee the completeness or
					accuracy of the content. The Publisher shall not be held
					liable for any direct or indirect damages resulting from the
					use of the website, including errors, omissions, or
					interruptions in service.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					7. External Links
				</h2>
				<p className="text-base md:text-xl">
					The website may contain links to third-party websites. These
					external links are provided for your convenience and do not
					imply an endorsement or responsibility for the content of
					those sites. The Publisher is not liable for the content or
					privacy practices of external websites.
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					8. Applicable Law and Dispute Resolution
				</h2>
				<p className="text-base md:text-xl">
					These legal notices are governed by the laws of [Insert
					Country]. Any disputes arising from the use of the website
					or related services will be resolved through the courts of
					[Insert Jurisdiction, e.g., New York, USA].
				</p>
			</section>
			<section>
				<h2 className="text-xl md:text-3xl my-10 font-bold underline">
					9. Modifications to the Legal Notice
				</h2>
				<p className="text-base md:text-xl">
					The Publisher reserves the right to modify these legal
					notices at any time. Any changes will be posted on this
					page, and the effective date will be updated accordingly. It
					is your responsibility to review this page periodically for
					updates.
				</p>
			</section>
		</main>
	);
};

export default page;
